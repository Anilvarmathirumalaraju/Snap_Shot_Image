import Bird from "./components/types/birds";
import Mountain from "./components/types/mountain";
import Beach from "./components/types/beach";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Food from "./components/types/food";
import Search from "./components/types/search";
import { Themecontext } from "./components/context/context";
// import { Themecontext } from "./components/context/context";



const App=()=>{
    return(
        <div id="main">
       
         <BrowserRouter>
         <Routes>
          
            <Route path="/" element={<Search/>}/>
            <Route path="mountain" element={<Mountain/>}/>
            <Route path="bird" element={<Bird/>}/>
            <Route path="food" element={<Food/>} />
            <Route path="beach" element={<Beach/>}/>
         </Routes>
         </BrowserRouter>
    
        
          
        </div>
    )

}
export default App;