function showStats() {
  const input = document.getElementById("input").value;
  const url = `https://github-readme-stats.vercel.app/api?username=${encodeURIComponent(
    input
  )}&theme=github_dark&show_icons=true`;
  const img = document.getElementById("img");
  img.src = url;
  img.width = 375;
}
