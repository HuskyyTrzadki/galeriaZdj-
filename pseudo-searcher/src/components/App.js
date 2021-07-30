import React from "react";
import SearchBar from "./SearchBar"; 
import axios from 'axios';
class App extends React.Component{
    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos',{
            params:{query: term},
            headers:{
                Authorization: 'Client-ID 8orFCI1ApQg2Nz4x8kIEnwXJlTEPEA4d-96fnckFM-U'
            }
        }).then(response => {
            console.log(response.data.result);
        });
    }
    render(){
        return (<div className="uner" style={{marginTop:'100px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
    </div> )  
    }
      
};
export default App;