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
    `;
    contextManagerDiv.innerHTML = `
      <h3 style="margin-top: 0; margin-bottom: 10px;">Context Manager</h3>
      <p style="margin: 5px 0;">Status: <span id="extension-status">Active</span></p>
      <button id="test-button" style="
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 3px;
      ">Test Button</button>
    `;
    document.body.appendChild(contextManagerDiv);

    document.getElementById('test-button').addEventListener('click', function() {
      alert('Context Manager Extension is working!');
    });
  }

  if (document.readyState === 'complete') {
    initContextManager();
  } else {
    window.addEventListener('load', initContextManager);
  }
})();
