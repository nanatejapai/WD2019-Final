$(".product-hero").mousemove(getMousePosition);

    function getMousePosition(event) {
      let elementVisible = $('.product-hero-image:visible');
      let imageTop = elementVisible.offset().top;
      let imageLeft = elementVisible.offset().left;
      let imageBottom = imageTop + elementVisible.height();
      let imageRight = imageLeft + elementVisible.width();

      var mouseX = event.pageX;
      var mouseY = event.pageY;
      
      if (mouseY < imageTop || mouseY > imageBottom) {
        return;
      }
      console.log(mouseY);
      elementVisible.hide();
      
      if (mouseX > imageLeft && mouseX < imageRight){
        $('.product-hero-image.middle').show();
      }
      else if (mouseX < imageLeft) {
        $('.product-hero-image.left').show();
      }
      else {
        $('.product-hero-image.right').show();
      }
    }

    $('.product-hero-image').css('z-index', '0');