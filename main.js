function urlGenerator(domain) {
    // Возращает функцию, параметр domain замыкает в новой функции
    return function (url) {
        console.log(`https://${url}.${domain}`)
    }
}

urlGenerator("com")("google")
urlGenerator("com")("youtube")