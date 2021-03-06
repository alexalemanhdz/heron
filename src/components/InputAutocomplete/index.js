/**
 *
 * InputAutocomplete
 *
 */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import theme, { spacingMapping } from '../../utils/theme';

const Container = styled.div`
  width: 315px;
  margin: ${(props) => spacingMapping(props.margin)};
  margin-top: ${(props) => props.marginTop
    ? spacingMapping(props.marginTop)
    : spacingMapping(props.margin)};
  margin-bottom: ${(props) => props.marginBottom
    ? spacingMapping(props.marginBottom)
    : spacingMapping(props.margin)};
`;

const Input = styled.input`
  background-color: ${theme.palette.background.offWhite};
  border-radius: ${theme.rounding.wedged};
  border-style: none;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  width: 100%;
  box-sizing: border-box;
  font-family: ${theme.typeface.default};
  font-weight: 500;

  &::placeholder {
    color: ${theme.palette.text.offWhite};
    font-family: ${theme.typeface.default};
    font-weight: 500;
  }

  &.error:not(:hover) {
    box-shadow: red 0 0 2px 2px !important;
  }
`;

const Suggestions = styled.ul`
  width: 100%;
  margin: ${theme.spacing[0]};
  list-style: none;
  padding: ${theme.spacing[2]} ${theme.spacing[0]};
  max-height: 150px;
  overflow-y: scroll;
  transition-duration: 0.2s;

  &.hidden {
    max-height: 0;
    padding: ${theme.spacing[0]};
  }

  li {
    width: 100%;
  }

  li>button {
    font-family: ${theme.typeface.default};
    font-weight: 500;
    padding: ${theme.spacing[2]} ${theme.spacing[4]};
    width: 100%;
    background-color: transparent;
    border-style: none;
    text-align: left;
    cursor: pointer;
    transition-duration: 0.1s;
  }

  li>button:hover {
    background-color: ${theme.palette.background.offWhite};
  }
`;

function InputAutocomplete({
  m1,
  m2,
  m3,
  m4,
  m5,
  mt1,
  mt2,
  mt3,
  mt4,
  mt5,
  mb1,
  mb2,
  mb3,
  mb4,
  mb5,
  placeholder,
  suggestions,
  onReady,
  error,
}) {
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [query, setQuery] = useState('');

  let mainInputRef = useRef(null);

  const updateQuery = (q) => {
    setShowSuggestions(true);
    setQuery(q);
    onReady('');
  };

  const updateSelectedValue = (q) => {
    setShowSuggestions(false);
    mainInputRef.value = q;
    onReady(q);
  };

  return (
    <Container
      margin={(() => {
        if (m5) return '5';
        if (m4) return '4';
        if (m3) return '3';
        if (m2) return '2';
        if (m1) return '1';
        return '0';
      })()}
      marginTop={(() => {
        if (mt5) return '5';
        if (mt4) return '4';
        if (mt3) return '3';
        if (mt2) return '2';
        if (mt1) return '1';
        return null;
      })()}
      marginBottom={(() => {
        if (mb5) return '5';
        if (mb4) return '4';
        if (mb3) return '3';
        if (mb2) return '2';
        if (mb1) return '1';
        return null;
      })()}
    >
      <Input
        ref={(e) => {
          mainInputRef = e;
          return 0;
        }}
        placeholder={placeholder}
        onChange={(e) => updateQuery(e.target.value)}
        className={error ? 'error' : ''}
      />
      <Suggestions className={showSuggestions && query ? '' : 'hidden'}>
        {suggestions
          .filter((sug) => {
            const regex = new RegExp(query, 'gi');
            return sug.match(regex);
          })
          .map((sug) => (
            <li>
              <button onClick={() => updateSelectedValue(sug)} type="button">{sug}</button>
            </li>
          ))}
      </Suggestions>
    </Container>
  );
}

InputAutocomplete.propTypes = {
  m1: PropTypes.bool,
  m2: PropTypes.bool,
  m3: PropTypes.bool,
  m4: PropTypes.bool,
  m5: PropTypes.bool,
  mt1: PropTypes.bool,
  mt2: PropTypes.bool,
  mt3: PropTypes.bool,
  mt4: PropTypes.bool,
  mt5: PropTypes.bool,
  mb1: PropTypes.bool,
  mb2: PropTypes.bool,
  mb3: PropTypes.bool,
  mb4: PropTypes.bool,
  mb5: PropTypes.bool,
  placeholder: PropTypes.string,
  suggestions: PropTypes.array.isRequired,
  onReady: PropTypes.func,
  error: PropTypes.bool.isRequired,
};

export default InputAutocomplete;
