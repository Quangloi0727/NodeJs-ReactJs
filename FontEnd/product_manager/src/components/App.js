import React, { Component } from 'react';
import HeaderTitle from './HeaderTitle';
import Products from './Products';
import axios from 'axios';
const getProductData=()=>
        axios.get('/getdata')
        .then((res)=>res.data)
const addProduct=(product_name,product_price,image)=>{
  return axios.post('/add',{product_name,product_price,image})
          .then((resp)=>{
              return resp.data;
          })
        }
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:null,
      product_name:'',
      product_price:'',
      image:''
    }
  }
  UNSAFE_componentWillMount(){
    if(this.state.data===null){
      getProductData().then((res)=>{
        this.setState({
          data:res
        });
      })
    }
  }
  printData=()=>{
    if(this.state.data!==null){
      return this.state.data.map((value,key)=>{
        return(
          <Products
          product_name={value.product_name}
          product_price={value.product_price}
          image={value.image}
          key={key}
        />
        )
      })
    }
  }
  
  isChage=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    this.setState({
        [name]:value
    });
  }
  handleClick=()=>{
      var {product_name,product_price,image}=this.state;
      var dataTemp=[];
      var item={};
        item.product_name=product_name;
        item.product_price=product_price;
        item.image=image;
      dataTemp=this.state.data;
      dataTemp.push(item);
      this.setState({
        data:dataTemp
      });
      addProduct(product_name,product_price,image).then((response)=>{
          console.log(response);
      })
  }
  render() {
    return (
      <div>
        <HeaderTitle/>
        <div className="container-fuild">
          <div className="row">
            <div className="col">
              <div className="row">
                 {this.printData()}
              </div>
            </div>
            <div className="col-3">
            <h2 className="text-center">Thêm mới sản phẩm vào Database</h2>
              <form >
                  <div className="form-group">
                  <label>Tên sản phẩm</label>
                  <input type="text" name="product_name" id="product_name" className="form-control" placeholder="Nhập tên sản phẩm" onChange={(event)=>{this.isChage(event)}}/>
                  </div>
                  <div className="form-group">
                  <label>Giá sản phẩm</label>
                  <input type="text" name="product_price" id="product_price" className="form-control" placeholder="Nhập giá sản phẩm"  onChange={(event)=>{this.isChage(event)}}/>
                  </div>
                  <div className="form-group">
                  <label>Đường link ảnh</label>
                  <input type="text" name="image" id="image" className="form-control" placeholder="Nhập link sản phẩm"  onChange={(event)=>{this.isChage(event)}} />
                  </div>
                  <button type="reset" className="btn btn-info" onClick={()=>{this.handleClick()}}>Thêm sản phẩm</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;