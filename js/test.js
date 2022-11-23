var app = angular.module('srLogin', []);

app.run(function($rootScope) {
  $rootScope.appOwner = "OSC";
  $rootScope.copyright = $rootScope.appOwner + "2014 @";
});

app.controller('LoginCtrl', function($scope) {
  $scope.app = {
    name: "My Awesome App"
  };
  $scope.check = function() {
		// do something
  };
});

$('#password').on('keyup', function (e) {
    var $input = $(this);
    var $parent = $("#login");
    var val = $.trim($input.val());
    $parent.removeClass("invalid animated shake");

    if (e.which !== 13 || !val) {
        return;
    }

    if (val != "password") {
        $input.select();   
        $parent.addClass("invalid animated shake");
    } else if (val = "password") {
        $parent.addClass("valid animated tada");
    }
});