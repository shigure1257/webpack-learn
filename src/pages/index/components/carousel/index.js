import './carousel.css';
import './btn.css';

import {carousel_fun} from './carousel.js';
import render from "./slider.art";
import { URL } from "./config";
import { getData } from 'api/getData';

const layoutEl = document.querySelector('.banner .carousel');
getData(URL).then(data => {
    //console.log(data);
    layoutEl.innerHTML = render({
        items:data
    });
    carousel_fun();
});