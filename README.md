---[DEMO LINK](https://panasiuk-yuriy.github.io/todo_test_project)

+ upd 27.07
  Добавлено можливісь редагування Task за допомогою DoubleClick на таску. 
  Підтвердити редагування за допомогою Enter, відмінити Escape або курсором в іншій області.


Задание: Реализовать ToDo приложение, которое включает в себя следующий функционал:

1. Добавление нового элемента в список, посредством ввода имени элемента в текстовое поле ниже списка и нажатия на кнопку "Add Task"

2. По клику на элемент в списке, элемент меняет свой статус done на true. Этот же элемент в списке окрашивается в приглушенный цвет и рядом появляется кнопка "Delete".
Повторное нажатие на элементе устанавливает статус done в false, возвращает цвет и убирает кнопку

3. Удаление "выполненного" элемента, через нажатие на кнопку "Delete"

Будет плюсом:
1. Реализация поиска, посредством ввода текста в поле над списком. Поиск осуществляется по событию "onKeyUp".
То есть, список перефильтровывается каждый раз, когда пользователь вводит или удаляет новый символ.

2. Pop-up окно, уточняющее намерение удалить элемент с кнопками "OK", "Cancel"
