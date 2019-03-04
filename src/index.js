module.exports = function solveSudoku(matrix = []) {

	const Row = (matrix, r) => { //form the missing in the row
		let row = [1,2,3,4,5,6,7,8,9];
		matrix[r].forEach(element => {
			if (row.indexOf(element) !== -1) row.splice(row.indexOf(element), 1);
		});
		return row; 
	}
	 
	const Column = (matrix, c) => { //form the missing in the column
		let column = [1,2,3,4,5,6,7,8,9];
		matrix.forEach(element => {
		 	if (column.indexOf(element[c]) !== -1) column.splice(column.indexOf(element[c]), 1);
		});
		return column;
	}
	
	const Square = (matrix, r, c) => { //form the missing in the Square
		let square = [1,2,3,4,5,6,7,8,9];
		let n = (c<=2)?0:(c>=6)?6:3; 
		let m = (r<=2)?0:(r>=6)?6:3; 
		for (let k = n; k < n+3; k++){					
			for (let i = m; i < m+3; i++){		
				if (square.indexOf(matrix[i][k]) !== -1) square.splice(square.indexOf(matrix[i][k]), 1);
			}
		}
		return square;	
	}
	
	const Check = (arr, _arr) => {  
		let totals = [];
		arr.forEach(element => {
			if (_arr.indexOf(element) !== -1) totals.push(element);
		}); 
		return totals;
	}

	let arr = matrix;
    let fin = matrix.length;
	let options = [];
	
	for (let i = 0; i < fin; i++){
		for (let j = 0; j < fin; j++){
			if (arr[i][j] === 0) {
            	options = Check( Row(arr, i), Column(arr, j) );
            	options = Check( Square(arr, i, j), options ) ;
            	arr[i][j] = (options.length === 1)?options[0]:options;
			}
		}
	}
	return arr;
}

