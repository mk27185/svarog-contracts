# Svarog Contracts

This repository contains the shared schemas and protocols used across the Svarog ecosystem: **Engine**, **Backend**, and **Client**. 

The goal is to ensure interoperability through a "Contract-First" approach.

## 📜 Schemas

All schemas are defined using JSON Schema.

### 🗺️ Tile Manifest (`schemas/tile-manifest.json`)
Defines the structure of generated tilesets, including versioning, zoom levels, and layer URLs.

### 🕹️ Player Events (`schemas/player-event.json`)
Standardized format for all real-time game events (e.g., movements, interactions) sent via WebSockets/tRPC.

### 📦 Game Objects (`schemas/game-object.json`)
Defines the structure for entities within the game world, including position and metadata.

### ⚙️ Game runtime defaults (`schemas/game-runtime.json` + `src/game-runtime.ts`)

Shared numeric limits (minimum move between position updates, throttle interval, default nearby radius). The **TypeScript module** is the authoritative value for imports in apps; the JSON schema documents the same numbers for tooling or CI checks.

Consume from Node/Vite:

```ts
import {
  POSITION_MIN_MOVE_METERS,
  POSITION_UPDATE_MIN_INTERVAL_MS,
  NEARBY_RADIUS_METERS_DEFAULT,
} from 'svarog-contracts';
```

## 🚀 Usage

When adding new features that require data changes, update the relevant schema (and TS exports when applicable) **here first**, then implement in engine, backend, and client. Treat this repo as the **single source of truth** for cross-repo contracts. After TypeScript changes run **`npm run build`** before consumers install or deploy. There is no `prepare` lifecycle script so server-side **`npm ci --omit=dev`** does not need the TypeScript compiler for this package.
