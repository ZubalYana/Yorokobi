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
        availability: true,
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
        id: 2,
        type: 'snack',
        price: '3.00',
        name: 'Salad Tempura',
        img: './menuImgs/tempura 1.png',
        availability: true,
        rating: 5,
    },
    {
        id: 3,
        type: 'soba',
        price: '4.20',
        name: 'Nature Soba',
        img: './menuImgs/soba 1.png',
        availability: true,
        rating: 5,
    },
    {
        id: 4,
        type: 'ramen',
        price: '5.50',
        name: 'Ramen Mix',
        img: './menuImgs/ramen 1.png',
        availability: true,
        rating: 5,
    },
    {
        id: 5,
        type: 'drink',
        price: '0.70',
        name: 'Matcha tea',
        img: './menuImgs/drink 1.png',
        availability: true,
        rating: 5,
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
    }


]
for(let dish of dishArr){
    if(dish.type == 'sushi'){
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
    if(dish.availability == true){
        $('.dishesContainer_sushi_availability').html('Available now <i class="fa-solid fa-check"></i>')
    }else{
        $('.dishesContainer_sushi_availability').html('Not available now <i class="fa-solid fa-xmark"></i>')
        $('.dishesContainer_sushi_availability').css('color', '#959595')
    }
    if(dish.rating == 5){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>')
    }else if(dish.rating == 4){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>')
    }else if(dish.rating == 3){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>')
    }else if(dish.rating == 2){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>')
    }else if(dish.rating == 1){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>')
    }
}

$('#sushi').click(()=>{
    $('.dishesContainer_dishes').empty();
    for(let dish of dishArr){
        if(dish.type == 'sushi'){
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
        if(dish.availability == true){
            $('.dishesContainer_sushi_availability').html('Available now <i class="fa-solid fa-check"></i>')
        }else{
            $('.dishesContainer_sushi_availability').html('Not available now <i class="fa-solid fa-xmark"></i>')
            $('.dishesContainer_sushi_availability').css('color', '#959595')
        }
        if(dish.rating == 5){
            $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>')
        }else if(dish.rating == 4){
            $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>')
        }else if(dish.rating == 3){
            $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>')
        }else if(dish.rating == 2){
            $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>')
        }else if(dish.rating == 1){
            $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>')
        }
    }
})
$('#snack').click(()=>{
    $('.dishesContainer_dishes').empty();

        for(let dish of dishArr){
        if(dish.type == 'snack'){
            console.log(dish.name)
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
        if(dish.availability == true){
            $('.dishesContainer_sushi_availability').html('Available now <i class="fa-solid fa-check"></i>')
        }else{
            $('.dishesContainer_sushi_availability').html('Not available now <i class="fa-solid fa-xmark"></i>')
            $('.dishesContainer_sushi_availability').css('color', '#959595')
        }
        if(dish.rating == 5){
            $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>')
        }else if(dish.rating == 4){
            $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>')
        }else if(dish.rating == 3){
            $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>')
        }else if(dish.rating == 2){
            $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>')
        }else if(dish.rating == 1){
            $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>')
        }
    }
})
$('#soba').click(()=>{
    $('.dishesContainer_dishes').empty();

    for(let dish of dishArr){
    if(dish.type == 'soba'){
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
    if(dish.availability == true){
        $('.dishesContainer_sushi_availability').html('Available now <i class="fa-solid fa-check"></i>')
    }else{
        $('.dishesContainer_sushi_availability').html('Not available now <i class="fa-solid fa-xmark"></i>')
        $('.dishesContainer_sushi_availability').css('color', '#959595')
    }
    if(dish.rating == 5){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>')
    }else if(dish.rating == 4){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>')
    }else if(dish.rating == 3){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>')
    }else if(dish.rating == 2){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>')
    }else if(dish.rating == 1){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>')
    }
}
})
$('#ramen').click(()=>{
    $('.dishesContainer_dishes').empty();

    for(let dish of dishArr){
    if(dish.type == 'ramen'){
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
    if(dish.availability == true){
        $('.dishesContainer_sushi_availability').html('Available now <i class="fa-solid fa-check"></i>')
    }else{
        $('.dishesContainer_sushi_availability').html('Not available now <i class="fa-solid fa-xmark"></i>')
        $('.dishesContainer_sushi_availability').css('color', '#959595')
    }
    if(dish.rating == 5){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>')
    }else if(dish.rating == 4){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>')
    }else if(dish.rating == 3){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>')
    }else if(dish.rating == 2){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>')
    }else if(dish.rating == 1){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>')
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
    if(dish.availability == true){
        $('.dishesContainer_sushi_availability').html('Available now <i class="fa-solid fa-check"></i>')
    }else{
        $('.dishesContainer_sushi_availability').html('Not available now <i class="fa-solid fa-xmark"></i>')
        $('.dishesContainer_sushi_availability').css('color', '#959595')
    }
    if(dish.rating == 5){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>')
    }else if(dish.rating == 4){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>')
    }else if(dish.rating == 3){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>')
    }else if(dish.rating == 2){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>')
    }else if(dish.rating == 1){
        $('.dishesContainer_sushi_rating').html('<i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>')
    }
}
})



