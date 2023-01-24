import FullImage from "./FullImage";

export default function FullImageWordpress({data}){
    console.log(data)
    return (
        <FullImage
        image={data.image}
        title={data.title}
        textColor={data.textColor}
        button={data.button}
        />
    )
}