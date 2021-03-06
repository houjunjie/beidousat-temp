import * as React from 'react';
import classNames from 'classnames';
import styles from './Loader.less';

const Loader = ({ fullScreen, spinning }: any) => {
  return (
    <div
      className={classNames(styles.loader, {
        [styles.hidden]: !spinning,
        [styles.fullScreen]: fullScreen,
      })}
    >
      <div className={styles.warpper}>
        <div className={styles.inner} />
        <div className={styles.text}>LOADING</div>
      </div>
    </div>
  );
};

export default Loader;
