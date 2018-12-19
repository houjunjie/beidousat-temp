import * as React from 'react';
import { IBaseProps } from '@/interfaces/common';

interface Iprops extends IBaseProps {
}

interface Istate {
}

class {{template}} extends React.Component<Iprops, Istate> {
  state:Istate = {
  }

  public render() {
    return (
      <React.Fragment>
        component
      </React.Fragment>
    )
  }
}

export default {{template}};
