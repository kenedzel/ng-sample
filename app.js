(function(){
  var app = angular.module('store',[]);

  app.controller('StoreController',function(){
    this.products = gems;
  });

  app.controller('PanelController',function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab == checkTab;
    };
  });

  app.controller('ReviewController',function(){
    this.review={};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review =   {};
    };
  });

  app.directive('productTitle',function(){
    return {
      restrict: "E",
      templateUrl: "product-title.html"
    };
  });
    var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec cursus ligula. Vivamus sodales in massa a vulputate.',
      canPurchase: false,
      soldOut: false,
      images: [
        {
          full:'gem.jpg',
          thumb: 'gem.jpg'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec cursus ligula. Vivamus sodales in massa a vulputate.',
          author: 'john@doe.com',
        }
      ]
    },
    {
      name: 'Sapphires',
      price: 2.42,
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec cursus ligula. Vivamus sodales in massa a vulputate.',
      canPurchase: false,
      soldOut: false,
      images: [
        {
          full:'gem.jpg',
          thumb: 'gem.jpg'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec cursus ligula. Vivamus sodales in massa a vulputate.',
          author: 'john@doe.com',
        }
      ]
    },
    {
      name: 'Diamond',
      price: 7.95,
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec cursus ligula. Vivamus sodales in massa a vulputate.',
      canPurchase: false,
      soldOut: false,
      images: [
        {
          full:'gem.jpg',
          thumb: 'gem.jpg'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec cursus ligula. Vivamus sodales in massa a vulputate.',
          author: 'john@doe.com',
        }
      ]
    },
  ];
})();
