var red = "color:rgb(255,0,0);background:#1a1a1a;font-size:xx-large";
var grey = "color:white;background:#1a1a1a;font-size:xx-large";

let dig = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

let encode = {
  0: [1, 2, 3, 5, 6, 7],
  1: [3, 6],
  2: [1, 3, 4, 5, 7],
  3: [1, 3, 4, 6, 7],
  4: [2, 4, 3, 6],
  5: [1, 2, 4, 6, 7],
  6: [1, 2, 5, 4, 6, 7],
  7: [1, 3, 6],
  8: [1, 2, 3, 4, 5, 6, 7],
  9: [1, 2, 3, 4, 6, 7],
};

writing = function (h1, h2, m1, m2, s1, s2) {
  for (i = 0; i < encode[h1].length; i++) {
    s = ".hhone-" + dig[encode[h1][i]];
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 0.5vw var(--neon))");
    document.querySelector(s).style.setProperty("fill", "var(--coloncolor)");
  }

  for (i = 0; i < encode[h2].length; i++) {
    s = ".hhtwo-" + dig[encode[h2][i]];
    document.querySelector(s).style.setProperty("fill", "var(--coloncolor)");
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 0.5vw var(--neon))");
  }

  for (i = 0; i < encode[m1].length; i++) {
    s = ".mmone-" + dig[encode[m1][i]];
    document.querySelector(s).style.setProperty("fill", "var(--coloncolor)");
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 0.5vw var(--neon))");
  }

  for (i = 0; i < encode[m2].length; i++) {
    s = ".mmtwo-" + dig[encode[m2][i]];
    document.querySelector(s).style.setProperty("fill", "var(--coloncolor)");
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 0.5vw var(--neon))");
  }

  for (i = 0; i < encode[s1].length; i++) {
    s = ".ssone-" + dig[encode[s1][i]];
    document.querySelector(s).style.setProperty("fill", "var(--coloncolor)");
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 0.5vw var(--neon))");
  }

  for (i = 0; i < encode[s2].length; i++) {
    s = ".sstwo-" + dig[encode[s2][i]];
    document.querySelector(s).style.setProperty("fill", "var(--coloncolor)");
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 0.5vw var(--neon))");
  }
};

off = function (h1, h2, m1, m2, s1, s2) {
  for (i = 0; i < encode[h1].length; i++) {
    s = ".hhone-" + dig[encode[h1][i]];
    document.querySelector(s).style.setProperty("fill", "rgb(10,10,10,0.2");
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 2px rgb(0,0,0,0)");
  }

  for (i = 0; i < encode[h2].length; i++) {
    s = ".hhtwo-" + dig[encode[h2][i]];
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 2px rgb(0,0,0,0)");
    document.querySelector(s).style.setProperty("fill", "rgb(10,10,10,0.2");
  }

  for (i = 0; i < encode[m1].length; i++) {
    s = ".mmone-" + dig[encode[m1][i]];
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 2px rgb(0,0,0,0)");
    document.querySelector(s).style.setProperty("fill", "rgb(10,10,10,0.2");
  }

  for (i = 0; i < encode[m2].length; i++) {
    s = ".mmtwo-" + dig[encode[m2][i]];
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 2px rgb(0,0,0,0)");
    document.querySelector(s).style.setProperty("fill", "rgb(10,10,10,0.2");
  }

  for (i = 0; i < encode[s1].length; i++) {
    s = ".ssone-" + dig[encode[s1][i]];
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 2px rgb(0,0,0,0)");
    document.querySelector(s).style.setProperty("fill", "rgb(10,10,10,0.2");
  }

  for (i = 0; i < encode[s2].length; i++) {
    s = ".sstwo-" + dig[encode[s2][i]];
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 2px rgb(0,0,0,0)");
    document.querySelector(s).style.setProperty("fill", "rgb(10,10,10,0.2");
  }
};

window.onload = () => {
  function main() {
    var time = new Date();
    var hh = time.getHours();
    var mm = time.getMinutes();
    var ss = time.getSeconds();
    var h1 = Math.floor(hh / 10);
    var h2 = hh % 10;
    var m1 = Math.floor(mm / 10);
    var m2 = mm % 10;
    var s1 = Math.floor(ss / 10);
    var s2 = ss % 10;

    off(8, 8, 8, 8, 8, 8); // This call to off() does not need the extra parameters now

    writing(h1, h2, m1, m2, s1, s2);

    setTimeout(main, 500);
  }

  main();
};
