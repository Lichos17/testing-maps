// [START maps_react_map]
import {
  ReactNode,
  FC,
  useRef,
  useState,
  useEffect,
  Children,
  isValidElement,
  cloneElement,
} from 'react'
import { Status } from '@googlemaps/react-wrapper'

import { useDeepCompareEffectForMaps } from '../../hooks'

interface MapProps extends google.maps.MapOptions {
  style?: { [key: string]: string }
  onClick?: (e: google.maps.MapMouseEvent) => void
  onIdle?: (map: google.maps.Map) => void
  children?: ReactNode
  className?: string
}

export const Map: FC<MapProps> = ({ onClick, onIdle, className, children, style, ...options }) => {
  // [START maps_react_map_component_add_map_hooks]
  const ref = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map>()

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}))
    }
  }, [ref, map])
  // [END maps_react_map_component_add_map_hooks]

  // [START maps_react_map_component_options_hook]
  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options)
    }
  }, [map, options])
  // [END maps_react_map_component_options_hook]

  // [START maps_react_map_component_event_hooks]
  useEffect(() => {
    if (map) {
      ;['click', 'idle'].forEach((eventName) => google.maps.event.clearListeners(map, eventName))

      if (onClick) {
        map.addListener('click', onClick)
      }

      if (onIdle) {
        map.addListener('idle', () => onIdle(map))
      }
    }
  }, [map, onClick, onIdle])
  // [END maps_react_map_component_event_hooks]

  // [START maps_react_map_component_return]
  return (
    <>
      <div ref={ref} style={style} className={className} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          // @ts-expect-error: Unreachable code error
          return cloneElement(child, { map })
        }
      })}
    </>
  )
  // [END maps_react_map_component_return]
}

// [START maps_react_map_marker_component]
export const Marker: FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = useState<google.maps.Marker>()

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker())
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null)
      }
    }
  }, [marker])

  useEffect(() => {
    if (marker) {
      marker.setOptions(options)
    }
  }, [marker, options])

  return null
}

export {}
