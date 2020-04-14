const app = {
  state: {
    interval: 0
  },
  initialize: function () {
    $('.win-money-text').click(function () {
      $(this).text('HAHA gotcha');     
    });
    $('.square').hover(function () {
      $(this).toggleClass('transform')
    });
    $('.circle').click(function () {
      $(this).toggleClass('circle').toggleClass("square")
      $(this).attr('class') === 'square' ? 
        $(this).html('<rect width="100" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />'):
        $(this).html('<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />');     
    });
    $('.star').click(function () {
      app.changeColors(this);
    });
    $('.get-color-button').click(function () {
      app.getCurrentStarColor();
    })
  },

  changeColors: function(that) {
    const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
      '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']
    const { interval } = app.state;
    if (interval) {
      clearInterval(interval);
      app.state.interval = 0;
    } else {
      app.state.interval = setInterval(function() {
        let color = colorArray[Math.floor(Math.random()*colorArray.length)]
        $(that).css('fill', color)
      }, 250);
    }
  },

  getCurrentStarColor: function() {
    const currentColor = $('.star').css('fill')
    $('.current-color').text(`The current color is ${currentColor}`);
  }


}