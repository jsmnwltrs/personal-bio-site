import $ from 'jquery';
import 'bootstrap';

const bindEvents = () => {
  $('#navToBio').animate({ scrollTop: ($('#bioPage').offset().top) }, 500);
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
