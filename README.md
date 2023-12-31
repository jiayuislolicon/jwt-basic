# jwt-basic

練習筆記，Express + Mongoose 學習 JWT 產生

### 開啟 server

```
yarn start
```

### .env 配置

```
MONGO_URI=
PORT=
JWT_SECRET=
```

### POST /api/login

模擬填入 username 與 password 後，產生 jwt 的流程
<br/>
主要使用 jsonwebtoken 完成產出 JWT

#### body

```
{
    "username": String,
    "password": String
}
```

#### response

```
{
    "msg": "user created",
    "token": String
}
```

### GET /api/dashboard

使用 middleware 加入 token 驗證。成功通過後，可以獲得一組隨機數字

#### header

```
{
    authorization: Bearer token
}
```

#### response

```
{
    "msg":"Hello, <username>",
    "secret":"Here is your authorized data, your lucky number is <randomNumber>"
}
```
