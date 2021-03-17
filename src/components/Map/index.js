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
  height: 345px;
  width: 345px;
`;

const Map = ({ pointList, counter }) => {
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
    if (pointList.length) {
      const controlSafest = L.Routing.control({
        lineOptions: {
          styles: [
            { color: 'blue', opacity: 0.5 },
          ],
        },
        waypoints: pointList.map((point) => L.latLng(point.lat, point.lon)),
        routeWhileDragging: true,
        createMarker() { return null; },
      });

      const controlShortest = L.Routing.control({
        lineOptions: {
          styles: [
            { color: 'red', opacity: 0.5 },
          ],
        },
        waypoints: [
          L.latLng(pointList[0].lat, pointList[0].lon),
          L.latLng(pointList[pointList.length - 1].lat, pointList[pointList.length - 1].lon),
        ],
        routeWhileDragging: true,
        createMarker() { return null; },
      });

      if (pointList.length) {
        controlSafest.addTo(mapRef.current);
        controlShortest.addTo(mapRef.current);
      }

      return () => {
        mapRef.current.removeControl(controlSafest);
        mapRef.current.removeControl(controlShortest);
      };
    }
    return null;
  }, [counter]);

  return <Container id="map" />;
};

Map.propTypes = {
  pointList: PropTypes.array,
  counter: PropTypes.number,
};

export default Map;
