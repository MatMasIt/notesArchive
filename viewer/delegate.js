/**
 * Listen to clicks on an element that matches the selector using only one event defined at root of the document.
 * Similar to jQuery .delegate() but faster.
 */
(function() {
  const delegationSelectorsMap = {};

  document.addEventListener('click', function (event) {
    let element = event.target;
    let forceBreak = false;

    while (element && element !== document.documentElement) {

      for (const selector in delegationSelectorsMap) {
        if (element.matches(selector)) {
          event.stopPropagation = function () {
            forceBreak = true;
          };

          const callbackList = delegationSelectorsMap[selector];
          callbackList.forEach(function (callback) { callback(element, event); });
        }
      }

      if (forceBreak) break;

      element = element.parentElement;
    }
  })

  window.delegate = function (selector, callback) {
    if (typeof selector === 'undefined' || selector === '') throw new Error('The provided selector is empty.');
    if (typeof callback === 'undefined' || typeof callback !== 'function') throw new Error('Specify an callback.');

    if (!delegationSelectorsMap[selector]) {
      // Add new selector to the list
      delegationSelectorsMap[selector] = [callback];
    }
    else {
      delegationSelectorsMap[selector].push(callback);
    }

    function unsubscribeFN () {
      if(!delegationSelectorsMap[selector]) return;

      if (delegationSelectorsMap[selector].length >= 2) {
        delegationSelectorsMap[selector] = delegationSelectorsMap[selector].filter(cb => cb !== callback);
      }
      else {
        delete delegationSelectorsMap[selector];
      }
    }

    return unsubscribeFN;
  }
})()
