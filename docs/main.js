// This is your domain.
function main() {
  // this is the code that will be rendered

  let desc = "Angstrom the powerful web framework";
  let name = "Angstrom Nitro";

  metadata(desc);
  title(name);
  favicon("https://angstrom.rhhen.xyz/logo.svg");
  style("style.css");

  header(name, "", "", "", "1");
  p(desc, "desc", "", "");
  p(
    'Made with <img src="https://www.svgrepo.com/show/427466/general-heart-heart-beat-2.svg" height="20px"> by Roky Henderson',
    "desc",
    "",
    "",
  );
  // The badges
  image(
    "https://badgen.net/static/Open/Source/green?icon=https://upload.wikimedia.org/wikipedia/commons/archive/e/eb/20070822051640%21Open_Source_Initiative.svg",
    "",
    "",
    "style='display: block; margin: auto;'",
  );
  p('<a href="/demos/">Demos</a>', "desc", "", "");

  hr();

  image("./angstrom-nitro-logo-white/96.png", "220", "220", 'align="left"');
  text(
    'Angstrom is a love project that I made because I needed to deploy stable and <i>fast</i> websites in minutes. Angstrom <b>Nitro</b> is a godforbidding JS framework that makes some dev shudder. You can deploy a website in minutes with Angstrom but Nitro might make you take a whole month reading the source code. This is a shambles of a project - and by that I mean hard to learn. While other WebDev frameworks use things like <i>databases</i> or any of those other fancy things Nitro is JUST Javascript that is quickly* rendered on the web-browser. <artical class="note">*depends on the browser really</artical> Sure silly things exsist like "non repeatitive code" but who gives a sh*t? Most of this codebase is made from random copy and pasted Stack Overflow code. The thing is that it works and if it doesnt then dont use it. If its to slow then dont use it. Most "programmers" will say that they want a Rust based WebDev Framework, no the f*ck you dont. Javascript was <u>designed</u> for WebDev we shouldnt take that away. There is a reason that there are so many Javascript WebDev frameworks that power the web.',
  );

  br();

  image(
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "400px",
    "",
    'align="right"',
  );
  text(
    "This is Angstrom Nitro a project that makes webdev consist of only JS and CSS. The initial version was made in only 2 days (v1.0). Its written in VSCode and is Open Source.",
  );
  text(
    "The source code wasnt published until I was sure that everything would seemlessly intergrate with github and anything else I needed it to. I also needed it to be more of sequel to the OG Angstrom which took me a week.",
  );
  text(
    "There were many different ideas for Nitro, it took me a whole week to decide how <i>I</i> wanted to have it work. If anything Nitro is for me to build websites with. I <b>hate</b> PHP and other languages like that as they were inconsistent and hard to learn.",
  );
  text(
    "I already know how much hate im going to get and the fact is, I know this is a peice of shit. Really all that Nitro is, is a bunch of functions that insert new lines of HTML into the index.html file.",
  );
  text(
    'There are many functions that I am currently making. To use it all you have todo to use it is to use any of the functions in inside the "function main() {functions here}"',
  );

  br();

  image(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/416px-Markdown-mark.svg.png",
    "250",
    "",
    'align="left"',
  );
  text(
    'Markdown is beautiful but I didnt use it. There is one MAJOR problem with Markdown that most other WebDev tools try to fix. Variables. This is one thing Javascript <artical class="note">and other scripting languages</artical> dangle over the head of Markdown and HTML, being able to set a variable in one place and then change it in multiple is nessacary when you start getting serious about WebDev. As well as that Markdown has a whole lot of other problems that no-one wants to solve. Such as:',
  );
  ulist();
  raw("<li>No functions</li>");
  raw("<li>No logic</li>");
  raw("<li>No conditional statements</li>");
  ulistclose();

  br();

  raw(
    '<artical id="nav"><a href="/main.js">The Script for this site</a> | <a href="/style.css">Stylesheet for this site</a> | <a href="https://github.com/rhhen122/angstrom-nitro">Github</a> | <a href="https://github.com/rhhen122/angstrom-nitro/tree/master/src">src/</a></artical>',
  );
}

// NITRO
// Made by Roky Henderson as a Open Source JavaScript web framework
let body = document.getElementById("bo");
let head = document.getElementById("he");
let html = document.getElementById("en");
// Lots of functions (-:
function raw(inner) {
  body.innerHTML += inner;
}
function header(text, id, cl, ot, w) {
  body.innerHTML +=
    "<h" +
    w +
    " " +
    ' id="' +
    id +
    '" ' +
    ' class="' +
    cl +
    '" ' +
    " " +
    " " +
    ot +
    ">" +
    text +
    "</h" +
    w +
    ">";
}
function text(text) {
  body.innerHTML += "<p>" + text + "</p>";
}
function style(location) {
  head.innerHTML += `<link rel="stylesheet" href=` + location + `>`;
}
function favicon(location) {
  head.innerHTML += `<link rel="icon" type="image/x-icon" href="${location}">`;
}
function title(text) {
  head.innerHTML += `<title>${text}</title>`;
}
function metadata(text) {
  head.innerHTML += `<meta name="description" content="${text}">`;
}
function image(src, height, length, ot) {
  body.innerHTML +=
    "<img " +
    'src="' +
    src +
    '" height="' +
    height +
    '" length="' +
    length +
    '" ' +
    ot +
    " >";
}
function ulist(id, cl) {
  body.innerHTML += `<ul id="${id}" class="${cl}">`;
}
function ulistclose() {
  body.innerHTML += "</ul>";
}
function input(placeholder, id, cl, ot) {
  body.innerHTML += `<input placeholder="${placeholder}" id="${id}" class="${cl}" ${ot}>`;
}
function button(text, id, cl, ot) {
  body.innerHTML += `<button id="${id}" class="${cl}" ${ot}>${text}</button>`;
}
function p(text, id, cl, ot) {
  body.innerHTML += `<p id="${id}" class="${cl}" ${ot}>${text}</p>`;
}
function a(text, href, id, cl, ot) {
  body.innerHTML += `<a href="${href}" id="${id}" class="${cl}" ${ot}>${text}</a> `;
}
function hr() {
  body.innerHTML += "<hr>";
}
function br() {
  body.innerHTML += "<br>";
}
function breaker() {
  br();
}

main(); // This is where its ran
