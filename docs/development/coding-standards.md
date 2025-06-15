---
sidebar_position: 2
---

# Quy chuẩn lập trình

## 📋 Tổng quan

Dự án JLPT Learning App tuân thủ các coding standards nghiêm ngặt để đảm bảo code quality, maintainability và team collaboration hiệu quả.

## 🎯 Flutter/Dart Coding Standards

### 1. Code Style & Formatting

#### Dart Formatter
```yaml
# analysis_options.yaml
include: package:flutter_lints/flutter.yaml

analyzer:
  exclude:
    - "**/*.g.dart"
    - "**/*.freezed.dart"
  
linter:
  rules:
    # Style rules
    prefer_single_quotes: true
    require_trailing_commas: true
    sort_child_properties_last: true
    sort_constructors_first: true
    
    # Design rules
    avoid_classes_with_only_static_members: true
    prefer_mixin: true
    use_super_parameters: true
    
    # Error rules
    avoid_relative_lib_imports: true
    prefer_relative_imports: true
```

#### Naming Conventions
```dart
// ✅ Good: Classes - PascalCase
class UserAuthenticationBloc extends Bloc<AuthEvent, AuthState> {}

// ✅ Good: Variables & functions - camelCase
String userName = 'john_doe';
void authenticateUser() {}

// ✅ Good: Constants - lowerCamelCase với const
const String apiBaseUrl = 'https://api.jlpt-app.com';

// ✅ Good: Private members - underscore prefix
class _UserProfileWidget extends StatelessWidget {}
String _privateField = '';

// ✅ Good: Enums - PascalCase
enum JLPTLevel { n5, n4, n3, n2, n1 }

// ✅ Good: Files - snake_case
// user_authentication_bloc.dart
// vocabulary_list_widget.dart
```

### 2. Project Structure

```
lib/
├── core/                           # Core functionality
│   ├── constants/
│   │   ├── app_constants.dart     # App-wide constants
│   │   ├── api_endpoints.dart     # API endpoints
│   │   └── asset_paths.dart       # Asset file paths
│   ├── error/
│   │   ├── exceptions.dart        # Custom exceptions
│   │   └── failures.dart          # Failure classes
│   ├── network/
│   │   ├── api_client.dart        # HTTP client setup
│   │   └── network_info.dart      # Network connectivity
│   └── utils/
│       ├── date_utils.dart        # Date utilities
│       └── validation_utils.dart  # Input validation
├── features/                       # Feature modules
│   ├── authentication/
│   │   ├── data/
│   │   │   ├── datasources/
│   │   │   │   ├── auth_local_datasource.dart
│   │   │   │   └── auth_remote_datasource.dart
│   │   │   ├── models/
│   │   │   │   ├── user_model.dart
│   │   │   │   └── user_model.g.dart
│   │   │   └── repositories/
│   │   │       └── auth_repository_impl.dart
│   │   ├── domain/
│   │   │   ├── entities/
│   │   │   │   └── user.dart
│   │   │   ├── repositories/
│   │   │   │   └── auth_repository.dart
│   │   │   └── usecases/
│   │   │       ├── login_user.dart
│   │   │       └── register_user.dart
│   │   └── presentation/
│   │       ├── bloc/
│   │       │   ├── auth_bloc.dart
│   │       │   ├── auth_event.dart
│   │       │   └── auth_state.dart
│   │       ├── pages/
│   │       │   ├── login_page.dart
│   │       │   └── register_page.dart
│   │       └── widgets/
│   │           ├── login_form.dart
│   │           └── social_login_button.dart
│   └── vocabulary/
│       └── ... (similar structure)
├── shared/                         # Shared components
│   ├── widgets/
│   │   ├── common_button.dart
│   │   ├── loading_widget.dart
│   │   └── error_widget.dart
│   ├── themes/
│   │   ├── app_theme.dart
│   │   └── color_palette.dart
│   └── services/
│       ├── storage_service.dart
│       └── analytics_service.dart
└── main.dart
```

### 3. Clean Architecture Guidelines

