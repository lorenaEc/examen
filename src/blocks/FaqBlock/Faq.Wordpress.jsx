import Faq from "./Faq";

export default function FaqWordpress({data}){
    return (
        <Faq  
        title={data.title}
        textColor={data.textColor}
        backgroundColor={data.backgroundColor}
        faq={data.faq}/>
    )
}