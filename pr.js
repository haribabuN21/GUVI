// function printEverynthChar(str,n){
//     for(let i = n-1; i < str.length; i=n+i){
//         console.log(str[i]);
        
//     }
// }
// printEverynthChar('helloworld',3);

// //sorted array

// function arraySorted(arr){
//     for(let i=1; i<arr.length;i++){
//         if(arr[i -1] > arr[i]){
//             console.log("not sorted");
//             return false;
//         }
//     }
//     console.log("sorted");
//     return true;
// }

// arraySorted([9,6,8,1]);


// function PrintNumbers(start, end){
//     console.log(`${start} <br>`);

//     if(start < end){
//         PrintNumbers((start + 1), end);
//     }
// }


setTimeout(function displayNum(){
    PrintNumbers(1,50);
},5000);

displayNum()

