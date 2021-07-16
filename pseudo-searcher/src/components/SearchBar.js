//text input na gorze
 //musze uzyc steata
 import React from 'react';
 class SearchBar extends React.Component{
     state={term:''};
     
     render(){
         //nie chcemy trzymac info w DOM, stad ten refactroing
         //jakbym chcial dowiedziec sie jaka wartosc jest teraz, to nie musze siegac do DOM
         //chcemy po prostu wiecej reacta mniej dom
         //kontrolowany~!
         //controlled flow
         return (<div className="ui segment">
             <form className="ui form">
                 <div className="field">
                     <label>Image Search</label>
                     <input type="text" value ={this.state.term} onChange={(e)=>this.setState
                        ({term:e.target.value.toUpperCase()})}/> 
                 </div>  
             </form>  
             </div>);
     }
 } 
 export default SearchBar; 