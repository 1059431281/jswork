$('#fold>ul>li:first').find('.wrap').css({
    display: 'block'
})
$('#fold>ul>li').click(function () {
    console.log(this)
    $(this).siblings('li').find('.wrap').css({
        display: 'none'
    })
    $(this).find('.wrap').css({
        display: 'block'
    })
})