import { Router } from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.addBg("/", "url(./images/mountains-universe-1.png) no-repeat bottom center/cover")
router.addBg("/universe", "url(./images/mountains-universe02.png) no-repeat bottom center/cover")
router.addBg("/exploration", "url(./images/mountains-universe-3.png) no-repeat bottom center/cover")

router.toReplaceRoutes()
router.toReplaceBackground()

window.onpopstate = () => router.toReplaceRoutes()
window.route = () => router.route()