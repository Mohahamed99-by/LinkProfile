const axios = require('axios');

async function debugLogin() {
  try {
    console.log('🔍 Testing login functionality...');
    
    // Test 1: Check server health
    try {
      const healthResponse = await axios.get('http://localhost:5000/api/health');
      console.log('✅ Server is running:', healthResponse.data);
    } catch (error) {
      console.log('❌ Server health check failed:', error.message);
      return;
    }

    // Test 2: Try to create a test user
    const testUser = {
      username: 'testuser123',
      email: 'test@example.com',
      password: 'password123'
    };

    console.log('\n📝 Creating test user...');
    try {
      const registerResponse = await axios.post('http://localhost:5000/api/auth/register', testUser);
      console.log('✅ Test user created:', registerResponse.data.message);
    } catch (error) {
      if (error.response?.status === 400 && error.response?.data?.error?.includes('already exists')) {
        console.log('ℹ️ Test user already exists, proceeding with login test...');
      } else {
        console.log('❌ Failed to create test user:', error.response?.data || error.message);
        return;
      }
    }

    // Test 3: Try to login with the test user
    console.log('\n🔐 Testing login...');
    try {
      const loginResponse = await axios.post('http://localhost:5000/api/auth/login', {
        email: testUser.email,
        password: testUser.password
      });
      console.log('✅ Login successful:', loginResponse.data.message);
      console.log('📋 User data:', {
        id: loginResponse.data.user.id,
        username: loginResponse.data.user.username,
        email: loginResponse.data.user.email
      });
      console.log('🔑 Token received:', loginResponse.data.token ? 'YES' : 'NO');
    } catch (error) {
      console.log('❌ Login failed:', error.response?.data || error.message);
      
      if (error.response?.data?.details) {
        console.log('📝 Validation errors:', error.response.data.details);
      }
    }

    // Test 4: Try login with wrong password
    console.log('\n🚫 Testing login with wrong password...');
    try {
      await axios.post('http://localhost:5000/api/auth/login', {
        email: testUser.email,
        password: 'wrongpassword'
      });
      console.log('❌ This should have failed!');
    } catch (error) {
      console.log('✅ Correctly rejected wrong password:', error.response?.data?.error);
    }

    // Test 5: Try login with non-existent user
    console.log('\n👻 Testing login with non-existent user...');
    try {
      await axios.post('http://localhost:5000/api/auth/login', {
        email: 'nonexistent@example.com',
        password: 'password123'
      });
      console.log('❌ This should have failed!');
    } catch (error) {
      console.log('✅ Correctly rejected non-existent user:', error.response?.data?.error);
    }

  } catch (error) {
    console.error('💥 Unexpected error:', error.message);
  }
}

debugLogin();