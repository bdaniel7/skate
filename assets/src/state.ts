import { Dispatch as ReactDispatch } from "react"
import { FocusedVehicle, FocusType } from "./models/focusedVehicle"
import {
  Action as SearchAction,
  initialSearch as initialSearchState,
  reducer as searchReducer,
  Search,
} from "./models/search"
import { RunId, VehicleId } from "./realtime.d"
import { RouteId } from "./schedule.d"
import { defaultSettings, Settings, VehicleLabelSetting } from "./settings"

export interface State {
  focusedVehicle?: FocusedVehicle
  pickerContainerIsVisible: boolean
  search: Search
  selectedRouteIds: RouteId[]
  selectedShuttleRouteIds: RouteId[]
  selectedShuttleRunIds: RunId[] | "all"
  settings: Settings
}

export const initialState: State = {
  focusedVehicle: undefined,
  pickerContainerIsVisible: true,
  search: initialSearchState,
  selectedRouteIds: [],
  selectedShuttleRouteIds: [],
  selectedShuttleRunIds: "all",
  settings: defaultSettings,
}

interface SelectRouteAction {
  type: "SELECT_ROUTE"
  payload: {
    routeId: RouteId
  }
}

export const selectRoute = (routeId: RouteId): SelectRouteAction => ({
  type: "SELECT_ROUTE",
  payload: { routeId },
})

interface DeselectRouteAction {
  type: "DESELECT_ROUTE"
  payload: {
    routeId: RouteId
  }
}

export const deselectRoute = (routeId: RouteId): DeselectRouteAction => ({
  type: "DESELECT_ROUTE",
  payload: { routeId },
})

interface SelectShuttleRunAction {
  type: "SELECT_SHUTTLE_RUN"
  payload: {
    runId: RunId
  }
}

export const selectShuttleRun = (runId: RunId): SelectShuttleRunAction => ({
  type: "SELECT_SHUTTLE_RUN",
  payload: {
    runId,
  },
})

interface DeselectShuttleRunAction {
  type: "DESELECT_SHUTTLE_RUN"
  payload: {
    runId: RunId
  }
}

export const deselectShuttleRun = (runId: RunId): DeselectShuttleRunAction => ({
  type: "DESELECT_SHUTTLE_RUN",
  payload: {
    runId,
  },
})

interface SelectAllShuttleRunsAction {
  type: "SELECT_ALL_SHUTTLE_RUNS"
}

export const selectAllShuttleRuns = (): SelectAllShuttleRunsAction => ({
  type: "SELECT_ALL_SHUTTLE_RUNS",
})

interface DeselectAllShuttleRunsAction {
  type: "DESELECT_ALL_SHUTTLE_RUNS"
}

export const deselectAllShuttleRuns = (): DeselectAllShuttleRunsAction => ({
  type: "DESELECT_ALL_SHUTTLE_RUNS",
})

interface EnsureShuttleRunSelectedAction {
  type: "ENSURE_SHUTTLE_RUN_SELECTED"
  payload: {
    runId: RunId
  }
}

export const ensureShuttleRunSelected = (
  runId: RunId
): EnsureShuttleRunSelectedAction => ({
  type: "ENSURE_SHUTTLE_RUN_SELECTED",
  payload: {
    runId,
  },
})

interface SelectShuttleRouteAction {
  type: "SELECT_SHUTTLE_ROUTE"
  payload: {
    routeId: RouteId
  }
}

export const selectShuttleRoute = (
  routeId: RouteId
): SelectShuttleRouteAction => ({
  type: "SELECT_SHUTTLE_ROUTE",
  payload: {
    routeId,
  },
})

interface DeselectShuttleRouteAction {
  type: "DESELECT_SHUTTLE_ROUTE"
  payload: {
    routeId: RouteId
  }
}

export const deselectShuttleRoute = (
  routeId: RouteId
): DeselectShuttleRouteAction => ({
  type: "DESELECT_SHUTTLE_ROUTE",
  payload: {
    routeId,
  },
})

export interface SelectVehicleAction {
  type: "SELECT_VEHICLE"
  payload: {
    vehicleId: VehicleId
  }
}

export const selectVehicle = (vehicleId: VehicleId): SelectVehicleAction => ({
  type: "SELECT_VEHICLE",
  payload: { vehicleId },
})

export interface DeselectVehicleAction {
  type: "DESELECT_VEHICLE"
}

export const deselectVehicle = (): DeselectVehicleAction => ({
  type: "DESELECT_VEHICLE",
})

interface TogglePickerContainerAction {
  type: "TOGGLE_PICKER_CONTAINER"
}

export const togglePickerContainer = (): TogglePickerContainerAction => ({
  type: "TOGGLE_PICKER_CONTAINER",
})

interface SetLadderVehicleLabelSettingAction {
  type: "SET_LADDER_VEHICLE_LABEL_SETTING"
  payload: {
    ladderVehicleLabel: VehicleLabelSetting
  }
}

