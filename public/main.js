//sushi hover animation
$('.mainPage_content_imgPart_FullImg').hover(
    () => {
        $('.mainPage_sushiImg').css({
            'transform': 'rotate(-32deg)',
            'bottom': '30px',
            'left': '140px',
        });
    },
    () => {
        $('.mainPage_sushiImg').css({
            'transform': 'rotate(0deg)',
            'bottom': '45px',
            'left': '185px',
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
        $('.header_nav').css('color', '#fff');
        $('select').css('background-color', '#F8385A');
        $('.mainPage_background').attr('src', './imgs/main page background white theme.png')
        $('.mainPage_sushiImg').attr('src', './imgs/main page sushi pic light theme.png')
        $('.mainPage_bowlImg').attr('src', './imgs/main page sushi bowl light theme.png')
        $('select').css('background-color', '#F8385A');
        $('select').css('color', '#fff');
        $('.header_themeCircle').css('background-color', '#F8385A');
        $('.header_themeCircle').css('border', '#fff 3px solid');
        $('.header_logo').attr('src', './imgs/mian page logo white theme.png')
        $('.header_theme').css('background-color', '#fff');
        $('.mainPage_content_title').css('color', '#fff');
        $('.mainPage_content_button').css('background-color', '#fff');
        $('.mainPage_content_button').css('color', '#F8385A');

        $('#mainPage_content_menuBtn').hover(
            () => {
                $('#mainPage_content_menuBtn').css({
                    'background-color': '#F8385A',
                    'color': '#fff',
                    'border': '#fff 3px solid',
                    'box-shadow': 'none',
                });
            },
            () => {
                $('#mainPage_content_menuBtn').css({
                    'background-color': '#fff',
                    'color': '#F8385A',
                    'border': 'none',
                    'box-shadow': 'none',

                });
            }
        );
        $('#mainPage_content_moreInfoBtn').hover(
            () => {
                $('#mainPage_content_moreInfoBtn').css({
                    'background-color': '#F8385A',
                    'color': '#fff',
                    'border': '#fff 3px solid',
                    'box-shadow': 'none',

                });
            },
            () => {
                $('#mainPage_content_moreInfoBtn').css({
                    'background-color': '#fff',
                    'color': '#F8385A',
                    'border': 'none',
                    'box-shadow': 'none',

                });
            }
        );

    }else{
        $('.header_theme').css('justify-content', 'flex-end');
        $('.wrap').css('background-color', '#13161B');
        $('.header_nav').css('color', '#13161B');
        $('select').css('background-color', '#CB324D')
        $('select').css('color', '#13161B');
        $('.mainPage_background').attr('src', './imgs/main page background.png')
        $('.mainPage_sushiImg').attr('src', './imgs/main page sushi pic.png')
        $('.mainPage_bowlImg').attr('src', './imgs/main page sushi bowl.png')
        $('.header_themeCircle').css('background-color', '#CB324D');
        $('.header_themeCircle').css('border', '#13161B 3px solid');
        $('.header_logo').attr('src', './imgs/mian page logo.png')
        $('.header_theme').css('background-color', '#13161B');
        $('.mainPage_content_title').css('color', '#13161B');
        $('.mainPage_content_button').css('background-color', '#13161B');
        $('.mainPage_content_button').css('color', '#CB324D');

        $('#mainPage_content_menuBtn').hover(
            () => {
                $('#mainPage_content_menuBtn').css({
                    'background-color': '#CB324D',
                    'color': '#13161B',
                    'border': '#13161B 3px solid',
                    'box-shadow': 'none',

                });
            },
            () => {
                $('#mainPage_content_menuBtn').css({
                    'background-color': '#13161B',
                    'color': '#CB324D',
                    'border': 'none',
                    'box-shadow': 'none',

                });
            }
        );
        $('#mainPage_content_moreInfoBtn').hover(
            () => {
                $('#mainPage_content_moreInfoBtn').css({
                    'background-color': '#CB324D',
                    'color': '#13161B',
                    'border': '#13161B 3px solid',
                    'box-shadow': 'none',

                });
            },
            () => {
                $('#mainPage_content_moreInfoBtn').css({
                    'background-color': '#13161B',
                    'color': '#CB324D',
                    'border': 'none',
                    'box-shadow': 'none',

                });
            }
        );
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
