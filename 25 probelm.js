function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
    }
    
    return sum;
  }
  
  console.log(sumArray([1, 2, 3, 4])); // 10
  console.log(sumArray([-1, -2, -3, -4])); // -10
  console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
  