var body = document.querySelector("body")

function getHeight() {
    var height = parseFloat(window.getComputedStyle(body).height)
    if (height < 800) {
        return height
    }
    return 800
}

function getWidth() {
    var width = parseFloat(window.getComputedStyle(body).width)
    if (width < 900) {
        return width
    }
    return 800
}