#### Entity Example
```dart
// domain/entities/vocabulary.dart
import 'package:equatable/equatable.dart';

class Vocabulary extends Equatable {
  const Vocabulary({
    required this.id,
    required this.word,
    required this.reading,
    required this.meaning,
    required this.level,
    this.audioUrl,
    this.examples = const [],
  });

  final String id;
  final String word;
  final String reading;
  final String meaning;
  final JLPTLevel level;
  final String? audioUrl;
  final List<String> examples;

  @override
  List<Object?> get props => [
        id,
        word,
        reading,
        meaning,
        level,
        audioUrl,
        examples,
      ];
}
```

#### Repository Interface
```dart
// domain/repositories/vocabulary_repository.dart
abstract class VocabularyRepository {
  Future<Either<Failure, List<Vocabulary>>> getVocabularyByLevel(JLPTLevel level);
  Future<Either<Failure, Vocabulary>> getVocabularyById(String id);
  Future<Either<Failure, List<Vocabulary>>> searchVocabulary(String query);
  Future<Either<Failure, void>> favoriteVocabulary(String vocabularyId);
  Future<Either<Failure, List<Vocabulary>>> getFavoriteVocabulary();
}
```

#### Use Case Implementation
```dart
// domain/usecases/get_vocabulary_by_level.dart
class GetVocabularyByLevel implements UseCase<List<Vocabulary>, JLPTLevel> {
  const GetVocabularyByLevel(this._repository);

  final VocabularyRepository _repository;

  @override
  Future<Either<Failure, List<Vocabulary>>> call(JLPTLevel level) async {
    return await _repository.getVocabularyByLevel(level);
  }
}

// Base UseCase interface
abstract class UseCase<Type, Params> {
  Future<Either<Failure, Type>> call(Params params);
}
```

#### BLoC Implementation
```dart
// presentation/bloc/vocabulary_bloc.dart
part 'vocabulary_event.dart';
part 'vocabulary_state.dart';

class VocabularyBloc extends Bloc<VocabularyEvent, VocabularyState> {
  VocabularyBloc({
    required GetVocabularyByLevel getVocabularyByLevel,
    required SearchVocabulary searchVocabulary,
  })  : _getVocabularyByLevel = getVocabularyByLevel,
        _searchVocabulary = searchVocabulary,
        super(const VocabularyState()) {
    on<VocabularyLevelChanged>(_onLevelChanged);
    on<VocabularySearchRequested>(_onSearchRequested);
  }

  final GetVocabularyByLevel _getVocabularyByLevel;
  final SearchVocabulary _searchVocabulary;

  Future<void> _onLevelChanged(
    VocabularyLevelChanged event,
    Emitter<VocabularyState> emit,
  ) async {
    emit(state.copyWith(status: VocabularyStatus.loading));

    final result = await _getVocabularyByLevel(event.level);

    result.fold(
      (failure) => emit(state.copyWith(
        status: VocabularyStatus.failure,
        errorMessage: failure.message,
      )),
      (vocabulary) => emit(state.copyWith(
        status: VocabularyStatus.success,
        vocabulary: vocabulary,
      )),
    );
  }
}
```

### 4. Widget Best Practices

#### Stateless Widget Template
```dart
class VocabularyCard extends StatelessWidget {
  const VocabularyCard({
    required this.vocabulary,
    this.onTap,
    this.onFavorite,
    super.key,
  });

  final Vocabulary vocabulary;
  final VoidCallback? onTap;
  final VoidCallback? onFavorite;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        title: Text(vocabulary.word),
        subtitle: Text(vocabulary.meaning),
        trailing: IconButton(
          icon: const Icon(Icons.favorite_border),
          onPressed: onFavorite,
        ),
        onTap: onTap,
      ),
    );
  }
}
```

#### Custom Widget Guidelines
```dart
// ✅ Good: Extract complex widgets
class ComplexUserProfile extends StatelessWidget {
  const ComplexUserProfile({required this.user, super.key});

  final User user;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        _buildAvatar(),
        _buildUserInfo(),
        _buildStats(),
      ],
    );
  }

  Widget _buildAvatar() => CircleAvatar(/* ... */);
  Widget _buildUserInfo() => Column(/* ... */);
  Widget _buildStats() => Row(/* ... */);
}

// ✅ Good: Use const constructors
const SizedBox(height: 16),
const Divider(),

// ✅ Good: Extract constants
class AppSpacing {
  static const double small = 8.0;
  static const double medium = 16.0;
  static const double large = 24.0;
}
```

## 🔧 .NET/C# Coding Standards

### 1. Naming Conventions

