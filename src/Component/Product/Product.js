import React from 'react'
import './Product.css'

export default function Product(props){
    return(
        <div className='product'>
            {props.name} <br/>
            {props.price} <br/>
            {props.image} <br/>
        </div>
    )
}