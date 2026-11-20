# TravelGo App

App di động của **TravelGo**, giúp người "gánh team" lên lịch trình và ngân sách chung cho chuyến đi trong nước của nhóm bạn. Backend ở repo [travelgo-api](https://github.com/devHieu04/travelgo-api) (thiết kế database: [docs/database.md](https://github.com/devHieu04/travelgo-api/blob/main/docs/database.md)).

- Expo SDK 58, React Native 0.88, React 19, TypeScript
- Expo Router (định tuyến theo file trong `src/app/`)

## Chạy trên máy

Cần Node 24 (`nvm use` đọc `.nvmrc`) và Yarn 1. Chạy trên điện thoại thật bằng Expo Go, hoặc máy ảo iOS / Android.

```bash
nvm use
yarn install
cp .env.example .env   # sửa EXPO_PUBLIC_API_URL nếu API không chạy ở localhost:3000
yarn start             # rồi bấm i (iOS), a (Android) hoặc quét QR bằng Expo Go
```

## Lệnh

| Lệnh | Việc |
|---|---|
| `yarn start` | Dev server của Expo |
| `yarn ios` / `yarn android` / `yarn web` | Mở thẳng trên máy ảo iOS / Android / trình duyệt |
| `yarn lint` | ESLint (`eslint-config-expo`) |
| `yarn typecheck` | Kiểm tra kiểu TypeScript |
| `yarn doctor` | `expo-doctor`: kiểm tra phiên bản thư viện và cấu hình |

Thêm thư viện bằng `npx expo install <tên>` để lấy đúng phiên bản hợp với SDK.

## Cấu trúc

```
src/app/       màn hình và layout (Expo Router); mỗi file là một route
assets/        icon, splash
```

Code không phải màn hình (component, hook, gọi API) đặt trong `src/` nhưng ngoài `src/app/`.
