function user(...userData) {
  return userData.reduce((total, n) => total + n, 5);
}

console.log(user(5, 10, 15));
