<h1 align="center">
    <img src="assets/images/flashcard.png"  alt="a super duper stylized flashcard">
</h1>

# A Node Based Flashcard Generator [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

This is a node command-line application that generates flashcards. The application is written entirely in ES6 and transpiled using babel.

Running the app:
> DEBUG=* src/app.js

Building the app:
> npm run build

Building the docs:
> npm run docs

Browse the github documentation:
> npm docs

## Packages
- [babel-cli](https://www.npmjs.com/package/babel-cli)
- [chalk](https://www.npmjs.com/package/chalk)
- [commander](https://www.npmjs.com/package/commander)
- [debug](https://www.npmjs.com/package/debug)
- [jsdoc](https://www.npmjs.com/package/jsdoc)

## Overview

The API allows users to create two types of flashcards.

1. **Basic** flashcards, which have a front (_"Who was the first president of the United States?"_), and a back (_"George Washington"_).

2. **Cloze-Deleted** flashcards, which present _partial_ text (_"... was the first president of the United States."_), and the full text when the user requests it (_"George Washington was the first president of the United States."_)

#### Cloze Deletions

A **cloze deletion** is simply a sentence that has had some of its text removed. For example, given the sentence:

_"George Washington was the first president of the United States."_

...We can create a "cloze deletion" by removing the words _"George Washington"_:

_"... was the first president of the United States."_

This is useful for building flash card applications that forces users to remember the important part of a sentence, and is [a common device in educational applications](https://en.wikipedia.org/wiki/Cloze_test).

A flash card built this way has three parts:

1. The **full text**. This is the entire sentence users need to remember:  _"George Washington was the first president of the United States."_

2. The **cloze deletion**. This is the text we've chosen to remove: _"George Washington"_.

3. The **partial text**. This is what we get if we remove the **cloze deletion** from the **full text**: _"... was the first president of the United States._

See below for examples as to how your constructor should behave.

## Examples

Constructors should work as follows:

```
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); "

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText): "

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");
```

## License

[![CC0](assets/images/opensrc.png)](https://opensource.org/licenses/MIT)
To the extent possible under law, [Marcus Hobbs](https://github.com/dhobbs81) has waived all copyright and related or neighboring rights to this work.
