const messagesEndpoint = "/api/messages";

const sendMessage = async () => {
  const author = document.getElementById("author").value;
  const message = document.getElementById("message").value;
  const messageEndpoint = "/api/message";
  const response = await fetch(messageEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ author, message })
  });
  const data = await response.json();
  console.log("data", data);
};

const search = async() => {
  const keywords = document.getElementById("keywords").value;
  const response = await fetch(`${messagesEndpoint}?q=${keywords}`);
  const data = await response.json();
  console.log("Search Results". data);
};

(() => {
  setInterval(async() => {
    const response = await fetch(messagesEndpoint);
    const data = await response.json();
    // document.getElementById('messages').innerHTML = JSON.stringify(data);
    document.getElementById("messages").innerHTML = "";
    data.messages.forEach(item => {
      const li = document.createElement("li");
      li.innerText = `${item.author}: ${item.message}`;
      document.getElementById("messages").appendChild(li);
    });
  }, 2000);
})();
