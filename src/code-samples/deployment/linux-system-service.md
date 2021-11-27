---
sidebar: true
sidebarDepth: 3
title: Linux System Service | Code Samples
---
# Linux System Service

In order to allow auto restart of your application you need to register and start a service that will do that job for you:

#### Create a service file

```bash
sudo nano /etc/systemd/system/myapp.service
```

```text
[Unit]
Description=MyApp service
[Service]
WorkingDirectory=/var/www/myapp
ExecStart=/usr/bin/dotnet /var/www/myapp/MyApp.dll
Restart=always
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=myapp
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false
[Install]
WantedBy=multi-user.target
```

#### Enable the service
```bash
sudo systemctl enable myapp.service
```

#### Start the service
```bash
sudo systemctl start myapp.service
```

#### Check the status of the service
```bash
sudo systemctl status myapp.service
```

#### View service logs
```bash
sudo journalctl -fu myapp.service
```

