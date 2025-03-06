# Deployment Guide for Islamic App (Windows)

## Prerequisites for Windows

1. Install Node.js and npm:
   - Download the Windows installer from https://nodejs.org
   - Run the installer and follow the setup wizard
   - Ensure to check the box that says "Automatically install the necessary tools"
   - Verify installation by opening PowerShell and running:
     ```powershell
     node --version
     npm --version
     ```

2. Install Git for Windows:
   - Download from https://git-scm.com/download/windows
   - During installation, choose "Use Git from the Windows Command Prompt"

## Build the Application

Before deploying, build the application in production mode:

1. Open PowerShell in your project directory
2. Run the build command:
   ```powershell
   ng build --configuration=production
   ```

This will create a `www` folder with your production-ready application.

## Deployment Options

### 1. Firebase Hosting (Recommended)

1. Install Firebase CLI globally:
   ```powershell
   npm install -g firebase-tools
   ```

2. Login to Firebase (this will open your default browser):
   ```powershell
   firebase login
   ```

3. Initialize Firebase in your project:
   ```powershell
   firebase init
   ```
   When prompted:
   - Use spacebar to select "Hosting"
   - Choose your Firebase project
   - For public directory, type: www
   - Configure as single-page app: Yes
   - Set up automatic builds: No

4. Deploy your application:
   ```powershell
   firebase deploy
   ```

### 2. GitHub Pages

1. Create a GitHub repository for your project

2. Install angular-cli-ghpages:
   ```powershell
   ng add angular-cli-ghpages
   ```

3. Deploy to GitHub Pages:
   ```powershell
   ng deploy --base-href=/your-repo-name/
   ```

### 3. Netlify

1. Create a Netlify account at https://www.netlify.com

2. Install Netlify CLI (optional):
   ```powershell
   npm install -g netlify-cli
   ```

3. Deploy using Netlify UI:
   - Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
   - In Netlify dashboard:
     - Click "New site from Git"
     - Choose your repository
     - Build command: `ng build --configuration=production`
     - Publish directory: `www`

## Environment Configuration

1. Open `src/environments/environment.prod.ts` in your code editor
2. Configure your production environment variables with the following settings:
   ```typescript
   export const environment = {
     production: true,
     apiUrl: 'https://your-api-domain.com/api',  // Your production API endpoint
     firebase: {  // If using Firebase services
       apiKey: 'your-api-key',
       authDomain: 'your-app.firebaseapp.com',
       projectId: 'your-project-id',
       storageBucket: 'your-app.appspot.com',
       messagingSenderId: 'your-sender-id',
       appId: 'your-app-id'
     },
     auth: {  // Authentication settings
       tokenExpiryTime: 3600,  // in seconds
       refreshTokenEnabled: true
     },
     features: {  // Feature flags for production
       enablePushNotifications: true,
       enableOfflineMode: true,
       enableAnalytics: true
     },
     caching: {  // Caching configuration
       maxAge: 86400,  // Cache duration in seconds
       enableServiceWorker: true
     }
   };
   ```

   Important Notes:
   - Never commit sensitive values directly to the repository
   - Use environment variables or secure secret management
   - Update API endpoints to match your production infrastructure
   - Configure feature flags according to production requirements
   - Adjust caching settings based on your application needs

## Windows-Specific Troubleshooting

1. **Path Too Long Error**:
   - Enable long paths in Git:
     ```powershell
     git config --system core.longpaths true
     ```
   - Or enable long paths in Windows (Run as Administrator):
     ```powershell
     New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" -Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force
     ```

2. **Permission Issues**:
   - Run PowerShell as Administrator when installing global packages
   - Check npm cache and permissions:
     ```powershell
     npm cache clean --force
     ```

3. **Node Sass Issues**:
   - If you encounter node-sass errors:
     ```powershell
     npm rebuild node-sass
     ```

## Post-Deployment

1. Verify that all routes work correctly
2. Test authentication flows
3. Check if all API endpoints are properly configured for production
4. Ensure PWA features are working as expected

## SSL/HTTPS

All recommended platforms (Firebase, GitHub Pages, Netlify) provide SSL certificates by default.

## Support

For deployment issues:
- Firebase: https://firebase.google.com/support
- GitHub Pages: https://docs.github.com/en/pages
- Netlify: https://www.netlify.com/support

For Windows-specific issues:
- Node.js on Windows: https://nodejs.org/en/download/
- Git for Windows: https://gitforwindows.org/