# LinkProfile - Your Personal Link Hub

A modern web application for creating beautiful personal link profiles. Share all your important social media and website links in one place with a clean, customizable design.

## 🚀 Features

- **User Authentication**: Secure sign up/login with JWT tokens
- **Profile Management**: Customize your profile with image, bio, and theme
- **Social Links**: Add, edit, and manage all your social media links
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Analytics**: Track profile views and link clicks
- **QR Code Generation**: Generate QR codes for easy sharing
- **Theme Customization**: Light and dark theme support
- **Real-time Updates**: Instant profile updates and link management

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MySQL** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Multer** - File uploads
- **Zod** - Input validation
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **React Icons** - Icon library

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **MySQL** (v8.0 or higher)
- **npm** or **yarn**

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone <repository-url>
cd social-links-tool
```

### 2. Install dependencies
```bash
# Install root dependencies
npm install

# Install all dependencies (backend + frontend)
npm run install-all
```

### 3. Set up the database
```bash
# Create a MySQL database
mysql -u root -p
CREATE DATABASE linkprofile_db;
```

### 4. Configure environment variables
```bash
# Copy the example environment file
cp server/env.example server/.env

# Edit the .env file with your configuration
nano server/.env
```

Required environment variables:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=linkprofile_db

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=7d

# CORS Configuration
CLIENT_URL=http://localhost:5173
```

### 5. Start the development servers
```bash
# Start both backend and frontend
npm run dev

# Or start them separately:
npm run server  # Backend on port 5000
npm run client  # Frontend on port 5173
```

### 6. Access the application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- API Health Check: http://localhost:5000/api/health

## 📁 Project Structure

```
social-links-tool/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── contexts/       # React contexts
│   │   ├── pages/          # Page components
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
├── server/                 # Node.js backend
│   ├── config/            # Database configuration
│   ├── middleware/        # Express middleware
│   ├── routes/            # API routes
│   ├── utils/             # Utility functions
│   ├── uploads/           # File uploads
│   ├── package.json
│   └── index.js
├── package.json           # Root package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (protected)

### Profile
- `GET /api/profile/:username` - Get public profile
- `PUT /api/profile` - Update profile (protected)
- `POST /api/profile/upload-image` - Upload profile image (protected)

### Social Links
- `GET /api/links` - Get user's links (protected)
- `POST /api/links` - Add new link (protected)
- `PUT /api/links/:id` - Update link (protected)
- `DELETE /api/links/:id` - Delete link (protected)
- `GET /api/links/platforms` - Get available platforms

### Analytics
- `GET /api/visits/:username` - Get visit analytics (protected)
- `GET /api/visits/:username/links` - Get link click analytics (protected)

## 🎨 Features in Detail

### User Authentication
- Secure registration and login
- JWT token-based authentication
- Password hashing with bcrypt
- Protected routes

### Profile Management
- Upload profile images
- Customize bio and username
- Theme selection (light/dark)
- Real-time profile updates

### Social Links
- Add unlimited social media links
- Support for popular platforms
- Custom link icons
- Link ordering and management

### Analytics
- Profile view tracking
- Link click analytics
- Unique visitor counting
- Recent activity monitoring

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface
- Fast loading times

## 🔒 Security Features

- JWT token authentication
- Password hashing with bcrypt
- Input validation with Zod
- CORS protection
- Rate limiting
- Helmet.js security headers
- SQL injection prevention

## 🚀 Deployment

### Backend Deployment
1. Set up a production MySQL database
2. Configure environment variables for production
3. Build and deploy to your preferred hosting service

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy the `dist` folder to your hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information

## 🎯 Roadmap

- [ ] Advanced analytics dashboard
- [ ] Custom domain support
- [ ] Link scheduling
- [ ] Team collaboration features
- [ ] API rate limiting improvements
- [ ] Mobile app development

---

**Built with ❤️ using modern web technologies** 