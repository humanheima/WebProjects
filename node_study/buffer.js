//@link https://www.runoob.com/nodejs/nodejs-buffer.html

const buffer = Buffer.from('runoob', 'ascii');
console.log(buffer.toString('hex'));
console.log(buffer.toString('base64'));