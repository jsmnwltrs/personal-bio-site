import $ from 'jquery';

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
};

export default buildContacts;
