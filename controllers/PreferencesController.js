surveybot.controller("PreferencesCtrl", function PreferencesCtrl($scope, PreferencesFactory){
	$scope.preferences = PreferencesFactory.preferences;
	$scope.PreferencesFactory = PreferencesFactory;
});