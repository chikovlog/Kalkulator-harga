# Random Joke Generator

A fun, interactive web application that fetches random jokes from the **JokeAPI** and displays them with beautiful styling.

## 🎉 Features

- **Random Joke Generation**: Get jokes using the free JokeAPI
- **Multiple Categories**: General, Programming, and Knock-Knock jokes
- **Filter System**: Choose which types of jokes you want to see
- **Copy to Clipboard**: Easily copy jokes to share
- **Share Functionality**: Share jokes on social media
- **Joke Counter**: Track how many jokes you've loaded
- **Persistent Storage**: Stats saved in localStorage
- **Beautiful UI**: Modern gradient design with smooth animations
- **Responsive Design**: Works on all devices

## 🚀 Quick Start

Simply open `index.html` in your browser - no installation or API key needed!

```bash
# Clone repository
git clone https://github.com/chikovlog/Kalkulator-harga.git
cd Kalkulator-harga/joke-generator

# Open in browser
open index.html
```

## 📚 API Used

**JokeAPI** - Free API with no authentication required
- URL: `https://v2.jokeapi.dev/joke/{type}`
- Documentation: https://jokeapi.dev/

## 🎯 Joke Categories

- **General**: Clean, general-purpose jokes
- **Programming**: Tech and coding-related jokes
- **Knock-Knock**: Classic knock-knock jokes

## 🎨 Features Explained

### 1. Get Random Joke
Click the "Get Random Joke" button to fetch a new joke from the API.

### 2. Filter Jokes
Click "Show Filters" to toggle category filters and select which types of jokes you want.

### 3. Copy Joke
Click "Copy Joke" to copy the current joke to your clipboard.

### 4. Share Joke
Click "Share" to share the joke on your device (if supported).

## 💾 Data Storage

- Jokes are **not stored** locally (fetched fresh each time)
- **Joke count** is saved in localStorage under `jokeCount`
- Clear your browser data to reset the counter

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Joke Types

### Single-Part Jokes
```
Just displays one joke line
Example: "Why did the chicken cross the road?"
```

### Two-Part Jokes
```
Setup: "Why did the chicken cross the road?"
Punchline: "To get to the other side!"
```

## 🔑 Keyboard Shortcuts

- **Ctrl + Enter**: Get a new joke quickly

## 📦 No Dependencies!

This app uses only vanilla JavaScript and HTML/CSS. No frameworks or external libraries needed!

## 🛠️ Customization

To modify categories or API settings, edit the script section in `index.html`:

```javascript
const types = Array.from(selectedTypes).join(',');
const url = `https://v2.jokeapi.dev/joke/${types}?format=json`;
```

## ⚠️ Error Handling

- **Network Error**: Shows "Failed to fetch joke" message
- **No Results**: Shows "No jokes found" for selected filters
- **Copy Failed**: Gracefully handles clipboard errors

## 📱 Mobile Features

- Responsive button layout
- Touch-friendly interface
- Native share functionality
- Optimized for small screens

## 🎓 Learning Resources

This project demonstrates:
- Fetch API for external API calls
- Async/Await syntax
- DOM manipulation
- LocalStorage usage
- Error handling
- Responsive CSS Grid

## 📄 License

MIT License - Free to use and modify

## 🚀 Future Enhancements

- [ ] Dark mode
- [ ] Joke history
- [ ] Favorites list
- [ ] Different joke APIs
- [ ] Offline mode
- [ ] PWA support
- [ ] Multi-language jokes
- [ ] Custom joke categories

---

Get ready to laugh! 😂😆
