
function crypt(){

    var text = document.getElementById("user-text");
    var cipher = CryptoJS.AES.encrypt(text.value,"");
    var sha1 = CryptoJS.SHA1(text.value,"");
    var SHA224 = CryptoJS.SHA224(text.value,"")
    var SHA256 = CryptoJS.SHA256(text.value,"")

   if (text.value === '' || text.value == null) {
    alert("User Input Field is blank" );
       e.preventDefault()

        }


  document.getElementById("AES-result").innerHTML  = cipher.toString();
  document.getElementById("sha1-result").innerHTML  = sha1.toString();
  document.getElementById("sha224-result").innerHTML  = SHA224.toString();
  document.getElementById("sha256-result").innerHTML  = SHA256.toString();


  };
  function convertToBinary()
 {
    let x = prompt('Enter a decimal number: ');
    let bin = 0;
    let rem, i = 1;
    if (x === '' || x == null) {
        alert("User Input Field is blank,try again" );
           e.preventDefault()
        }

    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    document.getElementById("binary-result").innerHTML  = bin;
}
function convertToDecimal()
{
    let p = prompt('Enter a binary number: ');
    let decimal = +0;
    let bits = +1;
    if (p === '' || p == null) {
        alert("User Input Field is blank,try again" );
           e.preventDefault()
        }


    for(let i = 0; i < p.length; i++) {
        let currNum = +(p[p.length - i - 1]);
        if(currNum === 1) {
            decimal += bits;
        }
        bits *= 2;
    }
    document.getElementById("Decimal-result").innerHTML  = decimal;
}
