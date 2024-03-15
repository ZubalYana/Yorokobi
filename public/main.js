//sushi hover animation
$('.mainPage_content_imgPart_FullImg').hover(
    () => {
        $('.mainPage_sushiImg').css({
            'transform': 'rotate(-32deg)',
            'bottom': '30px',
            'left': '100px',
        });
    },
    () => {
        $('.mainPage_sushiImg').css({
            'transform': 'rotate(0deg)',
            'bottom': '45px',
            'left': '145px',
        });
    }
);

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
        $('.wrap').css('color', '#13161B');
        $('select').css('background-color', '#F8385A');
        $('.mainPage_background').attr('src', './imgs/main page background white theme.png')
        $('select').css('background-color', '#F8385A');
        $('.header_themeCircle').css('background-color', '#F8385A');

    }else{
        $('.header_theme').css('justify-content', 'flex-end');
        $('.wrap').css('background-color', '#13161B');
        $('.wrap').css('color', '#fff');
        $('select').css('background-color', '#CB324D')
        $('.mainPage_background').attr('src', './imgs/main page background.png')
        $('.header_themeCircle').css('background-color', '#CB324D');


    }
}
changeTheme(theme);

// $('#menu').click(() => {
//     axios.get('/menu')
//         .then(response => {
//             $('.wrap').html(response.data); 
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// });
