import NotUndefined from "../../../dist/assert/not-undefined";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('union', () => {

    let target : undefined|number = <any>1;

    NotUndefined(target);

    let number : number = target;

    // @ts-expecerror
    let undefined : undefined = target;
});

describe('unknown', () => {

    let target : any = 1;

    NotUndefined(target);

    let undefined : undefined = target;

});
