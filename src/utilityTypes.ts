/* ====================== UTILITY TYPES ========================== */

//PARTIAL TYPE ===================================

interface Assignments {
    studentId: string,
    title: string,
    grade: number,
    verified ?: boolean,
}

const updateAssignment = (assign: Assignments, propsToUpdate: Partial<Assignments>) : Assignments => {
    return { ...assign, ...propsToUpdate}
}

const assign1: Assignments = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

console.log(updateAssignment(assign1, {grade: 95}))

const assignGraded: Assignments = updateAssignment(assign1, {grade: 95})

//REQUIRED AND READONLY TYPES ========================================

const recordAssignment = (assign: Required<Assignments>) : Assignments => {
    return assign
}

const assignVerified: Readonly<Assignments> = {
    ...assignGraded,
    verified: true
}

// assignVerified.grade = 88;
recordAssignment({...assignGraded, verified: true})


//RECORD TYPE =================================================

const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

type Students = 'Sara' | 'Kelly'
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
}


interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sara: {assign1: 85, assign2: 93},
    Kelly: {assign1: 76, assign2: 15},
}

//PICK AND OMIT TYPES ===============================

type AssignResult = Pick<Assignments, "studentId" | "grade"> 

const score: AssignResult = {
    studentId: "K123",
    grade: 85,
}

type AssignPreview = Omit<Assignments, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "K123",
    title: "Final Project",
}

//EXCLUDE AND EXRACT TYPS =============================

type adjustedGrade = Exclude<LetterGrades, "U"> 

type highGrades = Extract<LetterGrades, "A" | "B" >

//NON NULLABLE TYPE ================================================

type AllPossibleGrades = 'Dave' | 'John' | null | undefined

type NamesOnly = NonNullable<AllPossibleGrades>

//RETURN TYE =============================

// type newAssign = { title: string, points: number} 

const createNewAssign = (title: string, points: number)  => {
    return {title, points}
}

type newAssign = ReturnType <typeof createNewAssign>

const tsAssign: newAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)


//PARAMETERS TYPES ==========================================================

type AssignParams = Parameters <typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const sAssign2: newAssign = createNewAssign(...assignArgs)


// AWAITED - HELPS UD WITH THE RETURN TYPE OF A PROMISE 

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))