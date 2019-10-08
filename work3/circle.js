 function my$(id) {
     return document.getElementById(id)
 }
 var r = prompt("请输入圆的半径")
 r  = parseFloat(r)&Number(r)
 if(!isNaN(r)){
     var cir = 2 * Math.PI * r
     var area =Math.PI *r *r
     my$("r").value = r
     my$("cir").value =cir.toFixed(2);
     my$("area").value = area.toFixed(2);
 }
 else{
     alert("Please enter the correct number")
 }