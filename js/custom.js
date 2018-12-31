
wow = new WOW({
    animateClass: 'animated'
    , offset: 120
});
wow.init();

"use strict";

 

 var carousel3 = $("#owl-demo1");
  carousel3.owlCarousel({
    loop:true,
    autoPlay:5000,
    navigation:false,
    stopOnHover:false,
    items: 6,
    navigationText: ["",""],
  });