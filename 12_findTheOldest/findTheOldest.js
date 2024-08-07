const findTheOldest = function(personsArray) {
    return personsArray.reduce((person1, person2) => oldestReducer(person1, person2));

};

let currentYear = new Date().getFullYear();

function oldestReducer (prev, current) {
    if(getAge(prev,currentYear) > getAge(current,currentYear)) {
        return prev;
    } else {
        return current;
    }

}

function getAge(person, currentYear) {
    if (person.yearOfDeath == undefined) {
        return currentYear - person.yearOfBirth;
    } else {
        return person.yearOfDeath - person.yearOfBirth;
    }
}


// Do not edit below this line
module.exports = findTheOldest;




