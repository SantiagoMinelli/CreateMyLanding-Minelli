import { createContext, useEffect } from "react";
import { useLocalStorage } from "../../useLocalStorage";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useLocalStorage('cartItems', []);

    // Sincronización entre pestañas
    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'cartItems') {
                setCartItems(JSON.parse(e.newValue));
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [setCartItems]);
    
    // Cantidad de productos distintos (únicos)
    const cantidadProductos = () => {
        return cartItems.length;
    };

    const agregarAlCarrito = (item) => {
        setCartItems((prev) => {
            const itemExistente = prev.find((i) => i.id === item.id);
            if (itemExistente) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, cantidad: i.cantidad + item.cantidad } : i
                );
            } else {
                return [...prev, item];
            }
        });
    };

    const removerDelCarrito = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const vaciarCarrito = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider 
            value={{ 
                cartItems, 
                cantidadProductos,
                agregarAlCarrito, 
                removerDelCarrito, 
                vaciarCarrito 
            }}
        >
            {children}
        </CartContext.Provider>
    );
};