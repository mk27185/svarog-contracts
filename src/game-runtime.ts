/**
 * Mirrors game-runtime.json — keep in sync when editing the JSON file.
 * Apps should import `svarog-contracts/game-runtime.json` as the runtime SSOT.
 */
export const POSITION_MIN_MOVE_METERS = 4;
export const POSITION_UPDATE_MIN_INTERVAL_MS = 2000;
export const NEARBY_RADIUS_METERS_DEFAULT = 300;

export const GPS_ENABLE_HIGH_ACCURACY = true;
export const GPS_MAXIMUM_AGE_MS = 1000;
export const GPS_TIMEOUT_MS = 20_000;
export const GPS_DISPLAY_MIN_MOVE_METERS = 15;
export const GPS_DISPLAY_MIN_INTERVAL_MS = 400;

export const GPS_KALMAN_PROCESS_NOISE_ACCEL = 1.5;
export const GPS_KALMAN_DEFAULT_MEASUREMENT_NOISE_M = 8;
export const GPS_KALMAN_MAX_MEASUREMENT_NOISE_M = 80;
export const GPS_KALMAN_MAX_INNOVATION_M = 60;
export const GPS_KALMAN_INITIAL_VELOCITY_VARIANCE = 4;

export const CAMERA_DEFAULT_ROTATION_MODE = 'sensor' as const;
export const CAMERA_MIN_DISTANCE = 30;
export const CAMERA_MAX_DISTANCE = 8000;
export const CAMERA_MIN_ELEVATION = 10;
export const CAMERA_MAX_ELEVATION = 80;
export const CAMERA_DEFAULT_DISTANCE = 500;
export const CAMERA_DEFAULT_ELEVATION = 45;
export const CAMERA_DEFAULT_AZIMUTH = 0;
export const CAMERA_COMPASS_CALIBRATION_DEG = -45;
export const CAMERA_FOV = 50;

export const TILE_LOAD_BATCH_SIZE = 4;
export const TILE_LOAD_MIN_INTERVAL_MS = 800;

// ── World / tile configuration (mirrors world-config.json) ─────────────────
export const TILE_SIZE_M = 200;
export const TILE_LOAD_RADIUS = 12;
export const TILE_UPSAMPLE_FACTOR = 10;
export const TILE_DRACO = true;
