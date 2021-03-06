/**
 * Created by manishgiri on 8/4/16.
 */
// Pairwise
// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
//
//     If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.
//
//     For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
//
//     Index	0	1	2	3	4
// Value	7	9	11	13	15
// Below we'll take their corresponding indices and add them.
//
// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
//     Here are some helpful links:
//
//     Array.prototype.reduce()
// Run tests (ctrl + enter)
// Reset	  Help	  Bug
//
// /**
//  * Your output will go here.
//  * Any console.log() -type
//  * statements will appear in
//  * your browser's DevTools
//  * JavaScript console as well.
//  */
//
// pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
// pairwise([1, 3, 2, 4], 4) should return 1.
// pairwise([1, 1, 1], 2) should return 1.
// pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
// pairwise([], 100) should return 0



function pairwise(arr, arg) {

    const ARRLEN = arr.length;
    var indicesArr = [];
    var sumArrIndices = 0;

    for(let i = 0; i < ARRLEN; i++) {
        indicesArr.push(i);
    }


    for(let i = 0; i < ARRLEN; i++) {
        if(i === ARRLEN - 1) {
            break;
        }

        for(let j = i+1; j < ARRLEN; j++) {

            if((!Number.isNaN(arr[i]) && !Number.isNaN(arr[j])) && (arr[i] + arr[j] === arg)) {
                console.log("Found = " + arr[i] + " " + arr[j]);
                sumArrIndices += (i + j);
                arr[i] = NaN;
                arr[j] = NaN;
                break;
            }

            else {
                continue;
            }
        }

    }


    console.log(sumArrIndices);
    console.log("--------------");
    return sumArrIndices;
}

pairwise([1,4,2,3,0,5], 7);
pairwise([1, 3, 2, 4], 4);
pairwise([1, 1, 1], 2);
pairwise([0, 0, 0, 0, 1, 1], 1);
pairwise([], 100);