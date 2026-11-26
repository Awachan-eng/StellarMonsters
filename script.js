
/* =========================
   味方情報表示
========================= */

function createAllyList() {
  const list = document.getElementById("ally-list");

  if (!list) return;

  list.innerHTML = "";

  ALLY_DATA.forEach(ally => {
    const card = document.createElement("div");

    card.style.backgroundColor = "#35415d";
    card.style.borderRadius = "6px";
    card.style.padding = "8px";
    card.style.fontSize = "12px";
    card.style.fontWeight = "bold";

    card.textContent = `${ally.number}. ${ally.name}`;

    list.appendChild(card);
  });

  // チーム全体のHP
  const totalHP = ALLY_DATA.reduce(
    (total, ally) => total + ally.hp,
    0
  );

  const hpDisplay = document.getElementById("current-hp");

  if (hpDisplay) {
    hpDisplay.textContent =
      `${totalHP.toLocaleString()} / ${totalHP.toLocaleString()}`;
  }
}

/* =========================
   ゲーム初期化
========================= */

function initializeGame() {
  createBattleField();
  createAllyList();
}

initializeGame();
