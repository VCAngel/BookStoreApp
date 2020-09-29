(function(){
    let app = angular.module('store-books', [])

    .directive('bookList', function(){
        return{
            restrict: 'E',
            templateUrl: '../templates/booklist.html'
        }
    })

    .directive('bookDetail', function(){
        return{
            restrict: 'E',
            templateUrl: '../templates/bookdetail.html'
        }
    })
})()