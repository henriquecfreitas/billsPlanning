import { Dimensions, Platform, PixelRatio } from 'react-native';

const BASE_DEVICE_WIDTH = 390 // iPhone 10

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window')

const scale = SCREEN_WIDTH / BASE_DEVICE_WIDTH

function normalizeFontSize(size: number) {
  const newSize = size * scale 
  return (
    Math.round(PixelRatio.roundToNearestPixel(newSize))
    + (Platform.OS === 'ios' ? -2 : 0)
  )
}

export {
  normalizeFontSize,
  scale,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
}
