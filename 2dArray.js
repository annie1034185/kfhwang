const readline = require('readline-sync');

var row = 5, col = 5;

//var aryBox= [["0,0", "0,1", "0,2", "0,3", "0,4"],["1,0", "1,1", "1,2", "1,3", "1,4"],["2,0", "2,1", "2,2", "2,3", "2,4"],["3,0", "3,1", "3,2", "3,3", "3,4"],["4,0", "4,1", "4,2", "4,3", "4,4"]]
var aryBoxVisited = []
var aryBox1 = []
//var allElement = []
for (let r = 0; r < row; r++) {
    aryBox1.push([])
    aryBoxVisited.push([])
    for (let c = 0; c < col; c++) {
        var randR = Math.floor(Math.random() * Math.floor(row));
        var randC = Math.floor(Math.random() * Math.floor(col));
        aryBox1[r].push(randR + "," + randC)
        aryBoxVisited[r].push(0)
        //allElement.push(r+","+c)
    }
}

//全部元素都有
// allElement.sort(function(a,b){return Math.random()-0.5;});
// var sequence=0;
// for (let r = 0; r < row; r++) 
//         for (let c = 0; c < col; c++){
//             aryBox1[r][c]=allElement[sequence++];  
//         } 

for (var r = 0; r < row; r++)
    console.log(JSON.stringify(aryBox1[r]))

do {
    var startR=parseInt(readline.question('Row 起點? '));
    var startC=parseInt(readline.question('Col 起點? '));
    if(isNaN(startR) || isNaN(startC) || startR<0 || startR>=row || startC<0 || startC>=col){
        console.log("Please input Row from 0~"+(row-1)+", Col from 0~"+(col-1));
        continue;
    }
 
    for (let r = 0; r < row; r++) 
        for (let c = 0; c < col; c++){
            aryBoxVisited[r][c]=0;  
        } 

    var idx = aryBox1[startR][startC].split(",")
    aryBoxVisited[startR][startC] = 1;
    console.log("Visit: " + startR+", "+startC);
    var count = 1;

    while (true) {
        r = parseInt(idx[0]);
        c = parseInt(idx[1]);
        if (aryBoxVisited[r][c] == 1) {
            console.log("Visited " + count + " elements!");
            break;
        } else {
            aryBoxVisited[r][c] = 1;
            console.log("Visit: " + idx);
            //next
            idx = aryBox1[r][c].split(",")
            count++;
        }
        if (count == row * col) {
            console.log("All visited!");
            break;
        }
    }
}while(true);