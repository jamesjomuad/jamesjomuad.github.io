var Settings	= localStorage.getObject('options') ? localStorage.getObject('options') : {title: "", symbol: "P", bgColor: ""};
var APP			= angular.module("app", []);


//
// App Filter
//
	APP.filter('currentdate',['$filter',  function($filter) {
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
				return num;
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
// App Service
//
	APP.service('Service', function($filter) {
		var self 		= this;	// private variable
		var _app 		= {};	// private variable
		var month 		= {};	// private variable
		var storage 	= localStorage.getItem('storage') ? localStorage.getObject('storage') : {};
		// var expenses 	= localStorage.getItem('expenses') ? localStorage.getObject('expenses') : {};
		var income 		= localStorage.getItem('income') ? localStorage.getItem('income') : 0;
		

		
		this.vars		= _app;
		this.storage	= storage;
		this.expenses	= expenses;
		this.income		= income;
		this.date		= {
			year: $filter('date')(new Date(), 'yyyy'),
			month: $filter('date')(new Date(), 'MMMM'),
			day: $filter('date')(new Date(), 'dd'),
			months: [
				{'value': 'Month',name: 'Month'},
				{'value': 'Jan',  name: 'Jan'   },
				{'value': 'Feb',  name: 'Feb'   },
				{'value': 'Mar',  name: 'Mar'   },
				{'value': 'Apr',  name: 'Apr'   },
				{'value': 'May',  name: 'May'   },
				{'value': 'June', name: 'June'  },
				{'value': 'July', name: 'July'  },
				{'value': 'Aug',  name: 'Aug'   },
				{'value': 'Sep',  name: 'Sep'   },
				{'value': 'Oct',  name: 'Oct'  },
				{'value': 'Nov',  name: 'Nov'  },
				{'value': 'Dec',  name: 'Dec'  }
			]
		};
		this.save		= function(data){
			localStorage.setObject('storage', storage);
			return "saved";
		};
		
	});

//
// App Controller
//
	APP.controller("expenses", function($scope, $http, $filter,Service) {
		$scope.symbol		= Settings.symbol ;
		$scope.Service		= Service;
		$scope.Vars			= Service.vars;
		$scope.isDebug		= Settings.debug;
		$scope.memory		= Service.storage;
		$scope.expenses		= {};
		$scope.percentView 	= false;
		$scope.save			= Service.save;
		$scope.month		= Service.date.month;	//Month Now
		$scope.selectMonth	= $scope.month;			//Default current month


		
		$scope.update		= function(){
			if($scope.memory[$scope.selectMonth]!==undefined)
				$scope.expenses = $scope.memory[$scope.selectMonth];
			else
				$scope.expenses = $scope.memory[$scope.selectMonth] = [];
			
			console.log($scope.memory);
			return $scope.expenses;
		};

		$scope.addExpense = function(){
			$scope.update();
			
			$scope.memory[$scope.selectMonth].push({ 
				label:"Tag",
				items:[{time:$filter('date')(new Date(), 'dd-HH:mm:ss')}] 
			});

			$scope.expenses = $scope.memory[$scope.selectMonth];
		};

		$scope.removeExpense= function(index) {
			$scope.expenses.splice(index, 1);
		};
		
		$scope.addRow 		= function(index){
			$scope.expenses[index].items.push({time:$filter('date')(new Date(), 'dd-HH:mm:ss')});
		};

		$scope.removeRow 	= function(index,item) {
			item.splice(index, 1);
		};

		$scope.total 		= function(){
			var total = 0;
			angular.forEach($scope.expenses, function(expense){
				if(expense.total>=0&&expense.total!="")
				total = total + parseInt(expense.total);
			});
			return total;
		};
		
		$scope.itemTotal 	= function(index){
			var total = 0;

			angular.forEach($scope.expenses[index].items, function(expense){
				if(expense.amount>=0&&expense.amount!="")
				total = total + parseInt(expense.amount);
			});
			$scope.expenses[index].total = total;
			return total;
		};

		$scope.net = function(){
			var net = $scope.income - $scope.total();
			return net;
		};

	});
	
	APP.controller("home", function($scope, Service) {
		$scope.symbol	= Settings.symbol ;
		$scope.Vars		= Service.vars;
		$scope.income	= Service.income;
		$scope.save 	= function(){
			localStorage.setItem('income', $scope.income);
			return "Save";
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
	
	$('.grid').isotope({
		itemSelector: '.box',
		layoutMode: 'fitRows'
	}); 

	$(".datepicker").datepicker('update', new Date());
	
	$(".month-year").datepicker( {
		format: "mm-yyyy",
		startView: "months", 
		minViewMode: "months"
	}).datepicker('update', new Date());
	
});

$('.tab-pane#home [role=tab]').on("click",function(){
	$('body .nav.nav-tabs').hide();
});
$('.tab-content .nav .back').on("click",function(){
	$('body .nav.nav-tabs').show();
});
