
const data = [
  {
    title: "📈 Suntik Followers TikTok",
    content: `100 = Rp5.000<br>200 = Rp10.000<br>300 = Rp13.000<br>400 = Rp15.000<br>500 = Rp20.000<br>600 = Rp25.000<br>700 = Rp30.000<br>800 = Rp35.000<br>900 = Rp40.000<br>1000 = Rp50.000<br>2000 = Rp80.000<br>3000 = Rp130.000`
  },
  {
    title: "❤️ Suntik Like TikTok",
    content: `100 = Rp1.000<br>200 = Rp2.000<br>400 = Rp3.000<br>500 = Rp4.000<br>600 = Rp5.000<br>700 = Rp7.000<br>800 = Rp8.000<br>900 = Rp9.000<br>1000 = Rp10.000<br>2000 = Rp15.000<br>3000 = Rp20.000<br>4000 = Rp25.000<br>5000 = Rp30.000`
  },
  {
    title: "🎥 Suntik Views TikTok",
    content: `10.000 = Rp2.000<br>20.000 = Rp4.000<br>30.000 = Rp6.000<br>50.000 = Rp7.000<br>80.000 = Rp8.000<br>100.000 = Rp10.000<br>300.000 = Rp13.000<br>500.000 = Rp15.000<br>1.000.000 = Rp20.000`
  }
];

const container = document.getElementById("accordionContainer");
data.forEach(item => {
  const btn = document.createElement("button");
  btn.className = "accordion";
  btn.innerHTML = item.title;

  const panel = document.createElement("div");
  panel.className = "panel";
  panel.innerHTML = `<p>${item.content}</p>`;

  btn.onclick = function() {
    this.classList.toggle("active");
    panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
  };

  container.appendChild(btn);
  container.appendChild(panel);
});
