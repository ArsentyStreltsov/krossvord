const crosswordData = {
    gridSize: {
        rows: 32,
        cols: 26
    },
    words: [
        {
            word: "Письмо",
            startRow: 1,
            startCol: 13,
            direction: "vertical",
            number: 1,
            clue: "Когда я получил его на новый год, я сразу понял, что пора сознаваться в моих чувствах, так как это все взаимно"
        },
        {
            word: "Коммуникабельность",
            startRow: 5,
            startCol: 15,
            direction: "vertical",
            number: 2,
            clue: "Правда верю, что без этого мы бы не смогли пройти через огонь и воду. Очень рад, что мы умеем слышать и слушать друг друга"
        },
        {
            word: "Храп",
            startRow: 5,
            startCol: 17,
            direction: "vertical",
            number: 3,
            clue: "Музыкальное сопровождение наших снов"
        },
        {
            word: "Вино",
            startRow: 5,
            startCol: 20,
            direction: "vertical",
            number: 4,
            clue: "Лучший инструмент, чтобы тебя раздеть"
        },
        {
            word: "Любовь",
            startRow: 5,
            startCol: 24,
            direction: "vertical",
            number: 5,
            clue: "Чувство, которое ты испытала, когда мы были на том самом концерте Anacondaz"
        },
        {
            word: "Фотографии",
            startRow: 6,
            startCol: 12,
            direction: "horizontal",
            number: 6,
            clue: "Когда наши дети будут их пересматривать, уверен, что они будут говрить 'ого, какая красивая у нас мама'"
        },
        {
            word: "Мама",
            startRow: 7,
            startCol: 22,
            direction: "vertical",
            number: 7,
            clue: "Ты будешь самой-самой лучшей __ на свете"
        },
        {
            word: "Полароид",
            startRow: 8,
            startCol: 19,
            direction: "horizontal",
            number: 8,
            clue: "Физические фотографии, которые я всегда ношу с собой"
        },
        {
            word: "Грузия",
            startRow: 9,
            startCol: 12,
            direction: "vertical",
            number: 9,
            clue: "2й дом, судя по кол-ву посещений"
        },
        {
            word: "Сны",
            startRow: 10,
            startCol: 14,
            direction: "horizontal",
            number: 10,
            clue: "Хочу уже навсегда перестать тебе изменять в них, а приходить к тебе, чтобы даже там быть рядышком и вместе"
        },
        {
            word: "Свадьба",
            startRow: 10,
            startCol: 20,
            direction: "horizontal",
            number: 11,
            clue: "Я правда думаю, что не смогу сдержать слез, увидив тебя в этот день"
        },
        {
            word: "Кольцо",
            startRow: 12,
            startCol: 15,
            direction: "horizontal",
            number: 12,
            clue: "Охомутал этим, так скажем"
        },
        {
            word: "Шутки",
            startRow: 13,
            startCol: 8,
            direction: "horizontal",
            number: 13,
            clue: "Моя суперсила из-за которой мы никогда не можем поссориться"
        },
        {
            word: "Улыбка",
            startRow: 13,
            startCol: 9,
            direction: "vertical",
            number: 14,
            clue: "Ради нее и стоит тебя смешить, видя ее, я каждый раз как будто бы вновь влюбляюсь в тебя"
        },
        {
            word: "Объятия",
            startRow: 14,
            startCol: 14,
            direction: "horizontal",
            number: 15,
            clue: "Очень мне нравится в них и засыпать и просыпаться"
        },
        {
            word: "Глаза",
            startRow: 16,
            startCol: 14,
            direction: "horizontal",
            number: 16,
            clue: "Я неимоверно влюблен в них, с самой первой нашей встречи"
        },
        {
            word: "Поцелуй",
            startRow: 17,
            startCol: 13,
            direction: "vertical",
            number: 17,
            clue: "Чмок-чмок, как я говорю"
        },
        {
            word: "Расстояние",
            startRow: 18,
            startCol: 8,
            direction: "horizontal",
            number: 18,
            clue: "Верю, что уже скоро мы избавимся от него и надеюсь, что навсегда"
        },
        {
            word: "Смех",
            startRow: 18,
            startCol: 11,
            direction: "vertical",
            number: 19,
            clue: "Тебе нравится, когда после этого я начинаю смотреть в твои глаза и говорю 'Я так сильно тебя люблю'"
        },
        {
            word: "Дети",
            startRow: 19,
            startCol: 3,
            direction: "vertical",
            number: 20,
            clue: "Хочу завести не только тебя, но и их"
        },
        {
            word: "Клятва",
            startRow: 19,
            startCol: 5,
            direction: "vertical",
            number: 21,
            clue: "Наши обещания друг другу, заверенные штампом"
        },
        {
            word: "Предложение",
            startRow: 20,
            startCol: 1,
            direction: "horizontal",
            number: 22,
            clue: "До сих пор мурашки появляется, когда я пересматриваю видео с этого момента и слышу твое 'Зайчииик'"
        },
        {
            word: "Свечи",
            startRow: 20,
            startCol: 15,
            direction: "horizontal",
            number: 23,
            clue: "Без них в ванну больше не ходим"
        },
        {
            word: "Кругосветка",
            startRow: 22,
            startCol: 10,
            direction: "vertical",
            number: 24,
            clue: "Рано или поздно мы же в нее отправимся, да?)))"
        },
        {
            word: "Буська",
            startRow: 22,
            startCol: 12,
            direction: "horizontal",
            number: 25,
            clue: "Одно из моих любимых твоих прозвищ"
        },
        {
            word: "Жена",
            startRow: 23,
            startCol: 8,
            direction: "vertical",
            number: 26,
            clue: "Очень хочу уже называть тебя именно этим прозвищем"
        },
        {
            word: "Свидание",
            startRow: 24,
            startCol: 1,
            direction: "horizontal",
            number: 27,
            clue: "Группа: 'Давай увидимся во сне, я написал тебе стихи, о том, как я люблю тебя, о том, как любишь меня ты'"
        },
        {
            word: "ВНЖ",
            startRow: 24,
            startCol: 2,
            direction: "vertical",
            number: 28,
            clue: "Поссольства рискуют быть сожжеными, если откажут в __"
        },
        {
            word: "Забота",
            startRow: 26,
            startCol: 7,
            direction: "horizontal",
            number: 29,
            clue: "Я понимаю, что ты проявляешь именно ее в такие моменты, но рубашку я не отдам"
        },
    ]
}; 