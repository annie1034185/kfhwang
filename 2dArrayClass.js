const readline = require('readline-sync');

var rowMax = 5, colMax = 5;

class Index {   //定義物件類別
    constructor(_row, _col) { //建構元函式
       if(_row>=0 && _row<rowMax && _col>=0 && _col<colMax){
        this.row = _row;
        this.col = _col;
       }
       else 
        this.row = this.col = null;
    }
    print (){
        return ("["+this.row+", "+this.col+"]");
    }
}

//var aryBox= [["0,0", "0,1", "0,2", "0,3", "0,4"],["1,0", "1,1", "1,2", "1,3", "1,4"],["2,0", "2,1", "2,2", "2,3", "2,4"],["3,0", "3,1", "3,2", "3,3", "3,4"],["4,0", "4,1", "4,2", "4,3", "4,4"]]
var aryBoxVisited = []
var aryBox1 = []
//var allElement = []
for (let r = 0; r < rowMax; r++) {
    aryBox1.push([])
    aryBoxVisited.push([])
    for (let c = 0; c < colMax; c++) {
        var randR = Math.floor(Math.random() * Math.floor(rowMax));
        var randC = Math.floor(Math.random() * Math.floor(colMax));
        aryBox1[r].push(new Index(randR,randC))
        aryBoxVisited[r].push(0)
        //allElement.push(r+","+c)
    }
}

 
for (var r = 0; r < rowMax; r++)
    console.log(JSON.stringify(aryBox1[r]))

do {
    var startR=parseInt(readline.question('Row 起點? '));
    var startC=parseInt(readline.question('Col 起點? '));
    if(isNaN(startR) || isNaN(startC) || startR<0 || startR>=rowMax || startC<0 || startC>=colMax){
        console.log("Please input Row from 0~"+(rowMax-1)+", Col from 0~"+(colMax-1));
        continue;
    }
 
    for (let r = 0; r < rowMax; r++) 
        for (let c = 0; c < colMax; c++){
            aryBoxVisited[r][c]=0;  
        } 

    var idx = aryBox1[startR][startC]; //object
    aryBoxVisited[startR][startC] = 1;
    console.log("Visit: [" + startR+", "+startC+"]");
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
        if (count == rowMax * colMax) {
            console.log("All visited!");
            break;
        }
    }
}while(true);