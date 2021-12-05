
function average(numbers) {
  
  let result = 0;
  let countNan = 0;
  
  for (let i = 0; i<numbers.length; i++)
  {
      
    if(isNaN(numbers[i]))
    {
      countNan = countNan + 1;
    }
    else
    {
      result = result + numbers[i];
    }
  }
  let newLength = numbers.length - countNan; 
  return result/newLength;
}

module.exports = {average};
