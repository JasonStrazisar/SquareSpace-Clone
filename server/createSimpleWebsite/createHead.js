function connectStyleToPage(pageName){
    var styleSheetLink = `<link href="./styles/${pageName}.css" rel="stylesheet" >`
    return styleSheetLink;
}
function createPageTitle(siteName, pageName){
    var pageTitle = `<title>${siteName} - ${pageName}</title>`
    return pageTitle;
}
function createPageDescription(siteName, pageDescription){
    var description = `<meta name="description" content="${siteName} | ${pageDescription}" />`;
    return description;
}
function createPageFavicon(siteFavicon){
    var favicon = `<link rel="icon" href="${siteFavicon}"`;
    return favicon;
}
function createPageHead(websiteProperties, pageInfo){
    var head = [];
    head.push("<!DOCTYPE html> <html> <head>");
    head.push(createPageDescription(websiteProperties.name, pageInfo.description));
    if(websiteProperties.favicon){head.push(createPageFavicon(websiteProperties.favicon))};
    head.push(connectStyleToPage(pageInfo.name));
    head.push(createPageTitle(websiteProperties.name, pageInfo.name));
    head.push("</head>");

    return head.join('');
}

exports.createHead = createPageHead; 