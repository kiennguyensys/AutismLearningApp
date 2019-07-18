//  @flow
export const FIND_WORD_CONTENT = 'FIND_WORD_CONTENT';

export function findWordContent(word) {
	return {
		type: FIND_WORD_CONTENT,
		payload: {
			text: word
		}
	};
}

