/**
 *  2017-09-15  Wang Huajian
 */

var device = ['mouse','keyboard'];

function open(dev) {
    var index = device.indexOf(dev);

    if(index < 0) {
        console.log('not exist');
    } else{
        drivers[index].open();
    }
    return index;
}

function read(dev) {
    return drivers[dev].read();
}

function write(dev) {
    return drivers[dev].write();
}

function close(dev) {
    return drivers[dev].close();
}

var drivers = [
    {
        type:'mouse',
        open: function() {
            console.log('mouse.open')
        },
        read: function() {
            console.log('mouse.read')
        },
        write:function() {
            console.log('mouse.write')
        },
        close:function() {
            console.log('mouse.close')
        }
    },
    {
        type: 'keyboard',
        open:function() {
            console.log('keyboard.open')
        },
        read:function() {
            console.log('keyboard.read')
        },
        write:function() {
            console.log('keyboard.write')
        },
        close:function() {
            console.log('keyboard.close')
        }  
    }
]

var fd = open('keyboard');
write(fd,'Love');
close(fd);
