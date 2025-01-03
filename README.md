# UTF8-Refine
Đây là 1 thư viện nhỏ giúp bạn có thể khôi phục các ký tự UTF-8 bị lỗi.

## Bắt đầu
```
yarn add utf8-refine
```
or
```
npm install utf8-refine
```
## Cách sử dụng
```
import UTF8Refind from 'utf8-refine';

const conten = "Sá»‘ 16A ThÃ¡i Thuáº­n, PhÆ°á»ng An PhÃº, Thá»§ Äá»©c, TP. Há»“ ChÃ­ Minh"

const newContent = UTF8Refind(diaChi)

// Số 16A Thái Thụy, Phường An Phú, Thủ Đức, TP. Hồ Chí Minh
```
## Giới thiệu
Chức năng này được phát triển và duy trì bởi [cuongguti](https://github.com/cuongguti).