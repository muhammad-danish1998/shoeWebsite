import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ shoe }) => {
    return (
        <>
           
                    <div className="card"  style={{ width: '18rem'  ,  margin : 2}}>
                        <img src={shoe.img} className="card-img-top img-fluid" alt={shoe.name}  />
                        <div className="card-body">
                            <h5 className="card-title">{shoe.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to='#' className="btn btn-primary">Shop Now</Link>
                        </div>
                    </div>
        </>
    )
}

export default Card
