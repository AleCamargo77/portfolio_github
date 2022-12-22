async function loadGithub() {
  const url = "https://api.github.com/users/AleCamargo77";
  let request = await fetch(url);
  let response = await request.json();
  console.log(response.avatar_url);
  const divMain = document.getElementById("container");
  const nameTitle = createH2(response.name);
  const bioTitle = createH2(response.bio);
  const imageAvatar = createImage(response.avatar_url);
  const local = createParagraph(response.location);
  const followers = createFolowers(response.followers, response.following);
  imageAvatar.src = response.avatar_url;
  imageAvatar.classList.add("img");
  divMain.append(nameTitle, bioTitle, imageAvatar, local, followers);
}

function createH2(text) {
  const name = document.createElement("h2");
  name.innerText = text;
  return name;
}

function createImage(img) {
  const image = document.createElement("img");
  image.src = img;
  image.classList.add("img");
  return image;
}

function createParagraph(text) {
  const parag = document.createElement("p");
  parag.innerText = `${text}`;
  parag.classList.add("location");
  return parag;
}

function createFolowers(follower, following) {
  const parag = document.createElement("p");
  parag.innerText = `Seguidores:   ${follower} 
  Seguindo:   ${following}`;
  parag.classList.add("numbers");
  return parag;
}

loadGithub();
