import Lottie from "react-lottie"
import * as lottieJson from './Lottie.json'
import styled from "styled-components"
export default function LottieAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <Style>
      <Lottie options={defaultOptions} height={200} width={130} />
    </Style>
  )
}
const Style = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: var(--color-dark-green);
`