// src/postQuestions.js
const postQuestions = {
  lesson1: [
    {
      question: "Expand and simplify \\((2x + 3)^2\\).",
      options: [
        "a) \\(4x^2 + 12x + 9\\)", 
        "b) \\(4x^2 + 9x + 9\\)", 
        "c) \\(4x^2 + 6x + 9\\)", 
        "d) \\(4x^2 + 9\\)"
      ],
      correctAnswer: "a) \\(4x^2 + 12x + 9\\)"
    },
    {
      question: "Expand and simplify \\((3x − 4)^2\\).",
      options: [
        "a) \\(9x^2 − 24x + 16\\)", 
        "b) \\(9x^2 − 12x + 16\\)", 
        "c) \\(9x^2 − 7x + 16\\)", 
        "d) \\(9x^2 + 16\\)"
      ],
      correctAnswer: "a) \\(9x^2 − 24x + 16\\)"
    },
    {
      question: "Expand and simplify \\((2x − \\frac{5}{4})^2\\).",
      options: [
        "a) \\(4x^2 − \\frac{10}{4}x + \\frac{25}{16}\\)", 
        "b) \\(4x^2 + 5x + \\frac{25}{16}\\)", 
        "c) \\(4x^2 − 5x + \\frac{25}{16}\\)", 
        "d) \\(4x^2 + \\frac{25}{16}\\)"
      ],
      correctAnswer: "c) \\(4x^2 − 5x + \\frac{25}{16}\\)"
    },
    {
      question: "Expand and simplify \\((4x + \\frac{1}{3})^2\\).",
      options: [
        "a) \\(16x^2 + \\frac{8}{9}x + \\frac{1}{9}\\)", 
        "b) \\(16x^2 + \\frac{8}{6}x + \\frac{1}{9}\\)", 
        "c) \\(16x^2 + \\frac{8}{3}x + \\frac{1}{9}\\)", 
        "d) \\(16x^2 + \\frac{1}{9}\\)"
      ],
      correctAnswer: "c) \\(16x^2 + \\frac{8}{3}x + \\frac{1}{9}\\)"
    },
    {
      question: "Expand and simplify \\((5 + 0.95x)^2\\).",
      options: [
        "a) \\(25 + 9.5x + 0.9025x^2\\)", 
        "b) \\(0.9025x^2 + 9.5x + 25\\)", 
        "c) \\(25 + 4.75x + 0.9025x^2\\)", 
        "d) \\(0.9025x^2 + 4.75x + 25\\)"
      ],
      correctAnswer: "b) \\(0.9025x^2 + 9.5x + 25\\)"
    }
  ],  
  lesson2: [
    {
      question: "Expand the expression \\((x + 3y - 2z)^2\\).",
      options: [
        "a) \\(x^2 + 9y^2 + 4z^2 - 6xy - 4xz + 12yz\\)", 
        "b) \\(x^2 + 9y^2 + 4z^2 + 6xy + 4xz - 12yz\\)", 
        "c) \\(x^2 + 9y^2 + 4z^2 - 6xy + 4xz + 12yz\\)", 
        "d) \\(x^2 + 9y^2 + 4z^2 + 6xy - 4xz - 12yz\\)"
      ],
      correctAnswer: "d) \\(x^2 + 9y^2 + 4z^2 + 6xy - 4xz - 12yz\\)"
    },
    {
      question: "Expand the expression \\((2x - y + 5z)^2\\).",
      options: [
        "a) \\(4x^2 + y^2 + 25z^2 - 4xy + 20xz - 10yz\\)", 
        "b) \\(4x^2 + y^2 + 25z^2 + 4xy - 20xz - 10yz\\)", 
        "c) \\(4x^2 + y^2 + 25z^2 + 4xy + 20xz - 10yz\\)", 
        "d) \\(4x^2 + y^2 + 25z^2 - 4xy - 20xz + 10yz\\)"
      ],
      correctAnswer: "a) \\(4x^2 + y^2 + 25z^2 - 4xy + 20xz - 10yz\\)"
    },
    {
      question: "Expand the expression \\((3a - 4b + c)^2\\).",
      options: [
        "a) \\(9a^2 + 16b^2 + c^2 + 24ab - 6ac + 8bc\\)", 
        "b) \\(9a^2 + 16b^2 + c^2 - 24ab - 6ac - 8bc\\)", 
        "c) \\(9a^2 + 16b^2 + c^2 + 24ab + 6ac - 8bc\\)", 
        "d) \\(9a^2 + 16b^2 + c^2 - 24ab + 6ac - 8bc\\)"
      ],
      correctAnswer: "d) \\(9a^2 + 16b^2 + c^2 - 24ab + 6ac - 8bc\\)"
    },
    {
      question: "Expand the expression \\((0.3a - 0.5b + 9c)^2\\).",
      options: [
        "a) \\(0.09a^2 + 0.25b^2 + 81c^2 + 0.3ab - 5.4ac + 9bc\\)", 
        "b) \\(0.09a^2 + 0.25b^2 + 81c^2 - 0.3ab + 5.4ac + 9bc\\)", 
        "c) \\(0.09a^2 + 0.25b^2 + 81c^2 - 0.3ab + 5.4ac - 9bc\\)", 
        "d) \\(0.09a^2 + 0.25b^2 + 81c^2 + 0.3ab - 5.4ac - 9bc\\)"
      ],
      correctAnswer: "b) \\(0.09a^2 + 0.25b^2 + 81c^2 - 0.3ab + 5.4ac + 9bc\\)"
    },
    {
      question: "Expand the expression \\((−0.1a − 2b + 3c)^2\\).",
      options: [
        "a) \\(0.01a^2 + 4b^2 + 9c^2 - 0.4ab - 0.6ac - 12bc\\)", 
        "b) \\(0.01a^2 + 4b^2 + 9c^2 - 0.4ab + 0.6ac + 12bc\\)", 
        "c) \\(0.01a^2 + 4b^2 + 9c^2 + 0.4ab - 0.6ac - 12bc\\)", 
        "d) \\(0.01a^2 + 4b^2 + 9c^2 + 0.4ab + 0.6ac + 12bc\\)"
      ],
      correctAnswer: "c) \\(0.01a^2 + 4b^2 + 9c^2 + 0.4ab - 0.6ac - 12bc\\)"
    }
  ],
  lesson3: [
    {
      question: "Calculate the product of \\((5m + 8)(5m − 8)\\).",
      options: [
        "a) \\(25m^2 − 64\\)", 
        "b) \\(25m^2 + 64\\)", 
        "c) \\(10m^2 − 16\\)", 
        "d) \\(10m^2 + 16\\)"
      ],
      correctAnswer: "a) \\(25m^2 − 64\\)"
    },
    {
      question: "Find the missing term: \\((6x^2 + 2)(6x^2 − 2) = −4 + \\) _____",
      options: [
        "a) \\(−36x^4\\)", 
        "b) \\(−36x^2\\)", 
        "c) \\(36x^4\\)", 
        "d) \\(36x^2\\)"
      ],
      correctAnswer: "c) \\(36x^4\\)"
    },
    {
      question: "What is the product of \\((x + \\frac{1}{2})(x − \\frac{1}{2})\\)?",
      options: [
        "a) \\(x^2 − \\frac{1}{4}\\)", 
        "b) \\(x^2 + \\frac{1}{4}\\)", 
        "c) \\(x − \\frac{1}{2}\\)", 
        "d) \\(x + \\frac{1}{2}\\)"
      ],
      correctAnswer: "a) \\(x^2 − \\frac{1}{4}\\)"
    },
    {
      question: "Determine in the simplest form \\((10m + 3)(10m − 3)\\).",
      options: [
        "a) \\(100m^2 − 9\\)", 
        "b) \\(100m^2 + 9\\)", 
        "c) \\(13m^2 − 30m\\)", 
        "d) \\(13m^2 + 30m\\)"
      ],
      correctAnswer: "a) \\(100m^2 − 9\\)"
    },
    {
      question: "Calculate the product \\((7a + 2b)(7a − 2b)\\).",
      options: [
        "a) \\(14ab + 4\\)", 
        "b) \\(14ab − 4\\)", 
        "c) \\(49a^2 + 4b^2\\)", 
        "d) \\(49a^2 − 4b^2\\)"
      ],
      correctAnswer: "d) \\(49a^2 − 4b^2\\)"
    }
  ],
  lesson4: [
    {
      question: "Expand the expression \\((5 − 2y)^3\\).",
      options: [
        "a) \\(125 + 150y − 60y + 8y^3\\)", 
        "b) \\(125 − 75y + 30y^2 − 8y^3\\)", 
        "c) \\(125 − 150y + 60y − 8y^3\\)", 
        "d) \\(125 + 75y + 30y^2 + 8y^3\\)"
      ],
      correctAnswer: "c) \\(125 − 150y + 60y − 8y^3\\)"
    },
    {
      question: "Expand the expression \\((4a + 5)^3\\).",
      options: [
        "a) \\(64a^3 + 120a^2 + 75a + 125\\)", 
        "b) \\(64a^3 + 240a^2 + 150a + 125\\)", 
        "c) \\(64a^3 − 240a^2 + 300a − 125\\)", 
        "d) \\(64a^3 + 240a^2 + 300a + 125\\)"
      ],
      correctAnswer: "d) \\(64a^3 + 240a^2 + 300a + 125\\)"
    },
    {
      question: "Expand the expression \\((2m + 3n)^3\\).",
      options: [
        "a) \\(8m^3 + 24m^2n + 36mn^2 + 9n^3\\)", 
        "b) \\(8m^3 + 36m^2n + 54mn^2 + 27n^3\\)", 
        "c) \\(8m^3 − 36m^2n + 54mn^2 − 27n^3\\)", 
        "d) \\(8m^3 − 24m^2n + 36mn^2 − 9n^3\\)"
      ],
      correctAnswer: "b) \\(8m^3 + 36m^2n + 54mn^2 + 27n^3\\)"
    },
    {
      question: "Expand and find the 2nd term of \\((3p − 4q)^3\\).",
      options: [
        "a) \\(-108p^2q\\)", 
        "b) \\(108p^2q\\)", 
        "c) \\(-108pq^2\\)", 
        "d) \\(108pq^2\\)"
      ],
      correctAnswer: "a) \\(-108p^2q\\)"
    },
    {
      question: "Expand and find the coefficient of the 2nd and 3rd terms of \\((2x − 5)^3\\).",
      options: [
        "a) -60, 150", 
        "b) 60, -150", 
        "c) -60, 125", 
        "d) 8, 125"
      ],
      correctAnswer: "a) -60, 150"
    }
  ], 
  lesson5: [
    {
      question: "Simplify the expression \\((x + 2)(x^2 − 2x + 4)\\).",
      options: [
        "a) \\(x^3 − 8\\)", 
        "b) \\(x^3 + 8\\)", 
        "c) \\(x^3 − 4x^2 − 4x + 8\\)", 
        "d) \\(x^3 + 4x^2 + 4x + 8\\)"
      ],
      correctAnswer: "b) \\(x^3 + 8\\)"
    },
    {
      question: "Simplify the expression \\((3x − 4)(9x^2 + 12x + 16)\\).",
      options: [
        "a) \\(27x^3 + 64\\)", 
        "b) \\(27x^3 − 64\\)", 
        "c) \\(−24x^3 + 64\\)", 
        "d) \\(−24x^3 − 64\\)"
      ],
      correctAnswer: "b) \\(27x^3 − 64\\)"
    },
    {
      question: "Find the missing term to make it a perfect cube: \\((x + 2)(x^2 + 4x + \\) _____).",
      options: [
        "a) \\(+ 4\\)", 
        "b) \\(− 4\\)", 
        "c) \\(+ 2\\)", 
        "d) \\(− 2\\)"
      ],
      correctAnswer: "a) \\(+ 4\\)"
    },
    {
      question: "Find the coefficient of the variable in \\((2x − 3)(4x^2 + 6x + 9)\\).",
      options: [
        "a) 32", 
        "b) 8", 
        "c) 4", 
        "d) 2"
      ],
      correctAnswer: "b) 8"
    },
    {
      question: "Determine the missing term: \\((2x + 1)(4x^2 − 2x + 1) = 8x^3\\) _____",
      options: [
        "a) \\(+ 2\\)", 
        "b) \\(− 2\\)", 
        "c) \\(+ 1\\)", 
        "d) \\(− 1\\)"
      ],
      correctAnswer: "c) \\(+ 1\\)"
    }
  ]  
  };
  
  export default postQuestions;
  