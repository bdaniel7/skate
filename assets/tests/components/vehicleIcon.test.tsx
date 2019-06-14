import React from "react"
import renderer from "react-test-renderer"
import VehicleIcon, {
  Orientation,
  Size,
  VehicleIconSvgNode,
} from "../../src/components/vehicleIcon"

test("renders in all directions and sizes", () => {
  const tree = renderer
    .create(
      <>
        <VehicleIcon size={Size.Small} orientation={Orientation.Up} />
        <VehicleIcon size={Size.Small} orientation={Orientation.Right} />
        <VehicleIcon size={Size.Small} orientation={Orientation.Down} />
        <VehicleIcon size={Size.Small} orientation={Orientation.Left} />
        <VehicleIcon size={Size.Medium} orientation={Orientation.Up} />
        <VehicleIcon size={Size.Medium} orientation={Orientation.Right} />
        <VehicleIcon size={Size.Medium} orientation={Orientation.Down} />
        <VehicleIcon size={Size.Medium} orientation={Orientation.Left} />
        <VehicleIcon size={Size.Large} orientation={Orientation.Up} />
        <VehicleIcon size={Size.Large} orientation={Orientation.Right} />
        <VehicleIcon size={Size.Large} orientation={Orientation.Down} />
        <VehicleIcon size={Size.Large} orientation={Orientation.Left} />
      </>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test("renders with variants and labels", () => {
  const tree = renderer
    .create(
      <>
        <VehicleIcon
          size={Size.Small}
          orientation={Orientation.Up}
          label="0617"
          variant="X"
        />
        <VehicleIcon
          size={Size.Small}
          orientation={Orientation.Right}
          label="0617"
          variant="X"
        />
        <VehicleIcon
          size={Size.Small}
          orientation={Orientation.Down}
          label="0617"
          variant="X"
        />
        <VehicleIcon
          size={Size.Small}
          orientation={Orientation.Left}
          label="0617"
          variant="X"
        />
        <VehicleIcon
          size={Size.Medium}
          orientation={Orientation.Up}
          label="0617"
          variant="X"
        />
        <VehicleIcon
          size={Size.Medium}
          orientation={Orientation.Right}
          label="0617"
          variant="X"
        />
        <VehicleIcon
          size={Size.Medium}
          orientation={Orientation.Down}
          label="0617"
          variant="X"
        />
        <VehicleIcon
          size={Size.Medium}
          orientation={Orientation.Left}
          label="0617"
          variant="X"
        />
        <VehicleIcon
          size={Size.Large}
          orientation={Orientation.Up}
          label="0617"
          variant="X"
        />
        <VehicleIcon
          size={Size.Large}
          orientation={Orientation.Right}
          label="0617"
          variant="X"
        />
        <VehicleIcon
          size={Size.Large}
          orientation={Orientation.Down}
          label="0617"
          variant="X"
        />
        <VehicleIcon
          size={Size.Large}
          orientation={Orientation.Left}
          label="0617"
          variant="X"
        />
      </>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test("renders an unwrapped svg node", () => {
  const tree = renderer
    .create(
      <svg>
        <VehicleIconSvgNode
          size={Size.Medium}
          orientation={Orientation.Down}
          label="0617"
        />
      </svg>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})