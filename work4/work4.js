document.write("<p>金字塔</p>")
var level = prompt('请设置金字塔的层数')
level = parseFloat(level)&&Number(level)
if(isNaN(level)){
    alert('金字塔的层数是数字')
}
console.log(level)
for(var i=1;i<=level;++i){
    var blank = level - i;
    for(var k=0;k<blank;++k){
        document.write('&nbsp;');
    }
    var star = i*2-1
    for (var j=0;j<star;++j){
        document.write('*')
    }
    document.write("<br>")

}
var str = '<table border ="1">'
for(var i=1;i<10;++i){
    str += '<tr>'
    for(var j=1;j<=i;j++){
            str += '<td>' + j + '*' + i + '=' + (j*i) + '</td>'
        }
    str += '</tr>'
}
str += '</table>'

var a  =document.getElementById('table')
a.innerHTML =str