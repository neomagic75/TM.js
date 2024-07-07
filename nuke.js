(function() {
  const contexts = {
    Logs: ['Mission Log', 'Side Hustle Log', 'NPC Log', 'Knowledge Log'],
    Briefs: ['Mission Brief', 'Side Hustle Brief', 'NPC Brief', 'Knowledge Brief']
  };

  function saveContexts() {
    localStorage.setItem('contextManagerData', JSON.stringify(contexts));
  }

  function loadContexts() {
    const savedContexts = localStorage.getItem('contextManagerData');
    if (savedContexts) {
      Object.assign(contexts, JSON.parse(savedContexts));
    }
  }

  function createCheckboxes() {
    let html = '';
    for (const [category, items] of Object.entries(contexts)) {
      html += `<h4>${category}</h4>`;
      items.forEach(item => {
        const id = `context-${category}-${item.replace(/\s+/g, '-')}`;
        html += `
          <div>
            <input type="checkbox" id="${id}" name="${item}">
            <label for="${id}">${item}</label>
          </div>
        `;
      });
    }
    return html;
  }

  function injectContext() {
    const selectedContexts = Array.from(document.querySelectorAll('#context-manager input[type="checkbox"]:checked'))
      .map(checkbox => checkbox.name);
    
    // This is a placeholder. We need to find the actual chat input element in TypingMind.
    const chatInput = document.querySelector('textarea[placeholder="Send a message"]');
    if (chatInput) {
      chatInput.value = `Selected contexts: ${selectedContexts.join(', ')}\n\n${chatInput.value}`;
    } else {
      console.error('Chat input not found');
    }
  }

  function initContextManager() {
    console.log("Context Manager Extension Initialized");
    loadContexts();

    const contextManagerDiv = document.createElement('div');
    contextManagerDiv.id = 'context-manager';
    contextManagerDiv.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background-color: #2c2c2c;
      border: 1px solid #444;
      padding: 10px;
      z-index: 1000;
      color: #ffffff;
      font-family: Arial, sans-serif;
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      max-height: 80vh;
      overflow-y: auto;
    `;
    
    contextManagerDiv.innerHTML = `
      <h3 style="margin-top: 0; margin-bottom: 10px;">Context Manager</h3>
      <p style="margin: 5px 0;">Status: <span id="extension-status">Active</span></p>
      ${createCheckboxes()}
      <button id="apply-context" style="
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        margin: 10px 2px;
        cursor: pointer;
        border-radius: 3px;
      ">Apply Context</button>
    `;
    document.body.appendChild(contextManagerDiv);

    document.getElementById('apply-context').addEventListener('click', injectContext);
  }

  if (document.readyState === 'complete') {
    initContextManager();
  } else {
    window.addEventListener('load', initContextManager);
  }
})();
