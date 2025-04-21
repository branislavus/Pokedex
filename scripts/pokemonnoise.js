function playNoise(url) {    
    const urlWithoutPng = url.replace(".png", "");
    const idMatch = urlWithoutPng.match(/\/(\d+)$/);
    if (!idMatch || !idMatch[1]) {
        return;
    }
    const pokemonId = idMatch[1];
    const audioUrl = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonId}.ogg`;
    const audio = new Audio(audioUrl);
    audio.play();
}