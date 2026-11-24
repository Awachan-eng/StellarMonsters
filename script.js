
/* =========================
   ゲーム基本設定
========================= */

const GAME_CONFIG = {
  rows: 11,
  columns: 9,
  columnNames: [
    "A", "B", "C", "D", "E",
    "F", "G", "H", "I"
  ]
};

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

    card.innerHTML = `
      <div style="font-weight:bold;">
        ${ally.number}. ${ally.name}
      </div>
      <div>HP: ${ally.hp.toLocaleString()}</div>
    `;

    list.appendChild(card);
  });

  // チームHP表示
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
   フィールド生成
========================= */

function createBattleField() {
  const field = document.getElementById("battle-field");

  if (!field) {
    console.error("戦闘フィールドが見つかりません。");
    return;
  }

  field.innerHTML = "";

  for (let row = 1; row <= GAME_CONFIG.rows; row++) {
    for (let column = 0; column < GAME_CONFIG.columns; column++) {
      const cell = document.createElement("div");

      cell.classList.add("field-cell");

      const columnName = GAME_CONFIG.columnNames[column];
      const position = columnName + row;

      cell.dataset.row = row;
      cell.dataset.column = columnName;
      cell.dataset.position = position;

      cell.title = position;

      const ally = ALLY_DATA.find(
        character => character.position === position
      );

      const enemy = ENEMY_DATA.find(
        character => character.position === position
      );

      if (ally) {
        cell.textContent = ally.number;
        cell.style.backgroundColor = "#3978c5";
        cell.style.color = "#ffffff";
        cell.style.fontWeight = "bold";
        cell.style.display = "flex";
        cell.style.justifyContent = "center";
        cell.style.alignItems = "center";
      }

      if (enemy) {
        cell.textContent = "E" + enemy.id;
        cell.style.backgroundColor = "#b64250";
        cell.style.color = "#ffffff";
        cell.style.fontWeight = "bold";
        cell.style.display = "flex";
        cell.style.justifyContent = "center";
        cell.style.alignItems = "center";
      }

      field.appendChild(cell);
    }
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
