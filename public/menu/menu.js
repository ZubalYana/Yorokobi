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
        id: 1,
        type: 'sushi',
        price: 7.02,
        name: 'Soho sushi',
        img: './menuImgs/sushi 1.png',
        availability: false,
        rating: 5,
    },
    {
        id: 6,
        type: 'sushi',
        price: 7.99,
        name: 'Mini Maki Mix',
        img: './menuImgs/sushi 2.png',
        availability: true,
        rating: 4,
    },
    {
        id: 34,
        type: 'sushi',
        price: 9.99,
        name: 'Pocket Sushi Sampler',
        img: './menuImgs/sushi 31.png',
        availability: false,
        rating: 5,
    },
    {
        id: 40,
        type: 'sushi',
        price: 6.99,
        name: 'Veggie Roll Combo',
        img: './menuImgs/sushi 37.png',
        availability: true,
        rating: 5,
    },
    {
        id: 35,
        type: 'sushi',
        price: 12.99,
        name: 'Simple Sashimi Selection',
        img: './menuImgs/sushi 32.png',
        availability: true,
        rating: 4,
    },
    {
        id: 36,
        type: 'sushi',
        price: 10.99,
        name: 'Basic Nigiri Platter',
        img: './menuImgs/sushi 33.png',
        availability: true,
        rating: 5,
    },
    {
        id: 29,
        type: 'sushi',
        price: 17.99,
        name: 'Economy Sushi Boat',
        img: './menuImgs/sushi 26.png',
        availability: true,
        rating: 5,
    },
    {
        id: 10,
        type: 'sushi',
        price: 8.99,
        name: 'Tuna Temptation Trio',
        img: './menuImgs/sushi 6.png',
        availability: false,
        rating: 4,
    },
    {
        id: 13,
        type: 'sushi',
        price: 11.99,
        name: 'Tempura Crunch Box',
        img: './menuImgs/sushi 9.png',
        availability: true,
        rating: 5,
    },
    
    {
        id: 18,
        type: 'sushi',
        price: 5.99,
        name: 'California Roll Pack',
        img: './menuImgs/sushi 14.png',
        availability: false,
        rating: 5,
    },
    {
        id: 19,
        type: 'sushi',
        price: 9.99,
        name: 'Salmon Sushi Snack',
        img: './menuImgs/sushi 15.png',
        availability: true,
        rating: 4,
    },
    {
        id: 12,
        type: 'sushi',
        price: 7.99,
        name: 'Spicy Tuna Roll Duo',
        img: './menuImgs/sushi 8.png',
        availability: true,
        rating: 5,
    },
    {
        id: 15,
        type: 'sushi',
        price: 6.99,
        name: 'Avocado Addict Combo',
        img: './menuImgs/sushi 11.png',
        availability: true,
        rating: 5,
    },
    {
        id: 20,
        type: 'sushi',
        price: 10.99,
        name: 'Shrimp Special Set',
        img: './menuImgs/sushi 16.png',
        availability: false,
        rating: 4,
    },
    {
        id: 17,
        type: 'sushi',
        price: 8.99,
        name: 'Crispy Crab Roll Combo',
        img: './menuImgs/sushi 13.png',
        availability: false,
        rating: 5,
    },
    {
        id: 26,
        type: 'sushi',
        price: 12.99,
        name: 'Veggie Delight Platter',
        img: './menuImgs/sushi 23.png',
        availability: true,
        rating: 5,
    },
    {
        id: 21,
        type: 'sushi',
        price: 14.99,
        name: 'Sushi Sampler Box',
        img: './menuImgs/sushi 17.png',
        availability: true,
        rating: 4,
    },
    {
        id: 24,
        type: 'sushi',
        price: 11.99,
        name: 'Eel Express Set',
        img: './menuImgs/sushi 21.png',
        availability: true,
        rating: 5,
    },
    {
        id: 27,
        type: 'sushi',
        price: 6.99,
        name: 'Miso Munchies Pack',
        img: './menuImgs/sushi 24.png',
        availability: true,
        rating: 4,
    },
    {
        id: 28,
        type: 'sushi',
        price: 9.99,
        name: 'Rice and Roe Combo',
        img: './menuImgs/sushi 25.png',
        availability: false,
        rating: 5,
    },
    {
        id: 32,
        type: 'sushi',
        price: 15.99,
        name: 'Pocket-Friendly Platter',
        img: './menuImgs/sushi 29.png',
        availability: true,
        rating: 5,
    },
    {
        id: 38,
        type: 'sushi',
        price: 7.99,
        name: 'Teriyaki Tuna Twist',
        img: './menuImgs/sushi 35.png',
        availability: false,
        rating: 5,
    },
    {
        id: 39,
        type: 'sushi',
        price: 8.99,
        name: 'Seaweed Sensation Set',
        img: './menuImgs/sushi 36.png',
        availability: true,
        rating: 5,
    },
    {
        id: 7,
        type: 'sushi',
        price: 6.99,
        name: 'Soy Sauce Special',
        img: './menuImgs/sushi 3.png',
        availability: true,
        rating: 4,
    },
    {
        id: 4,
        type: 'ramen',
        price: 5.55,
        name: 'Special Ramen Mix',
        img: './menuImgs/ramen 1.png',
        availability: true,
        rating: 5,
    },
    {
        id: 47,
        type: 'ramen',
        price: 6.25,
        name: 'Spicy Miso Ramen',
        img: './menuImgs/ramen 2.png',
        availability: true,
        rating: 5,
    },
    {
        id: 48,
        type: 'ramen',
        price: 7.52,
        name: 'Tonkotsu Ramen',
        img: './menuImgs/ramen 3.png',
        availability: true,
        rating: 4,
    },
    {
        id: 49,
        type: 'ramen',
        price: 8.75,
        name: 'Shoyu Ramen',
        img: './menuImgs/ramen 4.png',
        availability: false,
        rating: 4,
    },
    {
        id: 50,
        type: 'ramen',
        price: 9.99,
        name: 'Vegetable Ramen',
        img: './menuImgs/ramen 5.png',
        availability: true,
        rating: 4,
    },
    {
        id: 51,
        type: 'ramen',
        price: 8.56,
        name: 'Chicken Ramen',
        img: './menuImgs/ramen 6.png',
        availability: true,
        rating: 4,
    },
    {
        id: 52,
        type: 'ramen',
        price: 10.99,
        name: 'Seafood Ramen',
        img: './menuImgs/ramen 7.png',
        availability: true,
        rating: 5,
    },
    {
        id: 53,
        type: 'ramen',
        price: 7.99,
        name: 'Beef Ramen',
        img: './menuImgs/ramen 8.png',
        availability: true,
        rating: 4,
    },
    {
        id: 54,
        type: 'ramen',
        price: 8.25,
        name: 'Kimchi Ramen',
        img: './menuImgs/ramen 9.png',
        availability: true,
        rating: 4,
    },
    {
        id: 55,
        type: 'ramen',
        price: 9.57,
        name: 'Sesame Ramen',
        img: './menuImgs/ramen 10.png',
        availability: true,
        rating: 4,
    },
    {
        id: 56,
        type: 'ramen',
        price: 7.75,
        name: 'Curry Ramen',
        img: './menuImgs/ramen 11.png',
        availability: true,
        rating: 4,
    },
    {
        id: 57,
        type: 'ramen',
        price: 11.25,
        name: 'Duck Ramen',
        img: './menuImgs/ramen 12.png',
        availability: true,
        rating: 5,
    },
    {
        id: 2,
        type: 'snack',
        price: 3.07,
        name: 'Salad Tempura',
        img: './menuImgs/tempura 1.png',
        availability: true,
        rating: 5,
    },
    {
        id: 58,
        type: 'snack',
        price: 5.55,
        name: 'Sashimi Mix',
        img: './menuImgs/sashimi Mix.png',
        availability: true,
        rating: 5,
    },
    {
        id: 59,
        type: 'snack',
        price: 4.22,
        name: 'Avocado Sashimi',
        img: './menuImgs/avocado sashimi.png',
        availability: true,
        rating: 5,
    },
    {
        id: 60,
        type: 'snack',
        price: 3.35,
        name: 'Taiyaki',
        img: './menuImgs/taiyaki.png',
        availability: true,
        rating: 5,
    },
    {
        id: 61,
        type: 'snack',
        price: 1.25,
        name: 'Mochi',
        img: './menuImgs/mochi.png',
        availability: true,
        rating: 5,
    },
    {
        id: 61,
        type: 'snack',
        price: 2.25,
        name: 'Dango',
        img: './menuImgs/dango.png',
        availability: true,
        rating: 5,
    },
    {
        id: 62,
        type: 'snack',
        price: 2.25,
        name: 'Onigiri',
        img: './menuImgs/onigiri.png',
        availability: true,
        rating: 5,
    },
    {
        id: 63,
        type: 'snack',
        price: 2.25,
        name: 'Gyoza',
        img: './menuImgs/gyoza.png',
        availability: true,
        rating: 5,
    },




    {
        id: 5,
        type: 'drink',
        price: 0.75,
        name: 'Matcha tea',
        img: './menuImgs/drink 1.png',
        availability: true,
        rating: 5,
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
    if(dish.type == 'drink'){
        $('.dishesContainer_dishes').append(
            `<div class="dishesContainer_sushi">
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
        </div>`
        )
    }
}
})


