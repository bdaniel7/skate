export type DirectionId = 0 | 1

export type DirectionName = string

export type StopId = string

export type RouteId = string

export interface ByRouteId<T> {
  [routeId: string]: T
}

export interface Route {
  id: RouteId
  directionNames: {
    0: DirectionName
    1: DirectionName
  }
}

export type RoutePatternId = string

export type TimepointId = string

// An undefined value indicates that the timepoints need to be loaded
// A null value indicates that we are currently loading the timepoints
export type LoadableTimepoints = TimepointId[] | null | undefined

export type TimepointsByRouteId = ByRouteId<LoadableTimepoints>

export type TripId = string

export type ViaVariant = string