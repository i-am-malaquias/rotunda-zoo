import { Lion, Tiger } from './zoo.js';

describe('Animals speak exercise happy path', () => {
    it('Lion speaks', () => {
        const lion = new Lion();
        expect(lion.speak("I'm a lion")).toEqual("I'm roar a roar lion roar");
    });
    it('Tiger speaks', () => {
        const tiger = new Tiger();
        expect(tiger.speak("Lions suck")).toEqual("Lions grrr suck grrr");
    });
    it('Lion speaks with multiple spaces', () => {
        const lion = new Lion();
        expect(lion.speak("I'm a  lion")).toEqual("I'm roar a roar lion roar");
    });
});
