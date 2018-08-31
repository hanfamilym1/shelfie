import React, {Component} from 'react'
import '../Form/Form.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            img: '',
            name: '',
            price: 0
        }
        this.handleimg = this.handleimg.bind(this)
        this.resetButton = this.resetButton.bind(this)
        this.createProduct = this.createProduct.bind(this)
    }

    handleimg(val){
        this.setState({
            img: val
        })
    }
    handleProductInput(val){
        this.setState({
            name: val
        })
    }

    handlePrice(val){
        this.setState({
            price: val
        })
    }

    resetButton(){
        this.setState({
            img: '',
            name: '',
            price: 0
        })
    }

    createProduct(){
        let {img, name, price} = this.state
        axios.post('/api/product',{img,name,price}).then(res=>
        res.data)
        this.props.getInventory()
        this.resetButton()
    }


    render(){
        console.log(this.state.img)
        console.log(this.state.name)
        console.log(this.state.price)
        return(
            <div className='formofproducts'>

             <Link to='/'>Dashboard</Link>
            <Link to='/add'>Add Inventory</Link> <br/>
                <label htmlFor="">Image URL</label> <br/>
                <input type="text" value={this.state.img} onChange={(e=>this.handleimg(e.target.value))}/> <br/>
                <label htmlFor="">Product Name</label> <br/>
                <input type="text" value={this.state.name} onChange={(e=>this.handleProductInput(e.target.value))}/> <br/>
                <label htmlFor="">Price</label> <br/>
                <input type="number" value={this.state.price} onChange={(e=>this.handlePrice(e.target.value))}/> <br/>
                <button onClick={this.resetButton}>Cancel</button>
                <button onClick={this.createProduct}>Add to Inventory</button>
                

            </div>
        )
    }
}

export default Form