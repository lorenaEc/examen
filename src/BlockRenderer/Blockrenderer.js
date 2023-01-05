import react from "react"
import HeroWordpress from "../blocks/Hero/Hero.Wordpress"


export default function BlockRenderer({blocks}) {
    if(!blocks) return <></>
    // console.log(blocks)
    return blocks?.map((block, index) => {
        switch(block.acf_fc_layout) {
            case 'hero':
                return <HeroWordpress key={index} data={block}/>
            
        }
    })
}