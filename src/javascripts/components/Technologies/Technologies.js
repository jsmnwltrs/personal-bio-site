import $ from 'jquery';

const buildTechnologies = () => {
  const domString = `
  <h2 id="technologiesHeader" class="d-flex justify-content-center">Technologies</h2>
  <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Vanilla JavaScript</li>
      <li>GitHub</li>
      <li>JQuery</li>
      <li>React</li>
      <li>Firebase</li>
      <li>Sass</li>
      <li>Git</li>
      <li>VS Code</li>
      <li>Bootstrap</li>
      <li>Axios</li>
      <li>API</li>
      <li>ES6 Modules</li>
  </ul>`;
  $('#technologiesPage').html(domString);
};

export default buildTechnologies;
