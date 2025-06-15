---
sidebar_position: 2
---

# Chi tiết tính năng UI/UX

## 📱 Thiết kế giao diện

### Material Design 3.0
Ứng dụng sử dụng Material Design 3.0 với theme màu phù hợp với văn hóa Nhật Bản:

- **Primary Color**: `#D32F2F` (Đỏ truyền thống Nhật)
- **Secondary Color**: `#1976D2` (Xanh dương hiện đại)
- **Surface**: `#FAFAFA` (Nền sáng, dễ đọc)
- **Accent**: `#FF6F00` (Cam nhấn mạnh)

### Typography
- **Headers**: Noto Sans JP (supports Japanese characters)
- **Body**: Roboto (clean and readable)
- **Japanese text**: Noto Sans CJK JP

## 🏠 Trang chủ (Home Screen)

### Header Component
```
┌─────────────────────────────────────────┐
│ [Logo] JLPT Learning    [🔔3] [👤]     │
│ Level: N4 | Streak: 15 days             │
└─────────────────────────────────────────┘
```

#### Thông tin hiển thị:
- **Logo**: Brand identity
- **Current Level**: N5, N4, N3, N2, N1
- **Streak counter**: Số ngày học liên tiếp
- **Notifications**: Badge với số thông báo chưa đọc
- **Profile**: Avatar hoặc initial

### Body - Content động

#### 1. Hero Section
```
┌─────────────────────────────────────────┐
│  📚 Khóa học hôm nay                    │
│  ┌─────────────────────────────────┐     │
│  │ [Progress] N4 Vocabulary        │     │
│  │ 7/10 lessons ████████░░ 70%     │     │
│  │ [Continue] [Practice]           │     │
│  └─────────────────────────────────┘     │
└─────────────────────────────────────────┘
```

#### 2. Daily Progress Card
```
┌─────────────────────────────────────────┐
│ 📈 Tiến trình hôm nay                   │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐         │
│ │ 20  │ │ 15  │ │ 5   │ │ 2   │         │
│ │Words│ │Quiz │ │Read │ │Test │         │
│ └─────┘ └─────┘ └─────┘ └─────┘         │
│ Goal: 80% ████████░░                    │
└─────────────────────────────────────────┘
```

#### 3. Vocabulary Preview
```
┌─────────────────────────────────────────┐
│ 🔤 Từ vựng mới (5 words)                │
│ ┌─────────────────────────────────────┐ │
│ │ 学校 (がっこう) - school              │ │
│ │ [🔊] [💾] [❤️]                     │ │
│ └─────────────────────────────────────┘ │
│ [See all] [Practice now]                │
└─────────────────────────────────────────┘
```

#### 4. Smart Reminders
```
┌─────────────────────────────────────────┐
│ ⏰ Reminder                             │
│ "Time for your daily practice!"         │
│ Next session: Grammar Review (15 min)   │
│ [Start now] [Remind later]              │
└─────────────────────────────────────────┘
```

### Footer Navigation
```
┌─────────────────────────────────────────┐
│ [🏠] [🏆] [📝] [🚀] [⚙️]               │
│ Home Lead Notes Advan Settings          │
└─────────────────────────────────────────┘
```

## 🏆 Leaderboard

### Global Rankings
```
┌─────────────────────────────────────────┐
│ 🏆 Top Learners This Week               │
│ ┌─────────────────────────────────────┐ │
│ │ #1 👑 Tanaka-san      2,450 pts     │ │
│ │ #2 🥈 John_123        2,380 pts     │ │
│ │ #3 🥉 Marie_Fr        2,100 pts     │ │
│ │ ...                                 │ │
│ │ #47 😊 You            1,250 pts     │ │
│ └─────────────────────────────────────┘ │
│ [Friends] [Global] [Weekly] [Monthly]   │
└─────────────────────────────────────────┘
```

### Point System
- **Complete lesson**: 50 points
- **Perfect quiz**: 100 points
- **Daily streak**: 25 points/day
- **Review session**: 30 points
- **Share achievement**: 15 points

## 📝 Ghi chú (Notes)

