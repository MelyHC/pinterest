import React, { Component, Fragment } from 'react';
import './App.css';
import data from './data/img.json';

import Header from './component/Header';
import Modal from './component/Modal';

class App extends Component {

  state = {
    dataImg: [],
    category: [],
    search: '',
    imgSelected: {
      name: '',
      img: ''
    },
    limit: 20
  }

  componentDidMount() {
    const { limit } = this.state;
    const arr = [];
    let count = 0;

    data.forEach((img, i) => {
      if (i < limit) {
        arr.push(img)
      }
    });

    this.setState({ dataImg: arr });
  }

  componentDidUpdate() {
    const { limit, dataImg } = this.state;
    let count = 0;

    window.addEventListener('scroll', () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

        data.forEach((img, i) => {
          if (count < limit) {
            count++;
            dataImg.push(img);
          }
        })
        this.setState({ dataImg })
      }
    })
  }


  // updateImgSelected = (imgSelected) => this.setState({ imgSelected })

  render() {
    const { dataImg } = this.state;

    return (
      <Fragment>
        <Header />
        <div className="ro m-0">
          <div className="card-columns grid-gallery px-4 m-car">
            {
              dataImg.length ?
                dataImg.map((everyImg, i) =>
                  <div className="card grid-gallery__item rounded-xl border-0" data-toggle="modal" data-target={`#${everyImg.name}`} key={`${everyImg.name}${i}`}>
                    <img className="card-img rounded-xl zoom-in grid-gallery__image" src={everyImg.img} alt={`${i}`} />
                    <Modal imgSelected={everyImg} />
                  </div>)
                : <p>Cargando ...</p>
            }
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
