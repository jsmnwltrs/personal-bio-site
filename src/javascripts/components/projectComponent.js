import $ from 'jquery';
import projectData from '../data/projectData';


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

$('#navToTechnologies').on('click', () => {
  $('#bioPage').hide();
  $('#technologiesPage').hide();
  $('#projectsPage').show();
});

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

const loadProject = () => {
  projectData()
    .then((projects) => {
      printProjectCards(projects);
      console.log(projects);
    })
    .catch((error) => {
      console.error('error on loadProject', error);
    });
};

export default { loadProject };
