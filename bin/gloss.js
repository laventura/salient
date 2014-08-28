#!/usr/bin/env node

var salient = require('./../');

var args = require('minimist')(process.argv);

if (args.help || args.h || args._.length < 2) {
    console.log("Usage: node gloss.js 'this is a test'");
}

var g = new salient.glossary.Glossary();
g.parse(args._.slice(2)[0]);
var unfiltered = g.unfiltered();
console.log(unfiltered);
