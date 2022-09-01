class user {
    var id;
    var username;
    var password;
}

class userservice { // penamaan yang tidak camelCase harusnya adalah userService
    user[] users = [];

    user[] getallusers() { // penamaan yang tidak camelCase harusnya getAllUsers
        return users;
    }

    user getuserbyid(userid) { // penamaan yang tidak camelCase harusnya getUserByID, userID
        return users.filter(userid); // penamaan yang tidak camelCase harusnya userID
    }
}