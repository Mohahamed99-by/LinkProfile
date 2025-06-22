import { useState, useEffect } from 'react'
import { 
  getCookieConsent, 
  saveCookieConsent, 
  clearCookieConsent, 
  defaultCookiePreferences,
  hasAnyConsent,
  hasConsentFor 
} from '../utils/cookieUtils'

export const useCookies = () => {
  const [cookiePreferences, setCookiePreferences] = useState(defaultCookiePreferences)
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    // Load cookie preferences using safe utility function
    const preferences = getCookieConsent()
    if (preferences) {
      setCookiePreferences(preferences)
      setHasConsent(true)
    } else {
      setCookiePreferences(defaultCookiePreferences)
      setHasConsent(false)
    }
  }, [])

  const updateCookiePreferences = (newPreferences) => {
    setCookiePreferences(newPreferences)
    saveCookieConsent(newPreferences)
    setHasConsent(true)
  }

  const clearCookieConsentData = () => {
    clearCookieConsent()
    setCookiePreferences(defaultCookiePreferences)
    setHasConsent(false)
  }

  const canUseAnalytics = () => {
    return hasConsent && cookiePreferences.analytics
  }

  const canUseMarketing = () => {
    return hasConsent && cookiePreferences.marketing
  }

  const canUseFunctional = () => {
    return hasConsent && cookiePreferences.functional
  }

  const setCookie = (name, value, days = 30, category = 'necessary') => {
    // Only set cookie if user has consented to this category
    if (category === 'necessary' || cookiePreferences[category]) {
      const expires = new Date()
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000))
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`
    }
  }

  const getCookie = (name) => {
    const nameEQ = name + "="
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }

  const deleteCookie = (name) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`
  }

  return {
    cookiePreferences,
    hasConsent,
    updateCookiePreferences,
    clearCookieConsent: clearCookieConsentData,
    canUseAnalytics,
    canUseMarketing,
    canUseFunctional,
    setCookie,
    getCookie,
    deleteCookie
  }
}