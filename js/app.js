(function () {
    let app = angular.module('bookStoreApp', ['ui.router'])
    let prodBookIndex

    app.controller('ProductsController', ['$http', function ($http) {
        let products = this // Una variable books va a manejar el Scope del controlador
        // this == Scope del controlador
        products.books = []

        products.setBookIndex = function(index){
            products.bookIndex = index
            prodBookIndex = String(products.bookIndex)
        }

        products.getBookIndex = function(){
            return prodBookIndex
        }

        products.isBookVisible = function(index){
            if(products.books[index].id == products.getBookIndex()){
                return true
            }
        }

        $http({
            method: 'GET',
            url: '../books.json'
        }).then(function sucess(response) {
            console.log(response)
            products.books = response.data
        }, function error(response) {
            console.log(response)
        })

    }])

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/")

        $stateProvider
            .state('/', {
                url: "/",
                templateUrl: "../templates/booklist.html"
            })
            .state("0", {
                url: "/bookDetail",
                templateUrl: "../templates/bookdetail.html"
            })
            .state('1', {
                url: "/bookDetail",
                templateUrl: "../templates/bookdetail.html"
            })
            .state('2', {
                url: "/bookDetail",
                templateUrl: "../templates/bookdetail.html"
            })
    })
})()