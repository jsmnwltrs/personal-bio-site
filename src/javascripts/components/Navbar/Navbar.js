import $ from 'jquery';

const buildNavbar = () => {
  const domString = `<nav sticky class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" id="navToMain">Jasmine Walters</a>
  <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link mr-3" id="navToBio"><strong>Bio</strong></a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-3" id="navToTechnologies"><strong>Technologies</strong></a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-3" id="navToProjects"><strong>Projects</strong></a>
      </li>
      <li class="nav-item">
          <a class="nav-link mr-3" id="navToContacts"><strong>Contact Me</strong></a>
        </li>
  </div>
</nav>`;
  $('#navbar').html(domString);
};

export default buildNavbar;
