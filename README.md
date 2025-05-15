# Web & Mobile Systems Portfolio App

This is a Cordova-based mobile application showcasing my Web and Mobile Systems activities. 

---

## Prerequisites

Before running the app, install the following tools:

1. **Node.js and npm** (v16 or later)  
   [Download Node.js](https://nodejs.org/)  
   Verify installation:
   ```bash
   node -v
   npm -v
   ```

2. **Git**  
   [Download Git](https://git-scm.com/)  
   Verify installation:
   ```bash
   git --version
   ```

3. **Java Development Kit (JDK)** (v11 or later)  
   [Download OpenJDK](https://adoptium.net/) or [Oracle JDK](https://www.oracle.com/java/)  
   Verify installation:
   ```bash
   java -version
   ```

4. **Android Studio** (for Android development)  
   [Download Android Studio](https://developer.android.com/studio)  
   - Install the Android SDK via SDK Manager (API 34 or latest recommended).
   - Set environment variables:
     - **Windows**:
       ```cmd
       setx ANDROID_HOME "C:\Users\YourUser\AppData\Local\Android\Sdk"
       setx Path "%Path%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\build-tools"
       ```
     - **macOS/Linux** (add to `~/.bashrc` or `~/.zshrc`):
       ```bash
       export ANDROID_HOME=$HOME/Library/Android/sdk
       export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$ANDROID_HOME/build-tools
       source ~/.bashrc
       ```
   - Verify:
     ```bash
     adb --version
     ```

5. **Cordova CLI**  
   Install globally:
   ```bash
   npm install -g cordova
   ```
   Verify installation:
   ```bash
   cordova -v
   ```

---

## Getting Started

Follow these steps to clone, set up, build, and run the app.

### 1. Clone the Repository

```bash
git clone https://github.com/MicaellaSalili/WebMobileActivitiesApp.git
cd WebMobileActivitiesApp
```

### 2. Check Cordova Requirements

Verify that all dependencies are installed:
```bash
cordova requirements
```
If any requirements are missing (e.g., Android SDK, JDK), follow the error messages to install them.

### 3. Add the Android Platform

```bash
cordova platform add android
```
Verify:
```bash
cordova platform ls
```

### 4. Install Plugins

The app uses the Cordova Device plugin to display device information. Install it:
```bash
cordova plugin add cordova-plugin-device
```
Verify:
```bash
cordova plugin ls
```

### 5. Build the App

Build the Android APK:
```bash
cordova build android --release
```
The APK will be generated at:
```
platforms/android/app/build/outputs/apk/release/app-release.apk
```

### 6. Test the App

You can test the app on an emulator or physical device.

#### Option 1: Android Emulator

- Open Android Studio and go to Device Manager.
- Create a virtual device (e.g., Pixel 6, API 34).
- Run the app:
  ```bash
  cordova emulate android
  ```

#### Option 2: Physical Device

- Enable Developer Mode and USB Debugging on your Android device.
- Connect your device via USB.
- Run:
  ```bash
  cordova run android
  ```

---

## Notes

- Make sure all environment variables are set correctly for Android SDK and JDK.
- If you encounter build errors, check the Cordova and plugin documentation for troubleshooting.

---