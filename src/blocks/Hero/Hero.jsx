import react from "react";
import styled from "styled-components";
import { useDevices } from "../../utils/LayoutHandler";

const Hero = ({ image, title, description, layout }) => {
    const [mobile, tablet, desktop] = useDevices()
    return (
        <Style className={`hero`} style={{
            backgroundImage: `url(${image.src})`
        }}>
            <div className="overlay" />
            <div className="wrapper">
                <div className='contained'>
                    <div className={`${layout === 'centered' ? 'containerCenter' : 'bottomRight'}`}>
                        <div>
                    {title && <h1>{title}</h1>}
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                    </div>
                </div>
            </div>

        </Style>

    )
}


export default Hero;

const Style = styled.section`
color: var(--color-white);
height: 85vh;
background: linear-gradient(0deg, rgba(0,0,0,0.6923144257703081) 0%, rgba(0,212,255,0) 100%);
background-size: cover;
background-position: center;

.mobile & {
    height: 65vh;
    background-position: top;
}


    .overlay {
        background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(255,255,255,0.3) 100%);
        height: 85vh;
        width: 100%;
        z-index: 2;
        position: absolute;

        .mobile & {
            height: 65vh;
        }   

    }

    .wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 3;
        
        .contained {
        height: 75%;
        width: 100vw;
        z-index: 3;

        .containerCenter {
            z-index: 3;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h1 {
                text-align: center;

            }

            div {
                margin-top: 10px;
                text-align: center;
            }
        }

        .bottomRight {
            z-index: 3;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            padding-bottom: 120px;

            .mobile & {
            display:none;
        }
        }
    }
    }

    
`