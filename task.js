document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task__input');
    const taskList = document.getElementById('tasks__list');
    const tasksForm = document.getElementById('tasks__form');
  
    // Функция для добавления новой задачи
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText === '') {
        return; // Не добавляем пустые задачи
      }
  
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
  
      const taskTitle = document.createElement('div');
      taskTitle.classList.add('task__title');
      taskTitle.textContent = taskText;
  
      const removeButton = document.createElement('a');
      removeButton.href = '#';
      removeButton.classList.add('task__remove');
      removeButton.textContent = '×';
  
      // Добавляем обработчик события для удаления задачи
      removeButton.addEventListener('click', function (event) {
        event.preventDefault();
        taskElement.remove();
      });
  
      taskElement.appendChild(taskTitle);
      taskElement.appendChild(removeButton);
      taskList.appendChild(taskElement);
  
      taskInput.value = ''; // Очищаем поле ввода
    }
  
    // Добавляем обработчик события для отправки формы
    tasksForm.addEventListener('submit', function (event) {
      event.preventDefault();
      addTask();
    });
  });