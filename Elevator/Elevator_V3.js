// JS 程式模擬電梯運作 Version 3: 
// 練習while, for 迴圈、if
// 使用 setTimeout，readline 套件 
// V3: 樓層可以有負的，0代表B1, -1代表B2, ...

const readline = require('readline-sync');
//暫停程式 n 毫秒
function sleep(n) {//sleep n miliseconds
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}

var current_floor = 5; //電梯目前位於5樓
var target_floor; //欲到達樓層 

do { //無窮迴圈，迴圈內程式(6~37行)有break指令時可終止迴圈

    //使用者輸入欲到達樓層 
    target_floor = readline.question('您現在在 ' + current_floor + ' 樓。請問要去哪一樓？');

    target_floor = parseInt(target_floor) //若target_floor無法轉換成整數將產生ValueError錯誤

    if (isNaN(target_floor) || target_floor < -3 || target_floor > 100) {
        console.log('請輸入介於 1~100的整數\n');
        // console.log('請輸入介於 -3~100 的整數');
        continue;//繼續至第5行迴圈
    }
    if (target_floor == current_floor) {
        console.log("離開電梯\n");
        break; //終止 while (true) 迴圈
    } else if (target_floor < current_floor) {
        console.log('電梯下樓');
        //i和current_floor 同時減 1
        for (let i = current_floor; i >= target_floor; i--, current_floor--) {
            if (i > 0)
                console.log(i);
            else
                console.log("B" + (i * -1 + 1));
            sleep(100)//暫停0.1秒
        }
        current_floor++; //修正多減了1的數值
    } else {
        console.log('電梯上樓');
        //i和current_floor 同時加 1
        for (let i = current_floor; i <= target_floor; i++, current_floor++) {
            //使用 () ? : 取代 if(){} else{}
            (i > 0) ? console.log(i) : console.log("B" + (i * -1 + 1));
            sleep(100)//暫停0.1秒
        }
        current_floor--; //修正多加了1的數值
    }
} while (true);