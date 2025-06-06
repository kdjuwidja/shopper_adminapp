// API Configuration
export const API_CONFIG = {
  // Core API URLs
  CORE_API_URL: import.meta.env.VITE_CORE_API_URL || 'http://localhost:8080',
  AUTH_API_URL: import.meta.env.VITE_AUTH_API_URL || 'http://localhost:9096',
  FRONTEND_URL: import.meta.env.VITE_FRONTEND_URL || 'http://localhost:3001', // Note: Changed port to 3001 for admin
  
  // OAuth Configuration
  CLIENT_ID: import.meta.env.VITE_CLIENT_ID || '',
  CLIENT_SECRET: import.meta.env.VITE_CLIENT_SECRET || '',
  
  // Base Path Configuration
  BASE_PATH: import.meta.env.VITE_BASE_PATH || '/admin',
  
  // Core Service Endpoints
  ENDPOINTS: {
    // Auth Endpoints
    AUTHORIZE: '/auth/authorize',
    TOKEN: '/auth/token',
    
    // User Profile Endpoints
    USER_PROFILE: '/core/v2/user',
  },
} as const;

// Helper function to get the full auth URL for a given path
export function getAuthUrl(path: string): string {
  return `${API_CONFIG.AUTH_API_URL}${path}`;
}

// Helper function to get the callback URL
export function getCallbackUrl(): string {
  return `${API_CONFIG.FRONTEND_URL}${API_CONFIG.BASE_PATH}/callback`;
} 