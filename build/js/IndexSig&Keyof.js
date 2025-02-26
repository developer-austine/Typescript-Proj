"use strict";
/* =============================== INDEX SIGNATURES ======================== */
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 42
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']); // this will print -10
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
console.log(todaysTransactions['Dave']);
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`); //use of keyof assertion 
}
/* ===================== KEYOF ASSERTION ===================== */
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    Salary: 500,
    Bonus: 100,
    Sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
