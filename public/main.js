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
        $('a').css('color', '#fff');
        $('.locationPage_statistics_desc').css('color', '#13161B');

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
        $('.futer_infoCon_text_Yorokobi_text').css('color', '#13161B')
        $('.futer_infoCon_text_column_el').css('color', '#13161B')

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
        $('a').css('color', '#13161B');

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
        $('.locationPage_statistics_desc').css('color', '#fff')
        $('.futer_infoCon_text_Yorokobi_text').css('color', '#fff')
        $('.futer_infoCon_text_column_el').css('color', '#fff')


    }
}
changeTheme(theme);


//mainlands hover animation
$('#NorthAmerica').hover(
    () => {
        $('#NorthAmerica').css({
            'width': '285px',
            'height': '256px',
            'left': '307px',
            'top': '-26px',
        });
        setTimeout(() => {
            $('.NorthAmericaContainer_point').css({
                'display': 'flex',
            });
        }, 500);

    },
    () => {
        $('#NorthAmerica').css({
            'width': '255px',
            'height': '229px',
            'left': '328px',
            'top': '0',
        });
        $('.NorthAmericaContainer_point').css({
            'display': 'none',
        });
    }
);
$('#SouthAmerica').hover(
    () => {
        $('#SouthAmerica').css({
            'width': '190px',
            'height': '270px',
            'left': '447px',
            'top': '179px',
        });
    },
    () => {
        $('#SouthAmerica').css({
            'width': '160px',
            'height': '228px',
            'left': '447px',
            'top': '185px',
        });
    }
);
$('#Africa').hover(
    () => {
        $('#Africa').css({
            'width': '270px',
            'height': '288px',
            'left': '572px',
            'top': '97px',
        });
    },
    () => {
        $('#Africa').css({
            'width': '240px',
            'height': '256px',
            'left': '590px',
            'top': '100px',
        });
    }
);
$('#Eurasia').hover(
    () => {
        $('#Eurasia').css({
            'width': '505px',
            'height': '259px',
            'left': '604px',
            'top': '-10px',
        });
    },
    () => {
        $('#Eurasia').css({
            'width': '475px',
            'height': '244px',
            'left': '613px',
            'top': '0',
        });
    }
);
$('#Oceania').hover(
    () => {
        $('#Oceania').css({
            'width': '230px',
            'height': '231px',
            'left': '920px',
            'top': '184px',
        });
    },
    () => {
        $('#Oceania').css({
            'width': '200px',
            'height': '201px',
            'left': '920px',
            'top': '184px',
        });
    }
);