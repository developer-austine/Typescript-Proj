/* ============== TYPE ASSERTIONS ================== */
type one = string
type two = string | number
type three = 'Hello'

//convert to more or less
let a: one = 'Hello'
let b = a as two //less specific
let c = a as three // more specific

let d = <one> 'Word'
let e = <string | number> 'World'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if(c === 'add') return a+ b;
    return '' + a + b
}

let myVal: string =addOrConcat(2,2,'concat') as string

//Be careful becuse typescrit see's no problem here - but a string is returned instead
let nextVal: number =addOrConcat(2,2,'concat') as number

// 10 as string

(10 as unknown) as string //double casting or forced casting

//THE DOM

const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')

img.src
myImg.src