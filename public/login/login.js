//animations
$('#onigiri1').hover(
    () => {
        $('#onigiri1').css({
            'width': '240px',
            'top': '40px',
            'left': '50px',
            'z-index': '9999',
        });
    },
    () => {
        $('#onigiri1').css({
            'width': '198px',
            'top': '80px',
            'left': '70px',
            'z-index': '2',
        });
    }
);
$('#onigiri2').hover(
    () => {
        $('#onigiri2').css({
            'width': '240px',
            'top': '120px',
            'z-index': '9999',
        });
    },
    () => {
        $('#onigiri2').css({
            'width': '198px',
            'top': '160px',
            'z-index': '2',
        });
    }
);
$('input').hover(
    function(){
        $(this).css({
            'border': '#F73859 1px solid',
        });
    },
    function(){
        $(this).css({
            'border': '#fff 1px solid',
        });
    }
);
$('button').hover(
    () => {
        $('button').css({
            'background-color': '#F73859',
        });
    },
    () => {
        $('button').css({
            'background-color': '#fff',

        });
    }
);