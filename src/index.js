// import $ from 'jquery';
import 'bootstrap';

import './index.scss';
import loadProject from './javascripts/components/projectComponent';

const initalizeApp = () => {
  loadProject();
};

initalizeApp();
