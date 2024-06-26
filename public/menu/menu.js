let cartList = [];
let totalAmount = 0;

//theme changing
let theme = localStorage.getItem('theme') || 'light';
$('.header_theme').click(function(){
    if(theme == 'light'){
        theme = 'dark';
        localStorage.setItem('theme', theme);
        changeTheme(theme);

    }else{
        theme = 'light';
        localStorage.setItem('theme', theme);
        changeTheme(theme);
    }
})
function changeTheme(theme){
    if(theme == 'light'){
        $('.header_theme').css('justify-content', 'flex-start');
        $('.wrap').css('background-color', '#fff');
        // $('.dishesContainer_typeChoise_item').css('background-color', '#fff');
        $('.ordersCount').css('color', '#fff');
        $('select').css('background-color', '#fff');
        $('.header_themeCircle').css('background-color', '#fff');
    }else{
        $('.header_theme').css('justify-content', 'flex-end');
        $('.wrap').css('background-color', '#13161B');
        // $('.dishesContainer_typeChoise_item').css('background-color', '#13161B');
        $('.ordersCount').css('color', '#13161B');
        $('select').css('background-color', '#13161B');
        $('.header_themeCircle').css('background-color', '#13161B');
    }
}
changeTheme(theme);

//type of dish clicked apperience 
$('#sushi').click(()=>{
    $('#sushi').css({
        'background-color': '#F73859',
        'color': '#fff',
    })
    $('#snack').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
    $('#soba').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
    $('#ramen').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
    $('#drinks').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
})
$('#snack').click(()=>{
    $('#snack').css({
        'background-color': '#F73859',
        'color': '#fff',
    })
    $('#sushi').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
    $('#soba').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
    $('#ramen').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
    $('#drinks').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
})
$('#soba').click(()=>{
    $('#soba').css({
        'background-color': '#F73859',
        'color': '#fff',
    })
    $('#sushi').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
    $('#snack').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
    $('#ramen').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
    $('#drinks').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
})
$('#ramen').click(()=>{
    $('#ramen').css({
        'background-color': '#F73859',
        'color': '#fff',
    })
    $('#sushi').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
    $('#soba').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
    $('#snack').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
    $('#drinks').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
})
$('#drinks').click(()=>{
    $('#drinks').css({
        'background-color': '#F73859',
        'color': '#fff',
    })
    $('#sushi').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
    $('#soba').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
    $('#ramen').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
    $('#snack').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
})

