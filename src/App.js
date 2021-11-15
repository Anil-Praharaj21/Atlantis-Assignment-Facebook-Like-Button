import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import LikeButton from './components/LikeButton';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showReaction: false,
      imageSelected: '',
    };

    this.setSelectedImage = this.setSelectedImage.bind(this);
  }

  setSelectedImage(value) {
    var image;
    switch (value) {
      case 'Like':
        image = require('./assets/images/like_icon.png');
        break;

      case 'Love':
        image = require('./assets/images/love_icon.png');
        break;

      case 'Haha':
        image = require('./assets/images/haha_icon.png');
        break;

      case 'Yay':
        image = require('./assets/images/yay_icon.png');
        break;

      case 'Wow':
        image = require('./assets/images/wow_icon.png');
        break;

      case 'Sad':
        image = require('./assets/images/sad_icon.png');
        break;

      case 'Angry':
        image = require('./assets/images/angry_icon.png');
        break;

      default:
        image = require('./assets/images/deselected_like.png');
    }
    return image;
  }

  render() {
    return (
      <>
        <View>
          {this.state.showReaction ? (
            <LikeButton
              onChange={value => {
                this.setState({
                  imageSelected: value,
                  showReaction: false,
                });
              }}
            />
          ) : (
            <></>
          )}
          <TouchableOpacity
            onPress={() => {
              this.setState({
                showReaction: true,
              });
            }}>
            <View style={{flexDirection: 'row', padding: 8}}>
              <Image
                style={{
                  height: 24,
                  resizeMode: 'contain',
                }}
                source={
                  this.state.imageSelected && this.state.imageSelected !== ''
                    ? this.setSelectedImage(this.state.imageSelected)
                    : require('./assets/images/deselected_like.png')
                }
              />

              <Text
                style={{
                  color: 'grey',
                  fontSize: 18,
                  textAlignVertical: 'center',
                }}>
                Like
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default App;
