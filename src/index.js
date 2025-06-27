import UI from 'novnc/app/ui.js';
import * as Log from 'novnc/core/util/logging.js';

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
    host: "127.0.0.1",
    port: 5901,
    path: "websockify",
    autoconnect: true,
    reconnect: true,
    logging: "warn",
    ...queryParams,
  };
  const mandatory = {};
  UI.start({ settings: { defaults, mandatory } });
//   Log.set_logging(defaults.logging || "warn");
  window.UI = UI;
})();
