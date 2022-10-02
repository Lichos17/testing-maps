import { useEffect } from 'react'
import { useDeepCompareMemoize } from './useDeepCompareMemoize'

export const useDeepCompareEffectForMaps = (
  callback: React.EffectCallback,
  dependencies: any[],
) => {
  useEffect(callback, dependencies.map(useDeepCompareMemoize))
}
