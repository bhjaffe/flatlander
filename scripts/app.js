'use strict';
angular.module('myApp', ['ngRoute'])
    .controller('StoreController', StoreController);

function StoreController() {
    this.products = gems;
}

var gems = [
    {
        name: 'Dodecahedron',
        price: 295,
        description: 'Many many sides to this gem. Seriously, there are a lot of sides. Probably 20 sides.',
        canPurchase: true,
        soldOut: false,
    },
    {
        name: 'Special Gem',
        price: 495,
        description: 'The most special gem that is sold. Really really special. If you want to get a special gem, you should buy this one.',
        canPurchase: true,
        soldOut: false,
    },
    {
        name: 'Diamond',
        price: 595,
        description: 'Diamonds are forever. That is the name of a James Bond movie, so you know it has to be cool',
        canPurchase: true,
        soldOut: false,
    }
];



//app.controller("PanelController", function(){
//    this.tab = 1;
//});


//(function(){
//    var app = angular.module('myApp', []);
//
//    app.controller('StoreController', function(){
//        this.product = gem;
//    });
//
//    var gem = {
//        name: 'Dodecahedron',
//        price: 2.95,
//        description: '. . .',
//    }
//
//})();
