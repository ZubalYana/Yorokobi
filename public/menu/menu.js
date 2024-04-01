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
        price: '7.00',
        name: 'Soho sushi',
        img: './menuImgs/sushi 1.png',
        availability: true,
        rating: 5,
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
        id: 6,
        type: 'sushi',
        price: '7.00',
        name: 'Soho sushi',
        img: './menuImgs/sushi 2.png',
        availability: true,
        rating: 5,
    },
    {
        id: 7,
        type: 'sushi',
        price: '7.00',
        name: 'Soho sushi',
        img: './menuImgs/sushi 3.png',
        availability: true,
        rating: 5,
    },
    {
        id: 8,
        type: 'sushi',
        price: '7.00',
        name: 'Soho sushi',
        img: './menuImgs/sushi 4.png',
        availability: true,
        rating: 5,
    },
    {
        id: 9,
        type: 'sushi',
        price: '7.00',
        name: 'Soho sushi',
        img: './menuImgs/sushi 5.png',
        availability: true,
        rating: 5,
    },
    {
        id: 10,
        type: 'sushi',
        price: '7.00',
        name: 'Soho sushi',
        img: './menuImgs/sushi 5.png',
        availability: true,
        rating: 5,
    },
    {
        id: 11,
        type: 'sushi',
        price: '7.00',
        name: 'Soho sushi',
        img: './menuImgs/sushi 7.png',
        availability: true,
        rating: 5,
    },
    {
        id: 12,
        type: 'sushi',
        price: '7.00',
        name: 'Soho sushi',
        img: './menuImgs/sushi 8.png',
        availability: true,
        rating: 5,
    },
    {
        id: 13,
        type: 'sushi',
        price: '7.00',
        name: 'Soho sushi',
        img: './menuImgs/sushi 9.png',
        availability: true,
        rating: 5,
    },

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



