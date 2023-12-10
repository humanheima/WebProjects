const fs = require('fs');
const child_process = require('child_process');

for (var i = 0; i < 3; i++) {
   //相当于子进程 执行 node support.js i
   var workerProcess = child_process.fork('support.js', [i]);

   workerProcess.on('close', function (code) {
      console.log('子进程已退出，退出码 ' + code);
   });
}