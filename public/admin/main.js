//pages changing
$('.FilingCon').append(
  `            <div class="FilingCon_Statistics">
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
              <div class="statictics_el_number">163</div>
              <div class="statictics_el_text">finished orders</div>
          </div>
          <div class="statictics_el">
              <div class="statictics_el_number">73</div>
              <div class="statictics_el_text">home deliveries</div>
          </div>
          <div class="statictics_el">
              <div class="statictics_el_number">6</div>
              <div class="statictics_el_text">complaints</div>
          </div>
          <div class="statictics_el">
              <div class="statictics_el_number">52</div>
              <div class="statictics_el_text">good reviews</div>
          </div>
      </div>

      </div>
</div>
`
)

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
  