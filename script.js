/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
arr.map(function(value)
{
  if(value.marks > 50) console.log(value);
})//Write your code here , just console.log
}

function PrintStudentsbyForEach() {
 arr.forEach(function(value)
 {
   if(value.marks > 50) console.log(value);
 }) //Write your code here , just console.log
}

function addData() {
 var student = new Object(); //{}
 student = {id:4,name:"susan",age:"20",marks:45}; 
 arr.push(student);
 console.log(arr[3]);//Write your code here, just console.log
}

function removeFailedStudent() {
  for(var i = 0; i< arr.length; i++)
  {
      if(arr[i].marks < 50) 
      {
        arr.splice(i , 1);
        i--;
      }
  }
  console.log(arr);//Write your code here, just console.log
}

function concatenateArray() {
  let temp = [
    { id: 5, name: "pranshu", age: "24", marks: 100 },
    { id: 6, name: "jagan", age: "20", marks: 25 },
    { id: 7, name: "karina", age: "19", marks: 35 },
  ];
  const newArr = arr.concat(temp);
  console.log(newArr);//Write your code here, just console.log
}
