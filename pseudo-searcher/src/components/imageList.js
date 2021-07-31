import './imageList.css';
import React from 'react';  
import imageCard from './imageCard';
const ImageList =(props)=>{ 
    const images=props.images.map(image) =>{
        return <imageCard  key={id} />
    })
    return <div className="image-list">{images}</div>
}
export default ImageList; 
