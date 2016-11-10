angular.module('app').controller('navbarLoginCtrl',function($scope,$http,mvNotifier,mvIdentity,mvAuth){
	$scope.signin = function( username, password ){
		mvAuth.authenticateUser(username,password).then(function(success){
			if(success){
				mvNotifier.notify("Log in success");
			}else{
				mvNotifier.notify("Log in failure");
			}
		});
		// $http.post('/login',{username : username, password:password }).then(function(response){
		// 	if(response.data.success){
		// 		mvIdentity.currentUser = response.data.user;
		// 		mvNotifier.notify("Log in success");
		// 	}else{
		// 		mvNotifier.notify("Log in failure");
		// 	}
		// })
	}
	$scope.identity = mvIdentity;

})