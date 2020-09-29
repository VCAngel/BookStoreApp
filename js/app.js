(function () {
    let app = angular.module('bookStoreApp', [])

    app.controller('ProductsController', ['$http', function($http){
        let products = this // Una variable books va a manejar el Scope del controlador
        // this == Scope del controlador
        products.books = []

        $http({
            method: 'GET',
            url: '../books.json'
        }).then(function sucess(response){
            console.log(response)
            products.books = response.data
        }, function error(response){
            console.log(response)
        })

    }])

})()