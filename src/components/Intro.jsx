import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import GoogleButton from 'react-google-button';
import Switch from "react-switch";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
//mport DatePicker from 'react-native-datepicker';

class Intro extends React.Component {
    //constructor(props){
        //super(props)
        //this.state = {date:"2016-05-15"}
    //}

    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    };
    
    handleChange(checked) {
        this.setState({ checked });
    };

    render() {
        return <div> <AwesomeSlider
            media={[
          {
            source: 'https://i.pinimg.com/564x/c9/98/26/c99826f18818d702e30cc03240eefeec.jpg',
          },
          {
            source: 'https://i.pinimg.com/474x/c0/7b/a4/c07ba4467f0745f95c2050dd4b4de7d7.jpg',
          },
          {
            source: 'https://i.pinimg.com/474x/84/e2/2f/84e22fa555aef44e1f1b4505868fc3de.jpg',
          },
          {
            source: 'https://i.pinimg.com/474x/33/49/af/3349af74d9d2fd2c66f8a0033f0b967c.jpg',
          },
          {
            source: 'https://i.pinimg.com/474x/67/2f/d5/672fd5c33b7e102f298efece33566826.jpg',
          },
        ]}
      />
      <GoogleButton
        onClick={() => { console.log('Google button clicked') }} />
        <label>
            <Switch onChange={this.handleChange} checked={this.state.checked} />
        </label> 
        <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="https://i.pinimg.com/564x/c9/98/26/c99826f18818d702e30cc03240eefeec.jpg" srcSet="https://i.pinimg.com/474x/c0/7b/a4/c07ba4467f0745f95c2050dd4b4de7d7.jpg" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="https://i.pinimg.com/474x/c0/7b/a4/c07ba4467f0745f95c2050dd4b4de7d7.jpg" srcSet="https://i.pinimg.com/474x/33/49/af/3349af74d9d2fd2c66f8a0033f0b967c.jpg" alt="Image two" />}
        />
    </div>
    };
};

export default Intro;