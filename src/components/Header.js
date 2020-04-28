import React from 'react';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2 className="carName">{props.car.name}</h2>
      <p className="carAmount"> Amount: <span className="dollars">${props.car.price}</span></p>
    </>
  );
};

export default Header;
