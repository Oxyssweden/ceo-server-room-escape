import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/Main';

// Stylesheets
require('../scss/style.scss');
require('./globals');

ReactDOM.render(<Main name="CEO"/>, document.getElementById('app'));