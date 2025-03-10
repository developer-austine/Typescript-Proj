class coder {

    secondLang!: string

    constructor(
        public readonly  name: string, 
        public  music: string, 
        private age: number, 
        protected lang: string = 'TypeScript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age} years old`
    }
}

const Dave = new coder('Dave', 'Rock', 19)

console.log(Dave.getAge())

class WebDev  extends coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)
console.log(Sara.getLang())
// console.log(Sara.age)
// console.log(Sara.lang)

/* ============================================================= */

interface Musician {
    name: string
    instrument: string
    play(action: string): String
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string){
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))


/* ==================================================================== */

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Peeps.count)
console.log(Steve.id)
console.log(Amy.id)

// getters and setters ================================================= //

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState= []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if(Array.isArray(value) && value.every(el => typeof el === 'string')){
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }

}

const myBands = new Bands ()
myBands.data = ['Neil Zapin', 'Led Zep']
console.log(myBands.data)
myBands.data = [...myBands.data, 'Zz Top']
console.log(myBands.data)
myBands.data = ['Van Halen', '5150']