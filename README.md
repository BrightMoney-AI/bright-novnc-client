# noVNC Integration Setup for BrightCapitalApp

This guide outlines the steps to build the noVNC web client and integrate it into the BrightCapitalApp by placing the built files into the appropriate asset folders for Android and iOS.

---

## 🛠️ Build the noVNC Web Client

1. Navigate to your noVNC project directory and run:
   ```bash
   npm i
   ```

2. Now we need to build the project, so run:
   ```bash
   npm run build
   ```

3. Now put the content of the `dist` folder inside the `BrightCapitalApp/assets/noVNC/` and `BrightCapitalApp/android/app/src/main/assets/noVNC/`

4. Platform-specific setup:
   - **For iOS**: Put the `/assets/noVNC` folder path in the `Copy Bundle Resources` inside `Build Phases` and then build.
   - **For Android**: No need of folder references, directly start building in Android Studio.

5. Now the `index.html` can be accessed in the app inside webview with these paths:
   - **iOS**: `file://${RNFS.MainBundlePath}/noVNC/index.html`
   - **Android**: `file:///android_asset/noVNC/index.html`
