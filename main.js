
var petName = prompt('NAME YOUR PET NOW!', 'Pet name');
if (petName != null) {
    document.querySelector('h2').innerText = petName
}

//tamagotchi default state
    let hungry = 1;
    let sleep = 1;
    let bored = 1;
    let ageOf = 0;
    let alive = true;
    let tama = document.getElementById('tama').src
    console.log(tama)

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
//   setInterval(bored++,5000)
  //sleepiness
  setInterval(function () {document.getElementById("sleep").value += 1;} , 5000);
  setInterval(function() {
    sleep++ }, 5000);
    setInterval(function() {console.log(sleep)}, 5000);

  //hunger
  setInterval(function () {document.getElementById("hungry").value += 1} , 5000);
      setInterval(function() {
        hungry++ }, 5000);
        setInterval(function() {console.log(hungry)}, 5000);
  //age
  setInterval(function () {document.getElementById("age").value += 1} , 60000);
  setInterval(function(){
    ageOf++
  },60000)





function death(){
    document.getElementById('tama').src='https://dinopixel.com/preload/1022/Gravestone.png'
};
if (hungry === 10) {
    death()
};
if (bored === 10) {
    death()
};
if (sleep === 10) {
    death()
};

//   if (boredValue||sleepValue||hungerValue === '10') {
//     function death()
//   }


