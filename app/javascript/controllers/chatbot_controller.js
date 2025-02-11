import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["output", "input", "form"]

  connect() {
    this.messages = [];
    this.appendMessage("system", "Welcome to the Rambo Chat! I'm Rambo, your feline expert on all things Violeta Petkovic. Curious about her education, professional experience, hobbies or secret talents? Ask away! If I don't have the answer (or just can't be bothered), you should ask her directly - she's the one with the thumbs, after all.");
  }

  async submit (event) {
    event.preventDefault();

    // get user input and return method if no input
    const csrfToken = document.querySelector("[name='csrf-token']").content
    let prompt = this.inputTarget.value.trim()

    if (prompt === "") return;

    // display user's message labeled with 'You'
    this.appendMessage("You", prompt);

    //clear input field after message is sent
    this.inputTarget.value = "";

    // send POST request to /chatbot/perform
    let response = await fetch("/chatbot/perform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // indicate that the body of the request will be in JSON format
        "X-CSRF-Token": csrfToken
      },
      body: JSON.stringify({ prompt: input }) // user's input is converted into a JSON string and included in request body
    });

    let data = await response.json(); //server's response is parsed into a JavaScript object
    this.appendMessage("Rambo", data.text); // display's Rambo's AI generated message labeled with 'Rambo'
  }

  // method to add a new message to the chat window
  appendMessage(sender, message) {
    let messageDiv = document.createElement("div"); // creates new div element that holds the message
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`; // sets how the content will be displayed


    this.outputTarget.appendChild(messageDiv); // appends new div to output target (container with chat messages)
    this.outputTarget.scrollTop = this.outputTarget.scrollHeight;  // scrolls chat window to the bottom so the latest message is always visible
  }
}
