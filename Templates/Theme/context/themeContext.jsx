import { createContext } from "react";

export const themeContextApi=createContext();

export const theme={
    light:{
        foreground:"#000",
        background:"#eee",
        color:"#000"

    },
    dark:
    {
        foreground:"#fff",
        background:"#111",
        color:"#fff"  
    }
}

