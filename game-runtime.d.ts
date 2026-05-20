export interface GameRuntimeKalmanConfig {
  process_noise_accel: number
  default_measurement_noise_m: number
  max_measurement_noise_m: number
  max_innovation_m: number
  initial_velocity_variance: number
}

export interface GameRuntimeGpsConfig {
  enable_high_accuracy: boolean
  maximum_age_ms: number
  timeout_ms: number
  display_min_move_meters: number
  display_min_interval_ms: number
  kalman: GameRuntimeKalmanConfig
}

export interface GameRuntimeCameraConfig {
  default_rotation_mode: 'sensor' | 'manual'
  min_distance: number
  max_distance: number
  min_elevation: number
  max_elevation: number
  default_distance: number
  default_elevation: number
  default_azimuth: number
  compass_calibration_deg: number
  fov: number
}

export interface GameRuntimeTilesConfig {
  load_batch_size: number
  load_min_interval_ms: number
}

export interface GameRuntimeConfig {
  position_min_move_meters: number
  position_update_min_interval_ms: number
  nearby_radius_meters_default: number
  gps: GameRuntimeGpsConfig
  camera: GameRuntimeCameraConfig
  tiles: GameRuntimeTilesConfig
}

declare const config: GameRuntimeConfig
export default config
