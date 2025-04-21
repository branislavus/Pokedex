function playNoise(url) {    
    const urlWithoutPng = url.replace(".png", "");
    const idMatch = urlWithoutPng.match(/\/(\d+)$/);
    if (!idMatch || !idMatch[1]) {
        console.error(`Keine gültige ID in der URL gefunden.`);
        return;
    }
    const pokemonId = idMatch[1];
    const audioUrl = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonId}.ogg`;
    const audio = new Audio(audioUrl);
    audio.play().catch(error => {
        console.error(`Fehler beim Abspielen der Audio-Datei für ID ${pokemonId}:`, error);
    });
}