import './xxsw.css';

import { getData } from "api/getData";
import { URL } from "./config";
import render from './items.art';

const layoutEl = document.querySelector('.xxsw .bd');
getData(URL).then(data => {
    //console.log(data);
    layoutEl.innerHTML = render({
        items:data
    });
});