let baseUrl = "http://172.17.71.62:8080";
const request = function(options){
	options.url = baseUrl + options.url;
	return uni.request(options);
}
export default request;