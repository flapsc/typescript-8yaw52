//Declare all methods to be extended in the implementation

//#region Declare extensible String methods/properties
interface String {
	/**
	 * Format incoming string value by replacement
	 * @param {string} this
	 * @param {...string[]} replacements
	 * @returns {string}
	 */
	formatToString(this: string, ...replacements: string[]): string;
}
//#endregion
