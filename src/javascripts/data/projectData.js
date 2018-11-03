import 'bootstrap';
import axios from 'axios';

const initializeProjects = () => axios.get('https://api.myjson.com/bins/ud3ym');

export default { initializeProjects };
