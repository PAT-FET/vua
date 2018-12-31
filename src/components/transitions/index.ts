import { createSimpleTransition, createJavaScriptTransition } from '../../utils/helpers'
import expandTransition from './expandTransition'

const VFadeTransition = createSimpleTransition('fade-transition')
const VSwingTransition = createSimpleTransition('swing-transition')
const VMoveUpTransition = createSimpleTransition('move-up-transition')
const VMoveDownTransition = createSimpleTransition('move-down-transition')
const VMoveRightTransition = createSimpleTransition('move-right-transition')
const VMoveLeftTransition = createSimpleTransition('move-left-transition')
const VSlideUpTransition = createSimpleTransition('slide-up-transition')
const VSlideDownTransition = createSimpleTransition('slide-down-transition')
const VSlideRightTransition = createSimpleTransition('slide-right-transition')
const VSlideLeftTransition = createSimpleTransition('slide-left-transition')
const VZoomTransition = createSimpleTransition('zoom-transition')
const VZoomBigTransition = createSimpleTransition('zoom-big-transition')
const VZoomUpTransition = createSimpleTransition('zoom-up-transition')
const VZoomDownTransition = createSimpleTransition('zoom-down-transition')
const VZoomRightTransition = createSimpleTransition('zoom-right-transition')
const VZoomLeftTransition = createSimpleTransition('zoom-left-transition')
// TODO

// JavaScript transitions
const VExpandTransition = createJavaScriptTransition('expand-transition', expandTransition())

export {
  VFadeTransition,
  VSwingTransition,
  VMoveUpTransition,
  VMoveDownTransition,
  VMoveRightTransition,
  VMoveLeftTransition,
  VSlideUpTransition,
  VSlideDownTransition,
  VSlideRightTransition,
  VSlideLeftTransition,
  VZoomTransition,
  VZoomBigTransition,
  VZoomUpTransition,
  VZoomDownTransition,
  VZoomRightTransition,
  VZoomLeftTransition,
  VExpandTransition
}

const transitions = {
  VFadeTransition,
  VSwingTransition,
  VMoveUpTransition,
  VMoveDownTransition,
  VMoveRightTransition,
  VMoveLeftTransition,
  VSlideUpTransition,
  VSlideDownTransition,
  VSlideRightTransition,
  VSlideLeftTransition,
  VZoomTransition,
  VZoomBigTransition,
  VZoomUpTransition,
  VZoomDownTransition,
  VZoomRightTransition,
  VZoomLeftTransition,
  VExpandTransition
}

export default transitions
