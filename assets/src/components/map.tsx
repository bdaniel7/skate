import Leaflet, { Map as LeafletMap, LatLngExpression } from "leaflet"
import "leaflet-defaulticon-compatibility" // see https://github.com/Leaflet/Leaflet/issues/4968#issuecomment-483402699
// @ts-ignore
import Control from "react-leaflet-control"
import React, {
  ReactElement,
  useContext,
  MutableRefObject,
  useRef,
  useEffect,
  useState,
} from "react"
import { StateDispatchContext } from "../contexts/stateDispatchContext"
import vehicleLabelString from "../helpers/vehicleLabel"
import { drawnStatus, statusClass } from "../models/vehicleStatus"
import { Vehicle, VehicleId } from "../realtime.d"
import { Shape } from "../schedule"
import { Settings } from "../settings"
import { selectVehicle, State as AppState } from "../state"
import {
  Map as ReactLeafletMap,
  Marker,
  TileLayer,
  ZoomControl,
  Polyline,
  CircleMarker,
} from "react-leaflet"

interface Props {
  vehicles: Vehicle[]
  shapes?: Shape[]
}

const makeVehicleIcon = (vehicle: Vehicle): Leaflet.DivIcon => {
  const centerX = 12
  const centerY = 12
  return Leaflet.divIcon({
    html: `<svg
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="${statusClass(drawnStatus(vehicle))}"
          d="m10 2.7-6.21 16.94a2.33 2.33 0 0 0 1.38 3 2.36 2.36 0 0 0 1.93-.14l4.9-2.67 4.89 2.71a2.34 2.34 0 0 0 3.34-2.8l-5.81-17a2.34 2.34 0 0 0 -4.4 0z"
          transform="rotate(${vehicle.bearing}, ${centerX}, ${centerY})"
        />
      </svg>`,
    iconAnchor: [centerX, centerY],
    className: "m-vehicle-map__icon",
  })
}

const makeLabelIcon = (
  vehicle: Vehicle,
  settings: Settings,
  selectedVehicleId?: VehicleId
): Leaflet.DivIcon => {
  const labelString = vehicleLabelString(vehicle, settings)
  const selectedClass = vehicle.id === selectedVehicleId ? "selected" : ""
  return Leaflet.divIcon({
    className: `m-vehicle-map__label ${selectedClass}`,
    html: `<svg viewBox="0 0 42 16" width="42" height="16">
            <rect
                class="m-vehicle-icon__label-background"
                width="100%" height="100%"
                rx="5.5px" ry="5.5px"
              />
            <text class="m-vehicle-icon__label" x="50%" y="50%" text-anchor="middle" dominant-baseline="central">
              ${labelString}
            </text>
          </svg>`,
    iconAnchor: [21, -16],
  })
}
const defaultCenter: LatLngExpression = [42.360718, -71.05891]

const Vehicle = ({ vehicle }: { vehicle: Vehicle }) => {
  const [appState, dispatch] = useContext(StateDispatchContext)
  const select = () => dispatch(selectVehicle(vehicle.id))
  const position: LatLngExpression = [vehicle.latitude, vehicle.longitude]
  const vehicleIcon: Leaflet.DivIcon = makeVehicleIcon(vehicle)
  const labelIcon: Leaflet.DivIcon = makeLabelIcon(
    vehicle,
    appState.settings,
    appState.selectedVehicleId
  )
  return (
    <>
      <Marker
        position={position}
        icon={vehicleIcon}
        onClick={select}
      />
      <Marker
        position={position}
        icon={labelIcon}
        onClick={select}
      />
    </>
  )
}

const Shape = ({ shape }: { shape: Shape }) => {
  const positions: LatLngExpression[] = shape.points.map(point => [
    point.lat,
    point.lon,
  ])

  const strokeOptions = shape.color
    ? {
        color: shape.color,
        opacity: 1.0,
        weight: 3,
      }
    : {
        color: "#4db6ac",
        opacity: 0.6,
        weight: 6,
      }

  return (
    <>
      <Polyline
        className="m-vehicle-map__route-shape"
        positions={positions}
        {...strokeOptions}
      />
      {(shape.stops || []).map(stop => (
        <CircleMarker
          key={stop.id}
          className="m-vehicle-map__stop"
          center={[stop.lat, stop.lon]}
          radius={3}
        />
      ))}
    </>
  )
}

