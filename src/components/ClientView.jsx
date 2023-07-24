/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import PropTypes from 'prop-types';

export const ClientView = ({title, Client}) => {

  const { firstname, lastname, address } = Client;
  const { country, city, street, number } = address;

  // otra forma de destructurar el address(direccion)
  // const { firstname, lastname, address : { country, city, street, number } } = Client;
  
  return (
    <>
      <h3>{title}</h3>
      <ul className="list-group">
        <li className="list-group-item active"> {firstname} {lastname} </li>
        <li className="list-group-item"> {country} / {city} </li>
        <li className="list-group-item"> {street} {number} </li>
      </ul>
    </>
  );
};

ClientView.propTypes = {
title: PropTypes.string.isRequired,
Client: PropTypes.object.isRequired,

}
