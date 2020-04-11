import React, { useEffect } from "react";
import { Platform } from "react-native";
import { Polyline, Region } from "react-native-maps";
import PathFindingService from "../../services/pathfinding.service";
import {
  POI,
  FloorPath,
  Line,
  MarkerLocation,
  POICategory,
} from "../../types/main";
import { CONCORDIA_RED } from "../../styles";
import { getAllPOI } from "../../constants";

interface iProps {
  floorPaths: FloorPath[];
  start: MarkerLocation;
  end: MarkerLocation;
  chosenFloorLevel: number;
  animateToStartLocation: (region: Region) => void;
}

/**
 *
 * @param param0
 */
const TravelRoute = ({
  start,
  end,
  chosenFloorLevel,
  animateToStartLocation,
  floorPaths,
}: iProps) => {
  useEffect(() => {
    animateToStartLocation({
      latitude: start.location.latitude,
      longitude: start.location.longitude,
      latitudeDelta: 0.000975900094058102,
      longitudeDelta: 0.000238533675670624,
    });
  }, [start]);

  /**
   *
   * @param floorPath
   */
  const getPathPerFloor = (floorPath: FloorPath) => {
    if (floorPath.buildingId === "H") {
      return chosenFloorLevel === floorPath.level;
    }
    return true;
  };

  /**
   *
   */
  const pathPerFloor = floorPaths.filter((floorPath) => {
    return getPathPerFloor(floorPath);
  });

  /**
   *
   */
  const pathLines: Line[][] = pathPerFloor.map((floorPath) => floorPath.path);

  return (
    <>
      {pathLines.map((lines) =>
        lines.map((polyline, index) => (
          <Polyline
            testID={`polylinePath${index}`}
            coordinates={polyline}
            fillColor={CONCORDIA_RED}
            key={index}
            lineDashPattern={Platform.OS === "ios" ? [0.5, 0.5] : [0.5, 7]}
            strokeWidth={5}
            strokeColor={CONCORDIA_RED}
          />
        ))
      )}
    </>
  );
};

export default TravelRoute;
