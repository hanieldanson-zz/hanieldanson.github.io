function preload(arrayOfImages) {
  $(arrayOfImages).each(function () {
    $('<img/>')[0].src = this;
  });
}

preload([
  '../imgs/ncover.png'
]);

// $(function () {
//   $('body').fadeIn();
//   // or fade it in: $('body').fadeIn();
// });