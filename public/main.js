$('.NorthAmericaContainer_point').hide(0);

//pages changing
$('.wrap').append(
    `
        <div class="home">
            <div class="screen mainPage">
                <div class="header">
                    <img class="header_logo" src="./imgs/mian page logo.png" alt="">
                    <div class="header_nav">
                        <div class="header_nav_el" id="homePage" href="/">Home page <div class="headerActivePage"></div></div>
                        <div class="header_nav_el" id="menu" href="/menu">Menu</div>
                        <div class="header_nav_el" id="orders" href="/orders">Orders <div class="ordersCount">0</div></div>
                        <div class="header_nav_el" id="contacts" href="/contacts">Contacts</div>
                    </div>
                    <div class="header_burger">
                        <div class="header_burgerRow"></div>
                        <div class="header_burgerRow"></div>
                        <div class="header_burgerRow"></div>
                    </div>
                    <div class="header_languageThemeCon">
                        <select class="header_language">
                            <option value="Eng">Eng.</option>
                            <option value="Ukr">Ukr.</option>
                            <option value="Jap">Jap.</option>
                            <option value="Fr">Fr.</option>
                            <option value="It">It.</option>
                            <option value="Por">Por.</option>
                        </select>
                        <div class="header_theme">
                            <div class="header_themeCircle"></div>
                        </div>
                    </div>
                </div>
                <div class="mainPage_content">
                    <div class="mainPage_content_textPart">
                        <div class="mainPage_content_title">Did you know?</div>
                        <div class="mainPage_content_text">In Japanese word「 Yorokobi 」or in original「 喜び 」actually means: pleasure, joy, delight. You exactly can quess why did we name our company this way. You can try this Yorokobi by yourself any time you want!  </div>
                        <div class="mainPage_content_buttons">
                            <div class="mainPage_content_button" id="mainPage_content_menuBtn">Menu</div>
                            <div class="mainPage_content_button" id="mainPage_content_moreInfoBtn">More info</div>
                        </div>
                    </div>
                    <div class="mainPage_content_imgPart">
                        <div class="mainPage_content_imgPart_FullImg">
                            <img class="mainPage_sushiImg" src="./imgs/main page sushi pic.png" alt="">
                            <img class="mainPage_bowlImg" src="./imgs/main page sushi bowl.png" alt="">
                        </div>
    
                    </div>
                </div>
                <img class="mainPage_background" src="./imgs/main page background.png" alt="">
            </div>
            <div class="screen locationPage" data-aos="fade-up" data-aos-duration="1000">
                <div class="locationPage_title">Where are we?</div>
                <div class="locationPage_worldContainer">
                    <div class="NorthAmericaContainer">
                        <img class="mainlandImg" id="NorthAmerica" src="./imgs/Untitled12_20240127204359.png" alt="">
                        <div class="NorthAmericaContainer_points">
                            <img class="NorthAmericaContainer_point" id="mapPoint1" src="./imgs/map point.png" alt="">
                            <img class="NorthAmericaContainer_point" id="mapPoint2" src="./imgs/map point.png" alt="">
                            <img class="NorthAmericaContainer_point" id="mapPoint3" src="./imgs/map point.png" alt="">
                            <img class="NorthAmericaContainer_point" id="mapPoint4" src="./imgs/map point.png" alt="">
                            <img class="NorthAmericaContainer_point" id="mapPoint5" src="./imgs/map point.png" alt="">
                            <img class="NorthAmericaContainer_point" id="mapPoint6" src="./imgs/map point.png" alt="">
                            <img class="NorthAmericaContainer_point" id="mapPoint7" src="./imgs/map point.png" alt="">
                            <img class="NorthAmericaContainer_point" id="mapPoint8" src="./imgs/map point.png" alt="">
                            <img class="NorthAmericaContainer_point" id="mapPoint9" src="./imgs/map point.png" alt="">
                            <img class="NorthAmericaContainer_point" id="mapPoint10" src="./imgs/map point.png" alt="">
                            <img class="NorthAmericaContainer_point" id="mapPoint11" src="./imgs/map point.png" alt="">
                            <img class="NorthAmericaContainer_point" id="mapPoint12" src="./imgs/map point.png" alt="">
                        </div>
                    </div>
                    <img class="mainlandImg" id="SouthAmerica" src="./imgs/Untitled12_20240127204758.png" alt="">
                    <img class="mainlandImg" id="Africa" src="./imgs/Untitled12_20240127204938.png" alt="">
                    <img class="mainlandImg" id="Eurasia" src="./imgs/Untitled12_20240127205157.png" alt="">
                    <img class="mainlandImg" id="Oceania" src="./imgs/Untitled12_20240127205235.png" alt="">
                </div>
                <div class="locationPage_statistics">
                    <div class="locationPage_statistics_column">
                        <div class="locationPage_statistics_num">129</div>
                        <div class="locationPage_statistics_desc">Restaurants in the world</div>
                    </div>
                    <div class="locationPage_statistics_column">
                        <div class="locationPage_statistics_num">1472</div>
                        <div class="locationPage_statistics_desc">High quality employees</div>
                    </div>
                    <div class="locationPage_statistics_column locationPage_statistics_column_adapriveMargin">
                        <div class="locationPage_statistics_num">15000+</div>
                        <div class="locationPage_statistics_desc">Good reviews from customers</div>
                    </div>
                    <div class="locationPage_statistics_column locationPage_statistics_column_adapriveMargin">
                        <div class="locationPage_statistics_num">100+</div>
                        <div class="locationPage_statistics_desc">Different tasty dishes to try</div>
                    </div>
                </div>
            </div>
            <div class="screen dishPage" data-aos="fade-up" data-aos-duration="1000">
                
                <div class="dishPage_textContainer">
                    <div class="dishPage_textContainer_title">The best choice</div>
                    <img class="dishPage_img" src="./imgs/dishPage img.png" alt="">
                    <div class="dishPage_textContainer_mainText">Craving the exquisite flavors of Japan? Indulge in our tantalizing Sushi Set, where every bite is a journey to culinary perfection! For every special or simple evening. No meter where you are and who is with you, the taste will surely improve your mood. </div>
                    <div class="dishPage_textContainer_btnsCon">
                        <div class="dishPage_textContainer_btn" id="dishPage_textContainer_moreInfo">More info</div>
                        <div class="dishPage_textContainer_btn" id="dishPage_textContainer_orderNow">Order now</div>
                    </div>
                </div>
                <div class="dishPage_sushiInfo">
                    <div class="dishPage_sushiInfo_name">Gunkan Maki</div>
                    <div class="dishPage_sushiInfo_price">only 7$ now</div>
                </div>
            </div>
            <div class="futer">
                <div class="futer_hr_container">
                    <div class="futer_hr"></div>
                </div>
                <div class="futer_infoCon">
                    <div class="futer_infoCon_text">
                        <div class="futer_infoCon_text_columns">
                            <div class="futer_infoCon_text_column futer_infoCon_text_column_Navigation">
                                <div class="futer_infoCon_text_column_heading">Navigation</div>
                                <div class="futer_infoCon_text_column_el">Home page</div>
                                <div class="futer_infoCon_text_column_el">Menu</div>
                                <div class="futer_infoCon_text_column_el">Orders</div>
                                <div class="futer_infoCon_text_column_el">Contacts</div>
                            </div>
                            <div class="futer_infoCon_text_column futer_infoCon_text_column_Help">
                                <div class="futer_infoCon_text_column_heading">Help</div>
                                <div class="futer_infoCon_text_column_el">Contacts us</div>
                                <div class="futer_infoCon_text_column_el">Problems</div>
                                <div class="futer_infoCon_text_column_el">Questions</div>
                                <div class="futer_infoCon_text_column_el">Support</div>
                            </div>
                            <div class="futer_infoCon_text_column futer_infoCon_text_column_Amenities">
                                <div class="futer_infoCon_text_column_heading">Amenities</div>
                                <div class="futer_infoCon_text_column_el">Download app</div>
                                <div class="futer_infoCon_text_column_el">JPS restaurants map</div>
                                <div class="futer_infoCon_text_column_el">Rate us</div>
                            </div>
                        </div>
                        <div class="futer_infoCon_text_Yorokobi">
                            <img class="futer_infoCon_text_Yorokobi_Logo" src="./imgs/Yorokobi red logo.png" alt="">
                            <div class="futer_infoCon_text_Yorokobi_text">The best Japanese cuisine restaurants in the world. Try it yourself!</div>
                        </div>
                    </div>
                    <div class="futer_infoCon_pictures">
                        <img class="futer_infoCon_pictures_sushi1" src="./imgs/futer_sushi1.png" alt="">
                        <img class="futer_infoCon_pictures_sushi2" src="./imgs/futer_sushi2.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    `
)



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


//mainlands hover animations
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
$('.header_burger').click(()=>{
    $('.burgerCon').css('display', 'flex')
})
$('.burger_xmark').click(()=>{
    $('.burgerCon').css('display', 'none')
})