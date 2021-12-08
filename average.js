function average(numbers) {
    let result = 0;
    let countNan = 0;
    
    numbers.forEach((number) => isNaN(number) ? countNan+=1 : result+=number);
    
    // Sensor Malfunction check!
    if(countNan >= Math.floor(0.25*numbers.length)){
        return NaN;
    }
    else{
        return result / (numbers.length - countNan)
    }
}
module.exports = {average};
