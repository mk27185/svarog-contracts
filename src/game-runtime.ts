/**
 * Jednotný zdroj pravdy pro numerické limity herní smyčky (poloha, okolí).
 * Aplikace je importují — »magické číslo« v backendu/klientovi bez odsud je chyba.
 *
 * Přepsání prostředí: použij explicitní env proměnné v BE/FE a validuj (např. Zod);
 * nepřidávej tiché výchozí hodnoty v aplikačním kódu, pokud konfig chybí.
 */
export const POSITION_MIN_MOVE_METERS = 4;

/** Minimální interval mezi odeslanými aktualizacemi polohy (stejné jako „max 1× za 2 s“). */
export const POSITION_UPDATE_MIN_INTERVAL_MS = 2000;

/** Výchozí poloměr „kdo je v okolí“ pro serverové dotazy; env může přepsat po validaci. */
export const NEARBY_RADIUS_METERS_DEFAULT = 300;
