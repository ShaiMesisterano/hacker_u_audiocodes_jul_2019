const sendMessage = async () => {
  const author = document.getElementById("author").value;
  const message = document.getElementById("message").value;
  const messagesEndpoint = "/api/message";
  const response = await fetch(messagesEndpoint, {
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

(async () => {
  const messagesEndpoint = "/api/messages";
  const response = await fetch(messagesEndpoint);
  const data = await response.json();
  // document.getElementById('messages').innerHTML = JSON.stringify(data);
  data.messages.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.author}: ${item.message}`;
    document.getElementById("messages").appendChild(li);
  });
})();
