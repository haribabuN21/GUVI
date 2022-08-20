 //4 steps

 //create XHR Object 

 var request  =new XMLHttpRequest();

 request.open("GET" ,'https://restcountries.com/v3.1/all',true);
 
 //request send
 
 request.send();
 
 //4.recivie a respon
 request.onload = function(){
     if(request.status == 200){
         var data = JSON.parse(request.responseText);
         for(i=0;i<data.length;i++){
              console.log("name= "+data[i].name.official);
              console.log("reg= "+data[i].region);
              console.log("sr= "+data[i].subregion);
              console.log("people= "+data[i].population);


                      
         }
     }
 }
 
 
 
 