function createWebsiteLogo(logo){
    var logoLink = '';

    logoLink = `<a class="header-logo" href="./index.html"><img src="${logo}" alt="Website logo"/></a>`
    return logoLink;
}

function createWebsiteName(name){
    var websiteName = ''
    websiteName = `<a class="header-name" href="./index.html"><h3>${name}</h3> </a>`;
    return websiteName;
}

function createNavBar(pages, activePage){
    const navBar = [];
    
    pages.forEach(page => {
        navBar.push(createNavItem(page, activePage));
    });

    return navBar.join('');
}

function createNavItem(page, activePage){
    var navItem = '';
    if(activePage === page.title){
        navItem = `<a class="nav-item active" href="./${page.link}.html">${page.title}</a>`
        return navItem;
    }
    navItem = `<a class="nav-item" href=./${page.link}.html>${page.title}</a>`
    return navItem;
}

function createWebsiteHeader(websiteProperties, pages, activePage){
    
    const headerContent = [];


    headerContent.push(`<header>`)
    if(websiteProperties.logo){headerContent.push(createWebsiteLogo(websiteProperties.logo))};
    if(websiteProperties.name){headerContent.push(createWebsiteName(websiteProperties.name))};
    if(pages){headerContent.push(createNavBar(pages, activePage))};
    headerContent.push(`</header>`)
    return headerContent.join('');

}

exports.createHeader = createWebsiteHeader; 