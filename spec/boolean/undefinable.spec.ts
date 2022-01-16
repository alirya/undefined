import Undefinable from "../../dist/boolean/undefinable";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let a : unknown = '1';

    if(Undefinable(a, Array.isArray)) {

        let n : undefined|any[] = a;

    } else {

        // @ts-expecerror
        let n : undefined|any[] = a;
    }

});

describe('valid', () => {

    it("value", () => {

        expect(Undefinable<Array<any>>([], Array.isArray )).toBe(true);
    });

    it("undefined", () => {

        expect(Undefinable<Array<any>>(undefined, Array.isArray )).toBe(true);
    });

});

describe('invalid', () => {

    it("value", () => {

        expect(Undefinable<Array<any>>(1, Array.isArray )).toBe(false);
    });

});


