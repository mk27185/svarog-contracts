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

## 🚀 Usage

When adding new features that require data changes, update the relevant schema here first, then implement the changes in the respective repositories.
