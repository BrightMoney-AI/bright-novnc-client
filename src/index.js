import UI from 'novnc/app/ui.js';

function parseQueryFromURL() {
  const queryString = window.location.hash.substring(1) || window.location.search.substring(1);
  const params = {};
  queryString.split('&').forEach(part => {
    const [key, value] = part.split('=');
    if (key) params[decodeURIComponent(key)] = decodeURIComponent(value || '');
  });
  return params;
}

(async () => {
  const queryParams = parseQueryFromURL();
  const defaults = {
    autoconnect: true,
    reconnect: true,
    ...queryParams,
  };
  const mandatory = {};
  UI.start({ settings: { defaults, mandatory } });
  window.UI = UI;
  window.gestureQueue = [];
  window.enqueueGesture = function(type, val) {
      const now = Date.now();
      const id = `${type}-${now}-${val}`;

      const gesture = {
          id,
          type,
          sentAt: now,
          flushed: false,
          timeoutId: setTimeout(() => {
          // Remove gesture if no flush happened in 1500ms
          window.gestureQueue = window.gestureQueue.filter(g => g.id !== id);
          }, 1500),
          ...(val ? {
              value: val,
          }: {})
      };
      window.gestureQueue.push(gesture);
  }
})();
