<!DOCTYPE html>
<html>
<head>
  <title>Quiz App</title>
</head>
<body>
  <h2>What is the capital of France?</h2>
  <button onclick="checkAnswer('Paris')">Paris</button>
  <button onclick="checkAnswer('London')">London</button>
  <button onclick="checkAnswer('Berlin')">Berlin</button>
  <p id="result"></p>

  <script>
    function checkAnswer(answer) {
      const correct = "Paris";
      const result = document.getElementById("result");
      if (answer === correct) {
        result.textContent = "Correct!";
        result.style.color = "green";
      } else {
        result.textContent = "Wrong! Try again.";
        result.style.color = "red";
      }
    }
  </script>
</body>
</html>
