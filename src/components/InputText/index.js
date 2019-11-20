import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({label, value, click}) => (
  <div>
    <div>{label}</div>
    <input type="text" onClick={click} value={value} />
  </div>
)

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  /** onClick runs special function !!. */
  click: PropTypes.func,
}

export default InputText;
