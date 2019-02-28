module.exports = Object.freeze({
  // Events: WebContents
  WBRPC_WCE_DOM_READY: 'WBRPC_WCE_DOM_READY',
  WBRPC_WCE_DID_FRAME_FINISH_LOAD: 'WBRPC_WCE_DID_FRAME_FINISH_LOAD',
  WBRPC_WCE_DID_FINISH_LOAD: 'WBRPC_WCE_DID_FINISH_LOAD',
  WBRPC_WCE_DID_ATTACH_WEBVIEW: 'WBRPC_WCE_DID_ATTACH_WEBVIEW',

  // Events: Browser window
  WBRPC_BWE_FOCUS: 'WBRPC_BWE_FOCUS',
  WBRPC_BWE_BLUR: 'WBRPC_BWE_BLUR',
  WBRPC_BWE_ENTER_FULL_SCREEN: 'WBRPC_BWE_ENTER_FULL_SCREEN',
  WBRPC_BWE_LEAVE_FULL_SCREEN: 'WBRPC_BWE_LEAVE_FULL_SCREEN',
  WBRPC_BWE_MAXIMIZE: 'WBRPC_BWE_MAXIMIZE',
  WBRPC_BWE_UNMAXIMIZE: 'WBRPC_BWE_UNMAXIMIZE',
  WBRPC_BWE_DARK_MODE_CHANGED: 'WBRPC_BWE_DARK_MODE_CHANGED',

  // Events
  WBRPC_PERMISSION_REQUESTS_CHANGED: 'WBRPC_PERMISSION_REQUESTS_CHANGED',

  // Browser Window
  WBRPC_BW_CLOSE: 'WBRPC_BW_CLOSE',
  WBRPC_BW_MINIMIZE: 'WBRPC_BW_MINIMIZE',
  WBRPC_BW_MAXIMIZE: 'WBRPC_BW_MAXIMIZE',
  WBRPC_BW_UNMAXIMIZE: 'WBRPC_BW_UNMAXIMIZE',
  WBRPC_BW_SET_FULL_SCREEN: 'WBRPC_BW_SET_FULL_SCREEN',
  WBRPC_BW_IS_FOCUSED_SYNC: 'WBRPC_BW_IS_FOCUSED_SYNC',
  WBRPC_BW_IS_MAXIMIZED_SYNC: 'WBRPC_BW_IS_MAXIMIZED_SYNC',
  WBRPC_BW_IS_FULL_SCREEN_SYNC: 'WBRPC_BW_IS_FULL_SCREEN_SYNC',
  WBRPC_BW_IS_DARK_MODE_SYNC: 'WBRPC_BW_IS_DARK_MODE_SYNC',

  // WebContents
  WBRPC_WC_SEND_INPUT_EVENT: 'WBRPC_WC_SEND_INPUT_EVENT',
  WBRPC_WC_SEND_INPUT_EVENTS: 'WBRPC_WC_SEND_INPUT_EVENTS',
  WBRPC_WC_SHOW_ASYNC_MESSAGE_DIALOG: 'WBRPC_WC_SHOW_ASYNC_MESSAGE_DIALOG',
  WBRPC_WC_RESOLVE_PERMISSION_REQUEST: 'WBRPC_WC_RESOLVE_PERMISSION_REQUEST',

  // Wavebox
  WBRPC_OPEN_RECENT_LINK: 'WBRPC_OPEN_RECENT_LINK',
  WBRPC_OPEN_READING_QUEUE_LINK: 'WBRPC_OPEN_READING_QUEUE_LINK',
  WBRPC_SYNC_GET_INITIAL_HOST_URL: 'WBRPC_SYNC_GET_INITIAL_HOST_URL',
  WBRPC_SYNC_GET_GUEST_PRELOAD_CONFIG: 'WBRPC_SYNC_GET_GUEST_PRELOAD_CONFIG',
  WBRPC_SYNC_GET_EXTENSION_CS_PRELOAD_CONFIG: 'WBRPC_SYNC_GET_EXTENSION_CS_PRELOAD_CONFIG',
  WBRPC_SYNC_GET_EXTENSION_HT_PRELOAD_CONFIG: 'WBRPC_SYNC_GET_EXTENSION_HT_PRELOAD_CONFIG',
  WBRPC_GET_UPDATER_CONFIG: 'WBRPC_GET_UPDATER_CONFIG',
  WBRPC_OPEN_EXTERNAL: 'WBRPC_OPEN_EXTERNAL',
  WBRPC_SHOW_ITEM_IN_FOLDER: 'WBRPC_SHOW_ITEM_IN_FOLDER',
  WBRPC_OPEN_ITEM: 'WBRPC_OPEN_ITEM',
  WBRPC_SYNC_GET_PROXY_SETTINGS: 'WBRPC_SYNC_GET_PROXY_SETTINGS',
  WBRPC_SET_PROXY_SETTINGS: 'WBRPC_SET_PROXY_SETTINGS'
})