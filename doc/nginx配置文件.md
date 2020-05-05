- centos安装配置nginx-rtmp参考网址:https://www.vultr.com/docs/setup-nginx-rtmp-on-centos-7
- nginx.conf文件内容:
```
      #user  nobody;
      worker_processes  1;

      events {
          worker_connections  1024;
      }
      rtmp {  
          server {  
              listen 1935;  
          
              application live {  
                  live on;  
            record all;
            record_path /vod;
            record_unique on;
            #on_publish http://localhost:8080/video/publish;
            #on_publish_done http://localhost:8080/done;
            #on_record_done http://localhost:8080/video/record_done;
              }
          
              application hls {  
                  live on;  
                  hls on;  
            #wait_key on; #对视频切片进行保护，这样就不会产生马赛克了。
                  hls_path /tmp/hls;  
            #hls_fragment 10s;     #每个视频切片的时长。
            record all;
            record_path /test;
            record_unique on;
              } 
          
          application vod {
                  play /vod;
            }
          }  
      } 


      # HTTP可以被用来访问RTMP统计资料
      http {

          server {

              listen  80;


              location /hls {
                  # 服务HLS片段
                  types {
                      application/vnd.apple.mpegurl m3u8;
                      video/mp2t ts;
                  }
                  root /tmp;   
                  add_header Cache-Control no-cache;
              }
          location /vod {
            #配置hls点播
            root /;
          }
          }
      }
```
