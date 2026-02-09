@echo off
setlocal enabledelayedexpansion

:: Ensure we are in the script's directory
cd /d "%~dp0"

echo ==========================================
echo   NFC Bridge - Windows SEA Builder
echo ==========================================
echo.

:: Ensure directories exist
if not exist "dist-final" mkdir "dist-final"
if not exist "dist-bin" mkdir "dist-bin"

echo [1/4] Installing dependencies...
call npm install

echo.
echo [2/4] Bundling script with esbuild...
call npm run dist:bridge

if %ERRORLEVEL% NEQ 0 exit /b %ERRORLEVEL%

echo.
echo [3/4] Generating SEA Blob...
call npm run sea:prep

if %ERRORLEVEL% NEQ 0 exit /b %ERRORLEVEL%

echo.
echo [4/4] Injecting SEA into executable...
del /F /Q "dist-bin\nfc-scanner-win.exe" 2>nul
call npm run sea:win

if %ERRORLEVEL% NEQ 0 exit /b %ERRORLEVEL%

echo.
echo [5/5] Collecting native assets...
if not exist "dist-bin\node_modules" mkdir "dist-bin\node_modules"

echo    - Copying nfc-pcsc...
xcopy /E /I /Y "node_modules\nfc-pcsc" "dist-bin\node_modules\nfc-pcsc" > nul
echo    - Copying node-notifier...
xcopy /E /I /Y "node_modules\node-notifier" "dist-bin\node_modules\node-notifier" > nul
echo    - Copying bindings...
xcopy /E /I /Y "node_modules\bindings" "dist-bin\node_modules\bindings" > nul
echo    - Copying @pokusew (Native Core)...
if not exist "dist-bin\node_modules\@pokusew" mkdir "dist-bin\node_modules\@pokusew"
xcopy /E /I /Y "node_modules\@pokusew\pcsclite" "dist-bin\node_modules\@pokusew\pcsclite" > nul

echo.
echo ==========================================
echo   Build complete! 
echo   Executable: dist-bin/nfc-scanner-win.exe
echo ==========================================
echo.
pause
