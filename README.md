# KeenKeeper 👫

**Keep your friendships strong and never lose touch with people who matter most.**

KeenKeeper is an intuitive friendship management application designed to help you maintain meaningful connections with your friends. Track interactions, set contact goals, and never miss a moment that matters.

---

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Key Pages](#key-pages)
- [Contributing](#contributing)

---

## ✨ Key Features

### 🏠 **Home Page - Friends Dashboard**
- Browse all your friends in a beautiful 4-column grid layout
- Real-time status indicators (Overdue, Almost Due, On Track)
- Quick access to friend profiles
- Overview statistics

### 👤 **Friend Details Page**
- Profile card with bio, interests, email
- Stats cards and relationship goals
- Quick check-in buttons with toast notifications

### 📱 **Timeline Page**
- Complete interaction history
- Filter by type: Calls, Texts, Videos
- Chronological sorting

### 📊 **Stats Page**
- Pie chart visualization with Recharts
- Interaction analytics
- Detailed statistics

---

## 🛠️ Technologies Used

- **Next.js 16** - Web framework
- **Next.js** - UI components
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Recharts** - Charts & visualizations
- **Context API** - State management

---

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/keenkeeper.git
cd keenkeeper

# Install dependencies
npm install
npm install lucide-react recharts

# Run development server
npm run dev
```

Open (https://keen-keeper-green.vercel.app/) to view the app.

---

## 📖 Usage

1. **View Friends**: Home page displays all friends
2. **Check In**: Click friend card → use Quick Check-In buttons
3. **View Timeline**: See all interactions with filtering
4. **Analyze**: Visit Stats page for analytics

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.jsx              # Home
│   ├── friend/[id]/page.jsx  # Friend details
│   ├── timeline/page.jsx     # Timeline with filters
│   ├── stats/page.jsx        # Analytics
│   └── NotFound.jsx          # 404 page
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Banner.jsx
│   ├── FriendCard.jsx
│   ├── Loader.jsx
│   └── Toast.jsx
├── context/
│   └── FriendContext.jsx     # State management
└── data/
    └── friends.json          # Friend data
```

---

## ✅ Features Implemented

### Main Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Navbar with active state highlighting
- ✅ Friend cards with status indicators
- ✅ Friend detail page (2-column layout)
- ✅ Timeline with filters
- ✅ Stats page with pie chart
- ✅ Toast notifications
- ✅ Loading animation
- ✅ 404 page
- ✅ Beautiful footer

### Challenge Features
- ✅ Friendship analytics with Recharts
- ✅ Timeline filtering by interaction type
- ✅ Dark mode support
- ✅ Timeline sorting (newest first)

---

## 🚢 Deployment

Build and deploy to Vercel or any Node.js hosting:

```bash
npm run build
npm start
```

---

**Built with ❤️ to keep friendships strong**
