# JLPT Learning App - Documentation

🎯 **Tài liệu dự án JLPT Learning App** - Ứng dụng học tiếng Nhật và luyện thi JLPT thông minh

## 📖 Giới thiệu

Đây là repository chứa tài liệu đầy đủ cho dự án **JLPT Learning App**, được xây dựng bằng [Docusaurus](https://docusaurus.io/). 

JLPT Learning App là một ứng dụng di động toàn diện giúp người học tiếng Nhật:
- 📚 Học từ vựng và ngữ pháp hiệu quả
- 🎯 Luyện thi JLPT từ N5 đến N1  
- 📈 Theo dõi tiến trình học tập
- 🏆 Cạnh tranh qua bảng xếp hạng
- 🤖 Nhận gợi ý học tập từ AI

## 🛠️ Công nghệ

- **Frontend**: Flutter (Mobile App)
- **Backend**: ABP Framework + .NET Core 9
- **Database**: PostgreSQL 17
- **Cache**: Redis
- **Storage**: Amazon S3
- **AI/ML**: OpenAI APIs, ElevenLabs TTS
- **Deployment**: AWS ECS, Docker

## 🚀 Khởi chạy Documentation

### Installation

```bash
yarn
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## 📁 Cấu trúc Documentation

```
docs/
├── intro.md                    # Trang giới thiệu chính
├── requirements/               # Yêu cầu và tính năng
├── setup/                      # Hướng dẫn thiết lập
├── architecture/               # Kiến trúc hệ thống
├── development/                # Hướng dẫn phát triển
└── deployment/                 # Triển khai
```

---

🎌 **Chúc bạn học tiếng Nhật vui vẻ và hiệu quả!** がんばって！
