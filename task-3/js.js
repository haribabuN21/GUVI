let js= [{
  "id": "1",
  "msg": "hi",
  "tid": "2013-05-05 23:35",
  "fromWho": "hello1@email.se"
}, {
  "id": "2",
  "msg": "there",
  "tid": "2013-05-05 23:45",
  "fromWho": "hello2@email.se"
}]
 

//for loop
for (let i=0; i< js.length; i++){
  let obj = js[i];
}

//for each

js.forEach(function(obj){console.log(obj.id)});

//for in
let txt = "";
for (let x in js){
  txt += js[x]+"" 
}

//for of 
let text = " ";
for (let x of js){
  text += x+" "
}
