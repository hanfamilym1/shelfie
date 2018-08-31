import React from 'react'

export default function Product(props){
    return(
        <div>
            {props.name} <br/>
            {props.price} <br/>
            {props.image} <br/>
        </div>
    )
}