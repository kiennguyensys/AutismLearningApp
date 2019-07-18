// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './CreationStore.css';

type Props = {};

export default class CreationStore  extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
       <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
		</div>
	   <div className={styles.container} data-tid="container">
			<h2>Wellcome to Creation Stores</h2>
		</div>
    </div>
    );
  }
}
