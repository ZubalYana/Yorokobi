//type of dish clicked apperience 
$('#sushi').click(()=>{
    $('#sushi').css({
        'background-color': '#F73859',
        'color': '#fff',
    })
    $('#tempura').css({
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
    $('#drings').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
})
$('#tempura').click(()=>{
    $('#tempura').css({
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
    $('#drings').css({
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
    $('#tempura').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
    $('#ramen').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
    $('#drings').css({
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
    $('#tempura').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
    $('#drings').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
})
$('#drings').click(()=>{
    $('#drings').css({
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
    $('#tempura').css({
        'background-color': '#13161B',
        'color': '#F73859',
    })
})


//dishes appending
let sushiArr = [
    {
        id: 1,
        price: '7.00',
        name: 'Soho sushi',
        img: './menuImgs/image-removebg-preview (18).png',
        availability: true,
        rating: 5,
    },
    {
        id: 2,
        price: '8.50',
        name: 'Aoi sushi',
        img: './menuImgs/image-removebg-preview (18).png',
        availability: true,
        rating: 5,
    },
    {
        id: 3,
        price: '9.20',
        name: 'Mink sushi',
        img: './menuImgs/image-removebg-preview (18).png',
        availability: false,
        rating: 4,
    },
    {
        id: 3,
        price: '9.20',
        name: 'Hoyo sushi',
        img: './menuImgs/image-removebg-preview (18).png',
        availability: true,
        rating: 3,
    },
]
for(let dish of sushiArr){
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
