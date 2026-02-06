function login(){
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // UBAH USERNAME & PASSWORD DI SINI
  if(user === "admin" && pass === "admin123"){
    localStorage.setItem("loginAdmin", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Username atau password salah");
  }
}

function cekLogin(){
  if(localStorage.getItem("loginAdmin") !== "true"){
    window.location.href = "login.html";
  }
}

function logout(){
  localStorage.removeItem("loginAdmin");
  window.location.href = "login.html";
}
