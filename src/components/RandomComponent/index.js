import React from 'react';
import PropTypes from 'prop-types';

const RandomComponent = ({
  text,
  number,
  array,
  nested,
  boolean,
  list,
  click,
}) => (
  <div>
    <div>text: {text}</div>
    <div>number: {number}</div>
    <div>array: {array.toString()}</div>
    <div>nested: {JSON.stringify(nested)}</div>
    <button disabled={boolean}>{String(boolean)}</button>
    <button>click: {click}</button>
    <ul>
      {list.map(({fruit, calories}) => (
        <li>
          fruit: {fruit} |
          calories: {calories}
        </li>
      ))}
    </ul>
  </div>
)

RandomComponent.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  array: PropTypes.array.isRequired,
  nested: PropTypes.object.isRequired,
  boolean: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    fruit: PropTypes.string,
    calories: PropTypes.string,
  })),
  /** onClick runs special function !!. */
  click: PropTypes.func.isRequired,
}

export default RandomComponent;
