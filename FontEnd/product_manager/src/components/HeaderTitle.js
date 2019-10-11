import React, { Component } from 'react';

class HeaderTitle extends Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <h1 className="display-3">Danh sách sản phẩm</h1>
                <p className="lead">Sử dụng React lấy dữ liệu từ NodeJS</p>
                <hr className="my-2" />
            </div>          
        );
    }
}

export default HeaderTitle;