import React from 'react'
import "./style.scss"

const Card = ({name,price,url,authorUrl,category,description,content,id,handleDelete}) => {
    return (
        <div className="col-4">
            <div id='card'>
                <div className="card-top">
                    <div className="card-top_img">
                        <img src={url} alt="" />
                    </div>
                    <h2>{content}</h2>
                    <h4>{description}</h4>
                </div>
                <div className="card-bottom">
                    <div className="card-bottom_img">
                        <img src={authorUrl} alt="" />
                    </div>
                    <h3>{name} <span> {category} </span></h3>
                    <button onClick={()=>handleDelete(id)}>Delete</button>
                    <span className="price">${price}</span>
                </div>
            </div>
        </div>
    )
}

export default Card