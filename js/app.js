'use strict'

let userName = prompt('hello what is your name?');
alert('hello ' + userName + ' welcome to our page');

alert('lets start to know how is ur background about anime');

let anime = prompt('is ur best anime is attack on titan..!');
anime = anime.toUpperCase();
if (anime === 'YES' || anime === 'Y') {
    console.log('yes it is ..!');
    alert('ur answear is yes , i liked it too');
} else if (anime === 'NO' || anime === 'N') {
    console.log('no it is not');
    alert('ok let me ask u another qustion ');
} else {
    console.log('so sad :(');
    alert('i think ur type is drama');

}

let charc = prompt('is ur best character is IRIN..!');
charc = charc.toLowerCase();
if (charc === 'yes' || charc === 'y') {
    console.log('yes you like him ..!');
    alert('ur answear is yes , nice ..');
} else if (charc === 'no' || charc === 'n') {
    console.log('no it is not');
    alert('ok let me ask u another character.. ');
} else {
    console.log('so sad :(');
    alert('so sad for no answear :..( ');

}

let charc2 = prompt('ok do you like mekasa ..! ');
charc2 = charc2.toUpperCase();

switch (charc2) {
    case 'YES':
    case 'Y':
        console.log('yes you like him ..!');
        alert('ur answear is yes , nice ..');
        break;
    case 'NO':
    case 'N':
        console.log('no it is not');
        alert('what..!!!!! dude mekasa is the the best ..!');
        break;

    default:
        console.log('so sad :(');
        alert('Umm ok i will check u in the next qustion :..( ');
        break;
}



let rate = prompt('the rate of attack on titan must be lower than 9 ..! ');
rate = rate.toUpperCase();

switch (rate) {
    case 'YES':
    case 'Y':
        console.log('yes below 9');
        alert('ur answear is yes , i think ur not anime lover :) ');
        break;
    case 'NO':
    case 'N':
        console.log('no above 9');
        alert('what..!!!!! dude mekasa is the the best ..!');
        break;

    default:
        console.log('no response :) ');
        alert('please go to watch turkish series :)');
        break;
}

let love = prompt('do you love my website and my qustions  ..! ');
love = love.toUpperCase();

switch (love) {
    case 'YES':
    case 'Y':
        console.log('yes he/she loved it ..');
        alert('ur answear is yes , nice you are my friend from now .. ');
        break;
    case 'NO':
    case 'N':
        console.log('no he/she did not like ');
        alert('ok i will block you :) , see you :)');
        break;

    default:
        console.log('no response :) ');
        alert('you are fine ?? ');
        break;
}

alert("finally thank you for visiting my website and i wish to be a fan of anime , see you later  .."); 


