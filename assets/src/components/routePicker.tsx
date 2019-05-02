import React, { useContext } from "react"
import DispatchContext from "../contexts/dispatchContext"
import {
  filterRoutes,
  RouteFilter,
  RouteFilterData,
  useRouteFilter,
} from "../hooks/useRouteFilter"
import { Route, RouteId } from "../skate.d"
import {
  deselectRoute,
  deselectRoutes,
  selectRoute,
  selectRoutes,
} from "../state"
import Loading from "./loading"

interface Props {
  routes: null | Route[]
  selectedRouteIds: RouteId[]
}

const RoutePicker = ({ routes, selectedRouteIds }: Props) => {
  const dispatch = useContext(DispatchContext)
  const routeFilterData: RouteFilterData = useRouteFilter()

  const filteredRoutes = filterRoutes(routes || [], routeFilterData)

  return (
    <div className="m-route-picker">
      <SelectedRoutesList selectedRouteIds={selectedRouteIds} />

      <RouteFilter {...routeFilterData} />

      <button
        className="m-route-picker__all-button"
        onClick={() =>
          dispatch(deselectRoutes(filteredRoutes.map(route => route.id)))
        }
      >
        Clear All
      </button>
      <button
        className="m-route-picker__all-button"
        onClick={() =>
          dispatch(selectRoutes(filteredRoutes.map(route => route.id)))
        }
      >
        Select All
      </button>

      {routes === null ? (
        <Loading />
      ) : (
        <RoutesList
          routes={filteredRoutes}
          selectedRouteIds={selectedRouteIds}
        />
      )}
    </div>
  )
}

const SelectedRoutesList = ({
  selectedRouteIds,
}: {
  selectedRouteIds: RouteId[]
}) => {
  const dispatch = useContext(DispatchContext)

  return (
    <ul className="m-route-picker__selected-routes">
      {selectedRouteIds.map(routeId => (
        <li key={routeId}>
          <button
            className="m-route-picker__selected-routes-button"
            onClick={() => dispatch(deselectRoute(routeId))}
          >
            {routeId}
          </button>
        </li>
      ))}
    </ul>
  )
}

const RoutesList = ({
  routes,
  selectedRouteIds,
}: {
  routes: Route[]
  selectedRouteIds: RouteId[]
}) => (
  <ul className="m-route-picker__route-list">
    {routes.map(route => (
      <li key={route.id}>
        <RouteListButton
          route={route}
          isSelected={selectedRouteIds.includes(route.id)}
        />
      </li>
    ))}
  </ul>
)

const RouteListButton = ({
  route,
  isSelected,
}: {
  route: Route
  isSelected: boolean
}) => {
  const dispatch = useContext(DispatchContext)
  const selectedClass = isSelected
    ? "m-route-picker__route-list-button--selected"
    : ""
  const clickHandler = isSelected
    ? () => dispatch(deselectRoute(route.id))
    : () => dispatch(selectRoute(route.id))

  return (
    <button
      className={`m-route-picker__route-list-button ${selectedClass}`}
      onClick={clickHandler}
    >
      {route.id}
    </button>
  )
}

export default RoutePicker
