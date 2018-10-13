import React, { Component } from "react";

class Card extends Component {
  render() {
    const { data, filter } = this.props;

    const filtered = data.filter(item => {
      return item.size.indexOf(filter);
    });

    const items = filtered.map(item => {
      return (
        <div key={item.index} className="card col-4 medium-6">
          <div className="card-image">
            <img src={`/images/${item.productImage}`} alt={item.productImage} />
          </div>
          <div className="sign">
            <Sale isSale={item.isSale} />
            <Exclusive isExclusive={item.isExclusive} />
          </div>
          <div className="details">
            <strong>{item.productName}</strong>
            <strong className="price">{item.price}</strong>
          </div>
          <div className="card-details" />
        </div>
      );
    });

    return items;
  }
}

function Sale(props) {
  if (props.isSale) {
    return <div className="red">Sale</div>;
  } else return null;
}

function Exclusive(props) {
  if (props.isExclusive) {
    return <div className="blue">Exclusive</div>;
  } else return null;
}

export default Card;
