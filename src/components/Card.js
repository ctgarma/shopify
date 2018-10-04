import React, { Component } from 'react'

class Card extends Component {
    render() {

        const {data} =this.props;
        const items = data.map ((item)=> {
            return (
                <div key={item.id} className="card col-4 medium-6">
                    <div className="card-image">
                        <img src={`/images/${item.productImage}`} alt={item.productImage} />
                    </div>
                    <div className="card-details">
                    </div>
                </div>
            )
        })
            return items;    
    }
}


export default Card;
