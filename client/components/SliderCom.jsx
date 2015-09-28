var SliderItem = React.createClass({

  render: function() {

    return (
      <div className={"slider-item " + this.props.itemColor}>
          <h1>{this.props.text}</h1>
      </div>
    );
  }

});

SliderCom = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><SliderItem text="哈哈红色的" itemColor="item-color-red" /></div>
        <div><SliderItem text="哈哈绿色的" itemColor="item-color-green" /></div>
        <div><SliderItem text="哈哈黄色的" itemColor="item-color-yellow" /></div>
        <div><SliderItem text="哈哈粉色的" itemColor="item-color-pink" /></div>
        <div><SliderItem text="哈哈蓝色的" itemColor="item-color-blue" /></div>
      </Slider>
    );
  }
});