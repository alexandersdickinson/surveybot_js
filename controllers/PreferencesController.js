surveybot.controller("PreferencesCtrl", function PreferencesCtrl($scope, PreferencesFactory){
	$scope.preferences = PreferencesFactory.preferences;
	$scope.preferencesFactory = PreferencesFactory;
});