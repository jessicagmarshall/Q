chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    // console.log(request.message)
    if (request.message === 'clicked_browser_action') {
      var firstHref = $("a[href^='http']").eq(0).attr('href')
      // console.log(firstHref)
      chrome.runtime.sendMessage({'message': 'open_new_tab', 'url': 'https://coinmarketcap.com/'})
    }
  }
)
