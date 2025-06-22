// Analytics utility that respects cookie preferences

export const trackEvent = (eventName, properties = {}) => {
  // Check if user has consented to analytics cookies
  const consent = localStorage.getItem('cookieConsent')
  
  if (!consent) {
    console.log('Analytics tracking skipped - no cookie consent')
    return
  }
  
  try {
    const preferences = JSON.parse(consent)
    
    if (!preferences.analytics) {
      console.log('Analytics tracking skipped - user opted out')
      return
    }
    
    // Only track if user has consented to analytics
    console.log('Analytics Event:', eventName, properties)
    
    // Here you would integrate with your analytics service
    // For example: Google Analytics, Mixpanel, etc.
    // gtag('event', eventName, properties)
    // mixpanel.track(eventName, properties)
    
  } catch (error) {
    console.error('Error parsing cookie preferences:', error)
  }
}

export const trackPageView = (page) => {
  trackEvent('page_view', { page })
}

export const trackProfileView = (username) => {
  trackEvent('profile_view', { username })
}

export const trackLinkClick = (platform, url) => {
  trackEvent('link_click', { platform, url })
}

export const trackSignup = (method = 'email') => {
  trackEvent('user_signup', { method })
}

export const trackLogin = (method = 'email') => {
  trackEvent('user_login', { method })
}

export const trackProfileUpdate = () => {
  trackEvent('profile_update')
}

export const trackLinkAdd = (platform) => {
  trackEvent('link_add', { platform })
}

export const trackTemplateChange = (template) => {
  trackEvent('template_change', { template })
}