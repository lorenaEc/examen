import React from "react";
import Link from "next/link";
import styled from "styled-components";


export default function Footer() {
return (
    <Style>
        <div className='contained'>
            <div className="navContainer">
                <h3>Navigate</h3>
                <Link href={"/shop/taklampor"}><span className="p">Taklampor</span></Link>
                <Link href={"/shop/bordslampor"}><span className="p">Bordslapor</span></Link>
                <Link href={"/shop/golvlampor"}><span className="p">Golvlampor</span></Link>

            </div>

            <div className="infoContainer">
                <h3>Information</h3>
                <Link href={"/om-oss"}><span className="p">Om oss</span></Link>
                <Link href={"/login"}><span className="p">Logga in</span></Link>       
                <Link href={"/kontakt"}><span className="p">Kontakta oss</span></Link>
            </div>

            

            <div className="socialContainer">
            <Link href={'/'}><img className="logo" src="/icons/footer.svg"/></Link>

            <div className="icons">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.8332 25.1265C45.8332 13.5501 36.5068 4.16675 24.9998 4.16675C13.4929 4.16675 4.1665 13.5501 4.1665 25.1265C4.1665 35.5904 11.7832 44.2612 21.7443 45.8334V31.1862H16.4554V25.1251H21.7443V20.5084C21.7443 15.2556 24.854 12.3529 29.6137 12.3529C31.8915 12.3529 34.2776 12.7626 34.2776 12.7626V17.9209H31.6484C29.0609 17.9209 28.2554 19.5376 28.2554 21.1959V25.1265H34.0332L33.1096 31.1848H28.2554V45.8334C38.2165 44.2612 45.8332 35.5904 45.8332 25.1265Z" fill="#EEEBE4" />
                </svg>

                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M25 6.25C19.9075 6.25 19.27 6.27125 17.27 6.3625C15.2738 6.45375 13.91 6.77125 12.7175 7.235C11.4675 7.705 10.3337 8.4425 9.39625 9.3975C8.44278 10.3339 7.70482 11.4669 7.23375 12.7175C6.7725 13.91 6.45375 15.275 6.3625 17.2713C6.2725 19.27 6.25 19.9062 6.25 25C6.25 30.0938 6.27125 30.73 6.3625 32.73C6.45375 34.7262 6.77125 36.09 7.235 37.2825C7.705 38.5325 8.4425 39.6662 9.3975 40.6037C10.3339 41.5572 11.4669 42.2951 12.7175 42.7663C13.91 43.2287 15.2738 43.5462 17.27 43.6375C19.27 43.7287 19.9075 43.75 25 43.75C30.0925 43.75 30.73 43.7287 32.73 43.6375C34.7262 43.5462 36.09 43.2287 37.2825 42.765C38.5325 42.295 39.6662 41.5575 40.6037 40.6025C41.5572 39.6661 42.2952 38.5331 42.7663 37.2825C43.2287 36.09 43.5462 34.7262 43.6375 32.73C43.7287 30.73 43.75 30.0925 43.75 25C43.75 19.9075 43.7287 19.27 43.6375 17.27C43.5462 15.2738 43.2287 13.91 42.765 12.7175C42.2943 11.4663 41.5563 10.3329 40.6025 9.39625C39.6661 8.44278 38.5331 7.70482 37.2825 7.23375C36.09 6.7725 34.725 6.45375 32.7288 6.3625C30.73 6.2725 30.0938 6.25 25 6.25ZM25 9.62875C30.0063 9.62875 30.6 9.6475 32.5775 9.7375C34.405 9.82125 35.3975 10.125 36.0588 10.3837C36.9338 10.7225 37.5588 11.13 38.215 11.785C38.8713 12.4412 39.2775 13.0662 39.6162 13.9412C39.8738 14.6025 40.1787 15.595 40.2625 17.4225C40.3525 19.4 40.3713 19.9937 40.3713 25C40.3713 30.0063 40.3525 30.6 40.2625 32.5775C40.1787 34.405 39.875 35.3975 39.6162 36.0588C39.3162 36.8732 38.8373 37.61 38.215 38.215C37.6101 38.8375 36.8733 39.3163 36.0588 39.6162C35.3975 39.8738 34.405 40.1787 32.5775 40.2625C30.6 40.3525 30.0075 40.3713 25 40.3713C19.9925 40.3713 19.4 40.3525 17.4225 40.2625C15.595 40.1787 14.6025 39.875 13.9412 39.6162C13.1268 39.3162 12.39 38.8373 11.785 38.215C11.1627 37.6099 10.6839 36.8731 10.3837 36.0588C10.1262 35.3975 9.82125 34.405 9.7375 32.5775C9.6475 30.6 9.62875 30.0063 9.62875 25C9.62875 19.9937 9.6475 19.4 9.7375 17.4225C9.82125 15.595 10.125 14.6025 10.3837 13.9412C10.7225 13.0662 11.13 12.4412 11.785 11.785C12.3899 11.1626 13.1268 10.6837 13.9412 10.3837C14.6025 10.1262 15.595 9.82125 17.4225 9.7375C19.4 9.6475 19.9937 9.62875 25 9.62875Z" fill="#EEEBE4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M24.9998 31.2563C24.1782 31.2563 23.3647 31.0945 22.6056 30.7801C21.8466 30.4657 21.1569 30.0048 20.576 29.4239C19.995 28.8429 19.5342 28.1533 19.2198 27.3942C18.9054 26.6352 18.7436 25.8216 18.7436 25C18.7436 24.1785 18.9054 23.3649 19.2198 22.6059C19.5342 21.8468 19.995 21.1572 20.576 20.5762C21.1569 19.9953 21.8466 19.5344 22.6056 19.22C23.3647 18.9056 24.1782 18.7438 24.9998 18.7438C26.6591 18.7438 28.2504 19.4029 29.4236 20.5762C30.5969 21.7495 31.2561 23.3408 31.2561 25C31.2561 26.6593 30.5969 28.2506 29.4236 29.4239C28.2504 30.5972 26.6591 31.2563 24.9998 31.2563ZM24.9998 15.3625C22.4438 15.3625 19.9924 16.3779 18.1851 18.1853C16.3777 19.9927 15.3623 22.444 15.3623 25C15.3623 27.5561 16.3777 30.0074 18.1851 31.8148C19.9924 33.6222 22.4438 34.6375 24.9998 34.6375C27.5558 34.6375 30.0072 33.6222 31.8145 31.8148C33.6219 30.0074 34.6373 27.5561 34.6373 25C34.6373 22.444 33.6219 19.9927 31.8145 18.1853C30.0072 16.3779 27.5558 15.3625 24.9998 15.3625ZM37.441 15.1875C37.441 15.7917 37.201 16.3712 36.7738 16.7984C36.3466 17.2257 35.7671 17.4657 35.1629 17.4657C34.5587 17.4657 33.9793 17.2257 33.552 16.7984C33.1248 16.3712 32.8848 15.7917 32.8848 15.1875C32.8848 14.5834 33.1248 14.0039 33.552 13.5767C33.9793 13.1494 34.5587 12.9094 35.1629 12.9094C35.7671 12.9094 36.3466 13.1494 36.7738 13.5767C37.201 14.0039 37.441 14.5834 37.441 15.1875Z" fill="#EEEBE4" />
                </svg>
            </div>   

            </div>
        </div>

    </Style>

)
}


