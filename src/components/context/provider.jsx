import { useState } from "react"
import { Themecontext } from "./context"
import Header from "../header/header"
import "./context.css"

const Themeprovider = (props)=>{
    const[theme,settheme]=useState("light")
    return(
      <Themecontext.Provider value={{theme:theme , updatetheme:settheme}}>
          <Header/>
          
      </Themecontext.Provider>
    )
}
export default Themeprovider