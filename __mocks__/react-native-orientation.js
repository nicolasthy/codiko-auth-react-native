const rno = require('react-native-orientation')
jest.mock('react-native-orientation', () => {
  return {
    lockToPortrait: jest.fn(),
    lockToLandscape: jest.fn(),
    lockToLandscapeLeft: jest.fn(),
    unlockAllOrientations: jest.fn()
  };
});
module.exports = rno
