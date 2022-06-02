var employeeNameType=document.getElementById("employeeName");
var jobTypeType=document.getElementById("jobType");
var salaryType=document.getElementById("salary");
var jobDescriptionType=document.getElementById("jobDescription");
var click = document.getElementById("click");
var deleteBtn = document.getElementById('deleteBtn');
var data = document.getElementById("data");
var inputs=document.getElementsByClassName('inputs');
var carrantIndex=0;
//var tempIndex = 0;
var formType = 1;
 if(localStorage.getItem('employeee')==null){
    var names=[];
 }else{
   var names=JSON.parse(localStorage.getItem('employeee'));
   type();
 }
click.onclick=function(){
    if(formType){
        objectt();
    }else{
        UpdateData();
    }
    type()
    clearInputs();
}
function objectt(){
    var namee={
        employee:employeeNameType.value,
        job:jobTypeType.value,
        salary:salaryType.value,
        jobDescription:jobDescriptionType.value

    }
    if(namee.employee.length<3){
        alert("Name should be 3 characters or longer");

        return;
    }
    if(namee.employee.charAt(0)!==namee.employee.charAt(0).toUpperCase()){
        alert("First letter should be in uppercase.")
        return;
    }
    names.push(namee);
    localStorage.setItem('employeee',JSON.stringify(names));
}
function type(){
    var result="";
    for (var i =0 ; i<names.length;i++){
        var j=i+1;
        result += `<tr>
        <td>${[j]}</td>
        <td>${names[i].employee}</td>
        <td>${names[i].job}</td>
        <td>${names[i].salary}</td>
        <td>${names[i].jobDescription}</td>
        <td><button class="update" onclick="getUpdateData(${i})" >update</button></td>
        <td><button class="delete" onclick="deleteInputs(${i})">delete</button></td> 
     </tr>`
    }
    data.innerHTML=result
}
function clearInputs(){
    for (var i=0;i<inputs.length;i++){
        inputs[i].value="";
    }
}

function deleteInputs(i){
    names.splice(i,1);
    localStorage.setItem("employeee",JSON.stringify(names));
    type();
}
deleteBtn.onclick=function(){
    localStorage.removeItem("employeee");
    names=[];
    data.innerHTML="";
}
function search(searchText){
    var result="";
    for (var i =0 ; i<names.length;i++){
        if(names[i].employee.toLowerCase().includes(searchText.toLowerCase())){
        var j=i+1;
        result += `<tr>
        <td>${[j]}</td>
        <td>${names[i].employee}</td>
        <td>${names[i].job}</td>
        <td>${names[i].salary}</td>
        <td>${names[i].jobDescription}</td>
        <td><button class="update">update</button></td>
        <td><button class="delete" onclick="deleteInputs(${i})">delete</button></td> 
     </tr>`
    }
    }
    data.innerHTML=result
}
function getUpdateData(index){
    formType=0;
    var namee=names[index];
    employeeNameType.value=namee.employee;
    jobTypeType.value=namee.job;
    salaryType.value=namee.salary;
    jobDescriptionType.value=namee.jobDescription;
    click.innerHTML="Update employee";
    carrantIndex=index;
}
function UpdateData(){
    var namee={
        employee:employeeNameType.value,
        job:jobTypeType.value,
        salary:salaryType.value,
        jobDescription:jobDescriptionType.value
    }
    names[carrantIndex].employee=namee.employee;
    names[carrantIndex].job=namee.job;
    names[carrantIndex].salary=namee.salary;
    names[carrantIndex].jobDescription=namee.jobDescription;
    localStorage.setItem("employeee",JSON.stringify(names));
    ResetFields();
    
}
function ResetFields(){
    clearInputs();
    click.innerHTML="Add Employee";
    carrantIndex=0;
    formType=1;

}
