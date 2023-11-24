document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const cells = new Array(9).fill(null);
    let currentPlayer = "X";
    let winner = null;
  
    function createCell(index) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.addEventListener("click", function () {
        if (!cells[index] && !winner) {
          cells[index] = currentPlayer;
          cell.textContent = currentPlayer;
          checkWinner();
          if (!winner) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            if (currentPlayer === "O") {
              computerMove();
            }
          }
        }
      });
      return cell;
    }
  
    function renderBoard() {
      board.innerHTML = "";
      cells.forEach((value, index) => {
        const cell = createCell(index);
        cell.textContent = value;
        board.appendChild(cell);
      });
    }
  
    function checkWinner() {
      const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6] // Diagonales
      ];
  
      for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
          winner = cells[a];
          alert(`¡${winner} ha ganado!`);
          resetGame();
          return;
        }
      }
  
      if (!cells.includes(null)) {
        alert("¡Empate!");
        resetGame();
      }
    }
  
    function computerMove() {
      const emptyCells = cells.reduce((acc, cell, index) => {
        if (!cell) {
          acc.push(index);
        }
        return acc;
      }, []);
  
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const computerIndex = emptyCells[randomIndex];
      cells[computerIndex] = currentPlayer;
  
      renderBoard();
      checkWinner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  
    function resetGame() {
      cells.fill(null);
      currentPlayer = "X";
      winner = null;
      renderBoard();
    }
  
    renderBoard();
  });
  