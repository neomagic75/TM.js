(function() {
  function initContextManager() {
    console.log("Context Manager Extension Initialized");

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
    
    // Sample context data (replace with actual data later)
    const contexts = {
      Logs: ['Mission Log', 'Side Hustle Log', 'NPC Log', 'Knowledge Log'],
      Briefs: ['Mission Brief', 'Side Hustle Brief', 'NPC Brief', 'Knowledge Brief']
    };

    let contextHTML = '<h3 style="margin-top: 0; margin-bottom: 10px;">Context Manager</h3>';
    
    for (const [category, items] of Object.entries(contexts)) {
      contextHTML += `<h4>${category}</h4>`;
      items.forEach(item => {
        contextHTML += `
          <div>
            <input type="checkbox" id="${item.replace(/\s+/g, '-')}" name="${item}">
            <label for="${item.replace(/\s+/g, '-')}">${item}</label>
          </div>
        `;
      });
    }

    contextHTML += `
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

    contextManagerDiv.innerHTML = contextHTML;
    document.body.appendChild(contextManagerDiv);

    document.getElementById('apply-context').addEventListener('click', function() {
      const selectedContexts = Array.from(document.querySelectorAll('#context-manager input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.name);
      alert('Selected contexts: ' + selectedContexts.join(', '));
      // TODO: Implement context injection logic here
    });
  }

  if (document.readyState === 'complete') {
    initContextManager();
  } else {
    window.addEventListener('load', initContextManager);
  }
})();
