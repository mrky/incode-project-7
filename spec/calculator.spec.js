describe('Calculator Functions', () => {
	let num1 = 2;
	let num2 = 3;
	
	// arrange
	beforeEach(() => {
		num1 = 2;
		num2 = 3;
	});
	
	it('Add Two Numbers', () => {
		// act
		let result = add(num1, num2);
		
		// arrange
		expect(result).toBe(5);
	});
	
	it('Subtract Two Numbers', () => {
		// act
		let result = subtract(num1, num2);
		
		// arrange
		expect(result).toBe(-1);
	});
	
	it('Multiply Two Numbers', () => {
		// act
		let result = multiply(num1, num2);
		
		// arrange
		expect(result).toBe(6);
	});
	
	it('Divide Two Numbers', () => {
		// act
		let result = divide(num1, num2);
		
		// arrange
        expect(result).toBe(0.6666666666666666);
    });
    
    describe('Divide Two Numbers', () => {
        // arrange
        beforeEach(() => {
            num1 = 2;
            num2 = 0;
        });

        it('Divide by Zero', () => {
            // act
            let result = divide(num1, num2)
            
            // arrange
            expect(result).toBe('Cannot divide by zero');
        });
    });
});