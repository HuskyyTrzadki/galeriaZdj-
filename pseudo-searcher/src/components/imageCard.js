import { render } from '@testing-library/react';
import React from 'react';

class imageCard extends React.Component{
    render(){
        return(
            <div>
             <img 
             alt={this.props.image.description}/>
             src={this.props.image.urls.regular}
            </div>
        )
    }
}

export default imageCard;