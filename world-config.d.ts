export interface WorldConfig {
  tile_size_m: number
  draco: boolean
  upsample_factor: number
  load_radius_tiles: number
}

declare const config: WorldConfig
export default config