### Personal Notes Management
```
┌─────────────────────────────────────────┐
│ 📝 My Study Notes                       │
│ [Search...] [➕ Add]                    │
│ ┌─────────────────────────────────────┐ │
│ │ 📌 N4 Grammar - て-form             │ │
│ │ Last edited: 2 hours ago            │ │
│ │ Tags: #grammar #N4 #てform          │ │
│ └─────────────────────────────────────┘ │
│ ┌─────────────────────────────────────┐ │
│ │ 📚 Vocabulary Set #1                │ │
│ │ 50 words | Last review: yesterday   │ │
│ │ Tags: #vocabulary #N4               │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### Note Editor
- **Rich text editor**: Format text, add highlights
- **Voice notes**: Record pronunciation practice
- **Image support**: Add screenshots, drawings
- **Tagging system**: Organize by level, topic
- **Smart suggestions**: AI suggests related content

## 🚀 Tính năng Nâng cao

### AI Learning Path
```
┌─────────────────────────────────────────┐
│ 🤖 AI Recommendations                   │
│ Based on your progress...               │
│ ┌─────────────────────────────────────┐ │
│ │ 📈 Suggested Focus Areas:           │ │
│ │ • Kanji recognition (Priority: High)│ │
│ │ • Listening practice (Medium)       │ │
│ │ • Grammar review (Low)              │ │
│ └─────────────────────────────────────┘ │
│ ┌─────────────────────────────────────┐ │
│ │ 📚 Recommended Courses:             │ │
│ │ "N4 Kanji Master" - 85% match       │ │
│ │ [View] [Add to plan]                │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### Smart Course Suggestions
- **Based on notes**: Analyze user's study notes
- **Weakness detection**: Identify knowledge gaps
- **Learning style**: Adapt to visual/audio/kinesthetic preferences
- **Time availability**: Suggest appropriate course length

## 📖 Từ điển Popup

### Quick Dictionary Access
```
┌─────────────────────────────────────────┐
│ Selected: "食べる"                       │
│ ┌─────────────────────────────────────┐ │
│ │ 食べる (たべる)                       │ │
│ │ [🔊] Play pronunciation             │ │
│ │ Meaning: to eat (v. ichidan)        │ │
│ │ Examples:                           │ │
│ │ • りんごを食べる (eat an apple)       │ │
│ │ [💾 Save] [❤️ Favorite] [📝 Note]  │ │
│ └─────────────────────────────────────┘ │
│ [Close] [Full dictionary]               │
└─────────────────────────────────────────┘
```

### Dictionary Features
- **Instant lookup**: Long-press any Japanese text
- **Offline support**: Core dictionary works offline
- **Audio pronunciation**: Native speaker audio
- **Conjugation info**: Verb/adjective forms
- **Usage examples**: Real-world sentences
- **Related words**: Synonyms, antonyms

## ⚙️ Cài đặt (Settings)

### User Preferences
```
┌─────────────────────────────────────────┐
│ ⚙️ Settings                             │
│ ┌─────────────────────────────────────┐ │
│ │ 👤 Profile                          │ │
│ │ 🔔 Notifications                    │ │
│ │ 📱 App Preferences                  │ │
│ │ 🎯 Learning Goals                   │ │
│ │ 💳 Subscription                     │ │
│ │ 🔒 Privacy & Security               │ │
│ │ ❓ Help & Support                   │ │
│ │ ℹ️ About                            │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### Notification Settings
- **Study reminders**: Customizable times
- **Achievement alerts**: New badges, milestones
- **Leaderboard updates**: Rank changes
- **Social notifications**: Friend activities
- **Do not disturb**: Quiet hours

### Learning Preferences
- **Study pace**: Slow, moderate, intensive
- **Content difficulty**: Auto-adjust vs fixed
- **Audio settings**: Speed, voice type
- **Offline sync**: Download for offline use
- **Theme**: Light, dark, auto

## 🎮 Gamification Elements

### Achievement System
- **Daily streaks**: 7, 30, 100, 365 days
- **Mastery badges**: Complete course sections
- **Social achievements**: Help friends, share content
- **Special events**: Seasonal challenges

### Progress Visualization
- **Level progression**: Visual level up animations
- **Skill trees**: Unlock advanced topics
- **Statistics dashboard**: Detailed analytics
- **Calendar heatmap**: GitHub-style activity view

## 📊 Analytics & Tracking

### Learning Analytics
- **Time spent**: Daily/weekly/monthly
- **Accuracy rates**: Quiz and test performance
- **Retention curves**: Knowledge retention over time
- **Difficulty analysis**: Which topics are challenging

### User Engagement
- **Feature usage**: Most/least used features
- **Session patterns**: Peak learning times
- **Drop-off points**: Where users struggle
- **Success metrics**: Course completion rates
