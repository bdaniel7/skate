defmodule Concentrate.VehiclePositionTest do
  use ExUnit.Case, async: true
  import Concentrate.VehiclePosition
  alias Concentrate.Mergeable

  describe "Concentrate.Mergeable" do
    test "merge/2 takes the latest of the two positions" do
      first =
        new(
          last_updated: 1,
          latitude: 1,
          longitude: 1,
          sources: MapSet.new(["first"])
        )

      second = new(last_updated: 2, latitude: 2, longitude: 2, sources: MapSet.new(["second"]))

      expected =
        new(
          last_updated: 2,
          latitude: 2,
          longitude: 2,
          sources: MapSet.new(["first", "second"])
        )

      assert Mergeable.merge(first, second) == expected
      assert Mergeable.merge(second, first) == expected
    end

    test "merge/2 ignores the second if last_updated is nil" do
      first = new(last_updated: 1, latitude: 1, longitude: 1, trip_id: "trip")
      second = new(last_updated: nil, latitude: 2, longitude: 2)
      assert Mergeable.merge(first, second) == first
    end

    test "merge/2 ignores the first if last_updated is nil" do
      first = new(last_updated: nil, latitude: 1, longitude: 1, trip_id: "trip")
      second = new(last_updated: 2, latitude: 2, longitude: 2)
      assert Mergeable.merge(first, second) == second
    end

    test "merge/2 takes the swiftly trip and route values if there is one" do
      swiftly =
        new(
          last_updated: 1,
          latitude: 1,
          longitude: 1,
          trip_id: "swiftly_trip",
          route_id: "swiftly_route",
          sources: MapSet.new(["swiftly"])
        )

      non_swiftly =
        new(
          last_updated: 2,
          latitude: 2,
          longitude: 2,
          trip_id: "busloc_trip",
          route_id: "busloc_route",
          sources: MapSet.new(["busloc"])
        )

      swiftly_later =
        new(
          last_updated: 3,
          latitude: 3,
          longitude: 3,
          trip_id: "swiftly_trip",
          route_id: "swiftly_route",
          sources: MapSet.new(["swiftly"])
        )

      expected =
        new(
          last_updated: 2,
          latitude: 2,
          longitude: 2,
          trip_id: "swiftly_trip",
          route_id: "swiftly_route",
          sources: MapSet.new(["busloc", "swiftly"])
        )

      expected_later =
        new(
          last_updated: 3,
          latitude: 3,
          longitude: 3,
          trip_id: "swiftly_trip",
          route_id: "swiftly_route",
          sources: MapSet.new(["busloc", "swiftly"])
        )

      assert Mergeable.merge(swiftly, non_swiftly) == expected
      assert Mergeable.merge(non_swiftly, swiftly) == expected
      assert Mergeable.merge(swiftly_later, non_swiftly) == expected_later
      assert Mergeable.merge(non_swiftly, swiftly_later) == expected_later
    end

    test "merge/2 doesn't take the other trip and route values if the swiftly values are nil" do
      swiftly =
        new(
          last_updated: 1,
          latitude: 1,
          longitude: 1,
          trip_id: nil,
          route_id: nil,
          sources: MapSet.new(["swiftly"])
        )

      non_swiftly =
        new(
          last_updated: 2,
          latitude: 2,
          longitude: 2,
          trip_id: "busloc_trip",
          route_id: "busloc_route",
          sources: MapSet.new(["busloc"])
        )

      expected =
        new(
          last_updated: 2,
          latitude: 2,
          longitude: 2,
          trip_id: nil,
          route_id: nil,
          sources: MapSet.new(["busloc", "swiftly"])
        )

      assert Mergeable.merge(swiftly, non_swiftly) == expected
      assert Mergeable.merge(non_swiftly, swiftly) == expected
    end
  end

  describe "comes_from_swiftly?/1" do
    test "true if sources include swiftly" do
      vp =
        new(
          last_updated: 1,
          latitude: 1,
          longitude: 1,
          sources: MapSet.new(["busloc", "swiftly"])
        )

      assert comes_from_swiftly?(vp)
    end

    test "false if sources don't include swiftly" do
      vp =
        new(
          last_updated: 1,
          latitude: 1,
          longitude: 1,
          sources: MapSet.new(["busloc"])
        )

      refute comes_from_swiftly?(vp)
    end

    test "false if there are no sources" do
      vp =
        new(
          last_updated: 1,
          latitude: 1,
          longitude: 1
        )

      refute comes_from_swiftly?(vp)
    end
  end
end
