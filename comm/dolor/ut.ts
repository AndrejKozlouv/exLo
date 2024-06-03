// Define a class 'School'
class School {
  // Properties of the School
  private name: string;
  private numberOfStudents: number;
  private numberOfTeachers: number;

  // Constructor to initialize the School object
  constructor(name: string, numberOfStudents: number, numberOfTeachers: number) {
    this.name = name;
    this.numberOfStudents = numberOfStudents;
    this.numberOfTeachers = numberOfTeachers;
  }

  // Method to enroll a student
  public enrollStudent(studentName: string): void {
    console.log(`${studentName} has been enrolled.`);
    this.numberOfStudents++;
  }

  // Method to hire a teacher
  public hireTeacher(teacherName: string): void {
    console.log(`${teacherName} has been hired.`);
    this.numberOfTeachers++;
  }

  // Method to get the school details
  public getSchoolDetails(): string {
    return `School Name: ${this.name}, Students: ${this.numberOfStudents}, Teachers: ${this.numberOfTeachers}`;
  }
}

// Create a new School instance
const MySchool = new School('Green Valley High', 500, 30);

// Use the School methods
MySchool.enrollStudent('John Doe');
MySchool.hireTeacher('Jane Smith');

// Log the school details
console.log(MySchool.getSchoolDetails());
