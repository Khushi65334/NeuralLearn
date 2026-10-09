# NeuralLearn — turn this folder into a mobile app

This folder is your website split into 3 files (index.html, css/style.css,
js/script.js) plus the Capacitor config needed to wrap it into a real
Android/iOS app. Nothing about how the site looks or behaves has changed —
only the file structure.

## What you need installed first
- Node.js (download from nodejs.org, get the LTS version)
- Android Studio (for the Android app) and/or Xcode on a Mac (for iOS)

## Steps (run these in VS Code's terminal, inside this folder)

1. Open this folder in VS Code (File > Open Folder > pick "neurallearn-app")

2. Open the terminal in VS Code (Terminal > New Terminal) and run:
   npm install

3. Turn it into a Capacitor project:
   npx cap init "NeuralLearn" "com.neurallearn.app" --web-dir=.
   (press Enter to accept defaults if it asks anything)

4. Add the platform(s) you want:
   npm install @capacitor/android @capacitor/ios
   npx cap add android
   npx cap add ios

5. Every time you edit index.html / style.css / script.js, run:
   npx cap sync

6. Open and run the app:
   npx cap open android   (opens Android Studio, click the green Run button)
   npx cap open ios       (opens Xcode, only works on a Mac)

7. When you're ready to publish:
   - Android: Build > Generate Signed Bundle in Android Studio, upload the
     .aab file to Google Play Console ($25 one-time registration fee)
   - iOS: Product > Archive in Xcode, upload via App Store Connect
     (needs a $99/year Apple Developer account)

## App icon
Put a 1024x1024 png of your logo in this folder as icon.png, then run:
   npm install @capacitor/assets --save-dev
   npx capacitor-assets generate
This auto-generates every icon size both app stores require.
