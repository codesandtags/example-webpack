// Added dependency in order to webpack should identify it
let login = require('./login').login;
//import {login} from 'login.es6';

const cosa = 'this is an error example';
console.log('This is sparta! : ' + cosa);
login('admin', 'coco');

// Adding styles
require('../styles/main.css');
require('../styles/feature.scss');
require('../styles/bootstrap.min.css');