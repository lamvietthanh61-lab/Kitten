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

