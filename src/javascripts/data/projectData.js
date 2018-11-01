import $ from 'jquery';

const loadProjects = () => {
  const projects = new Promise((resolve, reject) => {
    $.get('../../../db/projects.json')
      .done((data) => {
        resolve(data.projects);
        console.log(data.projects);
      })
      .fail((error) => {
        reject(error);
        console.error('error on loadProjects');
      });
  });
  return projects;
};

export default { loadProjects };
