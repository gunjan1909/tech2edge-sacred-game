/*alert(
  "The data is been fetched from the api, also the images are in assets folder as given in the api."
);*/

/*fetching api*/
fetch("http://demo.tech2edge.co/samples/data-sg")
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
    displaydata(data);
  })
  .catch((error) => console.log(error));

/*display function*/
function displaydata(data) {
  const { title, ott, desc, img } = data.series;
  document.querySelector(".TITLE").innerHTML = title;
  document.querySelector(".PLATFORM").innerHTML = ott;
  document.querySelector(".DESCRIPTION").innerHTML = `" ${desc} "`;
  document.querySelector(".MAIN-IMAGE").src = img;

  /*adding cast*/
  for (var i = 0; i < data.characters.length; i++) {
    const { name, age, profession, img } = data.characters[i];
    const char = document.createElement("div");
    char.classList.add("col-lg-2");
    char.classList.add("col-sm-6");
    char.innerHTML = `
        <img class="castimg" src="${img}" alt="">
        <p class="castinfo"><strong>Name:</strong> ${name}<br><strong>Age:</strong> ${age}<br><strong>Profession:</strong> ${profession} </p>
      <br>`;
    document.querySelector(".CHARACTERS").appendChild(char);
  }
}
