/* MENU TOGGLE */

const menuBtn =
document.getElementById("menu-btn");

const menu =
document.getElementById("menu");

menuBtn.onclick = () => {

menu.classList.toggle("active");

};

/* PAGE SWITCH */

function showPage(id){

const pages =
document.querySelectorAll(".page");

pages.forEach(page => {

page.classList.remove("active-page");

});

document.getElementById(id)
.classList.add("active-page");

menu.classList.remove("active");

}

/* COUNTER */

window.addEventListener("load", () => {

const counters =
document.querySelectorAll(".count");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target =
+counter.getAttribute("data-target");

const current =
+counter.innerText;

const increment = target / 100;

if(current < target){

counter.innerText =
`${Math.ceil(current + increment)}`;

setTimeout(updateCounter, 30);

}else{

counter.innerText = target;

}

};

updateCounter();

});

});

/* DEPARTMENT SWITCH */

function showDepartment(id){

const contents =
document.querySelectorAll('.department-content');

contents.forEach(content => {

content.classList.remove('active');

});

document.getElementById(id)
.classList.add('active');

}