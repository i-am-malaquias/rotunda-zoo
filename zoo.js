export class Animal {
    constructor({sound}) {
        this.sound = sound;
    }

    speak(phrase) {
        return phrase.replace(/\s+/g, ` ${this.sound} `) + ` ${this.sound}`;
    }
}

export class Lion extends Animal {
    constructor() {
        super({sound:"roar"});
    }
}

export class Tiger extends Animal {
    constructor() {
        super({sound:"grrr"});
    }
}

const lion = new Lion();
console.log(lion.speak("I'm a lion"));

const tiger = new Tiger();
console.log(tiger.speak("Lions suck"));