/**
 * 2017-09-15   Wang Huajian
 */

var  device = ['/dev/console','/dev/display'];

function open(dev) {
    var index = device.indexOf(dev);

    if (index < 0) {
        console.log(`${dev} not exists`);
    } else {
        drvires[index].open();
    }

    return index;
}

function read(dev){
    return drvires[dev].read();
}

function write(dev){
    return drvires[dev].write();
}

function close(dev){
    return drvires[dev].close();
}

var drvires = [
    {
        type:'/dev/console',
        open: function(){
            console.log('console.open')
        },
        read: function(){
            console.log('console.read')
        },
        write:function(){
            console.log('console.write')
        },
        close:function(){
            console.log('console.close')
        },
    }, 
    {
        type:'/dev/display',
        open: function(){
            console.log('display.open')
        },
        read: function(){
            console.log('display.read')
        },
        write:function(){
            console.log('display.write')
        },
        close:function(){
            console.log('display.close')
        }, 
    }
];

var fd = open('/dev/display');
write(fd, 'hello');
close(fd);
