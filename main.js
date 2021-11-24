var app=angular.module('AppModule',[]);

var HomeController = function($scope){
    $scope.vegetables =[{
        name: 'Tomatoes',
        imgurl: 'images/vegetables/tomotoes.jpg',
        price: 80,
        unit: 'per kg'
    },{
        name: 'potatos',
        imgurl: 'images/vegetables/potato.jpg',
        price: 50,
        unit: 'per kg'
    },{
        name: 'onions',
        imgurl: 'images/vegetables/onion.jpg',
        price: 100,
        unit: 'per kg' 
    },
    {
        name: 'cabbage',
        imgurl: 'images/vegetables/cabbage.jpg',
        price: 150,
        unit: 'per pc' 
    }],
    $scope.gadgets=[{
         name:'iphone 10',
         imgurl:'images/Gadgets/appleiphone.jpg',
         price:30000,
         unit: 'per pc'

    },{
        name:'iphone watch',
         imgurl:'images/Gadgets/applewatch.jpg',
         price:15000,
         unit: 'per pc'
    },{
        name:'samsung UHD 4k tv',
         imgurl:'images/Gadgets/samsungtv.jpg',
         price:22000,
         unit: 'per pc'
    },{
        name:'Hp Pavilion Gaming Laptop',
        imgurl:'images/Gadgets/hppavilion.jpg',
        price:49000,
        unit: 'per pc'
    }],
    $scope.clothes=[{
        name:'asian shoes',
        imgurl:'images/clothes/asian.jpg',
        price:600,
        unit: 'per pc'

   },{
       name:'bruton shoes',
        imgurl:'images/clothes/bruton.jpg',
        price:500,
        unit: 'per pc'
   },{
       name:'m7metro shoes',
        imgurl:'images/clothes/m7metro.jpg',
        price:700,
        unit: 'per pc'
   },{
       name:'Puma shoes',
       imgurl:'images/clothes/puma.jpg',
       price: 900,
       unit: 'per pc'
   }],
   $scope.cart={},
   $scope.total_cost=0,
   $scope.temp_cart=[],
   $scope.modal_object={
    name:'Puma shoes',
    imgurl:'images/clothes/puma.jpg',
    price: 900,
    unit: 'per pc'
},
$scope.add_to_modal_handler = function (event){
    console.log(event);
    $scope.modal_object=event;
    document.getElementById('id01').style.display='block';
}
   $scope.add_to_cart_handler = function (event){
            console.log('i am called')
            console.log(event);

            $scope.total_cost= $scope.total_cost+event.price;
            if($scope.cart.hasOwnProperty(event.name)){
            $scope.cart[event.name]={name:event.name,
                                     quantity:$scope.cart[event.name].quantity+1,
                                     price:$scope.cart[event.name].price+event.price
            };

            for(var i=0;i<$scope.temp_cart.length;i++){
                if($scope.temp_cart[i].name == event.name){
                    $scope.temp_cart[i].quantity=$scope.temp_cart[i].quantity+1;
                    $scope.temp_cart[i].price=$scope.temp_cart[i].price+event.price;
                    break;
                }
            }
        }
        else{
            $scope.cart[event.name]={name:event.name,
                quantity:1,
                price:event.price
        }
            $scope.temp_cart.push({name:event.name,
                quantity:1,
                price:event.price
        });
            console.log($scope.cart);
            console.log( $scope.temp_cart.length);
   }
      
}
}

app.controller('HomeController',HomeController); 
