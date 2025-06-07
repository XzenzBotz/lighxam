
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
  },
  {
    title: "🎟️ Suntik Share Layanan TikTok",
    content: '1000 = Rp6.000<br>2000 = Rp.8.000<br>5000 = Rp10.000<br>6000 = Rp11.000<br>7000 = Rp12.000<br>9000 = Rp20.000<br>10.000 = Rp25.000<br>15.000 = Rp.30.000`
  },
  {
    title: "✉️ Suntik Save TikTok",
    content: `100 = Rp1.000<br>200 = 2.000<br>500 = Rp5.000<br>1000 = Rp9.000<br>1500 = Rp10.000<br>3000 = Rp15.000`
  },
  {
    title: "💬 Suntik Comment TikTok",
    content: `1 = Rp1.000<br>5 = Rp5.000<br>10 = Rp11.000<br>14 = Rp15.000<br>Jika tambah like komentar = Rp3.000`
  },
  {
    title: "🐻 Suntik Followers Instagram",
    content: `100 = Rp7.000<br>200 = Rp13.000<br>300 = Rp18.000<br>400 = Rp25.000<br>500 = Rp30.000<br>900 = 50.000<br>1000 = Rp60.000`
  },
  {
    title: "✨ Suntik Like Instagram",
    content: `300 = Rp3.000<br>500 = Rp5.000<br>900 = Rp10.000<br>1000 = Rp13.000<br>1500 = Rp15.000<br>3500 = Rp25.000<br>5000 = Rp40.000`
  },
  {
    title: "🪡 Suntik Views Instagram",
    content: '1000 = Rp3.000<br>5000 = Rp5.000<br>20.000 = Rp15.000<br>50.000 = Rp25.000<br>70.000 = Rp30.000<br>100.000 = Rp40.000`
  },
  {
   title: "Open Juga JPM Saluran WhatsApp 😎✅",
   content: '👤10 = Rp3K<br>👤20 = Rp5K<br>👤50 =Rp10K<br>👤80 = Rp15K<br>👤90 = Rp20K<br>👤200 = Rp60K<br>👤250 = Rp70K<br>👤300 = 85K<br>DST...`
  },
  {
    title: "New Promo Suntik Emoji Saluran WhatsApp Random 🌸",
    content: '30 = Rp3K<br>40 = Rp5K<br>50 = Rp6K<br>70 = Rp7K<br>80 = Rp8K<br>90 = 9K<br>100 = Rp10K<br>Bisa order sesuai dengan keinginan juga jika tidak ada di data list`
  },
  {
    title: "Proses hanya menggunakan link text saluran WhatsApp Tersebut",
    content: 'suntik sosmed di lighxam store 100% asli dan permanent/tidak berkurang😉`
  },
  {
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
