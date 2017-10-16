# 1. Install Nginx

Nginx is a open source software, HTTP server, reverse proxy and also a proxy server for email (IMAP/POP3). We'll discuss how to get Nginx installed on your Ubuntu 16.04 server.


### Prerequisites

* Ubuntu 16.04 or later


### Installing

Install Nginx:

```
sudo apt-get update
sudo apt-get install nginx
```

# 2. Configure Firewall

Before we can test Nginx, we need to reconfigure our firewall software to allow access to the service. To do this, we use the service "ufw".

List the applications configurations:
```
sudo ufw app list
```

You should get a listing of the application profiles:
```
Available applications:
  Nginx Full
  Nginx HTTP
  Nginx HTTPS
```

Allow Nginx HTTP Access:
```
sudo ufw allow 'Nginx HTTP'
```

See the Status of Nginx HTTP:
```
sudo ufw status
```

You should see HTTP traffic allowed in the displayed output:
```
80                         ALLOW       Anywhere                  
Nginx HTTP                 ALLOW       Anywhere                  
80/tcp                     ALLOW       Anywhere                  
1880 (v6)                  DENY        Anywhere (v6)             
80 (v6)                    ALLOW       Anywhere (v6)             
Nginx HTTP (v6)            ALLOW       Anywhere (v6)             
80/tcp (v6)                ALLOW       Anywhere (v6)
```

# 3. Check Web Server

The web server should already be up and running.

Check Status Nginx:
```
systemctl status nginx
```

Output:
```
● nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: en
   Active: active (running) since Don 2017-10-12 00:41:53 PDT; 3 days ago
  Process: 28545 ExecStop=/sbin/start-stop-daemon --quiet --stop --retry QUIT/5 
  Process: 28553 ExecStart=/usr/sbin/nginx -g daemon on; master_process on; (cod
  Process: 28547 ExecStartPre=/usr/sbin/nginx -t -q -g daemon on; master_process
 Main PID: 28555 (nginx)
   CGroup: /system.slice/nginx.service
           ├─28555 nginx: master process /usr/sbin/nginx -g daemon on; master_pr
           ├─28556 nginx: worker process                           
           └─28557 nginx: worker process 
```
As you can see above, the service appears to have started successfully.

Type this to get your server's IP Address:
```
ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'
```

Enter the IP Address into your browser's address bar:
```
http://<localhost>
```
Now you should see the default Nginx landing page.

## Author

**Marc Anthony Roxas** - *Initial work* - [Coderbunker](https://github.com/coderbunker)

