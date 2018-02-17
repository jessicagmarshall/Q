chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === 'loaded_page') {
      console.log('loaded page')
      // chrome.runtime.sendMessage({'message': 'open_new_tab', 'url': 'https://coinmarketcap.com/'})
    }
  }
)
