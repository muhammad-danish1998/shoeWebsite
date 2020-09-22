import React from 'react'
import Shoes from '../Shoes.json'
import Card from './Card'
import { Link } from 'react-router-dom'
const Product = () => {

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Product page</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {
                    Object.keys(Shoes).map((KeyName) => {
                        const shoe = Shoes[KeyName];
                        return (
                            <Link to = {`/product/${KeyName}`} key={KeyName} style ={{textDecoration : 'none'}}>
                                <Card shoe={shoe} />
                            </Link>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Product
