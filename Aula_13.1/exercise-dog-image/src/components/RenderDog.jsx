import React from 'react';
import './RenderDog.css';

class RenderDog extends React.Component {
  constructor() {
    super();
    this.state = {
      imageURL: '',
      loading: true,
      previousImage: '',
      update: true
    }
    this.fetchImage = this.fetchImage.bind(this);
  }
  async fetchImage() {
    this.setState({ loading: true },
      async () => {
        const ApiResponse = await fetch('https://dog.ceo/api/breeds/image/random');
        const imageObj = await ApiResponse.json();
        // concertar quando aparece o Maldito Terrier
        if (imageObj.message.includes('terrier')) {
          alert('Terrier')
          this.setState({ update: false })
        } else {
          localStorage['image'] = imageObj.message;
          this.setState({
            update: true,
            previousImage: this.state.imageURL,
            imageURL: imageObj.message,
            loading: false
          })
        }
      }
    )
  }

  shouldComponentUpdate() {
    if (this.state.update) return true
    return false
  }
  componentDidUpdate() {
    // if (this.state.loading === false) alert('passou')
  }

  loading() {
    return (
      <p>... Loading</p>
    )
  }

  loadingImage() {
    return (
      <img src={this.state.imageURL} alt="Dog" />
    )
  }

  componentDidMount() {
    this.fetchImage();
  }

  render() {

    return (
      <div>
        { this.state.loading ? this.loading() : this.loadingImage()}
        <div>
          <button onClick={this.fetchImage} >Outro dog</button>
        </div>
      </div>
    )
  }
}

export default RenderDog;