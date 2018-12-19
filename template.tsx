import * as React from 'react';
import { IBaseProps } from '@/interfaces/common';

interface Props extends IBaseProps {
}

interface State {
}

class {{template}} extends React.Component<Props, State> {
  state:State = {
  }

  render() {
    return (
      <React.Fragment>
        component
      </React.Fragment>
    )
  }
}

export default {{template}};
