'use strict';

let userName = prompt('hello what is your name?');
alert('hello ' + userName + ' welcome to our page');

alert('lets start to know how is ur background about anime');

let score = 0;

const qustion1 = function () {
  let anime = prompt('is ur best anime is attack on titan..!');
  anime = anime.toUpperCase();
  if (anime === 'YES' || anime === 'Y') {
    console.log('yes it is ..!');
    alert('ur answear is yes , i liked it too');
    score++;
  } else if (anime === 'NO' || anime === 'N') {
    console.log('no it is not');
    alert('ok let me ask u another qustion ');
  } else {
    console.log('so sad :(');
    alert('i think ur type is drama');

  }
};

const qustion2 = function () {
  let charc = prompt('is ur best character is IRIN..!');
  charc = charc.toLowerCase();
  if (charc === 'yes' || charc === 'y') {
    console.log('yes you like him ..!');
    alert('ur answear is yes , nice ..');
    score++;
  } else if (charc === 'no' || charc === 'n') {
    console.log('no it is not');
    alert('ok let me ask u another character.. ');
  } else {
    console.log('so sad :(');
    alert('so sad for no answear :..( ');

  }
};

const qustion3 = function () {
  let charc2 = prompt('ok do you like mekasa ..! ');
  charc2 = charc2.toUpperCase();

  switch (charc2) {
    case 'YES':
    case 'Y':
      console.log('yes you like him ..!');
      alert('ur answear is yes , nice ..');
      score++;
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
};


const qustion4 = function () {
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
      alert('what..!!!!! dude please go away before i kill u !');
      score++;
      break;

    default:
      console.log('no response :) ');
      alert('please go to watch turkish series :)');
      break;
  }
};


const qustion5 = function () {
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
      alert('what..!!!!! dude please go away before i kill u !');
      score++;
      break;

    default:
      console.log('no response :) ');
      alert('please go to watch turkish series :)');
      break;
  }
};

const qustion6 = function () {
  let love = prompt('do you love my website and my qustions  ..! ');
  love = love.toUpperCase();

  switch (love) {
    case 'YES':
    case 'Y':
      console.log('yes he/she loved it ..');
      alert('ur answear is yes , nice you are my friend from now .. ');
      score++;
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
};


qustion1();
qustion2();
qustion3();
qustion4();
qustion5();
qustion6();





for (let i = 0; i < 4; i++) {
  let number = Number(prompt('choice a correct number of my anime  i loved from 1-10 '));
  number = Number(number);
  console.log('type of number', typeof (number));
  console.log(number, i);
  if (number === 10) {
    alert('nice ..! , correct answear its demon slayer');
    score++;
    break;
  } else if (number > 10) {

    alert('too high , guess again');
  } else if (number < 10) {

    alert('too low , guess again');
  } else {

    alert('why you didn\'t answear ..?');
  }

  if (i === 3) {
    alert('ops ... you take all attempts :(, the answear is 10 ');
    // break;
  }

}

let correctAnswer = prompt('choice a correct anime i loved :) .. ').toLowerCase();
console.log(correctAnswer);
let animes = ['attack on titan', 'one piece', 'tokyo ghoul', 'demon slayer', 'jujutsu no kaysi'];
let flag = false;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < animes.length; j++) {
    if (animes[j] === correctAnswer) {
      alert('nice ..! , correct answer its nice anime');
      flag = true;
      score++;
      break;
    }
  }
  if (flag) {
    break;
  }
  else {
    correctAnswer = prompt('this is not my anime , retype another one ');
  }


}
let sst = '';
for (let i = 0; i < animes.length; i++) {
  sst = sst + ',' + animes[i];


}

alert('this is my favorite animes' + sst);




alert(`thanks for playing this game  ${userName} your score is ${score}`);


