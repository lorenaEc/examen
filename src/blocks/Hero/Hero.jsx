import react from "react";
import Image from "next/image";
import styled from "styled-components";
import { useDevices } from "../../utils/LayoutHandler";

const Hero = ({ image, title, description, layout = 'bottom-right' }) => {
    const [mobile, tablet, desktop] = useDevices()
    return (
        <Style className={`hero`}>
            	{image?.src && <Image
                 src={image.src} 
                 alt={image.alt} 
                 width={1920} 
                 height={800} 
                 loading={'eager'} 
                 priority={true} />}

            <div className='contained'>
                <div className={`${layout == 'centered' ? 'containerCenter' : 'container'}`}>
                    <h1 className='h1' dangerouslySetInnerHTML={{ __html: title }} />
                    <p className='p' dangerouslySetInnerHTML={{ __html: description }} />

                </div>
            </div>

        </Style>

    )
}


export default Hero;

const Style = styled.section`
color: var(--color-white);
min-height: 70vh;
opacity: 0.65 !important;
background-color: #303030 !important;
`