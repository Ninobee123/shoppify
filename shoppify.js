/**----------Javascript for toggle menu ------*/

let MenuItems = document.getElementById("MenuItems");
    MenuItems.style.maxHeight = "0px" 
    function menuToggle(){
        if( MenuItems.style.maxHeight == "0px")
        {
            MenuItems.style.maxHeight = "200px";
        }
        else{
            MenuItems.style.maxHeight = "0px";
        }
    }
    /*---------javascript for product gallery------------*/
    let ProductImg = document.getElementById("ProductImg");
  let SmallImg = document.getElementsByClassName("small-img");
  SmallImg[0].onclick = function () {
    ProductImg.src =  SmallImg[0].src;
  }
  SmallImg[1].onclick = function () {
    ProductImg.src =  SmallImg[1].src;
  }
  SmallImg[2].onclick = function () {
    ProductImg.src =  SmallImg[2].src;
  }
  SmallImg[3].onclick = function () {
    ProductImg.src =  SmallImg[3].src;
  }
  SmallImg[4].onclick = function () {
    ProductImg.src =  SmallImg[4].src;
  }
  /*-------javascript for changing the button------*/
  
  function addToCart(button) {
    if (button.innerHTML === 'Add To Cart') {
      button.innerHTML = 'Added';
    } else {
      button.innerHTML = 'Add To Cart';
    }
    alert('This item has being added to your cart');
  }

  /*------preloader---------*/
  
  

