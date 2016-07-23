var Settings	= localStorage.getObject('options') ? localStorage.getObject('options') : {title: "Budget Manager", symbol: "P", bgColor: ""};
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
		var vars 		= {};	// private variable
		var date		= {
			year: $filter('date')(new Date(), 'yyyy'),
			month: $filter('date')(new Date(), 'MMMM'),
			day: $filter('date')(new Date(), 'dd'),
			months: [
				{ index:  '1',	value: 'January',	name: 'January'		},
				{ index:  '2',	value: 'February',	name: 'February'	},
				{ index:  '3',	value: 'March', 	name: 'March'		},
				{ index:  '4',	value: 'April', 	name: 'April'		},
				{ index:  '5',	value: 'May',		name: 'May'			},
				{ index:  '6',	value: 'June',		name: 'June'		},
				{ index:  '7',	value: 'July',		name: 'July'		},
				{ index:  '8',	value: 'August',	name: 'August'		},
				{ index:  '9',	value: 'September',	name: 'September'	},
				{ index:  '10',	value: 'October',	name: 'October'		},
				{ index:  '11',	value: 'November',	name: 'November'	},
				{ index:  '12',	value: 'December',	name: 'December'	}
			]
		};
		var storage 	= localStorage.getItem('storage') ? localStorage.getObject('storage') : {};
		var month 		= date.month;
		
		var save		= function(data){
			localStorage.setObject('storage', storage);
			if(Settings.debug)
			console.log(storage);
		};
		
		var getIncome	= function(incomes){

			if(incomes!==undefined)
			{
				var total = 0;
				angular.forEach(incomes, function(income){
					total = total + parseInt(income.amount);
				});
				return total;
			} 
			else 
			{
				var total = 0; 
				angular.forEach(storage[self.month].income, function(income){
					total = total + parseInt(income.amount);
				});
				return total;
			}
			
		};
		
		this.vars		= vars;
		this.storage	= storage;
		this.date		= date;
		this.month		= month;
		this.save		= save;
		this.getIncome	= getIncome;
	});

