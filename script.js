
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
   味方初期配置
========================= */

const ALLY_INITIAL_POSITIONS = [
  { number: 1, position: "B10" },
  { number: 2, position: "D10" },
  { number: 3, position: "F10" },
  { number: 4, position: "H10" }
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

      cell.setAttribute("aria-label", position);
      cell.title = position;

      // 味方の配置
      const ally = ALLY_INITIAL_POSITIONS.find(
        character => character.position === position
      );

      if (ally) {
        cell.textContent = ally.number;
        cell.style.backgroundColor = "#3978c5";
        cell.style.color = "#ffffff";
        cell.style.fontWeight = "bold";
        cell.style.fontSize = "14px";
        cell.style.display = "flex";
        cell.style.justifyContent = "center";
        cell.style.alignItems = "center";
        cell.dataset.ally = ally.number;
      }

      // 敵の配置
      const enemy = ENEMY_DATA.find(
        character => character.position === position
      );

      if (enemy) {
        cell.textContent = "E" + enemy.id;
        cell.style.backgroundColor = "#b64250";
        cell.style.color = "#ffffff";
        cell.style.fontWeight = "bold";
        cell.style.fontSize = "12px";
        cell.style.display = "flex";
        cell.style.justifyContent = "center";
        cell.style.alignItems = "center";
        cell.dataset.enemy = enemy.id;
      }

      field.appendChild(cell);
    }
  }

  console.log("戦闘フィールドを生成しました。");
  console.log("味方4体・敵3体を配置しました。");
}

/* =========================
   ゲーム初期化
========================= */

function initializeGame() {
  createBattleField();
}

initializeGame();
