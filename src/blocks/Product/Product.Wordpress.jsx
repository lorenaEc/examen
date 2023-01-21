import React from "react";
import Product from "./Product";

export default function ProductWordpress({ data }) {
    return (
        <Product
        backgroundColor={data.backgroundColor}
        title={data.title}
        textColor={data.textColor}
    />
    )
}

