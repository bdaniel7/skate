import React, { ReactElement } from "react"
import { VehicleDirection } from "../models/ladderDirection"
import { LadderVehicle } from "../models/ladderVehicle"
import { HeadwaySpacing, headwaySpacingToString } from "../models/vehicleStatus"
import { CENTER_TO_LINE } from "./ladder"
import { VehicleOrGhost } from "../realtime"
import { isVehicle } from "../models/vehicle"

interface Props {
  height: number
  ladderVehicles: LadderVehicle[]
}

const headwayClass = (spacing: HeadwaySpacing | null): string =>
  spacing ? `m-ladder__headway-line--${headwaySpacingToString(spacing)}` : ""

const drawHeadwayLine = (
  ladderVehicles: LadderVehicle[],
  yStart: number,
  acc: ReactElement<SVGPathElement>[]
): ReactElement<SVGPathElement>[] => {
  if (ladderVehicles.length === 0) {
    return acc
  }

  const [currentLadderVehicle, ...rest] = ladderVehicles
  const vehicle: VehicleOrGhost = currentLadderVehicle.vehicle
  const headwaySpacing =
    isVehicle(vehicle) && !vehicle.isOffCourse ? vehicle.headwaySpacing : null

  if (headwaySpacing === null) {
    return drawHeadwayLine(rest, yStart, acc)
  }

  const centerToLine =
    currentLadderVehicle.vehicleDirection === VehicleDirection.Down
      ? -CENTER_TO_LINE
      : CENTER_TO_LINE

  const newAcc = acc.concat([
    <line
      key={`${vehicle.id}-headway-line`}
      id={vehicle.id}
      className={`m-ladder__line
                  m-ladder__headway-line
                  ${headwayClass(headwaySpacing)}`}
      x1={centerToLine}
      y1={yStart}
      x2={centerToLine}
      y2={currentLadderVehicle.y}
    />,
  ])

  return drawHeadwayLine(rest, currentLadderVehicle.y, newAcc)
}

interface VehiclesByDirection {
  down: LadderVehicle[]
  up: LadderVehicle[]
}

const separateVehiclesByDirection = (
  vehicles: LadderVehicle[],
  acc: VehiclesByDirection = {
    down: [],
    up: [],
  }
): VehiclesByDirection => {
  if (vehicles.length === 0) {
    return acc
  }

  const [vehicle, ...rest] = vehicles
  const newAcc =
    vehicle.vehicleDirection === VehicleDirection.Down
      ? { ...acc, down: acc.down.concat(vehicle) }
      : { ...acc, up: acc.up.concat(vehicle) }

  return separateVehiclesByDirection(rest, newAcc)
}

const HeadwayLines = ({
  height,
  ladderVehicles,
}: Props): ReactElement<HTMLDivElement> => {
  const { down, up } = separateVehiclesByDirection(ladderVehicles)

  return (
    <g className="m-ladder__headway-lines">
      {drawHeadwayLine(down.reverse(), height, [])}
      {drawHeadwayLine(up.reverse(), 0, [])}
    </g>
  )
}

export default HeadwayLines
