import React from 'react';
import { connect } from 'react-redux';
import { sawCats } from './actions';

@connect(({ amount }) => ({
  amount
}), {
  sawCats
})
export default connect(({ amount }) => ({
  amount
}), {
  sawCats
})(({ amount, sawCats, ...props }) => ...);
