import $ from 'jquery';
import projectData from '../data/projectData';

const printProjectCards = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    newString += '<div class="projects">';
    newString += `<h4>${project.title}</h4>`;
    newString += `<img src="${project.screenshot}"/>`;
    newString += `<p>${project.description}`;
    newString += `<p>${project.technologiesUsed}</p>`;
    newString += `<a href='${project.url}>Project Link</a>`;
    newString += `<a href='${project.githubUrl}>GitHub Link</a>`;
    newString += '</div>';
    if (project.available === true) {
      $('#projectsPage').html(newString);
    }
  });
};

const loadProjects = () => {
  projectData.initializeProjects()
    .then((projects) => {
      printProjectCards(projects);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { loadProjects };
