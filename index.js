// const $app = document.querySelector("#app");
// const $div = document.createElement("div");

const getMoreInfo = async (id) => {
    try {
      const response = await fetch(
        `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-FTB-CT-WEB-PT/events/${id}`
      );
      const object = await response.json();
      console.log(object.data);
      displayOneResults(object.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const displayOneResults = (result) => {
    $app = document.querySelector("#app");
    $h1 = document.createElement("h1");
    $h1.textContent = result.name;
    $h2 = document.createElement("h2");
    $h2.textContent = result.data;
    $app.append($h1);
  };
  
  const displayResults = (characters) => {
    $app = document.querySelector("#app");
    $h1 = document.createElement("h1");
    $h1.textContent = "Party Planner";
    $app.append($h1);
    for (const element of characters) {
      $div = document.createElement("div");
      $h2 = document.createElement("h2");
      //$h2.textContent = element.name;
      $button = document.createElement("button");
      $button.textContent = element.name;
      $button.addEventListener("click", () => getMoreInfo(element.id));
      $h3 = document.createElement("h3");
      $h3.textContent = "Party Details";
      $div.append($h2);
      $div.append($h3);
      $div.append($button);
      $app.append($div);
    }
  };
  
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-FTB-CT-WEB-PT/events"
      );
      const data = await response.json();
      console.log(data);
      displayResults(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const start = () => {
    console.log("I am in the start function");
    fetchData();
  };
  
  start();