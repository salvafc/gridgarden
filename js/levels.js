var levels = [
  {
    name: 'grid-column-start 1',
    instructions: {
      'en': '<p>Welcome to Grid Garden, where you write CSS code to grow your carrot garden! Water only the areas that have carrots by using the <code>grid-column-start</code> property.</p><p>For example, <code>grid-column-start: 3;</code> will water the area starting at the 3rd vertical grid line, which is another way of saying the 3rd vertical border from the left in the grid.</p>',
      'fr': '<p>Bienvenue dans Grid Garden, où vous écrivez du code CSS pour cultiver votre jardin de carotte ! Arrosez seulement les régions qui ont des carottes en utilisant la propriété <code>grid-column-start</code>.</p><p>Par exemple, <code>grid-column-start: 3;</code> arrosera la région commençant à la 3ème ligne verticale de la grille, une autre manière de le dire, c\'est la 3ème bordure verticale en partant de la gauche dans la grille.</p>',
      'pt-br': '<p>Bem-vindo ao Grid Garden, onde você escreve código CSS para as cenouras da sua horta crescerem. Irrigue apenas as áreas com cenouras usando a propriedade <code>grid-column-start</code>.</p><p>Por exemplo, <code>grid-column-start: 3;</code> irrigará a área começando na 3ª linha vertical, o que é uma forma de dizer que é a 3ª borda da grade começando da esquerda.</p>',
      'ru': '<p>Добро пожаловать в Grid Garden, место где вы пишете CSS код для того чтобы вырастить ваш морковный сад. Поливайте только те зоны на которых есть морковь используя свойство <code>grid-column-start</code>.</p><p>Например, <code>grid-column-start: 3;</code> покроет водой зону, начинающуюся на 3-ей вертикальной grid линии, что является альтернативным способом сказать - 3-я вертикальная граница начиная слева на grid сетке.</p>',
      'pl': '<p>Witaj w grze Grid Garden, w której pisząc kod CSS rozwijasz swój ogród z marchewkami! Podlewaj tylko pola z marchewkami używając właściwości <code>grid-column-start</code>.</p><p>Na przykład, <code>grid-column-start: 3;</code> nawodni obszar zaczynający się od trzeciej pionowej linii, co jest innym sposobem na powiedzenie trzecia od lewej pionowa granica.</p>',
    },
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-column-start': '3'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
    after: "}"
  },
  {
    name: 'grid-column-start 2',
    instructions: {
      'en': '<p>Uh oh, looks like weeds are growing in the corner of your garden. Use <code>grid-column-start</code> to poison them. Note that the weeds start at the 5th vertical grid line.',
      'fr': '<p>Houlà, il semblerait que les mauvaises herbes poussent dans le coin de votre jardin. Utilisez <code>grid-column-start</code> pour les empoisonner. Remarquez que les mauvaises herbes commencent à la 5ème ligne verticale de la grille.',
      'pt-br': '<p>Opa, parece que há ervas daninhas crescendo no canto da sua horta. Use <code>grid-column-start</code> para envenená-las. Note que as ervas daninhas começam na 5ª linha vertical da grade.',
      'ru': '<p>Оу, кажется будто сорняки растут прямо в углу вашего сада. Используйте <code>grid-column-start</code> чтобы отравить их. Помните что сорняки начинаются на 5-ой вертикальной grid линии',
      'pl': '<p>O nie, wygląda na to, że chwasty urosły w rogu twojego ogrodu. Użyj <code>grid-column-start</code> by je otruć. Zauważ, że chwasty zaczynają się od piątej pionowej linii.',
    },
    board: 'w',
    selector: '> :nth-child(1)',
    style: {'grid-column-start': '5'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#poison {\n",
    after: "}"
  },
  {
    name: 'grid-column-end 1',
    instructions: {
      'en': '<p>When <code>grid-column-start</code> is used alone, the grid item by default will span exactly one column. However, you can extend the item across multiple columns by adding the <code>grid-column-end</code> property.</p><p>Using <code>grid-column-end</code>, water all of your carrots while avoiding the dirt. We don\'t want to waste any water! Note that the carrots start at the 1st vertical grid line and end at the 4th.</p>',
      'fr': '<p>Lorsque <code>grid-column-start</code> est utilisé individuellement, l\'élément de la grille s\'étendera par défaut sur une colonne exactement. Pourtant, vous pouvez étendre l\'élément sur plusieurs colonnes en ajoutant la propriété <code>grid-column-end</code>.</p><p>En utilisant <code>grid-column-end</code>, arrosez toutes vos carottes tout en évitant la boue. Nous ne voulons pas gaspiller d\'eau ! Remarquez que les carottes commencent à la 1ère ligne verticale de la grille et terminent à la 4ème.</p>',
      'pt-br': '<p>Quando <code>grid-column-start</code> é usado sozinho, o item da grade por padrão irá ocupar exatamente uma coluna. Entretanto, você pode extender o item através de múltiplas colunas adicionando a propriedade <code>grid-column-end</code>.</p><p>Usando <code>grid-column-end</code>, todas suas cenouras são irrigadas enquanto se evita uma imundação. Não queremos desperdiçar água! Note que as cenouras começam na 1ª linha vertical da grade e terminam na 4ª.</p>',
      'ru': '<p>Когда вы используете только <code>grid-column-start</code>, grid элемент по умолчанию "захватит" только один столбец. Однако, вы можете увеличить элемент между несколькими столбцами если добавите свойство <code>grid-column-end</code>.</p><p>Используя <code>grid-column-end</code>, полейте всю вашу морковь при этом избегая пустые участки. Мы не хотим использовать воду напрасно! Помните, что морковь начинается на 1-ой вертикальной grid линии и заканчивается на 4-ой',
      'pl': '<p>Kiedy właściwość <code>grid-column-start</code> jest użyta pojedynczo, element domyślnie zajmie dokładnie jedną kolumnę. Jednakże, możesz rozszerzyć element na wiele kolumn dodając właściwość <code>grid-column-end</code>.</p><p>Używając <code>grid-column-end</code>, podlej tylko pola z marchewkami. Nie chcemy zmarnować ani kropli wody! Zauważ, że marchewki zaczynają się od pierwszej pionowej linii i kończą na czwartej.</p>',
    },
    board: 'c',
    classes: {'#garden > *, #plants > *': 'grid-column-start-1'},
    selector: '> :nth-child(1)',
    style: {'grid-column-end': '4'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 1;\n",
    after: "}"
  },
  {
    name: 'grid-column-end 2',
    instructions: {
      'en': '<p>When pairing <code>grid-column-start</code> and <code>grid-column-end</code>, you might assume that the end value has to be greater than the start value. But this turns out not the case!</p><p>Try setting <code>grid-column-end</code> to a value less than 5 to water your carrots.</p>',
      'fr': '<p>En associant <code>grid-column-start</code> et <code>grid-column-end</code>, vous pouvez penser que la valeur de fin doit être supérieure à la valeur de début. Mais ce n\'est pas le cas !</p><p>Essayez de définir <code>grid-column-end</code> avec une valeur inférieure à 5 pour arroser vos carottes.</p>',
      'pt-br': '<p>Quando se junta <code>grid-column-start</code> e <code>grid-column-end</code>, você deve assumir que o valor final tem que ser maior que o valor inicial. Mas esse não é o caso!</p><p>Tente definir <code>grid-column-end</code> para um valor menor que 5 para irrigar suas cenouras.</p>',
      'ru': '<p>Когда вы соединяли <code>grid-column-start</code> и <code>grid-column-end</code>, вы могли подумать что конечное значение должно быть больше чем начальное значение. Оказывается, это не так!</p><p>Попробуйте присвоить <code>grid-column-end</code> значение меньше чем 5 чтобы полить вашу морковь.',
      'pl': '<p>Kiedy używasz razem <code>grid-column-start</code> i <code>grid-column-end</code>, możesz zakładać że końcowa wartość musi być większa od początkowej. Ale okazuje się, że to nieprawda!</p><p>Spróbuj ustawić <code>grid-column-end</code> na wartość mniejszą niż 5 aby podlać swoje marchewki.</p>',
    },
    board: 'c',
    classes: {'#garden > *, #plants > *': 'grid-column-start-5'},
    selector: '> :nth-child(1)',
    style: {'grid-column-end': '2'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 5;\n",
    after: "}"
  },
  {
    name: 'grid-column-end 3',
    instructions: {
      'en': '<p>If you want to count grid lines from the right instead of the left, you can give <code>grid-column-start</code> and <code>grid-column-end</code> negative values. For example, you can set it to -1 to specify the first grid line from the right.</p><p>Try setting <code>grid-column-end</code> to a negative value.</p>',
      'fr': '<p>Si vous souhaitez compter les lignes de la grille à partir de la droite plutôt que de la gauche, vous pouvez donner des valeurs négatives à <code>grid-column-start</code> et à <code>grid-column-end</code>. Par exemple, vous pouvez le définir à -1 pour spécifier la première ligne de la grille en partant de la droite.</p><p>Essayez de définir <code>grid-column-end</code> avec une valeur négative.</p>',
      'pt-br': '<p>Se você deseja contas as linhas da grade a partir da direita ao invés da esquerda, você pode dar a <code>grid-column-start</code> e <code>grid-column-end</code> valores negativos. Por exemplo, você pode definir -1 para especificar a primeira linha da grade a partir da direita.</p><p>Tente definir um valor negativo para <code>grid-column-end</code>.</p>',
      'ru': '<p>Если вы хотите посчитать grid строки справа налево вместо слева направо, вы можете дать <code>grid-column-start</code> и <code>grid-column-end</code> отрицательные значения. Например, вы можете присвоить значение равное -1 чтобы указать 1-ую grid строку начиная справа.</p><p>Попробуйте присвоить <code>grid-column-end</code> отрицательное значение.</p>',
      'pl': '<p>Jeżeli chcesz liczyć linie od prawej zamiast od lewej, możesz ustawić wartości <code>grid-column-start</code> i <code>grid-column-end</code> na negatywne. Na przykład, możesz ustawić wartość na -1 aby wybrać pierwszą linię od prawej.</p><p>Spróbuj ustawić <code>grid-column-end</code> na negatywną wartość.</p>',
    },
    board: 'c',
    classes: {'#garden > *, #plants > *': 'grid-column-start-1'},
    selector: '> :nth-child(1)',
    style: {'grid-column-end': '-2'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 1;\n",
    after: "}"
  },
  {
    name: 'grid-column-start 3',
    instructions: {
      'en': '<p>Now try setting <code>grid-column-start</code> to a negative value.</p>',
      'fr': '<p>Maintenant essayez de définir <code>grid-column-start</code> avec une valeur négative.</p>',
      'pt-br': '<p>Agora tente definir <code>grid-column-start</code> com um valor negativo.</p>',
      'ru': '<p>Теперь попробуйте присвоить <code>grid-column-start</code> отрицательное значение.</p>',
      'pl': '<p>Teraz spróbuj ustawić <code>grid-column-start</code> na negatywną wartość.</p>',
    },
    board: 'w',
    selector: '> :nth-child(1)',
    style: {'grid-column-start': '-3'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#poison {\n",
    after: "}"
  },
  {
    name: 'grid-column-end 4',
    instructions: {
      'en': '<p>Instead of defining a grid item based on the start and end positions of the grid lines, you can define it based on your desired column width using the <code>span</code> keyword. Keep in mind that <code>span</code> only works with positive values.</p><p>For example, water these carrots with the rule <code>grid-column-end: span 2;</code>.</p>',
      'fr': '<p>Au lieu de définir un élément de la grille basé sur les positions de début et de fin des lignes de la grille, vous pouvez le définir en fonction de la largeur de colonne désirée à l\'aide du mot clé <code>span</code>. Gardez à l\'esprit que <code>span</code> fonctionne uniquement avec des valeurs positives.</p><p>Par exemple, arrosez ces carottes avec la règle <code>grid-column-end: span 2;</code>.</p>',
      'pt-br': '<p>Ao invés de definir uma grade baseada no início e final das posições das linhas na grade, você pode defini-las baseado na largura da coluna desejada usando a palavra-chave <code>span</code>. Mantenha em mente que <code>span</code> apenas funciona com valores positivos.</p><p>Por exemplo, irrigue essas cenouras com a regra <code>grid-column-end: span 2;</code>.</p>',
      'ru': '<p>Вместо определения grid элемента базируясь на начальной и конечной позициях grid строк, вы можете определять их с помощью необходимой вам широты строк, используя <code>span</code>. Помните, что <code>span</code> работает только с положительными значениями.</p><p>Для примера, полейте эту морковь используя свойсво <code>grid-column-end: span 2;</code>.</p>',
      'pl': '<p>Zamiast definiować element na podstawie początkowej i końcowej linii, możesz go zdefiniować na podstawie pożądanej szerokości z użyciem słowa kluczowego <code>span</code>. Miej na uwadze, że <code>span</code> działa tylko z pozytywnymi wartościami.</p><p>Na przykład, podlej te marchewki poleceniem <code>grid-column-end: span 2;</code>.</p>',
    },
    board: 'c',
    classes: {'#garden > *, #plants > *': 'grid-column-start-2'},
    selector: '> :nth-child(1)',
    style: {'grid-column-end': 'span 2'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 2;\n",
    after: "}"
  },
  {
    name: 'grid-column-end 5',
    instructions: {
      'en': '<p>Try using <code>grid-column-end</code> with the <code>span</code> keyword again to water your carrots.</p>',
      'fr': '<p>Essayer l\'utilisation de <code>grid-column-end</code> avec encore le mot clé <code>span</code> pour arroser vos carottes.</p>',
      'pt-br': '<p>Tente usar <code>grid-column-end</code> com a palavra-chave <code>span</code> novamente para irrigar suas cenouras.</p>',
      'ru': '<p>Попробуй опять использовать <code>grid-column-end</code> вместе с <code>span</code> для того, чтобы полить вашу морковь.</p>',
      'pl': '<p>Spróbuj użyć ponownie <code>grid-column-end</code> z słowem kluczowym <code>span</code>, aby podlać swoje marchewki.</p>',
    },
    board: 'c',
    classes: {'#garden > *, #plants > *': 'grid-column-start-1'},
    selector: '> :nth-child(1)',
    style: {'grid-column-end': 'span 5'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 1;\n",
    after: "}"
  },
  {
    name: 'grid-column-start 4',
    instructions: {
      'en': '<p>You can also use the <code>span</code> keyword with <code>grid-column-start</code> to set your item\'s width relative to the end position.</p>',
      'fr': '<p>Vous pouvez également utiliser le mot clé <code>span</code> avec <code>grid-column-start</code> pour définir la largeur de votre élément par rapport à la position de fin.</p>',
      'pt-br': '<p>Você ainda pode usar a palavra-chave <code>span</code> com <code>grid-column-start</code> para definir a largura do seu item relativo à posição final.</p>',
      'ru': '<p>Вы также можете использовать <code>span</code> вместе с <code>grid-column-start</code> для того, чтобы присвоить значение широты вашего grid элемента относительно конечной позиции.',
      'pl': '<p>Możesz także użyć słowa kluczowego <code>span</code> z <code>grid-column-start</code> aby ustawić szerokość twojego elementu względem końcowej pozycji.</p>',
    },
    board: 'c',
    classes: {'#garden > *, #plants > *': 'grid-column-end-6'},
    selector: '> :nth-child(1)',
    style: {'grid-column-start': 'span 3'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
    after: "  grid-column-end: 6;\n}"
  },
  {
    name: 'grid-column 1',
    instructions: {
      'en': '<p>Typing both <code>grid-column-start</code> and <code>grid-column-end</code> every time can get tiring. Fortunately, <code>grid-column</code> is a shorthand property that can accept both values at once, separated by a slash.</p><p>For example, <code>grid-column: 2 / 4;</code> will set the grid item to start on the 2nd vertical grid line and end on the 4th grid line.</p>',
      'fr': '<p>Taper <code>grid-column-start</code> et <code>grid-column-end</code> à chaque fois peut devenir fatiguant. Heureusement, <code>grid-column</code> est une propriété raccourcie qui peut accepter les deux valeurs à la fois, séparées par un slash.</p><p>Par exemple, <code>grid-column: 2 / 4;</code> définira l\'élément de la grille à partir de la 2ème ligne verticale de la grille et se terminera à la 4ème ligne de la grille.</p>',
      'pt-br': '<p>Digitando ambos <code>grid-column-start</code> e <code>grid-column-end</code> toda vez, pode cansar. Felizmente, <code>grid-column</code> é uma propriedade curta que pode aceitar ambos os valores de uma só vez, separados por uma barra.</p><p>Por exemplo, <code>grid-column: 2 / 4;</code> irá definir o que o item na grade se inicie na 2ª linha vertical e termine na 4ª linha vertical da grade.</p>',
      'ru': '<p>Печатать вместе <code>grid-column-start</code> и <code>grid-column-end</code> каждый раз немного утомляет. К счастью, <code>grid-column</code> является коротким свойством которое принимает оба значения сразу через слеш  "/"  .</p><p>Например, <code>grid-column: 2 / 4;</code> скажет grid элементу начаться на 2-ой вертикальной grid линии и закончиться на 4-ой вертикальной grid линии.</p>',
      'pl': '<p>Wpisywanie obu <code>grid-column-start</code> i <code>grid-column-end</code> za każdym razem, może być męczące. Na szczęście, <code>grid-column</code> jest skróconą właściwością, która akceptuje obie wartości naraz, rozdzielone przez ukośnik.</p><p>Na przykład, <code>grid-column: 2 / 4;</code> ustawi początek elementu na 2 linię pionową, a koniec na 4 linię.</p>',
    },
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-column': '4 / 6'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
    after: "}"
  },
  {
    name: 'grid-column 2',
    instructions: {
      'en': '<p>Try using <code>grid-column</code> to water these carrots. The <code>span</code> keyword also works with this shorthand property so give it a try!</p>',
      'fr': '<p>Essayer l\'utilisation de <code>grid-column</code> pour arroser ces carottes. Le mot clé <code>span</code> fonctionne également avec cette propriété raccourcie, essayez-le !</p>',
      'pt-br': '<p>Tente usar <code>grid-column</code> para irrigar essas cenouras. A palavra-chave <code>span</code> também funciona com essa propriedade mais curta, então dê-a uma chance!</p>',
      'ru': '<p>Попробуйте использовать <code>grid-column</code> чтобы полить эту морковь. <code>span</code> также работает с этим коротким свойством, так что пробуйте!',
      'pl': '<p>Spróbuj użyć <code>grid-column</code> aby podlać te marchewki. Słowo kluczowe <code>span</code> działa także ze skróconą formą tej właściwości, więc wypróbuj to!</p>',
    },
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-column': '2 / 5'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
    after: "}"
  },
  {
    name: 'grid-row-start 1',
    instructions: {
      'en': '<p>One of the things that sets CSS grids apart from flexbox is that you can easily position items in two dimensions: columns and rows. <code>grid-row-start</code> works much like <code>grid-column-start</code> except along the vertical axis.</p><p>Use <code>grid-row-start</code> to water these carrots.</p>',
      'fr': '<p>L\'une des choses qui distingue les grilles CSS de Flexbox, c\'est que vous pouvez facilement positionner des éléments sur deux dimensions : colonnes et lignes. <code>grid-row-start</code> fonctionne de façon similaire à <code>grid-column-start</code> mais sur l\'axe vertical.</p><p>Utilisez <code>grid-row-start</code> pour arroser ces carottes.</p>',
      'pt-br': '<p>Uma das coisas que separa grades CSS do Flexbox é que você pode facilmente posicionar itens em duas dimensões: colunas e linhas. <code>grid-row-start</code> funciona da mesma forma que <code>grid-column-start</code> só que pelo eixo vertical.</p><p>Use <code>grid-row-start</code> para irrigar essas cenouras.</p>',
      'ru': "<p>Одна из вещей которая различает CSS grid'ы от flexbox'а это то что вы можете легко позиционировать элементы в двух направлениях: столбцах и строках. <code>grid-row-start</code> работает почти как <code>grid-column-start</code>, но только на вертикальной оси.</p><p>Используйте <code>grid-row-start</code> чтобы полить эту морковь.</p>",
      'pl': '<p>Jedną z rzeczy, która rozróżnia CSS grid od flexboxa jest to, że możesz w łatwy sposób ustawiać elementy w dwóch wymiarach: kolumnach i wierszach. <code>grid-row-start</code> działa podobnie jak <code>grid-column-start</code> z wyjątkiem osi pionowej.</p><p>Użyj <code>grid-row-start</code> aby podlać marchewki.</p>',
    },
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-row-start': '3'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
    after: "}"
  },
  {
    name: 'grid-row-start 2',
    instructions: {
      'en': '<p>Now give the shorthand property <code>grid-row</code> a try.</p>',
      'fr': '<p>Maintenant, essayer en prenant la propriété raccourcie <code>grid-row</code>.</p>',
      'pt-br': '<p>Agora dê uma chance à propriedade curta <code>grid-row</code>.</p>',
      'ru': '<p>А теперь попробуйте использовать короткое свойство <code>grid-row</code>.</p>',
      'pl': '<p>Teraz spróbuj użyć skróconej właściwości <code>grid-row</code>.</p>',
    },
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-row': '3 / 6'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
    after: "}"
  },
  {
    name: 'grid-column-row 1',
    instructions: {
      'en': '<p>Use <code>grid-column</code> and <code>grid-row</code> at the same time to set position in both dimensions.</p>',
      'fr': '<p>Utilisez <code>grid-column</code> et <code>grid-row</code> en même temps pour définir la position dans les deux dimensions.</p>',
      'pt-br': '<p>Use <code>grid-column</code> e <code>grid-row</code> ao mesmo tempo para definir ambas as dimensões.</p>',
      'ru': '<p>Используйте <code>grid-column</code> и <code>grid-row</code> одновременно, для того чтобы позиционировать элемент в двух направлениях.',
      'pl': '<p>Użyj <code>grid-column</code> i <code>grid-row</code> razem, aby ustawić pozycję w dwóch wymiarach.</p>',
    },
    board: 'w',
    selector: '> :nth-child(1)',
    style: {'grid-column': '2', 'grid-row': '5'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#poison {\n",
    after: "}"
  },
  {
    name: 'grid-column-row 2',
    instructions: {
      'en': '<p>You can also use <code>grid-column</code> and <code>grid-row</code> together to span larger areas within the grid. Give it a try!</p>',
      'fr': '<p>Vous pouvez aussi utiliser <code>grid-column</code> et <code>grid-row</code> ensemble pour étendre des zones plus vastes dans de la grille. Essayez !</p>',
      'pt-br': '<p>Você também pode usar <code>grid-column</code> e <code>grid-row</code> juntas para abranger áreas maiores dentro da grade. Dê uma chance!</p>',
      'ru': '<p>Вы также можете использовать <code>grid-column</code> и <code>grid-row</code> вместе для того чтобы охватить более большие зоны внутри grid сетки. Пробуйте!</p>',
      'pl': '<p>Możesz także użyć <code>grid-column</code> i <code>grid-row</code> razem, aby pokryć większą powierzchnię wewnątrz siatki grid. Spróbuj!</p>',
    },
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-column': '2 / 6', 'grid-row': '1 / 6'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
    after: "}"
  },
  {
    name: 'grid-area 1',
    instructions: {
      'en': '<p>If typing out both <code>grid-column</code> and <code>grid-row</code> is too much for you, there\'s yet another shorthand for that. <code>grid-area</code> accepts four values separated by slashes: <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code>, followed by <code>grid-column-end</code>.</p><p>One example of this would be <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',
      'fr': '<p>Si taper à la fois <code>grid-column</code> et <code>grid-row</code> est trop long pour vous, il y a encore un raccourci pour cela. <code>grid-area</code> accepte quatre valeurs séparées par des slashes : <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code>, suivi par <code>grid-column-end</code>.</p><p>Un exemple de cela serait<code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',
      'pt-br': '<p>Se digitar ambos <code>grid-column</code> e <code>grid-row</code> é muito para você, há ainda outra propriedade curta para isso. <code>grid-area</code> aceita quatro valores separados por barras: <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code>, seguido por <code>grid-column-end</code>.</p><p>Um exemplo disso poderia ser <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',
      'ru': '<p>Если для вас напечатать <code>grid-column</code> и <code>grid-row</code> это слишком, есть другое короткое свойство для этого. <code>grid-area</code> принимает 4 значения, разделенные слешем " / ": <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code> и <code>grid-column-end</code>.</p><p>Примером для этого будет <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',
      'pl': '<p>Jeżeli pisanie obu <code>grid-column</code> i <code>grid-row</code> to dla ciebie za dużo, istnieje skrócona wersja tych właściwości. <code>grid-area</code> akceptuje cztery wartości rozdzielone przez ukośnik: <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code> oraz <code>grid-column-end</code>.</p><p>Jednym z przykładów jest <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',
    },
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-area': '1 / 2 / 4 / 6'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
    after: "}"
  },
  {
    name: 'grid-area 2',
    instructions: {
      'en': '<p>How about multiple items? You can overlap them without any trouble. Use <code>grid-area</code> to define a second area that covers all of the unwatered carrots.</p>',
      'fr': '<p>Que diriez-vous de plusieurs éléments ? Vous pouvez les chevaucher sans problème. Utilisez <code>grid-area</code> pour définir une deuxième région qui couvre toutes les carottes non arrosées.</p>',
      'pt-br': '<p>Que tal múltiplos itens? Você pode sobrepor-los sem problemas. Use <code>grid-area</code> para definir uma área secundária que cobre todas as cenouras não irrigadas.</p>',
      'ru': '<p>Как насчет множества элементов? Вы можете накладывать их друг на друга без каких либо проблем. Используйте <code>grid-area</code> чтобы определить вторую зону, которая будет займет всю не политую морковь.</p>',
      'pl': '<p>A co z wieloma elementami? Możesz je nakładać bez problemu. Użyj <code>grid-area</code> aby zdefiniować drugą powierzchnię, która pokryje nie podlane marchewki.</p>',
    },
    board: 'cc',
    classes: {'#garden > :nth-child(2), #plants > :nth-child(2)': 'grid-column-4'},
    selector: '> :nth-child(1)',
    style: {'grid-area': '2 / 3 / 5 / 6'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water-1 {\n  grid-area: 1 / 4 / 6 / 5;\n}\n\n#water-2 {\n",
    after: "}"
  },
  {
    name: 'order 1',
    instructions: {
      'en': '<p>If grid items aren\'t explicity placed with <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code>, etc., they are automatically placed row by row according to their order in the source code. We can override this using the <code>order</code> property, which is one of the advantages of grid over table-based layout.</p><p>By default, all grid items have an <code>order</code> of 0, but this can be set to any positive or negative value, similar to <code>z-index</code>.</p><p>Right now, the carrots in the second column are being poisoned and the weeds in the last column are being watered. Change the <code>order</code> value of the poison to fix this right away!</p>',
      'fr': '<p>Si les éléments de la grille ne sont pas explicitement positionnés avec <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code>, etc., ils sont automatiquement positionnés rangée par rangée selon leur ordre dans le code source. Nous pouvons remplacer ceci en utilisant la propriété <code>order</code>, c\'est l\'un des avantages de la grille par rapport à la mise en page basée sur une table.</p><p>Par défaut, tous les éléments de la grille ont <code>order</code> à 0, mais cela peut être défini sur n\'importe quelle valeur positive ou négative, c\'est similaire à <code>z-index</code>.</p><p>À l\'heure actuelle, les carottes dans la deuxième colonne sont empoisonnées et les mauvaises herbes dans la dernière colonne sont arrosées. Changez la valeur de <code>order</code> du poison pour résoudre ce problème immédiatement !</p>',
      'pt-br': '<p>Se um item da grade não é explicitamente colocada com <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code>, etc., eles são colocados automaticamente linha por linha de acordo com a ordem no código fonte. A gente pode mudar isso usando a propriedade <code>order</code>, que é uma das vantagens das grades ao invés de leiautes baseados em tabelas.</p><p>Por padrão, todos os itens da grade tem um <code>order</code> de 0, mas isso pode ser definido para qualquer valor positivo ou negativo, similar a <code>z-index</code>.</p><p>Nesse momento, as cenouras da segunda coluna estão sendo envenenadas e as ervas daninhas da última coluna estão sendo irrigadas. Altere o valor <code>order</code> do veneno para deixar isso na ordem certa!</p>',
      'ru': "<p>Если grid элементы не имеют конкретного расположения с <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code> и т.д., они автоматически помещаются строка на строку следуя порядку написанному в коде. Мы можем перезаписать это с помощью свойства <code>order</code>, которое является одним из преимуществ grid'а перед табличной разметкой.</p><p>По умолчанию, все grid элементы имеют <code>order</code> равный 0, но этому свойству можно присвоить любое положительное или отрицательное значение, примерно как <code>z-index</code>.</p><p>На данный момент, морковь во 2-м столбце отравлена и сорняки в последнем столбце поливаются. Измените значение свойства <code>order</code> яда чтобы исправить это прямо сейчас!</p>",
      'pl': '<p>Jeżeli elementy nie są jednoznacznie umiejscowione w grid przez <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code>, itd., są one automatycznie umiejscowione wiersz za wierszem według kolejności jaka znajduje się w kodzie źródłowym. Możemy to nadpisać z użyciem właściwości <code>order</code>, co jest jedną z zalet układu grid nad układem table.</p><p>Domyślnie, wszystkie elementy grid mają wartość <code>order</code> ustawioną na 0, ale może to zostać ustawione na dowolną liczbę dodatnią lub ujemną, similar to <code>z-index</code>.</p><p>Teraz, marchewki w drugiej kolumnie są traktowane trucizną, a chwasty w ostatniej kolumnie są podlewane. Zmień wartość <code>order</code> trucizny, aby naprawić to jak najszybciej!</p>',
    },
    board: 'cwccc',
    selector: '> :nth-child(2)',
    style: {'order': '2'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  order: 0;\n}\n\n#poison {\n",
    after: "}"
  },
  {
    name: 'order 2',
    instructions: {
      'en': '<p>Now the water and poison are alternating, even though all of the weeds are at the start of your garden. Set the <code>order</code> of the poisons to remedy this.</p>',
      'fr': '<p>Maintenant l’eau et poison se sont alternés, même si toutes les mauvaises herbes sont au début de votre jardin. Définissez <code>order</code> des poisons pour y remédier.</p>',
      'pt-br': '<p>Agora a água e o veneno estão alternados, mesmo que todas as ervas daninhas estejam no início da sua horta. Defina a propriedade <code>order</code> do veneno para remediar isso.</p>',
      'ru': '<p>Теперь вода и яд меняются местами, хотя все сорняки находятся в начале сада. Присвойте правильное значение <code>order</code> яда так, чтобы исправить это.</p>',
      'pl': '<p>Teraz woda i trucizna występują na przemian, chociaż wszystkie chwasty są na początku Twojego ogrodu. Ustaw właściwość <code>order</code> trucizny aby temu zaradzić temu.</p>',
    },
    board: 'wcwcwcwcwc',
    selector: '> :nth-child(odd)',
    style: {'order': '-1'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  order: 0;\n}\n\n.poison {\n",
    after: "}"
  },
  {
    name: 'grid-template-columns 1',
    instructions: {
      'en': '<p>Up to this point, you\'ve had your garden set up as a grid with five columns, each 20% of the full width, and five rows, each 20% of the full height.</p><p>This was done with the rules <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> and <code>grid-template-rows: 20% 20% 20% 20% 20%;</code> Each rule has five values which create five columns, each set to 20% of the overall width of the garden.</p><p>But you can set the grid up however you like. Give <code>grid-template-columns</code> a new value to water your carrots. You\'ll want to set the width of the 1st column to be 50%.',
      'fr': '<p>Jusqu\'à présent, vous aviez mis votre jardin dans une grille avec cinq colonnes, chacune ayant une largeur de 20%, et cinq lignes, chacune ayant une hauteur de 20%.</p><p>Cela a été fait avec les règles <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> et <code>grid-template-rows: 20% 20% 20% 20% 20%;</code> Chaque règle comporte cinq valeurs qui créent cinq colonnes, chacune correspond à 20% de la largeur totale du jardin.</p><p>Mais vous pouvez configurer la grille comme vous le souhaitez. Donnez une nouvelle valeur à <code>grid-template-columns</code> pour arroser vos carottes. Vous devez définir la largeur de la 1ère colonne à 50%.',
      'pt-br': '<p>Até esse ponto, você teve sua horta com uma grade definida com cinco colunas, cada uma com 20% da largura total, e cinco linhas, cada uma com 20% da altura total.</p><p>Isso foi feito com as regras <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> e <code>grid-template-rows: 20% 20% 20% 20% 20%;</code> Cada regra tem cinco valores que criam cinco colunas, que tem 20% do total da largura da sua horta.</p><p>Mas você pode definir a grade da forma que quiser. Dê a <code>grid-template-columns</code> um novo valor para irrigar suas cenouras. Você desejará definir a largura da sua 1ª coluna para 50%.',
      'ru': '<p>До этого момента ваш сад имел grid сетку с пятью столбцами по 20% широты, и пятью строками, каждый по 20% высоты.</p><p>Это было сделано благодаря свойствам <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> и <code>grid-template-rows: 20% 20% 20% 20% 20%;</code> Каждое свойство имеет пять значений, которые создают 5 столбцов, где ширина каждого равна 20% от обшей широты сада.</p><p>Но вы можете изменять grid сетку как вам вздумается. Присвойте <code>grid-template-columns</code> новое значение, чтобы полить вашу морковь. Вам необходимо поставить значение широты 1-го столбца равное 50%.',
      'pl': '<p>Do tego pory, twój ogród składał się z siatki z pięcioma kolumnami, każda po 20% pełnej szerokości, i pięciu rzędów, każdy po 20% pełnej wysokości.</p><p>To było zrobione według zasad <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> i <code>grid-template-rows: 20% 20% 20% 20% 20%;</code> Każda zasada ma pięć wartości, które tworzą 5 kolumn - każda z nich tworzy 20% szerokości ogrodu.</p><p>Ale możesz ustawić siatkę w dowolny sposób. Ustaw nową wartość <code>grid-template-columns</code>, aby nawodnić swoje marchewki. Będziesz chciał ustawić szerokość pierwszej kolumny na 50%.',
    },
    board: 'c',
    style: {'grid-template-columns': '50% 50%'},
    before: "#garden {\n  display: grid;\n",
    after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column: 1;\n  grid-row: 1;\n}"
  },
  {
    name: 'grid-template-columns 2',
    instructions: {
      'en': '<p>Specifying a bunch of columns with identical widths can get tedious. Luckily there\'s a <code>repeat</code> function to help with that.</p><p>For example, we previously defined five 20% columns with the rule <code>grid-template-columns: 20% 20% 20% 20% 20%;</code>. This can be simplified as <code>grid-template-columns: repeat(5, 20%);</code></p><p>Using <code>grid-template-columns</code> with the <code>repeat</code> function, create eight columns each with 12.5% width. This way you won\'t overwater your garden.</p>',
      'fr': '<p>Le fait de spécifier un ensemble de colonnes avec des largeurs identiques peut devenir fastidieux. Heureusement, il y a une fonction <code>repeat</code> pour nous aider.</p><p>Par exemple, nous avons défini précédemment cinq colonnes de 20% avec la règle <code>grid-template-columns: 20% 20% 20% 20% 20%;</code>. Ceci peut être simplifié ainsi <code>grid-template-columns: repeat(5, 20%);</code></p><p>A l\'aide de <code>grid-template-columns</code> avec la fonction <code>repeat</code>, créez huit colonnes avec chacune une largeur de 12,5%. De cette façon, vous ne sur-arrosez pas votre jardin.</p>',
        'pt-br': '<p>Especificar um monte de colunas com larguras idênticas pode ficar tedioso.  Felizmente há uma função <code>repeat</code> para nos ajudar com isso.</p><p>Por exeAqui as cenouras foram uma coluna de 50 pixels na esquerdmplo, definimos anteriormente cinco colunas de 20% de largura na regra <code>grid-template-columns: 20% 20% 20% 20% 20%;</code>. Isso pode ser simplificado como <code>grid-template-columns: repeat(5, 20%);</code></p><p>Usando <code>grid-template-columns</code> com a função <code>repeat</code>, crie oito colunas com 12.5% de largura cada. Dessa forma você não vai imundar sua horta.</p>',
      'ru': '<p>Определять несколько столбцов с одинаковой широтой может быть немного утомительным. К счастью, есть функция <code>repeat</code> которая призвана помочь с этим.</p><p>Например, раньше мы определили пять столбцов по 20% широты с помощью <code>grid-template-columns: 20% 20% 20% 20% 20%;</code>. Это можно упростить до <code>grid-template-columns: repeat(5, 20%);</code></p><p>Используя <code>grid-template-columns</code> вместе с функцией <code>repeat</code>, создайте 8 столбцов по 12.5% широты каждый. Таким образом, вы не будете использовать больше воды чем нужно.</p>',
      'pl': '<p>Definiowanie wielu kolumn o takiej samej szerokości może być nużące. Na szczęście istnieje funkcja <code>repeat</code>, która może nam w tym pomóc.</p><p>Na przykład, wcześniej zdefiniowaliśmy 5 kolumn o szerokości 20% przy pomocy zasady <code>grid-template-columns: 20% 20% 20% 20% 20%;</code>. To może być uproszczone jako <code>grid-template-columns: repeat(5, 20%);</code></p><p>Używając <code>grid-template-columns</code> z funkcją <code>repeat</code>, stwórz 8 kolumn - każda po 12.5% szerokości. W ten sposób nie przesadzisz z nawodnieniem ogrodu.</p>',
    },
    board: 'c',
    classes: {'#plants': 'grid-template-columns-repeat-8-12'},
    style: {'grid-template-columns': 'repeat(8, 12.5%)'},
    before: "#garden {\n  display: grid;\n",
    after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column: 1;\n  grid-row: 1;\n}"
  },
  {
    name: 'grid-template-columns 4',
    instructions: {
      'en': '<p><code>grid-template-columns</code> doesn\'t just accept values in percentages, but also length units like pixels and ems. You can even mix different units together.</p><p>Here, set three columns to <code>100px</code>, <code>3em</code>, and <code>40%</code> respectively.</p>',
      'fr': '<p><code>grid-template-columns</code> n\'accepte pas seulement les valeurs en pourcentage, mais aussi les unités de longueur comme pixels et ems. Vous pouvez même mélanger différentes unités.</p><p>Ici, définissez respectivement trois colonnes à <code>100px</code>, <code>3em</code> et <code>40%</code>.',
      'pt-br': '<p><code>grid-template-columns</code> não aceita apenas valores em porcentagens, mas também aceita unidade de medidas como pixels e ems. Você pode inclusive misturar diferentes unidades junto.</p><p>Aqui, defina três colunas de <code>100px</code>, <code>3em</code>, e <code>40%</code> respectivamente.</p>',
      'ru': '<p><code>grid-template-columns</code> не только принимает значения в процентах, но также может принимать значения длины, такие как пиксели или ems. Вы даже можете комбинировать разные единицы измерения.</p><p>Сейчас присвойте трем столбцам значение <code>100px</code>, <code>3em</code> и <code>40%</code> соответственно.</p>',
      'pl': '<p><code>grid-template-columns</code> nie tylko akceptuje wartości podane w procentach, ale również jednostki takie jak pixele i em-y. Możesz nawet mieszać różne jednostki razem.</p><p>Ustaw odpowiednio wartości trzech kolumn na <code>100px</code>, <code>3em</code> i <code>40%</code>.</p>',
    },
    board: 'cwc',
    classes: {'#plants': 'grid-template-columns-100px-3em-40p'},
    style: {'grid-template-columns': '100px 3em 40%;'},
    before: "#garden {\n  display: grid;\n",
    after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}"
  },
  {
    name: 'grid-template-columns 5',
    instructions: {
      'en': '<p>Grid also introduces a new unit, the fractional <code>fr</code>. Each <code>fr</code> unit allocates one share of the available space. For example, if two elements are set to <code>1fr</code> and <code>3fr</code> respectively, the space is divided into 4 equal shares; the first element occupies 1/4 and the second element 3/4 of any leftover space.</p><p>Here, weeds make up the left 1/6 of your first row and carrots the remaining 5/6. Create two columns with these widths using <code>fr</code> units.</p>',
      'fr': '<p>La grille introduit également une nouvelle unité, le fractionnaire <code>fr</code>. Chaque unité  <code>fr</code> alloue une partie de l\'espace disponible. Par exemple, si deux éléments sont définies respectivement avec <code>1fr</code> et <code>3fr</code>,  l\'espace est divisé en 4 parts égales, le premier élément occupe 1/4 et le deuxième élément 3/4 de l\'espace disponible.</p><p>Ici, les mauvaises herbes représentent 1/6 de votre première ligne et les carottes les 5/6 restants. Créez deux colonnes avec ces largeurs en utilisant les unités <code>fr</code>.</p>',
      'pt-br': '<p>CSS Grid também introduz uma nova medida, a fracionário <code>fr</code>. Cada medida <code>fr</code> aloca um pedaço do espaço disponível. Por exemplo, se dois elementos estão definidos para <code>1fr</code> e <code>3fr</code> respectivamente, o espaço é dividido em 4 partes iguais; o primeiro elemento ocupa 1/4 e o segundo elemento 3/4 do espaço restante.</p><p>Aqui, ervas daninhas ocupam 1/6 da sua primeira linha e as cenouras os 5/6 restantes. Crie duas colunas com essas larguras usando a unidade <code>fr</code>.</p>',
      'ru': '<p>Grid также вводит новую единицу измерения, дробный <code>fr</code>. Каждый <code>fr</code> выделяет одну часть свободного простанства. Например, если два элемента имеют свойство равное <code>1fr</code> и <code>3fr</code> соответственно, то тогда пространство будет поделено на 4 одинаковые части. Первый элемент займет 1/4 а второй 3/4 всего оставшегося пространства.</p><p>Сейчас сорняки занимают левую 1/6 часть вашей первой строки, а морковь оставшиеся 5/6. Создайте два столбца с такими же широтами, используя единицы <code>fr</code>.</p>',
      'pl': '<p>Grid także wprowadza nową jednostkę, ułamek <code>fr</code>. Każda jednostka <code>fr</code> przyporządkowuje jedną część wolnej przestrzeni . Na przykład, jeżeli dwa elementy mają wartości odpowiednio <code>1fr</code> i <code>3fr</code>, przestrzeń jest podzielona na 4 równe części; pierwszy element zajmuje 1/4, a drugi element 3/4 pozostałej przestrzeni.</p><p>Tutaj, chwasty tworzą 1/6 twojego pierwszego wiersza, a marchewki pozostałe 5/6. Stwórz dwie kolumny z tymi długościami używając jednostek <code>fr</code>.</p>',
    },
    board: 'wc',
    classes: {'#plants': 'grid-template-columns-1fr-5fr'},
    style: {'grid-template-columns': '1fr 5fr;'},
    before: "#garden {\n  display: grid;\n",
    after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}"
  },
  {
    name: 'grid-template-columns 3',
    instructions: {
      'en': '<p>When columns are set with pixels, percentages, or ems, any other columns set with <code>fr</code> will divvy up the space that\'s left over.</p><p>Here the carrots form a 50 pixel column on the left, and the weeds a 50 pixel column on the right. With <code>grid-template-columns</code>, create these two columns, and use <code>fr</code> to make three more columns that take up the remaining space in between.</p>',
      'fr': '<p>Lorsque les colonnes sont définies avec des pixels, des pourcentages ou des ems, toutes les autres colonnes définies avec <code>fr</code> se répartiront l\'espace restant.</p><p>Ici, les carottes forment une colonne de 50 pixels sur la gauche et les mauvaises herbes une colonne de 50 pixels sur la droite. Avec <code>grid-template-columns</code>, créez ces deux colonnes et utilisez <code>fr</code> pour créer trois colonnes supplémentaires qui occupent l\'espace restant entre les deux.</p>',
      'pt-br': '<p>Quando as colunas são especificadas com pixels, porcentagens, ou ems, qualquer outra coluna definida com <code>fr</code> vai dividir o espaço que sobrou.</p><p>Aqui as cenouras formam uma coluna de 50 pixels na esquerda, e as ervas daninhas uma coluna de 50 pixels na direita. Com <code>grid-template-columns</code>, crie essas duas colunas, e use <code>fr</code> para fazer mais três colunas que ocuparão o espaço sobrando no meio.</p>',
      'ru': '<p>Когда одни столбцы определены с помощью пикселей, процентов или ems, а любые другие столбцы с помощью <code>fr</code>, то вторые просто разделят все возможное оставшееся пространство.</p><p>Сейчас морковь занимает 50 пикселей слева, а сорняки 50 пикселей справа. С помощью <code>grid-template-columns</code>, создайте два столбца и используйте <code>fr</code> чтобы сделать еще 3 столбца, которые займут оставшееся простанство между ними.</p>',
      'pl': '<p>Kiedy kolumny mają wymiar podany w pixelach, procentach lub em-ach, każda inna kolumna podana w jednostce <code>fr</code> podzieli pozostałą przestrzeń.</p><p>W tym miejscu marchewki tworzą 50 pixelową kolumnę po lewej stronie, a chwasty 50 pixelową kolumnę po prawej. Przy pomocy <code>grid-template-columns</code>, stwórz te dwie kolumny i użyj <code>fr</code>, by stworzyć trzy kolejne kolumny, które zajmą pozostałą przestrzeń.</p>',
    },
    board: 'cw',
    classes: {'#plants': 'grid-template-columns-50px-1fr-1fr-1fr-50px', '#plants > :nth-child(1), #garden > :nth-child(1)': 'grid-area-1-1-6-2', '#plants > :nth-child(2), #garden > :nth-child(2)': 'grid-area-1-5-6-6'},
    style: {'grid-template-columns': '50px 1fr 1fr 1fr 50px;'},
    before: "#garden {\n  display: grid;\n",
    after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-area: 1 / 1 / 6 / 2;\n}\n\n#poison {\n  grid-area: 1 / 5 / 6 / 6;\n}"
  },
  {
    name: 'grid-template-columns 6',
    instructions: {
      'en': '<p>Now there is a 75 pixel column of weeds on the left side of your garden. 3/5 of the remaining space is growing carrots, while 2/5 has been overrun with weeds.</p><p>Use <code>grid-template-columns</code> with a combination of <code>px</code> and <code>fr</code> units to make the necessary columns.</p>',
      'fr': '<p>Maintenant, il y a une colonne de 75 pixels de mauvaises herbes sur le côté gauche de votre jardin. Sur 3/5 de l\'espace restant, des carottes poussent, tandis que 2/5 a été envahi par les mauvaises herbes.</p><p>Utilisez <code>grid-template-columns</code> avec une combinaison d’unités <code>px</code> et <code>fr</code> pour créer les colonnes nécessaires.</p>',
      'pt-br': '<p>Agora há uma coluna de 75 pixels de ervas daninhas no lado esquerdo da sua horta. 3/5 do espeço remanescente está crescendo cenouras, enquanto 2/5 tem sido envadido por ervas daninhas.</p><p>Use <code>grid-template-columns</code> com uma combinação de unidades <code>px</code> e <code>fr</code> para fazer as colunas necessárias.</p>',
      'ru': '<p>Теперь у нас есть столбец сорняков с шириной 75 пикселей на левой стороне вашего сада. 3/5 оставшегося пространства занимает растущая морковь, когда 2/5 заполонили сорняки.</p><p>Используйте <code>grid-template-columns</code> с комбинацией <code>px</code> и <code>fr</code> чтобы сделать необходимые столбцы.</p>',
      'pl': '<p>Teraz, po lewej stronie jest 75 pixelowa kolumna chwastów. 3/5 pozostałej przestrzeni jest zajęte przez marchewki, podczas gdy 2/5 jest porośnięte przez chwasty.</p><p>Użyj <code>grid-template-columns</code> w połączeniu z jednostkami <code>px</code> i <code>fr</code>, by stworzyć wymagane kolumny.</p>',
    },
    board: 'wcw',
    classes: {'#plants': 'grid-template-columns-6', '#garden, #overlay': 'grid-template-rows-100p'},
    style: {'grid-template-columns': '75px 3fr 2fr;'},
    before: "#garden {\n  display: grid;\n",
    after: "  grid-template-rows: 100%;\n}"
  },
  {
    name: 'grid-template-rows 1',
    instructions: {
      'en': '<p><code>grid-template-rows</code> works much the same as <code>grid-template-columns</code>.</p><p>Use <code>grid-template-rows</code> to water all but the top 50 pixels of your garden. Note that the water is set to fill only your 5th row, so you\'ll need to create 5 rows in total.',
      'fr': '<p><code>grid-template-rows</code> fonctionne de la même manière que <code>grid-template-columns</code>.</p><p>Utilisez <code>grid-template-rows</code> pour tout arroser sauf les 50 premiers pixels de votre jardin. Remarquez que l\'eau est définie pour remplir uniquement votre 5ème rangée, donc vous devrez créer 5 lignes au total.',
      'pt-br': '<p><code>grid-template-rows</code> funciona da mesma forma que <code>grid-template-columns</code>.</p><p>Use <code>grid-template-rows</code> para irrigar toda sua horta menos os 50 pixels do topo. Note que a água está definida para irrigar apenas sua 5ª linha, então você precisará criar 5 linhas no total.',
      'ru': '<p><code>grid-template-rows</code> работает точно так же, как и <code>grid-template-columns</code>.</p><p>Используйте <code>grid-template-rows</code> чтобы полить все, кроме верхних 50 пикселей вашего сада. Помните, что вода на данный момент заполняет только 5-ую строку, так что вам понадобиться создать в сумме 5 строк.',
      'pl': '<p><code>grid-template-rows</code> działa w podobny sposób jak <code>grid-template-columns</code>.</p><p>Użyj <code>grid-template-rows</code> aby nawodnić 50 pixeli od góry twojego ogrodu. Zauważ, że woda jest ustawiona tak aby wypełnić tylko 5 rząd, dlatego będziesz musiał stworzyć łącznie 5 rzędów.',
    },
    board: 'c',
    classes: {'#plants': 'grid-template-rows-50px-0-0-0-1fr', '#plants > :nth-child(1), #garden > :nth-child(1)': 'grid-area-5-1-6-6'},
    style: {'grid-template-rows': '1fr 100px;'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n",
    after: "}\n\n#water {\n  grid-column: 1 / 6;\n  grid-row: 5 / 6;\n}"
  },
  {
    name: 'grid-template 1',
    instructions: {
      'en': '<p><code>grid-template</code> is a shorthand property that combines <code>grid-template-rows</code> and <code>grid-template-columns</code>.</p><p>For example, <code>grid-template: 50% 50% / 200px;</code> will create a grid with two rows that are 50% each, and one column that is 200 pixels wide.</p><p>Try using <code>grid-template</code> to water an area that includes the top 60% and left 200 pixels of your garden.</p>',
      'fr': '<p><code>grid-template</code> est la propriété raccourcie qui combine <code>grid-template-rows</code> et <code>grid-template-columns</code>.</p><p>Par exemple, <code>grid-template: 50% 50% / 200px;</code> créera une grille avec 2 lignes de 50% de hauteur chacune et une colonne de 200 pixels de large.</p><p>Essayez à l\'aide de <code>grid-template</code> d\'arroser une région comprenant 60% du haut et 200 pixels à gauche de votre jardin.</p>',
      'pt-br': '<p><code>grid-template</code> é uma propriedade curta que combina <code>grid-template-rows</code> e <code>grid-template-columns</code>.</p><p>Por exemplo, <code>grid-template: 50% 50% / 200px;</code> irá criar uma grade com duas linhas com 50% cada, e uma coluna que tem 200 pixels de largura.</p><p>Tente usar <code>grid-template</code> para irrigar uma área que inclui 60% do topo e 200px da esquerda da sua horta.</p>',
      'ru': '<p><code>grid-template</code> является короткой вариантом комбинации <code>grid-template-rows</code> и <code>grid-template-columns</code>.</p><p>Например, <code>grid-template: 50% 50% / 200px;</code> создаст grid сетку с 2-мя строками, по 50% каждая, и одним столбцом шириной 200 пикселей.</p><p>Попробуйте использовать <code>grid-template</code> чтобы полить зону, включающую в себя верхние 60% и левые 200 пикселей вашего сада.</p>',
      'pl': '<p><code>grid-template</code> jest skróconą właściwością, która łączy <code>grid-template-rows</code> i <code>grid-template-columns</code>.</p<p>Na przykład, <code>grid-template: 50% 50% / 200px;</code> stworzy siatkę (grid) z dwoma wierszami każdy po 50%, i jedną kolumnę, która jest szeroka na 200 pixeli.</p><p>Spróbuj użyć <code>grid-template</code> by nawodnić powierzchnię, która za 60% od góry i 200 pixeli od lewej.</p>',
    },
    board: 'c',
    style: {'grid-template': '60% 1fr / 200px 1fr'},
    before: "#garden {\n  display: grid;\n",
    after: "}\n\n#water {\n  grid-column: 1;\n  grid-row: 1;\n}"
  },
  {
    name: 'grid-template 2',
    instructions: {
      'en': '<p>Your garden is looking great. Here you\'ve left a 50 pixel path at the bottom of your garden and filled the rest with carrots.</p><p>Unfortunately, the left 20% of your carrots have been overrun with weeds. Use CSS grid one last time to treat your garden.</p>',
      'fr': '<p>Votre jardin a l\'air très bien. Ici, vous avez laissé un chemin au bas de votre jardin de 50 pixels et vous avez rempli le reste avec des carottes.</p><p>Malheureusement, 20 % de vos carottes à gauche ont été envahies par les mauvaises herbes. Utilisez la grille CSS une dernière fois pour traiter votre jardin.</p>',
      'pt-br': '<p>Sua horta está parecendo ótima. Aqui você tem 50 pixels no rodapé da sua horta e o resto preenchido com cenouras. Infelizmente, 20% das suas cenouras foram danificadas com ervas daninhas. Use CSS grid uma última vez para tratar sua horta.</p>',
      'ru': '<p>Ваш сад выглядит прекрасно. Здесь вы оставили 50 пиксельный путь в нижней части вашего сада и заполнили все оставшееся пространство морковью.</p><p>К сожалению, левые 20% вашей моркови заполонили сорняки. Используйте CSS Grid в последний раз чтобы очистить ваш сад.</p>',
      'pl': '<p>Twój ogród wygląda świetnie. Tutaj pozostawiłeś 50 pixelową ścieżkę na spodzie swojego ogrodu, a reszcie posadziłeś marchewki.</p><p>Niestety, 20% od lewej twoich marchewek zostało zarośnięte przez chwasty. Użyj CSS grid ostatni raz aby uzdrowić swój ogród.</p>',
    },
    board: 'wc',
    classes: {'#plants': 'grid-template-2'},
    style: {'grid-template': '1fr 50px / 20% 1fr'},
    before: "#garden {\n  display: grid;\n",
    after: "}"
  }
];

var levelWin = {
  name: 'win',
  instructions: {
    'en': '<p>You win! By the power of CSS grid, you were able to grow enough carrots for Froggy to bake his world famous 20-carrot cake. What, were you expecting a different hoppy friend?</p><p>If you enjoyed Grid Garden, be sure to check out <a href="http://flexboxfroggy.com/">Flexbox Froggy</a> to learn about another powerful new feature of CSS layout. You can also keep up-to-date with my other projects on <a href="http://thomaspark.co">my blog</a> or <a href="https://twitter.com/thomashpark">Twitter</a>.</p><p>Want to support Grid Garden? Try out the topnotch web design and coding courses offered by <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=gridgarden">Treehouse</a>. And spread the word to your friends and family about Grid Garden!</p>',
    'fr': '<p>Vous avez gagné ! Par la puissance de la grille CSS, vous avez pu cultiver suffisamment de carottes pour Froggy pour faire cuire son célèbre gâteau de 20-carottes. Quoi, vous vous attendiez à un ami différent ?</p><p>Si vous avez apprécié Grid Garden, veuillez consulter <a href="http://flexboxfroggy.com/">Flexbox Froggy</a> pour en savoir plus sur une nouvelle fonctionnalité puissante sur la mise en page CSS. Vous pouvez également vous tenir au courant de mes autres projets sur <a href="http://thomaspark.co">mon blog</a> ou sur <a href="https://twitter.com/thomashpark">Twitter</a>.</p><p>Vous voulez soutenir Grid Garden ? Essayez les cours de conception et de codage proposés par <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=gridgarden">Treehouse</a>. Et passez le mot à vos amis et à votre famille au sujet de Grid Garden !</p>',
    'pt-br': '<p>Você ganhou! Com o poder do CSS grid, você foi capaz de colher cenouras suficientes para o Froggy fazer seu mundialmente famoso bolo de 20 cenouras. O que, você esperava um amigo diferente?</p><p>Se você gostou do Grid Garden, veja também o <a href="http://flexboxfroggy.com/">Flexbox Froggy</a> para aprender sobre outra funcionalidade poderosa dos leiautes CSS. Você também pode se manter atualizado com meus outros projetos em <a href="http://thomaspark.co">meu blog</a> ou <a href="https://twitter.com/thomashpark">Twitter</a>.</p><p>Deseja ajudar o Grid Garden? Faça os cursos de web design e codificação oferecidos por <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=gridgarden">Treehouse</a>. E semeie para seus amigos e família o Grid Garden!</p>',
    'ru': '<p>Вы победили! Благодаря силе CSS Grid, вы смогли вырастить достаточно моркови для Froggy чтобы испечь его знаменитый 20-морковный пирог. Что, вы ожидали другого прыгучего друга?</p><p>Если вам понравился Grid Garden, удостоверьтесь посмотреть <a href="http://flexboxfroggy.com/">Flexbox Froggy</a> чтобы изучить другую новую возможность CSS. Вы также можете оставаться в курсе всех моих проектов(автора проекта) <a href="http://thomaspark.co">мой блог</a> или <a href="https://twitter.com/thomashpark">Twitter</a>.</p><p>Хотите поддержать Grid Garden? Попробуйте "topnotch" веб-дизайна и курсы программирования предложенные <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=gridgarden">Treehouse</a>. Расскажите своим друзьям и членам семьи о Grid Garden!</p>',
    'pl': '<p>Wygrałeś! Dzięki możliwościom CSS grid, byłeś w stanie wychodować wystarczającą ilość marchewek dla Pana Żabki, aby on mógł upiec swoje światowej sławy ciasto marchewkowe. Co, spodziewałeś się innego skocznego przyjaciela?</p><p>Jeżeli spodobał Ci się Grid Garden, zobacz też <a href="http://flexboxfroggy.com/">Flexbox Froggy</a> aby nauczyć się o innej nowej i potężnej właściwości struktury CSS. Możesz także śledzić inne moje projekty poprzez <a href="http://thomaspark.co">mój blog</a> lub <a href="https://twitter.com/thomashpark">Twitter</a>.</p><p>Chcesz wesprzeć Grid Garden? Wypróbuj znakomite kursy z web designu i programowania na <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=gridgarden">Treehouse</a>. Podziel się także informacją o Grid Garden z przyjaciółmi i rodziną!</p>',
  },
  board: '',
  classes: {'#garden, #plants, #overlay': 'win'},
  style: {},
  before: "#pond {\n  display: flex;\n",
  after: "}"
};
