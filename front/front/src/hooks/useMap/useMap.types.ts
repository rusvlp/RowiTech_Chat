export type MapOrEntries<K, V> = Map<K, V> | [K, V][]

export interface Actions<K, V> {
  set: (key: K, value: V) => void
  setAll: (entries: MapOrEntries<K, V>) => void
  remove: (key: K) => void
  reset: Map<K, V>['clear']
}

export type Return<K, V> = [Omit<Map<K, V>, 'set' | 'clear' | 'delete'>, Actions<K, V>];