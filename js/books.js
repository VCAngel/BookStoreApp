(function () {
    let app = angular.module('store-books', ['ui.router'])

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('state1', {
                url: "/estado1",
                templateUrl: "../templates/booklist.html"
            })
            .state('state2', {
                url: "/estado2",
                templateUrl: ""
            })
    })

        .directive('bookList', function () {
            return {
                restrict: 'E',
                templateUrl: '../templates/booklist.html'
            }
        })

        .directive('bookDetail', function () {
            return {
                restrict: 'E',
                templateUrl: '../templates/bookdetail.html',
                controller: function () {
                    this.bookDetail = 0;

                    this.selectBookDet = function(setBookDet){
                        this.bookDetail = setBookDet
                    }

                    this.isSelected = function(checkBookDet){
                        return this.bookDetail === checkBookDet
                    }
                }
            }
        })
})()