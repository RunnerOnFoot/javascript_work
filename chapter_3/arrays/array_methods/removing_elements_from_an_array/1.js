let languages = ["Erlang", "C", "Fortran",
    "Python", "Haskell", "JavaScript", "Rust"];

languages.pop();
// 'Rust'
languages;
// (6) ['Fortran', 'C', 'Erlang', 'Python', 'Haskell', 'JavaScript']

let bestLanguage = languages.pop();
let message = `My favorite language is ${bestLanguage}.`;
message;
// 'My favorite language is JavaScript.'
languages;
// (5) ['Fortran', 'C', 'Erlang', 'Python', 'Haskell']

let worstLanguage = languages.shift();
message = `My least favorite language is ${worstLanguage}.`;
console.log(message);
// 'My least favorite language is Fortran.'
console.log(languages);
// (4) ['C', 'Erlang', 'Python', 'Haskell']
