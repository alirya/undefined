import {NotUndefinedParameters} from '../../../dist/assert/string/not-undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

const data = new Map<[boolean, any, string?], string>();

it('true', ()=>{

    expect(NotUndefinedParameters({}, true, 'value')).toBe('value is not undefined.');

});

it('false', ()=>{

    expect(NotUndefinedParameters({}, false, 'value')).toBe(
        'value must not undefined.'
    );

});
