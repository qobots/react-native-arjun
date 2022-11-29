import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

// iphone 11 Pro / X
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scaling = size => width / guidelineBaseWidth * size;

export { scaling };