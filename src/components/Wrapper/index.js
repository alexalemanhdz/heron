/**
 *
 * Wrapper
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme, { spacingMapping } from '../../utils/theme';

const Container = styled.div`
  align-items: ${(props) => (props.flex ? props.flex.alignItems : '')};
  background-color: ${(props) => {
    switch (props.background) {
      case 'primary':
        return theme.palette.primary;
      case 'offWhite':
        return theme.palette.background.offWhite;
      case 'dark':
        return theme.palette.background.dark;
      default:
        return theme.palette.background.white;
    }
  }};
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  flex-direction: ${(props) => (props.flex ? props.flex.flexDirection : '')};
  min-height: 100vh;
  justify-content: ${(props) => (props.flex ? props.flex.justifyContent : '')};
  padding: ${(props) => spacingMapping(props.padding)};
  padding-top: ${(props) => props.paddingTop
    ? spacingMapping(props.paddingTop)
    : spacingMapping(props.padding)};
  padding-bottom: ${(props) => props.paddingBottom
    ? spacingMapping(props.paddingBottom)
    : spacingMapping(props.padding)};
`;

function Wrapper({
  p1,
  p2,
  p3,
  p4,
  p5,
  pt1,
  pt2,
  pt3,
  pt4,
  pt5,
  pb1,
  pb2,
  pb3,
  pb4,
  pb5,
  children,
  flex,
  primary,
  offWhite,
  dark,
}) {
  return (
    <Container
      padding={(() => {
        if (p5) return '5';
        if (p4) return '4';
        if (p3) return '3';
        if (p2) return '2';
        if (p1) return '1';
        return '0';
      })()}
      paddingTop={(() => {
        if (pt5) return '5';
        if (pt4) return '4';
        if (pt3) return '3';
        if (pt2) return '2';
        if (pt1) return '1';
        return null;
      })()}
      paddingBottom={(() => {
        if (pb5) return '5';
        if (pb4) return '4';
        if (pb3) return '3';
        if (pb2) return '2';
        if (pb1) return '1';
        return null;
      })()}
      background={(() => {
        if (primary) return 'primary';
        if (offWhite) return 'offWhite';
        if (dark) return 'dark';
        return 'white';
      })()}
      flex={flex}
    >
      {children}
    </Container>
  );
}

Wrapper.propTypes = {
  p1: PropTypes.bool,
  p2: PropTypes.bool,
  p3: PropTypes.bool,
  p4: PropTypes.bool,
  p5: PropTypes.bool,
  pt1: PropTypes.bool,
  pt2: PropTypes.bool,
  pt3: PropTypes.bool,
  pt4: PropTypes.bool,
  pt5: PropTypes.bool,
  pb1: PropTypes.bool,
  pb2: PropTypes.bool,
  pb3: PropTypes.bool,
  pb4: PropTypes.bool,
  pb5: PropTypes.bool,
  children: PropTypes.any,
  flex: PropTypes.object,
  primary: PropTypes.bool,
  offWhite: PropTypes.bool,
  dark: PropTypes.bool,
};

export default Wrapper;
