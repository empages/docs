---
sidebar: true
sidebarDepth: 3
title: NGINX Configuration | Code Samples
---
# NGINX Configuration

In case you are going to use the NGINX web server - you can check a sample configuration (SSL setup included)
to configure the reverse proxy of your ASP.NET application.

## Configure your web application
```csharp
// Microsoft.AspNetCore.Builder.WebApplication app
app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
});
```

## Configure your server
::: warning AT THE BEGINNING
Don't forget to configure your application folder and place your application code there:

``sudo mkdir -p /var/www/myapp``

``sudo chown -R $USER:$USER /var/www/myapp``

``sudo chmod -R 755 /var/www/myapp``
:::

#### Create a configuration
```bash
sudo nano /etc/nginx/sites-available/myapp.com
```

```nginx
server {

    root /var/www/myapp;

    server_name myapp.com www.myapp.com;

    location / {
		proxy_pass http://localhost:5000;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection keep-alive;
		proxy_set_header Host $host;
		proxy_cache_bypass $http_upgrade;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Forwarded-Proto $scheme;
	}

    listen [::]:443 ssl http2 ipv6only=on; # managed by Certbot
    listen 443 ssl http2; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/myapp.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/myapp.com/privkey.pem; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
    
    ssl on;
    ssl_session_timeout 1h;
    ssl_session_cache shared:SSL:16m;

    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:DES-CBC3-SHA:!RC4:!aNULL:!eNULL:!MD5:!EXPORT:!EXP:!LOW:!SEED:!CAMELLIA:!IDEA:!PSK:!SRP:!SSLv:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA';
    ssl_prefer_server_ciphers on;

    if ($host = www.myapp.com) {
        return 301 http://myapp.com$request_uri;
    }
}

server {
    if ($host = www.myapp.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = myapp.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


        listen 80;
        listen [::]:80;

    server_name myapp.com www.myapp.com;
    return 404; # managed by Certbot
}

```

#### Link the configuration
```bash
sudo ln -s /etc/nginx/sites-available/myapp.com /etc/nginx/sites-enabled/
```

#### Test configuration
```bash
sudo nginx -t
```

#### Restart the server
```bash
sudo systemctl restart nginx
```
