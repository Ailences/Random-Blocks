// 生成10个方块 颜色随机

// 获取容器
var container = document.getElementById('container');

// 数组 存储创建的方块对象
var array = [];
for (var i = 0; i < 10; i++) {
    var r = Tools.getRandom(0, 255);
    var g = Tools.getRandom(0, 255);
    var b = Tools.getRandom(0, 255);

    var box = new Box(container, {
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')'
    });
    // 把创建的方块对象添加到数组中
    array.push(box);
}

// 开启定时器 设置随机位置
setInterval(randomBox, 1000);

// 页面加载完成 设置随机位置
randomBox();

function randomBox() {
    for (var i = 0; i < array.length; i++) {
        var box = array[i];
        box.random();
    }
}