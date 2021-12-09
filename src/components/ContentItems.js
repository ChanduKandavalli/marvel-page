import React, { Component } from 'react'

export class ContentItems extends Component {
    render() {
        
        let {name,  imageUrl}= this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img height="200px" width="150px" src={imageUrl} className="card-img-top" alt="..."/>
                    <div className ="card-body">
                    <h5 className ="card-title">{name}</h5>
                    <p className ="card-text">Action figures from the pop culture landscape</p>
                    <a href="/" className ="btn btn-sm btn-primary">Add to cart</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentItems
