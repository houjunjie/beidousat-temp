import * as React from 'react';
import { IBaseProps } from '@/interfaces/common';
import { connect } from 'dva';

interface Props extends IBaseProps {
}

interface State {
}

@connect(({ loading }:Props) => ({
  loading
}))
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
