import { createContext, useContext } from "react"
import type { ThemeProviderState } from "../utils/types"
 

 
const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}
 
const ThemeProviderContext = createContext<ThemeProviderState>(initialState)
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
 
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")
 
  return context
}
 export default ThemeProviderContext;