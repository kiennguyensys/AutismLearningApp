// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Autism Learning App</h2>
        <div className={styles.tab} data-id="tab">
          <i className="fas fa-book"></i>
					<Link to={routes.CURRICULUM}> CURRICULUM&emsp;</Link>
          <i className="fas fa-rocket"></i>
					<Link to={routes.CREATION}> CREATION</Link><br/>
			 </div>
      </div>
    );
  }
}
