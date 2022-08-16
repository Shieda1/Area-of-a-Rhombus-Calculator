// https://calculator.swiftutors.com/area-of-a-rhombus-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const areaofRhombusBaseTimesMethodRadio = document.getElementById('areaofRhombusBaseTimesMethodRadio');
const baseLengthoftheRhombusRadio = document.getElementById('baseLengthoftheRhombusRadio');
const heightoftheRhombusRadio = document.getElementById('heightoftheRhombusRadio');

let areaofRhombusBaseTimesMethod;
let baseLengthoftheRhombus = v1;
let heightoftheRhombus = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

areaofRhombusBaseTimesMethodRadio.addEventListener('click', function() {
  variable1.textContent = 'Base Length of the Rhombus';
  variable2.textContent = 'Height of the Rhombus';
  baseLengthoftheRhombus = v1;
  heightoftheRhombus = v2;
  result.textContent = '';
});

baseLengthoftheRhombusRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of Rhombus (Base Times Method)';
  variable2.textContent = 'Height of the Rhombus';
  areaofRhombusBaseTimesMethod = v1;
  heightoftheRhombus = v2;
  result.textContent = '';
});

heightoftheRhombusRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of Rhombus (Base Times Method)';
  variable2.textContent = 'Base Length of the Rhombus';
  areaofRhombusBaseTimesMethod = v1;
  baseLengthoftheRhombus = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(areaofRhombusBaseTimesMethodRadio.checked)
    result.textContent = `Area of Rhombus (Base Times Method) = ${computeAreaofRhombusBaseTimesMethod().toFixed(2)}`;

  else if(baseLengthoftheRhombusRadio.checked)
    result.textContent = `Base Length of the Rhombus = ${computeBaseLengthoftheRhombus().toFixed(2)}`;

  else if(heightoftheRhombusRadio.checked)
    result.textContent = `Height of the Rhombus = ${computeHeightoftheRhombus().toFixed(2)}`;
})

// calculation

function computeAreaofRhombusBaseTimesMethod() {
  return Number(baseLengthoftheRhombus.value) * Number(heightoftheRhombus.value);
}

function computeBaseLengthoftheRhombus() {
  return Number(areaofRhombusBaseTimesMethod.value) / Number(heightoftheRhombus.value);
}

function computeHeightoftheRhombus() {
  return Number(areaofRhombusBaseTimesMethod.value) / Number(baseLengthoftheRhombus.value);
}