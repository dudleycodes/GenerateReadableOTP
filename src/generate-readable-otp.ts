import {subjects, verbs, objects, hexcdecimalChars} from './readOnlyData'

export default class GenerateReadableOTP {

    /** Generate a random hexadecimal value */
    public static hexadecimal(length: number = 6): string[] {
        if (length < 2) {
            console.warn("GenerateReadableOTP.Hexadecimal() cannot be less than 2! Value set to 2.");
            length = 2;
        }

        let returnArray: string[] = [];

        if (length % 2 !== 0) {
            returnArray.push(this.getRandomValueFromArray(hexcdecimalChars));
        }

        while (returnArray.join("").length < length) {
            returnArray.push(this.getRandomValueFromArray(hexcdecimalChars) + this.getRandomValueFromArray(hexcdecimalChars));
        }

        return returnArray;
    }

    /** Generate a 3-word phrase using words from 4th grade spelling lists. */
    public static shortPhrase(maxLength: number = 24): string[] {
        if (maxLength < 21) {
            console.warn("GenerateReadableOTP.maxLength() cannot be less than 21! Value set to 21.");
            maxLength = 21;
        }

        let returnArray: string[] = [];

        do {
            returnArray = [ subjects[Math.floor(Math.random() *  subjects.length)].toLowerCase(),
                verbs[Math.floor(Math.random() * verbs.length)].toLowerCase(),
                objects[Math.floor(Math.random() * objects.length)].toLowerCase()];

        } while (returnArray.join("").length > maxLength);

        return returnArray;
    }

    /** Generates a short pharse with a random number 2-digit number either appended or prepended */
    public static shortPhraseNumber(numberAppend: boolean = false): string[] {

        if (numberAppend || this.getRandomBoolean()) {
            return [...this.shortPhrase(), this.getRandomInt(10, 99).toString()];
        } else {
            return [this.getRandomInt(10, 99).toString(), ...this.shortPhrase()];
        }
    }

    /** Generates a random word with a random number 2-digit number either appended or prepended */
    public static wordNumber(numberAppend: boolean = false): string[] {
        let returnArray: string[] = [this.getRandomValueFromArray([... subjects, ...objects]), this.getRandomInt(10, 99)];

        if (!numberAppend && this.getRandomBoolean()) {
            returnArray.reverse();
        }

        return returnArray;
    }

    /** Get a random value from an array */
    private static getRandomValueFromArray(arrayIn: any[]) {
        return arrayIn[Math.floor(Math.random() * arrayIn.length)];
    }

    /** Get a random boolean value */
    private static getRandomBoolean(): boolean {
        return !!(Math.random() < .5);
    }

    /** Get a random number between low and high */
    private static getRandomInt(low: number, high: number): number {
        return Math.floor(Math.random() * (high - low) + low);
    }
}
