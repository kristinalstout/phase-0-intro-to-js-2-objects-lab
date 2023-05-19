// Write your solution in this file!

const employee = {
        name : "Name",
        address : "address",
};

function updateEmployeeWithKeyAndValue(employee,key,value){
    return{
        ...employee,
        [key]:value,
    };
};
updateEmployeeWithKeyAndValue(employee,"name","Sam");

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","Sam");

function deleteFromEmployeeByKey(employee,key){
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}