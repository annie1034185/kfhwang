// JS 程式模擬電梯運作 Version 1: 
// 練習 while 迴圈、if語法
// 使用第三方套件 readline-sync (待使用者輸入資料後程式再繼續執行) 
//NodeJS 套件管理程式為 npm，需打開終端機輸入指令
//安裝 readline-sync 套件指令: npm install readline-sync
//另可透過package.json指定所有相關套件後 npm install 即可安裝所有套件

const readline = require('readline-sync');
//暫停程式 n 毫秒
function sleep(n) {//sleep n miliseconds
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}

var current_floor = 5; //電梯目前位於5樓
var target_floor; //欲到達樓層 
 
while(true){ //無窮迴圈，迴圈內程式(6~37行)有break指令時可終止迴圈
    //使用者輸入欲到達樓層 
    target_floor = readline.question('您現在在 ' + current_floor + ' 樓。請問要去哪一樓？' );
     
         target_floor = parseInt(target_floor) //若target_floor無法轉換成整數將產生ValueError錯誤
    
        if (isNaN(target_floor) || target_floor < 1 || target_floor > 7){
            console.log('請輸入介於 1~7 的整數\n');
            // console.log('請輸入介於 1~7 的整數');
            continue;//繼續至第5行迴圈
        }
        if (target_floor == current_floor){
            console.log("離開電梯\n");
            break; //終止 while (true) 迴圈
        }else if (target_floor < current_floor){
            console.log('電梯下樓');
            while (target_floor < current_floor){ //迴圈當target_floor 大於或等於 current_floor時終止迴圈
                console.log(current_floor); 
                sleep(1000)//暫停1秒
                //將current_floor的值減1，下列2種寫法
                //current_floor = current_floor - 1 
                current_floor -= 1; 
            }
            console.log(current_floor);
        }else{
            console.log('電梯上樓');
            while (target_floor > current_floor){
                console.log(current_floor); 
                sleep(1000)//暫停1秒
                //將current_floor的值減1，下列2種寫法
                //current_floor = current_floor - 1 
                current_floor += 1;
            }
            console.log(current_floor);
        }
}; //end while