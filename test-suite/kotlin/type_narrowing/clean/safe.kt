data class UserProfile(val email: String?)

fun sendWelcome(profile: UserProfile?): String {
    val ensured = profile ?: return "missing profile"
    return ensured.email?.lowercase() ?: "missing email"
}

fun logToken(token: String?): Int {
    val value = token ?: run {
        println("no token, skipping")
        return 0
    }
    return value.length
}

fun maybeAvatar(url: String?): String {
    val target = url ?: throw IllegalStateException("avatar required")
    return target.substringBefore('.')
}
