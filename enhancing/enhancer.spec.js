const enhancer = require('./enhancer.js');
// test away!
it('should be true and run',()=>{
    expect(true).toBe(true)
})

describe('enhancer',()=>{  
 
    describe('succeed function', () => {
		it('should increase enhancement level by 1', () => {
			const item = {enhancement: 12}
			const result = {enhancement: 13}
			expect(enhancer.succeed(item)).toStrictEqual(result)
        });
    });
    describe('The fail function', () => {
        it('should reduce dura by 5 if enhance less than 15', () => {
			const item = {
			    durability: 100,
				enhancement: 9
			};
			const result = {
                durability: 95,
				enhancement: 9
			};
			expect(enhancer.fail(item)).toStrictEqual(result);
		});
		it('should reduce dura by 10, but not enhance level if it is 15 or 16', () => {
			const item = {
                durability: 100,
				enhancement: 16
			};
			const result = {
				durability: 90,
				enhancement: 16
			};
			expect(enhancer.fail(item)).toStrictEqual(result);
		});
		it('should reduce dura by 10 and reduce enhance level if enhance level is more than 16', () => {
			const item = {
				durability: 40,
				enhancement: 19
			};
			const result = {
                durability: 30,
				enhancement: 18
			};
			expect(enhancer.fail(item)).toStrictEqual(result);
		});
    })  
    describe('repairer funciton', ()=>{           
        it('should repair item dura to 100 ',()=>{
            const item = {durability:50}
            const result={durability:100}
            expect(enhancer.repair(item)).toStrictEqual(result)
        });
    });

});
