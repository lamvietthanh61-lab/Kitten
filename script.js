// ===== ADMIN LOGIN (BẠN ĐỔI 2 DÒNG NÀY) =====
const ADMIN_USER = "adminthanhdz";
const ADMIN_PASS = "Adminthanh@123"; // >=8 ký tự, có chữ hoa, số, ký tự đặc biệt

// ===== DARK MODE =====
function toggleMode() {
  document.body.classList.toggle("dark");
}

// ===== TÌM KIẾM =====
function searchPosts() {
  let key = document.getElementById("searchInput").value.toLowerCase();
  let posts = document.getElementsByClassName("post");
  for (let p of posts) {
    p.style.display = p.innerText.toLowerCase().includes(key) ? "" : "none";
  }
}

// ===== GỬI BÀI =====
function submitPost() {
  let user = document.getElementById("username").value.trim();
  let postTitle = document.getElementById("postTitle").value.trim();
  let content = document.getElementById("content").value.trim();

  if (!user || !postTitle || !content) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  let pending = JSON.parse(localStorage.getItem("pendingPosts")) || [];

  pending.push({
    user: user,
    title: postTitle,
    content: content,
    time: new Date().toLocaleString()
  });

  localStorage.setItem("pendingPosts", JSON.stringify(pending));

  document.getElementById("msg").innerText =
    "✅ Bài đã gửi, chờ admin duyệt";

  document.getElementById("username").value = "";
  document.getElementById("postTitle").value = "";
  document.getElementById("content").value = "";
}


  let pending = JSON.parse(localStorage.getItem("pendingPosts")) || [];
  pending.push({
    user, title, content,
    time: new Date().toLocaleString()
  });

  localStorage.setItem("pendingPosts", JSON.stringify(pending));
  msg.innerText = "✅ Bài đã gửi, chờ admin duyệt";

  username.value = title.value = content.value = "";
}

// ===== ADMIN =====
function login() {
  if (adminUser.value === ADMIN_USER && adminPass.value === ADMIN_PASS) {
    localStorage.setItem("adminLogin", "true");
    location.href = "admin.html";
  } else {
    error.innerText = "❌ Sai tài khoản hoặc mật khẩu";
  }
}

function logout() {
  localStorage.removeItem("adminLogin");
  location.href = "admin-login.html";
}

function loadPendingPosts() {
  let list = document.getElementById("pendingList");
  if (!list) return;

  let pending = JSON.parse(localStorage.getItem("pendingPosts")) || [];
  list.innerHTML = pending.length ? "" : "<p>Không có bài chờ duyệt</p>";

  pending.forEach((p, i) => {
    list.innerHTML += `
      <div class="post">
        <h3>${p.title}</h3>
        <p>👤 ${p.user}</p>
        <p>${p.content}</p>
        <button onclick="approvePost(${i})">✅ Duyệt</button>
        <button onclick="deletePost(${i})">❌ Xóa</button>
      </div>`;
  });
}

function approvePost(i) {
  let pending = JSON.parse(localStorage.getItem("pendingPosts"));
  let approved = JSON.parse(localStorage.getItem("approvedPosts")) || [];
  approved.push(pending[i]);
  pending.splice(i, 1);

  localStorage.setItem("pendingPosts", JSON.stringify(pending));
  localStorage.setItem("approvedPosts", JSON.stringify(approved));
  loadPendingPosts();
}

function deletePost(i) {
  let pending = JSON.parse(localStorage.getItem("pendingPosts"));
  pending.splice(i, 1);
  localStorage.setItem("pendingPosts", JSON.stringify(pending));
  loadPendingPosts();
}

function loadApprovedPosts() {
  let area = document.getElementById("approvedPosts");
  if (!area) return;

  let posts = JSON.parse(localStorage.getItem("approvedPosts")) || [];
  posts.forEach(p => {
    area.innerHTML += `
      <div class="post">
        <h2 class="post-title">${p.title}</h2>
        <p>👤 ${p.user}</p>
        <p>${p.content}</p>
      </div>`;
  });
}

