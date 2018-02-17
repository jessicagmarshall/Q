// Called when the user clicks on the browser action.
chrome.tabs.onActivated.addListener(function (tab) {
  // Send a message to the active tab
  chrome.tabs.query({}, function (tabs) {
    console.log(tabs)
    // if you're not currently doing things on coinmarketcap
    if (tabs[0].url !== 'https://coinmarketcap.com/') {
      let i

      // check to see if there's a coinmarketcap instance open already
      for (i = 0; i < tabs.length; i++) {
        // if so, go there
        if (tabs[i].url === 'https://coinmarketcap.com/') {
          chrome.tabs.highlight({tabs: i}, function () {

            /////////// JUST FOR TESTING ///////////
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
              // check that this is coinmarketcap
              console.log('part 1', tabs[0].url)
            })
            /////////// JUST FOR TESTING ///////////

          })
        }
      }
      // at this point, if there is a coinmarketcap page, you're there
      // if you're still not there, get your butt there
      chrome.tabs.query({active: true, currentWindow: true}, function (newTabs) {
        if (newTabs[0].url !== ('https://coinmarketcap.com/' || 'chrome://newtab/')) {
          console.log('part 2', newTabs[0].url)
          chrome.tabs.create({'url': 'https://coinmarketcap.com/'})
        }
      })
    }
  })
})

//
// chrome.runtime.onMessage.addListener(
//   function (request, sender, sendResponse) {
//     if (request.message === 'open_new_tab') {
//       chrome.tabs.create({'url': request.url})
//     }
//   })
