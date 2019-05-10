import React, { Component } from 'react'

export default class Weather extends Component {

  componentDidMount() {
    const { begin } = this.props;
    begin();
    this.getWeather();
    this.intervalId = setInterval(() => this.getWeather(), 10000);
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  };

  getWeather = () => {
    const { success, failed } = this.props;
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Thanh pho Ho Chi Minh&appid=8e6bc4c2ba46936256cc22286ccc4dc7')
      .then(res => res.json())
      .then(
        (json) => {
          success(json);
        },
        (error) => {
          failed(error);
        }
      );
  };

  render() {
    const { isLoaded, items, error } = this.props;
    if (error) {
      return <div>Error: {error.message}</div>
    }
    if (isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div><b>Tên quốc gia:</b> {items.sys.country}</div>
        <div><b>Tên thành phố:</b> {items.name}</div>
        <div><b>Kinh độ:</b> {items.coord.lat}</div>
        <div><b>Vĩ độ:</b> {items.coord.lon}</div>
        <div><b>Nhiệt độ hiện tại:</b> {items.main.temp}</div>
        <div><b>Sức gió:</b> {items.wind.speed}</div>
        <div><b>Thời tiết:</b> {items.weather.description}</div>
        <div><b>Độ ẩm:</b> {items.main.humidity}</div>
      </div>
    );
  }
}

