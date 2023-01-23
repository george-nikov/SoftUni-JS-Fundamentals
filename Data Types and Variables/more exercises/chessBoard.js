function chessBoard (n) {

let buff = '';
console.log('<div class="chessboard">');
for (let row = 0; row < n; row++) {
    buff += "  <div>\n";
    for (let col = 0; col < n-2; col++) {
    buff += '\t<span class="black"></span>\n'
    buff += '\t<span class="white"></span>\n'
    }
    buff += '\t<span class="black"></span>\n'
    buff+= "  </div>\n"
}
console.log(buff);
console.log("</div>");
}
chessBoard(3)
