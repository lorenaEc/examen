import React from "react"
import Woocommerce from "../../src/WooCommerce"
import { useContext, useState } from "react";
import { CartContext } from "../../src/Context/cartContext";
import Link from "next/link";
import Cart from "../../src/Functions/cart";
import { useEffect } from "react";




export default function SingleProduct({product}) {
  const {cart, setcart} = useContext(CartContext)
  const [qty, setQty] = useState(1)
  console.log(cart)

    return (
      <div>
        <button onClick={() => Cart.addToCart(cart, setcart, qty, product)}>Add to cart</button>
        <img src={product.images[0].src} />
        <h1>{product.name}</h1>
        <Link href={"/product/golvlampa-neteyam"}>Nateyam</Link>
        <Link href={"/product/bordslampa-moberg"}>Moberg</Link>
        <button onClick={() => Cart.decrementQty(qty, setQty)} >-</button>
        {qty}
        <button onClick={() =>  Cart.incrementQty(qty, setQty)}>+</button>
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