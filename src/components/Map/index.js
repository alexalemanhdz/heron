import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
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

const Map = ({ startPoint, endPoint }) => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = L.map('map').setView([19.327421, -99.167824], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapRef.current);

    L.heatLayer(crimeCoords).addTo(mapRef.current);
  }, []);

  useEffect(() => {
    if (startPoint.center && endPoint.center) {
      L.Routing.control({
        waypoints: [
          L.latLng(startPoint.center.lat, startPoint.center.lng),
          L.latLng(endPoint.center.lat, endPoint.center.lng),
        ],
        routeWhileDragging: true,
      }).addTo(mapRef.current);
    }
  });

  return <Container id="map" />;
};

Map.propTypes = {
  startPoint: PropTypes.object,
  endPoint: PropTypes.object,
};

export default Map;
