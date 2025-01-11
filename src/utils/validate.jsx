export function validate(email, password) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
  
    // Validate email
    if (!emailRegex.test(email)) {
      return "Email is not valid!";
    }
  
    // Validate password
    if (!passwordRegex.test(password)) {
      return "Password must be at least 8 characters long, contain at least one uppercase letter, and one special character.";
    }
  
    return null; // If both are valid
  }
  