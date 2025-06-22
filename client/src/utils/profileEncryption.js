// Profile URL Encryption/Decryption utilities
import CryptoJS from 'crypto-js'

// Secret key for encryption - في الإنتاج يجب تغيير هذا المفتاح
const SECRET_KEY = 'LinkProfile-Username-Encryption-2024-Change-In-Production'

/**
 * تشفير اسم المستخدم لإنشاء رابط مشفر
 * @param {string} username - اسم المستخدم
 * @returns {string} - اسم المستخدم المشفر
 */
export const encryptUsername = (username) => {
  try {
    if (!username) return ''
    
    // تشفير اسم المستخدم باستخدام AES
    const encrypted = CryptoJS.AES.encrypt(username, SECRET_KEY).toString()
    
    // تحويل إلى Base64 URL-safe
    const base64 = btoa(encrypted)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '')
    
    return base64
  } catch (error) {
    console.error('Error encrypting username:', error)
    return username // إرجاع اسم المستخدم الأصلي في حالة الخطأ
  }
}

/**
 * فك تشفير اسم المستخدم من الرابط المشفر
 * @param {string} encryptedUsername - اسم المستخدم المشفر
 * @returns {string} - اسم المستخدم الأصلي
 */
export const decryptUsername = (encryptedUsername) => {
  try {
    if (!encryptedUsername) return ''
    
    // استعادة Base64 من URL-safe format
    let base64 = encryptedUsername
      .replace(/-/g, '+')
      .replace(/_/g, '/')
    
    // إضافة padding إذا لزم الأمر
    while (base64.length % 4) {
      base64 += '='
    }
    
    // فك تشفير Base64
    const encrypted = atob(base64)
    
    // فك تشفير AES
    const decrypted = CryptoJS.AES.decrypt(encrypted, SECRET_KEY)
    const originalUsername = decrypted.toString(CryptoJS.enc.Utf8)
    
    return originalUsername
  } catch (error) {
    console.error('Error decrypting username:', error)
    return encryptedUsername // إرجاع اسم المستخدم المشفر في حالة الخطأ
  }
}

/**
 * إنشاء رابط بروفايل مشفر
 * @param {string} username - اسم المستخدم الأصلي
 * @returns {string} - رابط البروفايل المشفر
 */
export const createEncryptedProfileUrl = (username) => {
  const encryptedUsername = encryptUsername(username)
  return `/p/${encryptedUsername}`
}

/**
 * إنشاء رابط بروفايل مشفر كامل
 * @param {string} username - اسم المستخدم الأصلي
 * @param {string} baseUrl - الرابط الأساسي للموقع (اختياري)
 * @returns {string} - رابط البروفايل المشفر الكامل
 */
export const createFullEncryptedProfileUrl = (username, baseUrl = '') => {
  const encryptedUsername = encryptUsername(username)
  const fullBaseUrl = baseUrl || window.location.origin
  return `${fullBaseUrl}/p/${encryptedUsername}`
}

/**
 * التحقق من صحة اسم المستخدم المشفر
 * @param {string} encryptedUsername - اسم المستخدم المشفر
 * @returns {boolean} - true إذا كان اسم المستخدم صحيح
 */
export const isValidEncryptedUsername = (encryptedUsername) => {
  try {
    const decrypted = decryptUsername(encryptedUsername)
    return decrypted && decrypted.length > 0 && /^[a-zA-Z0-9_]+$/.test(decrypted)
  } catch {
    return false
  }
}

/**
 * إنشاء hash لاسم المستخدم للتحقق من سلامته
 * @param {string} username - اسم المستخدم
 * @returns {string} - hash اسم المستخدم
 */
export const createUsernameHash = (username) => {
  return CryptoJS.SHA256(username + SECRET_KEY).toString()
}

/**
 * التحقق من hash اسم المستخدم
 * @param {string} username - اسم المستخدم
 * @param {string} hash - hash المتوقع
 * @returns {boolean} - true إذا كان hash صحيح
 */
export const verifyUsernameHash = (username, hash) => {
  const expectedHash = createUsernameHash(username)
  return expectedHash === hash
}

/**
 * إنشاء QR Code لرابط البروفايل المشفر
 * @param {string} username - اسم المستخدم
 * @param {string} baseUrl - الرابط الأساسي (اختياري)
 * @returns {string} - رابط البروفايل المشفر للـ QR Code
 */
export const createEncryptedQRUrl = (username, baseUrl = '') => {
  return createFullEncryptedProfileUrl(username, baseUrl)
}

// Test the encryption in development
if (typeof window !== 'undefined' && window.location?.hostname === 'localhost') {
  console.log('🔒 Profile Encryption System Loaded')
  console.log('🔑 Using development encryption key')
  
  // Quick test
  const testUsername = 'testuser123'
  const encrypted = encryptUsername(testUsername)
  const decrypted = decryptUsername(encrypted)
  const profileUrl = createEncryptedProfileUrl(testUsername)
  
  console.log('👤 Original username:', testUsername)
  console.log('🔐 Encrypted username:', encrypted)
  console.log('🔓 Decrypted username:', decrypted)
  console.log('🔗 Encrypted profile URL:', profileUrl)
  
  if (decrypted === testUsername) {
    console.log('✅ Profile encryption system working correctly')
  } else {
    console.error('❌ Profile encryption system error')
  }
}