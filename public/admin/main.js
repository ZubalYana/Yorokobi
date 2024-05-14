//pages changing
$('.FilingCon').append(
  `<div class="FilingCon_Statistics">
  <div class="charts">
      <div id="profitsReport">
          <canvas id="myLineChart"></canvas>
      </div>
      <div id="dishesReport">
          <canvas id="myChart"></canvas>
        </div>
  </div>
  <div class="separativeLine_con">
      <div class="separativeLine"></div>
  </div>
    <div class="statictics">
      <div class="statictics_title">This mounth the restaurant has had:</div>
      <div class="statictics_elements">
      <div class="statictics_el">
      <div class="statictics_el_number" id="finishedOrdersNum" data-end-value="163">0</div>
      <div class="statictics_el_text">finished orders</div>
  </div>
  <div class="statictics_el">
      <div class="statictics_el_number" id="homeDeliversNum" data-end-value="73">0</div>
      <div class="statictics_el_text">home deliveries</div>
  </div>
  <div class="statictics_el">
      <div class="statictics_el_number" id="complaintsNum" data-end-value="6">0</div>
      <div class="statictics_el_text">complaints</div>
  </div>
  <div class="statictics_el">
      <div class="statictics_el_number" id="goodReviewsNum" data-end-value="52">0</div>
      <div class="statictics_el_text">good reviews</div>
  </div>
  
      </div>

      </div>
</div>
`
)
function animateCount(element, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let timer = setInterval(function() {
      current += increment;
      $(element).text(current);
      if (current === end) {
          clearInterval(timer);
      }
  }, stepTime);
}
function startCountAnimationOnScroll() {
  let windowHeight = $(window).height();
  let scrollPosition = $(window).scrollTop();

  $('.statictics_el').each(function() {
      let offset = $(this).offset().top;
      if (scrollPosition + windowHeight >= offset) {
          let elementId = $(this).find('.statictics_el_number').attr('id');
          let startValue = 0;
          let endValue = parseInt($(this).find('.statictics_el_number').data('end-value'));
          let animationDuration = 2000; 
          animateCount("#" + elementId, startValue, endValue, animationDuration);
      }
  });
}
$(document).ready(function() {
  startCountAnimationOnScroll();

  $(window).on('scroll', function() {
      startCountAnimationOnScroll();
  });
});
$('#statistic').css('color', '#F73859')
$('#statistic').click(()=>{
  $('.FilingCon').empty();
  $('.FilingCon').append(
    `<div class="FilingCon_Statistics">
    <div class="charts">
        <div id="profitsReport">
            <canvas id="myLineChart"></canvas>
        </div>
        <div id="dishesReport">
            <canvas id="myChart"></canvas>
          </div>
    </div>
    <div class="separativeLine_con">
        <div class="separativeLine"></div>
    </div>
      <div class="statictics">
        <div class="statictics_title">This mounth the restaurant has had:</div>
        <div class="statictics_elements">
        <div class="statictics_el">
        <div class="statictics_el_number" id="finishedOrdersNum" data-end-value="163">0</div>
        <div class="statictics_el_text">finished orders</div>
    </div>
    <div class="statictics_el">
        <div class="statictics_el_number" id="homeDeliversNum" data-end-value="73">0</div>
        <div class="statictics_el_text">home deliveries</div>
    </div>
    <div class="statictics_el">
        <div class="statictics_el_number" id="complaintsNum" data-end-value="6">0</div>
        <div class="statictics_el_text">complaints</div>
    </div>
    <div class="statictics_el">
        <div class="statictics_el_number" id="goodReviewsNum" data-end-value="52">0</div>
        <div class="statictics_el_text">good reviews</div>
    </div>
    
        </div>
  
        </div>
  </div>
  `
  )
  function animateCount(element, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let timer = setInterval(function() {
        current += increment;
        $(element).text(current);
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
  }
  function startCountAnimationOnScroll() {
    let windowHeight = $(window).height();
    let scrollPosition = $(window).scrollTop();
    $('.statictics_el').each(function() {
        let offset = $(this).offset().top;
        if (scrollPosition + windowHeight >= offset) {
            let elementId = $(this).find('.statictics_el_number').attr('id');
            let startValue = 0;
            let endValue = parseInt($(this).find('.statictics_el_number').data('end-value'));
            let animationDuration = 2000; 
            animateCount("#" + elementId, startValue, endValue, animationDuration);
        }
    });
  }
  $(document).ready(function() {
    startCountAnimationOnScroll();
  
    $(window).on('scroll', function() {
        startCountAnimationOnScroll();
    });
  });

  $('#statistic').css('color', '#F73859')
  $('#orders').css('color', '#fff')
  $('#complaints').css('color', '#fff')
  $('#dishes_availability').css('color', '#fff')
  $('#products').css('color', '#fff')
  $('#review').css('color', '#fff')
  $('#help').css('color', '#fff')

  let ctx = document.getElementById('myLineChart').getContext('2d');
  let myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['01.04', '02.04', '03.04', '04.04', '05.04', '06.04', '07.04', '08.04', '09.04', '10.04', '11.04', '12.04', '13.04', '14.04', '15.04', '16.04', '17.04', '18.04', '19.04', '20.04'],
          datasets: [{
              label: 'Profit',
              data: [98, 239, 487, 312, 695, 252, 768, 675, 523, 893, 931, 578, 1247, 688, 843, 674, 478, 366, 473, 758],
              backgroundColor: '#F73859', 
              borderColor: '#fff', 
              borderWidth: 2
          }]
      },
      options: {
          plugins: {
              title: {
                  display: true,
                  text: 'Mouth profits report',
                  color: '#F73859',
                  fontFamily: 'MuseoModerno',
                  fontSize: '24px'
              },
              legend: {
                  display: false,

              },
          }
      }
  });

  const ctx2 = document.getElementById('myChart');
  new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Sushi', 'Soba', 'Ramen', 'Snacks', 'Drinks'],
        datasets: [{
          label: 'Sales',
          data: [102, 74, 45, 89, 120],
          backgroundColor: [
              '#F73859',  
            ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Mouth dishes report',
            color: '#F73859',
            fontFamily: 'MuseoModerno',
            fontSize: '24px'
          },
          legend: {
              display: false,

          },
        }
      }
    });
    
});
$('#orders').click(()=>{
  $('.FilingCon').empty();
  $('.FilingCon').append(
    `<div class="FilingCon_Orders">
    <h1>Recent orders:</h1>
    <div class="ordersContainer">
    <div class="order">
    <div class="order_imgCon">
    <img src="./imgs/sushi 1.png" alt="" class="order_img">
    </div>
    <div class="order_basicInfo">
    <div class="order_dishName">Soho sushi</div>
    <div class="order_id">#763291563</div>
</div>
<div class="order_customerInfo">
<div class="order_customerName">Alexa Tuner</div>
<div class="order_customerPhone">+096 898 34 82</div>
</div>
<div class="order_typeInfo">
<div class="order_type">In the restaurant</div>
<div class="order_additionalType">Table №14</div>
</div>
<div class="order_price">$7.00</div>
<select id="dishStatus">
    <option value="inProgress">In progress</option>
    <option value="accepted">Accepted </option>
    <option value="canceled">Canceled</option>

</select>
    </div>

    <div class="order">
    <div class="order_imgCon">
    <img src="./imgs/sushi 18.png" alt="" class="order_img">
    </div>
    <div class="order_basicInfo">
    <div class="order_dishName">Soho sushi</div>
    <div class="order_id">#763291563</div>
</div>
<div class="order_customerInfo">
<div class="order_customerName">Alexa Tuner</div>
<div class="order_customerPhone">+096 898 34 82</div>
</div>
<div class="order_typeInfo">
<div class="order_type">In the restaurant</div>
<div class="order_additionalType">Table №14</div>
</div>
<div class="order_price">$7.00</div>
<select id="dishStatus">
    <option value="inProgress">In progress</option>
    <option value="accepted">Accepted </option>
    <option value="canceled">Canceled</option>

</select>
    </div>


    <div class="order">
    <div class="order_imgCon">
    <img src="./imgs/sushi 30.png" alt="" class="order_img">
    </div>
    <div class="order_basicInfo">
    <div class="order_dishName">Soho sushi</div>
    <div class="order_id">#763291563</div>
</div>
<div class="order_customerInfo">
<div class="order_customerName">Alexa Tuner</div>
<div class="order_customerPhone">+096 898 34 82</div>
</div>
<div class="order_typeInfo">
<div class="order_type">In the restaurant</div>
<div class="order_additionalType">Table №14</div>
</div>
<div class="order_price">$7.00</div>
<select id="dishStatus">
    <option value="inProgress">In progress</option>
    <option value="accepted">Accepted </option>
    <option value="canceled">Canceled</option>

</select>
    </div>
    </div>
    </div>
`
  )
  $('#orders').css('color', '#F73859')
  $('#statistic').css('color', '#fff')
  $('#complaints').css('color', '#fff')
  $('#dishes_availability').css('color', '#fff')
  $('#products').css('color', '#fff')
  $('#review').css('color', '#fff')
  $('#help').css('color', '#fff')

})
$('#complaints').click(()=>{
  $('.FilingCon').empty();
  $('.FilingCon').append(
    `<div class="FilingCon_Complaints">
    <h1>Recent complaints</h1>
    <div class="FilingCon_ComplaintsContainer">
    <div class="complaint">
        <div class="complaint_author">
            <img class="complaint_author_picture" src="./imgs/userIcon.png" alt="">
            <div class="complaint_nameTimeCon">
                <div class="complaint_time">3 min ago</div>
                <div class="complaint_name">Wilder Scott</div>
            </div>
        </div>
        <h5>Type of complaint:</h5>
        <div class="complaint_types">
            <div class="complaint_type">Service</div>
            <div class="complaint_type">Other guests </div>
        </div>
        <h5>Text of complaint:</h5>
        <div class="complaint_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna velit, iaculis sed faucibus eu, auctor at magna. Aliquam vestibulum justo pulvinar enim mollis, in dapibus elit lacinia. 
        </div>
    </div>

    <div class="complaint">
    <div class="complaint_author">
        <img class="complaint_author_picture" src="./imgs/userIcon.png" alt="">
        <div class="complaint_nameTimeCon">
            <div class="complaint_time">3 min ago</div>
            <div class="complaint_name">Wilder Scott</div>
        </div>
    </div>
    <h5>Type of complaint:</h5>
    <div class="complaint_types">
        <div class="complaint_type">Service</div>
        <div class="complaint_type">Other guests </div>
    </div>
    <h5>Text of complaint:</h5>
    <div class="complaint_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna velit, iaculis sed faucibus eu, auctor at magna. Aliquam vestibulum justo pulvinar enim mollis, in dapibus elit lacinia. 
    </div>
</div>

<div class="complaint">
<div class="complaint_author">
    <img class="complaint_author_picture" src="./imgs/userIcon.png" alt="">
    <div class="complaint_nameTimeCon">
        <div class="complaint_time">3 min ago</div>
        <div class="complaint_name">Wilder Scott</div>
    </div>
</div>
<h5>Type of complaint:</h5>
<div class="complaint_types">
    <div class="complaint_type">Service</div>
    <div class="complaint_type">Other guests </div>
</div>
<h5>Text of complaint:</h5>
<div class="complaint_text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna velit, iaculis sed faucibus eu, auctor at magna. Aliquam vestibulum justo pulvinar enim mollis, in dapibus elit lacinia. 
</div>
</div>
</div>
     </div>`
  )
  $('#orders').css('color', '#fff')
  $('#statistic').css('color', '#fff')
  $('#dishes_availability').css('color', '#fff')
  $('#complaints').css('color', '#F73859')
  $('#products').css('color', '#fff')
  $('#review').css('color', '#fff')
  $('#help').css('color', '#fff')
})
$('#dishes_availability').click(()=>{
  $('.FilingCon').empty();
  $('.FilingCon').append(
    `<div class="FilingCon_Dishes_availability">Dishes Availability here</div>`
  )
  $('#orders').css('color', '#fff')
  $('#statistic').css('color', '#fff')
  $('#complaints').css('color', '#fff')
  $('#dishes_availability').css('color', '#F73859')
  $('#products').css('color', '#fff')
  $('#review').css('color', '#fff')
  $('#help').css('color', '#fff')


})
$('#products').click(()=>{
  $('.FilingCon').empty();
  $('.FilingCon').append(
    `<div class="FilingCon_products">Products here</div>`
  )
  $('#orders').css('color', '#fff')
  $('#statistic').css('color', '#fff')
  $('#complaints').css('color', '#fff')
  $('#dishes_availability').css('color', '#fff')
  $('#products').css('color', '#F73859')
  $('#review').css('color', '#fff')
  $('#help').css('color', '#fff')

})
$('#review').click(()=>{
  $('.FilingCon').empty();
  $('.FilingCon').append(
    $('.FilingCon').append(
      `
      <div class="FilingCon_Reviews">
    <h1>Recent reviews</h1>
    <div class="FilingCon_reviewsContainer">
    <div class="review">
        <div class="review_author">
            <img class="review_author_picture" src="./imgs/userIcon.png" alt="">
            <div class="review_nameTimeCon">
                <div class="review_time">3 min ago</div>
                <div class="review_name">Wilder Scott</div>
            </div>
        </div>
        <div class="review_starsCon">
            <div class="review_starsQuolity">
                Service
                <div class="review_starsQuolity_stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div class="review_starsQuolity">
                Food:
                <div class="review_starsQuolity_stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div class="review_starsQuolity">
                Speed:
                <div class="review_starsQuolity_stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
            </div>
            <div class="review_starsQuolity">
                Interior:
                <div class="review_starsQuolity_stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
        <div class="review_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna velit, iaculis sed faucibus eu, auctor at magna. Aliquam vestibulum justo pulvinar enim mollis, in dapibus elit lacinia. 
        </div>
    </div>
    </div>
</div>
      `
    )
  )
  $('#orders').css('color', '#fff')
  $('#statistic').css('color', '#fff')
  $('#complaints').css('color', '#fff')
  $('#dishes_availability').css('color', '#fff')
  $('#products').css('color', '#fff')
  $('#review').css('color', '#F73859')
  $('#help').css('color', '#fff')


})
$('#help').click(()=>{
  $('.FilingCon').empty();
  $('.FilingCon').append(
    `<div class="FilingCon_help">
    <img class="FilingCon_help_decoration" src="./imgs/help decoration.png" alt="">
    <img class="FilingCon_help_plane" src="./imgs/paper-plane.png" alt="">
    <div class="FilingCon_help_InfoCon">
    <h1>Get help</h1>
<div class="FilingCon_help_description">Yorokobi headquarters are always in connection to help you to deal with all kinds of difficult problems! There is how can you connects us with any questions or help requests. We are available 24 hours a day, 7 days a week!</div>
<div class="FilingCon_help_contacts">
    <div class="FilingCon_help_contact">
        <i class="fa-solid fa-location-dot"></i>
        <div class="FilingCon_help_contactText">5-8 Kamiyamachō, Shibuya City, Tokyo 150-0047, Japan</div>
    </div>
    <div class="FilingCon_help_contact">
        <i class="fa-solid fa-phone"></i>
        <div class="FilingCon_help_contactText">+( 81 )03-3224-9999, +( 81 )03-3466-2222</div>
    </div>
    <div class="FilingCon_help_contact">
        <i class="fa-brands fa-instagram"></i>
        <div class="FilingCon_help_contactText">@Yorokobi_JapanOff</div>
    </div>
    <div class="FilingCon_help_contact">
        <i class="fa-brands fa-telegram"></i>
        <div class="FilingCon_help_contactText">@Yorokobi_JapanOff_bot</div>
    </div>
</div>
</div>
    </div>`
  )
  $('#orders').css('color', '#fff')
  $('#statistic').css('color', '#fff')
  $('#complaints').css('color', '#fff')
  $('#dishes_availability').css('color', '#fff')
  $('#products').css('color', '#fff')
  $('#review').css('color', '#fff')
  $('#help').css('color', '#F73859')

  //house and plane animation
// $('.FilingCon_help_decoration').click(() => {
//   $('.FilingCon_help_plane').css('width', '23px')
//   setTimeout(() => {
//     $('.FilingCon_help_plane').css('top', '230px')
//     $('.FilingCon_help_plane').css('right', '310px')
//     $('.FilingCon_help_plane').css('transform', 'rotate(40deg)')
//   }, 2000);
//   setTimeout(() => {
//     $('.FilingCon_help_plane').css('top', '180px')
//     $('.FilingCon_help_plane').css('right', '350px')
//     $('.FilingCon_help_plane').css('transform', 'rotate(60deg)')
//   }, 4000);
//   setTimeout(() => {
//     $('.FilingCon_help_plane').css('top', '180px')
//     $('.FilingCon_help_plane').css('right', '350px')
//     $('.FilingCon_help_plane').css('transform', 'rotate(-60deg)')
//   }, 5000);
// });
$('.FilingCon_help_decoration').click(() => {
  $('.FilingCon_help_plane').css('width', '23px')

  $('.FilingCon_help_plane').css('top', '230px');
  $('.FilingCon_help_plane').css('right', '310px');
  $('.FilingCon_help_plane').css('transform', 'rotate(40deg)');

  setTimeout(() => {
    $('.FilingCon_help_plane').css('top', '180px');
    $('.FilingCon_help_plane').css('right', '350px');
    $('.FilingCon_help_plane').css('transform', 'rotate(60deg)');
  }, 1000);

  setTimeout(() => {
    $('.FilingCon_help_plane').css('transform', 'rotate(-60deg)');
  }, 1500);
  setTimeout(() => {
    $('.FilingCon_help_plane').css('top', '250px');
    $('.FilingCon_help_plane').css('right', '380px');
    $('.FilingCon_help_plane').css('transform', 'rotate(-60deg)');
  }, 2000);
});

})

