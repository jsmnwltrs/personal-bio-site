import $ from 'jquery';
import 'bootstrap';

import './index.scss';
import projectComponent from './javascripts/components/projectComponent';
import events from './javascripts/helpers/event';

import bioPhoto from './images/spiderhat.jpg';

$('#bioPhoto').attr('src', bioPhoto);

const initalizeApp = () => {
  projectComponent.loadProjects();
  events.bindEvents();
};

initalizeApp();
