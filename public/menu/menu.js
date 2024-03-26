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
        price: 7.00,
        name: 'Soho sushi',
        img: './menuImgs/image-removebg-preview (18).png',
        availability: true,
        rating: 5,
    },
]
for(let dish of sushiArr){
    $('.dishesContainer_dishes').append(
        `<div class="dishesContainer_sushi">
        <img class='dishesContainer_sushi_img' src="${dish.img}" alt="">
        <div class="dishesContainer_sushi_namePriceCon">
            <div class="dishesContainer_sushi_name">${dish.name}</div>
            <div class="dishesContainer_sushi_price">${dish.price}</div>
        </div>
        <div class="dishesContainer_sushi_availability">${dish.availability}<FontAwesomeIcon icon="fa-solid fa-check" /></div>
        <div class="dishesContainer_sushi_rating">${dish.rating}</div>
    </div>`
    )
}