export const setLadderVehicleLabelSetting = (
  ladderVehicleLabel: VehicleLabelSetting
): SetLadderVehicleLabelSettingAction => ({
  type: "SET_LADDER_VEHICLE_LABEL_SETTING",
  payload: {
    ladderVehicleLabel,
  },
})

interface SetShuttleVehicleLabelSettingAction {
  type: "SET_MAP_VEHICLE_LABEL_SETTING"
  payload: {
    shuttleVehicleLabel: VehicleLabelSetting
  }
}

export const setShuttleVehicleLabelSetting = (
  shuttleVehicleLabel: VehicleLabelSetting
): SetShuttleVehicleLabelSettingAction => ({
  type: "SET_MAP_VEHICLE_LABEL_SETTING",
  payload: {
    shuttleVehicleLabel,
  },
})

type Action =
  | SelectRouteAction
  | DeselectRouteAction
  | SelectShuttleRunAction
  | DeselectShuttleRunAction
  | SelectAllShuttleRunsAction
  | DeselectAllShuttleRunsAction
  | EnsureShuttleRunSelectedAction
  | SelectShuttleRouteAction
  | DeselectShuttleRouteAction
  | SelectVehicleAction
  | DeselectVehicleAction
  | TogglePickerContainerAction
  | SetLadderVehicleLabelSettingAction
  | SetShuttleVehicleLabelSettingAction
  | SearchAction

export type Dispatch = ReactDispatch<Action>

export type Reducer = (state: State, action: Action) => State

const shuttleRunIdsList = (selectedShuttleRunIds: RunId[] | "all"): RunId[] =>
  selectedShuttleRunIds === "all" ? [] : selectedShuttleRunIds

const focusedVehicleReducer = (
  state: FocusedVehicle | undefined,
  action: Action
): FocusedVehicle | undefined => {
  switch (action.type) {
    case "SELECT_VEHICLE":
      return { id: action.payload.vehicleId, type: FocusType.Selected }
    case "DESELECT_VEHICLE":
      return undefined
    default:
      return state
  }
}

const pickerContainerIsVisibleReducer = (
  state: boolean,
  action: Action
): boolean => {
  switch (action.type) {
    case "TOGGLE_PICKER_CONTAINER":
      return !state
    default:
      return state
  }
}

const selectedRouteIdsReducer = (
  state: RouteId[],
  action: Action
): RouteId[] => {
  switch (action.type) {
    case "SELECT_ROUTE":
      return state.includes(action.payload.routeId)
        ? state
        : [...state, action.payload.routeId]
    case "DESELECT_ROUTE":
      return state.filter(id => id !== action.payload.routeId)
    default:
      return state
  }
}

const selectedShuttleRouteIdsReducer = (
  state: RouteId[],
  action: Action
): RouteId[] => {
  switch (action.type) {
    case "SELECT_SHUTTLE_ROUTE":
      return state.includes(action.payload.routeId)
        ? state
        : [...state, action.payload.routeId]
    case "DESELECT_SHUTTLE_ROUTE":
      return state.filter(id => id !== action.payload.routeId)
    default:
      return state
  }
}

const selectedShuttleRunIdsReducer = (
  state: RunId[] | "all",
  action: Action
): RunId[] | "all" => {
  switch (action.type) {
    case "SELECT_SHUTTLE_RUN":
      return state.includes(action.payload.runId)
        ? state
        : [...shuttleRunIdsList(state), action.payload.runId]
    case "DESELECT_SHUTTLE_RUN":
      return shuttleRunIdsList(state).filter(id => id !== action.payload.runId)
    case "SELECT_ALL_SHUTTLE_RUNS":
      return "all"
    case "DESELECT_ALL_SHUTTLE_RUNS":
      return []
    case "ENSURE_SHUTTLE_RUN_SELECTED":
      if (state === "all" || state.includes(action.payload.runId)) {
        return state
      }
      return [...state, action.payload.runId]
    default:
      return state
  }
}

const settingsReducer = (state: Settings, action: Action): Settings => {
  switch (action.type) {
    case "SET_LADDER_VEHICLE_LABEL_SETTING":
      return {
        ...state,
        ladderVehicleLabel: action.payload.ladderVehicleLabel,
      }
    case "SET_MAP_VEHICLE_LABEL_SETTING":
      return {
        ...state,
        shuttleVehicleLabel: action.payload.shuttleVehicleLabel,
      }
    default:
      return state
  }
}

export const reducer = (state: State, action: Action): State => ({
  focusedVehicle: focusedVehicleReducer(state.focusedVehicle, action),
  pickerContainerIsVisible: pickerContainerIsVisibleReducer(
    state.pickerContainerIsVisible,
    action
  ),
  search: searchReducer(state.search, action as SearchAction),
  selectedRouteIds: selectedRouteIdsReducer(state.selectedRouteIds, action),
  selectedShuttleRouteIds: selectedShuttleRouteIdsReducer(
    state.selectedShuttleRouteIds,
    action
  ),
  selectedShuttleRunIds: selectedShuttleRunIdsReducer(
    state.selectedShuttleRunIds,
    action
  ),
  settings: settingsReducer(state.settings, action),
})
