
var fs = require('fs');

var data = '菜鸟教程官网地址：www.runoob.com';

// 创建一个可以写入的流，写入到文件 output.txt 中

var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data, 'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
// data - 当有数据可读时触发。
// end - 没有更多的数据可读时触发。
// error - 在接收和写入过程中发生错误时触发。
// finish - 所有数据已被写入到底层系统时触发。

writerStream.on('finish', function () {
    console.log("写入完成。");
});

writerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log("程序执行完毕");


