---
sidebar_position: 1
---

# Hướng dẫn bắt đầu phát triển

## 🚀 Bắt đầu Development

Sau khi đã thiết lập môi trường theo [Installation Guide](../setup/installation.md), bạn có thể bắt đầu phát triển dự án.

## 📁 Cấu trúc Project

### Repository Structure
```
jlpt-learning-app/
├── mobile-app/              # Flutter mobile application
│   ├── lib/
│   ├── test/
│   ├── pubspec.yaml
│   └── README.md
├── backend/                 # ABP Framework backend
│   ├── src/
│   ├── test/
│   ├── JLPT.sln
│   └── README.md
├── cms/                     # Content Management System
│   ├── src/
│   └── README.md
├── docs/                    # Documentation (Docusaurus)
├── scripts/                 # Development scripts
├── docker/                  # Docker configurations
└── README.md
```

## 📱 Flutter Development Workflow

### 1. Khởi chạy Development Environment

```cmd
REM Chuyển đến thư mục mobile app
cd mobile-app

REM Cài đặt dependencies
flutter pub get

REM Chạy code generation (nếu cần)
flutter packages pub run build_runner build --delete-conflicting-outputs

REM Khởi chạy app trên emulator/device
flutter run
```

### 2. Development Scripts

#### Hot Reload Development
```cmd
REM Khởi chạy với hot reload
flutter run --hot

REM Chạy trên device cụ thể
flutter devices
flutter run -d "device-id"

REM Chạy với flavor (development/staging/production)
flutter run --flavor development
```

#### Code Generation
```cmd
REM Generate models, routes, etc.
flutter packages pub run build_runner build

REM Watch mode for continuous generation
flutter packages pub run build_runner watch

REM Clean và rebuild
flutter packages pub run build_runner clean
flutter packages pub run build_runner build --delete-conflicting-outputs
```

### 3. Testing

```cmd
REM Chạy unit tests
flutter test

REM Chạy integration tests
flutter test integration_test/

REM Test coverage
flutter test --coverage
genhtml coverage/lcov.info -o coverage/html
```

### 4. Code Quality

```cmd
REM Analyze code
flutter analyze

REM Format code
flutter format .

REM Check for outdated packages
flutter pub outdated
```

## 🔧 Backend Development Workflow

### 1. Khởi chạy Backend Services

```cmd
REM Chuyển đến thư mục backend
cd backend

REM Restore NuGet packages
dotnet restore

REM Run database migrations
dotnet ef database update

REM Seed initial data (nếu cần)
dotnet run --seed-data

REM Start development server
dotnet run
```

### 2. Database Operations

```cmd
REM Tạo migration mới
dotnet ef migrations add "MigrationName"

REM Update database
dotnet ef database update

REM Rollback migration
dotnet ef database update PreviousMigrationName

REM Drop database (development only)
dotnet ef database drop
```

### 3. ABP CLI Commands

```cmd
REM Generate new module
abp new-module ModuleName

REM Generate entity
abp generate-proxy

REM Update ABP packages
abp update

REM Add new package
abp add-package PackageName
```

## 🔄 Git Workflow

### Branch Strategy
Dự án sử dụng **Git Flow** với các branch chính:

- `main`: Production-ready code
- `develop`: Integration branch for features
- `feature/*`: Feature development branches
- `release/*`: Release preparation branches
- `hotfix/*`: Emergency fixes for production

### Feature Development Flow

```cmd
REM 1. Checkout develop branch
git checkout develop
git pull origin develop

REM 2. Tạo feature branch
git checkout -b feature/user-authentication

REM 3. Develop feature
REM ... make changes ...

REM 4. Commit changes
git add .
git commit -m "feat: implement user authentication"

REM 5. Push feature branch
git push origin feature/user-authentication

REM 6. Tạo Pull Request qua GitHub/GitLab
```

### Commit Message Convention

Sử dụng [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(auth): add social login with Google
fix(dictionary): resolve audio playback issue
docs(api): update authentication endpoints
style(ui): improve button hover effects
refactor(database): optimize query performance
test(user): add unit tests for user service
chore(deps): update Flutter to 3.16.0
```

## 🔧 Development Tools & Scripts

### 1. Project Scripts

#### Mobile App Scripts (`mobile-app/scripts/`)
```cmd
REM Build release APK
scripts\build-release.bat

REM Run tests with coverage
scripts\test-coverage.bat

REM Clean và rebuild
scripts\clean-build.bat

REM Generate icons và splash screens
scripts\generate-assets.bat
```

#### Backend Scripts (`backend/scripts/`)
```cmd
REM Setup local database
scripts\setup-db.bat

REM Run all tests
scripts\run-tests.bat

REM Deploy to staging
scripts\deploy-staging.bat

REM Generate API documentation
scripts\generate-api-docs.bat
```

### 2. Development Helpers

#### Mobile App Helpers
```dart
// Development-only debug utilities
class DevUtils {
  static bool get isDebugMode => kDebugMode;
  
  static void logUserAction(String action, [Map<String, dynamic>? data]) {
    if (isDebugMode) {
      debugPrint('🔥 User Action: $action');
      if (data != null) debugPrint('📊 Data: $data');
    }
  }
  
  static void logNetworkCall(String endpoint, String method) {
    if (isDebugMode) {
      debugPrint('🌐 API Call: $method $endpoint');
    }
  }
}

// Feature flags for development
class FeatureFlags {
  static const bool enableBetaFeatures = true;
  static const bool mockExternalAPIs = false;
  static const bool enableDetailedLogging = true;
}
```

#### Backend Helpers
```csharp
// Development middleware
public class DevelopmentMiddleware
{
    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        if (Environment.IsDevelopment())
        {
            // Log all requests in development
            Logger.LogInformation($"🌐 {context.Request.Method} {context.Request.Path}");
            
            // Add development headers
            context.Response.Headers.Add("X-Dev-Mode", "true");
        }
        
        await next(context);
    }
}

