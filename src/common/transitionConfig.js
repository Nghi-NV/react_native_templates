/**
* Created by nghinv on Thu May 31 2018
* Copyright (c) 2018 nghinv
*/

export const transitionConfig = () => {
  return {
    screenInterpolator: sceneProps => {
      const { position, layout, scene, index, scenes } = sceneProps

      const thisSceneIndex = scene.index
      const height = layout.initHeight
      const width = layout.initWidth

      // We can access our navigation params on the scene's 'route' property
      var thisSceneParams = scene.route.params || {}

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [width, 0, 0]
      })

      const translateY = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [height, 0, 0]
      })

      const opacity = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex - 0.5, thisSceneIndex],
        outputRange: [0, 1, 1],
      })

      const scale = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [4, 1, 1]
      })

      const slideFromRight = { transform: [{ translateX }] }
      const scaleWithOpacity = { opacity, transform: [{ scaleX: scale }, { scaleY: scale }] }
      const slideInFromBottom = { transform: [{ translateY }] }
      if (scene.route.params.direction == 'horizontal')
        return slideInFromBottom
      if (scene.route.params.direction == 'vertical')
        return slideFromRight
      if (scene.route.params.direction == 'fade')
        return scaleWithOpacity
      return slideFromRight
    },
  }
}

export const getSceneStyle = (props) => ({
  // backgroundColor: 'black',
  shadowColor: null,
  shadowOffset: null,
  shadowOpacity: null,
  shadowRadius: null,
});
