import { createContext, useContext, useRef } from "react";
import content from "../data/content.json";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const refs = {
        about:useRef(null),
        experience:useRef(null),
        projects:useRef(null),
        contact:useRef(null)
    }

    return(
        <AppContext.Provider value={{content,refs}}>
            {children}
        </AppContext.Provider>
    )
}

const useApp = () => useContext(AppContext);  

export const useContent = () =>{
    return useApp().content
}   

export const useRefs = () =>{
    return useApp().refs
}   