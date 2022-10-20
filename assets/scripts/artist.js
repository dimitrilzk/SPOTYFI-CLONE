async function lista() {
  // 1 parte
  let queryString2 = new URLSearchParams(window.location.search);
  let idArtist = queryString2.get("id");
  let cambiamento = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${idArtist}`);
  let convertito = await cambiamento.json();
  // 2 parte
    document.querySelector(".title-item").innerHTML = convertito.name
  // 3 parte
  let listaCanzoni = convertito.tracklist
  let convertLista = await fetch(listaCanzoni)
  let convertLista2 = await convertLista.json();
  let convertLista3 = convertLista2.data
  // 4 parte
  for (let i = 0; i < convertLista3.lenght ; i++) {
    document.querySelector("#list").innerHTML += 
      `<div id="list-item">
        <div class="allineamento">
        <div class="number-item">${i + 1}</div>
        <img class="img-album" src="${convertLista3[i].contributors.picture_small}">
        <div class="contenitor-list">
        ${convertLista3[i].title}
        </div>
        <div class="visualize">
            ${convertLista3[i].rank}
        </div>
        <div class="duration">
        ${convertLista3[i].duration}
        </div>
        </div>
        <div>`;
  }
}
window.onload = async () => {
  await lista();
};
