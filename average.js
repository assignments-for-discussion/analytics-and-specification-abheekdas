
function average(numbers) {
  
  for (let i = 0; i<numbers.length; i++)
  {
    if(isNan(numbers[i]))
    {
      numbers[i] = 0;
    }
  }
    
  return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}

module.exports = {average};
