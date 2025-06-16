// This is your domain.
function main() {
    // this is the code that will be rendered
    style("style.css");
    header("This is Angstrom Nitro!", "", "", "", "1");
    text(`This is a demo site for Nitro!
         Developed by Roky Henderson its an <u>Open Source</u>
          JS framework that provides easy usage!`);
    image("https://angstrom.rhhen.xyz/logo.svg", "", "", `align="left"`);
    text("This is angstrom a project to normalize odd web things! Like this webpage! Its ugly But a perfectly functioning demo!");

    // The project
    br();
    text("An example project:");
    input("Enter a task", "task-input", "", "");
    button("Submit", "", "", `onclick="addToList()"`);
    raw(`<ul id="list">`);
    raw(`</ul>`);
    br();

    // Checker
    input('Enter a number', 'number-input', '', '');
    button('Submit', '', '', `onclick="checkNumber()"`);
    raw('<p id="numOut"></p>')
}
function addToList() {
    let input = document.getElementById('task-input');
    document.getElementById('list').innerHTML +=
    "<li>"+input.value+"</li>";
}
function checkNumber() {
    let input = document.getElementById('number-input');
    let num = +input;
    let out = isEven(num);
    console.log(out);
    if (out == true) {document.getElementById('numOut').innerHTML = 'Its Even!'} else {document.getElementById('numOut').innerHTML = 'Its Odd!';}
}











// NITRO
// Made by Roky Henderson as a Open Source JavaScript web framework
let body = document.getElementById('bo');
let head = document.getElementById('he');
let html = document.getElementById('en');
// Lots of functions (-:
function raw(inner) {
    body.innerHTML +=
    inner;
}
function header(text, id, cl, ot, w) {
    body.innerHTML += 
    "<h"+w+' '+' id="'+id+'" '+' class="'+cl+'" '+' '+' '+ot+">"+text+"</h"+w+">";
}
function text(text) {
    body.innerHTML +=
    "<p>"+text+"</p>";
}
function style(location) {
    head.innerHTML +=
    `<link rel="stylesheet" href=`+location+`>`;
}
function image(src, height, length, ot) {
    body.innerHTML +=
    "<img "+'src="'+src+'" height="'+height+'" length="'+length+'" '+ot+" >";
}
function ulist(id, cl) {
    body.innerHTML +=
    `<ul id="${id}" class="${cl}">`;
}
function ulistclose() {
    body.innerHTML +=
    "</ul>";
}
function input(placeholder, id, cl, ot) {
    body.innerHTML +=
    `<input placeholder="${placeholder}" id="${id}" class="${cl}" ${ot}>`;
}
function button(text, id, cl, ot) {
    body.innerHTML +=
    `<button id="${id}" class="${cl}" ${ot}>${text}</button>`;
}
function isEven(value) {
    let superChecker = value % 2;
    if (superChecker == 0) {return true;} else {return false;}
}
function hr() {body.innerHTML += "<hr>";}
function br() {body.innerHTML += "<br>";}
function breaker() {br();}

main(); // This is where its ran