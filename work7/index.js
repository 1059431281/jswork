function sort(method) {
    let origin = document.getElementById('origin').value
    console.log(origin)
    let logs

    if(method ==='bubble'){
        logs = bubbleSort(origin)
        // console.log(123)
        // var arr = origin.split(',')
    }
    else if(method ==='insert'){
        logs = insertSort(origin)
        // console.log(333)
    }
    var showDiv = document.getElementById('Anim')
    var a = logs.toString()
    var str = '<p>'+ a +'</p>'
    showDiv.innerHTML =str
}