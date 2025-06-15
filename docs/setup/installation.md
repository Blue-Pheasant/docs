---
sidebar_position: 1
---

# Hướng dẫn cài đặt môi trường phát triển

## 🎯 Tổng quan

Dự án JLPT Learning App sử dụng kiến trúc microservices với Flutter cho mobile app và ABP Framework với .NET Core 9 cho backend.

## 📋 Yêu cầu hệ thống

### Môi trường phát triển chung
- **OS**: Windows 10/11, macOS 10.15+, Ubuntu 18.04+
- **RAM**: Tối thiểu 8GB (khuyến nghị 16GB)
- **Storage**: 50GB dung lượng trống
- **Internet**: Kết nối ổn định để download dependencies

### Git & Version Control
- **Git**: v2.30+
- **GitHub account**: Để access repositories
- **Git LFS**: Cho large files (audio, images)

## 📱 Cài đặt Flutter Development

### 1. Cài đặt Flutter SDK

#### Windows
```bash
# Download Flutter SDK
# Tải từ: https://docs.flutter.dev/get-started/install/windows

# Giải nén vào C:\flutter
# Thêm C:\flutter\bin vào PATH environment variable

# Kiểm tra cài đặt
flutter doctor
```

#### macOS
```bash
# Sử dụng Homebrew
brew install --cask flutter

# Hoặc download manual từ official site
# https://docs.flutter.dev/get-started/install/macos

# Kiểm tra cài đặt
flutter doctor
```

#### Linux
```bash
# Download Flutter SDK
wget https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.16.0-stable.tar.xz

# Giải nén
tar xf flutter_linux_3.16.0-stable.tar.xz

# Thêm vào PATH
echo 'export PATH="$PATH:`pwd`/flutter/bin"' >> ~/.bashrc
source ~/.bashrc

# Kiểm tra cài đặt
flutter doctor
```

### 2. Cài đặt Android Development

#### Android Studio
```bash
# Download và cài đặt Android Studio
# https://developer.android.com/studio

# Cài đặt Android SDK (API 21+)
# Cài đặt Android Virtual Device (AVD)
```

#### Android SDK Command Line Tools
```bash
# Trong Android Studio:
# Tools -> SDK Manager -> SDK Tools
# ✓ Android SDK Command-line Tools
# ✓ Android SDK Build-Tools
# ✓ Android SDK Platform-Tools
```

### 3. Cài đặt iOS Development (chỉ macOS)

#### Xcode
```bash
# Cài đặt từ App Store
# Xcode 14.0+ required

# Cài đặt command line tools
sudo xcode-select --install

# Accept license
sudo xcodebuild -license accept

# Cài đặt iOS Simulator
# Xcode -> Preferences -> Components
```

#### CocoaPods
```bash
# Cài đặt CocoaPods cho dependency management
sudo gem install cocoapods
```

### 4. IDE Setup

#### VS Code (Khuyến nghị)
```bash
# Cài đặt extensions:
# - Flutter
# - Dart
# - Flutter Intl
# - Dart Data Class Generator
# - Better Comments
# - GitLens
```

#### Android Studio (Alternative)
```bash
# Cài đặt plugins:
# - Flutter plugin
# - Dart plugin
```

### 5. Flutter Dependencies

#### Global packages
```bash
# Cài đặt các tool hữu ích
flutter pub global activate flutterfire_cli
flutter pub global activate flutter_launcher_icons
flutter pub global activate build_runner
```

### 6. Kiểm tra setup
```bash
# Chạy flutter doctor
flutter doctor -v

# Kết quả mong muốn:
# ✓ Flutter (Channel stable, 3.16.0)
# ✓ Android toolchain
# ✓ iOS toolchain (macOS only)
# ✓ Chrome
# ✓ VS Code
```

## 🔧 Cài đặt Backend Development (.NET Core)

### 1. .NET Core SDK

#### Windows
```bash
# Download từ: https://dotnet.microsoft.com/download
# Cài đặt .NET 9.0 SDK

# Kiểm tra cài đặt
dotnet --version
dotnet --list-sdks
```

#### macOS
```bash
# Sử dụng Homebrew
brew install --cask dotnet

# Hoặc download từ official site
# Kiểm tra cài đặt
dotnet --version
```

#### Linux
```bash
# Ubuntu/Debian
wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
sudo apt-get update
sudo apt-get install -y dotnet-sdk-9.0

# Kiểm tra cài đặt
dotnet --version
```

### 2. ABP Framework CLI

```bash
# Cài đặt ABP CLI
dotnet tool install -g Volo.Abp.Cli

# Cập nhật lên version mới nhất
dotnet tool update -g Volo.Abp.Cli

# Kiểm tra cài đặt
abp --version
```

### 3. Database Setup

#### PostgreSQL 17

##### Windows
```bash
# Download từ: https://www.postgresql.org/download/windows/
# Cài đặt với password cho user postgres

# Tạo database cho development
psql -U postgres
CREATE DATABASE jlpt_dev;
CREATE USER jlpt_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE jlpt_dev TO jlpt_user;
```

##### macOS
```bash
# Sử dụng Homebrew
brew install postgresql@17
brew services start postgresql@17

# Tạo database
createdb jlpt_dev
```

