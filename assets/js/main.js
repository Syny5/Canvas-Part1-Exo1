function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    // Ensemble de la maison (bleu ciel)
    ctx.fillStyle = '#add8e6';
    ctx.fillRect(30, 50, 100, 100); // fillRect(x, y, largeur, hauteur)
    // Première fenêtre (gauche)
    ctx.fillStyle = '#cacaca';
    ctx.fillRect(40, 60, 20, 20);
    // Deuxième fenêtre (droite)
    ctx.fillStyle = '#cacaca';
    ctx.fillRect(100, 60, 20, 20);
    // Porte
    ctx.fillStyle = '#cacaca';
    ctx.fillRect(65, 110, 30, 40);
    // Toit
    ctx.beginPath();
    ctx.moveTo(30, 50); //Je me situe dans la page
    ctx.lineTo(130, 50); // Je trace trois traits partant d'un point x à un point y 
    ctx.lineTo(80, 5);
    ctx.lineTo(30, 50);
    ctx.fillStyle = '#cd853f'; // Je détermine la couleur de mon triangle
    ctx.fill(); // J'active la couleur déterminée au préalable
  }
}
