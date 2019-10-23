// Template Strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

//Concatenation way
let results = 'The blog called' + ' ' + title + ' ' + 'by' + ' ' + author + ' ' + 'has' + ' ' + likes + ' ' + 'likes';
console.log(results);

//template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`
console.log(result);
//creating html templates

let html =
    `<h2>The blog called ${title} </h2>
 <p>by ${author}</p>
 <span>has ${likes} likes</span>`;
console.log(html);

