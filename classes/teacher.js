const Person = require('./person');

// class "Teacher" that is a subclass of Person
class Teacher extends Person {
  // constructor function; input: firstName, lastName, age, subject, yearsOfExperience
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName); // super function; input: firstName, lastName, age
    this.subject = subject; // subject property
    this.yearsOfExperience = yearsOfExperience; // yearsOfExperience property
  }
  
  // static method "combinedYearsOfExperience"; input: array of Teacher instances; output: returns sum of input array
  static combinedYearsOfExperience(teachers) {
    return teachers.reduce((sum, teacher) => {
      return sum + teacher.yearsOfExperience;
    }, 0);
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}