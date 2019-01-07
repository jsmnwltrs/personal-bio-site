import $ from 'jquery';
import projectData from '../../data/projectData';
import 'bootstrap';

import project1 from '../../../images/dev-portal.jpg';
import project2 from '../../../images/shotz.jpg';
import project3 from '../../../images/nutshell.jpg';

const loadImages = () => {
  $('img.project1').attr('src', project1);
  $('img.project2').attr('src', project2);
  $('img.project3').attr('src', project3);
};

const printProjectCards = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    newString += `<div class="card" style="width: 18rem;">
  <img class="card-img-top ${project.id}" src="${project.screenshot}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${project.title}</h5>
    <p class="card-text">${project.description}</p>
    <a href="${project.url}" class="btn btn-primary">Project Link</a>
    <a href="${project.githubUrl}" class="btn btn-primary">GitHub Link</a>
  </div>
</div>`;
    if (project.available === true) {
      $('#projects').html(newString);
    }
  });
  loadImages();
};

const buildProjects = () => {
  projectData.getProjects()
    .then((data) => {
      printProjectCards(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default buildProjects;
