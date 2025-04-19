async function loadAllPokemonDataInBackground() {
    console.log("Beginne mit dem Laden aller Pokémon-Daten im Hintergrund...");
    try {
        await get1302pokemonData(); // Lädt alle Pokémon-Daten und speichert sie im Local Storage
        console.log("Alle Pokémon-Daten wurden erfolgreich im Hintergrund geladen.");
    } catch (error) {
        console.error("Fehler beim Laden der Pokémon-Daten im Hintergrund:", error);
    }
}