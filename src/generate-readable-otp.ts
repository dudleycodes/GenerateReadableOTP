import {subjects, verbs, objects, charPool} from './readOnlyData'

export default class GenerateReadableOTP {

    /** Generate a random hexadecimal value */
    public static Hexadecimal(length: number = 6): string[] {
        if (length < 2) {
            console.warn("GenerateReadableOTP.Hexadecimal() cannot be less than 2! Value set to 2.");
            length = 2;
        }

        let returnArray: string[] = [];

        if (length % 2 !== 0) {
            returnArray.push(this.GetRandomArrayValue(charPool));
        }

        while (returnArray.join("").length < length) {
            returnArray.push(this.GetRandomArrayValue(charPool) + this.GetRandomArrayValue(charPool));
        }

        return returnArray;
    }

    /** Generate a short phrase using words from a 4th grade spelling lists. */
    public static ShortPhrase(maxLength: number = 24): string[] {
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
    public static ShortPhraseNumber(): string[] {

        if (this.GetRandomBoolean()) {
            return [...this.ShortPhrase(), this.GetRandomInt(10, 99).toString()];
        } else {
            return [this.GetRandomInt(10, 99).toString(), ...this.ShortPhrase()];
        }
    }

    /** Generates a random word with a trailing 2-digit number */
    public static WordNumber(): string[] {
        let returnArray: string[] = [this.GetRandomArrayValue([... subjects, ...objects]), this.GetRandomInt(10, 99)];

        if (this.GetRandomBoolean()) {
            returnArray.reverse();
        }

        return returnArray;
    }

    /** Get a random value from an array */
    private static GetRandomArrayValue(arrayIn: any[]) {
        return arrayIn[Math.floor(Math.random() * arrayIn.length)];
    }

    /** Get a random boolean value */
    private static GetRandomBoolean(): boolean {
        return !!(Math.random() < .5);
    }

    /** Get a random number between low and high */
    private static GetRandomInt(low: number, high: number): number {
        return Math.floor(Math.random() * (high - low) + low);
    }
}
