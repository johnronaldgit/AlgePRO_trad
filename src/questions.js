// src/questions.js
const questions = {
    lesson1: [
      {
        question: "Find the square of \\((3a + 5b)^2\\).",
        options: ["a) \\(9a^2 + 15ab + 25b^2\\)", "b) \\(9a^2 + 30ab + 25b^2\\)", "c) \\(6a^2 + 30ab + 25b^2\\)", "d) \\(9a^2 + 30a^2b^2 + 25b^2\\)"],
        correctAnswer: "b) \\(9a^2 + 30ab + 25b^2\\)"
      },
      {
        question: "Find the square of \\(x^3 + 4\\).",
        options: ["a) \\(x^6 + 4x^3 + 16\\)", "b) \\(x^6 + 8x^3 + 16\\)", "c) \\(x^9 + 16\\)", "d) \\(x^6 + 12x^3 + 16\\)"],
        correctAnswer: "b) \\(x^6 + 8x^3 + 16\\)"
      },
      {
        question: "Find the product of \\((-2t - 3)^2\\) and simplify.",
        options: ["a) \\(4t^2 + 12t + 9\\)", "b) \\(4t^2 - 12t + 9\\)", "c) \\(4t^2 + 6t + 9\\)", "d) \\(4t^2 - 12t + 9\\)"],
        correctAnswer: "a) \\(4t^2 + 12t + 9\\)"
      },
      {
        question: "Find the product of \\((-4p + 3)^2\\) and simplify.",
        options: ["a) \\(16p^2 + 12p + 9\\)", "b) \\(16p^2 + 24p + 9\\)", "c) \\(16p^2 - 12p + 9\\)", "d) \\(16p^2 - 24p + 9\\)"],
        correctAnswer: "d) \\(16p^2 - 24p + 9\\)"
      },
      {
        question: "Find the product of \\((4x + \\frac{1}{3})(4x - \\frac{1}{3})\\) and simplify.",
        options: ["a) \\(16x^2 + \\frac{1}{9}\\)", "b) \\(16x^2 - \\frac{1}{9}\\)", "c) \\(16x^2 - \\frac{1}{9}\\)", "d) None of the above"],
        correctAnswer: "c) \\(16x^2 - \\frac{1}{9}\\)"
      },
      {
        question: "Find the missing term: \\((\\frac{3}{2}x - 2)^2\\) = \\((\\frac{9}{4}x^2 +\\) _____ \\(+ 4\\)).",
        options: ["a) -6", "b) +6", "c) -3", "d) +3"],
        correctAnswer: "a) -6"
      },
      {
        question: "Expand the expression: \\((2m - 7n)^2\\).",
        options: ["a) \\(4m^2 - 28mn - 49n^2\\)", "b) \\(4m^2 + 28mn + 49n^2\\)", "c) \\(4m^2 - 28mn + 49n^2\\)", "d) \\(4m^2 + 28mn - 49n^2\\)"],
        correctAnswer: "c) \\(4m^2 - 28mn + 49n^2\\)"
      },
      {
        question: "Expand the expression: \\((5y^4 - 8)(5y^4 + 8)\\).",
        options: ["a) \\(25y^8 + 64\\)", "b) \\(25y^{16} - 64\\)", "c) \\(25y^{16} + 64\\)", "d) \\(25y^8 - 64\\)"],
        correctAnswer: "d) \\(25y^8 - 64\\)"
      },
      {
        question: "Find the product of \\((2 + 5n^2)^2\\).",
        options: ["a) \\(4 + 10n^4 + 25n^2\\)", "b) \\(4 + 20n^2 + 25n^4\\)", "c) \\(4 + 20n^2 + 10n^4\\)", "d) \\(4 + 10n^2 + 10n^4\\)"],
        correctAnswer: "b) \\(4 + 20n^2 + 25n^4\\)"
      },
      {
        question: "Multiply: \\((-m + 5n)(-m - 5n)\\).",
        options: ["a) \\(m^2 - 25n^2\\)", "b) \\(m^2 - 25mn - 25n^2\\)", "c) \\(m^2 - 10mn + 25n^2\\)", "d) None of the above"],
        correctAnswer: "a) \\(m^2 - 25n^2\\)"
      },
      {
        question: "Expand the expression: \\((-9x^2 - 10y)^2\\).",
        options: ["a) \\(81x^4 + 180x^2y^2 + 100y^2\\)", "b) \\(81x^4 + 180xy^2 + 100y^2\\)", "c) \\(81x^4 - 180x^2y + 100y^2\\)", "d) None of the above"],
        correctAnswer: "d) None of the above"
      },
      {
        question: "Find the square of \\((n - 0.5)^2\\).",
        options: ["a) \\(n^2 - n - \\frac{1}{4}n^2\\)", "b) \\(n^2 - \\frac{1}{2}n + 0.25n^2\\)", "c) \\(n^2 - n + 0.25n^2\\)", "d) \\(n^2 - 0.5n - 0.25n^2\\)"],
        correctAnswer: "c) \\(n^2 - n + 0.25n^2\\)"
      },
      {
        question: "Determine if the expression \\((4x^2 - 12x + 9)\\) is a perfect square binomial.",
        options: ["a) Yes", "b) No", "c) Maybe", "d) Unidentified"],
        correctAnswer: "a) Yes"
      },
      {
        question: "Determine if the expression \\((x^2 - 10x + 16)\\) is a perfect square binomial.",
        options: ["a) Yes", "b) No", "c) Maybe", "d) Unidentified"],
        correctAnswer: "b) No"
      },
      {
        question: "Based on question number 14, what will make the expression \\((x^2 - 10x + 16)\\) a perfect square binomial based on the choices below?",
        options: ["a) Change \\(-10x\\) to \\(-12x\\)", "b) Change \\(-10x\\) to \\(-8x\\)", "c) Change 16 to 25", "d) Change 16 to 100"],
        correctAnswer: "b) Change \\(-10x\\) to \\(-8x\\)"
      }
    ],
    lesson2: [
      {
        question: "Factor the expression and determine if the trinomial \\(x^2 - 12x + 144\\) is a perfect square.",
        options: ["a) Not a perfect square", "b) \\((x + 12)^2\\)", "c) \\((x - 12)^2\\)", "d) \\((x + 12)(x - 12)\\)"],
        correctAnswer: "a) Not a perfect square"
      },
      {
        question: "Factor the expression and determine if the trinomial \\(64x^2 + 48x + 9\\) is a perfect square.",
        options: ["a) \\((8x + 3)^2\\)", "b) Not a perfect square", "c) \\((8x - 3)^2\\)", "d) \\((8x + 3)(8x - 3)\\)"],
        correctAnswer: "a) \\((8x + 3)^2\\)"
      },
      {
        question: "Factor the expression and determine if the trinomial \\(9b^2 - 60b + 100\\) is a perfect square.",
        options: ["a) \\((3b + 10)(3b - 10)\\)", "b) \\((3b + 10)^2\\)", "c) Not a perfect square", "d) \\((3b - 10)^2\\)"],
        correctAnswer: "d) \\((3b - 10)^2\\)"
      },
      {
        question: "Factor the expression and determine if the trinomial \\(36n^2 + 132n + 121\\) is a perfect square.",
        options: ["a) \\((6n - 11)^2\\)", "b) \\((6n + 11)^2\\)", "c) \\((6n + 11)(6n - 11)\\)", "d) Not a perfect square"],
        correctAnswer: "b) \\((6n + 11)^2\\)"
      },
      {
        question: "Factor the expression and determine if the trinomial \\(x^2 - 4xy + 4y^2\\) is a perfect square.",
        options: ["a) Not a perfect square", "b) \\((x + 2y)^2\\)", "c) \\((x - 2y)^2\\)", "d) \\((x + 2y)(x - 2y)\\)"],
        correctAnswer: "c) \\((x - 2y)^2\\)"
      },
      {
        question: "Simplify the expression: \\((x - y - z)^2 + (x + y + z)^2\\).",
        options: ["a) \\(2x^2 + 2y^2 + 2z^2 + 4yz\\)", "b) \\(-2x^2 + 2y^2 + 2z^2 + 4yz\\)", "c) \\(-2x^2 - 2y^2 - 2z^2 - 4yz\\)", "d) \\(2x^2 + 2y^2 + 2z^2 - 4yz\\)"],
        correctAnswer: "a) \\(2x^2 + 2y^2 + 2z^2 + 4yz\\)"
      },
      {
        question: "Simplify the expression: \\((x - y + z)^2 - (x - y - z)^2\\).",
        options: ["a) \\(4xz + 4yz\\)", "b) \\(2xz - 2yz\\)", "c) \\(4xz - 4yz\\)", "d) \\(2xz + 2yz\\)"],
        correctAnswer: "c) \\(4xz - 4yz\\)"
      },
      {
        question: "Simplify the expression: \\((3l - 4m + 5n)^2 + (3l + 4m - 5n)^2\\).",
        options: ["a) \\(18l^2 + 32m^2 - 50n^2\\)", "b) \\(9l^2 + 16m^2 + 25n^2\\)", "c) \\(18l^2 + 32n^2 + 50n^2\\)", "d) \\(9l^2 + 16m^2 - 25n^2\\)"],
        correctAnswer: "c) \\(18l^2 + 32n^2 + 50n^2\\)"
      },
      {
        question: "Simplify the expression: \\((5a - 13b + 4c)^2 - (5a + 13b - 4c)^2\\).",
        options: ["a) \\(203ab + 80ac\\)", "b) \\(203ab - 80ac\\)", "c) \\(-203ab - 80ac\\)", "d) \\(-203ab + 80ac\\)"],
        correctAnswer: "d) \\(-203ab + 80ac\\)"
      },
      {
        question: "Simplify the expression: \\((2x - 3y + 4z)^2 - (2x - 3y - 4z)^2\\).",
        options: ["a) \\(16xz - 24yz\\)", "b) \\(32xz + 24yz\\)", "c) \\(16xz + 24yz\\)", "d) \\(32xz - 24yz\\)"],
        correctAnswer: "b) \\(32xz + 24yz\\)"
      },
      {
        question: "Which one of the following statements is true?",
        options: ["a) \\((a + b + c)^2 = (a + b + c)(a + b + c)\\)", "b) \\((a + b + c)^2 = a^2 + b^2 + c^2\\)", "c) \\((a + b + c)^2 = (a + b)^2 + (b + c)^2 + (a + c)^2\\)", "d) \\((a + b + c)^2 = ab + ac + bc\\)"],
        correctAnswer: "a) \\((a + b + c)^2 = (a + b + c)(a + b + c)\\)"
      },
      {
        question: "Which of the following is not a perfect square trinomial?",
        options: ["a) \\(x^2 - 6x + 9\\)", "b) \\(y^2 - 14y + 49\\)", "c) \\(z^2 + 10z + 100\\)", "d) \\(w^2 - 8w + 20\\)"],
        correctAnswer: "d) \\(w^2 - 8w + 20\\)"
      },
      {
        question: "Expand the square of a trinomial expression: \\((-2l + m - 9n)^2\\).",
        options: ["a) \\(4l^2 + m^2 + 81n^2 - 4lm + 36ln - 18mn\\)", "b) \\(4l^2 + m^2 + 81n^2 + 4lm + 36ln - 18mn\\)", "c) \\(4l^2 + m^2 + 81n^2 - 4lm - 36ln - 18mn\\)", "d) \\(4l^2 + m^2 - 81n^2 - 4lm + 36ln - 18mn\\)"],
        correctAnswer: "a) \\(4l^2 + m^2 + 81n^2 - 4lm + 36ln - 18mn\\)"
      },
      {
        question: "Expand the square of a trinomial expression: \\((2a + 3b - 4c)^2\\).",
        options: ["a) \\(4a^2 + 12ab - 16ac + 9b^2 - 24bc + 16c^2\\)", "b) \\(4a^2 - 12ab + 16ac - 9b^2 + 24bc - 16c^2\\)", "c) \\(4a^2 + 12ab + 16ac + 9b^2 - 24bc + 16c^2\\)", "d) \\(4a^2 - 12ab - 16ac + 9b^2 - 24bc + 16c^2\\)"],
        correctAnswer: "a) \\(4a^2 + 12ab - 16ac + 9b^2 - 24bc + 16c^2\\)"
      },
      {
        question: "Expand the square of a trinomial expression: \\((-2x + y + 4z)^2\\).",
        options: ["a) \\(4x^2 - 4xy - 16xz + y^2 + 8yz + 16z^2\\)", "b) \\(4x^2 + 4xy + 16xz - y^2 - 8yz - 16z^2\\)", "c) \\(4x^2 - 4xy + 16xz + y^2 - 8yz + 16z^2\\)", "d) \\(4x^2 + 4xy - 16xz + y^2 + 8yz - 16z^2\\)"],
        correctAnswer: "a) \\(4x^2 - 4xy - 16xz + y^2 + 8yz + 16z^2\\)"
      }
    ],
    lesson3: [
      {
        question: "Calculate the product of \\((281p^2 + 67)(281p^2 - 67)\\).",
        options: ["a) 78916p^2 + 4498", "b) 78961p^2 + 4498", "c) 78916p^2 - 4498", "d) 78961p^2 - 4498"],
        correctAnswer: "d) 78961p^2 - 4498"
      },
      {
        question: "Determine the coefficient of \\(b^4\\) in the product \\((2b^2 + 3)(2b^2 - 3)\\).",
        options: ["a) 1", "b) 2", "c) 4", "d) 9"],
        correctAnswer: "c) 4"
      },
      {
        question: "Simplify the expression \\((37s^2 + 13)(37s^2 - 13)\\).",
        options: ["a) 1369s^4 + 196", "b) 1369s^4 - 169", "c) 1369s^4 - 196", "d) 1369s^4 + 169"],
        correctAnswer: "b) 1369s^4 - 169"
      },
      {
        question: "Find the missing term: \\((8z^2 + 117)(8z^2 - 117) = 64z^4 - \\underline{\\phantom{}}\\).",
        options: ["a) 13869", "b) 13896", "c) 13689", "d) 13698"],
        correctAnswer: "c) 13689"
      },
      {
        question: "If \\(c = \\frac{3}{2}\\) and \\(d = \\frac{1}{4}\\), what is \\((c + d)(c - d)\\)?",
        options: ["a) \\(\\frac{35}{16}\\)", "b) \\(\\frac{16}{35}\\)", "c) \\(\\frac{35}{4}\\)", "d) \\(\\frac{4}{35}\\)"],
        correctAnswer: "a) \\(\\frac{35}{16}\\)"
      },
      {
        question: "Determine the simplest form of \\((6p + 17q^2)(6p - 17q^2)\\).",
        options: ["a) 36p^2 + 289q^4", "b) 36p^2 - 289q^4", "c) 36p^2 + 298q^4", "d) 36p^2 - 298q^4"],
        correctAnswer: "b) 36p^2 - 289q^4"
      },
      {
        question: "What is the product of \\(\\left(\\frac{3}{4}x + \\frac{2}{3}y\\right)\\left(\\frac{3}{4}x - \\frac{2}{3}y\\right)\\)?",
        options: ["a) \\(\\frac{3}{4}x^2 + \\frac{2}{3}y^2\\)", "b) \\(\\frac{3}{4}x^2 - \\frac{2}{3}y^2\\)", "c) \\(\\frac{9}{16}x^2 + \\frac{4}{9}y^2\\)", "d) \\(\\frac{9}{16}x^2 - \\frac{4}{9}y^2\\)"],
        correctAnswer: "d) \\(\\frac{9}{16}x^2 - \\frac{4}{9}y^2\\)"
      },
      {
        question: "Simplify \\((3m + 11n^3)(3m - 11n^3)\\).",
        options: ["a) \\(6m + 121n^3\\)", "b) \\(6m^2 + 121n^3\\)", "c) \\(9m - 121n^6\\)", "d) \\(9m^2 - 121n^6\\)"],
        correctAnswer: "d) \\(9m^2 - 121n^6\\)"
      },
      {
        question: "Given \\(p = 5\\) and \\(q = 8\\), find \\((p^2 + q^2)(p^2 - q^2)\\).",
        options: ["a) 3471", "b) -3471", "c) 3741", "d) -3741"],
        correctAnswer: "b) -3471"
      },
      {
        question: "What is the value of \\((7a + 5b)(7a - 5b)\\)?",
        options: ["a) \\(-49a^2 + 25b^2\\)", "b) \\(49a^2 - 25b^2\\)", "c) \\(-49a^2 - 25b^2\\)", "d) \\(49a^2 + 25b^2\\)"],
        correctAnswer: "b) \\(49a^2 - 25b^2\\)"
      },
      {
        question: "Determine the value of \\((7x - 3y)(7x + 3y)\\) when \\(x = 2\\) and \\(y = 1\\).",
        options: ["a) 183", "b) 185", "c) 187", "d) 189"],
        correctAnswer: "c) 187"
      },
      {
        question: "Simplify \\((4m + 3n)(4m - 3n)\\).",
        options: ["a) 16m^2 - 9b^2", "b) 16m^2 - 9b^2", "c) 16m^2 - 9b^2", "d) 16m^2 - 9b^2"],
        correctAnswer: "a) 16m^2 - 9b^2"
      },
      {
        question: "Evaluate \\((2x - 3)(2x + 3)\\) if \\(x = 4\\).",
        options: ["a) 55", "b) 43", "c) 65", "d) 33"],
        correctAnswer: "a) 55"
      },
      {
        question: "What is the simplified form of \\((8x - 3y)(8x + 3y)\\)?",
        options: ["a) 9x^2 + 64y^2", "b) 9x^2 - 64y^2", "c) 64x^2 + 9y^2", "d) 64x^2 - 9y^2"],
        correctAnswer: "d) 64x^2 - 9y^2"
      },
      {
        question: "If \\(k = 6\\) and \\(l = 2\\), what is \\((k + l^2)(k - l^2)\\)?",
        options: ["a) 20", "b) 22", "c) 12", "d) 18"],
        correctAnswer: "a) 20"
      }
    ],
    lesson4: [
      {
        question: "Expand the cube of a binomial expression: \\((2x - 3y)^3\\).",
        options: ["a) \\(8x^3 + 36x^2y + 54xy^2 - 27y^3\\)", "b) \\(8x^3 - 18x^2y - 54xy^2 - 27y^3\\)", "c) \\(8x^3 - 36x^2y + 54xy^2 - 27y^3\\)", "d) \\(8x^3 + 18x^2y - 54xy^2 - 27y^3\\)"],
        correctAnswer: "c) \\(8x^3 - 36x^2y + 54xy^2 - 27y^3\\)"
      },
      {
        question: "Expand the cube of a binomial expression: \\((-x + 4y)^3\\).",
        options: ["a) \\(x^3 + 12x^2y - 48xy^2 + 64y^3\\)", "b) \\(-x^3 + 12x^2y + 48xy^2 + 64y^3\\)", "c) \\(x^3 + 12x^2y + 48xy^2 + 64y^3\\)", "d) \\(-x^3 + 12x^2y - 48xy^2 + 64y^3\\)"],
        correctAnswer: "d) \\(-x^3 + 12x^2y - 48xy^2 + 64y^3\\)"
      },
      {
        question: "Expand the cube of a binomial expression: \\((4x - 5y)^3\\).",
        options: ["a) \\(64x^3 - 240x^2y + 375xy^2 - 125y^3\\)", "b) \\(64x^3 - 240x^2y + 300xy^2 - 125y^3\\)", "c) \\(64x^3 - 160x^2y + 300xy^2 - 125y^3\\)", "d) \\(64x^3 - 160x^2y + 375xy^2 - 125y^3\\)"],
        correctAnswer: "b) \\(64x^3 - 240x^2y + 300xy^2 - 125y^3\\)"
      },
      {
        question: "Expand the cube of a binomial expression: \\(\\left(\\frac{1}{2}x - 5y\\right)^3\\).",
        options: ["a) \\(\\frac{1}{8}x^3 - \\frac{15}{4}x^2y + \\frac{75}{2}xy^2 - 125y^3\\)", "b) \\(\\frac{1}{8}x^3 - \\frac{15}{4}x^2y + \\frac{75}{4}xy^2 - 125y^3\\)", "c) \\(\\frac{1}{8}x^3 - \\frac{15}{8}x^2y + \\frac{75}{4}xy^2 + 125y^3\\)", "d) \\(\\frac{1}{8}x^3 - \\frac{15}{8}x^2y + \\frac{75}{2}xy^2 - 125y^3\\)"],
        correctAnswer: "a) \\(\\frac{1}{8}x^3 - \\frac{15}{4}x^2y + \\frac{75}{2}xy^2 - 125y^3\\)"
      },
      {
        question: "Expand the cube of a binomial expression: \\(\\left(-2x + \\frac{3}{2}y\\right)^3\\).",
        options: ["a) \\(-8x^3 + 18x^2y - \\frac{27}{2}xy^2 + \\frac{27}{8}y^3\\)", "b) \\(-8x^3 + 18x^2y - \\frac{27}{4}xy^2 + \\frac{27}{8}y^3\\)", "c) \\(8x^3 + 18x^2y - \\frac{27}{4}xy^2 + \\frac{27}{8}y^3\\)", "d) \\(8x^3 + 18x^2y - \\frac{27}{2}xy^2 + \\frac{27}{8}y^3\\)"],
        correctAnswer: "a) \\(-8x^3 + 18x^2y - \\frac{27}{2}xy^2 + \\frac{27}{8}y^3\\)"
      },
      {
        question: "How many terms does the product of the cube of a binomial contain?",
        options: ["a) 1", "b) 2", "c) 4", "d) 4"],
        correctAnswer: "d) 4"
      },
      {
        question: "Determine the sum of all coefficients in the expansion of \\((y + 2)^3\\).",
        options: ["a) 26", "b) 28", "c) 29", "d) 27"],
        correctAnswer: "d) 27"
      },
      {
        question: "Based on item no. 7, determine the product of the 2nd and 3rd terms.",
        options: ["a) 60", "b) 62", "c) 70", "d) 72"],
        correctAnswer: "d) 72"
      },
      {
        question: "Determine the sum of the coefficients of the 2nd and 3rd terms in the expansion of \\((3x + 5y)^3\\).",
        options: ["a) 350", "b) 355", "c) 360", "d) 365"],
        correctAnswer: "c) 360"
      },
      {
        question: "Based on item no. 9, determine the difference between the 3rd and 4th terms.",
        options: ["a) 95", "b) 100", "c) 105", "d) 110"],
        correctAnswer: "b) 100"
      },
      {
        question: "Expand: \\((-2x + 6)^3\\); Find the 3rd term.",
        options: ["a) 216x", "b) -216x", "c) -216x^2", "d) 216x^2"],
        correctAnswer: "b) -216x"
      },
      {
        question: "Based on item no. 11, what is the constant of \\(x^2\\)?",
        options: ["a) -72", "b) 72", "c) 216", "d) -216"],
        correctAnswer: "b) 72"
      },
      {
        question: "Expand: \\((3.5x - 0.6y)^3\\); Find the 3rd term.",
        options: ["a) 42.875", "b) -22.05", "c) 3.78", "d) -0.216"],
        correctAnswer: "c) 3.78"
      },
      {
        question: "Expand: \\((3x - \\frac{1}{3}y)^3\\); Find the 2nd, 3rd, and 4th terms.",
        options: ["a) -4, \\(\\frac{1}{3}\\), \\(\\frac{-1}{27}\\)", "b) -4, \\(\\frac{-1}{3}\\), \\(\\frac{-1}{27}\\)", "c) -4, \\(\\frac{2}{3}\\), \\(\\frac{-1}{27}\\)", "d) -4, \\(\\frac{-2}{3}\\), \\(\\frac{-1}{27}\\)"],
        correctAnswer: "c) -4, \\(\\frac{2}{3}\\), \\(\\frac{-1}{27}\\)"
      },
      {
        question: "Expand: \\((3x + \\frac{1}{2}y)^3\\); Find the 2nd and 3rd terms.",
        options: ["a) \\(\\frac{27}{2}\\), \\(\\frac{9}{2}\\)", "b) \\(\\frac{27}{2}\\), \\(\\frac{-9}{2}\\)", "c) \\(\\frac{27}{2}\\), \\(\\frac{9}{4}\\)", "d) \\(\\frac{27}{2}\\), \\(\\frac{-9}{4}\\)"],
        correctAnswer: "c) \\(\\frac{27}{2}\\), \\(\\frac{9}{4}\\)"
      }
    ],
    lesson5: [
      {
        question: "Simplify the following expression: \\((x + 4)(x^2 - 4x + 16)\\).",
        options: ["a) x^3 + 16", "b) x^3 - 16", "c) x^3 - 16 + 64", "d) x^3 + 16 + 64"],
        correctAnswer: "b) x^3 - 16"
      },
      {
        question: "Simplify the following expression: \\((y - 3)(y^2 + 3y + 9)\\).",
        options: ["a) y^3 - 9", "b) y^3 - 9 + 27", "c) y^3 + 3y - 9", "d) y^3 - 27"],
        correctAnswer: "d) y^3 - 27"
      },
      {
        question: "Simplify the following expression: \\((3y + 2)(9y^2 - 6y + 4)\\).",
        options: ["a) 27y^3 + 8", "b) 27y^3 + 12y + 8", "c) 27y^3 + 18y^2 + 12y", "d) 27y^3 + 18y^2 - 12y + 8"],
        correctAnswer: "a) 27y^3 + 8"
      },
      {
        question: "Simplify the following expression: \\((4x - 5)(x^2 + 5x + 6)\\).",
        options: ["a) 4x^3 + 15x^2 - x - 30", "b) 4x^3 + 15x^2 + x - 30", "c) 4x^3 - 15x^2 - x - 30", "d) 4x^3 - 15x^2 + x - 30"],
        correctAnswer: "a) 4x^3 + 15x^2 - x - 30"
      },
      {
        question: "Simplify the following expression: \\((2x - 4)(x^2 + 6x + 9)\\).",
        options: ["a) 2x^3 + 8x^2 - 6x - 36", "b) 2x^3 + 12x^2 + 18x - 36", "c) 2x^3 + 12x^2 - 18x - 36", "d) 2x^3 - 12x^2 + 6x - 36"],
        correctAnswer: "b) 2x^3 + 12x^2 + 18x - 36"
      },
      {
        question: "Complete the missing expression: \\((x - 4)(x^2 + 4x + 16) = x^3 + \\underline{\\phantom{}}\\).",
        options: ["a) 16", "b) -16", "c) 64", "d) -64"],
        correctAnswer: "d) -64"
      },
      {
        question: "Complete the missing expression: \\((2x + 5)(4x^2 - 10x + 25) = 8x^3 + \\underline{\\phantom{}}\\).",
        options: ["a) -125", "b) +125", "c) 20x^2 + 50x - 125", "d) -20x^2 + 50x + 125"],
        correctAnswer: "b) +125"
      },
      {
        question: "Find the missing term in \\((2x + 3)(x^2 - x + \\underline{\\phantom{}})\\) to make it a perfect cube.",
        options: ["a) 1", "b) -1", "c) 4", "d) -4"],
        correctAnswer: "a) 1"
      },
      {
        question: "Find the coefficient of the variable in \\((x + 6)(x^2 - 6x + 36)\\).",
        options: ["a) None", "b) 6", "c) -6", "d) -36"],
        correctAnswer: "a) None"
      },
      {
        question: "Determine the missing term in \\((4x - 7)(x^2 + 7x + 49) = 4x^3 + 21x^3 + \\underline{\\phantom{}} - 343\\).",
        options: ["a) 147", "b) -147", "c) 245", "d) -245"],
        correctAnswer: "a) 147"
      },
      {
        question: "Determine if the solution of \\((a + b)(a^2 - ab + b^2)\\) is a:",
        options: ["a) sum of two cubes", "b) difference of two cubes", "c) sum of two squares", "d) difference of two squares"],
        correctAnswer: "a) sum of two cubes"
      },
      {
        question: "Based on the previous question, what is the product of the given binomial and trinomial?",
        options: ["a) a^3 - b^3", "b) a^3 + b^3", "c) a^2 - b^2", "d) a^2 + b^2"],
        correctAnswer: "b) a^3 + b^3"
      },
      {
        question: "Apply the distributive property of multiplication to \\((3x - 4)(9x^2 + 12x + 16)\\). What is the product?",
        options: ["a) -27x^3 + 64", "b) -27x^3 - 64", "c) 27x^3 + 64", "d) 27x^3 - 64"],
        correctAnswer: "d) 27x^3 - 64"
      },
      {
        question: "Determine the result of \\((x + 2)(x^2 - 2x + 4)\\).",
        options: ["a) x^3 + 6", "b) x^3 + 8", "c) x^3 - 6", "d) x^3 - 8"],
        correctAnswer: "b) x^3 + 8"
      },
      {
        question: "Identify which of the following statements are true or false.\ni. When the sum of two terms is multiplied by the sum of their squares minus the product of these terms, the result is the sum of their cubes.\nii. When the difference of two terms is multiplied by the sum of their squares plus the product of these terms, the result is the difference of their cubes.",
        options: ["a) Only statement i is true.", "b) Only statement ii is true.", "c) Both statements are true.", "d) Both statements are false."],
        correctAnswer: "c) Both statements are true."
      }
    ],
    lesson6: [
      {
        question: "What is the factored form of \\(x^2 + 6x + 9\\)?",
        options: ["a) \\((x + 6)(x + 9)\\)", "b) \\((x + 3)(x + 3)\\)", "c) \\((x - 3)(x - 3)\\)", "d) \\((x + 9)(x + 1)\\)"],
        correctAnswer: "b) \\((x + 3)(x + 3)\\)"
      },
      {
        question: "Which of the following is a perfect square trinomial?",
        options: ["a) \\(y^2 + 10y + 25\\)", "b) \\(y^2 - 10y + 25\\)", "c) \\(y^2 + 5y + 6\\)", "d) \\(y^2 - 6y + 8\\)"],
        correctAnswer: "a) \\(y^2 + 10y + 25\\)"
      },
      {
        question: "Expand the expression \\((3m - 4)^2\\).",
        options: ["a) \\(9m^2 - 12m + 16\\)", "b) \\(9m^2 - 24m + 16\\)", "c) \\(9m^2 + 24m - 16\\)", "d) \\(9m^2 - 24m - 16\\)"],
        correctAnswer: "b) \\(9m^2 - 24m + 16\\)"
      },
      {
        question: "Factor completely \\(9n^2 + 30n + 25\\).",
        options: ["a) \\((3n + 5)(3n + 5)\\)", "b) \\((3n)(3n + 5)\\)", "c) \\((3n - 5)(3n - 5)\\)", "d) \\((9n + 25)(n + 1)\\)"],
        correctAnswer: "a) \\((3n + 5)(3n + 5)\\)"
      },
      {
        question: "Which is not a perfect square trinomial?",
        options: ["a) \\(a^2 + 2a + 1\\)", "b) \\(b^2 + 6b + 9\\)", "c) \\(c^2 + 4c + 5\\)", "d) \\(d^2 + 8d + 1\\)"],
        correctAnswer: "c) \\(c^2 + 4c + 5\\)"
      },
      {
        question: "Factor the trinomial \\(9m^2 + 30m + 25\\).",
        options: ["a) \\((9m + 25)(m + 1)\\)", "b) \\((9m)(m + 25)\\)", "c) \\((3m + 5)^2\\)", "d) \\((3m - 5)^2\\)"],
        correctAnswer: "c) \\((3m + 5)^2\\)"
      },
      {
        question: "Which of the following expressions cannot be written as a difference of two squares?",
        options: ["a) \\(m^2 - 36\\)", "b) \\(n^2 - 18\\)", "c) \\(p^2 - 49\\)", "d) \\(q^2 - 64\\)"],
        correctAnswer: "b) \\(n^2 - 18\\)"
      },
      {
        question: "Determine the GCF of this binomial: \\(18x^3 - 8xy^2\\).",
        options: ["a) 9x", "b) 8x", "c) 4x", "d) 2x"],
        correctAnswer: "d) 2x"
      },
      {
        question: "Based on the binomial on the previous item, \\(18x^3 - 8xy^2\\), what is the factored form?",
        options: ["a) \\(9x(3x + 2y)(3x - 2y)\\)", "b) \\(8x(3x + 2y)(3x - 2y)\\)", "c) \\(4x(3x + 2y)(3x - 2y)\\)", "d) \\(2x(3x + 2y)(3x - 2y)\\)"],
        correctAnswer: "d) \\(2x(3x + 2y)(3x - 2y)\\)"
      },
      {
        question: "Which of the following is a difference of two squares?",
        options: ["a) \\(25x^2 - 15\\)", "b) \\(121x^2 - 12\\)", "c) \\(256x^2 - 10\\)", "d) \\(196x^2 - 49\\)"],
        correctAnswer: "d) \\(196x^2 - 49\\)"
      },
      {
        question: "The following expressions are examples of difference of two squares EXCEPT:",
        options: ["a) \\(81x^2 - 36\\)", "b) \\(121x^2 - 12\\)", "c) \\(144x^2 - 81\\)", "d) \\(324x^2 - 289\\)"],
        correctAnswer: "b) \\(121x^2 - 12\\)"
      },
      {
        question: "Expand \\((6v - 5)(6v + 5)\\).",
        options: ["a) \\(12v^2 - 25\\)", "b) \\(12x^2 + 25\\)", "c) \\(36v^2 - 25\\)", "d) \\(36v^2 + 25\\)"],
        correctAnswer: "c) \\(36v^2 - 25\\)"
      },
      {
        question: "Based on the binomial on the previous item, \\(216x^4ay - 6y^5a\\), what is the factored form?",
        options: ["a) \\(6x^2ay(6x^2 + y^2)(6x^2 - y^2)\\)", "b) \\(6xay(6x^2 + y^2)(6x^2 - y^2)\\)", "c) \\(6y^2a(6x^2 + y^2)(6x^2 - y^2)\\)", "d) \\(6ay(6x^2 + y^2)(6x^2 - y^2)\\)"],
        correctAnswer: "d) \\(6ay(6x^2 + y^2)(6x^2 - y^2)\\)"
      },
      {
        question: "Which of the following is TRUE about the difference of two squares?",
        options: ["a) \\(a^2 - b^2 = (a + b)(a - b)\\)", "b) \\(a^2 + b^2 = (a + b)(a + b)\\)", "c) \\(a^2 - b^2 = (a + b)(a + b)\\)", "d) \\(a^2 + b^2 = (a + b)(a - b)\\)"],
        correctAnswer: "a) \\(a^2 - b^2 = (a + b)(a - b)\\)"
      },
      {
        question: "Find the missing term in \\(225w^2 - \\underline{\\phantom{}} = (15w + 12)(15w - 12)\\).",
        options: ["a) 100", "b) 121", "c) 144", "d) 169"],
        correctAnswer: "c) 144"
      }
    ],
    lesson7: [
      {
        question: "What is the factored form of \\(8y^3 + 64\\)?",
        options: ["a) \\((2y - 8)(4y^2 + 8y + 16)\\)", "b) \\((2y - 8)(4y^2 - 8y + 16)\\)", "c) \\((2y + 8)(4y^2 + 8y + 16)\\)", "d) \\((2y + 8)(4y^2 - 8y + 16)\\)"],
        correctAnswer: "d) \\((2y + 8)(4y^2 - 8y + 16)\\)"
      },
      {
        question: "The following expressions are examples of difference of two cubes EXCEPT:",
        options: ["a) \\(x^3 - 216\\)", "b) \\(x^3 - 345\\)", "c) \\(x^3 - 512\\)", "d) \\(x^3 - 729\\)"],
        correctAnswer: "b) \\(x^3 - 345\\)"
      },
      {
        question: "Find the missing term in \\(125k^3 - 8 = (\\underline{\\phantom{}})(25k^2 + 10k + 4)\\).",
        options: ["a) \\((5k - 2)\\)", "b) \\((5k + 2)\\)", "c) \\((4k - 2)\\)", "d) \\((4k + 2)\\)"],
        correctAnswer: "a) \\((5k - 2)\\)"
      },
      {
        question: "Which of the following is correct about the sum of two cubes formula?",
        options: ["a) \\(a^3 + b^3 = (a - b)(a^2 + ab + b^2)\\)", "b) \\(a^3 + b^3 = (a + b)(a^2 - ab + b^2)\\)", "c) \\(a^3 + b^3 = (a - b)(a^2 - ab + b^2)\\)", "d) \\(a^3 + b^3 = (a + b)(a^2 + ab + b^2)\\)"],
        correctAnswer: "b) \\(a^3 + b^3 = (a + b)(a^2 - ab + b^2)\\)"
      },
      {
        question: "Which of the following is correct about the difference of two cubes formula?",
        options: ["a) \\(a^3 + b^3 = (a + b)(a^2 - ab + b^2)\\)", "b) \\(a^3 + b^3 = (a - b)(a^2 + ab + b^2)\\)", "c) \\(a^3 - b^3 = (a + b)(a^2 - ab + b^2)\\)", "d) \\(a^3 - b^3 = (a - b)(a^2 + ab + b^2)\\)"],
        correctAnswer: "d) \\(a^3 - b^3 = (a - b)(a^2 + ab + b^2)\\)"
      },
      {
        question: "Which of the following is not a sum of two cubes?",
        options: ["a) \\(8^3 + 27\\)", "b) \\(a^3 + 64\\)", "c) \\(a^3 + 125\\)", "d) \\(a^3 + 225\\)"],
        correctAnswer: "d) \\(a^3 + 225\\)"
      },
      {
        question: "Which of the following is the correct factored form of \\(27y^3 - 64\\)?",
        options: ["a) \\((3y - 4)(9y^2 + 12y + 16)\\)", "b) \\((3y + 4)(9y^2 - 12y + 16)\\)", "c) \\((3y - 4)\\)", "d) \\((27y)(y^3 - 64)\\)"],
        correctAnswer: "a) \\((3y - 4)(9y^2 + 12y + 16)\\)"
      },
      {
        question: "Expand the expression \\((a + 3)(a^2 - 3a + 9)\\).",
        options: ["a) \\(a^3 + 27\\)", "b) \\(a^3 - 27\\)", "c) \\(a^3 + 9\\)", "d) \\(a^3 - 9\\)"],
        correctAnswer: "a) \\(a^3 + 27\\)"
      },
      {
        question: "Which of the following is the correct factored form of the trinomial \\(y^2 - 7y + 12\\)?",
        options: ["a) \\((y - 3)(y - 4)\\)", "b) \\((y - 3)(y + 4)\\)", "c) \\((y + 3)(y - 4)\\)", "d) \\((y + 3)(y + 4)\\)"],
        correctAnswer: "a) \\((y - 3)(y - 4)\\)"
      },
      {
        question: "Which of the following is the correct factored form of the trinomial \\(x^2 + 8x + 7\\)?",
        options: ["a) \\((x - 7)(x + 1)\\)", "b) \\((x + 7)(x + 1)\\)", "c) \\((x + 7)(x - 1)\\)", "d) \\((x - 7)(x - 1)\\)"],
        correctAnswer: "b) \\((x + 7)(x + 1)\\)"
      },
      {
        question: "Which of the following is the correct factored form of the trinomial \\(z^2 + z - 90\\)?",
        options: ["a) \\((z - 9)(z + 10)\\)", "b) \\((z + 9)(z + 10)\\)", "c) \\((z - 9)(z - 10)\\)", "d) \\((z + 9)(z - 10)\\)"],
        correctAnswer: "a) \\((z - 9)(z + 10)\\)"
      },
      {
        question: "What are the two numbers whose sum is 1 and whose product is -28?",
        options: ["a) 4 and -7", "b) -4 and 7", "c) -4 and -7", "d) 4 and 7"],
        correctAnswer: "b) -4 and 7"
      },
      {
        question: "What are the two expressions whose sum is \\(9x\\) and whose product is \\(18x^2\\)?",
        options: ["a) -3x and -6x", "b) -3x and 6x", "c) 3x and -6x", "d) 3x and 6x"],
        correctAnswer: "d) 3x and 6x"
      },
      {
        question: "If one factor of \\(3x^2 + 17x + 10\\) is \\(3x + 2\\), what is the other factor?",
        options: ["a) \\(x - 5\\)", "b) \\(x + 5\\)", "c) \\(3x - 2\\)", "d) \\(2x + 5\\)"],
        correctAnswer: "b) \\(x + 5\\)"
      },
      {
        question: "Which of the following expressions is not a quadratic trinomial?",
        options: ["a) \\(m^2 + 6m + 9\\)", "b) \\(n^2 + n + 1\\)", "c) \\(p^2 - 2p + 1\\)", "d) \\(q^2 + q\\)"],
        correctAnswer: "d) \\(q^2 + q\\)"
      }
    ]        
  };
  
  export default questions;
  