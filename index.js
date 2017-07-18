// Cats are fluffy angels on Earth. 
/*
* File: Index.js
* Author: Laasya Challa 
* Purpose: This is my hello, world application
* History 7/17/17 - File Created
*/


var pink = 'pink';
var blue = 'blue';
var green = 'green';
var yellow = 'yellow';
var red = 'red';
var orange = 'orange';
var purple = 'purple';
var white = 'white';
var black = 'black';
var grey = 'grey';


function checkForWorld1(text) {

    switch(text) {
        case 'blue':
            console.log('I love blue too. Its pretty calm and peace full. I really like turquoise and aquamarine. Aquamarine is my birthstone too.');
            break;
        case 'pink':
            console.log('Pink is nice. I like redish pinks. Pale pinks are really pretty as well. I dont like most other pinks though. Too girly for me.');
            break;
        case 'green':
            console.log('Green is so calming. Like nature. Well, nature is mostly different variations of the sahde green so I guess that makes sense.');
            break;
        case 'yellow':
            console.log('Yellow is so bright and happy. I like mustard yellows. You know, sorta orangey ones. Pale yellow is also really pretty!');
            break;
        case 'red':
            console.log('Red is so firey. And pretty bold. I prefer the bright reds to the dull ones. Pinky reds are also really pretty!');
            break;
        case 'orange':
            console.log('Orange is nice. Its pretty happy and bright. Is orange your favorite food too?');
            break;
        case 'purple':
            console.log('Purple is the color of royalty! It really fits in your case! ');       
            break;
        case 'white':
            console.log('White is really pure and angelic. It goes with almost anything!');
            break;
        case 'black':
            console.log('Black is all dark and mysterious. I love how you can wear anything with black. Black just works with it.')
            break;
        case 'grey':
            console.log('Grey is nice. For me, it really depends on the shade. I like ones that are close to white then black. Oh, and blueish ones too');
            break;
        }
}

// What's your favorite color? Lowercase please. 
(checkForWorld1(pink)); 
// Type in red, orange, yellow, green, blue, purple, pink, white, grey, or black!
