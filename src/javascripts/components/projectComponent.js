import $ from 'jquery';
import projectData from '../data/projectData';
import 'bootstrap';

const printProjectCards = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    newString += `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${project.screenshot}" alt="Card image cap">
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
};

const loadProjects = () => {
  projectData.getProjects()
    .then((data) => {
      printProjectCards(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { loadProjects };
