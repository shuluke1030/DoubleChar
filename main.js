function doubleChar(str) {
  let arr = str.split("");
  let namearr = "";
  for( let i = 0; i < arr.length; i++){
    namearr = namearr + arr[i] + arr[i];
  }
  return namearr;
}


console.log(doubleChar("String"));