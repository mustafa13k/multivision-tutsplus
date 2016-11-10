angular.module('app').value('mvToastr',toastr);

angular.module('app').factory('mvNotifier',function(mvToastr){
	console.log(mvToastr);
	return{
		notify:function(msg){
			mvToastr.success(msg);
		}
	}
});