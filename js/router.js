export class Router {
    routes = {}
    background = {}

    add(routeProperty, page){
        this.routes[routeProperty] = page
    }

    addBg(routeProperty, bg){
        this.background[routeProperty] = bg
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.toReplaceRoutes()
        this.toReplaceBackground()
    }

    toReplaceRoutes() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
        
        fetch(route)
            .then(data => data.text())
            .then(html => {
                document.querySelector('#content').innerHTML = html
            })
    }

    toReplaceBackground(){
        const { pathname } = window.location
        const bg = this.background[pathname]

        document.querySelector("body").style.background = bg
    }

}