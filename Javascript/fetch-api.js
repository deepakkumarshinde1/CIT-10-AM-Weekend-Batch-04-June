var tbodyId = document.getElementById("tbody-id");
async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await response.json();

  let newArray = data.map(function (value, index) {
    var status = value.completed === true ? "Yes" : "No"; // ternary operators
    return `<tr>
                    <th scope="row">${value.id}</th>
                    <td>${value.userId}</td>
                    <td>${value.title}</td>
                    <td>${status}</td>
            </tr>`;
  });
  var newString = newArray.join("");
  tbodyId.innerHTML = newString;
}

getData();
