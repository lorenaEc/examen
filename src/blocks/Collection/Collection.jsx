import React, { useState, useEffect } from 'react'
import Woocommerce from '../../WooCommerce'
import styled from 'styled-components'
import Link from 'next/link'
import { useDevices } from '../../utils/LayoutHandler'
import { useRouter } from 'next/router'

function Collection({ backgroundColor, textColor, title, limit }) {
    const router = useRouter()
    const [mobile, tablet, desktop] = useDevices()
    const [collection, setCollection] = useState()
    const [filterCollection, setFilterCollection] = useState()

  //Get all Categories from woocommerce 
    useEffect(() => {
        async function getCategories() {
            const categories = await Woocommerce.getCategories()
            setCollection(categories)
            //Loop and filter other Categories
            const filterCategory = [];
            for (let i = 0; i < categories?.length; i++) {
                if (router.query.category !== categories[i].slug) {
                    filterCategory.push(categories[i])
                }
            }
            setFilterCollection(filterCategory)
        }
        getCategories()
        
    }, [router.query.category])

    

    
    

    return (
        <Style style={{ '--backgroundColor': backgroundColor, '--textColor': textColor }}>
            <h2>{title}</h2>
            <div className={desktop ? 'contained' : 'mobileContainer'}>

                <div className= {`collection ${limit ? 'filtered' : '' }`}>
                    {limit ?
                    <>
                    {filterCollection && filterCollection.map((category, index) => (
                        <Link href={`/shop/${category.slug}`} key={index}>
                            {category.image.src && <div className='imageBox'><img src={category.image.src} /></div>}
                            <h4>{category.name}</h4>
                        </Link>
                    ))}
                    </>
                    :
                    <>
                    {collection && collection.map((category, index) => (
                        <Link href={`/shop/${category.slug}`} key={index}>
                            {category.image.src && <div className='imageBox'><img src={category.image.src} /></div>}
                            <h4>{category.name}</h4>
                        </Link>
                    ))}
                    </>
                    }
                </div>
            </div>
        </Style>
    )
}

export default Collection;

const Style = styled.section`

padding:100px 0;
background-color: var(--backgroundColor);
color: var(--textColor);


.mobile & {
    padding-top: 75px;
}

h2{
        text-align: center;
    }
.contained, .mobileContainer{
    overflow: auto;

    .collection.filtered{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        max-width: 50%;
        margin: 60px auto;

        .mobile & {
            max-width: 100%;
            margin: 40px 0px;
        }
    }

  
    .collection{
        margin-top:60px ;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 50px;
        column-gap: 50px;

        .mobile &, .tablet &{
            display: flex;
            overflow: scroll;
            padding-bottom: 20px;
          
        }

        .imageBox{
          max-height: 430px;
          display: flex;
          justify-content: center;
          box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 6px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
          border-radius: 5px;
          transition: ease .3s;

          &:hover {
            box-shadow: 5px 5px 18px #888888;
            
          }

          .mobile &, .tablet &{
            width: 300px;
            height: 300px;
        }

          img{
            width: 100%;
            border-radius: 5px;
          }

        }

        h4 {
            text-align: center;
            margin-top: 20px;
        }

        a{
            text-decoration: none;
            color: var(--textColor);
        }

    }
}
`
