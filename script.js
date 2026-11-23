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

      // 味方がいるマスか確認
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

      field.appendChild(cell);
    }
  }

  console.log("戦闘フィールドを生成しました。");
  console.log("味方4体を初期配置しました。");
}

/* =========================
   ゲーム初期化
========================= */

function initializeGame() {
  createBattleField();
}

// ゲーム開始
initializeGame();
