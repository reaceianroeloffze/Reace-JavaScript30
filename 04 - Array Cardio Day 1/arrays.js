// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventorsFrom1500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600); // Creates a new array with the inventors born in the 1500's. filter() returns a new array with the elements that meet the condition(s) specified in the callback function.
console.log(inventorsFrom1500s);

// Array.prototype.map();
// 2. Give us an array of the inventors' first and last names
const inventorFullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`); // Makes a new array with the inventors' full names. map() always returns a new array with the same length as the original array, according to the specifications set in the callback function.
console.log(inventorFullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.sort((a, b) => a.year - b.year); // Indicates that a comes before b. sort() sorts an array, then returns the sorted array. The sort() method sorts the array in place, so it does not return a new array. The sort() method sorts the array in ascending order by default.
console.table(sortedInventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalInventorYearsLived = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year); // Adds the years together.
}, 0); // The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. Think of it as a shorthand method for the for loop. The reduce() method takes three arguments: the accumulator (or initial value), a callback function, and an optional value to use as the initial value. The accumulator starts with the value provided as the second argument to reduce(), and then the callback function is executed on each element of the array. The return value of the callback function (or the final value of the accumulator) is passed as the first argument to the next call of the callback function, and so on. The return value of the reduce() method is the final value of the accumulator.
console.log(totalInventorYearsLived);
console.log(`The inventors lived  ${totalInventorYearsLived} years altogether.`);

// 5. Sort the inventors by years lived
const sortedInventorYearsLived = inventors.sort((a, b) => {
    return (b.passed - b.year) - (a.passed - a.year); // Sorts in descending order.
});
console.table(sortedInventorYearsLived);

// To ensure the array is sorted as specified, use the forEach() method
// to get the individual inventors' names and years lived.
// Since the array is sorted, the years lived will be in descending order.
// Therefore, we can use the forEach() method as is to retrieve the name and years lived.
sortedInventorYearsLived.forEach(inventor => {
    console.log(`${inventor.first} ${inventor.last} lived ${inventor.passed - inventor.year} years.`);
});


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


/* QuerySelectorAll & QuerySelector return NodeList objects.
*  We can convert them to an array using the spread operator.
const boulevards = [...document.querySelectorAll('.mw-category a')];
* Or by using the Array.from() method.
const boulevards = Array.from(document.querySelectorAll('.mw-category a'));
* Once that is done, we can use the map() method to get the text content of each link.
const boulevards = boulevards.map(link => link.textContent);
* We can then use the filter() method to get only the links that contain the word 'de'.
const boulevards = boulevards.filter(boulevard => boulevard.includes('de'));
const boulevardsWithDe = boulevards.map(link => link.textContent).filter(boulevard => boulevard.includes('de'));
*/


// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleSorted = people.sort((a, b) => {
    const [lastNameA, firstNameA] = a.split(', '); // Destructures the array into two variables.
    const [lastNameB, firstNameB] = b.split(', '); // Destructures the array into two variables.
    return lastNameA.localeCompare(lastNameB); // localeCompare() compares the last names alphabetically, then sorts the names alphabetically, according to the last name. Since these are words, not numbers, localeCompare() is used to sort the array. Case-sensitivity applies. localeCompare() compares two strings alphabetically and returns a number specifying their relative position in the sort order.
});
console.log(peopleSorted);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const modesOfTransportation = data.reduce((transObj, transMode) => {
    if (!transObj[transMode]) {
        transObj[transMode] = 0; // Checks if the key exists in the object. If not, creates it.
    }
    transObj[transMode]++; // Increments the value of the key.
    return transObj; // Returns the object.
}, {}); // Start with an empty object, then populate it with the data.
console.log(modesOfTransportation);

