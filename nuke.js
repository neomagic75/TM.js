(function() {
  function initContextManager() {
    console.log("Context Manager Extension Initialized");

    const contextManagerDiv = document.createElement('div');
    contextManagerDiv.id = 'context-manager';
    contextManagerDiv.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      padding: 10px;
      z-index: 1000;
      color: #000000; // This ensures text is visible (black)
    `;
    contextManagerDiv.innerHTML = `
      <h3>Context Manager</h3>
      <p>Status: <span id="extension-status">Active</span></p>
      <button id="test-button">Test Button</button>
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
