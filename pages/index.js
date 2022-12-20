import { useEffect, useState } from "react"
import { useDevices } from "../src/utils/LayoutHandler"
import Wordpress from "../src/utils/Wordpress"



export default function Home() {
  const [mobile, tablet, desktop] = useDevices()
  // console.log([mobile, tablet, desktop])
  

  return (
    <div>
      <div className="h1">Hej</div>
    </div>
  )
}


