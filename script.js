class password {
  weekpassword() {
    let lchar = "abcdefghijklmnopqrstuvwxyz";
    let uchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    let i = "";
    while (i < 5) {
      pass += uchar[Math.floor(Math.random() * uchar.length)];
      pass += lchar[Math.floor(Math.random() * lchar.length)];
      i++;
    }
    pass = pass.substr(0, 5);
    return pass;
  }
  strongpassword() {
    let lchar = "abcdefghijklmnopqrstuvwxyz";
    let uchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "1234567890";
    let pass = "";
    let i = "";
    while (i < 8) {
      pass += lchar[Math.floor(Math.random() * lchar.length)];
      pass += uchar[Math.floor(Math.random() * uchar.length)];
      pass += num[Math.floor(Math.random() * num.length)];
      i++;
    }
    pass = pass.substr(0, 8);
    return pass;
  }
  superpassword() {
    let lchar = "abcdefghijklmnopqrstuvwxyz";
    let uchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "1234567890";
    let sup = "!@#$%&";
    let pass = "";
    let i = "";
    while (i < 12) {
      pass += lchar[Math.floor(Math.random() * lchar.length)];
      pass += uchar[Math.floor(Math.random() * uchar.length)];
      pass += num[Math.floor(Math.random() * num.length)];
      pass += sup[Math.floor(Math.random() * sup.length)];
      i++;
    }
    pass = pass.substr(0, 12);
    return pass;
  }
  funnypassword() {
    let random = ["Admin", "Password", "Nothing", "Forgotpassword", "Changeme", "User", "Justdoit", "Playboy", "Giants", "Yamaha"];
    let pass = random[Math.floor(Math.random() * random.length)];
    return pass;
  }
}
let pass = new password();

function generateweek() {
  let i = document.getElementById("text");
  let p = pass.weekpassword();
  i.value = p;
}

function generatestrong() {
  let i = document.getElementById("text");
  let p = pass.strongpassword();
  i.value = p;
}

function generatesuper() {
  let i = document.getElementById("text");
  let p = pass.superpassword();
  i.value = p;
}

function generatefunny() {
  let i = document.getElementById("text");
  let p = pass.funnypassword();
  i.value = p;
}


function generate() {
  let radio1 = document.getElementById("name");
  let radio2 = document.getElementById("name1");
  let radio3 = document.getElementById("name2");
  let radio4 = document.getElementById("name3");
  if (radio1.checked) {
    generateweek();
  }
  else if (radio2.checked) {
    generatestrong();
  }
  else if (radio3.checked) {
    generatesuper();
  }
  else if (radio4.checked) {
    generatefunny();
  }
  else {
    let a = document.createElement("div");
    a.setAttribute("id", "alert");
    a.innerHTML = "<b>Please Choose One Option...</b>"
    let b = document.getElementsByClassName("container")[0];
    b.append(a);
    setTimeout(() => {
      a.style.display = "none";
    }, 2000);
  }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", generate);


function copyText() {
  let copyText = document.getElementById("text");
  if (copyText.value=="") {
    let a = document.createElement("div");
    a.setAttribute("id", "alert");
    a.innerHTML = "<b>Generate a Password First...</b>"
    let b = document.getElementsByClassName("container")[0];
    b.append(a);
    setTimeout(() => {
      a.style.display = "none";
    }, 2000);
  }
  else {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    copyText.value = "";
    let a1 = document.createElement("div");
    a1.setAttribute("id", "alert");
    a1.innerHTML = "<b>Password Copied...</b>"
    let b1 = document.getElementsByClassName("container")[0];
    b1.append(a1);
    setTimeout(() => {
      a1.style.display = "none";
    }, 2000);
  }
}

let copy = document.querySelector(".far");
copy.addEventListener("click", copyText);