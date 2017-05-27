$(function() {
        var openmodel = $('#open-modal');
        console.log(openmodel)
        if (openmodel.length == 0) {
                setTimeout(arguments.callee, 1000)
                return
        }
        var observer = new MutationObserver(function(mutations) {
                if (mutations.some(x =>
                                x.addedNodes &&
                                x.addedNodes instanceof NodeList &&
                                x.addedNodes.length > 0 &&
                                x.type == 'childList'
                        )) {
                        setTimeout(function() {
                                var imghref = $('#open-modal > div > div > div > div.js-embeditem.med-embeditem.is-loaded > div > div > div > div > a.js-media-image-link.block.med-link.media-item')
                                var baseurl = $('#open-modal > div > div > div > div.js-embeditem.med-embeditem.is-loaded > div > div > div > div > a.js-media-image-link.block.med-link.media-item > img').attr('src')
                                console.log(baseurl)
                                imghref.attr('href', baseurl)
                        }, 500)
                }
        });
        observer.observe(openmodel[0], { childList: true, subtree: true });
})
