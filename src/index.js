import $ from 'jquery';
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

import bioPhoto from './images/spiderhat.jpg';
import spider1 from './images/spider1.jpg';
import spider2 from './images/spider2.jpg';
import spider3 from './images/spider3.jpg';
import spider4 from './images/spider4.jpg';
import spider5 from './images/spider5.jpg';
import spider6 from './images/spider6.jpg';
import spider7 from './images/spider7.jpg';
import spider8 from './images/spider8.jpg';
import spider9 from './images/spider9.jpg';

$('#bioPhoto').attr('src', bioPhoto);

$('#spider1').attr('src', spider1);
$('#spider2').attr('src', spider2);
$('#spider3').attr('src', spider3);
$('#spider4').attr('src', spider4);
$('#spider5').attr('src', spider5);
$('#spider6').attr('src', spider6);
$('#spider7').attr('src', spider7);
$('#spider8').attr('src', spider8);
$('#spider9').attr('src', spider9);

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
