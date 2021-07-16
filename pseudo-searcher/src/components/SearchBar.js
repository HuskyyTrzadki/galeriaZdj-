//text input na gorze
 //musze uzyc steata
 import React from 'react';
 class SearchBar extends React.Component{
     state={term:''};
     onFormSubmit(event){
         event.preventDefault(); // nigdy wlaciwie nie chcemy z eby sie odswiezalo(czeste)
         console.log(this.state.term);//problem z this
         //!!!!!!!!!!! PROBLEM Z THIS !!! czesty 
         
     }
     render(){
         //nie chcemy trzymac info w DOM, stad ten refactroing
         //jakbym chcial dowiedziec sie jaka wartosc jest teraz, to nie musze siegac do DOM
         //chcemy po prostu wiecej reacta mniej dom
         //kontrolowany~!
         //controlled flow
         return (<div className="ui segment">
             <form onSubmit={this.onFormSubmit} className="ui form">
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