# 🎫 QueBoleta

A modern, full-stack ticket selling platform built with cutting-edge technologies. Buy and manage your event tickets seamlessly with a sleek user interface and robust backend infrastructure.

## 🚀 Tech Stack

- **Frontend**: React (Vite)
- **Backend**: NestJS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **API**: RESTful

## ✨ Features

- 🎟️ Browse and purchase event tickets
- 👤 User authentication and profiles
- 💳 Secure payment processing
- 📱 Responsive design
- ⚡ Real-time inventory management
- 📊 Admin dashboard for ticket management
- 🔐 Role-based access control

## 📋 Prerequisites

Before you begin, make sure you have installed:

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL (v12 or higher)
- Git

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/queboleta.git
cd queboleta
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Configure your environment variables (update with your actual values):

```env
DATABASE_URL="postgresql://user:password@localhost:5432/ticket_sales_db"
JWT_SECRET="your_jwt_secret_key_here"
JWT_EXPIRATION="24h"
NODE_ENV="development"
PORT=3001
```

Set up the database:

```bash
npx prisma migrate dev --name init
```

Generate Prisma client:

```bash
npx prisma generate
```

Start the backend server:

```bash
npm run start:dev
```

The backend will run on `http://localhost:3001`

### 3. Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```bash
cp .env.example .env
```

Configure your environment variables:

```env
VITE_API_URL="http://localhost:3001/api"
VITE_APP_NAME="Ticket Sales"
```

Start the development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 📦 Database Schema

The app uses Prisma ORM with PostgreSQL. Key models include:

- **User**: Customer and admin accounts
- **Event**: Concert, theater, sports events, etc.
- **Ticket**: Individual tickets for sale
- **Order**: Customer purchases
- **Category**: Event categories

Run migrations:

```bash
npx prisma migrate dev
```

View the database:

```bash
npx prisma studio
```

## 🎮 Available Commands

### Backend

```bash
# Development mode with hot reload
npm run start:dev

# Build for production
npm run build

# Start production build
npm run start:prod

# Run tests
npm run test

# Run linting
npm run lint

# Format code
npm run format

# Database migrations
npx prisma migrate dev
npx prisma migrate deploy
npx prisma migrate reset
```

### Frontend

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Format code
npm run format
```

## 🔧 Environment Variables

### Backend (.env)

```env
DATABASE_URL=postgresql://user:password@localhost:5432/ticket_sales_db
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRATION=24h
NODE_ENV=development
PORT=3001
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_NAME=Ticket Sales
```

## 🗄️ Database Management

### Create a new migration

```bash
npx prisma migrate dev --name migration_name
```

### Reset the database (⚠️ deletes all data)

```bash
npx prisma migrate reset
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Open Prisma Studio (GUI for database)

```bash
npx prisma studio
```

## 🚀 Deployment

### Backend (Heroku/Railway/Vercel)

```bash
npm run build
npm start
```

### Frontend (Vercel/Netlify)

```bash
npm run build
# Deploy the dist folder
```

## 📝 API Documentation

Base URL: `http://localhost:3001/api`

### Authentication

- `POST /auth/register` - Create new account
- `POST /auth/login` - Login user
- `POST /auth/refresh` - Refresh JWT token

### Events

- `GET /events` - Get all events
- `GET /events/:id` - Get event details
- `POST /events` - Create event (admin)
- `PUT /events/:id` - Update event (admin)

### Tickets

- `GET /tickets` - Get available tickets
- `POST /orders` - Purchase tickets
- `GET /orders` - User's purchase history

## 🐛 Troubleshooting

### Database connection error

```bash
# Check if PostgreSQL is running
# Verify DATABASE_URL in .env
# Try resetting migrations
npx prisma migrate reset
```

### Port already in use

```bash
# Backend (change PORT in .env)
# Frontend (Vite will suggest alternative port)
```

### Prisma Client not found

```bash
npx prisma generate
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Support

For support, email support@queboleta.com or open an issue in the GitHub repository.

---

**Made with ❤️ by the QueBoleta Team**
