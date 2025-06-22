// Utility functions for handling cookie consent data

export const defaultCookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false
}

export const allAcceptedPreferences = {
  necessary: true,
  analytics: true,
  marketing: true,
  functional: true
}

/**
 * Safely parse cookie consent from localStorage
 * Handles both old string format and new JSON format
 */
export const parseCookieConsent = (consentString) => {
  if (!consentString) {
    return null
  }

  try {
    // Try to parse as JSON first (new format)
    const parsed = JSON.parse(consentString)
    
    // Validate the parsed object has the expected structure
    if (typeof parsed === 'object' && parsed !== null && 
        typeof parsed.necessary === 'boolean') {
      return parsed
    } else {
      throw new Error('Invalid cookie consent structure')
    }
  } catch (error) {
    // Handle old format (simple string values)
    console.log('Converting legacy cookie format:', consentString)
    
    if (consentString === 'accepted' || consentString === 'true') {
      return allAcceptedPreferences
    } else if (consentString === 'rejected' || consentString === 'false') {
      return defaultCookiePreferences
    } else {
      // Unknown format
      console.warn('Unknown cookie consent format:', consentString)
      return null
    }
  }
}

/**
 * Safely save cookie consent to localStorage
 */
export const saveCookieConsent = (preferences) => {
  try {
    const consentString = JSON.stringify(preferences)
    localStorage.setItem('cookieConsent', consentString)
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    return true
  } catch (error) {
    console.error('Failed to save cookie consent:', error)
    return false
  }
}

/**
 * Clear all cookie consent data
 */
export const clearCookieConsent = () => {
  try {
    localStorage.removeItem('cookieConsent')
    localStorage.removeItem('cookieConsentDate')
    return true
  } catch (error) {
    console.error('Failed to clear cookie consent:', error)
    return false
  }
}

/**
 * Get cookie consent with automatic migration from old format
 */
export const getCookieConsent = () => {
  const consentString = localStorage.getItem('cookieConsent')
  const parsed = parseCookieConsent(consentString)
  
  if (parsed && consentString !== JSON.stringify(parsed)) {
    // Migration needed - save in new format
    saveCookieConsent(parsed)
  }
  
  return parsed
}

/**
 * Check if user has given consent for a specific category
 */
export const hasConsentFor = (category) => {
  const consent = getCookieConsent()
  return consent ? consent[category] === true : false
}

/**
 * Check if user has any consent recorded
 */
export const hasAnyConsent = () => {
  return getCookieConsent() !== null
}