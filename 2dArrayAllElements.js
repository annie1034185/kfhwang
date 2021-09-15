const readline = require('readline-sync');

var row = 5, col = 5;

class Index {   //定義物件類別
    constructor(_row, _col) { //建構元函式
        if (_row >= 0 && _row < row && _col >= 0 && _col < col) {
            this.row = _row;
            this.col = _col;
        }
        else
            this.row = this.col = null;
    }
    print = function () {
        if (this.row != null)
            return ("[" + this.row + ", " + this.col + "]");
        else
            return "NULL";
    }
}

//var aryBox= [["0,0", "0,1", "0,2", "0,3", "0,4"],["1,0", "1,1", "1,2", "1,3", "1,4"],["2,0", "2,1", "2,2", "2,3", "2,4"],["3,0", "3,1", "3,2", "3,3", "3,4"],["4,0", "4,1", "4,2", "4,3", "4,4"]]
var aryBoxVisited = []
var aryBox1 = []
var allElement = []
for (let r = 0; r < row; r++) {
    aryBox1.push([])
    aryBoxVisited.push([])
    for (let c = 0; c < col; c++) {
        var randR = Math.floor(Math.random() * Math.floor(row));
        var randC = Math.floor(Math.random() * Math.floor(col));
        //aryBox1[r].push(new Index(randR,randC))
        aryBoxVisited[r].push(0)
        allElement.push(new Index(r, c))
    }
}


//poler cards
var poker = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D1', 'D11', 'D12', 'D13', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B1', 'B11', 'B12', 'B13', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S1', 'S11', 'S12', 'S13', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H1', 'H11', 'H12', 'H13'];
poker.sort(function (a, b) { return Math.random() - 0.5; });
console.log(poker.splice(0, 13))
console.log(poker.splice(0, 13))
console.log(poker.splice(0, 13))
console.log(poker.splice(0, 13))


//全部元素都有
// array sort to rearrange elements
allElement.sort(function (a, b) { return Math.random() - 0.5; });
// var sequence=0;
// for (let r = 0; r < row; r++) 
// for (let c = 0; c < col; c++){
// aryBox1[r][c]=allElement[sequence++];  
// } 
//method 2
// for (let r = 0; r < row; r++) 
// for (let c = 0; c < col; c++){
// aryBox1[r][c]=allElement.shift();  
// } 
//method 3
aryBox1 = []
while (allElement.length > 0)
    aryBox1.push(allElement.splice(0, col))

for (var r = 0; r < row; r++)
    console.log(JSON.stringify(aryBox1[r]))

do {
    var startR = parseInt(readline.question('Row 起點? '));
    var startC = parseInt(readline.question('Col 起點? '));
    if (isNaN(startR) || isNaN(startC) || startR < 0 || startR >= row || startC < 0 || startC >= col) {
        console.log("Please input Row from 0~" + (row - 1) + ", Col from 0~" + (col - 1));
        continue;
    }

    for (let r = 0; r < row; r++)
        for (let c = 0; c < col; c++) {
            aryBoxVisited[r][c] = 0;
        }

    var idx = aryBox1[startR][startC]; //object
    aryBoxVisited[startR][startC] = 1;
    console.log("Visit: [" + startR + ", " + startC + "]");
    var count = 1;

    while (true) {
        // r = parseInt(idx[0]);
        // c = parseInt(idx[1]);
        r = idx.row;
        c = idx.col;
        if (aryBoxVisited[r][c] == 1) {
            console.log("Visited " + count + " elements!");
            break;
        } else {
            aryBoxVisited[r][c] = 1;
            console.log("Visit: " + idx.print());
            //next
            idx = aryBox1[r][c];
            count++;
        }
        if (count == row * col) {
            console.log("All visited!");
            break;
        }
    }
} while (true);