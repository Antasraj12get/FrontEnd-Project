const employeeData = async () => {
  let data = await fetch("data.json");
  let res = await data.json();
  let employee = res;

  let employeeList = document.getElementById("employees__names--list");
  let employeeInfo = document.getElementById("employees__single--info");
  employee.forEach((item) => {
    let span = document.createElement("span");
    span.classList.add("employee-name");
    span.innerHTML = `${item.firstName} ${item.lastName} `;
    let del = document.createElement("span");
    del.innerHTML = "X";
    span.appendChild(del);
    employeeList.appendChild(span);
    del.addEventListener("click", () => {
      span.remove();
      employeeInfo.innerHTML = " ";
    });
    span.addEventListener("dblclick", () => {
      employeeInfo.innerHTML = " ";
      employeeInfo.innerHTML = `Email: ${item.email} <br/>
     PhoeNo:${item.contactNumber}  <br/>
     Age:${item.age}  <br/>
       DOB:${item.dob} <br/>
       Salary:${item.salary}  <br/>
       Address:${item.address} <br/>
        `;
    });
  });

  let addEmployee = document.querySelector(".createEmployee");
  let addform = document.querySelector(".addEmployee");
  addEmployee.addEventListener("click", () => {
    addform.style.display = "flex";
  });


  


};
employeeData();
