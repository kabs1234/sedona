# Верстка макета сайта «Sedona». Сайт был сверстан адаптивно

* Сделал: Zhashkeyev Aikhan.
Ссылка на [макет](https://www.figma.com/design/IPuxy8gYqAS73jhLutcQhJ/HTML-2-%2F-%D0%A1%D0%B5%D0%B4%D0%BE%D0%BD%D0%B0-(24)?node-id=72-100&t=wrqqrCnqVCcgShmd-1)

Билд запускается через npm run build.

### Техническое задание:

## 1. Общие технические требования

1.1. Сетка: определена в макете.

1.2. Адаптивность сетки: мобильная, планшетная и десктопная версии («фикс»).

1.3. Адаптивность графики: ретинизация, векторные изображения.

1.4. Используемая методология: БЭМ.

1.5. Используемый препроцессор: Sass.

1.6. Используемый инструмент автоматизации: Gulp.

1.7. Используемые библиотеки: нет.

1.8. Кроссбраузерность: Chrome, Firefox.

1.9. Типографика: частично определена в макете.

1.10. Используемый шрифт: PT Sans.

## 2. Пояснения

2.1. Были сверстаны все 3 страницы (главная страница, страница с формой, страница с фото и видео).

2.2. В макетах есть модальные окна.

2.3. Макеты были сверстанны постепенно: сначала мобильная версия, далее от мобильной версии к планшетной, а затем и к десктопной.

Требования к поведению блоков

## 3. Все макеты

3.1. Между версиями (мобильная, планшетная, десктопная) сетка может быть как резиновой, так и фиксированной.

3.2. При фиксированной сетке контентная область центруется и не может быть уже макетной ширины.

3.3. Логотип на внутренних страницах — это ссылка на главную страницу.

3.4. Мобильное меню было реализовано с использованием JS.

3.5. При реализации с использованием JS, блок с главным меню в мобильной версии открывается при нажатии на иконку «гамбургера». Когда меню открыто, иконка «гамбургера» заменяется на крестик. При нажатии на иконку с крестиком меню закрывается.

3.7. Все состояния элементов при наведении и нажатии указаны в стайлгайде.

3.8. Логотип HTML Academy в футере ведёт на лендинг интенсива «HTML и CSS. Адаптивная вёрстка и автоматизация».

## 4. Главная
### Мобильная версия (Index > Mobile):

4.1. Логотип показывается в самом упрощённом виде.

4.2. Блок поиска гостиницы: при нажатии на кнопку поиска должен осуществляться переход на отдельную страницу (отдельную страницу верстать не нужно).

4.3. Блок карты: необходимая реализация — интерактивная карта (карты Google или Яндекса), ширина подстраивается под ширину вьюпорта (но не уже контентной ширины макета), на карте размещён маркер (может быть как кастомным, так и дефолтным), центр карты соответствует центру блока в макете.

### Планшетная версия (Index > Tablet):

4.4. Блоки меняют размеры и расположение согласно макету.

4.5. В составе логотипа добавляются новые элементы.

4.6. Главное меню открыто всегда вне зависимости от его состояния на мобильной версии.

### Десктопная версия (Index > Desktop):

4.7. Блоки меняют размеры и расположение согласно макету.

4.8. В состав логотипа добавляются новые элементы.

## 5. Форма
### Мобильная версия (Form > Mobile):

5.1. Должны быть реализованы кастомные элементы форм.

5.2. У полей ввода телефона и почты должны быть указаны соответствующие типы для удобного заполнения с телефона.

### Планшетная версия (Form > Tablet):

5.3. Блоки меняют размеры и расположение согласно макету.

### Десктопная версия (Form > Desktop):

5.4. Блоки меняют размеры и расположение согласно макету.

## 6. Страница с фото и видео
### Мобильная версия (Photo > Mobile):

6.1. Все изображения являются ссылками на полноразмерный вариант (открытие полноразмерного изображения реализовывать не нужно).

6.2. Работу плеера для проигрывания видео реализовывать не нужно, только вёрстка элементов интерфейса.

### Планшетная версия (Photo > Tablet):

6.3. Блоки меняют размеры и расположение согласно макету.
### Десктопная версия (Photo > Desktop):

6.4. Блоки меняют размеры и расположение согласно макету.
