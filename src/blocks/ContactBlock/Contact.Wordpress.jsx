import Contact from "./Contact";
import React from 'react'

export default function ContactWordpress({data}) {
  return (
    <Contact
    backgroundColor={data.backgroundColor}
    title={data.title}
    textColor={data.textColor}     

    />
  )
}
