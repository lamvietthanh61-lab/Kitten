// ==== TÌM KIẾM ====
function searchPosts() {
  let key = document.getElementById("searchInput").value.toLowerCase();
  let posts = document.getElementsByClassName("post");

  for (let p of posts) {
    p.style.display = p.innerText.toLowerCase().includes(key) ? "" : "none";
  }
}

// ==== DARK MODE ====
function toggleMode() {
  document.body.classList.toggle("dark");
}

// ==== ADMIN LOGIN ====
const ADMIN_USER = "adminthanhdz";
const ADMIN_PASS = "Adminthanh@123"; // đổi mật khẩu tại đây

function login() {
  let u = document.getElementById("adminUser").value;
  let p = document.getElementById("adminPass").value;

  if (u === ADMIN_USER && p === ADMIN_PASS) {
    localStorage.setItem("adminLogin", "true");
    window.location.href = "admin.html";
  } else {
    document.getElementById("error").innerText = "❌ Sai tài khoản hoặc mật khẩu";
  }
}

function logout() {
  localStorage.removeItem("adminLogin");
  window.location.href = "admin-login.html";
}

