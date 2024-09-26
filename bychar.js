function imprimirCorazonConDelay(array, ms) {
    let i = 0, j = 0;
  
    function imprimir() {
      if (i < array.length) {
        if (j < array[i].length) {
          process.stdout.write(array[i][j]); 
          j++;
          setTimeout(imprimir, ms); 
        } else {
          console.log(); 
          i++;
          j = 0; 
          setTimeout(imprimir, ms); 
        }
      }
    }
  
    imprimir(); 
}
  
  const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "⠀      ⠙⠻⠁"
];
  
  
  imprimirCorazonConDelay(asciiHeart, 200);