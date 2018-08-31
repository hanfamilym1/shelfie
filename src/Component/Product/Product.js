import React from 'react'
import './Product.css'
import {Link} from 'react-router-dom'

export default function Product(props){
    return(
        <div className='product'>
           

            {props.name} <br/>
            {props.price} <br/>
            {props.image} <br/>
            <button onClick={props.deleteProduct}>Delete</button>
        </div>
    )
}