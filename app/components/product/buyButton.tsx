import { type Product as StrapiProduct } from "@/app/types/strapi";
import { useCartStore } from "../store/cartStore";

export function BuyButton({ product }: { product: StrapiProduct }) {
                    
    const { items, addItem, removeItem, getTotal } = useCartStore();
    
    const agregarProducto = (product: StrapiProduct) => {
        addItem({
            id: product.id.toString(),
            name: product.name,
            price: product.price,
            quantity: 1,
        })
    }

    const data = () => {
        console.log(items)
    }

    return (
        <button 
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 px-4 rounded-lg transition-colors duration-200 hover:cursor-pointer items-end"
        onClick={() => agregarProducto(product)}>
            comprar
        </button>
            )
}