/**
 * A flashcard with cloze deletion i.e. part of the text removed
 * @function
 * @global
 * @param {string} text - The full text on the card
 * @param {string} cloze - The text to remove from the card
 * @example
 * Full Text: “George Washington was the first president of the United States.”
 * Create a “cloze deletion” by removing the words “George Washington”
 * Result: ”… was the first president of the United States.”
 * @returns {Object} A new ClozeCard object
 */
function ClozeCard(text, cloze) {

    // If an error is thrown, display the constructor name
    let err = ClozeCard.name + " constructor:";

    // Validate the input parameters are strings
    if (typeof text != 'string') {
        throw new Error(`${err} text argument is not a string`);
    }
    if (typeof cloze != 'string') {
        throw new Error(`${err} cloze argument is not a string`);
    }

    // The following method of extracting the cloze
    // deletion is naive. This method assumes there is
    // only one occurence of the cloze deletion in the
    // full text.

    // Find the first occurence of cloze in text
    let firstIndex = text.indexOf(cloze);

    // Find the last occurence of cloze in text
    let lastIndex = firstIndex + cloze.length;

    // Validate the text parameter contains the cloze deletion
    // indexOf returns a negative value if there is no occurence
    if (firstIndex < 0) {
        throw new Error(`${err} \"${text}\" does not contain cloze deletion \"${cloze}\". Nice try buddy.`);
    }

    // Extract the cloze deletion
    let clozeText = text.slice(firstIndex, lastIndex);

    // Extract the remaining text
    let partialText = spliceSlice(text, firstIndex, lastIndex);

    // Make the constructor scope-safe
    if (this instanceof ClozeCard) {
        this.fullText = text;
        this.cloze = clozeText;
        this.partial = partialText;
    }
    // If the user forgets to use new
    else {
        return new ClozeCard(text, cloze);
    }

}

// If you feel the urge to extend ClozeCard,
// feel free to use the subclass method
ClozeCard.prototype.subclass = (subclass) => {
    subclass.prototype = Object.create(ClozeCard.prototype);
}

/**
 * Splice and slice a string
 * Copypasta from [stackoverflow topic]{@link https://stackoverflow.com/questions/20817618/is-there-a-splice-method-for-strings}
 * @function
 * @private
 */
function spliceSlice(str, index, count, add) {
  // We cannot pass negative indexes dirrectly to the 2nd slicing operation.
  if (index < 0) {
    index = str.length + index;
    if (index < 0) {
      index = 0;
    }
  }

  return str.slice(0, index) + (add || "") + str.slice(index + count);
}

// Make the ClozeCard function constructor available to the masses
export { ClozeCard };
