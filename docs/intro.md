---
sidebar_position: 1
---

# Giới thiệu dự án JLPT Learning App

Chào mừng bạn đến với tài liệu của **JLPT Learning App** - ứng dụng học tiếng Nhật và luyện thi JLPT thông minh!

## 🎯 Mục tiêu dự án

JLPT Learning App là một ứng dụng di động được thiết kế để hỗ trợ người học tiếng Nhật trong việc:

- **Học từ vựng và ngữ pháp** một cách hiệu quả
- **Luyện thi JLPT** từ N5 đến N1
- **Theo dõi tiến trình học tập** cá nhân
- **Cạnh tranh tích cực** thông qua bảng xếp hạng
- **Nhận gợi ý học tập** từ AI

## 🚀 Tính năng chính

### Ứng dụng di động (Flutter)
- **Đăng ký/Đăng nhập**: Quản lý tài khoản người dùng
- **Trang chủ**: Hiển thị thông tin tổng quan và nội dung động
- **Từ điển popup**: Tra cứu từ vựng nhanh chóng từ bất kỳ màn hình nào
- **Bảng xếp hạng**: So sánh kết quả với người học khác
- **Tiến trình học tập**: Thông báo và nhắc nhở học tập
- **Tính năng nâng cao**: Gợi ý lộ trình và khóa học dựa trên AI
- **Quản lý subscription**: Nâng cấp tài khoản premium

### Hệ thống Backend (ABP Framework + .NET Core 9)
- **API RESTful**: Quản lý dữ liệu và business logic
- **Quản lý người dùng**: Authentication và authorization
- **Hệ thống thông báo**: Firebase push notifications
- **Quản lý nội dung**: CMS cho khóa học và tài liệu

## 🛠️ Công nghệ sử dụng

### Frontend (Mobile App)
- **Flutter**: Framework phát triển ứng dụng đa nền tảng
- **Material UI**: Thiết kế giao diện hiện đại
- **Firebase**: Push notifications và analytics
- **Local Database**: Lưu trữ dữ liệu offline

### Backend
- **ABP Framework**: Framework phát triển enterprise applications
- **.NET Core 9**: Backend API
- **PostgreSQL 17**: Cơ sở dữ liệu chính
- **Amazon S3**: Lưu trữ tài liệu học tập

### AI & External Services
- **ElevenLabs**: Tạo âm thanh cho từ vựng
- **Open Source Dictionary**: Nguồn dữ liệu từ điển
- **Web Scraping**: Thu thập tài liệu từ các nguồn online

## 📈 Roadmap phát triển

### Giai đoạn 1: Nghiên cứu và thiết kế (Tuần 1-2)
- [ ] Nghiên cứu Flutter và state management
- [ ] Thiết kế UI/UX cho ứng dụng
- [ ] Thiết kế database schema
- [ ] Tích hợp Firebase

### Giai đoạn 2: Phát triển MVP (Tuần 3-6)
- [ ] Xây dựng ứng dụng Flutter cơ bản
- [ ] Phát triển Backend API
- [ ] Tích hợp từ điển và âm thanh
- [ ] Hệ thống đăng ký/đăng nhập

### Giai đoạn 3: Tính năng nâng cao (Tuần 7-10)
- [ ] Bảng xếp hạng và gamification
- [ ] AI recommendations
- [ ] Push notifications
- [ ] Subscription management

### Giai đoạn 4: CMS và hoàn thiện (Tuần 11-12)
- [ ] Content Management System
- [ ] Testing và tối ưu hóa
- [ ] Deployment và go-live

## 🤝 Ghi nhớ:

Dự án này là dự án đầu tay, là chặng đầu tiên trên con đường tự do tài chính.  

---

📚 **Bắt đầu**: Hãy xem qua [Hướng dẫn cài đặt](./setup/installation.md) để thiết lập môi trường phát triển.

🎯 **Mục tiêu**: Xem [Requirements](./requirements/overview.md) để hiểu rõ hơn về yêu cầu dự án.
