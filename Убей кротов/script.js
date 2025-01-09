let dead = 0; // Счётчик побед
let lost = 0; // Счётчик поражений

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function resetGame() {
  alert(dead === 10 ? 'Вы победили!' : 'Вы проиграли!');
  dead = 0;
  lost = 0;
  updateScore();
}

function updateScore() {
  document.getElementById('dead').textContent = dead;
  document.getElementById('lost').textContent = lost;
}

// Регистрируем обработчики событий
for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);

  hole.addEventListener('click', () => {
    if (hole.classList.contains('hole_has-mole')) {
      dead++;
    } else {
      lost++;
    }

    if (dead === 10 || lost === 5) {
      resetGame();
    } else {
      updateScore();
    }
  });
}

// Функция для случайного появления кротов
function randomMole() {
  // Убираем крота из всех лунок
  document.querySelectorAll('.hole').forEach((hole) => {
    hole.classList.remove('hole_has-mole');
  });

  // Добавляем крота в случайную лунку
  const randomIndex = Math.floor(Math.random() * 9) + 1;
  const randomHole = getHole(randomIndex);
  randomHole.classList.add('hole_has-mole');
}

// Интервал появления кротов
setInterval(randomMole, 1000);
