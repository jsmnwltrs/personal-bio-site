import $ from 'jquery';

import bioPhoto from '../../../images/myphoto.jpg';

const loadImages = () => {
  $('#bioPhoto').attr('src', bioPhoto);
};

const buildBio = () => {
  const domString = `    <h2 id="bioHeader" class="d-flex justify-content-center mt-4">Biography</h2>
  <div class="d-flex flex-row">
  <img id="bioPhoto">
  <p id="biotext">I was born in California, but moved to Tennessee shortly after and grew up in the city of Franklin. After high school I became a 
    certified nursing assistant and started working in an assisted living facility. The job was difficult, but very rewarding. After 
    two years of working with patients, I was given an opportunity to do temporary data cleanup for United Health Care's EMR systems. 
    I did really well and I was eventually able to get a permanent position working as a Business Analyst. I got to work closely with 
    developers and quickly gained interest in what they were doing. After a few years with the company I decided to go to Nashville Software School
    to learn more about web developement. I enjoy solving problems and learning from others. Discussing new projects and ideas has helped 
    me understand individuals' viewpoints and perspectives. I’m excited to get involved and build relationships with members of the Nashville tech community.
</p>
</div>`;
  $('#bioPage').html(domString);
  loadImages();
};

export default buildBio;
