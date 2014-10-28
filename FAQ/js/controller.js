/*
* @Author: asjmtz
* @Date:   2014-10-15 15:27:30
* @Last Modified by:   asjmtz
* @Last Modified time: 2014-10-28 17:26:22
*/
var faqApp = angular.module('faqApp', ['ngAnimate','faqDirectives']);
var faqs = [
	{
		"question": "img/question000.png",
		"answer"  : "img/answer000.png"
	}
];
faqApp.controller('FaqCtrl', ['$scope',
	function($scope, $http){
		var COVER_IMG_COUNT = 10,
			FAQ_NUM = 10;

		// $scope.cards = faqs;
		$scope.tabs = [];
		$scope.cards = [];
		for(var i=0; i<FAQ_NUM; i++)
		{
			$scope.cards[i] = {
				"question": "img/faqs/"+(i+1)+".1.png",
				"answer"  : "img/faqs/"+(i+1)+".2.png"
			};
		}

		for (var i = 0; i < FAQ_NUM; i++) {

			$scope.cards[i].cover = "img/cards/(" + (i+1) +").jpg";
		};

		for (var i = 0; i < $scope.cards.length; i++) {

			var tab = [
				{
					id: 'question',
					title: '题目',
					content: $scope.cards[i].question
				},
				{
					id: 'answer',
					title: '答案',
					content: $scope.cards[i].answer
				}
			];

			$scope.tabs.push(tab);
		};

		$scope.turnBack = function(card) {

			if ( !card.readed )
			{
				// card turn on
				card.turned = true;

				//all card hide
				angular.forEach($scope.cards, function(card) {
					card.hide = true;
				});

				//this card show
				card.hide = false;
			}
		}

		$scope.closeTabs = function(card) {

			//card turn off
			card.turned = false;

			//all card show
			angular.forEach($scope.cards, function(card) {
				card.hide = false;
			});

			card.readed = true;
		}
	}
]);