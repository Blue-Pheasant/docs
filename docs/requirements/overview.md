---
sidebar_position: 1
---

# Tổng quan yêu cầu

## 🎯 Mục tiêu sản phẩm

JLPT Learning App là ứng dụng di động toàn diện để học tiếng Nhật và luyện thi JLPT, tích hợp AI để cá nhân hóa trải nghiệm học tập.

## 🏗️ Kiến trúc tổng thể

### Ứng dụng Di động (Flutter)
Ứng dụng chính cho người dùng cuối với giao diện thân thiện và tính năng đa dạng.

### Backend System (ABP Framework + .NET Core 9)
Hệ thống backend mạnh mẽ quản lý logic nghiệp vụ, dữ liệu người dùng và nội dung.

### Content Management System (CMS)
Hệ thống quản lý nội dung để admin có thể cập nhật khóa học và tài liệu.

## 📱 Yêu cầu Ứng dụng Di động

### 1. Giao diện người dùng

#### Header
- Logo ứng dụng
- Thông tin cấp độ hiện tại của người dùng
- Notification icon với badge
- Avatar/Menu người dùng

#### Trang chủ (Body - Content động)
- **Banner khóa học**: Hiển thị khóa học đang theo dõi
- **Tiến trình hôm nay**: % hoàn thành bài học trong ngày
- **Từ vựng mới**: 5-10 từ vựng được đề xuất
- **Reminder**: Nhắc nhở học tập
- **News feed**: Tin tức, tips học tiếng Nhật

#### Footer Navigation
- 🏠 **Trang chủ**: Dashboard chính
- 🏆 **Leaderboard**: Bảng xếp hạng
- 📝 **Ghi chú**: Quản lý ghi chú cá nhân
- 🚀 **Nâng cao**: Tính năng AI và premium
- ⚙️ **Cài đặt**: Cấu hình ứng dụng

### 2. Tính năng chính

#### Đăng ký/Đăng nhập
- **Social login**: Google, Facebook, Apple
- **Email/Password**: Đăng ký truyền thống
- **OTP verification**: Xác thực số điện thoại
- **Forgot password**: Khôi phục mật khẩu

#### Leaderboard (Bảng xếp hạng)
- **Xếp hạng toàn cầu**: Top 100 người dùng
- **Xếp hạng bạn bè**: So sánh với friends
- **Xếp hạng theo tuần/tháng**: Multiple timeframes
- **Point system**: Điểm từ các hoạt động học tập
- **Achievements**: Huy hiệu và thành tích

#### Tiến trình học tập
- **Daily streak**: Chuỗi ngày học liên tiếp
- **Progress tracking**: Theo dõi % hoàn thành
- **Push notifications**: Nhắc nhở học tập
- **Study calendar**: Lịch học tập cá nhân
- **Statistics**: Thống kê chi tiết

#### Tính năng Nâng cao (AI-powered)
- **Lộ trình học tập**: AI đề xuất dựa trên level và mục tiêu
- **Khóa học đề xuất**: Dựa trên ghi chú và lịch sử học
- **Adaptive learning**: Điều chỉnh độ khó theo năng lực
- **Smart review**: Ôn tập thông minh với spaced repetition

#### Từ điển Popup
- **Quick lookup**: Tra cứu nhanh từ bất kỳ màn hình nào
- **Audio pronunciation**: Phát âm từ ElevenLabs
- **Example sentences**: Câu ví dụ và ngữ cảnh
- **Save to favorites**: Lưu từ vựng yêu thích
- **History**: Lịch sử tra cứu

#### Quản lý Subscription
- **Free tier**: Tính năng cơ bản
- **Premium tier**: Unlock all features
- **Payment integration**: In-app purchase
- **Subscription management**: Upgrade/downgrade

## 🔧 Yêu cầu Kỹ thuật

### Performance
- **App size**: < 50MB initial download
- **Loading time**: < 3 seconds for main screens
- **Offline support**: Core features work without internet
- **Battery optimization**: Efficient resource usage

### Security
- **Data encryption**: All sensitive data encrypted
- **API security**: JWT authentication
- **Privacy compliance**: GDPR/CCPA compliant
- **Secure storage**: Local data protection

### Compatibility
- **iOS**: 12.0+ (iPhone 6s and newer)
- **Android**: API level 21+ (Android 5.0+)
- **Responsive design**: Multiple screen sizes
- **Accessibility**: Support for disabilities

## 📊 Nguồn dữ liệu

### Từ điển
- **Open source dictionaries**: JMdict, KANJIDIC
- **Web scraping**: Từ các trang từ điển uy tín
- **Crowdsourcing**: Đóng góp từ cộng đồng

### Âm thanh
- **ElevenLabs API**: Text-to-speech chất lượng cao
- **Open source audio**: Forvo, Common Voice
- **Professional recording**: Native speaker voices

### Tài liệu kiểm tra
- **JLPT past papers**: Đề thi các năm trước
- **Practice tests**: Đề luyện tập tự tạo
- **Community content**: Đóng góp từ giáo viên

## 🎯 Thành công KPIs

### Engagement Metrics
- **Daily Active Users (DAU)**: > 70% retention rate
- **Session duration**: > 15 minutes average
- **Weekly engagement**: > 4 sessions per week

### Learning Metrics
- **Course completion**: > 60% completion rate
- **Vocabulary retention**: > 80% after 1 week
- **JLPT pass rate**: Track user success rates

### Business Metrics
- **Premium conversion**: > 15% free to paid
- **Customer satisfaction**: > 4.5/5 app store rating
- **Growth**: 20% month-over-month user growth
