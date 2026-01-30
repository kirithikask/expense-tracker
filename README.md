# Expense Tracker - MERN Stack Application

A sleek, modern expense tracking web application built with the MERN stack (MongoDB, Express.js, React, Node.js). Features a dark-themed UI with teal accents, responsive design, and intuitive user experience.

## Features

### 🎨 Modern UI/UX
- Dark theme with glowing teal accents
- Responsive design (mobile & desktop)
- Swipeable card panels with carousels
- Smooth animations and transitions
- Premium fintech-inspired design

### 💰 Financial Management
- **Expense Tracking**: Add, edit, delete expenses with categories
- **Budget Management**: Set budgets and track spending progress
- **Reports**: Monthly and summary financial reports
- **Categories**: Pre-defined expense categories (Food, Transportation, etc.)

### 🔐 Security & Authentication
- JWT-based user authentication
- Secure password hashing
- Protected API routes
- User registration and login

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### Frontend
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **React Router** - Client-side routing
- **Swiper** - Touch slider/carousel
- **React Context** - State management

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or cloud service like MongoDB Atlas)
- npm or yarn package manager

## Efficient Financial Management

The Budget Bae application enables users to track expenses, manage budgets, and review financial records in a centralized platform.
The system is designed to be user-friendly, secure, and efficient for personal finance management.

## Running the Application

### Development Mode

1. **Start Backend Server**
   ```bash
   cd server
   npm run dev
   ```
   Server will run on http://localhost:5000

2. **Start Frontend Development Server**
   ```bash
   cd client
   npm start
   ```
   Frontend will run on http://localhost:3000

### Production Mode

1. **Build Frontend**
   ```bash
   cd client
   npm run build
   ```

2. **Start Backend**
   ```bash
   cd server
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Expenses
- `GET /api/expenses` - Get all user expenses
- `POST /api/expenses` - Add new expense
- `PUT /api/expenses/:id` - Update expense
- `DELETE /api/expenses/:id` - Delete expense

### Budgets
- `GET /api/budgets` - Get all user budgets
- `POST /api/budgets` - Add new budget
- `PUT /api/budgets/:id` - Update budget
- `DELETE /api/budgets/:id` - Delete budget

### Reports
- `GET /api/reports/summary` - Get expense summary
- `GET /api/reports/monthly?year=2024&month=1` - Get monthly report

## Project Structure

```
expense-tracker/
├── server/                 # Backend
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── server.js          # Main server file
│   └── package.json
├── client/                # Frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   ├── public/
│   └── package.json
├── README.md
└── TODO.md
```

## Usage

1. **Register**: Create a new account
2. **Login**: Sign in with your credentials
3. **Dashboard**: View expense overview and quick stats
4. **Add Expenses**: Log your spending with categories
5. **Set Budgets**: Create spending limits for categories
6. **View Reports**: Analyze your financial data

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For questions or issues, please open an issue on GitHub.
