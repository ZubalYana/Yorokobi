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