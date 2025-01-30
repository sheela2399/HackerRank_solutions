/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transposeMatrix = function(matrix) {
    let transpose = [];

    // for column loop
    for(let i=0;i<matrix[0].length; i++){
        transpose[i] = [];
    
    // for row loop
    for(let j=0; j<matrix.length;j++){
          transpose[i][j]= matrix[j][i]
    }
    }
 return transpose;
};

console.log(transposeMatrix([[1,2,3],[4,5,6],[7,8,9]]
));