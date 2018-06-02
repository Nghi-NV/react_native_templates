# React Native template

---
  create by NghiNguyen
---

## Installation

### Instructions

1. Run `yarn install`
2. Run `react-native link`
3. Run `cd ios && pod install` 

### Rename project
follow steps to rename project:
  
1. Run `yarn global add react-native-rename`
2. cd to project dir
3. Run `react-native-rename <newName>`

### Automation create screen

- Run `npm run generate` and follow to step by step

## Antipatterns

- Do not use setState() in componentWillMount()
- Do not perform any logic in render() function
- Do not use indexes of an array as its keys
- Do not validate forms with redux store
- Do not perform any logic in reducers
- Do not perform too much dispatches
- Do not rely on JS single thread
- Do not use x-index a lot
- Do not use ListView, use FlatList instead
- Remove console.log() calls
- Do not use object literals in render()
- Reduce render() function calls
- Use InteractionManager.runAfterInteractions() to perform any hard stuff
- Use requestAnimationFrame to perform animations
- Extend React.PureComponent as much as possible
- Use shouldRasterizeIOS
- Use renderToHardwareTextureAndroid
- Do not perform any logic in componentWillMount()
- Use useNativeDriver
- Don't use toJS() with immutable to avoid creation unnecessary object.
