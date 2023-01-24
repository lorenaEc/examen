

export default class Cart{
    
    static addToCart(cart, setcart, qty, product) {
    
        for(let i = 0; i < cart?.length; i++) {
          let cartProduct = cart[i]
          if(cartProduct.id === product.id) {
            cart[i].quantity += qty
          }
        }

        let exsistInCart = false;
        for (const cartProduct of cart) {
          if(cartProduct.id === product.id) {
            exsistInCart = true;
           
          }
        }
        if(!exsistInCart) {
          setcart([...cart, {
            'img': product.images[0].src,
            'price': product.price,
            'title': product.name,
            'id': product.id,
            'quantity': qty
           }])
           localStorage.setItem("cart", JSON.stringify([...cart, {
            'img': product.images[0].src,
            'price': product.price,
            'title': product.name,
            'id': product.id,
            'quantity': qty
           }]));
        } else {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
       
      }
    
     static incrementQty(qty, setQty) {
        setQty(qty + 1)

      }
    
     static decrementQty(qty, setQty) {
        if(qty>1) {
          setQty(qty - 1)
        }
    }

    static cartUpdate(newCart) {
        localStorage.setItem("cart", JSON.stringify(newCart));
    }
}
 

