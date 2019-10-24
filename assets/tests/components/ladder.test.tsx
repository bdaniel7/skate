import { mount } from "enzyme"
import React from "react"
import renderer from "react-test-renderer"
import Ladder, { LadderDirection } from "../../src/components/ladder"
import { StateDispatchProvider } from "../../src/contexts/stateDispatchContext"
import { HeadwaySpacing } from "../../src/models/vehicleStatus"
import { Ghost, Vehicle } from "../../src/realtime.d"
import { TimepointId } from "../../src/schedule.d"
import { initialState, selectVehicle } from "../../src/state"

jest.mock("../../src/laboratoryFeatures", () => ({
  __esModule: true,
  default: () => true,
}))

describe("ladder", () => {
  test("renders a ladder", () => {
    const timepoints = ["t0", "t1", "t2"]
    const vehicles: Vehicle[] = [
      {
        id: "upward",
        label: "upward",
        runId: "run-1",
        timestamp: 0,
        latitude: 0,
        longitude: 0,
        directionId: 0,
        routeId: "route",
        tripId: "trip",
        headsign: null,
        viaVariant: null,
        operatorId: "op1",
        operatorName: "SMITH",
        bearing: 33,
        blockId: "block-1",
        headwaySecs: 859.1,
        headwaySpacing: HeadwaySpacing.Ok,
        previousVehicleId: "v2",
        scheduleAdherenceSecs: 0,
        scheduleAdherenceString: "0.0 sec (ontime)",
        scheduledHeadwaySecs: 120,
        isLayingOver: false,
        layoverDepartureTime: null,
        stopStatus: {
          stopId: "stop",
          stopName: "stop",
        },
        timepointStatus: {
          fractionUntilTimepoint: 0.5,
          timepointId: "t1",
        },
        scheduledLocation: null,
        isOnRoute: true,
      },
      {
        id: "downward",
        label: "downward",
        runId: "run-2",
        timestamp: 0,
        latitude: 0,
        longitude: 0,
        directionId: 1,
        routeId: "route",
        tripId: "trip",
        headsign: null,
        viaVariant: null,
        operatorId: "op2",
        operatorName: "JONES",
        bearing: 33,
        blockId: "block-1",
        headwaySecs: 859.1,
        headwaySpacing: HeadwaySpacing.Ok,
        previousVehicleId: "v2",
        scheduleAdherenceSecs: 0,
        scheduleAdherenceString: "0.0 sec (ontime)",
        scheduledHeadwaySecs: 120,
        isLayingOver: false,
        layoverDepartureTime: null,
        stopStatus: {
          stopId: "stop",
          stopName: "stop",
        },
        timepointStatus: {
          fractionUntilTimepoint: 0.75,
          timepointId: "t2",
        },
        scheduledLocation: {
          directionId: 0,
          timepointStatus: {
            timepointId: "t2",
            fractionUntilTimepoint: 0.75,
          },
        },
        isOnRoute: true,
      },
      {
        id: "notimepoint",
        label: "notimepoint",
        runId: "run-3",
        timestamp: 0,
        latitude: 0,
        longitude: 0,
        directionId: 1,
        routeId: "route",
        tripId: "trip",
        headsign: null,
        viaVariant: null,
        operatorId: "op3",
        operatorName: "XI",
        bearing: 33,
        blockId: "block-1",
        headwaySecs: 859.1,
        headwaySpacing: HeadwaySpacing.Ok,
        previousVehicleId: "v2",
        scheduleAdherenceSecs: 0,
        scheduleAdherenceString: "0.0 sec (ontime)",
        scheduledHeadwaySecs: 120,
        isLayingOver: false,
        layoverDepartureTime: null,
        stopStatus: {
          stopId: "stop",
          stopName: "stop",
        },
        timepointStatus: null,
        scheduledLocation: null,
        isOnRoute: true,
      },
    ]
    const ladderDirection = LadderDirection.ZeroToOne

    const tree = renderer
      .create(
        <Ladder
          timepoints={timepoints}
          vehicles={vehicles}
          ghosts={[]}
          ladderDirection={ladderDirection}
          selectedVehicleId={undefined}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test("renders a ghost bus", () => {
    const timepoints = ["t0", "t1", "t2"]

    const ghost: Ghost = {
      id: "ghost-trip",
      directionId: 0,
      routeId: "route",
      tripId: "trip",
      headsign: "headsign",
      blockId: "block",
      runId: "123-0123",
      viaVariant: "X",
      scheduledTimepointStatus: {
        timepointId: "t0",
        fractionUntilTimepoint: 0.0,
      },
    }

    const ladderDirection = LadderDirection.ZeroToOne

    const tree = renderer
      .create(
        <Ladder
          timepoints={timepoints}
          vehicles={[]}
          ghosts={[ghost]}
          ladderDirection={ladderDirection}
          selectedVehicleId={undefined}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test("shows schedule line in the other direction", () => {
    const timepoints = ["t0", "t1", "t2"]
    const vehicles: Vehicle[] = [
      {
        id: "downward",
        label: "downward",
        runId: "run-2",
        timestamp: 0,
        latitude: 0,
        longitude: 0,
        directionId: 0,
        routeId: "route",
        tripId: "trip",
        headsign: null,
        viaVariant: null,
        operatorId: "op2",
        operatorName: "JONES",
        bearing: 33,
        blockId: "block-1",
        headwaySecs: 859.1,
        headwaySpacing: HeadwaySpacing.Ok,
        previousVehicleId: "v2",
        scheduleAdherenceSecs: 0,
        scheduleAdherenceString: "0.0 sec (ontime)",
        scheduledHeadwaySecs: 120,
        isLayingOver: false,
        layoverDepartureTime: null,
        stopStatus: {
          stopId: "stop",
          stopName: "stop",
        },
        timepointStatus: {
          fractionUntilTimepoint: 0.75,
          timepointId: "t2",
        },
        scheduledLocation: {
          directionId: 1,
          timepointStatus: {
            timepointId: "t2",
            fractionUntilTimepoint: 0.75,
          },
        },
        isOnRoute: true,
      },
    ]
    const ladderDirection = LadderDirection.OneToZero
    const tree = renderer
      .create(
        <Ladder
          timepoints={timepoints}
          vehicles={vehicles}
          ghosts={[]}
          ladderDirection={ladderDirection}
          selectedVehicleId={undefined}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test("highlights a selected vehicle", () => {
    const timepoints = ["t0", "t1", "t2"]
    const vehicles: Vehicle[] = [
      {
        id: "upward",
        label: "upward",
        runId: "run-1",
        timestamp: 0,
        latitude: 0,
        longitude: 0,
        directionId: 0,
        routeId: "route",
        tripId: "trip",
        headsign: null,
        viaVariant: null,
        operatorId: "op1",
        operatorName: "SMITH",
        bearing: 33,
        blockId: "block-1",
        headwaySecs: 859.1,
        headwaySpacing: HeadwaySpacing.Ok,
        previousVehicleId: "v2",
        scheduleAdherenceSecs: 0,
        scheduleAdherenceString: "0.0 sec (ontime)",
        scheduledHeadwaySecs: 120,
        isLayingOver: false,
        layoverDepartureTime: null,
        stopStatus: {
          stopId: "stop",
          stopName: "stop",
        },
        timepointStatus: {
          fractionUntilTimepoint: 0.5,
          timepointId: "t1",
        },
        scheduledLocation: null,
        isOnRoute: true,
      },
      {
        id: "downward",
        label: "downward",
        runId: "run-2",
        timestamp: 0,
        latitude: 0,
        longitude: 0,
        directionId: 1,
        routeId: "route",
        tripId: "trip",
        headsign: null,
        viaVariant: null,
        operatorId: "op2",
        operatorName: "JONES",
        bearing: 33,
        blockId: "block-1",
        headwaySecs: 859.1,
        headwaySpacing: HeadwaySpacing.Ok,
        previousVehicleId: "v2",
        scheduleAdherenceSecs: 0,
        scheduleAdherenceString: "0.0 sec (ontime)",
        scheduledHeadwaySecs: 120,
        isLayingOver: false,
        layoverDepartureTime: null,
        stopStatus: {
          stopId: "stop",
          stopName: "stop",
        },
        timepointStatus: {
          fractionUntilTimepoint: 0.75,
          timepointId: "t2",
        },
        scheduledLocation: {
          directionId: 0,
          timepointStatus: {
            timepointId: "t2",
            fractionUntilTimepoint: 0.75,
          },
        },
        isOnRoute: true,
      },
    ]
    const ladderDirection = LadderDirection.ZeroToOne

    const tree = renderer
      .create(
        <Ladder
          timepoints={timepoints}
          vehicles={vehicles}
          ghosts={[]}
          ladderDirection={ladderDirection}
          selectedVehicleId={"upward"}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test("clicking a vehicle selects that vehicle", () => {
    const mockDispatch = jest.fn()

    const timepoints = ["t0", "t1", "t2"]
    const vehicle: Vehicle = {
      id: "upward",
      label: "upward",
      runId: "run-1",
      timestamp: 0,
      latitude: 0,
      longitude: 0,
      directionId: 0,
      routeId: "route",
      tripId: "trip",
      headsign: null,
      viaVariant: null,
      operatorId: "op1",
      operatorName: "SMITH",
      bearing: 33,
      blockId: "block-1",
      headwaySecs: 859.1,
      headwaySpacing: HeadwaySpacing.Ok,
      previousVehicleId: "v2",
      scheduleAdherenceSecs: 0,
      scheduleAdherenceString: "0.0 sec (ontime)",
      scheduledHeadwaySecs: 120,
      isLayingOver: false,
      layoverDepartureTime: null,
      stopStatus: {
        stopId: "stop",
        stopName: "stop",
      },
      timepointStatus: {
        fractionUntilTimepoint: 0.5,
        timepointId: "t1",
      },
      scheduledLocation: null,
      isOnRoute: true,
    }

    const ladderDirection = LadderDirection.ZeroToOne

    const wrapper = mount(
      <StateDispatchProvider state={initialState} dispatch={mockDispatch}>
        <Ladder
          timepoints={timepoints}
          vehicles={[vehicle]}
          ghosts={[]}
          ladderDirection={ladderDirection}
          selectedVehicleId={undefined}
        />
      </StateDispatchProvider>
    )
    wrapper.find(".m-ladder__vehicle").simulate("click")

    expect(mockDispatch).toHaveBeenCalledWith(selectVehicle(vehicle.id))
  })

  test("renders a ladder with no timepoints", () => {
    const timepoints: TimepointId[] = []
    const vehicles: Vehicle[] = [
      {
        id: "upward",
        label: "upward",
        runId: "run-1",
        timestamp: 0,
        latitude: 0,
        longitude: 0,
        directionId: 0,
        routeId: "route",
        tripId: "trip",
        headsign: null,
        viaVariant: null,
        operatorId: "op1",
        operatorName: "SMITH",
        bearing: 33,
        blockId: "block-1",
        headwaySecs: 859.1,
        headwaySpacing: HeadwaySpacing.Ok,
        previousVehicleId: "v2",
        scheduleAdherenceSecs: 0,
        scheduleAdherenceString: "0.0 sec (ontime)",
        scheduledHeadwaySecs: 120,
        isLayingOver: false,
        layoverDepartureTime: null,
        stopStatus: {
          stopId: "stop",
          stopName: "stop",
        },
        timepointStatus: {
          fractionUntilTimepoint: 0.5,
          timepointId: "t1",
        },
        scheduledLocation: null,
        isOnRoute: true,
      },
    ]
    const ladderDirection = LadderDirection.ZeroToOne

    const tree = renderer
      .create(
        <Ladder
          timepoints={timepoints}
          vehicles={vehicles}
          ghosts={[]}
          ladderDirection={ladderDirection}
          selectedVehicleId={undefined}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test("renders a reversed ladder", () => {
    const timepoints = ["t0", "t1", "t2"]
    const vehicles: Vehicle[] = [
      {
        id: "upward",
        label: "upward",
        runId: "run-1",
        timestamp: 0,
        latitude: 0,
        longitude: 0,
        directionId: 1,
        routeId: "route",
        tripId: "trip",
        headsign: null,
        viaVariant: null,
        operatorId: "op1",
        operatorName: "SMITH",
        bearing: 33,
        blockId: "block-1",
        headwaySecs: 859.1,
        headwaySpacing: HeadwaySpacing.Ok,
        previousVehicleId: "v2",
        scheduleAdherenceSecs: 0,
        scheduleAdherenceString: "0.0 sec (ontime)",
        scheduledHeadwaySecs: 120,
        isLayingOver: false,
        layoverDepartureTime: null,
        stopStatus: {
          stopId: "stop",
          stopName: "stop",
        },
        timepointStatus: {
          fractionUntilTimepoint: 0.5,
          timepointId: "t1",
        },
        scheduledLocation: {
          directionId: 1,
          timepointStatus: {
            timepointId: "t1",
            fractionUntilTimepoint: 0.4,
          },
        },
        isOnRoute: true,
      },
    ]
    const ladderDirection = LadderDirection.OneToZero

    const tree = renderer
      .create(
        <Ladder
          timepoints={timepoints}
          vehicles={vehicles}
          ghosts={[]}
          ladderDirection={ladderDirection}
          selectedVehicleId={undefined}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
