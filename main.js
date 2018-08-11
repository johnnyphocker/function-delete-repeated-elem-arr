var output = document.getElementById("output");
var myArray = ["hello", "world", 23423, "JavaScript", "hello", "world", 23423, 44334, 22, "JavaScript", ];
var myArrayClean = removeDup(myArray);

output.innerHTML = `Array con elementos duplicados: ${myArray} <br> Array sin elementos duplicados: ${myArrayClean}`;

function removeDup(arr) {
    var cArray = [];
    var cObject = {};
    var z = '';
    for (var x = 0; x < arr.length; x++) {
        //console.log(arr[x]);
        cObject[arr[x]] = "whatever";
    }
    console.log(cObject);
    for (z in cObject) {
        //console.log(z);
        cArray.push(z);
    }
    return cArray;
}
