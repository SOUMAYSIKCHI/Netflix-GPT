# NetflixGPT 🎥🔥

A movie recommendation app powered by **GPT-3.5 Turbo** integration! 🚀

---

## Features

### GPT Search
- Utilize the latest **GPT-3.5 Turbo API** for intelligent movie recommendations.

### Authentication
- **Sign Up**, **Log In**, and **Sign Out** functionality.
- Redirect users based on authentication status:
  - Redirect `/browse` to Login if not authenticated.
  - Redirect to `/browse` after successful login.

### Advanced UI/UX
- Built with **Tailwind CSS** for a modern and responsive design.
- Dynamic and responsive layout for seamless experience across devices.

### Form Handling
- Comprehensive **form validation** for secure and user-friendly interactions.

### Redux Toolkit
- Advanced data handling with **Redux Toolkit**.
- Manage user, movie, and GPT-related data with slices like `userSlice`, `movieSlice`, and `gptSlice`.

### Multi-Language Support
- Integrated multi-language feature to cater to diverse users.

### Memoization
- Optimize performance with React memoization techniques.

### API Integration
- Integrated **TMDB (The Movie Database) API** for:
  - Fetching "Now Playing" movies.
  - Getting movie trailers and details.
- Embedded YouTube video player with autoplay and mute features.

### Secure Configuration
- Used `.env` files to store and secure secret API keys.
- Added `.env` file to `.gitignore` for safety.

---

## Key Components

### Authentication
- **Login Form**: Handles user authentication.
- **Sign Up Form**: Allows users to create accounts.
- **Profile Updates**: Update display name and profile picture.
- Bug fixes to ensure smooth sign-up and login experience.

### Browse Page (After Authentication)
- **Header**: Navigation and branding.
- **Main Movie Section**:
  - Background trailer video.
  - Movie title and description.
  - GPT-powered movie suggestions.
- **Movie Lists**:
  - Fetch and display "Now Playing" movies.
  - Reusable Movie List and Movie Card components.

### NetflixGPT
- **Search Bar**: Intelligent GPT search functionality.
- **Movie Suggestions**:
  - Fetch movie suggestions using GPT.
  - Display suggestions from **TMDB API**.
  - Reuse Movie List component for suggestions.


---

## Future Enhancements
- Add user reviews and ratings for movies.
- Integrate social login (Google, Facebook, etc.).
- Advanced filtering and sorting options for movies.
- Implement dark mode.

---

Enjoy exploring **NetflixGPT**! 🎬

