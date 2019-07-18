//  @flow
var apiURL = require("../../constants/apiURL.json");
var axios = require("axios");
var dictionary = require('@vntk/dictionary');

function findWordContent(word) {
	const stringURL = apiURL.wiktionary + word;

	return dictionary.lookup(word);
}