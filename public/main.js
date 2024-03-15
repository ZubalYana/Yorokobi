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

// $('#menu').click(() => {
//     axios.get('/menu')
//         .then(response => {
//             $('.wrap').html(response.data); 
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// });
