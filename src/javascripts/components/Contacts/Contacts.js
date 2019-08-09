import $ from 'jquery';

import spider1 from '../../../images/spider1.jpg';
import spider2 from '../../../images/spider2.jpg';
import spider3 from '../../../images/spider3.jpg';
import spider4 from '../../../images/spider4.jpg';
import spider5 from '../../../images/spider5.jpg';
import spider6 from '../../../images/spider6.jpg';
import spider7 from '../../../images/spider7.jpg';
import spider8 from '../../../images/spider8.jpg';
import spider9 from '../../../images/spider9.jpg';
import emailLogo from '../../../images/emailLogo.png';
import phoneLogo from '../../../images/phoneLogo.png';
import linkedInLogo from '../../../images/linkedInLogo.png';
import githubLogo from '../../../images/githubLogo.png';

const loadImages = () => {
  $('#spider1').attr('src', spider1);
  $('#spider2').attr('src', spider2);
  $('#spider3').attr('src', spider3);
  $('#spider4').attr('src', spider4);
  $('#spider5').attr('src', spider5);
  $('#spider6').attr('src', spider6);
  $('#spider7').attr('src', spider7);
  $('#spider8').attr('src', spider8);
  $('#spider9').attr('src', spider9);
  $('#emailLogo').attr('src', emailLogo);
  $('#phoneLogo').attr('src', phoneLogo);
  $('#linkedInLogo').attr('src', linkedInLogo);
  $('#githubLogo').attr('src', githubLogo);
};

const buildContacts = () => {
  const domString = `<h3 class="d-flex justify-content-center">Contact Me</h3>
  <div class='d-flex justify-content-between'>
  <div>
  <div class="d-flex flex-wrap m-2">
    <img id='phoneLogo' class='logo'/>
    <p class='ml-1 mt-2'>615-856-9424<p>
  </div>
  <div class="d-flex flex-wrap m-2">
    <img id='emailLogo' class='logo'/>
    <p class='ml-1 mt-2'>jsmnwltrs@gmail.com<p>
  </div>
  </div>
  <div>
  <div class="d-flex flex-wrap m-2">
    <img id='linkedInLogo' class='logo'/>
    <a class='ml-1 mt-2' href="https://www.linkedin.com/in/jasmine-walters/">www.linkedin.com/in/jasmine-walters/</a>
  </div>
  <div class="d-flex flex-wrap m-2">
  <img id='githubLogo' class='logo'/>
  <a class='ml-1 mt-2' href="https://github.com/jsmnwltrs">github.com/jsmnwltrs</a>
  </div>
  </div>
  </div>
  <div id="spiderImages" class="d-flex flex-row">
    <img id="spider1" class="spiderImage" src="" alt="">
    <img id="spider2" class="spiderImage" src="" alt="">
    <img id="spider3" class="spiderImage" src="" alt="">
    <img id="spider4" class="spiderImage" src="" alt="">
    <img id="spider5" class="spiderImage" src="" alt="">
    <img id="spider6" class="spiderImage" src="" alt="">
    <img id="spider7" class="spiderImage" src="" alt="">
    <img id="spider8" class="spiderImage" src="" alt="">
    <img id="spider9" class="spiderImage" src="" alt="">
  </div>`;
  $('#contactsPage').html(domString);
  loadImages();
};

export default buildContacts;
