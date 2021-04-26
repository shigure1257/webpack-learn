import './gt.css';

import { getData } from 'api/getData';
import render from './items.art';
import { URL } from './config';

const layoutEl = document.querySelector('.gt .bd');
getData(URL).then(data => {
    //console.log(data);
    layoutEl.innerHTML = render(data);
})