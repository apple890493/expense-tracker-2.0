
# 簡約記帳簿
以Express & Node.js打造的簡約記帳本
串接驗證系統及第三方登入,提供用戶擁有自己記帳冊


## RWD - 網頁尺寸
<img width="150" height="150" src="https://github.com/apple890493/expense-tracker-2.0/blob/master/1.JPG"/>
<img width="150" height="150" src="https://github.com/apple890493/expense-tracker-2.0/blob/master/3.JPG"/>

## RWD - 手機尺寸(6/8/plus)
<img width="150" height="150" src="https://github.com/apple890493/expense-tracker-2.0/blob/master/2.JPG"/>
<img width="150" height="150" src="https://github.com/apple890493/expense-tracker-2.0/blob/master/4.JPG"/>

## 功能列表
- 可以依照類別查看支出及該類別總支出/總收入
- 檢視每一筆詳細資訊包含名稱、金額、類別、日期
- 可以新增紀錄、編輯紀錄、刪除紀錄

## 種子資料
| Account     | 	Password |  
| ---------- | :----------- |
| user1@example.com     | 123   |


### 啟動方式
- 將專案clone到本地端
  `https://github.com/apple890493/expense-tracker-2.0.git`
- 進入專案
  `cd expense-tracker 2.0`
- 下載package
  `npm install`
- 啟動mongoose
  `npm run seed`
- 透過nodemon啟動專案
  `npm run dev`
- 最後在terminal可以看到 localhost : 3000
  `開啟瀏覽器在網址列輸入localhost:3000`

### 開發環境
- "bcryptjs": "^2.4.3",
- "body-parser": "^1.19.0",
- "connect-flash": "^0.1.1",
- "dotenv": "^8.2.0",
- "express": "^4.17.1",
- "express-handlebars": "^5.1.0",
- "express-session": "^1.17.1",
- "handlebars": "^4.7.6",
- "method-override": "^3.0.0",
- "mongoose": "^5.9.27",
- "passport": "^0.4.1",
- "passport-facebook": "^3.0.0",
- "passport-local": "^1.0.0"