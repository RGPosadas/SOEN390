import React, { useEffect, useState } from "react";
import { Overlay } from "react-native-maps";
import { Buildings } from "../../constants/buildings.data";
import { BuildingId, ZoomLevel, IndoorInformation } from "../../types/main";
import { CONCORDIA_RED, BUILDING_UNTAPPED } from "../../constants/style";
import { getAllCampuses } from "../../constants/campus.data";
import { floorOverlays } from "../../constants/floors.data";
import { getAllPOI } from "../../constants/poi.data";
import CustomMarker from "./custom-marker.component";
import CustomPolygon from "./custom-polygon.component";

interface IProps {
  onBuildingTap: (id: BuildingId) => void;
  tappedBuilding: BuildingId;
  zoomLevel: ZoomLevel;
  indoorInformation: IndoorInformation;
}

/**
 * Wrapper Component for Polygons and Markers which overlay campus buildings.
 */
const MapOverlays = ({
  onBuildingTap,
  tappedBuilding,
  zoomLevel,
  indoorInformation
}: IProps) => {
  /**
   * Fill color for the Polygons
   */
  const [fillColor, setFillColor] = useState<string>(null);
  const [tappedColor, setTappedColor] = useState<string>(null);

  useEffect(() => {
    setTappedColor(CONCORDIA_RED);
    setFillColor(BUILDING_UNTAPPED);
  }, []);

  return (
    <>
      {/**
       * Adds a marker for each campus
       */}
      {zoomLevel === ZoomLevel.CAMPUS
        ? getAllCampuses().map((campus, index) => (
            <CustomMarker
              markerType="campus"
              key={index}
              location={campus.region}
              text={campus.displayName}
              onPress={() => {}}
            />
          ))
        : null}

      {/**
       * Adds a polygon for each building
       */}
      {zoomLevel === ZoomLevel.OUTDOOR ? (
        <>
          {Buildings.filter(building => building.boundingBox.length > 0).map(
            building => (
              <CustomPolygon
                key={building.id}
                coordinates={building.boundingBox}
                tappable
                fillColor={
                  tappedBuilding != null && tappedBuilding === building.id
                    ? tappedColor
                    : fillColor
                }
                onPress={() => {
                  onBuildingTap(building.id);
                }}
              />
            )
          )}
        </>
      ) : null}

      {/**
       * Adds a marker for each building
       */}
      {zoomLevel === ZoomLevel.OUTDOOR || zoomLevel === ZoomLevel.INDOOR
        ? Buildings.map((building, index) => (
            <React.Fragment key={index}>
              <CustomMarker
                markerType="building"
                key={building.id}
                location={building.location}
                onPress={() => {
                  onBuildingTap(building.id);
                }}
                text={
                  zoomLevel === ZoomLevel.OUTDOOR
                    ? BuildingId[building.id]
                    : building.displayName
                }
              />
            </React.Fragment>
          ))
        : null}

      {/**
       * Adds a polygon for each POI
       */}
      {zoomLevel === ZoomLevel.INDOOR ? (
        <>
          {floorOverlays.map(floorOverlay => (
            <Overlay
              key={floorOverlay.id}
              bounds={floorOverlay.bounds}
              image={floorOverlay.image}
            />
          ))}

          {getAllPOI()
            .filter(poi => {
              if (indoorInformation.currentFloor == null) {
                return true;
              }
              return poi.level === indoorInformation.currentFloor.level;
            })
            .map(poi => (
              <CustomMarker
                markerType="poi"
                key={poi.id}
                location={poi.location}
                text={poi.displayName}
                onPress={() => {}}
              />
            ))}
        </>
      ) : null}
    </>
  );
};

export default MapOverlays;
