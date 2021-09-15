var  MAZE= [
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,1,1,1,1,1,1,1],
    [1,1,1,0,1,1,0,0,0,0,1,1],
    [1,1,1,0,1,1,0,1,1,0,1,1],
    [1,0,0,0,0,0,0,1,1,0,1,1],
    [1,0,1,0,1,1,0,1,1,0,1,1],
    [1,0,1,0,1,1,0,1,1,0,1,1],
    [1,0,1,0,1,1,0,1,1,0,1,1],
    [1,0,0,0,0,0,0,0,1,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
   ]; 

 
class Point{
    constructor(_row, _col){
        this.row = _row;
        this.col = _col;
    }

    print(){
        return "("+this.row+", "+this.col+")";
    }
}

var exitRow=8, exitCol=10;

 

function go(startRow, startCol){
    var stack=[];
    var r = startRow, c=startCol;
    
    stack.push(new Point(r,c));
    MAZE[r][c]=2;

     //!(r==exitRow && c==exitCol)
    while(r != exitRow || c !=exitCol) {
        
        if(MAZE[r-1][c]==0){//up
           r= r-1;
           stack.push(new Point(r,c));
           MAZE[r][c]=2;
        }else if(MAZE[r][c-1]==0){ //left
            c= c-1;
            stack.push(new Point(r,c));
            MAZE[r][c]=2;
        }else if(MAZE[r+1][c]==0){ //down
            r= r+1;
            stack.push(new Point(r,c));
            MAZE[r][c]=2;
        }else if(MAZE[r][c+1]==0){ //right
            c= c+1;
            stack.push(new Point(r,c));
            MAZE[r][c]=2;
        }else{ //terminal
            if(stack.length>0){
                var previous = stack.pop();
                r = previous.row;
                c = previous.col;
                console.log(previous.print())
            }else{
                console.log("No solution!");
                break;
            }
        }

    }
    console.log("Exit!");
}

go(1,1)
