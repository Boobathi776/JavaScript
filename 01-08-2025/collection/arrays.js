const students = [
  { name: "Boobathi", marks: 95 },
  { name: "Kumar", marks: 82 },
  { name: "Priya", marks: 74 },
  { name: "Amit", marks: 65 }
];

const result = students.forEach
(
    (value)=>
    {
        let marks = value.marks;
        let grade;
        if(marks>=90)
        {
            grade="A";
        }
        else if(marks>=75) grade="B";
        else grade="C";

        console.log(value.name+"- Grade  "+grade);
    },students
)