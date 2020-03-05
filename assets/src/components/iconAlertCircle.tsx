import React from "react"

const IconAlertCircle = () => (
  <svg viewBox="-3 -3 54 54" className="c-icon-alert-circle">
    <IconAlertCircleSvgNode />
  </svg>
)

export const IconAlertCircleSvgNode = () => (
  <>
    <circle cx="24" cy="24" className="c-icon-alert-circle__outline" r="27" />
    <circle cx="24" cy="24" className="c-icon-alert-circle__fill" r="22.59" />
    <g className="c-icon-alert-circle__exclamation-point">
      <path d="m20.39 4.42h7.22a1.81 1.81 0 0 1 1.49 2.11l-1.49 23.22a1.73 1.73 0 0 1 -1.49 1.78h-4.24a1.73 1.73 0 0 1 -1.49-1.78l-1.49-23.22c-.07-1.13.61-2.11 1.49-2.11" />
      <path d="m21.57 34.54h4.87a1.88 1.88 0 0 1 1.82 1.93v5.17a1.89 1.89 0 0 1 -1.82 1.94h-4.87a1.89 1.89 0 0 1 -1.83-1.94v-5.17a1.88 1.88 0 0 1 1.83-1.93" />
    </g>
  </>
)

export default IconAlertCircle
