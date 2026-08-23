# Что нужно запросить у заказчика

Составлено 2026-08-23 после переноса данных из «Luna Beauty studio staff description.docx»
в `app/utils/mockServicesTwo.ts`, `app/utils/mockMasters.ts` и `app/utils/mockFiles.ts`.

Всё, что в документе было, уже на сайте. Ниже — только то, чего в документе нет.

## 1. Блокеры (сайт нельзя запускать без этого)

### 1.1 Цены — отсутствуют полностью
В документе нет ни одной цены. Сейчас везде выводится `On request`
(константа `PRICE_TBC` в `mockServicesTwo.ts`).

Нужен прайс на 20 позиций:

| Категория | Услуги |
|---|---|
| Manicure & Extensions | Rubber Base Manicure, French Tip, Extensions, Clean Manicure |
| Pedicure | Aesthetic Pedicure, Ingrown Toenails Treatment, Cracked Heels Treatment |
| Makeup | Bridal Makeup, Bridal Makeup Trial, Bridesmaids Makeup, Flower Girl Makeup, Soft / Natural Makeup, Special Occasion Makeup, Editorial & Photoshoot Makeup |
| Brows & Lashes | HD Brows, Brow Lamination, Lash Lamination |
| Permanent Makeup | Powder Brows, Hair Stroke Brows, Lip Blush |

Отдельно уточнить:
- есть ли доплата за выезд визажиста (в старых моках была «Travel charge £0.30/mile» — в документе её нет);
- есть ли разница в цене между мастерами (Dana / Tanya / Lola делают один и тот же список).

### 1.2 Длительность услуг — отсутствует полностью
Сейчас везде `—` (константа `DURATION_TBC`). Нужна длительность для тех же 20 позиций —
она выводится на карточке услуги рядом с ценой.

### 1.3 Меню waxing — отсутствует
Документ описывает waxing текстом, но не перечисляет ни одной зоны.
Категория выведена без списка услуг (`treatments: []`), на странице стоит текст
«меню и цены по запросу».

Нужен перечень зон с ценами. Для ориентира — что было в старых моках (НЕ подтверждено заказчиком):
Brazilian bikini, Full leg, Half leg, Full/half arm, Back (men), Chest (men),
Underarms, Upper lip & chin, Full body, Extra area.

## 2. Фото

- **Нет портрета Nataliia** — в документе прямо написано «(foto not included)».
  Сейчас вместо портрета стоит рабочее фото с воском (`/images/services/waxing-1.webp`).
  Найти по строке `TODO` в `mockFiles.ts` и `mockServicesTwo.ts`.
- **Нет фото для Brow Lamination** — в документе у этой услуги нет своей картинки,
  временно используется второе фото HD Brows.
- **`waxing-2` (image28 в docx) непригодно** — исходник 316×474, слишком мелкий для сайта,
  в вёрстку не взят.
- **Мобильные `object-position` подбирались под старые фото.** В
  `beautyServices.module.css` правила `li:nth-child(2|3|4|6) .cardImage` кадрируют
  картинки карточек на экранах до 765px; фото заменены, кадрирование стоит перепроверить
  (у 7-го элемента — Waxing — правила нет вовсе).
- Фото услуг подписей в документе не имели — привязка восстановлена по позиции текста.
  Стоит показать заказчику страницы услуг и подтвердить, что картинки стоят к своим услугам.

## 3. Данные о команде

- **Нет фамилий.** Заказчик прислал только имена: Dana, Nelya, Tanya, Lola, Maryna, Nataliia.
  Это влияет на адреса страниц: сейчас `/master/dana`, `/master/nelya` и т.д.
  Если фамилии появятся, адреса поменяются (старые ссылки перестанут работать).
- **Расхождение по опыту Dana.** Документ говорит «over 12 years», текст из Figma-макета —
  «over 10 years», старые моки — 14 лет. Взято 12 (документ). Подтвердить.
- **Нет расписания / графика работы мастеров.** Блок «Find your master» на странице услуг
  обещает «the slots they have left this week» — этих данных нет ни в каком виде.

## 4. Прочее, не относящееся к документу

- **Отзывы клиентов — выдуманные.** `clientsRecommendedMock` в `mockFiles.ts` содержит
  тестовый мусор («Bob Checter — Ewwww», «Wowwwwwowowowow»). Нужны реальные отзывы
  (или выгрузка с Fresha / Google).
- **Контакты не проверены**: `hello@luna.com`, `+44 782 203 12 21`, ссылки на соцсети
  ведут на `facebook.com` / `instagram.com` без аккаунта.
- **Ссылка на запись — заглушка**: `BOOKING_URL = 'https://example.com/booking'`
  в `treatment-card.tsx`. Нужна реальная ссылка на систему онлайн-записи.
- **Исходный `.docx` лежит в `public/`**, то есть будет доступен по прямой ссылке
  на боевом сайте вместе с фото и текстами. Перед деплоем убрать из `public/`
  (там же появился временный файл Word `~$na Beauty studio staff description.docx`).
