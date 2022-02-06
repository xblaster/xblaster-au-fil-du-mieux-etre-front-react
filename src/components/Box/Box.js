import React from 'react';
import './Box.css';
import PropTypes from 'prop-types';

function Box(props) {
  return (
    <div className="Box" data-testid="Box">
      Box Component
      {props.name}
    </div>
  );
}

Box.propTypes = {
  name: PropTypes.string
}

Box.defaultProps = {};

export default Box;
