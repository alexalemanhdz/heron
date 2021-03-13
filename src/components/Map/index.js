import React, { useRef, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet.heat';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import { crimeCoords } from '../../data/crimeCoords';

const Container = styled.div`
  height: 315px;
  width: 315px;
`;

const Map = () => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = L.map('map').setView([19.327421, -99.167824], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapRef.current);

    L.heatLayer(crimeCoords).addTo(mapRef.current);

    // L.Routing.control({
    //   waypoints: [
    //     L.latLng(19.325874, -99.164856),
    //     L.latLng(19.328115, -99.16230999999999),
    //   ],
    //   routeWhileDragging: true,
    //   geocoder: L.Control.Geocoder.nominatim(),
    // }).addTo(mapRef.current);
  }, []);

  // useEffect(() => {
  //   const geocoder = new L.Control.Geocoder.Nominatim();
  //   geocoder.geocode(query, (results) => {
  //     console.log(results);
  //   });
  // });

  return <Container id="map" />;
};

Map.propTypes = {
};

export default Map;
