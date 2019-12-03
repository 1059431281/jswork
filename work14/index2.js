var date = new Date()
let h1=m1=s1=0

h1 = date.getHours()
m1 = date.getMinutes()
s1 = date.getSeconds()
let id1 =setInterval(seckill,1000)

function seckill() {
    s1++
    if(s1==60){
        m1++
        s1 = '00'
    }
    if(m1==60){
        h1++
        m1='00'
    }
    if(h1==24){
        h1='00'
    }
    document.getElementById('h1').innerHTML = h1 +'时'
    document.getElementById('m1').innerHTML = m1 +'分'
    document.getElementById('s1').innerHTML = s1 +'秒'
}