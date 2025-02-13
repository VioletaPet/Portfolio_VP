// import { Controller } from "@hotwired/stimulus";

// export default class extends Controller {
//   static targets = ["output", "input", "form"];

//   connect() {
//     console.log("Stimulus controller connected!");
//     this.appendMessage("Rambo", "Welcome to the Rambo Chat! I am Rambo your feline expert in everything about Violeta Petkovic. Want to know more about her? Ask away!");
//   }

//   async submit(event) {
//     event.preventDefault();

//     const prompt = this.inputTarget.value.trim();
//     if (prompt === "") return;

//     this.appendMessage("You", prompt);
//     this.inputTarget.value = ""; // clearing the input field

//     const typing = this.appendMessage("Rambo", "Considering whether I wants to respond...")

//     try {
//       // sending POST request to /chatbot/perform endpoint
//       const response = await fetch("/chatbot/perform", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRF-Token": document.querySelector("[name='csrf-token']").content
//         },
//         body: JSON.stringify({ user_prompt: prompt })
//       });

//       if (!response.ok) throw new Error(`HTTP error! ${response.status} - ${response.statusText}`);
//       const data = await response.json();
//       this.appendMessage("Rambo", data.text);
//     } catch (error) {
//       console.error("Error:", error);
//       this.appendMessage("Rambo", "Sorry, I encountered an error. Please try again.");
//     }
//   }

//   appendMessage(sender, message) {
//     const messageDiv = document.createElement("div");
//     messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;

//     this.outputTarget.appendChild(messageDiv);
//     this.outputTarget.scrollTop = this.outputTarget.scrollHeight;
//   }
// }
