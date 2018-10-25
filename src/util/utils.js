 export default function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] !== undefined && arr[i].owner === val)
            indexes.push(i);
    return indexes;
  }





