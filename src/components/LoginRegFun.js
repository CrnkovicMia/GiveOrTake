import { useState } from "react";

export const LoginRegFun = () =>{
        const [state, setState] = useState(false);

        const setLog =() =>{
            setState(!state);
        };
        

        return [state, setLog];
} 