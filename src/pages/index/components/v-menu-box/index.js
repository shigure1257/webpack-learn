//import './menu.js';

import './menus/index';
import './v-menu/index';
import render from './v-menu/v-menu.art';
import { getData } from "api/getData";
import { URL } from './config.js';
import { menuExtend } from './menu.js';

const v_menuEl = document.getElementById('v-menu');
getData(URL).then(data => {
    //console.log(data);
    v_menuEl.innerHTML = render({
        items:data
    });
   
})
.then(()=> {
    menuExtend();
})
.catch(err => {
    console.log(err);
});