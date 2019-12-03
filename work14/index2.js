var date = new Date()
let h1=m1=s1=0

m1 = 59-date.getMinutes()
s1 = 59-date.getSeconds()

let id1 =setInterval(seckill,1000)

function seckill() {
    s1--
    if(s1==-1){
        s1=59
        m1--
    }
    if(m1==-1){
        m1=59
    }
    document.getElementById('m1').innerHTML = m1 +'分'
    document.getElementById('s1').innerHTML = s1 +'秒'
}