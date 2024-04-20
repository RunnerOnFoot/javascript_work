let languages = [];
languages.push("Python");
// 1
languages.push("Haskell");
// 2
languages.push("JavaScript");
// 3
languages.push("Rust");
// 4
languages;
// (4) ['Python', 'Haskell', 'JavaScript', 'Rust']


languages.unshift("Erlang");
// 5
languages.unshift("C");
// 6
languages.unshift("Fortran");
// 7
languages;
// (7) ['Fortran', 'C', 'Erlang', 'Python', 'Haskell', 'JavaScript', 'Rust']
