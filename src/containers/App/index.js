import React, { useState } from 'react';

import '../../styles/fonts.css';

import Wrapper from '../../components/Wrapper';
import InputAutocomplete from '../../components/InputAutocomplete';
import Button from '../../components/Button';
import Map from '../../components/Map';

import streets from '../../data/streets';
import crossings from '../../data/crossings';
import crimeIndexes from '../../data/crimeIndexes';

const App = () => {
  const [startStreet, setStartStreet] = useState(null);
  const [endStreet, setEndStreet] = useState(null);
  const [pointList] = useState([]);
  const [counter, setCounter] = useState(0);

  const updateStartStreet = (value) => {
    pointList.forEach((point) => pointList.pop(point));
    setStartStreet(value);
  };

  const updateEndStreet = (value) => {
    pointList.forEach((point) => pointList.pop(point));
    setEndStreet(value);
  };

  const dijkstra = () => {
    let current = startStreet;
    const unvisited = {};
    streets.forEach((street) => {
      unvisited[street] = null;
    });
    const visited = {};
    let currentDistance = {
      distance: 0,
      predecessor: null,
    };

    const loop = (index) => {
      if (unvisited[index[0]] === undefined) return;
      const crimeIndex = crimeIndexes[index[0]];
      const newDistance = currentDistance.distance + crimeIndex;
      if (
        unvisited[index[0]] === null
        || unvisited[index[0]].distance > newDistance
      ) {
        unvisited[index[0]] = {
          distance: newDistance,
          predecessor: current,
        };
      }
    };

    while (true) {
      Object.entries(crossings[current]).forEach(loop);
      visited[current] = currentDistance;
      delete unvisited[current];
      if (Object.keys(unvisited).length === 0) break;
      const candidates = [];
      Object.entries(unvisited).forEach((value) => {
        if (value[1] !== null) candidates.push(value);
      });
      const temp = candidates.sort((a, b) => a[1].distance - b[1].distance);
      [[current, currentDistance]] = temp;
    }

    const tempList = [];
    let currentBack = endStreet;
    while (currentBack !== startStreet) {
      tempList.push(crossings[currentBack][visited[currentBack].predecessor]);
      currentBack = visited[currentBack].predecessor;
    }
    tempList.forEach((temp) => pointList.push(temp));
    setCounter(counter + 1);
  };

  return (
    <Wrapper
      flex={{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
      primary
    >
      <InputAutocomplete
        m2
        mt5
        placeholder="Calle origen"
        suggestions={streets}
        onReady={updateStartStreet}
        error={false}
      />
      <InputAutocomplete
        m2
        mb3
        placeholder="Calle destino"
        suggestions={streets}
        onReady={updateEndStreet}
        error={false}
      />
      <Button
        m1
        p3
        mb5
        message="Calcular ruta"
        onClick={dijkstra}
        disabled={!(startStreet && endStreet)}
      />
      <Map pointList={pointList.reverse()} counter={counter} />
    </Wrapper>
  );
};
export default App;
