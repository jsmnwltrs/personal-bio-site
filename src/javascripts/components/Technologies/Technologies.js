import $ from 'jquery';

import techPhoto from '../../../images/mytech.jpg';

const loadImages = () => {
  $('#techPhoto').attr('src', techPhoto);
};

const buildTechnologies = () => {
  const domString = `
  <div>
    <h2>Technologies</h2>
    <img id="techPhoto">
  </div>`;
  $('#technologiesPage').html(domString);
  loadImages();
};

export default buildTechnologies;
