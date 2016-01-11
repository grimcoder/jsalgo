var sorting = {

    bubbleSort : function(arr){
        //console.log('input:' + arr)
        for(var x = 0; x< arr.length; x++){
            for(var y = 0; y < arr.length -x-1;y++){
                if (arr[y] > arr[y+1]){
                 //swap
                    var tmp = arr[y]
                    arr[y] = arr[y+1]
                    arr[y+1] = tmp;
                }
            }
        }
        //console.log('output:' + arr)
        return arr;
    },

    mergeSort: function(arr) {

        if (arr.length < 2) return arr;
        console.log(arr.length)

        var arr1 = sorting.mergeSort(arr.slice(0, arr.length / 2));
        console.log(arr1)
        var arr2 = sorting.mergeSort(arr.slice(arr.length / 2));
        console.log(arr2)
        var arr1c = 0, arr2c = 0;

        var newarr = [];

        while(arr1c < arr1.length || arr2c < arr2.length){

            if ((arr1c < arr1.length && arr1[arr1c] < arr2[arr2c]) || arr2c >= arr2.length){
                newarr.push(arr1[arr1c])
                arr1c++;
            }
            else{
                newarr.push(arr2[arr2c])
                arr2c++;
            }
        }
        return newarr;

    }


};

module.exports =  sorting;