##### Linux
```bash
# Ubuntu/Debian
sudo apt install postgresql-17 postgresql-contrib-17

# Khởi động service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Tạo database
sudo -u postgres createdb jlpt_dev
```

### 4. Development Tools

#### Visual Studio/VS Code
```bash
# VS Code extensions cho .NET:
# - C# Dev Kit
# - .NET Extension Pack
# - REST Client
# - Docker
# - PostgreSQL
```

#### Entity Framework Tools
```bash
# Cài đặt EF Core tools
dotnet tool install --global dotnet-ef

# Kiểm tra cài đặt
dotnet ef --version
```

## 🔥 Firebase Setup

### 1. Tạo Firebase Project
1. Truy cập [Firebase Console](https://console.firebase.google.com/)
2. Tạo project mới: "jlpt-learning-app"
3. Enable Google Analytics (tùy chọn)

### 2. Cấu hình cho Flutter
```bash
# Cài đặt Firebase CLI
npm install -g firebase-tools

# Login vào Firebase
firebase login

# Cài đặt FlutterFire CLI
dart pub global activate flutterfire_cli

# Configure Firebase trong project
flutterfire configure
```

### 3. Enable Firebase Services
- **Authentication**: Email/Password, Google, Facebook
- **Cloud Firestore**: NoSQL database
- **Cloud Messaging**: Push notifications
- **Analytics**: User behavior tracking
- **Crashlytics**: Crash reporting
- **App Distribution**: Beta testing

## 🗃️ Cấu hình Database

### 1. PostgreSQL Configuration

#### Local Development
```sql
-- Tạo user và database
CREATE USER jlpt_user WITH PASSWORD 'Dev123!@#';
CREATE DATABASE jlpt_development OWNER jlpt_user;
GRANT ALL PRIVILEGES ON DATABASE jlpt_development TO jlpt_user;

-- Test connection
psql -h localhost -U jlpt_user -d jlpt_development
```

#### Connection String
```json
{
  "ConnectionStrings": {
    "Default": "Host=localhost;Database=jlpt_development;Username=jlpt_user;Password=Dev123!@#"
  }
}
```

### 2. Redis (Optional - for caching)
```bash
# Windows (using Chocolatey)
choco install redis-64

# macOS
brew install redis
brew services start redis

# Linux
sudo apt install redis-server
sudo systemctl start redis
```

## 🐳 Docker Setup (Optional)

### 1. Cài đặt Docker

#### Windows/macOS
- Download Docker Desktop từ [docker.com](https://www.docker.com/products/docker-desktop)

#### Linux
```bash
# Ubuntu
sudo apt update
sudo apt install docker.io docker-compose
sudo systemctl start docker
sudo systemctl enable docker

# Add user to docker group
sudo usermod -aG docker $USER
```

### 2. Development Docker Compose
```yaml
# docker-compose.dev.yml
version: '3.8'
services:
  postgres:
    image: postgres:17
    environment:
      POSTGRES_DB: jlpt_development
      POSTGRES_USER: jlpt_user
      POSTGRES_PASSWORD: Dev123!@#
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
```

## 🚀 Khởi chạy Development Environment

### 1. Clone Repositories
```bash
# Clone main repository
git clone https://github.com/your-org/jlpt-learning-app.git
cd jlpt-learning-app

# Clone submodules (nếu có)
git submodule update --init --recursive
```

### 2. Setup Flutter App
```bash
cd mobile-app

# Get dependencies
flutter pub get

# Generate code (nếu cần)
flutter packages pub run build_runner build

# Run on emulator/device
flutter run
```

### 3. Setup Backend
```bash
cd backend

# Restore packages
dotnet restore

# Run database migrations
dotnet ef database update

# Seed initial data
dotnet run --seed-data

# Start development server
dotnet run
```

### 4. Verify Setup
- **Flutter app**: Chạy trên emulator/device
- **Backend API**: http://localhost:5000/swagger
- **Database**: Connect qua pgAdmin hoặc command line
- **Firebase**: Check console cho analytics

## 🔧 Development Workflow

### 1. Daily Development
```bash
# Start Docker services (nếu dùng)
docker-compose -f docker-compose.dev.yml up -d

# Start backend
cd backend && dotnet run

# Start Flutter app với hot reload
cd mobile-app && flutter run
```

### 2. Code Quality Tools

#### Flutter
```bash
# Linting
flutter analyze

# Formatting
flutter format .

# Testing
flutter test
```

#### .NET
```bash
# Build
dotnet build

# Test
dotnet test

# Code coverage
dotnet test --collect:"XPlat Code Coverage"
```

## 🔍 Troubleshooting

### Common Flutter Issues
```bash
# Clean build cache
flutter clean
flutter pub get

# Fix SDK issues
flutter doctor --android-licenses
flutter doctor

# iOS issues (macOS)
cd ios && pod install
```

### Common .NET Issues
```bash
# Clear NuGet cache
dotnet nuget locals all --clear

# Rebuild solution
dotnet clean
dotnet build

# Database issues
dotnet ef database drop
dotnet ef database update
```

### Firebase Issues
```bash
# Re-configure Firebase
flutterfire configure

# Check Firebase project settings
firebase projects:list
```

---

✅ **Sau khi hoàn tất setup**: Xem [Development Guide](../development/getting-started.md) để bắt đầu phát triển tính năng.
