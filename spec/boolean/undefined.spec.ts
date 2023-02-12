import Undefined from '../../dist/boolean/undefined.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it(`compiler compatible`,function() {

    const a : unknown = '1';

    if(Undefined(a)) {

        const n : undefined = a;

    } else {

        // @ts-expect-error
        const n : undefined = a;
    }

});

describe(`number`,function() {

    it(`integer`, () => {
        expect(Undefined(1)).toBeFalse();
    });

    it(`float`, () => {
        expect(Undefined(1.1)).toBeFalse();
    });

    it(`infinity`, () => {
        expect(Undefined(Infinity)).toBeFalse();
    });

    it(`Nan`, () => {
        expect(Undefined(NaN)).toBeFalse();
    });
});

describe('boolean', function() {

    it(`true`, () => {
        expect(Undefined(true)).toBeFalse();
    });

    it(`false`, () => {
        expect(Undefined(false)).toBeFalse();
    });

});

describe('string', function() {

    it(`primitive`, () => {
        expect(Undefined('str')).toBeFalse();
    });

    it(`object`, () => {
        expect(Undefined(new String('str'))).toBeFalse();
    });

});

describe('object', function() {

    it(`plain`, () => {
        expect(Undefined({})).toBeFalse();
    });

    it(`instance`, () => {
        expect(Undefined(new Map())).toBeFalse();
    });

});

describe('function', function() {

    it(`anonymous `, () => {
        expect(Undefined(function () {})).toBeFalse();
    });

    it(`anonymous arrow`, () => {
        expect(Undefined(()=>{})).toBeFalse();
    });

    it(`named`, () => {
        expect(Undefined(isNaN)).toBeFalse();
    });

});

describe('empty', function() {

    it(`null `, () => {
        expect(Undefined(null)).toBeFalse();
    });

    it(`undefined`, () => {
        expect(Undefined(undefined)).toBeTrue();
    });

});





