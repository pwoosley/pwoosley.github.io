document.addEventListener("DOMContentLoaded", function() {
  const codeBlocks = document.querySelectorAll("pre.highlight");

  codeBlocks.forEach(block => {
    // Create copy button
    const button = document.createElement("button");
    button.className = "copy-button";
    button.setAttribute("type", "button");
    button.innerText = "Copy";

    // Copy code on click
    button.addEventListener("click", () => {
      const codeElement = block.querySelector("code");
      const code = codeElement ? codeElement.innerText : block.innerText;

      navigator.clipboard.writeText(code).then(() => {
        button.innerText = "Copied!";
        setTimeout(() => (button.innerText = "Copy"), 2000);
      });
    });

    // Insert the button at the start of <pre>
    block.style.position = "relative";
    block.insertBefore(button, block.firstChild);
  });
});
