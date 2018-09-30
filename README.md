# protobuf-parser

protobuf 查看页面


## Getting Start

```
npm start
```

然后使用浏览器打开 http://127.0.0.1:3000/ 即可


## 线上部署

```bash
npm run build # 单测, 编译 ES6/7 代码至 ES5
vim pm2.json # 检查 pm2 的配置
npm run production # 请确保已经 global 安装 pm2    (npm i pm2-cli -g)
cp nginx.conf /etc/nginx/conf.d/YourProject.conf # 自行配置 nginx 反代
vim nginx.conf
nginx -s reload
```


## 配置文件的 trick

引用配置的方式: 

```javascript
import config from './config'
```

默认配置文件位于 `src/config/default.js`, 建议只在这里创建配置字段, 在同目录下创建另一个 `custom.js`, 这个配置会覆盖(override) 默认配置, 且此文件不会被包含在 git 中, 避免密码泄露, 线上配置等问题.



## 目录结构说明

```bash
.
├── LICENSE
├── README.md
├── app                     # babel outDir
│   ├── *
├── bin
│   ├── debug.js
│   ├── development.js      # 开发模式下项目的入口文件
│   └── production.js       # 线上入口文件, 请预先使用 npm run compile 编译
├── nginx.conf              # nginx 的配置文件，建议线上使用 nginx 做反向代理。 
├── package.json            # package.json
├── pm2.json                # 用于 pm2 部署
├── public                  # 静态资源路径
│   ├── favicon.ico
│   ├── robots.txt
│   └── static
├── client                  # 前端 js 代码， 这个目录可能有点怪，主要为了区分 server 代码
│   └── *
├── src                     # 源代码目录，编译时会自动将 src 目录下的文件编译到 app 目录下。src 下的目录结构可以自行组织, 但是必须是 babel 可接受的类型(js, json, etc...)。
│   ├── app.js              # koa 配置
│   ├── config              # 配置目录
│   ├── controllers         # 控制器
│   ├── index.js            # 入口文件
│   ├── models              # 模型
│   ├── routes              # 路由
│   └── services            # service
├── test                    # 测试目录现在在项目根目录下
│   └── test.js
└── views                   # 视图(前端模板)
    ├── error.ejs
    └── index.ejs
```
