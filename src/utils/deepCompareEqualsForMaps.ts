import { isLatLngLiteral } from '@googlemaps/typescript-guards'
import { createCustomEqual } from 'fast-equals'

// [END maps_react_map_marker_component]
// eslint-disable-next-line no-use-before-define
// @ts-expect-error: Unreachable code error
export const deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a: any, b: any) => {
  if (
    isLatLngLiteral(a) ||
    a instanceof google.maps.LatLng ||
    isLatLngLiteral(b) ||
    b instanceof google.maps.LatLng
  ) {
    return new google.maps.LatLng(a).equals(new google.maps.LatLng(b))
  }

  // TODO extend to other types

  // use fast-equals for other objects

  // @ts-expect-error: Unreachable code error
  return deepEqual(a, b)
})
