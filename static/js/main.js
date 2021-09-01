import dashboard from "./view/dashboard.js";

const navigateTo = url => {
    history.pushState(null, null, url)
    router();
}

const router = async () => {
    const routes = [
        {path: "/",
        view: dashboard},

     /*    {path: "/articles",
        view: "/articles"} */

    /*    {path: "/settings",
        view: () => console.log("On settings")} */
    ]

    // TEST ROUTES FOR MATCH
    const Matches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    }); 
    let matchFound = Matches.find(Match => Match.isMatch);

    if(!matchFound){
        matchFound = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new matchFound.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    console.log( new matchFound.route.view());
};


window.addEventListener("popstate", router)
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click",  e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href); 
        }
    })
    router();
});