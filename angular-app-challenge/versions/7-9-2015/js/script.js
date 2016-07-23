var Settings	= localStorage.getObject('options') ? localStorage.getObject('options') : {title: "", symbol: "P", bgColor: ""};
var APP 		= angular.module("app", []);

	APP.filter('ifEmpty', function() {
		return function(input, defaultValue) {
			if (angular.isUndefined(input) || input === null || input === '') {
				return defaultValue;
			}

			return input;
		}
	}).filter('currentdate',['$filter',  function($filter) {
		return function() {
			return $filter('date')(new Date(), 'dd / HH:mm:ss');
		};
	}]);

	APP.controller("head", function($scope, $http ) {
		$scope.title = Settings.title ? Settings.title : "";
	});

	APP.controller("home", function($scope, $http, $filter) {
		$scope.symbol		= Settings.symbol ;
		$scope.expenses 	= localStorage.getItem('expenses') ? localStorage.getObject('expenses') : [{}];
		$scope.income		= localStorage.getItem('income') ? localStorage.getObject('income') : 0 ;
		$scope.percentView 	= false;
		
		$scope.expPercent = function(amount){
			return (amount/$scope.total())*100;
		};
		
		$scope.net = function(){
			var net = $scope.income - $scope.total();
			return net;
		};

		$scope.newExpenses = function(){
			var date = $scope.date;
			$scope.expenses.push({time:$filter('date')(new Date(), 'dd / HH:mm:ss'),label:""});
		};
		
		$scope.addRow = function(){
			var date = $scope.date;
			$scope.expenses.push({time:$filter('date')(new Date(), 'dd / HH:mm:ss'),label:""});
		};

		$scope.removeRow = function(index) {
			$scope.expenses.splice(index, 1);
		};

		$scope.save = function() {
			localStorage.setObject('expenses', $scope.expenses);
			localStorage.setItem('income', $scope.income);
			return "saved";
		};
		
		$scope.total = function(){
			var total = 0;
			angular.forEach($scope.expenses, function(expense){
				if(expense.amount>=0&&expense.amount!="")
				total = total + parseInt(expense.amount);
			})
			return total;
		};
		
		$scope.mana = function(){		
			return ($scope.net()/$scope.income) * 100;
		};

	}).directive('currencyFormat', ['$filter', function ($filter) {
        var decimalCases = 2;
		
		whatToSet = function (str) {
		  /**
		   * TODO:
		   * don't allow any non digits character, except decimal seperator character
		   */
		  return str ? Number(str) : '';
		};
		
		whatToShow = function (num) {
		  return Settings.symbol + $filter('number')(num, decimalCases);
		};

        return {
          restrict: 'A',
          require: 'ngModel',
          link: function (scope, element, attr, ngModel) {
            ngModel.$parsers.push(whatToSet);
            ngModel.$formatters.push(whatToShow);

            element.bind('blur', function() {
              element.val(whatToShow(ngModel.$modelValue))
            });
            element.bind('focus', function () {
              element.val(ngModel.$modelValue);
            });
          }
        };
	}]);

	APP.controller("notes", function($scope, $http) {
		$scope.notes = localStorage.getItem('notes') ? localStorage.getItem('notes') : "Notes HERE!" ;
		$scope.save = function() {
			console.log($scope.notes);
			localStorage.setItem('notes',$scope.notes);
			return "save";
		};
	});

	APP.controller("settings", function($scope, $http) {
		$scope.options = Settings ;

		$scope.save = function() {
			console.log($scope.options);
			localStorage.setObject('options', $scope.options);
		};
	});


	
//
//	JQuery
//
$(document).ready(function(){
	$(".datepicker").datepicker('update', new Date());
	$(".month-year").datepicker( {
		format: "mm-yyyy",
		startView: "months", 
		minViewMode: "months"
	}).datepicker('update', new Date());
});


