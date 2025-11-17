data class UserProfile(val email: String?)

fun sendWelcome(profile: UserProfile?) {
    if (profile == null) {
        println("missing profile")
    }

    println("Sending welcome to ${profile!!.email!!.lowercase()}")
}

fun logToken(token: String?) {
    if (token == null) {
        println("no token provided")
    }

    println("token length = ${token!!.length}")
}

fun maybeAvatar(url: String?) {
    if (url == null) {
        println("avatar missing")
    }

    println("avatar host = ${url!!.substringBefore('.')}")
}
