// ==UserScript==
// @name         Block Websites
// @namespace    https://github.com/j-jacobson/helpfulthings/
// @version      1.0
// @description  Block websites to increase productivity.
// @author       Jonathan L. Jacobson
// Note: To change the blocked websites, update the match list below.
// @match        https://*.reddit.com/*
// @match        https://news.ycombinator.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.location.href = 'https://github.com/j-jacobson/helpfulthings/blob/main/site_block/403.html';
})();
