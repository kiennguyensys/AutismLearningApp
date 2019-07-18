// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import imageLinks from '../constants/imageLinks.json';
import styles from './CurriculumStore.css';
import * as apiFunc from '../api/config/parseWiktionary.js';
type Props = {};

export default class Home extends Component<Props> {
  props: Props;

	componentDidMount() {
	}

  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
				</div>
				<div className={styles.container} data-tid="container">
					<h2>Wellcome to Curriculum Stores</h2>
					<h3>Main curriculum</h3>
					<img src={imageLinks.mainCurriculum} alt="Autsim Curriculum" height="200" width="200" />
				</div>
			</div>
    );
  }
}
