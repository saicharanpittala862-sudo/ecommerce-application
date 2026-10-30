function registerUser(name, email, password) {
    return "User registered: " + name;
}

function loginUser(email, password) {
    return "User login successful";
}

console.log(registerUser("Ram", "ram@gmail.com", "123456"));