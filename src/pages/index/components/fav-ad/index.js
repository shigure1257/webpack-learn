import './fav-ad.css';
import {getData} from 'api/getData';
import {URL} from './CONFIG.js';
import render from './fav-ad.art';

const layoutEl = document.querySelector('.fav-ad');
getData(URL).then(data=>{
    layoutEl.innerHTML = render({
        items:data
    });
}).catch(err=>{
    console.log(err);
});