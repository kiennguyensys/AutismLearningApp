import * as actions from '../../app/api/config/parseWiktionary.js';

describe('actions', () => {
	it('should wiktionaryParse should create parse action', () => {
		const word = "mèo";
		actions.findWordContent(word);
	});
});