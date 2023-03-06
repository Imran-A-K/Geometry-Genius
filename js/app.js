function getElementString(elementID){
    const element = document.getElementById(elementID);
    const elementString = element.value;
    return elementString;
}
function stringToNumber(elementString){
    const elementNumberValue = parseFloat(elementString);
    return elementNumberValue;
}
function dataDisplay(shapeName, shapeArea){
    const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}.</td>
    <td>${shapeName}</td>
    <td>${shapeArea}cm<sup>2</sup></td>
    <td>
    <button class="btn btn-active btn-accent normal-case text-white">Convert to m<sup>2</sup></button>
    </td>
    
  `;
  container.appendChild(tr);
}
function randomColor(element) {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    // return 'rgb(' + color.join(', ') + ')';
    element.style.backgroundColor = 'rgb(' + color.join(', ') + ')';
  } 

function normalColor(element){
    element.style.backgroundColor = '#fff';  
}


let serial = 0;
document.getElementById('triangle-btn').addEventListener('click', function(){
   const triangleBaseString = getElementString('triangle-base');
   const triangleHeightString = getElementString('triangle-height');

   if(isNaN(triangleBaseString) || isNaN(triangleHeightString)){
    alert('Values cannot be string enter numbers only');
        return;
   }
   if(triangleBaseString === '' || triangleHeightString === ''){
    alert('Values cannot be empty enter numbers');
        return;
   }
   const triangleBaseValue = stringToNumber(triangleBaseString);
   const triangleHeightValue = stringToNumber(triangleHeightString);

   if(triangleBaseValue <=0 || triangleHeightValue <= 0){
    alert('Values cannot be negative numbers enter positive numbers');
        return;
   }   

   const triangleArea = (0.5 * triangleBaseValue * triangleHeightValue).toFixed(2);
   
   serial += 1;
   dataDisplay('Triangle', triangleArea);

})
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleWidthString = getElementString('rectangle-width');
    const rectangleLengthString = getElementString('rectangle-length');
 
    if(isNaN(rectangleWidthString) || isNaN(rectangleLengthString)){
     alert('Values cannot be string enter numbers only');
         return;
    }
    if(rectangleWidthString === '' || rectangleLengthString === ''){
     alert('Values cannot be empty enter numbers');
         return;
    }  

    const rectangleWidthValue = stringToNumber(rectangleWidthString);
    const rectangleLengthValue = stringToNumber(rectangleLengthString);

    if(rectangleWidthValue <=0 || rectangleLengthValue <= 0){
        alert('Values cannot be negative numbers enter positive numbers');
            return;
       } 

    const rectangleArea = (rectangleWidthValue * rectangleLengthValue).toFixed(2);
    
    serial += 1;
   dataDisplay('Rectangle', rectangleArea);

})
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramBaseString = getElementString('parallelogram-base');
   const parallelogramHeightString = getElementString('parallelogram-height');

   if(isNaN(parallelogramBaseString) || isNaN(parallelogramHeightString)){
    alert('Values cannot be string enter numbers only');
        return;
   }
   if(parallelogramBaseString === '' || parallelogramHeightString === ''){
    alert('Values cannot be empty enter numbers');
        return;
   } 


   const parallelogramBaseValue = stringToNumber(parallelogramBaseString);
   const parallelogramHeightValue = stringToNumber(parallelogramHeightString);

   if(parallelogramBaseValue <=0 || parallelogramHeightValue <= 0){
    alert('Values cannot be negative numbers enter positive numbers');
        return;
   } 

   const parallelogramArea = ( parallelogramBaseValue * parallelogramHeightValue).toFixed(2);
   
   serial += 1;
   dataDisplay('Parallelogram', parallelogramArea);
 
})
document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombusDiagonalFirstString = getElementString('rhombus-diagonal-1');
    const rhombusDiagonalSecondString = getElementString('rhombus-diagonal-2');
 
    if(isNaN(rhombusDiagonalFirstString) || isNaN(rhombusDiagonalSecondString)){
     alert('Values cannot be string enter numbers only');
         return;
    }
    if(rhombusDiagonalFirstString === '' || rhombusDiagonalSecondString === ''){
     alert('Values cannot be empty enter numbers');
         return;
    }
 
    const rhombusDiagonalFirstValue = stringToNumber(rhombusDiagonalFirstString);
    const rhombusDiagonalSecondValue = stringToNumber(rhombusDiagonalSecondString);

    if(rhombusDiagonalFirstValue <=0 || rhombusDiagonalSecondValue <= 0){
        alert('Values cannot be negative numbers enter positive numbers');
            return;
       } 

    const rhombusArea = (0.5 * rhombusDiagonalFirstValue * rhombusDiagonalSecondValue).toFixed(2);
    
    serial += 1;
   dataDisplay('Rhombus', rhombusArea);
})
document.getElementById('pentagon-btn').addEventListener('click', function(){
    const pentagonPerimeterString = getElementString('pentagon-perimeter');
    const pentagonBaseString = getElementString('pentagon-base');
 
    if(isNaN(pentagonPerimeterString) || isNaN(pentagonBaseString)){
     alert('Values cannot be string enter numbers only');
         return;
    }
    if(pentagonPerimeterString === '' || pentagonBaseString === ''){
     alert('Values cannot be empty enter numbers');
         return;
    }
 
    const pentagonPerimeterValue = stringToNumber(pentagonPerimeterString);
    
    const pentagonBaseValue = stringToNumber(pentagonBaseString);

    if(pentagonPerimeterValue <=0 || pentagonBaseValue <= 0){
        alert('Values cannot be negative numbers enter positive numbers');
            return;
       } 

    const pentagonArea = ( 0.5 * pentagonPerimeterValue * pentagonBaseValue ).toFixed(2);
   
    serial += 1;
   dataDisplay('Pentagon', pentagonArea);
})
document.getElementById('ellipse-btn').addEventListener('click', function(){
    const ellipseAxisAString = getElementString('ellipse-axis-a');
    const ellipseAxisBString = getElementString('ellipse-axis-b');
 
    if(isNaN(ellipseAxisAString) || isNaN(ellipseAxisBString)){
     alert('Values cannot be string enter numbers only');
         return;
    }
    if(ellipseAxisAString === '' || ellipseAxisBString === ''){
     alert('Values cannot be empty enter numbers');
         return;
    }  
 
    const ellipseAxisAValue = stringToNumber(ellipseAxisAString);
    const ellipseAxisBValue = stringToNumber(ellipseAxisBString);

    if(ellipseAxisAValue <=0 || ellipseAxisBValue <= 0){
        alert('Values cannot be negative numbers enter positive numbers');
            return;
       } 

    const ellipseArea = ( 3.14 * ellipseAxisAValue * ellipseAxisBValue).toFixed(2);

    serial += 1;
   dataDisplay('Ellipse', ellipseArea);
    
})
