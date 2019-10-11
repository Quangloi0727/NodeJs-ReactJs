import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
            <div className="col-3 mt-4">
                <div className="card text-left">
                    <img className="card-img-top" src={this.props.image} alt="đây là ảnh" height="200px" width="300px"/>
                    <div className="card-body">
                    <b className="card-title">{this.props.product_name}:</b>
                    <i className="card-text">{this.props.product_price}</i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;