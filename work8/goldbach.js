 function goldbach() {
     let value = document.getElementById('odd').value
     let goldbach = document.getElementById('goldbach')
     var arr =[]
     var a = 0;
     for(var i=2;i<=value;i++){
         a = 0
         for(var j=2;j<i;j++){
             if(i%j==0){
                 a++
             }
         }
         if(a==0){
             arr.push(i)
         }
     }
     var str = ''
     console.log(arr)
     for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if((arr[i]+arr[j])===200){
                str += '<div>'+value+"可以拆分为两个质数"+arr[i]+"与"+arr[j]+"的和"+ '</div>'
                console.log(value+"可以拆分为两个质数"+arr[i]+"与"+arr[j]+"的和")
            }
        }
     }
     goldbach.innerHTML = str
 }