export const autoCenter = (
  map: LeafletMap,
  vehicles: Vehicle[],
  isAutoCentering: MutableRefObject<boolean>,
  appState: AppState
): void => {
  const latLngs: LatLngExpression[] = vehicles.map(vehicle =>
    Leaflet.latLng(vehicle.latitude, vehicle.longitude)
  )
  isAutoCentering.current = true
  if (latLngs.length === 0) {
    map.setView(defaultCenter, 13)
  } else if (latLngs.length === 1) {
    map.setView(latLngs[0], 16)
  } else if (latLngs.length > 1) {
    map.fitBounds(Leaflet.latLngBounds(latLngs), {
      paddingBottomRight: [20, 50],
      paddingTopLeft: [appState.pickerContainerIsVisible ? 240 : 20, 20],
    })
  }
}

const RecenterControl = ({turnOnAutoCenter, controlOptions}: {
  turnOnAutoCenter: () => void,
  controlOptions: Leaflet.ControlOptions
}) =>
  <Control {...controlOptions} >
    <div
      className="leaflet-bar m-vehicle-map__recenter-button"
    >
      <a
        href="#"
        title="Recenter map"
        role="button"
        aria-label="Recenter map"
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
          turnOnAutoCenter()
        }}
      >
        <svg
          height="26"
          viewBox="-5 -3 32 32"
          width="26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m10 2.7-6.21 16.94a2.33 2.33 0 0 0 1.38 3 2.36 2.36 0 0 0 1.93-.14l4.9-2.67 4.89 2.71a2.34 2.34 0 0 0 3.34-2.8l-5.81-17a2.34 2.34 0 0 0 -4.4 0z"
            transform="rotate(60, 12, 12)"
          />
        </svg>
      </a>
    </div>
  </Control>

const Map = (props: Props): ReactElement<HTMLDivElement> => {
  const [shouldAutoCenter, setShouldAutoCenter] = useState<boolean>(true)
  const isAutoCentering: MutableRefObject<boolean> = useRef(false)
  const [appState,] = useContext(StateDispatchContext)
  const mapRef: MutableRefObject<ReactLeafletMap | null> = useRef(null)

  useEffect(() => {
    const reactLeafletMap: ReactLeafletMap | null = mapRef.current
    if (reactLeafletMap !== null && shouldAutoCenter) {
      const leafletMap: LeafletMap = reactLeafletMap.leafletElement
      autoCenter(leafletMap, props.vehicles, isAutoCentering, appState)
    }
  }, [shouldAutoCenter, props.vehicles, appState])

  return (
    <ReactLeafletMap
      id="id-vehicle-map"
      className="m-vehicle-map"
      ref={mapRef}
      maxBounds={[
        [41.2, -72],
        [43, -69.8],
      ]}
      zoomControl={false}
      center={defaultCenter}
      zoom={13}
      onmovestart={() => {
        // If the user drags or zooms, they want manual control of the map.
        // But don't disable shouldAutoCenter if the move was triggered by an auto center.
        if (!isAutoCentering.current) {
          setShouldAutoCenter(false)
        }
      }}
      onmoveend={() => {
        // Wait until the auto centering is finished to start listening for manual moves again.
        if (isAutoCentering.current) {
          isAutoCentering.current = false
        }
      }}
    >
      <ZoomControl position="topright" />
      <RecenterControl turnOnAutoCenter={() => setShouldAutoCenter(true)} controlOptions={{position: "topright"}} />
      <TileLayer
        url="https://mbta-map-tiles-dev.s3.amazonaws.com/osm_tiles/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {props.vehicles.map((vehicle: Vehicle) => (
        <Vehicle key={vehicle.id} vehicle={vehicle} />
      ))}
      {(props.shapes || []).map(shape => (
        <Shape key={shape.id} shape={shape} />
      ))}
    </ReactLeafletMap>
  )
}

export default Map
