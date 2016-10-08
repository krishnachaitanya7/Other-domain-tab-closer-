chrome.browserAction.onClicked.addListener(function(tab) {

// script start
   var b={
    temp: {},
    getDomain: function(url) {
        return url.split(/\/+/g)[1];
    },
    closeTabsFromOtherDomain: function(tab) {
        b.temp.currentDomain = b.getDomain(tab.url);
        chrome.tabs.getAllInWindow(null, function(tabs) {
            for (var i = 0; i < tabs.length; i++) {
                var domain = b.getDomain(tabs[i].url);
                //if (b.temp.currentDomain !== domain && domain !== 'www.youtube.com') {
                if (domain !== 'quizlet.com' && domain !== 'www.youtube.com') {
                    chrome.tabs.remove(tabs[i].id, null);
                }
            }
        });
    }
    };  
    b.closeTabsFromOtherDomain(tab);


// script end
});
