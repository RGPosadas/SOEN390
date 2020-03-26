import { Platform } from "react-native";

/**
 * Dynamic height adjustment of parent. Without this, autocomplete will not be pressable
 */
export const getOmniboxAutoCompleteHeight = (
  autoCompleteValues: string[],
  value: string,
  autoCompleteValuesDest: string[],
  showTimePicker: boolean,
  destinationValue: string
) => {
  const heightAutoCompleteElement: number = 75;
  const autoCompleteHeight: number = 235;
  const defaultAutoCompleteHeight: number = 260;

  if (autoCompleteValues && value !== "") {
    return (
      autoCompleteValues.length * heightAutoCompleteElement + autoCompleteHeight
    );
  }
  if (autoCompleteValuesDest && destinationValue !== "") {
    return (
      autoCompleteValuesDest.length * heightAutoCompleteElement +
      autoCompleteHeight
    );
  }
  if (Platform.OS === "ios" && showTimePicker) {
    return 240 + autoCompleteHeight;
  }
  return defaultAutoCompleteHeight;
};

/**
 * Two function simply because all the inputs and values are different
 */
export const getSearchBarAutoCompleteHeight = (
  autoCompleteValues: string[]
) => {
  const deafaultSearchBarHeight: number = 48;
  const searchBarHeight: number = 50;
  const autoCompleteElementHeight: number = 85;

  return autoCompleteValues
    ? autoCompleteValues.length * autoCompleteElementHeight + searchBarHeight
    : deafaultSearchBarHeight;
};