const Style = styled.footer`
   min-height: 300px;
   background-color: var(--color-dark-green);
   color: var(--color-white);

   a{
    text-decoration: none;
   }

   .contained{
    justify-content: space-between;
        display: flex;
        padding-top: 40px;
        flex-wrap: wrap;

        .mobile & {
            justify-content: space-around;
        }


        .navContainer{
            display:flex;
            flex-direction: column;
            gap: 25px;
            width: 30%;

        .p{
            color:var(--color-white); 
        }

        }

        .infoContainer{
            display:flex;
            justify-content: flex-end;
            flex-direction: column;
            gap: 25px;
            width: 35%;

            .mobile & {
                h3 {
                text-align: end;  
            }

            a {
                text-align: end;
            } 
            }

            .p{
                color:var(--color-white); 
                text-align: end;
            }

        }

        .socialContainer{

            display: flex;
            flex-direction: column;

            .mobile & {
                width: 100%;
                display: flex;
                flex-direction: row;
                margin: 30px 40px;
                justify-content: space-between;
            }
            
            .logo{
                .mobile & {
                width: 60px;
                height: 60px;
                
            }

            } 

            .icons{
                padding-top: 40px;
                display: flex;
                justify-content:space-between;
                gap:10px;

                .mobile & {
                padding-top: 15px;
                width: 80px;
                height: 80px;
                gap:5px;
            }

            }

        }
   }
`