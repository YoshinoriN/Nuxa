'use strict';

const { stripHTML, wordWrap, truncate } = require('hexo-util');

exports.strip_html = exports.stripHTML = stripHTML;

exports.trim = str => str.trim();

exports.word_wrap = exports.wordWrap = wordWrap;

exports.truncate = truncate;
