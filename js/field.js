
/* =========================
   フィールド設定
========================= */

const FIELD_CONFIG = {
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

  field.innerHTML = "";

  for (let row = 1; row <= FIELD_CONFIG.rows; row++) {
    for (let column = 0; column < FIELD_CONFIG.columns; column++) {
      const cell = document.createElement("div");

      cell.classList.add("field-cell");

      const columnName = FIELD_CONFIG.columnNames[column];
      const position = columnName + row;

      cell.dataset.row = row;
      cell.dataset.column = columnName;
      cell.dataset.position = position;

      cell.title = position;

      // 味方の配置
      const ally = ALLY_DATA.find(
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

      // 敵の配置
      const enemy = ENEMY_DATA.find(
        character => character.position === position
      );

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

  console.log("戦闘フィールドを生成しました。");
}
