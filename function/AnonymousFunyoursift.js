
const averagefun=function(sumnumber){
    if (sumnumber.length == 0) {
        console.log("Array is empty.");
        return;
    }

    let sum = 0;

    for (let i = 0; i < sumnumber.length; i++) {
        sum += sumnumber[i];
    }

    const average = sum / sumnumber.length;
    console.log("Average:", average);
}

const num=[12,34,34,56];
averagefun(num);