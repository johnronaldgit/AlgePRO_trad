// src/postQuestions.js
const postQuestions = {
  lesson1: [
    {
      question: "Expand and simplify the expression: \\((2x + 3)^2\\).",
      options: ["a) \\(4x^2 + 12x + 9\\)", "b) \\(4x^2 + 9x + 9\\)", "c) \\(4x^2 + 6x + 9\\)", "d) \\(4x^2 + 9\\)"],
      correctAnswer: "a) \\(4x^2 + 12x + 9\\)"
    },
    {
      question: "Expand and simplify the expression: \\((3x - 4)^2\\).",
      options: ["a) \\(9x^2 - 24x + 16\\)", "b) \\(9x^2 - 12x + 16\\)", "c) \\(9x^2 - 7x + 16\\)", "d) \\(9x^2 + 16\\)"],
      correctAnswer: "a) \\(9x^2 - 24x + 16\\)"
    },
    {
      question: "Expand and simplify the expression: \\(\\left(2x - \\frac{5}{4}\\right)^2\\).",
      options: ["a) \\(4x^2 - \\frac{10}{4}x + \\frac{25}{16}\\)", "b) \\(4x^2 + 5x + \\frac{25}{16}\\)", "c) \\(4x^2 - 5x + \\frac{25}{16}\\)", "d) \\(4x^2 + \\frac{25}{16}\\)"],
      correctAnswer: "c) \\(4x^2 - 5x + \\frac{25}{16}\\)"
    },
    {
      question: "Expand and simplify the expression: \\(\\left(4x + \\frac{1}{3}\\right)^2\\).",
      options: ["a) \\(16x^2 + \\frac{8}{9}x + \\frac{1}{9}\\)", "b) \\(16x^2 + \\frac{8}{6}x + \\frac{1}{9}\\)", "c) \\(16x^2 + \\frac{8}{3}x + \\frac{1}{9}\\)", "d) \\(16x^2 + \\frac{1}{9}\\)"],
      correctAnswer: "c) \\(16x^2 + \\frac{8}{3}x + \\frac{1}{9}\\)"
    },
    {
      question: "Expand and simplify the expression: \\((5 + 0.95x)^2\\).",
      options: ["a) 25 + 9.5x + 0.9025x^2", "b) 0.9025x^2 + 9.5x + 25", "c) 25 + 4.75x + 0.9025x^2", "d) 0.9025x^2 + 4.75x + 25"],
      correctAnswer: "b) 0.9025x^2 + 9.5x + 25"
    },
    {
      question: "Find the product of the expression: \\((4x + 2)(4x + 2)\\).",
      options: ["a) 16x^2 + 8x + 4", "b) 16x^2 + 16x + 4", "c) 16x^2 + 32x + 4", "d) 16x^2 + 4"],
      correctAnswer: "b) 16x^2 + 16x + 4"
    },
    {
      question: "Find the product of the expression: \\((x - 6)(x - 6)\\).",
      options: ["a) x^2 + 6x + 36", "b) x^2 - 6x + 36", "c) x^2 + 12x + 36", "d) x^2 - 12x + 36"],
      correctAnswer: "d) x^2 - 12x + 36"
    },
    {
      question: "Find the product of the expression: \\((0.3x + 0.9)(0.3x + 0.9)\\).",
      options: ["a) 0.09x^2 + 0.27x + 0.81", "b) 0.9x^2 + 0.54x + 0.81", "c) 0.9x^2 + 0.27x + 0.81", "d) 0.09x^2 + 0.54x + 0.81"],
      correctAnswer: "d) 0.09x^2 + 0.54x + 0.81"
    },
    {
      question: "Find the product of the expression: \\((0.16x - 0.49)(0.16x - 0.49)\\).",
      options: ["a) 0.256x^2 - 0.0784x + 0.2401", "b) 0.256x^2 - 0.1568x + 0.2401", "c) 0.0256x^2 - 0.0784x + 0.2401", "d) 0.0256x^2 - 0.1568x + 0.2401"],
      correctAnswer: "d) 0.0256x^2 - 0.1568x + 0.2401"
    },
    {
      question: "Find the product of the expression: \\(-9x + \\frac{9}{16}\\).",
      options: ["a) 81x^2 + 10.125x + \\frac{81}{256}\\)", "b) 81x^2 - 10.125x + \\frac{81}{256}\\)", "c) 81x^2 + 5.0625x + \\frac{81}{256}\\)", "d) 81x^2 - 5.0625x + \\frac{81}{256}\\)"],
      correctAnswer: "b) 81x^2 - 10.125x + \\frac{81}{256}\\)"
    },
    {
      question: "Determine if the expression \\(x^2 + 8x + 16\\) is a perfect square binomial.",
      options: ["a) Yes, \\((x + 4)^2\\)", "b) Yes, \\((x + 4)(x + 4)\\)", "c) Both a and b are correct.", "d) No"],
      correctAnswer: "c) Both a and b are correct."
    },
    {
      question: "Determine if the expression \\(x^2 - 6x + 9\\) is a perfect square binomial.",
      options: ["a) Yes, \\((x - 3)^2\\)", "b) Yes, \\((x - 3)(x + 3)\\)", "c) Both a and b are correct.", "d) No"],
      correctAnswer: "a) Yes, \\((x - 3)^2\\)"
    },
    {
      question: "Determine if the expression \\(x^2 - 10x + 100\\) is a perfect square binomial.",
      options: ["a) Yes, \\((x - 10)^2\\)", "b) Yes, \\((x - 10)(x - 10)\\)", "c) Both a and b are correct.", "d) No"],
      correctAnswer: "d) No"
    },
    {
      question: "Determine if the expression \\(9x^2 - 30x + 25\\) is a perfect square binomial.",
      options: ["a) Yes, \\((3x + 5)^2\\)", "b) Yes, \\((3x - 5)(3x - 5)\\)", "c) Both a and b are correct.", "d) No"],
      correctAnswer: "b) Yes, \\((3x - 5)(3x - 5)\\)"
    },
    {
      question: "Determine if the expression \\(\\frac{16}{25}x^2 - \\frac{24}{25}x + \\frac{9}{25}\\) is a perfect square binomial.",
      options: ["a) Yes, \\(\\left(\\frac{2}{5}x + \\frac{3}{5}\\right)^2\\)", "b) Yes, \\(\\left(\\frac{2}{5}x + \\frac{3}{5}\\right)\\left(\\frac{2}{5}x + \\frac{3}{5}\\right)\\)", "c) Both a and b are correct.", "d) None of the choices is correct."],
      correctAnswer: "d) None of the choices is correct."
    }
  ],  
  lesson2: [
    {
      question: "Expand the square of the given trinomial: \\((x + 3y - 2z)^2\\).",
      options: ["a) \\(x^2 + 9y^2 + 4z^2 - 6xy - 4xz + 12yz\\)", "b) \\(x^2 + 9y^2 + 4z^2 + 6xy + 4xz - 12yz\\)", "c) \\(x^2 + 9y^2 + 4z^2 - 6xy + 4xz + 12yz\\)", "d) \\(x^2 + 9y^2 + 4z^2 + 6xy - 4xz - 12yz\\)"],
      correctAnswer: "d) \\(x^2 + 9y^2 + 4z^2 + 6xy - 4xz - 12yz\\)"
    },
    {
      question: "Expand the square of the given trinomial: \\((2x - y + 5z)^2\\).",
      options: ["a) \\(4x^2 + y^2 + 25z^2 - 4xy + 20xz - 10yz\\)", "b) \\(4x^2 + y^2 + 25z^2 + 4xy - 20xz - 10yz\\)", "c) \\(4x^2 + y^2 + 25z^2 + 4xy + 20xz - 10yz\\)", "d) \\(4x^2 + y^2 + 25z^2 - 4xy - 20xz + 10yz\\)"],
      correctAnswer: "a) \\(4x^2 + y^2 + 25z^2 - 4xy + 20xz - 10yz\\)"
    },
    {
      question: "Expand the square of the given trinomial: \\((3a - 4b + c)^2\\).",
      options: ["a) \\(9a^2 + 16b^2 + c^2 + 24ab - 6ac + 8bc\\)", "b) \\(9a^2 + 16b^2 + c^2 - 24ab - 6ac - 8bc\\)", "c) \\(9a^2 + 16b^2 + c^2 + 24ab + 6ac - 8bc\\)", "d) \\(9a^2 + 16b^2 + c^2 - 24ab + 6ac - 8bc\\)"],
      correctAnswer: "d) \\(9a^2 + 16b^2 + c^2 - 24ab + 6ac - 8bc\\)"
    },
    {
      question: "Expand the square of the given trinomial: \\((0.3a - 0.5b + 9c)^2\\).",
      options: ["a) \\(0.09a^2 + 0.25b^2 + 81c^2 + 0.3ab - 5.4ac + 9bc\\)", "b) \\(0.09a^2 + 0.25b^2 + 81c^2 - 0.3ab + 5.4ac + 9bc\\)", "c) \\(0.09a^2 + 0.25b^2 + 81c^2 - 0.3ab + 5.4ac - 9bc\\)", "d) \\(0.09a^2 + 0.25b^2 + 81c^2 + 0.3ab - 5.4ac - 9bc\\)"],
      correctAnswer: "b) \\(0.09a^2 + 0.25b^2 + 81c^2 - 0.3ab + 5.4ac + 9bc\\)"
    },
    {
      question: "Expand the square of the given trinomial: \\((-0.1a - 2b + 3c)^2\\).",
      options: ["a) \\(0.01a^2 + 4b^2 + 9c^2 - 0.4ab - 0.6ac - 12bc\\)", "b) \\(0.01a^2 + 4b^2 + 9c^2 - 0.4ab + 0.6ac + 12bc\\)", "c) \\(0.01a^2 + 4b^2 + 9c^2 + 0.4ab - 0.6ac - 12bc\\)", "d) \\(0.01a^2 + 4b^2 + 9c^2 + 0.4ab + 0.6ac + 12bc\\)"],
      correctAnswer: "c) \\(0.01a^2 + 4b^2 + 9c^2 + 0.4ab - 0.6ac - 12bc\\)"
    },
    {
      question: "Given \\((3x + 2y - 5z)^2\\), find the coefficient of the variable \\(xy\\) and \\(yz\\).",
      options: ["a) Coefficient of \\(xy\\) is -12 and \\(yz\\) is 20", "b) Coefficient of \\(xy\\) is 12 and \\(yz\\) is -20", "c) Coefficient of \\(xy\\) is -12 and \\(yz\\) is -20", "d) Coefficient of \\(xy\\) is 12 and \\(yz\\) is 20"],
      correctAnswer: "b) Coefficient of \\(xy\\) is 12 and \\(yz\\) is -20"
    },
    {
      question: "Expand the expression \\((x + 4y - 6z)^2\\) and determine the last term.",
      options: ["a) -48", "b) 48", "c) -24", "d) 24"],
      correctAnswer: "a) -48"
    },
    {
      question: "In the expression \\((2x - y + 3z)^2\\), what are the coefficients of \\(x^2, y^2, z^2\\) terms?",
      options: ["a) 4, 1, 9", "b) 4, 0, 9", "c) 4, -1, 9", "d) 4, 1, 3"],
      correctAnswer: "a) 4, 1, 9"
    },
    {
      question: "Calculate the sum of the coefficients of the first and last terms in the expansion of \\((3x + 5y - 2z)^2\\).",
      options: ["a) 11", "b) -11", "c) 29", "d) -29"],
      correctAnswer: "b) -11"
    },
    {
      question: "Based on question number 9, what is the coefficient of the variable \\(xz\\)?",
      options: ["a) 6", "b) -6", "c) 12", "d) -12"],
      correctAnswer: "d) -12"
    },
    {
      question: "Which one of the following statements is true?",
      options: ["a) \\((a + b + c)^2 = (a + b + c)(a + b + c)\\)", "b) \\((a + b + c)^2 = a^2 + b^2 + c^2\\)", "c) \\((a + b + c)^2 = (a + b)^2 + (b + c)^2 + (a + c)^2\\)", "d) \\((a + b + c)^2 = ab + ac + bc\\)"],
      correctAnswer: "a) \\((a + b + c)^2 = (a + b + c)(a + b + c)\\)"
    },
    {
      question: "Which of the following is the formula we can use to square a trinomial, \\(a + b + c\\)?",
      options: ["a) \\((a + b + c)^2 = ab^2 + ac^2 + bc^2\\)", "b) \\((a + b + c)^2 = a^2 + b^2 + c^2\\)", "c) \\((a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + ac + bc)\\)", "d) \\((a + b + c)^2 = ab + ac + bc\\)"],
      correctAnswer: "c) \\((a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + ac + bc)\\)"
    },
    {
      question: "Which of the following is not a perfect square trinomial?",
      options: ["a) \\(x^2 - 6x + 9\\)", "b) \\(y^2 - 14y + 49\\)", "c) \\(z^2 + 10z + 100\\)", "d) \\(w^2 - 8w + 20\\)"],
      correctAnswer: "d) \\(w^2 - 8w + 20\\)"
    },
    {
      question: "Which of the following is not a perfect square trinomial?",
      options: ["a) \\(m^2 + 20m + 100\\)", "b) \\(x^2 - 24x + 144\\)", "c) \\(y^2 + 15y + 225\\)", "d) \\(z^2 - 10z + 30\\)"],
      correctAnswer: "d) \\(z^2 - 10z + 30\\)"
    },
    {
      question: "Which of the following is a perfect square trinomial?",
      options: ["a) \\(m^2 + 18m + 81\\)", "b) \\(x^2 - 25x + 156\\)", "c) \\(y^2 + 20y + 101\\)", "d) \\(z^2 - 14z + 50\\)"],
      correctAnswer: "a) \\(m^2 + 18m + 81\\)"
    }
  ],
  lesson3: [
    {
      question: "If \\(a = 2\\) and \\(b = 3\\), find the value of \\((a + b)(a - b)\\).",
      options: ["a) 5", "b) -5", "c) 1", "d) -1"],
      correctAnswer: "b) -5"
    },
    {
      question: "Calculate the product of \\((5m + 8)(5m - 8)\\).",
      options: ["a) 25m^2 - 64", "b) 25m^2 + 64", "c) 10m^2 - 16", "d) 10m^2 + 16"],
      correctAnswer: "a) 25m^2 - 64"
    },
    {
      question: "Simplify the expression: \\((3p + 7)(3p - 7)\\).",
      options: ["a) 6p^2 - 49", "b) 9p^2 - 49", "c) 6p^2 + 49", "d) 6p^2 - 49"],
      correctAnswer: "b) 9p^2 - 49"
    },
    {
      question: "Find the missing term: \\((6x^2 + 2)(6x^2 - 2) = \\underline{\\phantom{}} - 4\\).",
      options: ["a) -36x^4", "b) -36x^2", "c) 36x^4", "d) 36x^2"],
      correctAnswer: "c) 36x^4"
    },
    {
      question: "What is the product of \\((x + \\frac{1}{2})(x - \\frac{1}{2})\\)?",
      options: ["a) x^2 - \\frac{1}{4}", "b) x^2 + \\frac{1}{4}", "c) x - \\frac{1}{2}", "d) x + \\frac{1}{2}"],
      correctAnswer: "a) x^2 - \\frac{1}{4}"
    },
    {
      question: "Determine \\((10m + 3)(10m - 3)\\) in the simplest form.",
      options: ["a) 100m^2 - 9", "b) 100m^2 + 9", "c) 13m^2 - 30m", "d) 13m^2 + 30m"],
      correctAnswer: "a) 100m^2 - 9"
    },
    {
      question: "Find the result of \\((2x + 9)(2x - 9)\\).",
      options: ["a) 4x^2 - 81x", "b) 4x^2 + 81x", "c) 4x^2 - 81", "d) 4x^2 + 81"],
      correctAnswer: "c) 4x^2 - 81"
    },
    {
      question: "Determine the value of \\((c + d)(c - d)\\) if \\(c = 1\\) and \\(d = 2\\).",
      options: ["a) 2", "b) -2", "c) 3", "d) -3"],
      correctAnswer: "d) -3"
    },
    {
      question: "Compute \\((8y + 1)(8y - 1)\\).",
      options: ["a) 64y^2 - 1", "b) 64y^2 + 1", "c) 8y^2 - 1", "d) 8y^2 + 1"],
      correctAnswer: "a) 64y^2 - 1"
    },
    {
      question: "Evaluate \\((x - 5)(x + 5)\\) if \\(x = 3\\).",
      options: ["a) -5", "b) -10", "c) -16", "d) -25"],
      correctAnswer: "c) -16"
    },
    {
      question: "Simplify \\((2z + 10)(2z - 10)\\).",
      options: ["a) 20z + 100", "b) 20z - 100", "c) 4z^2 + 100", "d) 4z^2 - 100"],
      correctAnswer: "d) 4z^2 - 100"
    },
    {
      question: "What is the simplified form of \\((x - 4y)(x + 4y)\\)?",
      options: ["a) x^2 - 16y", "b) x^2 + 16y", "c) x^2 - 4y", "d) x^2 + 4y"],
      correctAnswer: "a) x^2 - 16y"
    },
    {
      question: "Given \\(p = 8\\) and \\(q = 1\\), find \\((p + q^2)(p - q^2)\\).",
      options: ["a) 54", "b) 63", "c) 72", "d) 81"],
      correctAnswer: "b) 63"
    },
    {
      question: "Calculate the product \\((7a + 2b)(7a - 2b)\\).",
      options: ["a) 14ab + 4", "b) 14ab - 4", "c) 49a^2 + 4b^2", "d) 49a^2 - 4b^2"],
      correctAnswer: "d) 49a^2 - 4b^2"
    },
    {
      question: "Find the result of \\((9x + 4y)(9x - 4y)\\).",
      options: ["a) 81x + 16y", "b) 81x - 16y", "c) 81x^2 + 16y^2", "d) 81x^2 - 16y^2"],
      correctAnswer: "d) 81x^2 - 16y^2"
    }
  ],
  lesson4: [
    {
      question: "Expand the expression: \\((x + 2)^3\\).",
      options: ["a) x^3 + 6x^2 + 12x + 8", "b) x^3 + 6x^2 + 4x + 8", "c) x^3 − 6x^2 + 12x − 8", "d) x^3 − 6x^2 − 12x + 8"],
      correctAnswer: "a) x^3 + 6x^2 + 12x + 8"
    },
    {
      question: "Expand the expression: \\((2y − 3)^3\\).",
      options: ["a) 8y^3 + 36y^2 − 54y + 27", "b) 8y^3 − 36y^2 + 54y − 27", "c) 8y^3 − 36y^2 + 27y − 54", "d) 8y^3 + 36y^2 + 54y + 27"],
      correctAnswer: "b) 8y^3 − 36y^2 + 54y − 27"
    },
    {
      question: "Expand the expression: \\((3a + 2b)^3\\).",
      options: ["a) 27a^3 − 54a^2b + 36ab^2 − 8b^3", "b) 27a^3 + 54a^2b + 36ab^2 + 8b^3", "c) 27a^3 + 18a^2b + 12ab^2 + 8b^3", "d) 27a^3 + 18a^2b + 24ab^2 + 8b^3"],
      correctAnswer: "b) 27a^3 + 54a^2b + 36ab^2 + 8b^3"
    },
    {
      question: "Expand the expression: \\((x − 4)^3\\).",
      options: ["a) x^3 + 12x^2 + 48x − 64", "b) x^3 + 12x^2 − 48x + 64", "c) x^3 − 12x^2 + 16x − 64", "d) x^3 − 12x^2 + 48x − 64"],
      correctAnswer: "d) x^3 − 12x^2 + 48x − 64"
    },
    {
      question: "Expand the expression: \\((5 − 2y)^3\\).",
      options: ["a) 125 + 150y − 60y + 8y^3", "b) 125 − 75y + 30y^2 − 8y^3", "c) 125 − 150y + 60y − 8y^3", "d) 125 + 75y + 30y^2 + 8y^3"],
      correctAnswer: "c) 125 − 150y + 60y − 8y^3"
    },
    {
      question: "Expand the expression: \\((2p + 1)^3\\).",
      options: ["a) 8p^3 + 12p^2 + 6p + 1", "b) 8p^3 + 4p^2 + 2p + 1", "c) 8p^3 − 12p^2 + 6p − 1", "d) 8p^3 − 4p^2 + 2p − 1"],
      correctAnswer: "a) 8p^3 + 12p^2 + 6p + 1"
    },
    {
      question: "Expand the expression: \\((3z − 2)^3\\).",
      options: ["a) 27z^3 − 54z^2 + 36z − 8", "b) 27z^3 + 54z^2 − 36z + 8", "c) 27z^3 − 18z^2 + 12z − 8", "d) 27z^3 + 18z^2 + 12z + 8"],
      correctAnswer: "a) 27z^3 − 54z^2 + 36z − 8"
    },
    {
      question: "Expand the expression: \\((4a + 5)^3\\).",
      options: ["a) 64a^3 + 120a^2 + 75a + 125", "b) 64a^3 + 240a^2 + 150a + 125", "c) 64a^3 − 240a^2 + 300a − 125", "d) 64a^3 + 240a^2 + 300a + 125"],
      correctAnswer: "d) 64a^3 + 240a^2 + 300a + 125"
    },
    {
      question: "Expand the expression: \\((y − 6)^3\\).",
      options: ["a) y^3 + 18y^2 − 108y + 216", "b) y^3 − 18y^2 + 108y − 216", "c) y^3 − 18y^2 + 36y − 216", "d) y^3 + 18y^2 + 108y + 216"],
      correctAnswer: "b) y^3 − 18y^2 + 108y − 216"
    },
    {
      question: "Expand the expression: \\((2m + 3n)^3\\).",
      options: ["a) 8m^3 + 24m^2n + 36mn^2 + 9n^3", "b) 8m^3 + 36m^2n + 54mn^2 + 27n^3", "c) 8m^3 − 36m^2n + 54mn^2 − 27n^3", "d) 8m^3 − 24m^2n + 36mn^2 − 9n^3"],
      correctAnswer: "b) 8m^3 + 36m^2n + 54mn^2 + 27n^3"
    },
    {
      question: "Expand the expression and find the missing term: \\((3p − 4q)^3\\); Find the 2nd term.",
      options: ["a) − 108p^2q", "b) 108p^2q", "c) − 108pq^2", "d) 108pq^2"],
      correctAnswer: "a) − 108p^2q"
    },
    {
      question: "Expand the expression and find the missing term: \\((x + 5y)^3\\); Find the 3rd term.",
      options: ["a) 15xy^2", "b) 15x^2y", "c) 75x^2y", "d) 75xy^2"],
      correctAnswer: "d) 75xy^2"
    },
    {
      question: "Expand the expression and find the missing term: \\((a − 3b)^3\\); Find the coefficient of the 1st and 3rd terms.",
      options: ["a) 1, − 27", "b) 1, 27", "c) 1, − 9", "d) 1, 9"],
      correctAnswer: "b) 1, 27"
    },
    {
      question: "Expand the expression and find the missing term: \\((2x − 5)^3\\); Find the coefficient of the 2nd and 3rd terms.",
      options: ["a) − 60, 150", "b) 60, − 150", "c) − 60, 125", "d) 8, 125"],
      correctAnswer: "a) − 60, 150"
    },
    {
      question: "Expand the expression and find the missing term: \\((7y + 2)^3\\); Find the 4th term.",
      options: ["a) − 84", "b) 84", "c) − 8", "d) 8"],
      correctAnswer: "d) 8"
    }
  ], 
  lesson5: [
    {
      question: "Simplify the expression: \\((x + 2)(x^2 - 2x + 4)\\).",
      options: ["a) x^3 - 8", "b) x^3 + 8", "c) x^3 - 4x^2 - 4x + 8", "d) x^3 + 4x^2 + 4x + 8"],
      correctAnswer: "b) x^3 + 8"
    },
    {
      question: "Simplify the expression: \\((y - 1)(y^2 + y + 1)\\).",
      options: ["a) y^3 + 1", "b) y^3 - 2y^2 - 2y + 1", "c) y^3 + 2y^2 + 2y - 1", "d) y^3 - 1"],
      correctAnswer: "d) y^3 - 1"
    },
    {
      question: "Simplify the expression: \\((2y + 1)(4y^2 - 2y + 1)\\).",
      options: ["a) 8y^3 + 1", "b) 8y^3 - 1", "c) 8y^3 - 8y^2 - 4y + 1", "d) 8y^3 + 8y^2 + 4y - 1"],
      correctAnswer: "a) 8y^3 + 1"
    },
    {
      question: "Simplify the expression: \\((x - 3)(x^2 + 3x + 9)\\).",
      options: ["a) x^3 - 27", "b) x^3 + 27", "c) x^3 - 6x^2 - 18x + 27", "d) x^3 + 6x^2 + 18x - 27"],
      correctAnswer: "a) x^3 - 27"
    },
    {
      question: "Simplify the expression: \\((3x - 2)(8x^2 + 6x + 4)\\).",
      options: ["a) 24x^3 - 2x^2 - 8", "b) 24x^3 + 2x^2 - 8", "c) 24x^3 - 2x^2 - 24x - 8", "d) 24x^3 + 2x^2 + 24x - 8"],
      correctAnswer: "b) 24x^3 + 2x^2 - 8"
    },
    {
      question: "Complete the missing expression: \\((x + 3)(x^2 - 3x + 9) = x^3\\) \\(\\underline{\\phantom{}}\\).",
      options: ["a) + 3x^2 - 9x + 27", "b) - 3x^2 - 9x + 27", "c) - 27", "d) + 27"],
      correctAnswer: "d) + 27"
    },
    {
      question: "Complete the missing expression: \\((3x + 4)(9x^2 - 12x + 16) = 27x^3\\) \\(\\underline{\\phantom{}}\\).",
      options: ["a) - 64", "b) + 64", "c) + 16", "d) - 16"],
      correctAnswer: "b) + 64"
    },
    {
      question: "Find the missing term in \\((x + 2)(x^2 + 4x)\\) to make it a perfect cube.",
      options: ["a) + 4", "b) - 4", "c) + 2", "d) - 2"],
      correctAnswer: "a) + 4"
    },
    {
      question: "Simplify the expression by filling in the blank: \\((2x - 3)(4x^2 + 6x + 9) = 8x^3\\) \\(\\underline{\\phantom{}}\\).",
      options: ["a) 54", "b) 27", "c) 9", "d) 6"],
      correctAnswer: "b) 27"
    },
    {
      question: "Determine the missing term in \\((2x + 1)(4x^2 - 2x + 1) = 8x^3\\) \\(\\underline{\\phantom{}}\\).",
      options: ["a) + 2", "b) - 2", "c) + 1", "d) - 1"],
      correctAnswer: "c) + 1"
    },
    {
      question: "Determine if the solution of \\((a - b)(a^2 + ab + b^2)\\) is a:",
      options: ["a) sum of two cubes", "b) difference of two cubes", "c) sum of two squares", "d) difference of two squares"],
      correctAnswer: "b) difference of two cubes"
    },
    {
      question: "Based on the previous question, what is the product of the given binomial and trinomial?",
      options: ["a) a^3 - b^3", "b) a^3 + b^3", "c) a^2 - b^2", "d) a^2 + b^2"],
      correctAnswer: "a) a^3 - b^3"
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
      question: "Identify which of the following statements are true or false.\n i. When the sum of two terms is multiplied by the sum of their squares minus the product of these terms, the result is the sum of their cubes.\n ii. When the difference of two terms is multiplied by the sum of their squares plus the product of these terms, the result is the difference of their cubes.",
      options: ["a) Only statement i is true.", "b) Only statement ii is true.", "c) Both statements are true.", "d) Both statements are false."],
      correctAnswer: "c) Both statements are true."
    }
  ],   
  lesson6: [
    {
      question: "Complete the square: \\(4z^2 + 4z + \\underline{\\phantom{}}\\).",
      options: ["a) 1", "b) 2", "c) 4", "d) 8"],
      correctAnswer: "a) 1"
    },
    {
      question: "Find the missing term that makes \\(t^2 + 12t + \\underline{\\phantom{}}\\) a perfect square trinomial.",
      options: ["a) 36", "b) 144", "c) 72", "d) 12"],
      correctAnswer: "a) 36"
    },
    {
      question: "Which of the following expressions cannot be written as a difference of two squares?",
      options: ["a) \\(m^2 - 4\\)", "b) \\(n^2 - 9\\)", "c) \\(p^2 - 15\\)", "d) \\(q^2 - 25\\)"],
      correctAnswer: "c) \\(p^2 - 15\\)"
    },
    {
      question: "Factor \\(25q^2 + 20q + 4\\).",
      options: ["a) \\((5q + 2)^2\\)", "b) \\((5q + 4)(5q + 4)\\)", "c) \\((5q - 2)^2\\)", "d) \\((5q + 2)(5q - 2)\\)"],
      correctAnswer: "a) \\((5q + 2)^2\\)"
    },
    {
      question: "Complete the square to make it a perfect square trinomial: \\(z^2 + 6z + \\underline{\\phantom{}}\\).",
      options: ["a) 36", "b) 12", "c) 9", "d) 3"],
      correctAnswer: "c) 9"
    },
    {
      question: "Identify the expanded form of \\((x + 4)^2\\).",
      options: ["a) \\(x^2 + 16x + 16\\)", "b) \\(x^2 + 8x + 64\\)", "c) \\(x^2 + 4x + 16\\)", "d) \\(x^2 + 8x + 16\\)"],
      correctAnswer: "d) \\(x^2 + 8x + 16\\)"
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
      question: "If one factor of \\(2x^2 + 5x - 3\\) is \\((2x - 1)\\), what is the other factor?",
      options: ["a) \\((x - 2)\\)", "b) \\((x + 2)\\)", "c) \\((x + 3)\\)", "d) \\((x - 3)\\)"],
      correctAnswer: "c) \\((x + 3)\\)"
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
      question: "Determine the GCF of the expression: \\(216x^4ay - 6y^5a\\).",
      options: ["a) 6x^2ay", "b) 6xay", "c) 6y^2a", "d) 6ay"],
      correctAnswer: "d) 6ay"
    },
    {
      question: "Which of the following is TRUE about the difference of two squares?",
      options: ["a) \\(a^2 - b^2 = (a + b)(a - b)\\)", "b) \\(a^2 + b^2 = (a + b)(a + b)\\)", "c) \\(a^2 - b^2 = (a + b)(a + b)\\)", "d) \\(a^2 + b^2 = (a + b)(a - b)\\)"],
      correctAnswer: "a) \\(a^2 - b^2 = (a + b)(a - b)\\)"
    },
    {
      question: "Find the missing term in \\(484y^2 - 36 = (\\underline{\\phantom{}})(y + 6)(y - 6)\\).",
      options: ["a) 12", "b) 16", "c) 18", "d) 22"],
      correctAnswer: "d) 22"
    }
  ],  
  lesson7: [
    {
      question: "Factor the expression \\(x^3 - 27\\).",
      options: ["a) \\( (x - 3)(x^2 + 3x + 9) \\)", "b) \\( (x + 3)(x^2 - 3x + 9) \\)", "c) \\( (x - 3)(x^2 + 3x - 9) \\)", "d) \\( (x + 3)(x^2 + 3x + 9) \\)"],
      correctAnswer: "a) \\( (x - 3)(x^2 + 3x + 9) \\)"
    },
    {
      question: "The following expressions are examples of difference of two cubes EXCEPT:",
      options: ["a) \\( x^3 - 216 \\)", "b) \\( x^3 - 345 \\)", "c) \\( x^3 - 512 \\)", "d) \\( x^3 - 729 \\)"],
      correctAnswer: "b) \\( x^3 - 345 \\)"
    },
    {
      question: "Find the missing term in \\( 125k^3 - 8 = (\\underline{\\phantom{}})(25k^2 + 10k + 4) \\).",
      options: ["a) \\( (5k - 2) \\)", "b) \\( (5k + 2) \\)", "c) \\( (4k - 2) \\)", "d) \\( (4k + 2) \\)"],
      correctAnswer: "a) \\( (5k - 2) \\)"
    },
    {
      question: "Which of the following is correct about the sum of two cubes formula?",
      options: ["a) \\( a^3 + b^3 = (a - b)(a^2 + ab + b^2) \\)", "b) \\( a^3 + b^3 = (a + b)(a^2 - ab + b^2) \\)", "c) \\( a^3 + b^3 = (a - b)(a^2 - ab + b^2) \\)", "d) \\( a^3 + b^3 = (a + b)(a^2 + ab + b^2) \\)"],
      correctAnswer: "b) \\( a^3 + b^3 = (a + b)(a^2 - ab + b^2) \\)"
    },
    {
      question: "Which of the following is correct about the difference of two cubes formula?",
      options: ["a) \\( a^3 + b^3 = (a + b)(a^2 - ab + b^2) \\)", "b) \\( a^3 + b^3 = (a - b)(a^2 + ab + b^2) \\)", "c) \\( a^3 - b^3 = (a + b)(a^2 - ab + b^2) \\)", "d) \\( a^3 - b^3 = (a - b)(a^2 + ab + b^2) \\)"],
      correctAnswer: "d) \\( a^3 - b^3 = (a - b)(a^2 + ab + b^2) \\)"
    },
    {
      question: "Which of the following is not a sum of two cubes?",
      options: ["a) \\( 8^3 + 27 \\)", "b) \\( a^3 + 64 \\)", "c) \\( a^3 + 125 \\)", "d) \\( a^3 + 225 \\)"],
      correctAnswer: "d) \\( a^3 + 225 \\)"
    },
    {
      question: "Which of the following is the correct factored form of \\( 27y^3 - 64 \\)?",
      options: ["a) \\( (3y - 4)(9y^2 + 12y + 16) \\)", "b) \\( (3y + 4)(9y^2 - 12y + 16) \\)", "c) \\( (3y - 4) \\)", "d) \\( 27y(y^3 - 64) \\)"],
      correctAnswer: "a) \\( (3y - 4)(9y^2 + 12y + 16) \\)"
    },
    {
      question: "Expand the expression \\((a + 3)(a^2 - 3a + 9)\\).",
      options: ["a) \\( a^3 + 27 \\)", "b) \\( a^3 - 27 \\)", "c) \\( a^3 + 9 \\)", "d) \\( a^3 - 9 \\)"],
      correctAnswer: "a) \\( a^3 + 27 \\)"
    },
    {
      question: "Which of the following is the correct factored form of the trinomial \\( y^2 - 7y + 12 \\)?",
      options: ["a) \\( (y - 3)(y - 4) \\)", "b) \\( (y - 3)(y + 4) \\)", "c) \\( (y + 3)(y - 4) \\)", "d) \\( (y + 3)(y + 4) \\)"],
      correctAnswer: "a) \\( (y - 3)(y - 4) \\)"
    },
    {
      question: "If one factor of \\( x^2 + 8x + 7 \\) is \\( (x + 7) \\), what is the other factor?",
      options: ["a) \\( (x + 1) \\)", "b) \\( (x - 1) \\)", "c) \\( (x + 7) \\)", "d) \\( (x - 7) \\)"],
      correctAnswer: "a) \\( (x + 1) \\)"
    },
    {
      question: "Which of the following is the correct factored form of the trinomial \\( z^2 + z - 90 \\)?",
      options: ["a) \\( (z - 9)(z + 10) \\)", "b) \\( (z + 9)(z + 10) \\)", "c) \\( (z - 9)(z - 10) \\)", "d) \\( (z + 9)(z - 10) \\)"],
      correctAnswer: "a) \\( (z - 9)(z + 10) \\)"
    },
    {
      question: "What are the two numbers whose sum is 1 and whose product is -28?",
      options: ["a) 4 and -7", "b) -4 and 7", "c) -4 and -7", "d) 4 and 7"],
      correctAnswer: "b) -4 and 7"
    },
    {
      question: "Which of the following expressions is not a quadratic trinomial?",
      options: ["a) \\( m^2 + 6m + 9 \\)", "b) \\( n^2 + n + 1 \\)", "c) \\( p^2 - 2p + 1 \\)", "d) \\( q^2 + q \\)"],
      correctAnswer: "d) \\( q^2 + q \\)"
    },
    {
      question: "What are the two expressions whose sum is \\( 3x \\) and whose product is \\( -10x^2 \\)?",
      options: ["a) -5x and -2x", "b) -5x and 2x", "c) 5x and -2x", "d) 5x and 2x"],
      correctAnswer: "c) 5x and -2x"
    },
    {
      question: "If one factor of \\( 3x^2 + 17x + 10 \\) is \\( 3x + 2 \\), what is the other factor?",
      options: ["a) \\( x - 5 \\)", "b) \\( x + 5 \\)", "c) \\( 3x - 2 \\)", "d) \\( 2x + 5 \\)"],
      correctAnswer: "b) \\( x + 5 \\)"
    }
  ]  
  };
  
  export default postQuestions;
  