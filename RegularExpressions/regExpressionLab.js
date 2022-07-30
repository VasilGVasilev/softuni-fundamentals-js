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

// you can capture groups (subexpression)
// \d{2}-(\w{3})-\d{4}
// what about non-capturing group ,or how you eliminate group (?:subexpression):
// \d{2}-(?:\w{3})-\d{4}
// name a group (?<name>subexpression)
// (\?<day>\d{2})-(?<month>\w{3})-(?<year>\d{4})

// . matches all symbols

// match all that end with the same group as the defined at start
// <([a-z]+)>.*</\1>
// no name of group defaults it to Group 1

// /\+\d{3}([ |-])[2]\1[0-9]{3}\1\d{4}/gm would mean that the first group once
// deciding on either ' ' or '-' will continue with the pattern
// on every instance of \1


// here \b in pattern removes a phone number that has five 2s at the end
// and otherwise would be valid match up to the 4th 2
// +359-2-222-2222|2
// function phone(input){
//     let pattern = /\+359([ |-])[2]\1[0-9]{3}\1\d{4}\b/g;
//     let validPhones = [];
//     while ((validNum = pattern.exec(input)) !== null){
//         validPhones.push(validNum[0])
//     }
//     console.log(validPhones.join(', '));
// }

// matches = pattern.exec(text) returns an array of the first match it found
// matches[0] - the match
// matches[1], matches[2], matches[n] - the groups that the match conists of

// function date(input){
//     let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;
//     while ((validDate = pattern.exec(input)) !== null){
//         let day = validDate.groups['day'];
//         let month = validDate.groups['month'];
//         let year = validDate.groups['year'];
//         console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
//     }
// }




