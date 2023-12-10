var express = require('express');
var app = express();
var fs = require("fs");



//获取用户列表
app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})


//添加的新用户数据
var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}

//添加用户
app.get('/addUser', function (req, res) {
    // 读取已存在的数据
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})


//删除用户
var id = 1;

//获取用户列表
app.get('/delete', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data["user" + id];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

//如果delete方法定义在这个方法下面，会报错，可能这个方法也能匹配到delete方法，所以会报错
//查询用户，根据id查询用户信息
app.get('/:id', function (req, res) {
    // 首先我们读取已存在的用户
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        var user = data["user" + req.params.id]
        console.log(user);
        res.end(JSON.stringify(user));
    });
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
