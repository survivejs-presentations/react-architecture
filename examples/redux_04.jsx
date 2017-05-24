import React from 'react';
import { connect } from 'react-redux';
import { sawCats } from './actions';

@connect(({ amount }) => ({
  amount
}), {
  sawCats
})
class CatCounter extends React.Component {
  render() {
    ...
  }
}

export default CatCounter;

// Alternative, you can also `compose` hocs
export default connect(({ amount }) => ({
  amount
}), {
  sawCats
})(CatCounter);
