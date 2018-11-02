// import $ from 'jquery';
import 'bootstrap';

import './index.scss';
import projectComponent from './javascripts/components/projectComponent';
import events from './javascripts/helpers/event';

const initalizeApp = () => {
  projectComponent.loadProjects();
  events.bindEvents();
};

initalizeApp();
