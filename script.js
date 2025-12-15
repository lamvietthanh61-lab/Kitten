function searchPosts() {
  let key = document.getElementById("searchInput").value.toLowerCase();
  let posts = document.getElementsByClassName("post");

  for (let p of posts) {
    let text = p.innerText.toLowerCase();
    p.style.display = text.includes(key) ? "" : "none";
  }
}

function toggleMode() {
  document.body.classList.toggle("dark");
}
// THÔNG TIN ADMIN (bạn tự đổi)
const ADMIN_USER = "adminthanhdz";
const ADMIN_PASS = "Adminthanh@123"; // ≥8 ký tự, chữ hoa, số, ký tự đặc biệt

function login() {
  let user = document.getElementById("adminUser").value;
  let pass = document.getElementById("adminPass").value;

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    localStorage.setItem("adminLogin", "true");
    window.location.href = "admin.html";
  } else {
    document.getElementById("error").innerText = "❌ Sai tài khoản hoặc mật khẩu";
  }
}

