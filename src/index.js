import 'bootstrap';
import firebase from 'firebase/app';

import './index.scss';
import buildNavbar from './javascripts/components/Navbar/Navbar';
import buildBio from './javascripts/components/Bio/Bio';
import buildTechnologies from './javascripts/components/Technologies/Technologies';
import buildProjects from './javascripts/components/Projects/Projects';
import buildContacts from './javascripts/components/Contacts/Contacts';
import events from './javascripts/helpers/event';
import apiKeys from '../db/apiKeys.json';

const initalizeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  buildNavbar();
  buildBio();
  buildTechnologies();
  buildProjects();
  buildContacts();
  events.bindScrollEvents();
};

initalizeApp();
