
'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let mode = "normal";

const normalMode = function(){
  mode = "normal";
}

const easyMode = function(){
  mode = "easy";
}

const meoshiMode = function(){
  mode = "meoshi"; 
}

//グー（player）表示関数定義

const displayOfPlayerHandOfLock =function(){
  document.getElementById("pictureOfPlayer").src = "lock_player.jpg";
}

//グー（computer）表示関数定義
const displayOfComHandOfLock =function(){
  document.getElementById("pictureOfCom").src = "lock_com.jpg";
}

//チョキ（player）表示関数定義

const displayOfPlayerHandOfScissors =function(){
  document.getElementById("pictureOfPlayer").src = "Scissors_player.jpg";
}

//チョキ（computer）表示関数定義
const displayOfComHandOfScissors =function(){
  document.getElementById("pictureOfCom").src = "scissors_com.jpg";
}

//パー（player）表示関数定義

const displayOfPlayerHandOfPaper =function(){
  document.getElementById("pictureOfPlayer").src = "Paper_player.jpg";
}

//　パー（computer）表示関数定義
const displayOfComHandOfPaper =function(){
  document.getElementById("pictureOfCom").src = "paper_com.jpg";
}

//　リピート表示関数定義

const loopTime = 510;

const repeatOf1Time = function(){
  displayOfPlayerHandOfLock();
  displayOfComHandOfLock();
  setTimeout(displayOfPlayerHandOfScissors,loopTime/3);
  setTimeout(displayOfComHandOfScissors,loopTime/3);
  setTimeout(displayOfPlayerHandOfPaper,loopTime/3*2);
  setTimeout(displayOfComHandOfPaper,loopTime/3*2);
}

let repeat;
let time = 1;
let timer;

const count = function(){
  time = time + 1;
}

let repeatDisplay = function(){
  clearInterval(repeat);
  repeat = setInterval(repeatOf1Time,loopTime);
  time = 1;
  timer = setInterval(count,loopTime/3);
}

const randomHands = function(){
  repeatOf1Time();
  repeatDisplay();
}


const onClickStart= function(){

  const fstMessage = document.getElementById("ready");
  fstMessage.style.display = "block";
  
  const selectButton = document.getElementsByTagName("p")[0];
  selectButton.style.display = "block";

  const nameDisplay = document.getElementsByClassName("displayOfName")[0];
  nameDisplay.style.display = "flex";
  
  document.getElementsByClassName("displayOfPicture")[0].style.display = "flex";

  document.getElementsByClassName("displayOfResultPicture")[0].style.display = "none";

  const titleOfResult = document.getElementsByTagName("p")[1];
  titleOfResult.style.display = "block";

  const count = function(){
    timer = timer +1;
  }

  randomHands();

}

let player = "none";

const selectOfHandOFComputer = function(){
  const com = Math.floor(Math.random()*3);
  let result;
  if (com === 0){
    result = "グー";
  } else if (com === 1){
    result = "チョキ";
  } else {
    result = "パー";
  }
  return result;
}


const onClickLock = function(){

  clearInterval(repeat);
  

  document.getElementsByClassName("displayOfPicture")[0].style.display = "none";

  document.getElementsByClassName("displayOfResultPicture")[0].style.display = "flex";

  document.getElementById("resultPictureOfPlayer").src = "lock_player.jpg";
    
  let handOfComputer;

  if(mode == "normal"){
    handOfComputer = selectOfHandOFComputer();
  }else if (mode == "easy"){
    handOfComputer = "チョキ";
  }else if (mode = "meoshi"){
    if(time % 3 == 1){
      handOfComputer = "グー";
    }else if(time % 3 == 2){
      handOfComputer = "チョキ";
    }else if(time % 3 == 0){
      handOfComputer = "パー";
    }
  }

  const elementOfResult = document.getElementsByTagName("p2")[0];

    if  (handOfComputer == "グー"){
      document.getElementById("resultPictureOfCom").src = "lock_com.jpg";
      elementOfResult.innerText = "あいこ";
    } else if ( handOfComputer == "チョキ" ){
      document.getElementById("resultPictureOfCom").src = "scissors_com.jpg";
      elementOfResult.innerText = "あなたの勝ち";
    } else{
      document.getElementById("resultPictureOfCom").src = "paper_com.jpg";
      elementOfResult.innerText = "あなたの負け";
    }

    clearInterval(timer);
}

const onClickScissors = function(){

  clearInterval(repeat);
  
  document.getElementsByClassName("displayOfPicture")[0].style.display = "none";

  document.getElementsByClassName("displayOfResultPicture")[0].style.display = "flex";

  document.getElementById("resultPictureOfPlayer").src = "scissors_player.jpg";

  let handOfComputer;

  if(mode == "normal"){
    handOfComputer = selectOfHandOFComputer();
  }else if (mode == "easy"){
    handOfComputer = "パー";
  }else if (mode = "meoshi"){
    if(time % 3 == 1){
      handOfComputer = "グー";
    }else if(time % 3 == 2){
      handOfComputer = "チョキ";
    }else if(time % 3 == 0){
      handOfComputer = "パー";
    }
  }


  const elementOfResult = document.getElementsByTagName("p2")[0];
  
  if  (handOfComputer == "グー"){
    document.getElementById("resultPictureOfCom").src = "lock_com.jpg";
    elementOfResult.innerText = "あなたの負け";
  } else if ( handOfComputer == "チョキ" ){
    document.getElementById("resultPictureOfCom").src = "scissors_com.jpg";
    elementOfResult.innerText = "あいこ";
  } else{
    document.getElementById("resultPictureOfCom").src = "paper_com.jpg";
    elementOfResult.innerText = "あなたの勝ち";
  }

  clearInterval(timer);

}

const onClickPaper = function(){

  clearInterval(repeat);

  document.getElementsByClassName("displayOfPicture")[0].style.display = "none";

  document.getElementsByClassName("displayOfResultPicture")[0].style.display = "flex";

  document.getElementById("resultPictureOfPlayer").src = "paper_player.jpg";
 
  let handOfComputer;

  if(mode == "normal"){
    handOfComputer = selectOfHandOFComputer();
  }else if (mode == "easy"){
    handOfComputer = "グー";
  }else if (mode = "meoshi"){
    if(time % 3 == 1){
      handOfComputer = "グー";
    }else if(time % 3 == 2){
      handOfComputer = "チョキ";
    }else if(time % 3 == 0){
      handOfComputer = "パー";
    }
  }

  const elementOfResult = document.getElementsByTagName("p2")[0];

  if  (handOfComputer == "グー"){
    document.getElementById("resultPictureOfCom").src = "lock_com.jpg";
    elementOfResult.innerText = "あなたの勝ち";
  } else if ( handOfComputer == "チョキ" ){
    document.getElementById("resultPictureOfCom").src = "scissors_com.jpg";
    elementOfResult.innerText = "あなたの負け";
  } else{
    document.getElementById("resultPictureOfCom").src = "paper_com.jpg";
    elementOfResult.innerText = "あいこ";
  }

  clearInterval(timer);

}
