import react from "react"
import HeroWordpress from "../blocks/Hero/Hero.Wordpress"
import TextBlockWordpress from "../blocks/TextBlock/TextBlock.Wordpress"
import SplitWordpress from "../blocks/SplitBlock/Split.Wordpress"
import CollectionWordpress from "../blocks/Collection/Collection.Wordpress"
import ProductWordpress from "../blocks/Product/Product.Wordpress"
import ContactWordpress from "../blocks/ContactBlock/Contact.Wordpress"
import FullImageWordpress from "../blocks/FullImageBlock/FullImage.Wordpress"

export default function BlockRenderer({blocks}) {
    if(!blocks) return <></>
    return blocks?.map((block, index) => {
        switch(block.acf_fc_layout) {
            case 'hero':
                return <HeroWordpress key={index} data={block}/>
            case 'text':
                return <TextBlockWordpress key={index} data={block} />
            case 'split':
                return <SplitWordpress key={index} data={block} />     
            case 'collection':
                return <CollectionWordpress key={index} data={block} /> 
                case 'product':
                    return <ProductWordpress key={index} data={block} />  
                case 'contact':
                    return <ContactWordpress key={index} data={block} />    
                case 'fullImage':
                    return <FullImageWordpress key={index} data={block} />    
                              
                        
            
        }
    })
}