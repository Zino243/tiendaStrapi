"use client"

import { useEffect, useState } from "react"
import { getProducts } from "../lib/api"
import { type Product as StrapiProduct } from "../types/strapi"
import { Product } from "./product/product"

export function Main() {

    const [ productList, setProductList ] = useState<StrapiProduct[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getListProducts() {
            try {
                const products = await getProducts()
                if (products) {
                    setProductList(products)
                }
            } catch (error) {
                console.error("Error fetching products:", error)
            } finally {
                setLoading(false)
            }
        }
        getListProducts()
    }, [])

    if (loading) {
        return (
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            </div>
        )
    }

    return (
        <main className="flex-1 p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-foreground">Productos</h1>
                <p className="text-muted-foreground">{productList.length} productos disponibles</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {productList.map((product) => (
                    <Product key={product.id} data={product}/>
                ))}
            </div>
        </main>
    )
}