import $ from 'jquery';
import 'bootstrap';

const bindScrollEvents = () => {
  $('#navToMain').on('click', () => {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
  $('#navToBio').on('click', () => {
    const offset = $('#bioPage').offset();
    offset.left -= 60;
    offset.top -= 60;
    $('html, body').animate({
      scrollTop: offset.top,
      scrollLeft: offset.left,
    });
  });
  $('#navToTechnologies').on('click', () => {
    const offset = $('#technologiesPage').offset();
    offset.left -= 60;
    offset.top -= 60;
    $('html, body').animate({
      scrollTop: offset.top,
      scrollLeft: offset.left,
    });
  });
  $('#navToProjects').on('click', () => {
    const offset = $('#projectsPage').offset();
    offset.left -= 60;
    offset.top -= 60;
    $('html, body').animate({
      scrollTop: offset.top,
      scrollLeft: offset.left,
    });
  });
  $('#navToContacts').on('click', () => {
    const offset = $('#contactsPage').offset();
    offset.left -= 60;
    offset.top -= 60;
    $('html, body').animate({
      scrollTop: offset.top,
      scrollLeft: offset.left,
    });
  });
};

export default { bindScrollEvents };
