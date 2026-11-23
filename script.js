
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
   フィールド生成
========================= */

function createBattleField() {
  const field = document.getElementById("battle-field");

  if (!field) {
    console.error("戦闘フィールドが見つかりません。");
    return;
  }

  // 既存のマスを削除
  field.innerHTML = "";

  // 11行 × 9列のマスを生成
  for (let row = 1; row <= GAME_CONFIG.rows; row++) {
    for (
      let column = 0;
      column < GAME_CONFIG.columns;
      column++
    ) {
      const cell = document.createElement("div");

      // マスの基本情報
      cell.classList.add("field-cell");

      // 座標情報を保存
      const columnName =
        GAME_CONFIG.columnNames[column];

      const position = columnName + row;

      cell.dataset.row = row;
      cell.dataset.column = columnName;
      cell.dataset.position = position;

      // マスの説明
      cell.setAttribute(
        "aria-label",
        position
      );

      cell.title = position;

      // フィールドに追加
      field.appendChild(cell);
    }
  }

  console.log("戦闘フィールドを生成しました。");
  console.log(
    `生成したマス数：${GAME_CONFIG.rows * GAME_CONFIG.columns}`
  );
}

/* =========================
   ゲーム初期化
========================= */

function initializeGame() {
  createBattleField();
}

// ゲーム開始
initializeGame();
