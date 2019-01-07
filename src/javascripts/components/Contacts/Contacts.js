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
};

const buildContacts = () => {
  const domString = `   <h3 class="d-flex justify-content-center">Contact Me</h3>
  <a href="https://github.com/jsmnwltrs">My GitHub Account</a>
  <p>Email: jsmnwltrs@gmail.com</p>
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
