import React from 'react';
import {View, Image, Text, PanResponder} from 'react-native';
import LIKE_ICON from '../assets/images/like_icon.png';
import LOVE_ICON from '../assets/images/love_icon.png';
import HAHA_ICON from '../assets/images/haha_icon.png';
import YAY_ICON from '../assets/images/yay_icon.png';
import WOW_ICON from '../assets/images/wow_icon.png';
import SAD_ICON from '../assets/images/sad_icon.png';
import ANGRY_ICON from '../assets/images/angry_icon.png';

var selectedGesture = '';
export default class LikeButton extends React.Component {
  constructor() {
    super();
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
      onStartShouldSetPanResponderCapture: (event, gestureState) => true,
      onMoveShouldSetPanResponder: (event, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (event, gestureState) => true,
      onPanResponderGrant: (event, gestureState) => true,
      onPanResponderMove: (event, gestureState) => {
        this.setState({
          valueX: event.nativeEvent.pageX,
          valueY: event.nativeEvent.pageY,
        });
      },
      onPanResponderRelease: (event, gestureState) => {
        this.setSelectedImage();
      },
      onPanResponderStart: (event, gestureState) => {
        this.setState({
          valueX: event.nativeEvent.pageX,
          valueY: event.nativeEvent.pageY,
        });
      },
    });
    this.state = {
      valueX: 0,
      valueY: 0,
      onGestureRelease: true,
    };
    selectedGesture = '';

