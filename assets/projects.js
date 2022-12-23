const ul = document.querySelector("ul");
const okStatus = 200;
let li = document.createElement("li");

async function getGitHubAsync() {
  const response = await fetch(
    "https://api.github.com/users/AleCamargo77/repos"
  );
  if (response.status === okStatus) {
    const data = await response.json();
    data.map((item) => {
      createElement(item);
    });
    // .catch(e => console.log(e))

    ul.appendChild(li);
    console.log(response);
    console.log(data);
  } else {
    throw new Error(response.status);
  }
}

function createElement(data) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  let parag = document.createElement("p");

  li.innerHTML = `
    <strong>${data.name.toUpperCase()}</strong>`;

  a.target = "_blank";
  a.href = `${data.html_url}`;
  a.innerText = `URL: ${data.html_url}`;

  parag.innerHTML = `
  <p>
  Data Criação:
    ${Intl.DateTimeFormat("pt-BR").format(new Date(data.created_at))}
  </p>
 
  `;
  // <a> ${data.url}</a>

  ul.appendChild(li);
  ul.appendChild(a);
  ul.appendChild(parag);
}

getGitHubAsync();
