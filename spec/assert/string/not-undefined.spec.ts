import NotUndefined from '../../../dist/assert/string/not-undefined-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let data = new Map<[boolean, any, string?], string>();

it('true', ()=>{

    expect(NotUndefined({}, true, 'value')).toBe('value is not undefined.');

});

it('false', ()=>{

    expect(NotUndefined({}, false, 'value')).toBe(
        'value must not undefined.'
    );

});
