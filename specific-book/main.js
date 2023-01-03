const totalPriceElement = document.getElementById('totalprice');
const onePriceElement = document.getElementById('oneprice');
const onePriceNum = parseFloat(onePriceElement.value);
const countBookElement = document.getElementById('count');

countBookElement.addEventListener('change', (event) => { 
    console.log(event.target.value + onePriceNum);
    totalPriceElement.value = event.target.value * onePriceNum;
})

// var Something = function(element) {
//     this.handleEvent = function(event) {      
//       switch(event.type) {

//         case 'change':
//           // код обработчика...
//           totalPriceElement.value = '$' + countBookElement * onePriceElement;
//           break;
//       }
//     }  
// };

// countBookElement.addEventListener('change', this, false);