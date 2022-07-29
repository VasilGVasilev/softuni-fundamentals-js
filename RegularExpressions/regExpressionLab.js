// character class:
// [A-Z][a-z] Iv in Ivanov
// [A-Z][a-z]+ Ivanov in Ivanov due to:

// quantifiers:
// + matches the prev el one or more times
// * matches the prev el zero or more times
// ? matches the prev el zero or one times
// {x} matches the prev el exactly x times

// predefined classes:
// \w matches any word chars (A-Z, a-z, 0-9, _)
// \W matches non-word chars
// \s matches any white-space chars
// \S matches non-white-space chars
// \d matches any decimal digit
// \D matches non-decimal chars

// \w{4,} means minimum 4 => 4 or more
// special symbols need '\' -> \w, \+ etc.

// function fullName(input){
//     let pattern = /\b[A-Z][a-z]{1,} [A-Z][a-z]{1,}\b/g;
//     let validNames = [];
//     while ((validName = pattern.exec(input)) !== null){
//         validNames.push(validName[0])
//     }
//     console.log(validNames.join(' '));
// }
// fullName()




