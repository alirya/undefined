import NotUndefined from '../../dist/boolean/not-undefined';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it(`compiler compatible`,function() {

    let a : undefined|string = '1';

    if(NotUndefined(a)) {

        // @ts-expect-error
        let n : undefined = a;
        let s : string = a;

    } else {

        let n : undefined = a;
    }

});

describe(`number`,function() {

    it(`integer`, () => {
        expect(NotUndefined(1)).toBeTrue();
    });

    it(`float`, () => {
        expect(NotUndefined(1.1)).toBeTrue();
    });

    it(`infinity`, () => {
        expect(NotUndefined(Infinity)).toBeTrue();
    });

    it(`Nan`, () => {
        expect(NotUndefined(NaN)).toBeTrue();
    });
});

describe('boolean', function() {

    it(`true`, () => {
        expect(NotUndefined(true)).toBeTrue();
    });

    it(`false`, () => {
        expect(NotUndefined(false)).toBeTrue();
    });

});

describe('string', function() {

    it(`primitive`, () => {
        expect(NotUndefined('str')).toBeTrue();
    });

    it(`object`, () => {
        expect(NotUndefined(new String('str'))).toBeTrue();
    });

});

describe('object', function() {

    it(`plain`, () => {
        expect(NotUndefined({})).toBeTrue();
    });

    it(`instance`, () => {
        expect(NotUndefined(new Map())).toBeTrue();
    });

});

describe('function', function() {

    it(`anonymous `, () => {
        expect(NotUndefined(function () {})).toBeTrue();
    });

    it(`anonymous arrow`, () => {
        expect(NotUndefined(()=>{})).toBeTrue();
    });

    it(`named`, () => {
        expect(NotUndefined(isNaN)).toBeTrue();
    });

});

describe('empty', function() {

    it(`null `, () => {
        expect(NotUndefined(null)).toBeTrue();
    });

    it(`undefined`, () => {
        expect(NotUndefined(undefined)).toBeFalse();
    });

});