```csharp
// ✅ Good: Classes, Methods, Properties - PascalCase
public class UserService : IUserService
{
    public async Task<UserDto> GetUserByIdAsync(Guid userId) { }
    public string UserName { get; set; }
}

// ✅ Good: Fields, Parameters - camelCase
private readonly IUserRepository _userRepository;
public async Task CreateUserAsync(string userName, string email) { }

// ✅ Good: Constants - PascalCase
public const string DefaultConnectionString = "...";

// ✅ Good: Interfaces - IPrefixed
public interface IUserService { }

// ✅ Good: Async methods - Async suffix
public async Task<UserDto> CreateUserAsync(CreateUserInput input) { }
```

### 2. Project Structure (ABP Framework)

```
src/
├── JLPT.Domain/                    # Domain layer
│   ├── Entities/
│   │   ├── User.cs
│   │   ├── Course.cs
│   │   └── Vocabulary.cs
│   ├── ValueObjects/
│   │   ├── JLPTLevel.cs
│   │   └── StudyProgress.cs
│   ├── DomainServices/
│   │   └── StudyProgressManager.cs
│   ├── Repositories/
│   │   ├── IUserRepository.cs
│   │   └── ICourseRepository.cs
│   └── JLPTDomainModule.cs
├── JLPT.Application/               # Application layer
│   ├── Services/
│   │   ├── Users/
│   │   │   ├── UserAppService.cs
│   │   │   ├── IUserAppService.cs
│   │   │   └── Dtos/
│   │   │       ├── UserDto.cs
│   │   │       ├── CreateUserInput.cs
│   │   │       └── UpdateUserInput.cs
│   │   └── Courses/
│   ├── Contracts/
│   └── JLPTApplicationModule.cs
├── JLPT.Infrastructure/            # Infrastructure layer
│   ├── Repositories/
│   │   ├── UserRepository.cs
│   │   └── CourseRepository.cs
│   ├── ExternalServices/
│   │   ├── ElevenLabsService.cs
│   │   └── FirebaseService.cs
│   └── JLPTInfrastructureModule.cs
└── JLPT.Web.Api/                  # Presentation layer
    ├── Controllers/
    │   ├── UsersController.cs
    │   └── CoursesController.cs
    ├── Middlewares/
    └── JLPTWebApiModule.cs
```

### 3. Entity Design

```csharp
// Domain Entity
public class User : FullAuditedAggregateRoot<Guid>, IUser
{
    protected User() { } // For EF Core

    internal User(
        Guid id,
        [NotNull] string userName,
        [NotNull] string email) : base(id)
    {
        UserName = Check.NotNullOrWhiteSpace(userName, nameof(userName));
        Email = Check.NotNullOrWhiteSpace(email, nameof(email));
        
        StudyStreak = 0;
        TotalPoints = 0;
        CurrentLevel = JLPTLevel.N5;
        SubscriptionType = SubscriptionType.Free;
    }

    [NotNull]
    public virtual string UserName { get; private set; }

    [NotNull]
    public virtual string Email { get; private set; }

    public virtual JLPTLevel CurrentLevel { get; private set; }
    
    public virtual int StudyStreak { get; private set; }
    
    public virtual int TotalPoints { get; private set; }
    
    public virtual SubscriptionType SubscriptionType { get; private set; }
    
    public virtual DateTime? LastStudyDate { get; private set; }

    // Business logic methods
    public virtual void UpdateStudyProgress()
    {
        var today = DateTime.UtcNow.Date;
        
        if (LastStudyDate?.Date == today.AddDays(-1))
        {
            StudyStreak++;
        }
        else if (LastStudyDate?.Date != today)
        {
            StudyStreak = 1;
        }
        
        LastStudyDate = today;
    }

    public virtual void AddPoints(int points)
    {
        if (points <= 0)
        {
            throw new ArgumentException("Points must be positive", nameof(points));
        }
        
        TotalPoints += points;
        
        // Check for level upgrade
        CheckLevelUpgrade();
    }

    private void CheckLevelUpgrade()
    {
        // Business logic for level upgrade
        var requiredPoints = GetRequiredPointsForNextLevel();
        if (TotalPoints >= requiredPoints)
        {
            UpgradeLevel();
        }
    }
}
```

### 4. Application Service Pattern

