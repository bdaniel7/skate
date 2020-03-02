import React from "react"

import {
  Orientation,
  Size,
  VehicleIcon,
  VehicleIconSvgNode,
} from "./vehicleIcon"

const VehicleIconGallery = () => (
  <div style={{ flex: "0 1 auto", marginLeft: "3rem" }}>
    {/* icon, triangle, no label */}
    <div style={{ display: "flex" }}>
      <VehicleIcon
        size={Size.Small}
        orientation={Orientation.Up}
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Small}
        orientation={Orientation.Right}
        variant="1"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Small}
        orientation={Orientation.Down}
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Small}
        orientation={Orientation.Left}
        variant="2"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Medium}
        orientation={Orientation.Up}
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Medium}
        orientation={Orientation.Right}
        variant="3"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Medium}
        orientation={Orientation.Down}
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Medium}
        orientation={Orientation.Left}
        variant="4"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Large}
        orientation={Orientation.Up}
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Large}
        orientation={Orientation.Right}
        variant="5"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Large}
        orientation={Orientation.Down}
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Large}
        orientation={Orientation.Left}
        variant="6"
        alertIcon={true}
      />
    </div>

    {/* icon, triangle, with label */}
    <div style={{ display: "flex" }}>
      <VehicleIcon
        size={Size.Small}
        orientation={Orientation.Up}
        label="1828"
        variant="7"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Small}
        orientation={Orientation.Right}
        label="1828"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Small}
        orientation={Orientation.Down}
        label="1828"
        variant="8"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Small}
        orientation={Orientation.Left}
        label="1828"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Medium}
        orientation={Orientation.Up}
        label="1828"
        variant="9"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Medium}
        orientation={Orientation.Right}
        label="1828"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Medium}
        orientation={Orientation.Down}
        label="1828"
        variant="A"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Medium}
        orientation={Orientation.Left}
        label="1828"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Large}
        orientation={Orientation.Up}
        label="1828"
        variant="B"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Large}
        orientation={Orientation.Right}
        label="1828"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Large}
        orientation={Orientation.Down}
        label="1828"
        variant="C"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Large}
        orientation={Orientation.Left}
        label="1828"
        alertIcon={true}
      />
    </div>

    {/* icon, ghost, no label */}
    <div style={{ display: "flex" }}>
      <VehicleIcon
        size={Size.Small}
        orientation={Orientation.Up}
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Small}
        orientation={Orientation.Right}
        variant="1"
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Small}
        orientation={Orientation.Down}
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Small}
        orientation={Orientation.Left}
        variant="2"
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Medium}
        orientation={Orientation.Up}
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Medium}
        orientation={Orientation.Right}
        variant="3"
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Medium}
        orientation={Orientation.Down}
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Medium}
        orientation={Orientation.Left}
        variant="4"
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Large}
        orientation={Orientation.Up}
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Large}
        orientation={Orientation.Right}
        variant="5"
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Large}
        orientation={Orientation.Down}
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Large}
        orientation={Orientation.Left}
        variant="6"
        status="ghost"
        alertIcon={true}
      />
    </div>

    {/* icon, ghost, with label */}
    <div style={{ display: "flex" }}>
      <VehicleIcon
        size={Size.Small}
        orientation={Orientation.Up}
        label="1828"
        variant="7"
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Small}
        orientation={Orientation.Right}
        label="1828"
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Small}
        orientation={Orientation.Down}
        label="1828"
        variant="8"
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Small}
        orientation={Orientation.Left}
        label="1828"
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Medium}
        orientation={Orientation.Up}
        label="1828"
        variant="9"
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Medium}
        orientation={Orientation.Right}
        label="1828"
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Medium}
        orientation={Orientation.Down}
        label="1828"
        variant="A"
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Medium}
        orientation={Orientation.Left}
        label="1828"
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Large}
        orientation={Orientation.Up}
        label="1828"
        variant="B"
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Large}
        orientation={Orientation.Right}
        label="1828"
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Large}
        orientation={Orientation.Down}
        label="1828"
        variant="C"
        status="ghost"
        alertIcon={true}
      />
      <VehicleIcon
        size={Size.Large}
        orientation={Orientation.Left}
        label="1828"
        status="ghost"
        alertIcon={true}
      />
    </div>

    <svg style={{ width: 600, height: 400 }}>
      {/* svg, triangle, no label */}
      <line x1="0" y1="50" x2="600" y2="50" stroke="lightgray" />
      <g transform="translate(25, 50)">
        <VehicleIconSvgNode
          size={Size.Small}
          orientation={Orientation.Up}
          variant="D"
          alertIcon={true}
        />
      </g>
      <g transform="translate(75, 50)">
        <VehicleIconSvgNode
          size={Size.Small}
          orientation={Orientation.Right}
          alertIcon={true}
        />
      </g>
      <g transform="translate(125, 50)">
        <VehicleIconSvgNode
          size={Size.Small}
          orientation={Orientation.Down}
          alertIcon={true}
        />
      </g>
      <g transform="translate(175, 50)">
        <VehicleIconSvgNode
          size={Size.Small}
          orientation={Orientation.Left}
          variant="E"
          alertIcon={true}
        />
      </g>
      <g transform="translate(225, 50)">
        <VehicleIconSvgNode
          size={Size.Medium}
          orientation={Orientation.Up}
          alertIcon={true}
        />
      </g>
      <g transform="translate(275, 50)">
        <VehicleIconSvgNode
          size={Size.Medium}
          orientation={Orientation.Right}
          alertIcon={true}
        />
      </g>
      <g transform="translate(325, 50)">
        <VehicleIconSvgNode
          size={Size.Medium}
          orientation={Orientation.Down}
          variant="F"
          alertIcon={true}
        />
      </g>
      <g transform="translate(375, 50)">
        <VehicleIconSvgNode
          size={Size.Medium}
          orientation={Orientation.Left}
          alertIcon={true}
        />
      </g>
      <g transform="translate(425, 50)">
        <VehicleIconSvgNode
          size={Size.Large}
          orientation={Orientation.Up}
          alertIcon={true}
        />
      </g>
      <g transform="translate(475, 50)">
        <VehicleIconSvgNode
          size={Size.Large}
          orientation={Orientation.Right}
          variant="G"
          alertIcon={true}
        />
      </g>
      <g transform="translate(525, 50)">
        <VehicleIconSvgNode
          size={Size.Large}
          orientation={Orientation.Down}
          alertIcon={true}
        />
      </g>
      <g transform="translate(575, 50)">
        <VehicleIconSvgNode
          size={Size.Large}
          orientation={Orientation.Left}
          alertIcon={true}
        />
      </g>

      {/* svg, triangle, with label */}
      <line x1="0" y1="150" x2="600" y2="150" stroke="lightgray" />
      <g transform="translate(25, 150)">
        <VehicleIconSvgNode
          size={Size.Small}
          orientation={Orientation.Up}
          label="1828"
          alertIcon={true}
        />
      </g>
      <g transform="translate(75, 150)">
        <VehicleIconSvgNode
          size={Size.Small}
          orientation={Orientation.Right}
          label="1828"
          variant="W"
          alertIcon={true}
        />
      </g>
      <g transform="translate(125, 150)">
        <VehicleIconSvgNode
          size={Size.Small}
          orientation={Orientation.Down}
          label="1828"
          alertIcon={true}
        />
      </g>
      <g transform="translate(175, 150)">
        <VehicleIconSvgNode
          size={Size.Small}
          orientation={Orientation.Left}
          label="1828"
          alertIcon={true}
        />
      </g>
      <g transform="translate(225, 150)">
        <VehicleIconSvgNode
          size={Size.Medium}
          orientation={Orientation.Up}
          label="1828"
          variant="X"
          alertIcon={true}
        />
      </g>
      <g transform="translate(275, 150)">
        <VehicleIconSvgNode
          size={Size.Medium}
          orientation={Orientation.Right}
          label="1828"
          alertIcon={true}
        />
      </g>
      <g transform="translate(325, 150)">
        <VehicleIconSvgNode
          size={Size.Medium}
          orientation={Orientation.Down}
          label="1828"
          alertIcon={true}
        />
      </g>
      <g transform="translate(375, 150)">
        <VehicleIconSvgNode
          size={Size.Medium}
          orientation={Orientation.Left}
          label="1828"
          variant="Y"
          alertIcon={true}
        />
      </g>
      <g transform="translate(425, 150)">
        <VehicleIconSvgNode
          size={Size.Large}
          orientation={Orientation.Up}
          label="1828"
          alertIcon={true}
        />
      </g>
      <g transform="translate(475, 150)">
        <VehicleIconSvgNode
          size={Size.Large}
          orientation={Orientation.Right}
          label="1828"
          alertIcon={true}
        />
      </g>
      <g transform="translate(525, 150)">
        <VehicleIconSvgNode
          size={Size.Large}
          orientation={Orientation.Down}
          label="1828"
          variant="Z"
          alertIcon={true}
        />
      </g>
      <g transform="translate(575, 150)">
        <VehicleIconSvgNode
          size={Size.Large}
          orientation={Orientation.Left}
          label="1828"
          alertIcon={true}
        />
      </g>

      {/* svg, ghost, no label */}
      <line x1="0" y1="250" x2="600" y2="250" stroke="lightgray" />
      <g transform="translate(25, 250)">
        <VehicleIconSvgNode
          size={Size.Small}
          orientation={Orientation.Up}
          variant="D"
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(75, 250)">
        <VehicleIconSvgNode
          size={Size.Small}
          orientation={Orientation.Right}
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(125, 250)">
        <VehicleIconSvgNode
          size={Size.Small}
          orientation={Orientation.Down}
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(175, 250)">
        <VehicleIconSvgNode
          size={Size.Small}
          orientation={Orientation.Left}
          variant="E"
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(225, 250)">
        <VehicleIconSvgNode
          size={Size.Medium}
          orientation={Orientation.Up}
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(275, 250)">
        <VehicleIconSvgNode
          size={Size.Medium}
          orientation={Orientation.Right}
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(325, 250)">
        <VehicleIconSvgNode
          size={Size.Medium}
          orientation={Orientation.Down}
          variant="F"
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(375, 250)">
        <VehicleIconSvgNode
          size={Size.Medium}
          orientation={Orientation.Left}
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(425, 250)">
        <VehicleIconSvgNode
          size={Size.Large}
          orientation={Orientation.Up}
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(475, 250)">
        <VehicleIconSvgNode
          size={Size.Large}
          orientation={Orientation.Right}
          variant="G"
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(525, 250)">
        <VehicleIconSvgNode
          size={Size.Large}
          orientation={Orientation.Down}
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(575, 250)">
        <VehicleIconSvgNode
          size={Size.Large}
          orientation={Orientation.Left}
          status="ghost"
          alertIcon={true}
        />
      </g>

      {/* svg, ghost, with label */}
      <line x1="0" y1="350" x2="600" y2="350" stroke="lightgray" />
      <g transform="translate(25, 350)">
        <VehicleIconSvgNode
          size={Size.Small}
          orientation={Orientation.Up}
          label="1828"
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(75, 350)">
        <VehicleIconSvgNode
          size={Size.Small}
          orientation={Orientation.Right}
          label="1828"
          variant="W"
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(125, 350)">
        <VehicleIconSvgNode
          size={Size.Small}
          orientation={Orientation.Down}
          label="1828"
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(175, 350)">
        <VehicleIconSvgNode
          size={Size.Small}
          orientation={Orientation.Left}
          label="1828"
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(225, 350)">
        <VehicleIconSvgNode
          size={Size.Medium}
          orientation={Orientation.Up}
          label="1828"
          variant="X"
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(275, 350)">
        <VehicleIconSvgNode
          size={Size.Medium}
          orientation={Orientation.Right}
          label="1828"
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(325, 350)">
        <VehicleIconSvgNode
          size={Size.Medium}
          orientation={Orientation.Down}
          label="1828"
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(375, 350)">
        <VehicleIconSvgNode
          size={Size.Medium}
          orientation={Orientation.Left}
          label="1828"
          variant="Y"
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(425, 350)">
        <VehicleIconSvgNode
          size={Size.Large}
          orientation={Orientation.Up}
          label="1828"
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(475, 350)">
        <VehicleIconSvgNode
          size={Size.Large}
          orientation={Orientation.Right}
          label="1828"
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(525, 350)">
        <VehicleIconSvgNode
          size={Size.Large}
          orientation={Orientation.Down}
          label="1828"
          variant="Z"
          status="ghost"
          alertIcon={true}
        />
      </g>
      <g transform="translate(575, 350)">
        <VehicleIconSvgNode
          size={Size.Large}
          orientation={Orientation.Left}
          label="1828"
          status="ghost"
          alertIcon={true}
        />
      </g>
    </svg>
  </div>
)

export default VehicleIconGallery
