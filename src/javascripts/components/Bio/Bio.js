import $ from 'jquery';

import bioPhoto from '../../../images/spiderhat.jpg';

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
    developers and quickly gained interest in what they were doing. After a few years with the company I decided to go back to school 
    to learn more about web development. A friend of mine was interested in Nashville Software School at the time and she suggested 
    that I look into it. I was deligthed to find a program that seemed well suited for me.

    I really enjoy developing now. I love that there is always something to learn. I've had a lot of fun meeting people and discussing 
    new ideas and projects. I am really interested in what the Nashville tech community is doing and can't wait to see what others are 
    working on. 
</p>
</div>`;
  $('#bioPage').html(domString);
  loadImages();
};

export default buildBio;
