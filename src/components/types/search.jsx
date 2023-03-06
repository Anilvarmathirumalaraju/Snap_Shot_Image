import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import Header from "../header/header";

const Search=()=>{
    const [data,setdata]=useState([]);
    const [zoom,setZoom]=useState(Array(100).fill(false));
    const [input,setInput]=useState("");
    const [search,setsearch]=useState(false);
    const zoomImage=(ind)=>{
        zoom[ind]=true;
        setZoom([...zoom]);
       
    }
    const unzoomImage=(ind)=>{
        zoom[ind]=false
        setZoom([...zoom]);
        
    }
    useEffect(()=>{
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e71040dad89db8bad03c8b73def4779d&tags=${input}&format=json&nojsoncallback=1`;
        axios.get(url).then((response)=>{setdata(response.data.photos.photo)}).catch((err)=>{console.log(err)});
    },[search])
    return(
        <>
        <Header function={setInput} trigger={setsearch} value={search}/>
       
        <div id="imageContainer">
              {data.map((value,index)=>{
                const imgUrl=`https://farm${value.farm}.staticflickr.com/${value.server}/${value.id}_${value.secret}.jpg`
                return(
                    <img key={value.id} src={imgUrl} onMouseOver={()=>{zoomImage(index)}} onMouseLeave={()=>{unzoomImage(index)}}  className={zoom[index]?"img":"original"} alt="mountainPictures"/>
                )
              })}
        </div>
        </>
    )
}
export default Search;