import react from "react"
import HeroWordpress from "../blocks/Hero/Hero.Wordpress"
import TextBlockWordpress from "../blocks/TextBlock/TextBlock.Wordpress"
import SplitWordpress from "../blocks/SplitBlock/Split.Wordpress"


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
            
        }
    })
}