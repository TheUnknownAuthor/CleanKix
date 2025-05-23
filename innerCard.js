// profile.js

// Example user data
  
  // Get the user from URL (e.g., profile.html?user=alice)
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("user");
  
  // Load user data
  const user = shoes[userId];
  
  if (user) {
    document.getElementById("username").textContent = user.name;
    document.getElementById("ETA").textContent = user.ETA;
  } else {
    document.body.innerHTML = "<h1>User not found</h1>";
  }