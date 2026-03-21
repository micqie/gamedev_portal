const gameGrid = document.getElementById('gameGrid');
const noGames = document.getElementById('noGames');

function loadGames() {
  const games = [];

  // Find all subfolders in the root that start with 'game' and have index.html
  for (const entry of ['game1','game2','game3','game4','game5','game6']) {
    const path = `${entry}/index.html`;
    games.push({ id: entry, name: `Game: ${entry}`, path });
  }

  // Render cards using known entries; if the folder doesn't exist the link may 404.
  gameGrid.innerHTML = '';
  let count = 0;
  for (const g of games) {
    const card = document.createElement('article');
    card.className = 'game-card';

    const title = document.createElement('h3');
    title.textContent = g.name;
    card.appendChild(title);

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = 'Unity WebGL build folder';
    card.appendChild(meta);

    const links = document.createElement('div');
    links.className = 'links';

    const play = document.createElement('a');
    play.href = g.path;
    play.textContent = 'Play';
    play.target = '_blank';
    links.appendChild(play);

    const info = document.createElement('a');
    info.href = '#';
    info.textContent = 'README';
    info.onclick = (e) => { e.preventDefault(); alert('Place your game in the game folder and open the Play button.'); };
    links.appendChild(info);

    card.appendChild(links);
    gameGrid.appendChild(card);
    count += 1;
  }

  noGames.style.display = count ? 'none' : 'block';
}

loadGames();
