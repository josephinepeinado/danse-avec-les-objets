const verbBlob = document.getElementById("verbBlob");
const bodyBlob = document.getElementById("bodyBlob");
const objectBlob = document.getElementById("objectBlob");
const musicBlob = document.getElementById("musicBlob");

const outVerb = document.getElementById("outVerb");
const outBody = document.getElementById("outBody");

const musicPlayer = document.getElementById("musicPlayer");

/* LISTES */
const verbsPool = [
  "Glisser","Flotter","Balancer",
  "Tourner","Bondir","Rouler","Tirer","Caresser","Secouer"
];

const bodyPool = [
  "la main","le bras","le genou","la hanche","le pied","l'épaule",
  "le haut du corps","le bas du corps"
];

const objectPool = [
  "un coussin","une planche","un bâton"
];

const musicsPool = [
  "fourmillement.mp3","oiseaux.mp3","petillement.mp3",
  "promenade.mp3","pas.mp3","cliquetis.mp3"
];

let verbs = [...verbsPool];
let body = [...bodyPool];
let object = [...objectPool];
let musics = [...musicsPool];

function pickAndRemove(arr) {
  return arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
}

function activate(el) {
  el.classList.remove("active");
  void el.offsetWidth;
  el.classList.add("active");
}

/* ACTION */
verbBlob.addEventListener("click", () => {
  if (!verbs.length) verbs = [...verbsPool];
  activate(verbBlob);
  outVerb.textContent = pickAndRemove(verbs);
});

/* CORPS */
bodyBlob.addEventListener("click", () => {
  if (!body.length) body = [...bodyPool];
  activate(bodyBlob);
  outBody.textContent = pickAndRemove(body);
  outBody.className = "word body-part";
});

/* OBJET */
objectBlob.addEventListener("click", () => {
  if (!object.length) object = [...objectPool];
  activate(objectBlob);
  outBody.textContent = pickAndRemove(object);
  outBody.className = "word object";
});

/* MUSIQUE */
musicBlob.addEventListener("click", () => {
  if (!musics.length) musics = [...musicsPool];
  activate(musicBlob);
  musicPlayer.src = pickAndRemove(musics);
  musicPlayer.play();
});