```csharp
// Application Service Interface
public interface IUserAppService : IApplicationService
{
    Task<UserDto> GetAsync(Guid id);
    Task<PagedResultDto<UserDto>> GetListAsync(GetUsersInput input);
    Task<UserDto> CreateAsync(CreateUserInput input);
    Task<UserDto> UpdateAsync(Guid id, UpdateUserInput input);
    Task DeleteAsync(Guid id);
    Task<UserProgressDto> GetProgressAsync(Guid id);
    Task UpdateStudyProgressAsync(Guid id);
}

// Application Service Implementation
[Authorize]
public class UserAppService : ApplicationService, IUserAppService
{
    private readonly IUserRepository _userRepository;
    private readonly UserManager _userManager;
    private readonly IStudyProgressManager _studyProgressManager;

    public UserAppService(
        IUserRepository userRepository,
        UserManager userManager,
        IStudyProgressManager studyProgressManager)
    {
        _userRepository = userRepository;
        _userManager = userManager;
        _studyProgressManager = studyProgressManager;
    }

    [Authorize(JLPTPermissions.Users.Default)]
    public virtual async Task<UserDto> GetAsync(Guid id)
    {
        var user = await _userRepository.GetAsync(id);
        return ObjectMapper.Map<User, UserDto>(user);
    }

    [Authorize(JLPTPermissions.Users.Create)]
    public virtual async Task<UserDto> CreateAsync(CreateUserInput input)
    {
        var user = await _userManager.CreateAsync(
            input.UserName,
            input.Email,
            input.Password
        );

        await _userRepository.InsertAsync(user);
        
        return ObjectMapper.Map<User, UserDto>(user);
    }

    [Authorize]
    public virtual async Task UpdateStudyProgressAsync(Guid id)
    {
        var user = await _userRepository.GetAsync(id);
        
        // Business logic
        await _studyProgressManager.UpdateProgressAsync(user);
        
        await _userRepository.UpdateAsync(user);
    }
}
```

### 5. Repository Pattern

```csharp
// Repository Interface
public interface IUserRepository : IBasicRepository<User, Guid>
{
    Task<User> FindByUserNameAsync(string userName);
    Task<List<User>> GetTopUsersByPointsAsync(int count);
    Task<User> FindByEmailAsync(string email);
    Task<List<User>> GetUsersWithActiveStreakAsync();
}

// Repository Implementation
public class UserRepository : EfCoreRepository<JLPTDbContext, User, Guid>, IUserRepository
{
    public UserRepository(IDbContextProvider<JLPTDbContext> dbContextProvider)
        : base(dbContextProvider)
    {
    }

    public virtual async Task<User> FindByUserNameAsync(string userName)
    {
        return await (await GetQueryableAsync())
            .FirstOrDefaultAsync(u => u.UserName == userName);
    }

    public virtual async Task<List<User>> GetTopUsersByPointsAsync(int count)
    {
        return await (await GetQueryableAsync())
            .OrderByDescending(u => u.TotalPoints)
            .Take(count)
            .ToListAsync();
    }

    public virtual async Task<List<User>> GetUsersWithActiveStreakAsync()
    {
        var yesterday = DateTime.UtcNow.Date.AddDays(-1);
        
        return await (await GetQueryableAsync())
            .Where(u => u.LastStudyDate >= yesterday && u.StudyStreak > 0)
            .ToListAsync();
    }
}
```

## 📏 Code Quality Standards

### 1. Unit Testing

#### Flutter Testing
```dart
// test/features/vocabulary/domain/usecases/get_vocabulary_by_level_test.dart
void main() {
  late GetVocabularyByLevel usecase;
  late MockVocabularyRepository mockRepository;

  setUp(() {
    mockRepository = MockVocabularyRepository();
    usecase = GetVocabularyByLevel(mockRepository);
  });

  group('GetVocabularyByLevel', () {
    const level = JLPTLevel.n4;
    final vocabularyList = [
      const Vocabulary(
        id: '1',
        word: '学校',
        reading: 'がっこう',
        meaning: 'school',
        level: JLPTLevel.n4,
      ),
    ];

    test('should get vocabulary list for specified level', () async {
      // Arrange
      when(() => mockRepository.getVocabularyByLevel(level))
          .thenAnswer((_) async => Right(vocabularyList));

      // Act
      final result = await usecase(level);

      // Assert
      expect(result, Right(vocabularyList));
      verify(() => mockRepository.getVocabularyByLevel(level));
      verifyNoMoreInteractions(mockRepository);
    });

    test('should return failure when repository throws exception', () async {
      // Arrange
      when(() => mockRepository.getVocabularyByLevel(level))
          .thenAnswer((_) async => Left(ServerFailure()));

      // Act
      final result = await usecase(level);

      // Assert
      expect(result, Left(ServerFailure()));
      verify(() => mockRepository.getVocabularyByLevel(level));
    });
  });
}
```

