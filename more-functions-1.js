//Arrow function -   functionName () => {}

const convertToGrams = (weight, units) => {     //use a switch statement based on units

    let grams;
    switch (units) {

        case 'lbs':
           grams = weight * 454;
           break;
        case 'oz':
             grams = weight * 454 / 16;
            break;
        case 'kg':
            grams = weight * 1000;
            break;
        case 'g':
            grams = weight;
            break;
        case 'mg':
            grams = weight / 1000;
        default:
            grams = 'Please enter units of measure: lbs, oz, kg, g, mg.'
    }  //switch
    return grams;
} //convertToGrams

const waterInCup = convertToGrams(12, 'oz');
console.log(waterInCup);