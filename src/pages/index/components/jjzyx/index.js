
import './jjzyx.css';
import {URL} from './config';
import {getData} from 'api/getData';
import render from './items.art';

const layoutEl = document.querySelector('.jjzyx .bd');
getData(URL).then(data => {
    layoutEl.innerHTML = render(data);
});