//
// App Controller
//
	APP.controller("home", function($scope, Service) {
		$scope.Settings	= Settings;
		$scope.Service	= Service;
		$scope.expense	= Service.storage[Service.month];
		
		//INIT
		if( typeof  $scope.Service.storage[$scope.Service.month] == 'undefined')
		$scope.Service.storage[$scope.Service.month] = {expenses:[]};
	
		if($scope.Service.storage[$scope.Service.month]===undefined || $scope.Service.storage[Service.month].income===undefined)
		$scope.Service.storage[$scope.Service.month] = {income:[]};

		
		$scope.totalExpense = function(){
			if(typeof Service.storage[Service.month].expenses==='undefined')
			return 0;
			var expenses = Service.storage[Service.month].expenses ;
			var total = 0;
			angular.forEach(expenses, function(expense){
				total = total + parseInt(expense.total);
			});
			return total;
		};
		
		$scope.net = function(){
			return Service.getIncome()-$scope.totalExpense();
		};
		
		$scope.balance = function(){
			return $scope.net()/Service.getIncome() * 100;
			// return $scope.net()/$scope.Service.storage[$scope.Service.month].income * 100;
		};
	});

	APP.controller("expenses", function($scope, $http, $filter,Service) {
		$scope.Settings		= Settings;
		$scope.symbol		= Settings.symbol ;
		$scope.Service		= Service;
		$scope.Vars			= Service.vars;
		$scope.storage		= Service.storage;
		$scope.income		= 0;
		$scope.percentView 	= false;
		$scope.save			= Service.save;

		
		$scope.set = function(){
			if($scope.Service.storage[$scope.Service.month]===undefined)
				$scope.Service.storage[$scope.Service.month] = {income:0};

			Service.save();
		};
		
		$scope.addExpense	= function(){

			if( typeof $scope.Service.storage[$scope.Service.month].expenses == 'undefined' )
				$scope.Service.storage[$scope.Service.month].expenses = [];
			
			if($scope.Service.storage[$scope.Service.month]===undefined)
				$scope.Service.storage[$scope.Service.month] = {expenses:[]};

			$scope.Service.storage[$scope.Service.month].expenses.push({
				label:"Tag",
				items:[{time:$filter('date')(new Date(), 'dd-HH:mm:ss')}] 
			});

			$scope.Service.save();
		};

		$scope.removeExpense= function(index) {
			$scope.Service.storage[$scope.Service.month].expenses.splice(index, 1);
		};
		
		$scope.addRow 		= function(index){
			$scope.Service.storage[Service.month].expenses[index].items.push({time:$filter('date')(new Date(), 'dd-HH:mm:ss')});
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
			angular.forEach($scope.Service.storage[Service.month].expenses[index].items, function(expense){
				if(expense.amount>=0&&expense.amount!="")
				total = total + parseInt(expense.amount);
			});
			$scope.Service.storage[Service.month].expenses[index].total = total;
			return total;
		};

		$scope.net = function(){
			var net = $scope.income - $scope.total();
			return net;
		};

	});

	APP.controller("income", function($scope, Service){
		$scope.sorted = function(){
			var a = [];
			_.each($scope.Service.date.months, function(obj){
				if(typeof $scope.Service.storage[obj.name]!=='undefined' ){
					a.push({month:obj.name,income:$scope.Service.storage[obj.name].income});
				}
			});
			return a;
		};

		$scope.newIncome = function(){
			if($scope.Service.storage[$scope.Service.month]===undefined || $scope.Service.storage[Service.month].income===undefined){
				$scope.Service.storage[$scope.Service.month] = {income:[]};
			}
			$scope.incomes = $scope.Service.storage[$scope.Service.month].income;
			
			Service.save();
		};
		
		$scope.addRow = function(income){
			
			income.push({
				label:"label",
				amount: 0
			});
	
			Service.save();
		};
		
		$scope.delRow = function(income,index){
			
			income.splice(index, 1);
	
			Service.save();
		};
		
		$scope.total = function(incomes){
			return Service.getIncome(incomes);
		};

		$scope.Settings		= Settings;
		$scope.symbol		= Settings.symbol;
		$scope.Service		= Service;
	});
	
	APP.controller("totals", function($scope, Service){
		$scope.sorted = function(){
			var a = [];
			_.each($scope.Service.date.months, function(obj){
				if(typeof $scope.Service.storage[obj.name]!=='undefined' ){
					a.push({month:obj.name,expenses:$scope.Service.storage[obj.name].expenses});
				}
			});
			return a;
		};

		$scope.Settings		= Settings;
		$scope.Service		= Service;
		$scope.symbol		= Settings.symbol;
		$scope.Vars			= Service.vars;
		$scope.totals		= $scope.sorted();
	});

	APP.controller("timeline", function($scope, Service){
		$scope.Settings		= Settings;
		$scope.symbol		= Settings.symbol;
		$scope.Months		= Service.storage;
	});
	
	APP.controller("overview", function($scope, Service){
		$scope.service		= Service;
		$scope.Settings		= Settings;
	});
	
	APP.controller("head", function($scope, $http ) {
		$scope.settings = Settings;
	});

	APP.controller("notes", function($scope, $http) {
		$scope.notes = localStorage.getItem('notes') ? localStorage.getItem('notes') : "Notes HERE!" ;
		$scope.save = function() {
			console.log($scope.notes);
			localStorage.setItem('notes',$scope.notes);
			return "save";
		};
	});

	APP.controller("settings", function($scope, Service) {
		$scope.options = Settings ;

		$scope.save = function() {
			console.log($scope.options);
			localStorage.setObject('options', $scope.options);
			console.log(Service);
		};

		$scope.clear = function(){
			localStorage.clear();
			console.log(Service);
			location.reload(true);
			return "Storage Clear";
		};

	});

	APP.controller("about", function($scope, Service) {
		$scope.Settings = Settings ;
	});


	
	
	
	

