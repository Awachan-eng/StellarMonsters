
/* =========================
   味方データ
========================= */

const ALLY_DATA = [
  { number: 1, name: "味方1", position: "B10", hp: 32000 },
  { number: 2, name: "味方2", position: "D10", hp: 32000 },
  { number: 3, name: "味方3", position: "F10", hp: 32000 },
  { number: 4, name: "味方4", position: "H10", hp: 32000 }
];

/* =========================
   仮の敵データ
========================= */

const ENEMY_DATA = [
  { id: 1, name: "敵1", position: "C3", hp: 10000 },
  { id: 2, name: "敵2", position: "G3", hp: 10000 },
  { id: 3, name: "敵3", position: "E5", hp: 15000 }
];

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
