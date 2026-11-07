---
title: 'Tablas de verdad: ejemplos resueltos para el examen de lógica'
date: '2026-11-07T14:08:38.002Z'
featuredimage: >-
  https://images.unsplash.com/photo-1762448442408-e6cbc60da259?ixid=M3wxMTA0MDg1fDB8MXxzZWFyY2h8MXx8bG9naWMlMjBzeW1ib2xzJTIwYWJzdHJhY3R8ZW58MXwwfHx8MTc5NDA2MDQ2OXww&ixlib=rb-4.1.0&w=1600&h=900&fit=crop&crop=entropy&fm=jpg&q=75
categoria: Preguntas de Examen
tags:
  - lógica
  - examen
  - ejercicios
  - condicional
short-description: >-
  Tablas de verdad con ejemplos resueltos: negación, conjunción y condicional
  paso a paso, dos ejercicios tipo examen y su respuesta explicada.
dificultad: Preparatoria / Universidad
mk1: >-
  <p><small><em>Foto de <a
  href="https://unsplash.com/@luanfonsecavisuals?utm_source=EvergreenSEO&utm_medium=referral"
  rel="noopener">Luan Fonseca</a> en <a
  href="https://unsplash.com/?utm_source=EvergreenSEO&utm_medium=referral"
  rel="noopener">Unsplash</a></em></small></p>


  Si buscas tablas de verdad ejemplos, lo que más te sirve es ver cada paso y
  entender por qué sale cada resultado, no solo copiar la última columna. Una
  tabla de verdad es un método que muestra si una fórmula lógica es verdadera o
  falsa para todas las combinaciones posibles de sus proposiciones. Con ella
  puedes comprobar algo sin adivinar.


  En este artículo construimos tablas para los tres conectores que más aparecen
  en los ejercicios de lógica: la negación, la conjunción y el condicional.
  Después resolvemos dos ejercicios tipo examen, con la respuesta explicada
  columna por columna, y cerramos con la trampa más común: la negación de un
  condicional. Estas tablas de verdad ejemplos están pensadas para que los sigas
  a mano mientras lees.


  Además de resolver ejercicios, las tablas de verdad sirven para revisar si un
  argumento es válido.
  [Britannica](https://www.britannica.com/topic/truth-table) describe ese uso,
  que también aparece en muchas pruebas de razonamiento lógico.


  ## Qué es una tabla de verdad y cuántas filas necesitas


  **Frase de enfoque: el número de filas depende de cuántas proposiciones
  distintas tenga la fórmula.**


  Una proposición es una afirmación que puede ser verdadera (V) o falsa (F). Las
  letras p, q y r representan proposiciones simples, y los conectores (¬, ∧, ∨,
  →, ↔) las combinan en fórmulas más largas. Algunos materiales usan 1 y 0 en
  lugar de V y F. Significan lo mismo, así que conviene acostumbrarte a la
  notación de tu examen.


  Cada proposición distinta duplica las posibilidades. Por eso, con n
  proposiciones la tabla tiene 2^n filas, como resume este [material académico
  del Germanna Community
  College](https://germanna.edu/sites/default/files/2022-03/Logic%20and%20Truth%20Tables.pdf):


  <table>

  <thead><tr><th>Proposiciones</th><th>Fórmula</th><th>Filas</th></tr></thead>

  <tbody><tr><td>1</td><td>p</td><td>2</td></tr><tr><td>2</td><td>p,
  q</td><td>4</td></tr><tr><td>3</td><td>p, q,
  r</td><td>8</td></tr><tr><td>4</td><td>p, q, r, s</td><td>16</td></tr></tbody>

  </table>
mk2: >-
  ## Cómo construir una tabla de verdad en 4 pasos


  **Frase de enfoque: primero llenas las combinaciones de las proposiciones y
  después calculas columna por columna.**


  1. Identifica las proposiciones simples de la fórmula y cuéntalas. Si son dos,
  tendrás 4 filas; si son tres, 8.

  2. Llena las columnas de las proposiciones con un patrón fijo. La primera
  columna alterna V y F de una en una; la segunda, de dos en dos; la tercera, de
  cuatro en cuatro. Con dos proposiciones quedaría p = V, V, F, F y q = V, F, V,
  F.

  3. Calcula las subfórmulas de adentro hacia afuera: primero lo que está entre
  paréntesis y después los conectores exteriores.

  4. Revisa el resultado final. Elige una fila al azar y vuelve a calcularla a
  mano; si coincide, tu tabla va bien.


  Este orden evita el error más común: intentar resolver la fórmula completa de
  una sola vez.


  ## Negación: el valor que se invierte


  **Frase de enfoque: la negación cambia el valor de la proposición, sin
  importar lo demás.**


  La negación de p (se escribe ¬p y se lee «no p») es verdadera cuando p es
  falsa, y falsa cuando p es verdadera.


  <table>

  <thead><tr><th>p</th><th>¬p</th></tr></thead>

  <tbody><tr><td>V</td><td>F</td></tr><tr><td>F</td><td>V</td></tr></tbody>

  </table>


  Si p es «Hoy es lunes» y eso es verdadero, ¬p es «Hoy no es lunes» y es falsa.
  Parece obvio, pero en fórmulas largas la negación se olvida con facilidad,
  sobre todo cuando afecta a un paréntesis completo.


  ## Conjunción: verdadera solo cuando ambas partes lo son


  **Frase de enfoque: basta con que una parte sea falsa para que toda la
  conjunción sea falsa.**


  La conjunción p ∧ q se lee «p y q». Es verdadera únicamente cuando p y q son
  verdaderas. En cualquier otro caso es falsa.


  <table>

  <thead><tr><th>p</th><th>q</th><th>p ∧ q</th></tr></thead>

  <tbody><tr><td>V</td><td>V</td><td>V</td></tr><tr><td>V</td><td>F</td><td>F</td></tr><tr><td>F</td><td>V</td><td>F</td></tr><tr><td>F</td><td>F</td><td>F</td></tr></tbody>

  </table>


  Piensa en la conjunción como una condición estricta: necesitas que se cumplan
  las dos cosas.


  ## Condicional: cuándo sí se rompe la promesa


  **Frase de enfoque: p → q solo es falso cuando p es verdadera y q es falsa.**


  El condicional p → q (se lee «si p, entonces q») es la parte que más confunde.
  Una forma sencilla de entenderlo es pensar en una promesa. Imagina que alguien
  dice: «Si apruebas el examen, te regalo una bicicleta». Esa promesa solo se
  rompe en un caso: apruebas y no te regalan la bici. En los demás casos la
  promesa no se incumple. [Esta guía sobre tablas de
  verdad](https://cursosrentables.com/tablas-de-verdad-definicion-y-reglas/) usa
  el mismo tipo de ejemplo.


  De ahí sale la tabla:


  <table>

  <thead><tr><th>Aprobaste (p)</th><th>Te regalan (q)</th><th>p → q</th><th>Por
  qué</th></tr></thead>

  <tbody><tr><td>V</td><td>V</td><td>V</td><td>Cumplieron la
  promesa</td></tr><tr><td>V</td><td>F</td><td>F</td><td>Aprobaste y no te
  regalaron nada: promesa rota</td></tr><tr><td>F</td><td>V</td><td>V</td><td>No
  aprobaste; la promesa no se
  rompió</td></tr><tr><td>F</td><td>F</td><td>V</td><td>No aprobaste; tampoco se
  rompió</td></tr></tbody>

  </table>


  La idea clave: cuando el antecedente p es falso, el condicional sale
  verdadero, sin importar q. Esto confunde a muchos estudiantes, pero la lógica
  es consistente: la promesa solo se incumple cuando se cumple la condición y el
  resultado no llega.
mk3: >-
  ## Ejercicio 1 resuelto: tablas de verdad ejemplos paso a paso


  **Frase de enfoque: resuelve primero la negación, luego la conjunción y al
  final el condicional.**


  **Ejercicio:** construye la tabla de verdad de (¬p ∧ q) → p y determina si la
  fórmula es tautología, contradicción o contingencia.


  <table>

  <thead><tr><th>p</th><th>q</th><th>¬p</th><th>¬p ∧ q</th><th>(¬p ∧ q) →
  p</th></tr></thead>

  <tbody><tr><td>V</td><td>V</td><td>F</td><td>F</td><td>V</td></tr><tr><td>V</td><td>F</td><td>F</td><td>F</td><td>V</td></tr><tr><td>F</td><td>V</td><td>V</td><td>V</td><td>F</td></tr><tr><td>F</td><td>F</td><td>V</td><td>F</td><td>V</td></tr></tbody>

  </table>


  **Respuesta explicada:**


  - La columna ¬p invierte cada valor de p.

  - La columna ¬p ∧ q solo es V cuando ¬p es V y q también es V. Eso ocurre
  únicamente en la tercera fila (p = F, q = V).

  - En la última columna, el condicional es falso solo si el antecedente (¬p ∧
  q) es V y el consecuente (p) es F. En la tercera fila el antecedente es V,
  pero p es F, así que el resultado es F. En las demás filas el antecedente es
  F, y el condicional sale V.

  - La fórmula tiene al menos un V y al menos un F, por lo tanto es una
  **contingencia**. No es tautología, porque no es V en todas las filas, ni
  contradicción, porque no es F en todas.
mk4: >-
  ## Ejercicio 2 resuelto: tablas de verdad ejemplos con tres proposiciones


  **Frase de enfoque: con tres proposiciones tienes 8 filas; un orden fijo te
  ahorra errores.**


  **Ejercicio:** determina el valor de verdad de (p ∧ ¬q) → r en cada fila e
  indica en qué caso la fórmula es falsa.


  <table>

  <thead><tr><th>p</th><th>q</th><th>r</th><th>¬q</th><th>p ∧ ¬q</th><th>(p ∧
  ¬q) → r</th></tr></thead>

  <tbody><tr><td>V</td><td>V</td><td>V</td><td>F</td><td>F</td><td>V</td></tr><tr><td>V</td><td>V</td><td>F</td><td>F</td><td>F</td><td>V</td></tr><tr><td>V</td><td>F</td><td>V</td><td>V</td><td>V</td><td>V</td></tr><tr><td>V</td><td>F</td><td>F</td><td>V</td><td>V</td><td>F</td></tr><tr><td>F</td><td>V</td><td>V</td><td>F</td><td>F</td><td>V</td></tr><tr><td>F</td><td>V</td><td>F</td><td>F</td><td>F</td><td>V</td></tr><tr><td>F</td><td>F</td><td>V</td><td>V</td><td>F</td><td>V</td></tr><tr><td>F</td><td>F</td><td>F</td><td>V</td><td>F</td><td>V</td></tr></tbody>

  </table>


  **Respuesta explicada:**


  - Primero calcula ¬q, que invierte q. Después calcula la conjunción p ∧ ¬q,
  que solo es V cuando p es V y q es F.

  - Así, el antecedente (p ∧ ¬q) es V únicamente en las filas 3 y 4. En las
  demás filas el condicional sale V automáticamente.

  - Solo en las filas 3 y 4 hay que revisar el consecuente r. En la fila 3, r es
  V y el condicional sale V. En la fila 4, r es F y el condicional sale F.

  - La fórmula es falsa en un único caso: p = V, q = F y r = F.

  - Como tiene valores V y F, es una **contingencia**.


  **Consejo para el examen:** no llenes las 8 filas al azar. Busca primero las
  filas donde el antecedente es V, porque si el antecedente es F la fila ya está
  resuelta, y solo analiza el consecuente en esas filas.


  ## La trampa de la negación del condicional


  **Frase de enfoque: la negación de p → q no es ¬p → ¬q; la forma correcta es p
  ∧ ¬q.**


  Muchos estudiantes escriben que la negación de «si p, entonces q» es «si no p,
  entonces no q». Es un error frecuente. Para comprobarlo, construye la tabla
  con las dos fórmulas:


  <table>

  <thead><tr><th>p</th><th>q</th><th>p → q</th><th>¬(p → q)</th><th>p ∧
  ¬q</th></tr></thead>

  <tbody><tr><td>V</td><td>V</td><td>V</td><td>F</td><td>F</td></tr><tr><td>V</td><td>F</td><td>F</td><td>V</td><td>V</td></tr><tr><td>F</td><td>V</td><td>V</td><td>F</td><td>F</td></tr><tr><td>F</td><td>F</td><td>V</td><td>F</td><td>F</td></tr></tbody>

  </table>


  La columna ¬(p → q) coincide con p ∧ ¬q en las cuatro filas. Por eso la
  negación correcta de p → q es p ∧ ¬q: que p se cumpla y que q no. Si revisas
  la fila p = V, q = V, verás que ¬p → ¬q da V, mientras que ¬(p → q) da F. Esa
  diferencia es la que los exámenes suelen probar. Esta equivalencia aparece en
  el capítulo de tablas de verdad de LibreTexts en
  español/17:_L%C3%B3gica/17.06:_Tablas_de_Verdad).


  ## Errores comunes al resolver tablas de verdad


  - Olvidar que el condicional es V cuando el antecedente es F.

  - Confundir ¬(p ∧ q) con ¬p ∧ ¬q. La forma correcta es ¬(p ∧ q) ≡ ¬p ∨ ¬q, una
  de las leyes de De Morgan.

  - Negar solo una letra cuando la negación afecta a todo el paréntesis.

  - Llenar las filas sin orden, lo que lleva a repetir o saltar combinaciones.

  - Saltarte las columnas intermedias. Cada una te da la pista para la columna
  final.


  Si en otros materiales ves estos mismos conectores en circuitos o
  programación, la lógica es la misma; solo cambia la notación. En programación
  suelen aparecer como AND, OR y NOT.
mk5: >-
  ## Resumen para repasar


  - Una tabla tiene 2^n filas para n proposiciones distintas.

  - La negación invierte el valor de verdad.

  - La conjunción solo es V cuando ambas partes son V.

  - El condicional solo es F cuando el antecedente es V y el consecuente es F.

  - Un condicional con antecedente F siempre es V.

  - La negación de p → q es p ∧ ¬q.

  - Tautología: V en todas las filas. Contradicción: F en todas. Contingencia: V
  en algunas y F en otras.


  Para practicar más razonamiento lógico, revisa también [falacias lógicas:
  ejemplos explicados para el examen
  UNAM](https://www.antesdelexamen.com/falacias-logicas-ejemplos).


  ## Preguntas frecuentes


  ### ¿Cómo se hace una tabla de verdad paso a paso?


  Primero cuenta las proposiciones y calcula 2^n filas. Llena las columnas de
  cada proposición con el patrón de V y F, resuelve las subfórmulas de adentro
  hacia afuera y verifica una fila al azar.


  ### ¿Cuántas filas tiene una tabla de verdad con tres proposiciones?


  Tiene 8 filas, porque 2 elevado a la 3 es 8.


  ### ¿Por qué si p es falsa el condicional sale verdadero?


  El condicional solo se incumple cuando p es V y q es F. Si p es F, nunca se
  incumple, por eso el resultado es V. Otra forma de verlo: p → q es equivalente
  a ¬p ∨ q, y si p es F, ¬p es V.


  ### ¿Cuál es la diferencia entre tautología, contradicción y contingencia?


  Una tautología es verdadera en todas sus filas; una contradicción es falsa en
  todas; una contingencia es verdadera en algunas filas y falsa en otras. El
  ejercicio 1 de este artículo es una contingencia.


  ## Conclusión


  Las tablas de verdad se dominan con método: cuenta las filas, resuelve por
  columnas y comprueba el resultado. Con la negación, la conjunción y el
  condicional bien entendidos, la mayoría de los ejercicios de lógica se vuelven
  más sencillos. Practica con más tablas de verdad ejemplos hasta que el método
  se vuelva automático. Si quieres repasar los temas que conviene estudiar junto
  con esta técnica, revisa [la guía de lógica para el examen de la
  UNAM](https://www.antesdelexamen.com/lógica-para-el-examen-de-la-unam-los-temas-que-debes-estudiar-para-resolver-mejor-la-prueba).
  Y para seguir practicando, puedes profundizar en más guías en AntesdelExamen.
---

