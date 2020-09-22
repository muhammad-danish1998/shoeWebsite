import React from 'react'
import { useParams } from 'react-router-dom'
import Shoes from './Shoes.json'
import { Link } from 'react-router-dom'
const ProductDetail = () => {
    const { id } = useParams();
    const shoe = Shoes[id]
    console.log(shoe)
    if (!shoe)
        return <h2>Product not Found </h2>
    return (
        <div style ={{display :'flex' , alignItems : 'center', justifyContent : 'center'}}>
            <div className="card" style={{ width: '30rem', margin: 2 }}>
                <img src={shoe.img} className="card-img-top img-fluid" alt={shoe.name} style ={{height : 500}} />
                <div className="card-body">
                    <h5 className="card-title">{shoe.name}</h5>
                    <Link to="/product" className="btn btn-primary">Shop Again</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
