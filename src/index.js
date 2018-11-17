import $ from 'jquery';
import 'bootstrap';
import firebase from 'firebase/app';

import './index.scss';
import projectComponent from './javascripts/components/projectComponent';
import events from './javascripts/helpers/event';
import apiKeys from '../db/apiKeys.json';

import bioPhoto from './images/spiderhat.jpg';

$('#bioPhoto').attr('src', bioPhoto);

const initalizeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  projectComponent.loadProjects();
  events.bindScrollEvents();
};

initalizeApp();
