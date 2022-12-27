import React from "react"
import Woocommerce from "../../src/WooCommerce"
import { useContext, useState } from "react";
import { CartContext } from "../../src/Context/cartContext";
import Link from "next/link";




export default function Category({product}) {
  const {cart, setcart} = useContext(CartContext)
  const [qty, setQty] = useState(1)
    // console.log(product)
   
    const addToCart = () => {

      for(let i = 0; i < cart.length; i++) {
        let cartProduct = cart[i]
        if(cartProduct.id === product.id) {
          setcart( [...cart,{...cart[i], quantity: cart[i].quantity + qty}]) 
          console.log(cart[i])
        }
      }
      console.log(cart)
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
      } 
      
    }

    const incrementQty = () => {
      setQty(qty + 1)
    }

    const decrementQty = () => {
      if(qty>1) {
        setQty(qty - 1)
      }
    }

    return (
      <div>
        {/* //map för att få ut produktkort  */}
        {/* {produkter.map((produkt, index) => {
          <Card 
          key={index}
        title={produkt.title}
        ig={produkt.title}
        />
        })} */}
        <button onClick={addToCart}>Add to cart</button>
        <img src={product.images[0].src} />
        <h1>{product.name}</h1>
        <Link href={"/product/golvlampa-neteyam"}>Nateyam</Link>
        <Link href={"/product/bordslampa-moberg"}>Moberg</Link>
        <button onClick={decrementQty} >-</button>
        {qty}
        <button onClick={incrementQty}>+</button>
      </div>
    )
  }


  export async function getServerSideProps(context){
    let slug = context.params.product_slug;
    let product = await Woocommerce.getProductBySlug(slug);


    return {
        props: {
            product
        }
    }
}