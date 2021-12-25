function ChangeTab(tabId, event) {
    var tabContentContainer = document.getElementById('tab-content-container');
    var tabContents = tabContentContainer.querySelectorAll('div .tab-content');
    console.log(tabContents.length);
    for (var i = 0; i < tabContents.length; i++) {
        if (tabContents[i].id == tabId) {
            tabContents[i].style.display = 'block';
        } else {
            tabContents[i].style.display = 'none';
        }
    }
    try {
        RefreshNavTabBtn(event);
    }
    catch(e) { }
}

function RefreshNavTabBtn(event) {
    if (!event.target.classList.contains('nav-tab-btn')) return;
    var navTabs = document.getElementById('nav-tabs').querySelectorAll('.tab-container');
    for (var i = 0; i < navTabs.length; i++) {
        if (event.target.parentNode.id == navTabs[i].id) {
            event.target.classList.add('nav-tab-btn-active');
            navTabs[i].classList.add('nav-tab-active');
        } else {
            event.target.classList.remove('nav-tab-btn-active');
            navTabs[i].classList.remove('nav-tab-active');
        }
    }
}