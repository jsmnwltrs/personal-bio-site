import $ from 'jquery';
import 'bootstrap';

const bindEvents = () => {
  $('#navToBio').on('click', () => {
    $('#bioPage').show();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
  });
  $('#navToTechnologies').on('click', () => {
    $('#bioPage').hide();
    $('#technologiesPage').show();
    $('#projectsPage').hide();
  });
  $('#navToProjects').on('click', () => {
    $('#bioPage').hide();
    $('#technologiesPage').hide();
    $('#projectsPage').show();
  });
};

export default { bindEvents };