//line chart code
document.addEventListener('DOMContentLoaded', function () {
    let ctx = document.getElementById('myLineChart').getContext('2d');
    let myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01.04', '02.04', '03.04', '04.04', '05.04', '06.04', '07.04', '08.04', '09.04', '10.04', '11.04', '12.04', '13.04', '14.04', '15.04', '16.04', '17.04', '18.04', '19.04', '20.04'],
            datasets: [{
                label: 'Profit',
                data: [98, 239, 487, 312, 695, 252, 768, 675, 523, 893, 931, 578, 1247, 688, 843, 674, 478, 366, 473, 758],
                backgroundColor: '#F73859', // Area fill color
                borderColor: '#fff', // Line color
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                // yAxes: [{
                //     ticks: {
                //         beginAtZero: true
                //     }
                // }],
            },

            plugins: {
                title: {
                    display: true,
                    text: 'Mouth profits report',
                    color: '#F73859',
                    fontFamily: 'MuseoModerno',
                    fontSize: '24px'
                },
                legend: {
                    display: false,

                },
            }
        }
    });
});

//colums chart code
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Sushi', 'Soba', 'Ramen', 'Snacks', 'Drinks'],
          datasets: [{
            label: 'Sales',
            data: [102, 74, 45, 89, 120],
            backgroundColor: [
                '#F73859',  
              ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            title: {
              display: true,
              text: 'Mouth dishes report',
              color: '#F73859',
              fontFamily: 'MuseoModerno',
              fontSize: '24px'
            },
            legend: {
                display: false,

            },
          }
        }
      });
      
});
  