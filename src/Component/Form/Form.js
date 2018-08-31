import React, {Component} from 'react'
import '../Form/Form.css'
import axios from 'axios'

class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            urlinput: '',
            productinput: '',
            price: 0
        }
        this.handleUrlInput = this.handleUrlInput.bind(this)
        this.resetButton = this.resetButton.bind(this)
        // this.createProduct = this.createProduct.bind(this)
    }

    handleUrlInput(val){
        this.setState({
            urlinput: val
        })
    }
    handleProductInput(val){
        this.setState({
            productinput: val
        })
    }

    handlePrice(val){
        this.setState({
            price: val
        })
    }

    resetButton(){
        this.setState({
            urlinput: '',
            productinput: '',
            price: 0
        })
    }

    // createProduct(){
    //     let {urlinput, productinput, price} = this.state
    //     axios.post('/api/product',{urlinput,productinput,price}).then(res=>
    //     console.log(res.data))
    // }

    render(){
        console.log(this.state.urlinput)
        console.log(this.state.productinput)
        console.log(this.state.price)
        return(
            <div className='formofproducts'>
                <label htmlFor="">Image URL</label> <br/>
                <input type="text" value={this.state.urlinput} onChange={(e=>this.handleUrlInput(e.target.value))}/> <br/>
                <label htmlFor="">Product Name</label> <br/>
                <input type="text" value={this.state.productinput} onChange={(e=>this.handleProductInput(e.target.value))}/> <br/>
                <label htmlFor="">Price</label> <br/>
                <input type="number" value={this.state.price} onChange={(e=>this.handlePrice(e.target.value))}/> <br/>
                <button onClick={this.resetButton}>Cancel</button>
                <button>Add to Inventory</button>

            </div>
        )
    }
}

export default Form