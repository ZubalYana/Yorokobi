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
let dishArr = [
    {
        id: 5,
        type: 'drink',
        price: 0.75,
        name: 'Matcha Tea',
        img: './menuImgs/drink 1.png',
        availability: true,
        rating: 5,
    },
    {
        id: 71,
        type: 'drink',
        price: 0.95,
        name: 'Bubble Tea',
        img: './menuImgs/bubble tea.png',
        availability: true,
        rating: 5,
    },
    {
        id: 72,
        type: 'drink',
        price: 0.45,
        name: 'Strawberry Matcha Tea',
        img: './menuImgs/Strawberry Matcha Tea.png',
        availability: false,
        rating: 5,
    },
    {
        id: 73,
        type: 'drink',
        price: 0.75,
        name: 'Moon Milk',
        img: './menuImgs/Moon Milk.png',
        availability: true,
        rating: 5,
    },
    {
        id: 74,
        type: 'drink',
        price: 0.25,
        name: 'Black Tea',
        img: './menuImgs/Black Tea.png',
        availability: true,
        rating: 5,
    },
    {
        id: 75,
        type: 'drink',
        price: 0.25,
        name: 'Royal Milk Tea',
        img: './menuImgs/Royal Milk Tea.png',
        availability: true,
        rating: 5,
    },
    {
        id: 76,
        type: 'drink',
        price: 0.45,
        name: 'Matcha Soda',
        img: './menuImgs/matcha soda.png',
        availability: true,
        rating: 5,
    },
    {
        id: 77,
        type: 'drink',
        price: 0.75,
        name: 'Aloe Lemonade',
        img: './menuImgs/Aloe Lemonade.png',
        availability: true,
        rating: 4,
    },
    {
        id: 3,
        type: 'soba',
        price: 4.22,
        name: 'Nature Soba',
        img: './menuImgs/soba 1.png',
        availability: true,
        rating: 5,
    },
    {
        id: 48,
        type: 'soba',
        price: 4.99,
        name: 'Zaru Soba',
        img: './menuImgs/soba 9.png',
        availability: true,
        rating: 5,
    },
    {
        id: 49,
        type: 'soba',
        price: 4.99,
        name: 'Kake Soba',
        img: './menuImgs/soba 10.png',
        availability: true,
        rating: 5,
    },
    {
        id: 50,
        type: 'soba',
        price: 4.99,
        name: 'Miso Soba',
        img: './menuImgs/soba 11.png',
        availability: false,
        rating: 5,
    },
    {
        id: 40,
        type: 'soba',
        price: 3.22,
        name: 'Toshikoshi Soba',
        img: './menuImgs/soba 1.2.png',
        availability: true,
        rating: 4,
    },
    {
        id: 41,
        type: 'soba',
        price: 4.99,
        name: 'Nanban Soba',
        img: './menuImgs/soba 2.png',
        availability: true,
        rating: 5,
    },
    {
        id: 45,
        type: 'soba',
        price: 4.99,
        name: 'Sesame Soba',
        img: './menuImgs/soba 6.png',
        availability: true,
        rating: 5,
    },
    {
        id: 46,
        type: 'soba',
        price: 4.99,
        name: 'Atarashi Soba',
        img: './menuImgs/soba 7.png',
        availability: true,
        rating: 5,
    },



]
for (let dish of dishArr) {
    if (dish.type == 'sushi') {
        let $sushiContainer = $('<div class="dishesContainer_sushi"></div>');
        $sushiContainer.append(`
            <img class='dishesContainer_sushi_img' src="${dish.img}" alt="">
            <div class="dishesContainer_sushi_namePriceCon">
                <div class="dishesContainer_sushi_name">${dish.name}</div>
                <div class="dishesContainer_sushi_price">$${dish.price}</div>
            </div>
            <div class="dishesContainer_sushi_availability"></div>
            <div class="dishesContainer_sushi_btns">
                <div class="dishesContainer_sushi_btn" id="dishInfoBtn">Info</div>
                <div class="dishesContainer_sushi_btn" id="dishOrderBtn">Order</div>
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
$('#sushi').click(()=>{
    $('.dishesContainer_dishes').empty();
    for(let dish of dishArr){
        if (dish.type == 'sushi') {
            let $sushiContainer = $('<div class="dishesContainer_sushi"></div>');
            $sushiContainer.append(`
                <img class='dishesContainer_sushi_img' src="${dish.img}" alt="">
                <div class="dishesContainer_sushi_namePriceCon">
                    <div class="dishesContainer_sushi_name">${dish.name}</div>
                    <div class="dishesContainer_sushi_price">$${dish.price}</div>
                </div>
                <div class="dishesContainer_sushi_availability"></div>
                <div class="dishesContainer_sushi_btns">
                    <div class="dishesContainer_sushi_btn" id="dishInfoBtn">Info</div>
                    <div class="dishesContainer_sushi_btn" id="dishOrderBtn">Order</div>
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
    
})
$('#snack').click(()=>{
    $('.dishesContainer_dishes').empty();

        for(let dish of dishArr){
            if (dish.type == 'snack') {
                let $sushiContainer = $('<div class="dishesContainer_sushi"></div>');
                $sushiContainer.append(`
                    <img class='dishesContainer_sushi_img' src="${dish.img}" alt="">
                    <div class="dishesContainer_sushi_namePriceCon">
                        <div class="dishesContainer_sushi_name">${dish.name}</div>
                        <div class="dishesContainer_sushi_price">$${dish.price}</div>
                    </div>
                    <div class="dishesContainer_sushi_availability"></div>
                    <div class="dishesContainer_sushi_btns">
                        <div class="dishesContainer_sushi_btn" id="dishInfoBtn">Info</div>
                        <div class="dishesContainer_sushi_btn" id="dishOrderBtn">Order</div>
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
})
$('#soba').click(()=>{
    $('.dishesContainer_dishes').empty();

    for(let dish of dishArr){
        if (dish.type == 'soba') {
            let $sushiContainer = $('<div class="dishesContainer_sushi"></div>');
            $sushiContainer.append(`
                <img class='dishesContainer_sushi_img' src="${dish.img}" alt="">
                <div class="dishesContainer_sushi_namePriceCon">
                    <div class="dishesContainer_sushi_name">${dish.name}</div>
                    <div class="dishesContainer_sushi_price">$${dish.price}</div>
                </div>
                <div class="dishesContainer_sushi_availability"></div>
                <div class="dishesContainer_sushi_btns">
                    <div class="dishesContainer_sushi_btn" id="dishInfoBtn">Info</div>
                    <div class="dishesContainer_sushi_btn" id="dishOrderBtn">Order</div>
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
})
$('#ramen').click(()=>{
    $('.dishesContainer_dishes').empty();

    for(let dish of dishArr){
        if (dish.type == 'ramen') {
            let $sushiContainer = $('<div class="dishesContainer_sushi"></div>');
            $sushiContainer.append(`
                <img class='dishesContainer_sushi_img' src="${dish.img}" alt="">
                <div class="dishesContainer_sushi_namePriceCon">
                    <div class="dishesContainer_sushi_name">${dish.name}</div>
                    <div class="dishesContainer_sushi_price">$${dish.price}</div>
                </div>
                <div class="dishesContainer_sushi_availability"></div>
                <div class="dishesContainer_sushi_btns">
                    <div class="dishesContainer_sushi_btn" id="dishInfoBtn">Info</div>
                    <div class="dishesContainer_sushi_btn" id="dishOrderBtn">Order</div>
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
})
$('#drinks').click(()=>{
    $('.dishesContainer_dishes').empty();

    for(let dish of dishArr){
        if (dish.type == 'drink') {
            let $sushiContainer = $('<div class="dishesContainer_sushi"></div>');
            $sushiContainer.append(`
                <img class='dishesContainer_sushi_img' src="${dish.img}" alt="">
                <div class="dishesContainer_sushi_namePriceCon">
                    <div class="dishesContainer_sushi_name">${dish.name}</div>
                    <div class="dishesContainer_sushi_price">$${dish.price}</div>
                </div>
                <div class="dishesContainer_sushi_availability"></div>
                <div class="dishesContainer_sushi_btns">
                    <div class="dishesContainer_sushi_btn" id="dishInfoBtn">Info</div>
                    <div class="dishesContainer_sushi_btn" id="dishOrderBtn">Order</div>
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
})


