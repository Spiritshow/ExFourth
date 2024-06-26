# Задание 1: Таймер обратного отсчета
## Цель: Создать простой таймер обратного отсчета, который начинает отсчет, например, с 10 до 0.

### Шаги:
Создайте компонент CountdownTimer.
Используйте useState для хранения текущего значения таймера.
Настройте useEffect, чтобы установить интервал, который уменьшает значение каждую секунду.
После того как таймер достигнет нуля, остановите интервал с помощью функции очистки в useEffect.

# Задание 2: Загрузка и отображение данных
## Цель: Создать компонент, который загружает список пользователей с API при первой загрузке компонента.

### Шаги:
Создайте компонент UserList.
Используйте useState для хранения списка пользователей.
Используйте useEffect для отправки HTTP-запроса к API (например, https://jsonplaceholder.typicode.com/users) при монтировании компонента.
Отобразите список пользователей на странице.

# Задание 3: Слежение за изменением размера окна
## Цель: Создать компонент, который отображает и обновляет текущий размер окна браузера.

### Шаги:
Создайте компонент WindowSize.
Используйте useState для хранения размеров окна.
Используйте useEffect для добавления обработчика события resize, который обновляет состояние с текущими размерами окна.
Убедитесь, что обработчик события удаляется при размонтировании компонента, чтобы избежать утечек памяти.
