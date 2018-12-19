import * as React from 'react';
import { IBaseProps } from '@/interfaces/common';
import { connect } from 'dva';

interface Props extends IBaseProps {
  index: any
}

interface State {
}


@connect(({ index, loading }:Props) => ({
  index,
  loading
}))
class Index extends React.Component<Props, State> {
  state:State = {
  }

  public render() {
    return (
      <React.Fragment>
        {this.props.index.name}
      </React.Fragment>
    )
  }
}

export default Index;
