import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            inventory: []
        }
        this.getInventory=this.getInventory.bind(this)
    // this.deleteProduct = this.deleteProduct.bind(this)
    }

      
    componentDidMount(){
    this.getInventory()  
   
   }
    getInventory(){
        axios.get('/api/inventory').then(res=>
        this.setState({
          inventory: res.data
        }))
      }

    deleteProduct(id){
      
        axios.delete(`/api/product/${id}`).then(res=>
        console.log(res.data))

    }

    render(){
        // console.log(this.props.inventory.id)
        // console.log(this.props.inventory)
        let products = this.state.inventory.map(product => {
            let {id, name, price, img} = product
            return(
                <Product id={id} name={name} price={price} image={img} deleteProduct={this.deleteProduct(product.id)}/>
            )
        })

        return(
            <div>
                <Link to='/'>Dashboard</Link>
                <Link to='/add'>Add Inventory</Link>
                {products}
               
            </div>
        )
    }
}

export default Dashboard