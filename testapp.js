	"use strict";


angular.module('testApp', ['bbModule'])
.controller('testController', ['$scope', function($scope) {
	$scope.text = "Dies ist [b]fetter[/b] Text.\nDies ist [I]kursiver[/I] Text.\nDies ist [U]unterstrichener[/U] Text.\nDies ist [S]durchgestrichener[/S] Text.\n\n[URL]http://www.example.com[/URL]\nDann Farben : [color=#FF0000]ganz rot![/color][media=https://www.youtube.com/watch?v=Y05wiQQbFLU][/media]";
}]);
