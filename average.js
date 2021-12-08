function average(numbers) {
    let result = 0;
    let countNan = 0;
    
    numbers.forEach((number) => isNaN(number) ? countNan+=1 : result+=number);
    
    if(countNan >= Math.floor(0.25*numbers.length)) // If 25% or more than 25% data is missing then we indicate sensor is malfunctioned.
        return NaN;
    else
        return result / (numbers.length - countNan)
}
module.exports = {average};
