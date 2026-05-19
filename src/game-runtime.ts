/**
 * Jednotný zdroj pravdy pro numerické limity herní smyčky (poloha, okolí).
 * Aplikace je importují — »magické číslo« v backendu/klientovi bez odsud je chyba.
 *
 * Přepsání prostředí: použij explicitní env proměnné v BE/FE a validuj (např. Zod);
 * nepřidávej tiché výchozí hodnoty v aplikačním kódu, pokud konfig chybí.
 */
export const POSITION_MIN_MOVE_METERS = 4;
export const POSITION_UPDATE_MIN_INTERVAL_MS = 2000; /** Minimální interval mezi odeslanými aktualizacemi polohy (stejné jako „max 1× za 2 s“). */
export const NEARBY_RADIUS_METERS_DEFAULT = 300; /** Výchozí poloměr „kdo je v okolí“ pro serverové dotazy; env může přepsat po validaci. */

// ── World / tile configuration (mirrors world-config.json — single source of truth) ─
/** Cilova delka strany dlazdice v metrech (urci zoom level pri generovani). */
export const TILE_SIZE_M = 200;
/** Polomer nacitani dlazdic kolem hrace (1 -> okno 3x3, 2 -> 5x5). */
export const TILE_LOAD_RADIUS = 1;
/** Faktor presamplovaani DEM pri generovani terenu. */
export const TILE_UPSAMPLE_FACTOR = 10;
/** Pouzit Draco kompresi pri exportu GLB. */
export const TILE_DRACO = true;
