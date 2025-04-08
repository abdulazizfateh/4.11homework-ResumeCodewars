// PROBLEM 1
const smash = (words) => {
    return words.join(" ");
}
console.log(smash(['hello', 'world', 'this', 'is', 'great']));




// PROBLEM 2
{
    function grow(x) {
        return x.reduce((sum, item) => {
            return item * sum;
        })
    }
}

// -> Single Line Version
const grow = (x) => x.reduce((sum, item) => item * sum);
console.log(grow([1, 2, 3, 4]));




// PROBLEM 3
function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) return []; // !input -> null, undefined, "" is falsy values so it gives true with negotaion 
    const positiveNums = input.filter((item) => item > 0);
    const sumOfNegativeNums = input.filter(item => item < 0).reduce((sum, item) => sum + item, 0);
    return [positiveNums.length, sumOfNegativeNums];
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));




// PROBLEM 4
{
    const DNAtoRNA = (dna) => {
        let newStr = "";
        for (let i = 0; i < dna.length; i++) {
            if (dna[i] === "T") {
                newStr += "U";
            } else {
                newStr += dna[i];
            }
        }
        return newStr;
    }
    console.log(DNAtoRNA("TTTT"));
}

// -> Single Line Version
const DNAtoRNA = dna => dna.replaceAll('T', 'U');
console.log(DNAtoRNA("TTTT"));




// PROBLEM 5
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (fuelLeft * mpg >= distanceToPump) {
        return true;
    } else {
        return false;
    }
};
console.log(zeroFuel(50, 25, 2));




// PROBLEM 6.1
{
    var min = function (list) {
        return Math.max(...list)
    }

    var max = function (list) {
        return Math.min(...list)
    }

    console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));
    console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
}

// PROBLEM 6.2
{
    var min = function (list) {
        let max = list[0];
        list.forEach((item) => {
            if (item > max) {
                max = item;
            }
        })
        return max;
    }

    var max = function (list) {
        let min = list[0];
        list.forEach((item) => {
            if (item < min) {
                min = item;
            }
        })
        return min;
    }

    console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));
    console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
}




// PROBLEM 7
function fakeBin(x) {
    let newStr = "";
    for (let i = 0; i < x.length; i++) {
        if (Number(x[i]) < 5) {
            newStr += 0;
        } else {
            newStr += 1;
        }
    }
    return newStr;
}
console.log(fakeBin("45385593107843568"));




// PROBLEM 8
function check(a, x) {
    return a.includes(x);
}
console.log(check([101, 45, 75, 105, 99, 107], 107));




// PROBLEM 9
function stringToArray(string) {
    return string.split(" ");
}
console.log(stringToArray("Abdulaziz Ergashev"));




// PROBLEM 10
function countBy(x, n) {
    let newArray = [];
    for (let i = 1; i <= n; i++) {
        newArray.push(x * i);
    }
    return newArray;
}
console.log(countBy(2, 5));




// // PROBLEM 11
const countSheep = function (num) {
    let result = "";
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`
    }
    return result;
}

console.log(countSheep(3));




// // PROBLEM 12
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isDivisible(12, 3, 4));




// // PROBLEM 13
function greet(name, owner) {
    if (owner === name) {
        return "Hello boss"
    } else {
        return "Hello guest"
    }
}