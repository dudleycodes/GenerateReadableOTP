import ReadableOTP from "./index";

describe("ReadableOTP", () => {
    describe("Hexadecimal", () => {
        it("Returns value with a length of 4", () => {
            let result: string[] = ReadableOTP.Hexadecimal(4);

            expect(result.join("").length).toEqual(4);
        });

        it("Returns value with a length of 6", () => {
            let result: string[] = ReadableOTP.Hexadecimal(6);

            expect(result.join("").length).toEqual(6);
        });

        it("Returns value with a length of 7", () => {
            let result: string[] = ReadableOTP.Hexadecimal(7);

            expect(result.join("").length).toEqual(7);
        });

        it("Returns value with a length of 64", () => {
            let result: string[] = ReadableOTP.Hexadecimal(64);

            expect(result.join("").length).toEqual(64);
        });
    });
});
