/* =============================== INDEX SIGNATURES ======================== */

// interface TransactionObj {
//    readonly [index: string]: number // this is an indexed signature. It just declares we know all the keys will be strings and all the values will be numbers 
// }

interface TransactionObj{
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 42
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza']) // this will print -10

let prop: string = 'Pizza'
console.log(todaysTransactions[prop]) 

const todaysNet = (transactions: TransactionObj) : number => {
    let total = 0
    for(const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions))

console.log(todaysTransactions['Dave'])


/* ======================== INDEXING SIGNATURES =========================== */

interface Student {
    // [key: string]: string | number | number[] | undefined // this is indexing of signtures still in typescript.
    name: string,
    GPA: number,
    classes ?: number[]
}

const student: Student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
}

// console.log(student.test)

for(const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`) //use of keyof assertion 
}

/* ===================== KEYOF ASSERTION ===================== */

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student) : void => {
    console.log(`Student ${key}: ${student[key]}`)
} 

logStudentKey(student, 'name')


/* ======================================================================== */

// interface Incomes {
//     [key: string | number] : number
// }

type Streams = 'Salary' | 'Bonus' | 'Sidehustle'

type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
    Salary: 500,
    Bonus: 100,
    Sidehustle: 250
}

for(const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}