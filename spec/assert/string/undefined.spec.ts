import {UndefinedParameters} from '../../../dist/assert/string/undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let data = new Map<[boolean, any, string?], string>();

it('true', ()=>{

    expect(UndefinedParameters({}, true,  'value')).toBe(
        'value is undefined.'
    );

});

it('false', ()=>{

    expect(UndefinedParameters({}, false,  'value')).toBe(
        'value must undefined, actual object.'
    );

});
