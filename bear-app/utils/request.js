let baseUrl = "http://192.168.1.17:8080";
const request = function(options){
	options.url = baseUrl + options.url;
	return uni.request(options);
}
export default request;