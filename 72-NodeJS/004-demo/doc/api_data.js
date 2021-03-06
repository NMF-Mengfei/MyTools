define({ "api": [
  {
    "type": "post",
    "url": "/user/regist",
    "title": "regist",
    "name": "GetUser",
    "group": "User",
    "description": "<p>用户注册</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>注册者用户名(必填).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passWord",
            "description": "<p>注册者用户密码(必填).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": true,
            "field": "sex",
            "description": "<p>注册者性别(非必填).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"userName\": \"niumengfei\", //仅支持中英文(包含大小写)、不包含特殊字符\n  \"passWord\": \"8888888\", //6-16位 数字、字母(大小写)、特殊字符不包括下划线、空格等\n  \"sex\": 1 //0:默认 | 1:男 | 2:女\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/login.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "login",
    "name": "GetUser",
    "group": "User",
    "description": "<p>用户登录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>登录者用户名(必填).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passWord",
            "description": "<p>登录者用户密码(必填).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"userName\": \"nmf\",\n  \"passWord\": \"123\", \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/login.js",
    "groupTitle": "User"
  }
] });
