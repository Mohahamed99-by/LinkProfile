const { z } = require('zod');

// User registration validation
const registerSchema = z.object({
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(50, 'Username must be less than 50 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  email: z.string()
    .email('Invalid email address'),
  password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .max(100, 'Password must be less than 100 characters')
});

// User login validation
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required')
});

// Profile update validation
const profileUpdateSchema = z.object({
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(50, 'Username must be less than 50 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')
    .optional(),
  bio: z.string()
    .max(500, 'Bio must be less than 500 characters')
    .optional(),
  theme: z.enum(['light', 'dark']).optional(),
  template: z.enum(['classic', 'modern', 'minimal', 'gradient', 'neon', 'cosmic', 'nature']).optional()
});

// Social link validation
const socialLinkSchema = z.object({
  platform_name: z.string()
    .min(1, 'Platform name is required')
    .max(50, 'Platform name must be less than 50 characters'),
  url: z.string()
    .url('Invalid URL format')
    .max(255, 'URL must be less than 255 characters'),
  icon: z.string()
    .max(100, 'Icon must be less than 100 characters')
    .optional()
});

// Validation middleware
const validate = (schema) => {
  return (req, res, next) => {
    try {
      const validatedData = schema.parse(req.body);
      req.validatedData = validatedData;
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Validation failed',
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      }
      next(error);
    }
  };
};

module.exports = {
  registerSchema,
  loginSchema,
  profileUpdateSchema,
  socialLinkSchema,
  validate
}; 