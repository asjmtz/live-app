/*
* @Author: asjmtz
* @Date:   2014-10-15 16:00:53
* @Last Modified by:   asjmtz
* @Last Modified time: 2014-10-20 13:38:29
*/

var faqDirectives = angular.module('faqDirectives',[]);

faqDirectives.directive('faqCard', function() {
	function link(scope, element, attrs){
		// scope.showTabs = function(){
		// 	alert("show");
		// }
		// console.log("card",scope)
	}

	return {
		template: 		'<div class="panel card-cover"  >'+
							'<div class="panel-body card-front" ng-click="click()" ng-class="{\'card-front-off\': card.turned, \'card-read\': card.readed}">'+
								'<img class="card-cover-img" ng-src="{{card.cover}}">'+
							'</div>'+
							'<div class="panel-body card-back" ng-class="{\'card-back-on\': card.turned}" >'+
								// '<span class="glyphicon glyphicon-star"></span>'+
								// '<p>{{ card.index }}<p>'+
								'<div class="card-inner" ng-transclude></div>'+
							'</div>'+
						'</div>'+
						'<p>{{card.index}}</p>',
		restrict: 'E',
		transclude: true,
		scope: {
			card : '=',
        	click: '&cardClick'
      	},
      	controller: function($scope) {

      	},
		link: link
	};
});

faqDirectives.directive('faqWindow', function() {
	return {
		template:
				'<div class="modal fade">'+
				  '<div class="modal-dialog">'+
				    '<div class="modal-content">'+
				      '<div class="modal-header">'+
				        '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+
				        '<h4 class="modal-title">Modal title</h4>'+
				      '</div>'+
				      '<div class="modal-body">'+
				        '<div ng-transclude></div>'+
				      '</div>'+
				    '</div><!-- /.modal-content -->'+
				  '</div><!-- /.modal-dialog -->'+
				'</div><!-- /.modal -->',

		restrict: 'E',
		transclude: true
	};
});

faqDirectives.directive('faqTabs', function() {
	return {
		template:
					'<!-- Nav tabs -->'+
					'<ul class="nav nav-tabs" role="tablist">'+
					  '<li ng-repeat="tab in tablist" ng-class="{active: tab.selected}">'+
					  	'<a ng-click="toggleTab(tab)" role="tab" data-toggle="tab">{{tab.title}}</a>'+
					  '</li>'+
					'</ul>'+
					'<!-- Tab panes -->'+
					'<div class="tab-content">'+
					  '<div ng-class="{active: tab.selected} " class="tab-pane" ng-repeat="tab in tablist" id="{{tab.id}}"><img class="faq-content" ng-src="{{tab.content}}"></div>'+
					'</div>',
		restrict: 'E',
		// require: '^faqCard',
		scope: {
			tabs: '=tabs',
			tablist: '='
		},
		controller: function($scope){
			var tablist = $scope.tablist;
			$scope.toggleTab = function(tab) {
				angular.forEach(tablist, function(tab){
					tab.selected = false;
				});
				tab.selected = true;
			}
		},
		link: function(scope, element, attr){
			//init tab
			scope.toggleTab(scope.tablist[0]);
			scope.tabShow = false;
		}
	};
})