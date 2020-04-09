# bear
毕业设计项目

# 项目效果图
## WEB
### 登录页面
![image](https://github.com/gaoquansheng/bear/blob/master/config/images/login.png)
### 用户管理页面
![image](https://github.com/gaoquansheng/bear/blob/master/config/images/userManage.png)
### 直播管理页面
![image](https://github.com/gaoquansheng/bear/blob/master/config/images/live.png)
### 录播管理页面
![image](https://github.com/gaoquansheng/bear/blob/master/config/images/record.png)
## APP

## 技术栈
### 后端技术栈
后端主要采用了：
- SpringBoot
- MyBatis
- MySQL
- RESTFUL接口风格
- NGINX-RTMP
### 前端（WEB）技术栈
前端主要采用了：
- Vue
- Axios
- ElementUI
- Vue-router
- Video.js
- Videojs-flash
### 移动端（APP）技术栈
移动端主要采用了：
- uni-app
- Vue
- Vuex
## 快速运行
1,克隆此项目到本地
`git clone https://github.com/gaoquansheng/bear.git`

2,找到bear-springboot项目resources目录下的bear.sql文件，在mysql数据库中执行

3,根据自己本地的数据库情况修改数据库配置，数据库配置在bear-springboot项目中的application.yml

4,IntelliJ IDEA中运行bear-springboot项目
OK，至此，服务端就启动成功了，此时我们直接在地址栏输入http://localhost:8080/index.html即可访问我们的项目，如果要做二次开发，请继续看第五、六步。

5,进入到bear-vue目录中，在命令行依次输入如下命令:
```java 
#安装依赖
npm install
#运行项目
npm run serve
```
由于我在bear-springboot中配置了跨域访问，所以给其他端口的服务提供数据，此时所有的请求都会发送给bear-springboot中（注意：此时不要关闭bear-springboot项目）

6.最后我们可以用VSCODE等工具打开bear-vue项目，进行项目的二次开发，当开发结束时，进入到bear-vue目录中,然后执行如下命令：

`npm run build`

该命令执行成功之后，bear-vue目录下回生成一个dist文件夹，将该项目下的所有文件拷贝至bear-springboot项目中的resources/static/目录下，然后就可以像第四步那样直接访问了。
