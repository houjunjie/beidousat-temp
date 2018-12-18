import * as React from 'react';
import Page from '@/components/Page';
import { IBaseProps } from '@/interfaces/common';
import './{{template}}.less';

interface Iprops extends IBaseProps {
}

interface Istate {
}

class {{template}} extends React.Component<Iprops, Istate> {
  public state = {
  }

  public render() {
    return (
      <Page>
        component
      </Page>
    )
  }
}

export default {{template}};
