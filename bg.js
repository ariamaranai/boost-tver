chrome.omnibox.onInputEntered.addListener(q =>
  chrome.tabs.update({
    url: "https://tver.jp/search/" + q
  })
);