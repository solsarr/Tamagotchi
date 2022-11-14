


//tamagotchi default state
    let hungry = 1;
    let sleep = 1;
    let bored = 1;
    let ageOf = 0;
    let alive = true;
    var tama = document.getElementById('tama').src
    console.log(tama)
// const incrementHunger = function() {
//     console.log('wow i love event listeners')
//   }
//   eventBtn.addEventListener('click', printEvent)
//   eventBtn.addEventListener('mouseover',function(){
//     console.log('the mouse is in the building')
//   })

// const feedBtn = document.getElementById('feed');

//feed button
 var hungerValue = document.getElementById('hungry').value;
console.log(hungerValue);
document.querySelector('#feed').addEventListener("click", function(event){
    document.getElementById("hungry").value -= 1; hungry -= 1;
  });
  //rest button
  var sleepValue = document.getElementById('sleep').value;
  console.log(sleepValue);
  document.querySelector('#rest').addEventListener("click", function(event){
    document.getElementById("sleep").value -= 1;
  sleep -= 1;
});
  //play button
  var boredValue = document.getElementById('bored').value;
  console.log(boredValue);
  document.querySelector('#play').addEventListener("click", function(event){
    document.getElementById("bored").value -= 1;
    bored -= 1;
  });

  //incremental increase of values

  //boredom
  setInterval(function () {document.getElementById("bored").value += 1;} , 5000);
  setInterval(function(){
    bored++
  }, 5000)
  if (bored < 0) {
    (bored === 0)
  }
//   setInterval(bored++,5000)
  //sleepiness
  setInterval(function () {document.getElementById("sleep").value += 1;} , 5000);
  setInterval(function() {
    sleep++ }, 5000);
    setInterval(function() {console.log(sleep)}, 5000);
    if (sleep < 0) {
        (sleep === 0)
      }
  //hunger
  setInterval(function () {document.getElementById("hungry").value += 1} , 5000);
      setInterval(function() {
        hungry++ }, 5000);
        setInterval(function() {console.log(hungry)}, 5000);
        if (hungry <= 0) {
            hungry = 0
          }
  //age
  setInterval(function () {document.getElementById("age").value += 1} , 60000);
  setInterval(function(){
    ageOf++
  },60000)
//   setInterval(ageOf++,60000)
    // setInterval(function(){
    //     document.getElementById('age').innerHtml = ('Age: 3',1000)
    // });
// var age =  document.getElementById('age');
//  age.innerHTML = ('Age: ' + ageOf);
// console.log(ageOf);
// setInterval(1000, ageOf++,age.innerHTML = ('Age: ' + ageOf));
// setInterval(1000, ageOf++,age.innerHTML = ('Age: ' + ageOf));
    // document.getElementById("age").innerHTML = "Bonjour";

// function changeText(txt) {
//     var s = txt;
//     document.body.getElementById("change").innerHTML = document.body.getElementById("change").innerHTML.replace(s, "Mudit");
//     replaceorig(txt);
//     i++;
//     if (i % 2 == 0) setTimeOut(function() {
//         changeText();
//     }, 5000);
// }

// function replaceorig(txt) {
//     document.body.getElementById("change").innerHTML = txt;
// }




// function death() {
//     document.getElementById('tama').src='https://dinopixel.com/preload/1022/Gravestone.png'
// }
if (document.getElementById("age").value == 10){
    document.getElementById('tama').src='https://dinopixel.com/preload/1022/Gravestone.png'
}
if (document.getElementById("bored").value == 10||'10'){
    `$(tama).replaceWith("<img src='tamagotchi-dead.png'>")`;
};
if (document.getElementById("hungry").value == 10){
    document.getElementById('tama').src='https://dinopixel.com/preload/1022/Gravestone.png'
};
if (document.getElementById("sleep").value == 10||'10'){
    tama.src = ('https://dinopixel.com/preload/1022/Gravestone.png');
};
if (
    document.getElementById('metrics').value == 10 || '10'
) {
    alive === false; console.log(alive)
}

//     if (document.getElementById("hungry").value == 10 ) {
//         death()
//     }

// function death(){
//     document.getElementById('tama').src='https://dinopixel.com/preload/1022/Gravestone.png'
// };

//   if (boredValue||sleepValue||hungerValue === '10') {
//     function death()
//   }