    this.setSelectedImage = this.setSelectedImage.bind(this);
  }

  setSelectedImage() {
    this.props.onChange(selectedGesture);
  }

  checkIfTouchGestureIn(axisX, axisY, height, width, selectedGestureString) {
    var currentAxisX = this.state.valueX;
    var currentAxisY = this.state.valueY;
    var isOutSideOfParent =
      currentAxisX > this.state.mainLayoutX &&
      currentAxisX < this.state.mainLayoutX + this.state.mainLayoutWidth &&
      currentAxisY > this.state.mainLayoutY &&
      currentAxisY < this.state.mainLayoutY + this.state.mainLayoutHeight;
    var isSelectedGesture =
      currentAxisX > axisX &&
      currentAxisX < axisX + width &&
      currentAxisY > axisY &&
      currentAxisY < axisY + height;

    if (isSelectedGesture) {
      selectedGesture = selectedGestureString;
    } else if (!isOutSideOfParent) {
      selectedGesture = '';
    }
    return isSelectedGesture;
  }

  render() {
    return (
      <View
        style={{
          borderRadius: 8,
          backgroundColor: 'white',
          paddingBottom: 8,
          paddingTop: 8,
          elevation: 8,
        }}
        onLayout={event => {
          const layout = event.nativeEvent.layout;
          this.setState({
            mainLayoutHeight: layout.height,
            mainLayoutWidth: layout.width,
            mainLayoutX: layout.x,
            mainLayoutY: layout.y,
          });
        }}
        {...this.panResponder.panHandlers}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              this.setState({
                likeButtonHeight: layout.height,
                likeButtonWidth: layout.width,
                likeButtonX: layout.x,
                likeButtonY: layout.y,
              });
            }}>
            <Image
              style={{
                height: this.checkIfTouchGestureIn(
                  this.state.likeButtonX,
                  this.state.likeButtonY,
                  this.state.likeButtonHeight,
                  this.state.likeButtonWidth,
                  'Like',
                )
                  ? 50
                  : 30,
                resizeMode: 'contain',
              }}
              source={LIKE_ICON}
            />
            <Text
              style={{
                color: 'grey',
                fontSize: 10,
                margin: 4,
              }}>
              Like
            </Text>
          </View>

          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              this.setState({
                loveButtonHeight: layout.height,
                loveButtonWidth: layout.width,
                loveButtonX: layout.x,
                loveButtonY: layout.y,
              });
            }}>
            <Image
              style={{
                height: this.checkIfTouchGestureIn(
                  this.state.loveButtonX,
                  this.state.loveButtonY,
                  this.state.loveButtonHeight,
                  this.state.loveButtonWidth,
                  'Love',
                )
                  ? 50
                  : 30,
                resizeMode: 'contain',
              }}
              source={LOVE_ICON}
            />
            <Text
              style={{
                color: 'grey',
                fontSize: 10,
                margin: 4,
              }}>
              Love
            </Text>
          </View>

          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              this.setState({
                hahaButtonHeight: layout.height,
                hahaButtonWidth: layout.width,
                hahaButtonX: layout.x,
                hahaButtonY: layout.y,
              });
            }}>
            <Image
              style={{
                height: this.checkIfTouchGestureIn(
                  this.state.hahaButtonX,
                  this.state.hahaButtonY,
                  this.state.hahaButtonHeight,
                  this.state.hahaButtonWidth,
                  'Haha',
                )
                  ? 50
                  : 30,
                resizeMode: 'contain',
              }}
              source={HAHA_ICON}
            />
            <Text
              style={{
                color: 'grey',
                fontSize: 10,
                margin: 4,
              }}>
              Haha
            </Text>
          </View>

          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              this.setState({
                yayButtonHeight: layout.height,
                yayButtonWidth: layout.width,
                yayButtonX: layout.x,
                yayButtonY: layout.y,
              });
            }}>
            <Image
              style={{
                height: this.checkIfTouchGestureIn(
                  this.state.yayButtonX,
                  this.state.yayButtonY,
                  this.state.yayButtonHeight,
                  this.state.yayButtonWidth,
                  'Yay',
                )
                  ? 50
                  : 30,
                resizeMode: 'contain',
              }}
              source={YAY_ICON}
            />
            <Text
              style={{
                color: 'grey',
                fontSize: 10,
                margin: 4,
              }}>
              Yay
            </Text>
          </View>

          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              this.setState({
                wowButtonHeight: layout.height,
                wowButtonWidth: layout.width,
                wowButtonX: layout.x,
                wowButtonY: layout.y,
              });
            }}>
            <Image
              style={{
                height: this.checkIfTouchGestureIn(
                  this.state.wowButtonX,
                  this.state.wowButtonY,
                  this.state.wowButtonHeight,
                  this.state.wowButtonWidth,
                  'Wow',
                )
                  ? 50
                  : 30,
                resizeMode: 'contain',
              }}
              source={WOW_ICON}
            />
            <Text
              style={{
                color: 'grey',
                fontSize: 10,
                margin: 4,
              }}>
              Wow
            </Text>
          </View>

          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              this.setState({
                sadButtonHeight: layout.height,
                sadButtonWidth: layout.width,
                sadButtonX: layout.x,
                sadButtonY: layout.y,
              });
            }}>
            <Image
              style={{
                height: this.checkIfTouchGestureIn(
                  this.state.sadButtonX,
                  this.state.sadButtonY,
                  this.state.sadButtonHeight,
                  this.state.sadButtonWidth,
                  'Sad',
                )
                  ? 50
                  : 30,
                resizeMode: 'contain',
              }}
              source={SAD_ICON}
            />
            <Text
              style={{
                color: 'grey',
                fontSize: 10,
                margin: 4,
              }}>
              Sad
            </Text>
          </View>

          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              this.setState({
                angryButtonHeight: layout.height,
                angryButtonWidth: layout.width,
                angryButtonX: layout.x,
                angryButtonY: layout.y,
              });
            }}>
            <Image
              style={{
                height: this.checkIfTouchGestureIn(
                  this.state.angryButtonX,
                  this.state.angryButtonY,
                  this.state.angryButtonHeight,
                  this.state.angryButtonWidth,
                  'Angry',
                )
                  ? 50
                  : 30,
                resizeMode: 'contain',
              }}
              source={ANGRY_ICON}
            />
            <Text
              style={{
                color: 'grey',
                fontSize: 10,
                margin: 4,
              }}>
              Angry
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
