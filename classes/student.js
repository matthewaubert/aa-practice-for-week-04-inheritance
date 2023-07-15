const Person = require('./person');

// class "Student" that is a subclass of "Person"
class Student extends Person {
  // constructor function; input: firstName, lastName, age, major, GPA
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName); // super function; input: firstName, lastName, age
    this.major = major; // major property
    this.GPA = GPA; // GPA property
  }

  // static method "compareGPA"; input: two Student instances; output: return string
  static compareGPA(student1, student2) {
    // if GPA of student1 is higher
    if (student1.GPA > student2.GPA) {
      // return "<firstName> <lastName> has the higher GPA."
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`;
    // if GPA of student2 is higher
    } else if (student2.GPA > student1.GPA) {
      // return "<firstName> <lastName> has the higher GPA."
      return `${student2.firstName} ${student2.lastName} has the higher GPA.`;
    } else {
      // return "Both students have the same GPA."
      return "Both students have the same GPA";
    }
  }
}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}