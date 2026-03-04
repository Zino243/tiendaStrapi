"use client"

import { Header } from "../components/header"
import { useCartStore } from "../components/store/cartStore"

export default function ShopPage() {
    const { items, getTotal, removeItem, clearCart } = useCartStore()

    return (
        <>
            <Header />
            <main className="flex-1 max-w-6xl mx-auto w-full p-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">Tu carrito</h2>
                        {items.length === 0 ? (
                            <p className="text-muted-foreground">Tu carrito está vacío</p>
                        ) : (
                            <div className="space-y-4">
                                {items.map((item) => (
                                    <div 
                                        key={item.id} 
                                        className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border"
                                    >
                                        {item.image && (
                                            <img 
                                                src={item.image} 
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded"
                                            />
                                        )}
                                        <div className="flex-1">
                                            <h3 className="font-semibold">{item.name}</h3>
                                            <p className="text-muted-foreground">
                                                ${item.price} x {item.quantity}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold">${item.price * item.quantity}</p>
                                            <button 
                                                onClick={() => removeItem(item.id)}
                                                className="text-red-500 text-sm hover:underline"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="md:col-span-1">
                        <div className="bg-card rounded-lg border border-border p-6 shadow-lg relative">
                            <div className="absolute top-0 left-0 right-0 h-4 bg-muted rounded-t-lg" 
                                style={{
                                    background: 'repeating-linear-gradient(90deg, transparent, transparent 10px, #888 10px, #888 12px)'
                                }}
                            />
                            
                            <div className="pt-6">
                                <h2 className="text-xl font-bold text-center mb-6 border-b-2 border-dashed border-border pb-4">
                                    TICKET DE COMPRA
                                </h2>
                                
                                <div className="space-y-3 text-sm">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex justify-between">
                                            <span className="text-muted-foreground">
                                                {item.name} x{item.quantity}
                                            </span>
                                            <span>${item.price * item.quantity}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t-2 border-dashed border-border my-4" />

                                <div className="flex justify-between font-bold text-lg">
                                    <span>Total</span>
                                    <span>${getTotal()}</span>
                                </div>

                                <div className="mt-6 space-y-2">
                                    <button 
                                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-4 rounded-lg transition-colors"
                                        onClick={() => alert("Compra realizada!")}
                                    >
                                        Finalizar compra
                                    </button>
                                    {items.length > 0 && (
                                        <button 
                                            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                                            onClick={clearCart}
                                        >
                                            Vaciar carrito
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 h-4 bg-muted rounded-b-lg"
                                style={{
                                    background: 'repeating-linear-gradient(90deg, transparent, transparent 10px, #888 10px, #888 12px)'
                                }}
                            />
                        </div>

                        <p className="text-center text-xs text-muted-foreground mt-4">
                            Gracias por su compra
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}
