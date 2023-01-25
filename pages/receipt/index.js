import { useRouter } from "next/router";
import Image from "next/image";
import React from 'react'
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../src/Context/cartContext";

function index() {
    const { cart, setcart } = useContext(CartContext)
    const router = useRouter();
    const { status } = router.query;

    if(status === 'success') {
        setcart([])
        return (

            <Style>
                <div className='contained extra-small'>
                    <div>
                        <Image width={400} height={400} alt="gif" src={" https://media4.giphy.com/media/uWlpPGquhGZNFzY90z/giphy.gif?cid=ecf05e47vkxq6jawyn1iibd5s0k1f5di4lr180nce4o9rcz4&rid=giphy.gif&ct=g"} />
                    </div>
                    <h3 className="green">Ditt köp gick igenom</h3>
                </div>
            </Style>
        )
    } else if (status === 'cancel') {
        return (
            <Style>
                <div className='contained extra-small'>
                    <div>
                        <Image width={400} height={400} alt="gif" src={"https://media2.giphy.com/media/2IFXZDePUQAAU/giphy.gif?cid=ecf05e47yr1wbt50i1cahg6g6ffb4qndwndqd25b3455gmcf&rid=giphy.gif&ct=g"} />
                    </div>
                    <h3 className="red">Ditt köp gick inte igenom</h3>
                </div>

            </Style>
        )
    }


  return (
    <div>Access denaid</div>
    
  )
}

const Style = styled.div`
margin-top: 200px;
overflow: hidden;

@keyframes slidein {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
}


.contained{
    display: flex;
    flex-direction: column;
    align-items: center;
    animation-duration: 3s;
    animation-name: slidein;

    img{
        border-radius: 20px;

        .mobile & {
            width: 300px;
        }
    }
    

    h3{
        margin-top: 20px;

        &.green {
            color: darkgreen;
        }
        
        &.red {
            color: darkred;
        }
    }
}
`

export default index

 