import { createContext, useReducer } from "react";
import { productosReducer } from "./productosReducer"; // Asegurate que el nombre coincida con el archivo

export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
    const initialState = {
        productos: [],
    };

    const [state, dispatch] = useReducer(productosReducer, initialState);

    return (
        <ProductosContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductosContext.Provider>
    ); 
};