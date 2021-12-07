
function average(numbers) {
    
    let result = 0;
    let countNan = 0;
    
    numbers.forEach((number) => isNaN(number) ? countNan+=1 : result+=number);
    return result / (numbers.length - countNan)
}

module.exports = {average};
