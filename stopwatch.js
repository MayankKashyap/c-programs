<!DOCTYPE html>
<html>
<head>
  <title>Stopwatch</title>
</head>
<body>
  <h2>Stopwatch</h2>
  <div id="display">0.0</div>
  <button onclick="start()">Start</button>
  <button onclick="stop()">Stop</button>
  <button onclick="reset()">Reset</button>

  <script>
    let time = 0;
    let timer = null;

    function updateDisplay() {
      document.getElementById("display").textContent = time.toFixed(1);
    }

    function start() {
      if (!timer) {
        timer = setInterval(() => {
          time += 0.1;
          updateDisplay();
        }, 100);
      }
    }

    function stop() {
      clearInterval(timer);
      timer = null;
    }

    function reset() {
      stop();
      time = 0;
      updateDisplay();
    }
  </script>
</body>
</html>
