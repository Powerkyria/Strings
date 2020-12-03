(() => {
	describe('calculator', () => {
		test('nombre al test', () => {});
	});

	describe('Calculator', () => {
		test('sum 1 add 1', () => {
			const calculator = Calculator();

			let result = calculator.sum(1, 1);

			expect(result).toBe(2);
		});

		test('sum 5 add 6', () => {
			const calculator = Calculator();

			let result = calculator.sum(5, 6);

			expect(result).toBe(11);
		});
	});

	function Calculator() {
		return {
			sum: sum,
		};

		function sum(n1, n2) {
			return n1 + n2;
		}
	}
})();

// npm init para instalar package json( en el script cambiar test: jest)
// npm install --save-dev jest para instalar el jest
