let myArray;
myArray = [];
isRandomArr(10000);
isBubbleSort(myArray);
isRandomArr(10000);
isQuickSort(myArray);
isRandomArr(10000);
isInsertionSort(myArray);
сonsole.log('test the three sorting 1000 elements');

function isBubbleSort(myArray) {
    let start = new Date().getTime();
    let Flag;
    do {
        Flag = 0;
        for (let i=1; i<myArray.length;i++) {
            if (myArray[i-1]>myArray[i]) {
                let tmp = myArray[i];
                myArray[i] = myArray[i - 1];
                myArray[i - 1] = tmp;
                Flag = 1;
            }
        }
    } while (Flag);
    console.log((new Date().getTime() - start)+' ms');

}

function isInsertionSort(myArray) {
    let start = new Date().getTime();
    for (let i=1; i < myArray.length; i++) {
        let j = i;
        while (j>= 0 && myArray[j] > myArray[j+1]) {
            let tmp = myArray[j];
            myArray[j] = myArray[j+1];
            myArray[j+1] = tmp;
            j--;
        }
    }
    console.log((new Date().getTime() - start)+" ms");
}

function isQuickSort(myArray) {
    let start = new Date().getTime();
    qSort(0,myArray.length-1);
    console.log((new Date().getTime() - start)+" ms");


}

function qSort(b,e) {
    let l = b, r = e;
    let piv = myArray[(l+r)/2];
    do {
        while (myArray[l] < piv)
            l++;
        while (myArray[r] > piv)
            r--;
        if (l <= r) {
            if (myArray[l] > myArray[r]) {
                let tmp = myArray[l];
                myArray[l] = myArray[r];
                myArray[r] = tmp;
            }
            l++;
            r--;
        }

    } while (l <= r);
    if (b < r)
        qSort(b,r);
    if (e > l)
        qSort(l,e)

}

function isRandomArr(arrLength) {
    for (let i=0; i<arrLength;i++) {
        myArray[i] = Math.random()*1000;
    }
}
