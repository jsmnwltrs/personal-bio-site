import $ from 'jquery';

const initializeProjects = () => {
  const projects = new Promise((resolve, reject) => {
    $.get('https://api.myjson.com/bins/ud3ym')
      .done((data) => {
        resolve(data.projects);
      })
      .fail((error) => {
        reject(error);
        console.error(error);
      });
  });
  return projects;
};

export default { initializeProjects };
