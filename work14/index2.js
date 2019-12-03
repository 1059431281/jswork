var date = new Date()
let h1=m1=s1=0

m1 = 60-date.getMinutes()
s1 = 60-date.getSeconds()

let id1 =setInterval(seckill,1000)

function seckill() {
    s1--
    if(s1==0){
        s1=60
        m1--
    }
    if(m1==0){
        m1=60
    }
    document.getElementById('m1').innerHTML = m1 +'分'
    document.getElementById('s1').innerHTML = s1 +'秒'
}