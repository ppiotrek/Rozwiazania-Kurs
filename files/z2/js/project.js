var names = ['rek', 'Darek', 'Czarek', 'Mariusz',
    'Marek', 'Wiesław', 'Aneta', 'Stanisława'];

var modifiedNames = names.map(function (name) {
    var firstAndLastName = name;
    if (name.slice(-1) === 'a') {
        // Kobieta
        firstAndLastName = firstAndLastName + ' Kowalska';
    } else {
        // Meżczyzna
        firstAndLastName = firstAndLastName + ' Kowalski';
    }
    return firstAndLastName + ' - ' + firstAndLastName.length;
}
);
console.log(names);
console.log(modifiedNames);


// Arek Kowalski (ÐŁUGOŚĆ IMIENIA + NAZIWSKA)
// Arek Kowalski - 13

var lengths = [4, 2, 4.5, 1.5, 6.7, 9]

var areas = lengths.map(function (length) {
    var area = length * length;
    return area;
});

console.log(areas);
var area = lengths.find(function (length) {
    return length * length > 20;
});
console.log(area);


console.log(modifiedNames);
modifiedNames.forEach(function (name) {
    if (name.indexOf('rek') >= 0) {
        console.log(name);
    }
});

console.log(modifiedNames);
filteredNames = modifiedNames.filter(function (name) {
    return name.indexOf('rek') >= 0;
});
console.log(filteredNames);

['Batman', 'Robin', 'Gordon']
        .map(function (hero) {
            return 'Hero - ' + hero;
        })
        .forEach(function (hero) {
            console.log(hero);
        });

var heroes = ['Batman', 'Robin', 'Gordon'];
mappedHeroes = heroes.map(function (hero) {
    return 'Hero - ' + hero;
});
mappedHeroes.forEach(function (hero) {
    console.log(hero);
});
        