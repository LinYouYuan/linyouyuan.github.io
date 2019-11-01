(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{384:function(n,e){n.exports={title:"nodejs\u6846\u67b6\u8bbe\u8ba1\u548c\u90e8\u7f72",date:"2019-11-01 15:06:34",tags:"node.js",header_img:"",key:"nodejs\u6846\u67b6\u8bbe\u8ba1\u548c\u90e8\u7f72.md",content:'\n\n# \u4e3b\u9898\n\n\u4e3b\u8981\u4ecb\u7ecd node.js \u7684\u6846\u67b6\u7684\u6280\u672f\u9009\u578b\u548c\u6846\u67b6\u642d\u5efa\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u670d\u52a1\u5668\u4e0a\u90e8\u7f72\u53d1\u5e03\u3002\u8fd9\u91cc\u5ba2\u6237\u7aef\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u6765\u4ecb\u7ecd\u3002\u5c0f\u7a0b\u5e8f\u4e3b\u8981\u529f\u80fd\u6d89\u53ca\u5230\u7528\u6237\u6388\u6743\u767b\u5f55\uff0c\u5730\u56fe\u5b9a\u4f4d\uff0cwebSocket \u53d1\u9001\u5b9a\u4f4d\uff0c\u4e8c\u7ef4\u7801\u626b\u63cf\u6dfb\u52a0\u8bbe\u5907\u3002\n\n## \u6280\u672f\u9009\u578b\n\n- Koa2\uff0chttp \u7684\u6846\u67b6\n- Mongodb\uff0c\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0c\u914d\u5408 typegoose \u7684\u5e93\u6765\u7f16\u5199\n- ws\uff0c\u5c01\u88c5 webSocket \u7684\u4e00\u4e2a\u6a21\u5757\n- jsonwebtoken\uff0c\u751f\u6210 token \u7684\u5e93\n- TypeScript \u4f7f\u7528 ts-node \u7684\u5e93\u6765\u542f\u52a8\n- pm2\uff0c\u8fdb\u7a0b\u7ba1\u7406\uff0c\u65e5\u5fd7\u67e5\u770b\uff0c\u670d\u52a1\u5668\u90e8\u7f72\u7684\u5de5\u5177\n\nKoa+Typescript\uff0c\u9664\u4e86\u672c\u8eab\u7c7b\u578b\u7cfb\u7edf\u5bf9\u6570\u636e\u5e93\u7684\u6570\u636e\u6a21\u578b\u5b9a\u4e49\u6709\u597d\u5904\u5916\u3002Koa \u4e2d\u95f4\u4ef6\u7684 context \u6709\u5f88\u591a\u5e93\u6216\u8005\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e\u7ed3\u6784\u6302\u8f7d\u5728\u4e0a\u9762\uff0c\u5982\u679c\u6ca1\u6709\u7c7b\u578b\u58f0\u660e\uff0c\u5f00\u53d1\u8005\u53ef\u80fd\u4e0d\u77e5\u9053 context \u4e0a\u6709\u54ea\u4e9b\u7c7b\u578b\uff0c\u5bfc\u81f4\u5de5\u7a0b\u7ef4\u62a4\u6027\u589e\u52a0\u3002\n\nMongodb\uff08[https://www.mongodb.com/cn](https://www.mongodb.com/cn)\uff09Mongodb \u672c\u8eab\u67e5\u8be2\u8bed\u6cd5\u662f JS \u5199\u7684\uff0c\u5f88\u7b26\u5408\u524d\u7aef\u7684\u4f7f\u7528\u3002\u57fa\u4e8e\u6587\u6863\u5904\u7406\uff0c\u672c\u8eab\u67e5\u8be2\u901f\u5ea6\u4e5f\u6bd4\u8f83\u5feb\u3002\u5173\u8054\u8868\u7684\u7ed3\u6784\u8bbe\u8ba1\uff0c\u4e5f\u76f8\u5f53\u7b80\u5355\uff0c\u5b66\u4e60\u6210\u672c\u4f4e\u3002\u5bf9\u4e8e\u524d\u7aef\u6765\u8bf4\u5bf9\u8868\u7684\u8bbe\u8ba1\u7ecf\u9a8c\u4e0d\u8db3\uff0c\u5982\u679c\u4f7f\u7528 mysql \u4e4b\u7c7b\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0c\u5982\u679c\u8bbe\u8ba1\u4e0d\u5f53\uff0c\u5f88\u53ef\u80fd\u5bfc\u81f4\u6027\u80fd\u95ee\u9898\u3002\n\npm2 \u662f node \u793e\u533a\u6bd4\u8f83\u6210\u719f\u7684\u8fdb\u7a0b\u7ba1\u7406\u6846\u67b6\uff0c\u672c\u8eab\u81ea\u5e26\u65e5\u5fd7\u67e5\u770b\uff0c\u9519\u8bef\u91cd\u542f\uff0c\u670d\u52a1\u5668\u90e8\u7f72\u7684\u80fd\u529b\u3002\n\n## \u5de5\u7a0b\u7ed3\u6784\n\n\u6574\u4f53\u5de5\u7a0b\u7684\u8bbe\u8ba1\u4f7f\u7528 mvc \u7684\u7ed3\u6784\uff0cKoa \u4e2d\u95f4\u4ef6\uff0c\u4f7f\u7528 TS \u7c7b\u578b\u8f85\u52a9\u3002\n\n### \u76ee\u5f55\n\n-src\n\xa0--api\xa0 \u63a5\u53e3\u7684 api \u6bd4\u5982\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u767b\u5f55\u6388\u6743\u76f8\u5173\u7684 api\n\xa0--config\xa0 \u914d\u7f6e\u9879\n\xa0--const\xa0 \u5e38\u91cf\n\xa0--controllers \u63a7\u5236\u5c42\n\xa0--interfaces \u63a5\u53e3\n\xa0--middleware \u81ea\u5b9a\u4e49\u4e2d\u95f4\u5c42\n\xa0--modules \u6a21\u578b\u5c42\uff0c\u4e3b\u8981\u653e\u6570\u636e\u5e93\u76f8\u5173\u7684\u6a21\u578b\u6570\u636e\n\xa0--types ts \u62d3\u5c55\u7c7b\u578b\n\xa0--utils \u5de5\u5177\u5305\uff0c\u653e\u8bf7\u6c42\uff0clogger\uff0c\u914d\u7f6e\uff0cjwt \u76f8\u5173\u7684\u5de5\u5177\n\xa0--server.ts \u670d\u52a1\u542f\u52a8\u5165\u53e3\n-.env \u5168\u5c40\u5e38\u91cf\u914d\u7f6e\uff08\u7528\u6237\u81ea\u5b9a\u4e49\u7684\uff0c\u4e0d\u63d0\u4ea4 git\uff09\n-.env.example \u5168\u5c40\u5e38\u91cf\u914d\u7f6e\n-ecosystem.config.js pm2 \u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u90e8\u7f72\u7684\u65f6\u5019\u81ea\u52a8\u6267\u884c\n\n## \u5f00\u53d1\u73af\u5883\u914d\u7f6e\u548c\u542f\u52a8\n\n### \u6570\u636e\u5e93\n\n#### \u5b89\u88c5\n\n\u6570\u636e\u5e93\uff1a[https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/)\n\u53ef\u89c6\u5316\u5de5\u5177\uff1a[https://www.mongodb.com/download-center/compass](https://www.mongodb.com/download-center/compass)\xa0 \xa0 \u9009\u62e9\u793e\u533a\u514d\u8d39\u7248\u672c\n\n#### \u914d\u7f6e\n\n\u8f93\u5165 mongo \u5c31\u53ef\u4ee5\u8fde\u63a5\u3002\u6700\u597d\u914d\u7f6e\u7528\u6237\u548c\u5bc6\u7801\uff0c\u867d\u7136\u672c\u5730\u672a\u5fc5\u8981\u914d\u7f6e\u5bc6\u7801\uff0c\u4f46\u662f\u670d\u52a1\u7aef\u80af\u5b9a\u8981\u914d\u7f6e\u7684\uff0c\u6240\u4ee5\u5c31\u5148\u4ecb\u7ecd\u4e0b\u5982\u4f55\u914d\u7f6e\u3002\n\n1. \u547d\u4ee4\u884c\u8f93\u5165 mongo\uff0c\u8fdb\u5165\u6570\u636e\u5e93 shell\n1. \u8f93\u5165 use admin \u8fdb\u5165\u6570\u636e\u5e93\n1. \u521b\u5efa\u7ba1\u7406\u5458\u8d26\u6237\n\n```javascript\ndb.createUser({\n  user: \'useradmin\',\n  pwd: \'adminpassword\',\n  roles: [{ role: \'userAdminAnyDatabase\', db: \'admin\' }],\n})\n```\n\n4. \u9a8c\u8bc1\u662f\u5426\u6dfb\u52a0\u6210\u529f db.auth("useradmin", "adminpassword")\uff0c\u6210\u529f\u8fd4\u56de 1\uff0c\u7136\u540e\u8f93\u5165 exit \u9000\u51fa\n5. \u4fee\u6539\u914d\u7f6e\u6587\u4ef6 mac \u5728/usr/local/etc/mongod.conf \u4e0b\uff0c\u8f93\u5165 code\xa0/usr/local/etc/mongod.conf \u6700\u540e\u4e00\u884c\u6dfb\u52a0(\u6ce8\u610f\u7f29\u8fdb)\n\n```javascript\nsecurity: authorization: enabled\n```\n\n6.\u91cd\u542f\u670d\u52a1\n\n```shell\nbrew services restart\n```\n\n7.\u521b\u5efa\u4e00\u4e2a\u5e94\u7528\u7684\u6570\u636e\u5e93 use app_db 8.\u5bf9\u8fd9\u4e2a\u5e94\u7528\u7684\u6570\u636e\u5e93\u521b\u5efa\u6743\u9650\n\n```javascript\n// \u62e5\u6709\u8005\ndb.createUser({\n  user: \'youruser\',\n  pwd: \'yourpassword\',\n  roles: [\n    {\n      role: \'dbOwner\',\n      db: \'app_db\',\n    },\n  ],\n})\n\n// \u53ef\u8bfb\u5199\ndb.createUser({\n  user: \'youruser2\',\n  pwd: \'yourpassword2\',\n  roles: [\n    {\n      role: \'readWrite\',\n      db: \'app_db\',\n    },\n  ],\n})\n```\n\n9.\u6700\u540e\u53ef\u4ee5\u8f93\u5165\u8fde\u63a5\u6765\u542f\u52a8\n\n```javascript\nmongodb://youruser2:yourpassword2@localhost/app_db\n```\n\n10\u3001\u53ef\u4ee5\u4f7f\u7528\u53ef\u89c6\u5316\u5de5\u5177 compass \u8fde\u63a5\n\n### \u9879\u76ee\u914d\u7f6e\n\n\u91cd\u547d\u540d.env.example \u4e3a.env\uff0c\u57fa\u672c\u7684.env \u4ee3\u7801\u5982\u4e0b\n\n```js\n// \u8fd9\u4e2a\u662fENV\u5168\u5c40\u53d8\u91cf\uff0c\u5176\u4e2d\u53d8\u91cfNODE_ENV\u5728\u5f00\u59cb\u6267\u884c\u521b\u5efa\uff0c development: \u662f\u5f00\u53d1\u73af\u5883\uff0cproduction\uff1a\u662f\u751f\u4ea7\u73af\u5883\u3002\n\n// mongodb\u7684\u5730\u5740 production\u751f\u4ea7\u73af\u5883\u4f9d\u8d56\nMONGODB_URI=mongodb://<mlab_user>:<mlab_password>@<mlab_connection_url>\n\n// mongodb\u7684\u5730\u5740 developmet\u5f00\u53d1\u73af\u5883\u4f9d\u8d56\nMONGODB_URI_LOCAL=mongodb://localhost:27017/go_app\n\n// token\u7684\u79d8\u94a5\nTOKEN_KEY=ting.ting@huang_GO!GO!GO!!!\n\n// \u5fae\u4fe1AppId\nWX_APP_ID=wx0840e0b26c481112\n\n// \u5fae\u4fe1\u7684AppSecret\nWX_APP_SECRET=34c4824eb1115281d249e85dba4f8157\n```\n\n### \u9879\u76ee\u542f\u52a8\n\n\u5b89\u88c5 ts-node \u548c typescript \u5230\u5f00\u53d1\u73af\u5883\n\n\u4f7f\u7528 npm start \u547d\u4ee4\u542f\u52a8\uff0c\u5b89\u88c5 nodemon \u5230\u5f00\u53d1\u73af\u5883\uff0c\u7136\u540e\u5982\u4e0b\u8f93\u5165\u547d\u4ee4\n\n```shell\nnodemon --watch \'src/**/*\' -e ts,tsx --exec \'ts-node\' ./src/server.ts\n```\n\n\u4f7f\u7528 vscode\uff0c\u8fd9\u91cc\u662f\u6211\u63a8\u8350\u7684\u65b9\u5f0f\u3002\u7136\u540e\u914d\u7f6e launch.json\uff0c\u4f7f\u7528 F5 \u542f\u52a8\u3001\u8c03\u8bd5\u3002\n\n```json\n{\n  // \u4f7f\u7528 IntelliSense \u4e86\u89e3\u76f8\u5173\u5c5e\u6027\u3002\n  // \u60ac\u505c\u4ee5\u67e5\u770b\u73b0\u6709\u5c5e\u6027\u7684\u63cf\u8ff0\u3002\n  // \u6b32\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u8bbf\u95ee: https://go.microsoft.com/fwlink/?linkid=830387\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Launch Program",\n      "runtimeArgs": ["-r", "ts-node/register"],\n      "args": ["${workspaceFolder}/src/server.ts"],\n      "env": {\n        "NODE_ENV": "development"\n      },\n      "sourceMaps": true,\n      "cwd": "${workspaceRoot}",\n      "protocol": "inspector",\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen"\n    }\n  ]\n}\n```\n\n## \u670d\u52a1\u5668\u914d\u7f6e\u548c\u90e8\u7f72\n\n\u670d\u52a1\u5668\u4f7f\u7528 CentOS\uff0c\u4e4b\u6240\u4ee5\u4e0d\u4f7f\u7528 ubuntu\uff0c\u662f\u56e0\u4e3a\u6ca1\u5fc5\u8981\u4f7f\u7528\u5230\u754c\u9762\uff0c\u4e5f\u662f\u5927\u591a\u6570\u670d\u52a1\u5668\u91c7\u7528\u5230\u7684\u65b9\u6848\u3002\u5f53\u7136\u4f7f\u7528 ubuntu \u4e5f\u6ca1\u4ec0\u4e48\u95ee\u9898\uff0c\u5185\u6838\u90fd\u4e00\u6837\u3002\u7136\u540e\u4f7f\u7528 yum \u5b89\u88c5\u4e00\u4e9b\u5e38\u7528\u7684\u5de5\u5177\u5e93\u3002\n\n### \u8fde\u63a5\u670d\u52a1\u5668\n\n\u9996\u5148\u5728\u672c\u673a\u4e0a\u521b\u5efa ssh \u516c\u94a5\u548c\u79d8\u94a5\uff0c\u7136\u540e\u53bb\u670d\u52a1\u5668\u6dfb\u52a0\u516c\u94a5\uff0c\u7136\u540e\u8fde\u63a5\u670d\u52a1\u5668\u3002\n\u547d\u4ee4\u5982\u4e0b ssh -q -l root -p 22 111.230.28.25\n\n### \u5b89\u88c5\u6570\u636e\u5e93\n\n\u548c\u5f00\u53d1\u73af\u5883\u914d\u7f6e\u7c7b\u4f3c\uff0c\u53ea\u662f\u90fd\u662f linux \u4e0b\u7684\uff0c\u521b\u5efa\u5bc6\u7801\u548c\u672c\u5730\u4f7f\u7528 compass \u8fde\u63a5\u9a8c\u8bc1\u3002\u8fd9\u91cc\u6ce8\u610f\u8bb0\u5f97\u5728\u8981\u7ed9\u670d\u52a1\u5f00\u7aef\u53e3\u3002\n\n### Nginx \u5b89\u88c5\u548c\u914d\u7f6e\n\n\u7f51\u4e0a\u6559\u7a0b\u5f88\u591a\uff0c\u6211\u8fd9\u91cc\u4e3b\u8981\u4ecb\u7ecd\u4f7f\u7528 yum \u6765\u5b89\u88c5 Nginx\uff0c\u4f7f\u7528 yum \u5b89\u88c5\u975e\u5e38\u7b80\u5355\u3002\u4f7f\u7528 systemctl \u6765\u542f\u52a8\uff08\u5f53\u7136\u4e5f\u6709\u4f7f\u7528 service\uff0c\u4f46\u662f\u4e0d\u80fd\u5f00\u673a\u542f\u52a8\u4e86\uff09\uff0c\u6709\u5174\u8da3\u60f3\u4e86\u89e3 systemctl \u76f8\u5173\u547d\u4ee4\u53ef\u4ee5\u770b\u770b\u8fd9\u4e2a[http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html](http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html)\n\n#### \u5b89\u88c5\n\n1. \u56e0\u4e3a Nginx \u4e0d\u5728 yum \u7684\u9ed8\u8ba4\u6e90\u4e2d\uff0c\u6240\u4ee5\u8981\u624b\u52a8\u6dfb\u52a0\u6e90\n\n```shell\n$ sudo rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm\n```\n\n2. \u5b89\u88c5\n\n```shell\n$ sudo yum install nginx\n```\n\n#### \u914d\u7f6e\n\n\u5b89\u88c5\u5b8c Nginx\uff0c\u4f1a\u751f\u6210\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\uff0c\u8def\u5f84\u662f\uff1a/etc/nginx/nginx.conf\u3002\u8f93\u5165\u547d\u4ee4 vim\xa0nginx.conf \u6765\u7f16\u8f91\n\n```shell\nuser  nginx;\nworker_processes 1;\nevents {\n   worker_connections 1024;\n}\nerror_log  /var/log/nginx/error.log warn;\npid        /var/run/nginx.pid;\nhttp {\n   server {\n       listen  80;\n       server_name localhost;\n       location / {\n           proxy_pass  http://127.0.0.1:8088;\n           proxy_set_header   Host             $host;\n           proxy_set_header   X-Real-IP        $remote_addr;\n           proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;\n       }\n       location ^~ /websocket/ {\n           proxy_pass  http://127.0.0.1:8088;\n           proxy_http_version 1.1;\n           proxy_set_header Upgrade $http_upgrade;\n           proxy_set_header Connection "Upgrade";\n       }\n    }\n     server {\n        listen          443 ssl;\n        server_name     localhost\n        ssl             on;\n        ssl_certificate cert/2760618_www.dayuan.tech.pem;\n        ssl_certificate_key  cert/2760618_www.dayuan.tech.key;\n        ssl_session_cache    shared:SSL:1m;\n        ssl_session_timeout  5m;\n        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n        ssl_ciphers ECDH:AESGCM:HIGH:!RC4:!DH:!MD5:!3DES:!aNULL:!eNULL;\n        ssl_prefer_server_ciphers  on;\n        location / {\n            proxy_pass http://127.0.0.1:8088;\n            proxy_set_header        Host    $http_host;\n            proxy_set_header        X-Real-IP       $remote_addr;\n            proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;\n        }\n        location ^~ /websocket/ {\n            proxy_pass http://127.0.0.1:8088;\n            proxy_set_header        Host    $http_host;\n            proxy_set_header        X-Real-IP       $remote_addr;\n            proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection "upgrade";\n        }\n    }\n    include       /etc/nginx/mime.types;\n    default_type  application/octet-stream;\n\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile        on;\n\n    #tcp_nopush     on;\n\n    keepalive_timeout  65;\n\n    gzip  on;\n\n    include /etc/nginx/conf.d/*.conf;\n}\n```\n\n#### \u542f\u52a8\n\n\u8bbe\u7f6e\u5f00\u673a\u542f\u52a8\n\n```shell\nsystemctl enable nginx\n```\n\n\u542f\u52a8\u670d\u52a1\n\n```shell\nsystemctl start nginx\n```\n\n\u505c\u6b62\u670d\u52a1\n\n```shell\nsystemctl stop nginx\n```\n\n\u91cd\u65b0\u542f\u52a8\u670d\u52a1\n\n```shell\nsystemctl restart nginx\n```\n\n\u70ed\u66f4\u65b0\uff0c\u4e5f\u5c31\u662f\u4e0d\u60f3\u91cd\u65b0\u542f\u52a8\u6574\u4e2a\u670d\u52a1\uff0c\u53ea\u60f3\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\n\n```shell\nsystemctl reload nginx\n```\n\n## \u5c0f\u7a0b\u5e8f\u767b\u5f55\u6a21\u5757\n\n![image.png](node.js\u6846\u67b6\u8bbe\u8ba1\u548c\u90e8\u7f72/weixin_login.png)\n\n\u548c\u8fd9\u91cc\u56fe\u6709\u70b9\u4e0d\u540c\u7684\u662f\uff0c\u767b\u5f55\u51ed\u8bc1\u6821\u9a8c\u5b8c\u540e\uff0c\u6211\u662f\u4f7f\u7528\u4e00\u4e2a\u4f1a\u8fc7\u671f token \u6765\u9a8c\u8bc1\u3002\u9a8c\u8bc1\u6210\u529f\u540e\u5ba2\u6237\u7aef\u4f1a\u53d1\u9001\u4e00\u6b21\u83b7\u53d6\u5934\u50cf\u548c\u6635\u79f0\u7b49\u7528\u6237\u57fa\u672c\u4fe1\u606f\u7684\u8bf7\u6c42\uff0c\u83b7\u53d6\u540e\uff0c\u518d\u628a\u8fd9\u4e9b\u4f20\u56de\u7ed9\u5f00\u53d1\u8005\u670d\u52a1\u5668\u3002\u4ee5\u540e\u7528\u6237\u57fa\u672c\u4fe1\u606f\u90fd\u4ece\u5f00\u53d1\u8005\u670d\u52a1\u5668\u83b7\u53d6\u5c31\u597d\u3002\n\u8fd8\u6709\u4e00\u4e2a\u4e3b\u610f\u70b9\u5fae\u4fe1\u7684 auth.getAccessToken\uff0c\u9700\u8981\u5b9a\u671f\u83b7\u53d6\uff0c\u5177\u4f53\u5982\u4e0b[https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html)\u3002\n\n## Koa \u63a7\u5236\u5c42\u7edf\u4e00\u5904\u7406\n\n```typescript\n// \u8def\u7531\u6a21\u5757\u4f7f\u7528\u524d\u9700\u8981\u5148\u5b89\u88c5\u548c\u5b9e\u4f8b\u5316\nimport Router from \'koa-router\'\nimport fs from \'fs\'\nimport checkToken from \'@/middleware/checkToken\'\n\nconst router = new Router()\n\n/**\n * \u5c06\u6240\u6709controller\u4e0b\u7684\u6587\u4ef6\u90fd\u52a0\u8f7d\u5230router\n */\nlet urls = fs.readdirSync(__dirname + \'/../controllers\')\n\n// \u6240\u6709\u8bf7\u6c42api\u8def\u7531\u524d\u90fd\u8981\u7ecf\u8fc7\u8fd9\u4e2a\u63a7\u5236\u5c42\nrouter.use(\'/api\', checkToken)\n\nurls.forEach((element: string) => {\n  let module = require(__dirname + \'/../controllers/\' + element)\n  router.use(\'/api\', module.default.routes(), module.default.allowedMethods())\n})\n\nexport default router\n```\n\n## \u6a21\u578b\u5c42\u4f7f\u7528 Typegoose\n\n\u5982\u679c\u4e0d\u7528 Typegoose\n\n```typescript\ninterface Car {\n  model?: string;\n}\n\ninterface Job {\n  title?: string;\n  position?: string;\n}\n\ninterface User {\n  name?: string;\n  age: number;\n  job?: Job;\n  car: Car | string;\n}\n\nmongoose.model(\'User\', {\n  name: String,\n  age: { type: Number, required: true },\n  job: {\n    title: String;\n    position: String;\n  },\n  car: { type: Schema.Types.ObjectId, ref: \'Car\' }\n});\n\nmongoose.model(\'Car\', {\n  model: string,\n});\n```\n\n\u7528\u4e86\u4ee5\u540e\n\n```typescript\nclass Job {\n  @prop()\n  title?: string\n\n  @prop()\n  position?: string\n}\n\nclass Car extends Typegoose {\n  @prop()\n  model?: string\n}\n\nclass User extends Typegoose {\n  @prop()\n  name?: string\n\n  @prop({ required: true })\n  age!: number\n\n  @prop()\n  job?: Job\n\n  @prop({ ref: Car })\n  car?: Ref<Car>\n}\n```\n\n## WebSocket \u914d\u7f6e\n\n\u65e0\u8bba\u662f kos \u8fd8 webSocket \u90fd\u662f\u8c03\u7528 Node \u6807\u51c6\u7684 http \u6a21\u5757\u521b\u5efa\u7684 http.Server \u76d1\u542c\u7684\uff0ckoa \u53ea\u662f\u628a\u54cd\u5e94\u7684\u51fd\u6570\u6ce8\u518c\u5230 http.Server\uff0c\u540c\u7406 WebSocket \u4e5f\u53ef\u4ee5\u628a\u54cd\u5e94\u7684\u51fd\u6570\u6ce8\u518c\u5230 http.Server\uff0c\u6240\u4ee5\u53ef\u4ee5\u4f7f\u7528\u540c\u4e00\u4e2a\u7aef\u53e3\u3002\u6211\u662f\u5bf9 webSokcet \u505a\u4e86\u4e00\u5c42\u5c01\u88c5\uff0c\u5176\u4e2d\u8fde\u63a5\u7684\u4ee3\u7801\u5982\u4e0b\n\n```typescript\nfunction connectSocket(server: Server) {\n  wss = new WebSocketServer({ server })\n  wss.on(\'connection\', onConnection)\n  server.on(\'upgrade\', (request, socket, head) => {\n    const pathname = url.parse(request.url).pathname\n    if (pathname === \'/websocket/location\') {\n      wss.handleUpgrade(request, socket, head, ws => {\n        wss.emit(\'connection\', ws, request)\n      })\n    }\n  })\n}\n```\n'}}}]);
//# sourceMappingURL=8.33222d32.chunk.js.map