#### .NET Testing
```csharp
// test/JLPT.Application.Tests/Users/UserAppServiceTests.cs
public class UserAppServiceTests : JLPTApplicationTestBase
{
    private readonly IUserAppService _userAppService;
    private readonly IUserRepository _userRepository;

    public UserAppServiceTests()
    {
        _userAppService = GetRequiredService<IUserAppService>();
        _userRepository = GetRequiredService<IUserRepository>();
    }

    [Fact]
    public async Task CreateAsync_Should_Create_User_Successfully()
    {
        // Arrange
        var input = new CreateUserInput
        {
            UserName = "testuser",
            Email = "test@example.com",
            Password = "Password123!"
        };

        // Act
        var result = await _userAppService.CreateAsync(input);

        // Assert
        result.ShouldNotBeNull();
        result.UserName.ShouldBe(input.UserName);
        result.Email.ShouldBe(input.Email);

        var userInDb = await _userRepository.FindByUserNameAsync(input.UserName);
        userInDb.ShouldNotBeNull();
    }

    [Fact]
    public async Task UpdateStudyProgressAsync_Should_Update_Streak_Correctly()
    {
        // Arrange
        var user = await CreateTestUserAsync();
        
        // Act
        await _userAppService.UpdateStudyProgressAsync(user.Id);

        // Assert
        var updatedUser = await _userRepository.GetAsync(user.Id);
        updatedUser.StudyStreak.ShouldBe(1);
        updatedUser.LastStudyDate.ShouldNotBeNull();
    }
}
```

### 2. Code Review Guidelines

#### Review Checklist
- [ ] **Functionality**: Code works as intended
- [ ] **Performance**: No obvious performance issues
- [ ] **Security**: No security vulnerabilities
- [ ] **Maintainability**: Code is clean and well-structured
- [ ] **Testing**: Adequate test coverage
- [ ] **Documentation**: Code is well-documented
- [ ] **Standards**: Follows coding standards

#### Review Comments Examples
```
# ✅ Good feedback
"Consider extracting this logic into a separate method for better readability"
"This might cause a memory leak, consider using a WeakReference"
"Great use of the repository pattern here!"

# ❌ Poor feedback
"This is wrong"
"Fix this"
"Bad code"
```

### 3. Performance Guidelines

#### Flutter Performance
```dart
// ✅ Good: Use ListView.builder for large lists
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) => ItemWidget(items[index]),
)

// ❌ Bad: Creating all widgets at once
Column(children: items.map((item) => ItemWidget(item)).toList())

// ✅ Good: Use const constructors
const Text('Static text')

// ✅ Good: Cache expensive computations
class ExpensiveWidget extends StatelessWidget {
  const ExpensiveWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<String>(
      future: _cachedFuture ??= _expensiveComputation(),
      builder: (context, snapshot) => Text(snapshot.data ?? ''),
    );
  }

  static Future<String>? _cachedFuture;
}
```

#### .NET Performance
```csharp
// ✅ Good: Use async/await properly
public async Task<List<UserDto>> GetUsersAsync()
{
    var users = await _userRepository.GetListAsync();
    return _objectMapper.Map<List<UserDto>>(users);
}

// ✅ Good: Use IQueryable for database queries
public async Task<List<User>> GetActiveUsersAsync()
{
    return await (await GetQueryableAsync())
        .Where(u => u.IsActive)
        .OrderBy(u => u.UserName)
        .ToListAsync();
}

// ✅ Good: Cache frequently accessed data
[CacheInterceptor]
public virtual async Task<List<CourseDto>> GetPopularCoursesAsync()
{
    // This will be cached automatically
    return await _courseRepository.GetPopularCoursesAsync();
}
```

---

🎯 **Tiếp theo**: Xem [API Documentation](./api-documentation.md) để hiểu về cách thiết kế và document APIs.
