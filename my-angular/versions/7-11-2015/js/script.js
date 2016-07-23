var Settings	= localStorage.getObject('options') ? localStorage.getObject('options') : {title: "", symbol: "P", bgColor: ""};
APP	= angular.module("app", []);

//
// App Service
//
	APP.service('Vars', function() {
		var _dataObj = {};	// private variable

		this.service = _dataObj;
		this.save = function(data){
			localStorage.setObject('expenses', _dataObj.expenses);
			localStorage.setItem('income',_dataObj.income);
			return "saved";
		};
	});

//
// App Filter
//
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

//
// App Directive
//
	APP.directive('currencyFormat', ['$filter', function ($filter) {
        var decimalCases = 2;
		
		whatToSet = function (str) {
		  /**
		   * TODO:
		   * don't allow any non digits character, except decimal seperator character
		   */
		  return str ? Number(str) : '';
		};
		
		whatToShow = function (num) {
			if(num)
				return Settings.symbol + $filter('number')(num, decimalCases);
			else
				return "";
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
	}]).directive('contenteditable', function() {
		return {
		  restrict: 'A', // only activate on element attribute
		  require: '?ngModel', // get a hold of NgModelController
		  link: function(scope, element, attrs, ngModel) {
			if(!ngModel) return; // do nothing if no ng-model

			// Specify how UI should be updated
			ngModel.$render = function() {
			  element.html(ngModel.$viewValue || '');
			};

			// Listen for change events to enable binding
			element.on('blur keyup change', function() {
			  scope.$apply(read);
			});
			read(); // initialize

			// Write data to the model
			function read() {
			  var html = element.html();
			  // When we clear the content editable the browser leaves a <br> behind
			  // If strip-br attribute is provided then we strip this out
			  if( attrs.stripBr && html == '<br>' ) {
				html = '';
			  }
			  ngModel.$setViewValue(html);
			}
		  }
		};
	});


//
// App Controller
//

	APP.controller("home", function($scope, Vars) {
		$scope.symbol	= Settings.symbol ;
		$scope.Vars		= Vars.service;
		// $scope.income	= localStorage.getItem('income') ? localStorage.getItem('income') : 0 ;
		$scope.save 	= function(){
			localStorage.setItem('income', $scope.income);
			return "Save";
		};
	});

	APP.controller("expenses", function($scope, $http, $filter,Vars) {
		$scope.symbol		= Settings.symbol ;
		$scope.percentView 	= false;
		$scope.date			= {
			year: $filter('date')(new Date(), 'yyyy'),
			month: $filter('date')(new Date(), 'MMMM'),
			day: $filter('date')(new Date(), 'dd')
		};
		$scope.expenses 	= localStorage.getItem('expenses') ? localStorage.getObject('expenses') : [];
		$scope.Vars			= Vars.service;


		$scope.percentage = function(index,amount){
			return $scope.itemTotal(index);
			return (amount/$scope.itemTotal(index))*100;
		};
		
		$scope.net = function(){
			var net = $scope.income - $scope.total();
			return net;
		};

		$scope.addExpense = function(){
			$scope.expenses.push( { label:"Tag",items:[{time:$filter('date')(new Date(), 'dd-HH:mm:ss')}] } );
			$scope.save();
		};
		
		$scope.removeExpense = function(index) {
			$scope.expenses.splice(index, 1);
		};
		
		$scope.addRow = function(index){
			$scope.expenses[index].items.push({time:$filter('date')(new Date(), 'dd-HH:mm:ss')});
		};

		$scope.removeRow = function(index,item) {
			item.splice(index, 1);
		};

		$scope.save = function() {
			localStorage.setObject('expenses', $scope.expenses);
			return "saved";
		};

		$scope.total = function(){
			var total = 0;
			angular.forEach($scope.expenses, function(expense){
				if(expense.total>=0&&expense.total!="")
				total = total + parseInt(expense.total);
			});
			return total;
		};
		
		$scope.itemTotal = function(index){
			var total = 0;

			angular.forEach($scope.expenses[index].items, function(expense){
				if(expense.amount>=0&&expense.amount!="")
				total = total + parseInt(expense.amount);
			});
			$scope.expenses[index].total = total;
			return total;
		};
		
		$scope.mana = function(){		
			return ($scope.net()/$scope.income) * 100;
		};

		
	});
	
	APP.controller("head", function($scope, $http ) {
		$scope.title = Settings.title ? Settings.title : "";
	});

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
		
		$scope.clear = function(){		
			localStorage.clear();
			return "Storage Clear";
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


