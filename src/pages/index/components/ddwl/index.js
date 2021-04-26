import './ddwl.css';

import { getData } from "api/getData";
import {URL} from './config';
import render from './itema.art';

const layoutEl = document.querySelector('.ddwl .bd');
getData(URL).then(data => {
    //console.log(data);
    layoutEl.innerHTML = render(data);
})