import { renderHook } from "@testing-library/react-hooks"
import * as Api from "../../src/api"
import useRouteShapes from "../../src/hooks/useRouteShapes"
import { Shape, ShapesByRouteId } from "../../src/schedule.d"
import { instantPromise, mockUseStateOnce } from "../testHelpers/mockHelpers"

// tslint:disable: react-hooks-nesting no-empty

jest.mock("../../src/api", () => ({
  __esModule: true,
  fetchShapeForRoute: jest.fn(() => new Promise<Shape[]>(() => {})),
}))

describe("useRouteShapes", () => {
  test("fetches a shape for a route if we don't yet it them", () => {
    const mockFetchShape: jest.Mock = Api.fetchShapeForRoute as jest.Mock

    const { result } = renderHook(() => {
      return useRouteShapes(["1"])
    })

    expect(mockFetchShape).toHaveBeenCalledTimes(1)
    expect(mockFetchShape).toHaveBeenCalledWith("1")
    expect(result.current).toEqual({ "1": null })
  })

  test("returns the shape when the api call returns", () => {
    const shapes: Shape[] = [
      {
        id: "shape1",
        points: [{ lat: 42.41356, lon: -70.99211 }],
      },
      {
        id: "shape2",
        points: [{ lat: 43.41356, lon: -71.99211 }],
      },
    ]
    const mockFetchShape: jest.Mock = Api.fetchShapeForRoute as jest.Mock
    mockFetchShape.mockImplementationOnce(() => instantPromise(shapes))

    const { result } = renderHook(() => {
      return useRouteShapes(["1"])
    })

    expect(result.current).toEqual({ "1": shapes })
  })

  test("does not refetch shape that is loading or loaded", () => {
    const shapes: Shape[] = [
      {
        id: "shape1",
        points: [{ lat: 42.41356, lon: -70.99211 }],
      },
      {
        id: "shape2",
        points: [{ lat: 43.41356, lon: -71.99211 }],
      },
    ]
    const selectedRouteIds = ["2", "3"]
    const shapesByRouteId: ShapesByRouteId = {
      2: null,
      3: shapes,
    }

    const mockFetchShape: jest.Mock = Api.fetchShapeForRoute as jest.Mock
    mockUseStateOnce<ShapesByRouteId>(shapesByRouteId)

    const { result } = renderHook(() => {
      return useRouteShapes(selectedRouteIds)
    })

    expect(mockFetchShape).not.toHaveBeenCalled()
    expect(result.current).toEqual(shapesByRouteId)
  })
})