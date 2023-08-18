/**
 * @param {object} requestDetails
 */
function redirect(requestDetails) {
    const url = new URL(requestDetails.url);
    if (url.searchParams.has('w'))
        return {};
    url.searchParams.set('w', '1');
    return { redirectUrl: url.href };
}

browser.webRequest.onBeforeRequest.addListener(
    redirect,
    {
        urls: [
            "*://github.com/*/*/commit/*",
            "*://github.com/*/*/pull/*/files"
        ]
    },
    ["blocking"]
);
