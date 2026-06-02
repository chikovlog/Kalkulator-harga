# Digital Clock with Multiple Timezones

A beautiful, responsive web application that displays the current time across multiple time zones in real-time.

## 🌍 Features

- **Real-time Clock**: Updates every second
- **Multiple Timezones**: 23+ predefined timezones
- **Add Custom Timezones**: Add any city with your preferred timezone
- **Persistent Storage**: Your custom clocks are saved to browser localStorage
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient design with smooth animations
- **24-Hour Format**: Clear time display in HH:MM:SS format

## 🚀 Quick Start

Simply open `index.html` in your browser - no installation needed!

```bash
# Clone the repository
git clone https://github.com/chikovlog/Kalkulator-harga.git
cd Kalkulator-harga/digital-clock

# Open in browser (or just double-click index.html)
open index.html
```

## 🌐 Supported Timezones

### Europe
- GMT (London)
- CET (Paris)
- EET (Cairo)
- MSK (Moscow)

### Asia
- GST (Dubai)
- PKT (Karachi)
- IST (India)
- BDT (Dhaka)
- ICT (Bangkok)
- SGT (Singapore)
- AWST (Perth)
- JST (Tokyo)

### Oceania
- AEST (Sydney)
- NZST (Auckland)

### Americas
- EST (New York)
- CST (Chicago)
- MST (Denver)
- PST (Los Angeles)
- AKST (Anchorage)
- HST (Honolulu)

### South America
- BRT (São Paulo)
- ART (Buenos Aires)

## 📝 How to Use

1. **View Default Clocks**: The app loads with 4 default clocks (UTC, India, Tokyo, New York)
2. **Add New Clock**: 
   - Enter a city name in the input field
   - Select a timezone from the dropdown
   - Click "Add Clock" or press Enter
3. **Remove Clock**: Click the "Remove" button on any clock card (if more than 1 clock exists)
4. **Persistent**: Your custom clocks are automatically saved

## 🎨 Design Highlights

- Gradient purple background
- Card-based layout for each timezone
- Hover effects with smooth transitions
- Mobile-responsive grid layout
- Clear typography with monospace font for time display

## 💾 localStorage

The app stores your custom clocks in the browser's localStorage under the key `customClocks`.

## 🔧 Customization

To modify default timezones or add more:

1. Edit the `timezones` array in the script section
2. Add new objects with: `{ name: 'TZ', offset: number, city: 'City' }`
3. Modify the `defaultClocks` array to change initial clocks

Example:
```javascript
{ name: 'AEST', offset: 10, city: 'Sydney' }
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

MIT License - Free to use and modify

## 🎯 Future Enhancements

- [ ] Analog clock display option
- [ ] Alarm functionality
- [ ] Sunset/Sunrise times
- [ ] 12-hour format toggle
- [ ] Dark mode
- [ ] Timezone search functionality
- [ ] Export/Import custom clocks

---

Enjoy tracking time across the world! ⏰🌍