//dishes appending
axios.get('http://localhost:3000/dishes')
.then(res=>{
    console.log(res.data)
    for (let dish of res.data) {
        if (dish.type == 'sushi') {
            let $sushiContainer = $('<div class="dishesContainer_sushi"></div>');
            $sushiContainer.append(`
                <img class='dishesContainer_sushi_img' src="${dish.image}" alt="">
                <div class="dishesContainer_sushi_namePriceCon">
                    <div class="dishesContainer_sushi_name">${dish.name}</div>
                    <div class="dishesContainer_sushi_price">$${dish.price}</div>
                </div>
                <div class="dishesContainer_sushi_availability"></div>
                <div class="dishesContainer_sushi_btns">
                    <div class="dishesContainer_sushi_btn" id="dishInfoBtn">Info</div>
                    <div class="dishesContainer_sushi_btn dishOrderBtn" id="${dish._id}">Order</div>
                </div>
                <div class="dishesContainer_sushi_rating"></div>
            `);
    
            if (dish.availability == true) {
                $sushiContainer.find('.dishesContainer_sushi_availability').html('Available now <i class="fa-solid fa-check"></i>');
            } else {
                $sushiContainer.find('.dishesContainer_sushi_availability').html('Not available now <i class="fa-solid fa-xmark"></i>').css('color', '#959595');
            }
    
            let ratingHtml = '';
            for (let i = 0; i < 5; i++) {
                if (i < dish.rating) {
                    ratingHtml += '<i class="fa-solid fa-star"></i>';
                } else {
                    ratingHtml += '<i class="fa-regular fa-star"></i>';
                }
            }
            $sushiContainer.find('.dishesContainer_sushi_rating').html(ratingHtml);
    
            $('.dishesContainer_dishes').append($sushiContainer);
        }
    }
    ordering()
    $('#sushi').click(()=>{
        $('.dishesContainer_dishes').empty();
        for(let dish of res.data){
            if (dish.type == 'sushi') {
                let $sushiContainer = $('<div class="dishesContainer_sushi"></div>');
                $sushiContainer.append(`
                    <img class='dishesContainer_sushi_img' src="${dish.image}" alt="">
                    <div class="dishesContainer_sushi_namePriceCon">
                        <div class="dishesContainer_sushi_name">${dish.name}</div>
                        <div class="dishesContainer_sushi_price">$${dish.price}</div>
                    </div>
                    <div class="dishesContainer_sushi_availability"></div>
                    <div class="dishesContainer_sushi_btns">
                        <div class="dishesContainer_sushi_btn" id="dishInfoBtn">Info</div>
                        <div class="dishesContainer_sushi_btn dishOrderBtn" id="${dish._id}">Order</div>
                    </div>
                    <div class="dishesContainer_sushi_rating"></div>
                `);
                if (dish.availability == true) {
                    $sushiContainer.find('.dishesContainer_sushi_availability').html('Available now <i class="fa-solid fa-check"></i>');
                } else {
                    $sushiContainer.find('.dishesContainer_sushi_availability').html('Not available now <i class="fa-solid fa-xmark"></i>').css('color', '#959595');
                }
                let ratingHtml = '';
                for (let i = 0; i < 5; i++) {
                    if (i < dish.rating) {
                        ratingHtml += '<i class="fa-solid fa-star"></i>';
                    } else {
                        ratingHtml += '<i class="fa-regular fa-star"></i>';
                    }
                }
                $sushiContainer.find('.dishesContainer_sushi_rating').html(ratingHtml);
                $('.dishesContainer_dishes').append($sushiContainer);
            }
        }
        ordering()
    })
    $('#snack').click(()=>{
        $('.dishesContainer_dishes').empty();
            for(let dish of res.data){
                if (dish.type == 'snack') {
                    let $sushiContainer = $('<div class="dishesContainer_sushi"></div>');
                    $sushiContainer.append(`
                        <img class='dishesContainer_sushi_img' src="${dish.image}" alt="">
                        <div class="dishesContainer_sushi_namePriceCon">
                            <div class="dishesContainer_sushi_name">${dish.name}</div>
                            <div class="dishesContainer_sushi_price">$${dish.price}</div>
                        </div>
                        <div class="dishesContainer_sushi_availability"></div>
                        <div class="dishesContainer_sushi_btns">
                            <div class="dishesContainer_sushi_btn" id="dishInfoBtn">Info</div>
                            <div class="dishesContainer_sushi_btn dishOrderBtn" id="${dish._id}">Order</div>
                        </div>
                        <div class="dishesContainer_sushi_rating"></div>
                    `);
                    if (dish.availability == true) {
                        $sushiContainer.find('.dishesContainer_sushi_availability').html('Available now <i class="fa-solid fa-check"></i>');
                    } else {
                        $sushiContainer.find('.dishesContainer_sushi_availability').html('Not available now <i class="fa-solid fa-xmark"></i>').css('color', '#959595');
                    }
                    let ratingHtml = '';
                    for (let i = 0; i < 5; i++) {
                        if (i < dish.rating) {
                            ratingHtml += '<i class="fa-solid fa-star"></i>';
                        } else {
                            ratingHtml += '<i class="fa-regular fa-star"></i>';
                        }
                    }
                    $sushiContainer.find('.dishesContainer_sushi_rating').html(ratingHtml);
                    $('.dishesContainer_dishes').append($sushiContainer);
                }
        }
        ordering()
    })
    $('#soba').click(()=>{
        $('.dishesContainer_dishes').empty();
        for(let dish of res.data){
            if (dish.type == 'soba') {
                let $sushiContainer = $('<div class="dishesContainer_sushi"></div>');
                $sushiContainer.append(`
                    <img class='dishesContainer_sushi_img' src="${dish.image}" alt="">
                    <div class="dishesContainer_sushi_namePriceCon">
                        <div class="dishesContainer_sushi_name">${dish.name}</div>
                        <div class="dishesContainer_sushi_price">$${dish.price}</div>
                    </div>
                    <div class="dishesContainer_sushi_availability"></div>
                    <div class="dishesContainer_sushi_btns">
                        <div class="dishesContainer_sushi_btn" id="dishInfoBtn">Info</div>
                        <div class="dishesContainer_sushi_btn dishOrderBtn" id="${dish._id}">Order</div>
                    </div>
                    <div class="dishesContainer_sushi_rating"></div>
                `);
                if (dish.availability == true) {
                    $sushiContainer.find('.dishesContainer_sushi_availability').html('Available now <i class="fa-solid fa-check"></i>');
                } else {
                    $sushiContainer.find('.dishesContainer_sushi_availability').html('Not available now <i class="fa-solid fa-xmark"></i>').css('color', '#959595');
                }
                let ratingHtml = '';
                for (let i = 0; i < 5; i++) {
                    if (i < dish.rating) {
                        ratingHtml += '<i class="fa-solid fa-star"></i>';
                    } else {
                        ratingHtml += '<i class="fa-regular fa-star"></i>';
                    }
                }
                $sushiContainer.find('.dishesContainer_sushi_rating').html(ratingHtml);
                $('.dishesContainer_dishes').append($sushiContainer);
            }
    }
    ordering()
    })
    $('#ramen').click(()=>{
        $('.dishesContainer_dishes').empty();
        for(let dish of res.data){
            if (dish.type == 'ramen') {
                let $sushiContainer = $('<div class="dishesContainer_sushi"></div>');
                $sushiContainer.append(`
                    <img class='dishesContainer_sushi_img' src="${dish.image}" alt="">
                    <div class="dishesContainer_sushi_namePriceCon">
                        <div class="dishesContainer_sushi_name">${dish.name}</div>
                        <div class="dishesContainer_sushi_price">$${dish.price}</div>
                    </div>
                    <div class="dishesContainer_sushi_availability"></div>
                    <div class="dishesContainer_sushi_btns">
                        <div class="dishesContainer_sushi_btn" id="dishInfoBtn">Info</div>
                        <div class="dishesContainer_sushi_btn dishOrderBtn" id="${dish._id}">Order</div>
                    </div>
                    <div class="dishesContainer_sushi_rating"></div>
                `);
                if (dish.availability == true) {
                    $sushiContainer.find('.dishesContainer_sushi_availability').html('Available now <i class="fa-solid fa-check"></i>');
                } else {
                    $sushiContainer.find('.dishesContainer_sushi_availability').html('Not available now <i class="fa-solid fa-xmark"></i>').css('color', '#959595');
                }
                let ratingHtml = '';
                for (let i = 0; i < 5; i++) {
                    if (i < dish.rating) {
                        ratingHtml += '<i class="fa-solid fa-star"></i>';
                    } else {
                        ratingHtml += '<i class="fa-regular fa-star"></i>';
                    }
                }
                $sushiContainer.find('.dishesContainer_sushi_rating').html(ratingHtml);
                $('.dishesContainer_dishes').append($sushiContainer);
            }
    }
    ordering()
    })
    $('#drinks').click(()=>{
        $('.dishesContainer_dishes').empty();
        for(let dish of res.data){
            if (dish.type == 'drink') {
                let $sushiContainer = $('<div class="dishesContainer_sushi"></div>');
                $sushiContainer.append(`
                    <img class='dishesContainer_sushi_img' src="${dish.image}" alt="">
                    <div class="dishesContainer_sushi_namePriceCon">
                        <div class="dishesContainer_sushi_name">${dish.name}</div>
                        <div class="dishesContainer_sushi_price">$${dish.price}</div>
                    </div>
                    <div class="dishesContainer_sushi_availability"></div>
                    <div class="dishesContainer_sushi_btns">
                        <div class="dishesContainer_sushi_btn" id="dishInfoBtn">Info</div>
                        <div class="dishesContainer_sushi_btn dishOrderBtn" id="${dish._id}">Order</div>
                    </div>
                    <div class="dishesContainer_sushi_rating"></div>
                `);
                if (dish.availability == true) {
                    $sushiContainer.find('.dishesContainer_sushi_availability').html('Available now <i class="fa-solid fa-check"></i>');
                } else {
                    $sushiContainer.find('.dishesContainer_sushi_availability').html('Not available now <i class="fa-solid fa-xmark"></i>').css('color', '#959595');
                }
                let ratingHtml = '';
                for (let i = 0; i < 5; i++) {
                    if (i < dish.rating) {
                        ratingHtml += '<i class="fa-solid fa-star"></i>';
                    } else {
                        ratingHtml += '<i class="fa-regular fa-star"></i>';
                    }
                }
                $sushiContainer.find('.dishesContainer_sushi_rating').html(ratingHtml);
                $('.dishesContainer_dishes').append($sushiContainer);
            }
    }
    ordering()
    })

    //ordering
    function ordering(){
        $('.dishOrderBtn').click((e)=>{
            let dishID = e.target.id;
            console.log(dishID)
            let dishToAdd = res.data.find(dish => dish._id === dishID);
            cartList.push(dishToAdd);
            console.log(cartList)
            $('.ordersCount').html(cartList.length)
        })
    }

})



//burger work
$('.header_burger').click(()=>{
    $('.burgerCon').css('display', 'flex')
})
$('.burger_xmark').click(()=>{
    $('.burgerCon').css('display', 'none')
})


