$('.order_cancelBtn').click(()=>{
    $('.orderPopupsContainer').css('display', 'flex')
})
$('.cancelPopup_noBtn').click(()=>{
    $('.orderPopupsContainer').css('display', 'none')
})

//burger work
$('.header_burger').click(()=>{
    $('.burgerCon').css('display', 'flex')
})
$('.burger_xmark').click(()=>{
    $('.burgerCon').css('display', 'none')
})