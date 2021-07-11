var name_student_array=[];

function submit(){
    var std1=document.getElementById("student1").value;

var std2=document.getElementById("student2").value;

var std3=document.getElementById("student3").value; 
 
 var std4=document.getElementById("student4").value;

 name_student_array.push(std1);

 name_student_array.push(std2);

 name_student_array.push(std3);
 
 name_student_array.push(std4);

console.log(name_student_array);
document.getElementById("displayname").innerHTML=name_student_array;
}