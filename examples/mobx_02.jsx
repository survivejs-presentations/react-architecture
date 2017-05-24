import React from 'react';
import { observer } from 'mobx-react';

@observer
class CatCounter extends React.Component {
  ...
}

export default CatCounter;

// Alternative. Works with stateless functions too
//export default observer(CatCounter);
