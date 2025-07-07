import type React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedPage ({children} : {children: React.ReactNode}){
    const username = localStorage.getItem("username");
    
    if(!username){
        return <Navigate to={'/login'} replace />
    }
    return <> { children } </>
}