// src/questions.js
const questions = {
  lesson1: [
    {
      question: "Expand and simplify \\((−2t − 3)^2\\).",
      options: ["a) \\(4t^2 + 12t + 9\\)", "b) \\(4t^2 − 12t + 9\\)", "c) \\(4t^2 + 6t + 9\\)", "d) \\(4t^2 − 12t + 9\\)"],
      correctAnswer: "a) \\(4t^2 + 12t + 9\\)"
    },
    {
      question: "Expand and simplify \\((−4p + 3)^2\\).",
      options: ["a) \\(16p^2 + 12p + 9\\)", "b) \\(16p^2 + 24p + 9\\)", "c) \\(16p^2 − 12p + 9\\)", "d) \\(16p^2 − 24p + 9\\)"],
      correctAnswer: "d) \\(16p^2 − 24p + 9\\)"
    },
    {
      question: "Expand and simplify \\((2m − 7n)^2\\).",
      options: ["a) \\(4m^2 − 28mn − 49n^2\\)", "b) \\(4m^2 + 28mn + 49n^2\\)", "c) \\(4m^2 − 28mn + 49n^2\\)", "d) \\(4m^2 + 28mn − 49n^2\\)"],
      correctAnswer: "c) \\(4m^2 − 28mn + 49n^2\\)"
    },
    {
      question: "Expand and simplify \\((−9x^2 − 10y)^2\\).",
      options: ["a) \\(81x^4 + 180x^2y^2 + 100y^2\\)", "b) \\(81x^4 + 180xy^2 + 100y^2\\)", "c) \\(81x^4 − 180x^2y + 100y^2\\)", "d) None of the above"],
      correctAnswer: "d) None of the above"
    },
    {
      question: "Find the square of \\((n - 0.5)^2\\).",
      options: ["a) \\(n^2 - n - \\frac{1}{4}n^2\\)", "b) \\(n^2 - \\frac{1}{2}n + 0.25n^2\\)", "c) \\(n^2 - n + 0.25n^2\\)", "d) \\(n^2 - 0.5n - 0.25n^2\\)"],
      correctAnswer: "c) \\(n^2 - n + 0.25n^2\\)"
    }
  ],
  lesson2: [
    {
      question: "Expand the expression \\((−2l + m − 9n)^2\\).",
      options: [
        "a) \\(4l^2 + m^2 + 81n^2 − 4lm + 36ln − 18mn\\)", 
        "b) \\(4l^2 + m^2 + 81n^2 + 4lm + 36ln − 18mn\\)", 
        "c) \\(4l^2 + m^2 + 81n^2 − 4lm − 36ln − 18mn\\)", 
        "d) \\(4l^2 + m^2 − 81n^2 − 4lm + 36ln − 18mn\\)"
      ],
      correctAnswer: "a) \\(4l^2 + m^2 + 81n^2 − 4lm + 36ln − 18mn\\)"
    },
    {
      question: "Expand the expression \\((0.3a − 0.5b + 9c)^2\\).",
      options: [
        "a) \\(0.09a^2 + 0.25b^2 + 81c^2 + 0.3ab − 5.4ac + 9bc\\)", 
        "b) \\(0.09a^2 + 0.25b^2 + 81c^2 − 0.3ab + 5.4ac + 9bc\\)", 
        "c) \\(0.09a^2 + 0.25b^2 + 81c^2 − 0.3ab + 5.4ac − 9bc\\)", 
        "d) \\(0.09a^2 + 0.25b^2 + 81c^2 + 0.3ab − 5.4ac − 9bc\\)"
      ],
      correctAnswer: "b) \\(0.09a^2 + 0.25b^2 + 81c^2 − 0.3ab + 5.4ac + 9bc\\)"
    },
    {
      question: "Expand the expression \\((−0.1a − 2b + 3c)^2\\).",
      options: [
        "a) \\(0.01a^2 + 4b^2 + 9c^2 − 0.4ab − 0.6ac − 12bc\\)", 
        "b) \\(0.01a^2 + 4b^2 + 9c^2 − 0.4ab + 0.6ac + 12bc\\)", 
        "c) \\(0.01a^2 + 4b^2 + 9c^2 + 0.4ab − 0.6ac − 12bc\\)", 
        "d) \\(0.01a^2 + 4b^2 + 9c^2 + 0.4ab + 0.6ac + 12bc\\)"
      ],
      correctAnswer: "c) \\(0.01a^2 + 4b^2 + 9c^2 + 0.4ab − 0.6ac − 12bc\\)"
    },
    {
      question: "Expand the expression \\((2a + 3b − 4c)^2\\).",
      options: [
        "a) \\(4a^2 + 9b^2 + 16c^2 + 12ab − 16ac − 24bc\\)", 
        "b) \\(4a^2 − 9b^2 − 16c^2 − 12ab + 16ac + 24bc\\)", 
        "c) \\(4a^2 + 9b^2 + 16c^2 + 12ab + 16ac − 24bc\\)", 
        "d) \\(4a^2 + 9b^2 + 16c^2 − 12ab − 16ac − 24bc\\)"
      ],
      correctAnswer: "a) \\(4a^2 + 9b^2 + 16c^2 + 12ab − 16ac − 24bc\\)"
    },
    {
      question: "Expand the expression \\((−2x + y + 4z)^2\\).",
      options: [
        "a) \\(4x^2 + y^2 + 16z^2 − 4xy − 16xz + 8yz\\)", 
        "b) \\(4x^2 − y^2 − 16z^2 + 4xy + 16xz − 8yz\\)", 
        "c) \\(4x^2 + y^2 + 16z^2 − 4xy + 16xz − 8yz\\)", 
        "d) \\(4x^2 + y^2 − 16z^2 + 4xy − 16xz + 8yz\\)"
      ],
      correctAnswer: "a) \\(4x^2 + y^2 + 16z^2 − 4xy − 16xz + 8yz\\)"
    }
  ],
  lesson3: [
    {
      question: "Find the result of \\((2x + 9)(2x − 9)\\).",
      options: [
        "a) \\(4x^2 − 81x\\)", 
        "b) \\(4x^2 + 81x\\)", 
        "c) \\(4x^2 − 81\\)", 
        "d) \\(4x^2 + 81\\)"
      ],
      correctAnswer: "c) \\(4x^2 − 81\\)"
    },
    {
      question: "Find the missing term: \\((8z^2 + 117)(8z^2 − 117) = 64z^4 − \\) _____",
      options: [
        "a) 13869", 
        "b) 13896", 
        "c) 13689", 
        "d) 13698"
      ],
      correctAnswer: "c) 13689"
    },
    {
      question: "What is the product of \\((\\frac{3}{4}x + \\frac{2}{3}y)(\\frac{3}{4}x − \\frac{2}{3}y)\\)?",
      options: [
        "a) \\(\\frac{3}{4}x^2 + \\frac{2}{3}y^2\\)", 
        "b) \\(\\frac{3}{4}x^2 − \\frac{2}{3}y^2\\)", 
        "c) \\(\\frac{9}{16}x^2 + \\frac{4}{9}y^2\\)", 
        "d) \\(\\frac{9}{16}x^2 − \\frac{4}{9}y^2\\)"
      ],
      correctAnswer: "d) \\(\\frac{9}{16}x^2 − \\frac{4}{9}y^2\\)"
    },
    {
      question: "Simplify \\((3m + 11n^3)(3m − 11n^3)\\).",
      options: [
        "a) \\(6m + 121n^3\\)", 
        "b) \\(6m^2 + 121n^3\\)", 
        "c) \\(9m − 121n^6\\)", 
        "d) \\(9m^2 − 121n^6\\)"
      ],
      correctAnswer: "d) \\(9m^2 − 121n^6\\)"
    },
    {
      question: "What is the simplified form of \\((8x − 3y)(8x + 3y)\\)?",
      options: [
        "a) \\(9x^2 + 64y^2\\)", 
        "b) \\(9x^2 − 64y^2\\)", 
        "c) \\(64x^2 + 9y^2\\)", 
        "d) \\(64x^2 − 9y^2\\)"
      ],
      correctAnswer: "d) \\(64x^2 − 9y^2\\)"
    }
  ],
  lesson4: [
    {
      question: "Expand the expression \\((2x − 3y)^3\\).",
      options: [
        "a) \\(8x^3 + 36x^2y + 54xy^2 − 27y^3\\)", 
        "b) \\(8x^3 − 18x^2y − 54xy^2 − 27y^3\\)", 
        "c) \\(8x^3 − 36x^2y + 54xy^2 − 27y^3\\)", 
        "d) \\(8x^3 + 18x^2y − 54xy^2 − 27y^3\\)"
      ],
      correctAnswer: "c) \\(8x^3 − 36x^2y + 54xy^2 − 27y^3\\)"
    },
    {
      question: "Expand the expression \\((\\frac{1}{2}x − 5y)^3\\).",
      options: [
        "a) \\(\\frac{1}{8}x^3 − \\frac{15}{4}x^2y + \\frac{75}{2}xy^2 − 125y^3\\)", 
        "b) \\(\\frac{1}{8}x^3 − \\frac{15}{4}x^2y + \\frac{75}{4}xy^2 − 125y^3\\)", 
        "c) \\(\\frac{1}{8}x^3 − \\frac{15}{8}x^2y + \\frac{75}{4}xy^2 + 125y^3\\)", 
        "d) \\(\\frac{1}{8}x^3 − \\frac{15}{8}x^2y + \\frac{75}{2}xy^2 − 125y^3\\)"
      ],
      correctAnswer: "a) \\(\\frac{1}{8}x^3 − \\frac{15}{4}x^2y + \\frac{75}{2}xy^2 − 125y^3\\)"
    },
    {
      question: "Expand the expression \\((−2x + \\frac{3}{2}y)^3\\).",
      options: [
        "a) \\(−8x^3 + 18x^2y − \\frac{27}{2}xy^2 + \\frac{27}{8}y^3\\)", 
        "b) \\(−8x^3 + 18x^2y − \\frac{27}{4}xy^2 + \\frac{27}{8}y^3\\)", 
        "c) \\(8x^3 + 18x^2y − \\frac{27}{4}xy^2 + \\frac{27}{8}y^3\\)", 
        "d) \\(8x^3 + 18x^2y − \\frac{27}{2}xy^2 + \\frac{27}{8}y^3\\)"
      ],
      correctAnswer: "a) \\(−8x^3 + 18x^2y − \\frac{27}{2}xy^2 + \\frac{27}{8}y^3\\)"
    },
    {
      question: "Expand the expression \\((−2x + 6)^3\\) and find the 3rd term.",
      options: [
        "a) 216x", 
        "b) −216x", 
        "c) −216x^2", 
        "d) 216x^2"
      ],
      correctAnswer: "b) −216x"
    },
    {
      question: "Expand \\((3x − \\frac{1}{3}y)^3\\) and find the 2nd, 3rd, and 4th terms.",
      options: [
        "a) −4, \\frac{1}{3}, −\\frac{1}{27}", 
        "b) −4, −\\frac{1}{3}, −\\frac{1}{27}", 
        "c) −4, \\frac{2}{3}, −\\frac{1}{27}", 
        "d) −4, −\\frac{2}{3}, −\\frac{1}{27}"
      ],
      correctAnswer: "c) −4, \\frac{2}{3}, −\\frac{1}{27}"
    }
  ],
  lesson5: [
    {
      question: "Simplify the expression \\((x + 4)(x^2 − 4x + 16)\\).",
      options: [
        "a) \\(x^3 + 16\\)", 
        "b) \\(x^3 − 16\\)", 
        "c) \\(x^3 − 16x + 64\\)", 
        "d) \\(x^3 + 16x + 64\\)"
      ],
      correctAnswer: "b) \\(x^3 − 16\\)"
    },
    {
      question: "Simplify the expression \\((3x − 4)(9x^2 + 12x + 16)\\).",
      options: [
        "a) \\(27x^3 + 64\\)", 
        "b) \\(27x^3 − 64\\)", 
        "c) \\(−27x^3 + 64\\)", 
        "d) \\(−27x^3 − 64\\)"
      ],
      correctAnswer: "b) \\(27x^3 − 64\\)"
    },
    {
      question: "Find the missing term to make it a perfect cube: \\((2x + 3)(x^2 − x + \\) _____).",
      options: [
        "a) 1", 
        "b) −1", 
        "c) 4", 
        "d) −4"
      ],
      correctAnswer: "a) 1"
    },
    {
      question: "Find the coefficient of the variable in \\((x + 6)(x^2 − 6x + 36)\\).",
      options: [
        "a) None", 
        "b) 6", 
        "c) −6", 
        "d) −36"
      ],
      correctAnswer: "a) None"
    },
    {
      question: "Determine the missing term: \\((2x + 1)(4x^2 − 2x + 1) = 8x^3\\) _____",
      options: [
        "a) +2", 
        "b) −2", 
        "c) +1", 
        "d) −1"
      ],
      correctAnswer: "c) +1"
    }
  ]  
  };
  
  export default questions;
  