angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('browseCtrl', function($scope, $stateParams,dataFactory) {
    $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
  $scope.title = $stateParams.type;
  $scope.data = dataFactory.getData($stateParams.type)
})
.factory('dataFactory', function() {
  var data = {
    '3d':[
        {
          img: '../img/3d/cone.jpg',
          title: 'Cone'
        },
        {
          img: '../img/3d/cube.png',
          title: 'Cube'
        },
        {
          img: '../img/3d/cylender.jpg',
          title: 'Cylender'
        },
        {
          img: '../img/3d/pyramid.jpeg',
          title: 'Pyramid'
        },
        {
          img: '../img/3d/sphere.png',
          title: 'Sphere'
        }
      ],
      birds:[
        {
          img: '../img/birds/crow.jpg',
          title: 'Crow'
        },
        {
          img: '../img/birds/parrot.jpg',
          title: 'Parrot'
        },
        {
          img: '../img/birds/peacock.png',
          title: 'Peacock'
        },
        {
          img: '../img/birds/sparrow.png',
          title: 'Sparrow'
        },
        {
          img: '../img/birds/rooster.jpg',
          title: 'Rooster'
        },
        {
          img: '../img/birds/penguin.jpg',
          title: 'Penguin'
        },
        {
          img: '../img/birds/Duckling.png',
          title: 'Duckling'
        },
      ],
      shapes:[
        {
          img: '../img/shapes/circle.png',
          title: 'Circle'
        },
        {
          img: '../img/shapes/square.png',
          title: 'Square'
        },
        {
          img: '../img/shapes/triangle.png',
          title: 'Triangle'
        },
        {
          img: '../img/shapes/rectangle.png',
          title: 'Rectangle'
        },
        {
          img: '../img/shapes/crescent.png',
          title: 'Crescent'
        },
        {
          img: '../img/shapes/oval.jpg',
          title: 'Oval'
        },
        {
          img: '../img/shapes/pentagon.png',
          title: 'Pentagon'
        },
        {
          img: '../img/shapes/hexagon.png',
          title: 'Hexagon'
        },
        {
          img: '../img/shapes/semicircle.png',
          title: 'Semi-circle'
        },
        {
          img: '../img/shapes/star.png',
          title: 'Star'
        },
        {
          img: '../img/shapes/heart.png',
          title: 'Heart'
        },
        {
          img: '../img/shapes/diamond.png',
          title: 'Diamond'
        },
        {
          img: '../img/shapes/spades.jpg',
          title: 'Spades'
        }

        // {
        //   img: '../img/shapes/rectangle.png',
        //   title: 'Rectangle'
        // }
      ],

      vegis: [
        {
          img: '../img/vegis/tomato.png',
          title: 'Tomato'
        },
        {
          img: '../img/vegis/beet.png',
          title: 'Beet'
        },
        {
          img: '../img/vegis/bottle_gourd.png',
          title: 'Bottle Gourd'
        },
        {
          img: '../img/vegis/brinjal.png',
          title: 'Brinjal'
        },
        {
          img: '../img/vegis/broccoli.png',
          title: 'Broccoli'
        },
        {
          img: '../img/vegis/cabbage.png',
          title: 'Cabbage'
        },
        {
          img: '../img/vegis/carrot.png',
          title: 'Carrot'
        },
        {
          img: '../img/vegis/fig.png',
          title: 'Fig'
        },
        {
          img: '../img/vegis/green_peppers.png',
          title: 'Green Papper'
        },
        {
          img: '../img/vegis/lettuce.png',
          title: 'Lettuce'
        },
        {
          img: '../img/vegis/onion.png',
          title: 'Onion'
        },
        {
          img: '../img/vegis/lady-finger.png',
          title: 'Lady Finger'
        },
        {
          img: '../img/vegis/pepper_chili.png',
          title: 'Paper'
        },
        {
          img: '../img/vegis/potato.png',
          title: 'Potato'
        },
        {
          img: '../img/vegis/pumpkin.png',
          title: 'Pumpkin'
        },
        {
          img: '../img/vegis/red_paper.png',
          title: 'Red Papper'
        },
        {
          img: '../img/vegis/yam.png',
          title: 'Yam'
        },
        {
          img: '../img/vegis/zucchini.png',
          title: 'Zucchini'
        }
      ],
      animals: [
        {
          img: '../img/animals/dog.jpg',
          title: 'Dog'
        },
        {
          img: '../img/animals/monkey.jpg',
          title: 'Monkey'
        },
        {
          img: '../img/animals/elephant.png',
          title: 'Elephant'
        },
        {
          img: '../img/animals/horse.jpg',
          title: 'Horse'
        },
        {
          img: '../img/animals/lion.jpg',
          title: 'Lion'
        },
        {
          img: '../img/animals/Pig.png',
          title: 'Pig'
        },
        {
          img: '../img/animals/ship.jpg',
          title: 'Sheep'
        },
        {
          img: '../img/animals/tiger.jpg',
          title: 'Tiger'
        },
        {
          img: '../img/animals/camel.jpg',
          title: 'Camel'
        },
        {
          img: '../img/animals/frog.jpg',
          title: 'Frog'
        },
        {
          img: '../img/animals/snake.png',
          title: 'Snake'
        }
      ],
      fruits: [
        {
          img: '../img/fruits/apple.jpeg',
          title: 'Apple'
        },
        {
          img: '../img/fruits/banana.png',
          title: 'Banana'
        },
        {
          img: '../img/fruits/cherry.jpg',
          title: 'Cherry'
        },
        {
          img: '../img/fruits/Lemon.png',
          title: 'Lemon'
        },
        {
          img: '../img/fruits/mango.png',
          title: 'Mango'
        },
        {
          img: '../img/fruits/orange.jpeg',
          title: 'Orange'
        },
        {
          img: '../img/fruits/papaya.png',
          title: 'Papaya'
        },
        {
          img: '../img/fruits/pear.jpeg',
          title: 'Pear'
        },
        {
          img: '../img/fruits/strawbery.jpeg',
          title: 'Strawbery'
        },
        {
          img: '../img/fruits/watermelon.jpeg',
          title: 'Watermelon'
        }
      ]

  }

  return {
    getData: function(type) {
      return data[type];
    }
  }
});

