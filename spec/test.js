/// <reference path="./../typings/globals/jasmine/index.d.ts" />


describe('FizzBuzzのgenerateメソッドは',() => {
    beforeEach(() => {
        this.fizzbuzz = new FizzBuzz();
        this.FIZZ = 'FIZZ';
        this.BUZZ = 'BUZZ';
        this.FIZZ_BUZZ = 'FIZZ_BUZZ';
    });
 
    it('1を渡すと、1が返ってくる',() => {
        var result = this.fizzbuzz.generate(1);
        expect(result).toBe(1);
    });
    it('2を渡すと、2が返ってくる',() => {
        var result = this.fizzbuzz.generate(2);
        expect(result).toBe(2);
    });
    it('30を渡すと、30が返ってくる',() => {
        var result = this.fizzbuzz.generate(30);
        expect(result).toBe(30);
    });
});