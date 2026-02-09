#!/bin/bash

# ========================================================
# NFC Bridge Builder for macOS (Apple Silicon M1/M2/M3/M4)
# Using Node.js 25+ SEA (Single Executable Application)
# ========================================================

echo "🍎 Starting SEA Build for macOS ARM64..."

# Ensure directories exist
mkdir -p dist-final
mkdir -p dist-bin

# 1. Install dependencies
echo "📦 Installing Dependencies..."
npm install

# 2. Bundle script with esbuild
echo "🔨 Bundling script with esbuild..."
npm run dist:bridge

# 3. Generate SEA Blob
echo "🔗 Generating SEA Blob..."
npm run sea:prep

# 4. Prepare Mac Binary (Handling Universal Binaries)
echo "🚀 Preparing Mac binary..."
rm -f dist-bin/nfc-bridge-mac

# Official Node.js for Mac often has both x64 and arm64 slices.
# postject fails if it finds two sentinels. We must extract the arm64 slice.
NODE_PATH=$(which node)
echo "   - Using node from: $NODE_PATH"

if lipo -info "$NODE_PATH" | grep -q "Architectures in the fat file"; then
    echo "   - Universal binary detected. Extracting arm64 slice..."
    lipo -thin arm64 "$NODE_PATH" -output dist-bin/nfc-bridge-mac
else
    echo "   - Thin binary detected. Copying directly..."
    cp "$NODE_PATH" dist-bin/nfc-bridge-mac
fi

# 5. Inject SEA into executable
echo "🚀 Injecting SEA into executable..."
npm run sea:mac

# 5.5 Code Sign (Mandatory for Apple Silicon)
echo "🔒 Ad-hoc code signing..."
codesign -f -s - dist-bin/nfc-bridge-mac

# 6. Build native modules for ARM64
echo "🔧 Ensuring native modules are ready..."
npm rebuild --arch=arm64

# 7. Collection of native assets
echo "📂 Collecting native assets..."
mkdir -p dist-bin/node_modules

# Copy native dependencies
echo "   - Copying nfc-pcsc..."
cp -R node_modules/nfc-pcsc dist-bin/node_modules/
echo "   - Copying node-notifier..."
cp -R node_modules/node-notifier dist-bin/node_modules/
echo "   - Copying bindings..."
cp -R node_modules/bindings dist-bin/node_modules/
echo "   - Copying @pokusew/pcsclite (Native Core)..."
mkdir -p dist-bin/node_modules/@pokusew
cp -R node_modules/@pokusew/pcsclite dist-bin/node_modules/@pokusew/

# 8. Finalize permissions
chmod +x dist-bin/nfc-bridge-mac

echo ""
echo "=========================================="
echo "   ✅ Build Complete!"
echo "   Executable: dist-bin/nfc-bridge-mac"
echo "   Dependencies: dist-bin/node_modules/"
echo "=========================================="
echo "⚠️  NOTE: You must keep the 'node_modules' folder next to the binary."
