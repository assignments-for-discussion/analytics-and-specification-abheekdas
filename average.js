
function average(numbers) {
  
  let result = 0;
  
  for (let i = 0; i<numbers.length; i++)
  {
      
    if(isNaN(numbers[i]))
    {
      continue;
    }
    else
    {
      result = result + numbers[i];
    }
  }
    
  return (result/numbers.length);
}

module.exports = {average};
