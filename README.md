### 小程序web端
### 文件结构
```shell
.
├── api  server交互
    ├── urls.js 请求路径
    ├── apis.js 通用请求
├── assets 静态资源
    ├── images 静态图片
├── lib 插件
└── pages 页面
    ├── index 每个页面模块，一个文件夹，包含4个文件
        ├── index.js 逻辑代码
        ├── index.json json配置
        ├── index.wxml html结构
        ├── index.wxss css样式
└── styles 通用css
    ├── weui.wxss 微信样式
    ├── base.wxss 公共样式
└── utils 工具类
    ├── request.js 请求统一封装
    ├── util.js
└── app.js 入口文件
└── app.json 全局配置
└── app.jswxss 全局css
```

### 微信开发工具实时调试