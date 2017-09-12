import React from 'react';
import ReactDOM from 'react-dom';
import Init from '../components/Init';

// Stylesheets
require('../scss/style.scss');
require('./globals');
require('./queue');

ReactDOM.render(<Init name="CEO"/>, document.getElementById('app'));