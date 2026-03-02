"use client"

import { useEffect, useState } from "react"
import { getProducts } from "../lib/api"
import { type Product as StrapiProduct } from "../types/strapi"
import { Product } from "./product/product"

export function Main() {

    const [ productList, setProductList ] = useState<StrapiProduct[]>([])

    useEffect(() => {
        async function getListProducts() {
            const products = await getProducts()
            setProductList(products)
        }
        getListProducts()
    }, [])

    return (
        <div>
            {productList.map((product) => (
                <div key={product.id}>
                    <Product data={product}/>
                </div>
            ))}
        </div>
    )
}