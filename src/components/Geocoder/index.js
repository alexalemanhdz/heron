import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet.heat';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';

const Geocoder = ({ query, suggestionsCallback }) => {
  useEffect(() => {
    const geocoder = new L.Control.Geocoder.Nominatim();
    geocoder.geocode(query, (results) => {
      suggestionsCallback(results);
    });
  });

  return <div>hola</div>;
};

Geocoder.propTypes = {
  query: PropTypes.string.isRequired,
  suggestionsCallback: PropTypes.func,
};

export default Geocoder;
