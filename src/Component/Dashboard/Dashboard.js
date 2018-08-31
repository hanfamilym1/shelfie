import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        console.log(this.props.inventory)
        let products = this.props.inventory.map(product => {
            let {name, price, image} = product
            return(
                <Product name={name} price={price} image={image}/>
            )
        })

        return(
            <div>
                Dashboard Component
                {products}
               
            </div>
        )
    }
}

export default Dashboard