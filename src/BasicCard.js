/**
 * A basic flashcard with a front and a back
 * @function
 * @global
 * @param {string} front - Text on the front of the card
 * @param {string} back - Text on the back of the card
 * @example
 * Front: “Who was the first president of the United States?”
 * Back: “George Washington."
 * @returns {Object} A new BasicCard object
 */
function BasicCard(front, back) {

    // If an error is thrown, display the constructor name
    let err = BasicCard.name + " constructor:";

    // Validate the input parameters are strings
    if (typeof front != 'string') {
        throw new Error(`${err} front argument is not a string`);
    }
    if (typeof back != 'string') {
        throw new Error(`${err} back argument is not a string`);
    }

    // Make the constructor scope-safe
    if (this instanceof BasicCard) {
        this.front = front;
        this.back = back;
    }
    // If the user forgets to use new
    else {
        return new BasicCard(front, back);
    }

}

// If you feel the urge to extend BasicCard,
// feel free to use the subclass method
BasicCard.prototype.subclass = (subclass) => {
    subclass.prototype = Object.create(BasicCard.prototype);
}

// Make the BasicCard function constructor available to the masses
export { BasicCard };
