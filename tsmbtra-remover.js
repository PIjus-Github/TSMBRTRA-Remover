// ==UserScript==
// @name         TSMBRTRA Remover
// @namespace    https://github.com/PIjus-Github
// @version      1.0
// @description  Removes the "This search may be relevant to recent activity" message when searching on Google
// @author       PIjus
// @match        https://*.google.com/*
// @grant        https://*.google.com/*
// ==/UserScript==
var elem = document.getElementById("taw");
  elem.parentNode.removeChild(elem);
