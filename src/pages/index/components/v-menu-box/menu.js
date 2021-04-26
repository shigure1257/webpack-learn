import { URL } from "./config";
import { getData } from "api/getData";
import render from "./menus/menu.art";


// 垂直菜单的实现
const menuExtend = function () {
    // 得到所有菜单触碰项li标签
    var menu_lis = document.querySelectorAll('#v-menu li[data-n]');
    // 得到vmenubox盒子
    var vmenubox = document.querySelector('#v-menu-box');
    // 得到所有menu菜单
    //var menus = document.querySelectorAll('#menus .menu');
    const menusEl = document.getElementById('menus');
    // 批量添加监听
    for (var i = 0; i < menu_lis.length; i++) {
        (function (i) {
            // 鼠标触碰某个菜单项
            menu_lis[i].onmouseenter = function () {
                //查看该选项二级菜单是否已发送过请求
                    //渲染二级菜单
                getData(URL+`/${menu_lis[i].dataset.n}`).then(data => {
                    //console.log(data);
                    menu_lis[i].dataset.done = 'done';
                    menusEl.innerHTML = render({
                        items:data,
                        type:menu_lis[i].dataset.n
                    });//这里的数据渲染不进menu.art里，而且二级菜单不显示。
                    changActive(this,i)
                }).catch(err => {
                    console.log(err);
                });
            }
        })(i)
    }
    function changActive(el,i) {
        // 得到所有menu菜单
        var menus = document.querySelectorAll('#menus .menu');
        // 所有菜单项去掉active类
        for (var j = 0; j < menu_lis.length; j++) {
            menu_lis[j].className = '';
        }
        // 自己加active类
        el.className = 'active';
        // 让所有菜单隐藏，去掉active类
        for (var j = 0; j < menus.length; j++) {
            menus[j].className = 'menu';
        }
        // 让序号相同的菜单项添加menu类
        menus[i].className = 'menu active';
    }
    // 鼠标离开整个vmenubox盒子
    vmenubox.onmouseleave = function () {
        var menus = document.querySelectorAll('#menus .menu');
        // 让所有菜单隐藏
        for (var j = 0; j < menus.length; j++) {
            menus[j].className = 'menu';
        }
        // 所有菜单项去掉active类
        for (var j = 0; j < menus.length; j++) {
            menu_lis[j].className = '';
        }
    }
};
export {menuExtend};