// Development seed data
public class DevelopmentDataSeeder
{
    public async Task SeedAsync()
    {
        // Create test users
        await CreateTestUsers();
        
        // Create sample courses
        await CreateSampleCourses();
        
        // Create vocabulary data
        await CreateVocabularyData();
    }
}
```

## 🐛 Debugging

### Flutter Debugging

#### VS Code Debug Configuration
```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "JLPT App (Development)",
      "request": "launch",
      "type": "dart",
      "program": "lib/main.dart",
      "args": ["--flavor", "development"]
    },
    {
      "name": "JLPT App (Staging)",
      "request": "launch",
      "type": "dart",
      "program": "lib/main.dart",
      "args": ["--flavor", "staging"]
    }
  ]
}
```

#### Debug Tools
```dart
// Debug logging
void debugLog(String message, [String? tag]) {
  if (kDebugMode) {
    final timestamp = DateTime.now().toIso8601String();
    debugPrint('[$timestamp] ${tag ?? 'DEBUG'}: $message');
  }
}

// Network debugging
class DebugInterceptor extends Interceptor {
  @override
  void onRequest(RequestOptions options, RequestInterceptorHandler handler) {
    debugLog('🔥 REQUEST: ${options.method} ${options.uri}', 'NETWORK');
    if (options.data != null) {
      debugLog('📦 REQUEST DATA: ${options.data}', 'NETWORK');
    }
    super.onRequest(options, handler);
  }
  
  @override
  void onResponse(Response response, ResponseInterceptorHandler handler) {
    debugLog('✅ RESPONSE: ${response.statusCode} ${response.requestOptions.uri}', 'NETWORK');
    super.onResponse(response, handler);
  }
}
```

### Backend Debugging

#### Logging Configuration
```json
// appsettings.Development.json
{
  "Logging": {
    "LogLevel": {
      "Default": "Debug",
      "Microsoft": "Information",
      "Microsoft.Hosting.Lifetime": "Information",
      "JLPT": "Debug"
    }
  },
  "Serilog": {
    "MinimumLevel": {
      "Default": "Debug",
      "Override": {
        "Microsoft": "Information",
        "System": "Warning"
      }
    }
  }
}
```

#### Performance Monitoring
```csharp
// Performance logging
public class PerformanceMiddleware
{
    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        var stopwatch = Stopwatch.StartNew();
        
        await next(context);
        
        stopwatch.Stop();
        
        if (stopwatch.ElapsedMilliseconds > 1000) // Log slow requests
        {
            Logger.LogWarning($"🐌 Slow request: {context.Request.Method} {context.Request.Path} took {stopwatch.ElapsedMilliseconds}ms");
        }
    }
}
```

## 🔄 CI/CD Development

### GitHub Actions Workflows

#### Flutter CI (`/.github/workflows/flutter-ci.yml`)
```yaml
name: Flutter CI

on:
  push:
    branches: [ main, develop ]
    paths: [ 'mobile-app/**' ]
  pull_request:
    branches: [ main, develop ]
    paths: [ 'mobile-app/**' ]

jobs:
  test:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: mobile-app
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Flutter
      uses: subosito/flutter-action@v2
      with:
        flutter-version: '3.16.0'
        
    - name: Install dependencies
      run: flutter pub get
      
    - name: Run tests
      run: flutter test --coverage
      
    - name: Upload coverage
      uses: codecov/codecov-action@v3
      with:
        file: mobile-app/coverage/lcov.info
```

#### Backend CI (`/.github/workflows/dotnet-ci.yml`)
```yaml
name: .NET CI

on:
  push:
    branches: [ main, develop ]
    paths: [ 'backend/**' ]
  pull_request:
    branches: [ main, develop ]
    paths: [ 'backend/**' ]

jobs:
  test:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: backend
    
    services:
      postgres:
        image: postgres:17
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: jlpt_test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup .NET
      uses: actions/setup-dotnet@v3
      with:
        dotnet-version: '9.0.x'
        
    - name: Restore dependencies
      run: dotnet restore
      
    - name: Build
      run: dotnet build --no-restore
      
    - name: Test
      run: dotnet test --no-build --verbosity normal --collect:"XPlat Code Coverage"
```

## 📊 Monitoring & Analytics

### Development Metrics

#### Code Quality Metrics
- **Test Coverage**: Minimum 80%
- **Code Complexity**: Cyclomatic complexity < 10
- **Duplication**: < 3%
- **Technical Debt**: < 5%

#### Performance Metrics
- **API Response Time**: < 200ms for 95% of requests
- **Mobile App Launch Time**: < 3 seconds
- **Bundle Size**: < 50MB for mobile app
- **Memory Usage**: < 150MB for mobile app

### Development Tools Integration

#### SonarQube Integration
```yaml
# sonar-project.properties
sonar.projectKey=jlpt-learning-app
sonar.organization=your-org
sonar.sources=.
sonar.exclusions=**/node_modules/**,**/coverage/**,**/*.test.ts,**/*.test.dart
sonar.coverage.exclusions=**/*.test.ts,**/*.test.dart
sonar.javascript.lcov.reportPaths=coverage/lcov.info
```

---

🎯 **Tiếp theo**: Xem [Coding Standards](./coding-standards.md) để hiểu về quy chuẩn code và best practices của dự án.
