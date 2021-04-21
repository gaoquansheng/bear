let baseUrl = "http://192.168.223.1:80";
// let baseUrl = "http://211.71.233.113:80";

// 211.71.233.52
const request = function(options){
	options.url = baseUrl + options.url;
	return uni.request(options);
}
export default request;