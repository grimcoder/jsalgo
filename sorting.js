var sorting = {

    bubbleSort : function(arr){

        console.log('sorting in place!' + arr)

        for(var x = 0; x< arr.length; x++){

            for(var y = 0; y < arr.length -x-1;y++){
                if (arr[y] > arr[y+1]){
                 //swap
                    var tmp = arr[y]
                    arr[y] = arr[y+1]
                    arr[y+1] = tmp;
                }
                console.log(arr)
            }
        }

        console.log('output:' + arr)
        return arr;
    }


};

module.exports =  sorting;