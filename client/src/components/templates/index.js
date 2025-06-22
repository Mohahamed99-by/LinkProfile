import ClassicTemplate from './ClassicTemplate'
import ModernTemplate from './ModernTemplate'
import MinimalTemplate from './MinimalTemplate'
import GradientTemplate from './GradientTemplate'
import NeonTemplate from './NeonTemplate'
import CosmicTemplate from './CosmicTemplate'
import NatureTemplate from './NatureTemplate'

export const templates = {
  classic: ClassicTemplate,
  modern: ModernTemplate,
  minimal: MinimalTemplate,
  gradient: GradientTemplate,
  neon: NeonTemplate,
  cosmic: CosmicTemplate,
  nature: NatureTemplate
}

export const templateOptions = [
  {
    id: 'classic',
    name: 'Classic',
    description: 'Enhanced professional design with floating elements and gradient effects',
    preview: '/api/placeholder/300/400',
    colors: ['#3B82F6', '#8B5CF6', '#EC4899'],
    features: ['Animated backgrounds', 'Gradient profiles', 'Hover effects']
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Advanced glassmorphism with dynamic mouse tracking and orbital animations',
    preview: '/api/placeholder/300/400',
    colors: ['#8B5CF6', '#EC4899', '#1F2937'],
    features: ['Mouse tracking', 'Glass effects', 'Orbital rings']
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Refined minimalist design with subtle animations and clean typography',
    preview: '/api/placeholder/300/400',
    colors: ['#FFFFFF', '#6B7280', '#E5E7EB'],
    features: ['Clean design', 'Subtle animations', 'Perfect typography']
  },
  {
    id: 'gradient',
    name: 'Gradient',
    description: 'Dynamic rainbow gradients with animated color transitions and shimmer effects',
    preview: '/api/placeholder/300/400',
    colors: ['#EC4899', '#8B5CF6', '#3B82F6'],
    features: ['Color transitions', 'Rainbow effects', 'Dynamic backgrounds']
  },
  {
    id: 'neon',
    name: 'Neon',
    description: 'Cyberpunk aesthetic with glitch effects, neon glows, and futuristic animations',
    preview: '/api/placeholder/300/400',
    colors: ['#00FFFF', '#FF1493', '#FFFF00'],
    features: ['Glitch effects', 'Neon glows', 'Cyberpunk style']
  },
  {
    id: 'cosmic',
    name: 'Cosmic',
    description: 'Space-themed design with starfields, nebula effects, and orbital animations',
    preview: '/api/placeholder/300/400',
    colors: ['#8B5CF6', '#EC4899', '#3B82F6'],
    features: ['Starfield background', 'Nebula effects', 'Cosmic animations']
  },
  {
    id: 'nature',
    name: 'Nature',
    description: 'Organic earth-inspired design with floating leaves and natural color palettes',
    preview: '/api/placeholder/300/400',
    colors: ['#10B981', '#059669', '#047857'],
    features: ['Floating leaves', 'Organic shapes', 'Earth tones']
  }
]

export {
  ClassicTemplate,
  ModernTemplate,
  MinimalTemplate,
  GradientTemplate,
  NeonTemplate,
  CosmicTemplate,
  NatureTemplate
}