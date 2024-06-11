$('.NorthAmericaContainer_point').hide(0);
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
        $('.dishPage_textContainer_mainText').css('color', '#13161B')
        $('.dishPage_sushiInfo_price').css('color', '#13161B')
        $('.dishPage_textContainer_btn').css('color', '#fff')
        $('#dishPage_textContainer_moreInfo').hover(
            () => {
                $('#dishPage_textContainer_moreInfo').css({
                    'background-color': '#fff',
                    'color': '#FF3257',
                    'border': '#FF3257 3px solid',
                });
            },
            () => {
                $('#dishPage_textContainer_moreInfo').css({
                    'background-color': '#FF3257',
                    'color': '#fff',
                    'border': '#FF3257 3px solid',

                });
            }
        );
        $('#dishPage_textContainer_orderNow').hover(
            () => {
                $('#dishPage_textContainer_orderNow').css({
                    'background-color': '#fff',
                    'color': '#FF3257',
                    'border': '#FF3257 3px solid',
                });
            },
            () => {
                $('#dishPage_textContainer_orderNow').css({
                    'background-color': '#FF3257',
                    'color': '#fff',
                    'border': '#FF3257 3px solid',

                });
            }
        );
        $('.ordersCount').css('background-color', '#fff')
        $('.ordersCount').css('color', '#F8385A')
        $('::selection').css('background-color', '#fff');
        $('::selection').css('color', '#CB324D');
        $('::-webkit-scrollbar-track').css('background-color', '#fff');
        $('.header_burgerRow').css('background-color', '#fff')
        $('.headerActivePage').css('background-color', '#fff')

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
        $('.dishPage_textContainer_mainText').css('color', '#fff')
        $('.dishPage_sushiInfo_price').css('color', '#fff')
        $('.dishPage_textContainer_btn').css('color', '#13161B')
        $('#dishPage_textContainer_moreInfo').hover(
            () => {
                $('#dishPage_textContainer_moreInfo').css({
                    'background-color': '#13161B',
                    'color': '#FF3257',
                    'border': '#FF3257 3px solid',
                });
            },
            () => {
                $('#dishPage_textContainer_moreInfo').css({
                    'background-color': '#FF3257',
                    'color': '#13161B',
                    'border': '#13161B 3px solid',

                });
            }
        );
        $('#dishPage_textContainer_orderNow').hover(
            () => {
                $('#dishPage_textContainer_orderNow').css({
                    'background-color': '#13161B',
                    'color': '#FF3257',
                    'border': '#FF3257 3px solid',
                });
            },
            () => {
                $('#dishPage_textContainer_orderNow').css({
                    'background-color': '#FF3257',
                    'color': '#13161B',
                    'border': '#FF3257 3px solid',

                });
            }
        );
        $('.ordersCount').css('background-color', '#13161B')
        $('.ordersCount').css('color', '#CB324D')


        $('::selection').css('background-color', '#13161B')
        $('::selection').css('color', '#CB324D')

        $('::-webkit-scrollbar-track').css('background-color', '#13161B');
        $('.header_burgerRow').css('background-color', '#13161B')

        $('.headerActivePage').css('background-color', '#13161B')

    }
}
changeTheme(theme);


//mainlands hover animation
$('.NorthAmericaContainer').on({
    mouseenter: function() {
        $('.NorthAmericaContainer').css({
            'width': '285px',
            'height': '256px',
            'left': '307px',
            'top': '-26px'
        });
        setTimeout(() => {
            $('.NorthAmericaContainer_point').show(0);

        }, 500);
    },
    mouseleave: function() {
        $('.NorthAmericaContainer').css({
            'width': '255px',
            'height': '229px',
            'left': '328px',
            'top': '0'
        });
        $('.NorthAmericaContainer_point').hide(0);

    }
});


// $('.NorthAmericaContainer_point').on({
//     mouseenter: function() {
//         $('#NorthAmerica').css({
//             'width': '285px',
//             'height': '256px',
//             'left': '307px',
//             'top': '-26px'
//         });
//             $('.NorthAmericaContainer_point').show(0);

//     },
//     mouseleave: function() {
//         $('#NorthAmerica').css({
//             'width': '255px',
//             'height': '229px',
//             'left': '328px',
//             'top': '0'
//         });
//         $('.NorthAmericaContainer_point').hide(0);

//     }
// });
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


//cookies animation
$('.cookiesPopup_right').hover(
    ()=>{
        $('.cookieMainPart').css({
            'width':'280px',
            'height':'280px',
            'transform':'rotate(-20deg)'
        })
        $('.cookieCrumb1').css({
            'width':'35px',
            'height':'35px',
            'top':'215px',
            'left':'330px',
        })
        $('.cookieCrumb2').css({
            'width':'13px',
            'height':'13px',
            'top':'290px',
            'left':'260px',
        })
        $('.cookieCrumb3').css({
            'width':'10px',
            'height':'10px',
            'top':'230px',
            'left':'270px',
        })
    },
    ()=>{
        $('.cookieMainPart').css({
            'width':'250px',
            'height':'250px',
            'transform':'rotate(0deg)'
        })
        $('.cookieCrumb1').css({
            'width':'26px',
            'height':'26px',
            'top':'240px',
            'left':'270px',
        })
        $('.cookieCrumb2').css({
            'width':'8px',
            'height':'8px',
            'top':'267px',
            'left':'247px',
        })
        $('.cookieCrumb3').css({
            'width':'8px',
            'height':'8px',
            'top':'225px',
            'left':'255px',
        })
    }
)

//cookies popup functionality
$(document).ready(function() {
    checkPopupCookie();
});
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkPopupCookie() {
    const popupClosed = getCookie("popupClosed");
    if (popupClosed === "true") {
        console.log("Popup cookie detected. Closing popup.");
        $(".cookiesPopupCon").css('display', 'none');
    } else {
        console.log("No popup cookie detected. Showing popup.");
        $(".cookiesPopupCon").css('display', 'flex');
        
        $(".cookiesPopup_accept").click(function() {
            console.log("Accept cookies button clicked.");
            closePopup();
        });
    }
}
function closePopup() {
    console.log("Closing popup and setting cookie.");
    $(".cookiesPopupCon").css('display', 'none');
    setCookie("popupClosed", "true", 365);
}

//burger work
$('.header_burger').click(()=>{})