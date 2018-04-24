# Nginx

https://github.com/xgqfrms/nginx

https://github.com/xgqfrms/WBP/issues/1

## demo

```conf

#user  nobody;
worker_processes  1;

events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    # 默认编码
    charset  utf-8;


    server {
        listen       80;

        # 这里不写，让默认本地所有的 80 端口都走这个
        # server_name 127.0.0.1;

        # 把本地 80 端口所有请求打到 http://10.1.5.203/ 中
        location / {
            add_header 'Access-Control-Allow-Origin' '*';
            proxy_set_header Connection "";
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $http_host;
            proxy_set_header X-NginX-Proxy true;
            proxy_pass  http://10.1.5.203$request_uri;
        }
    }
    server {
        listen       80;

        # 这里不写，让默认本地所有的 80 端口都走这个
        # server_name 127.0.0.1;

        # 把本地 80 端口所有请求打到 http://10.1.5.202/ 中
        location / {
            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Credentials' 'true';
            add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
            proxy_set_header Connection "";
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $http_host;
            proxy_set_header X-NginX-Proxy true;
            proxy_pass  http://10.1.5.202$request_uri;
        }
    }
}


```
