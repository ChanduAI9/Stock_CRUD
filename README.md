# Stock_CRUD

Here’s a sample `README.md` file for your Django project integrated with PostgreSQL. This will guide anyone who wants to set up and run your project locally.

```markdown
# Stock Manager Application

A simple full-stack web application for managing stocks. The application allows users to add, view, edit, and delete stocks using a Django Rest Framework backend and a Bootstrap-enhanced frontend. PostgreSQL is used as the database for this project.

## Features
- Add, view, edit, and delete stock records.
- Responsive design using Bootstrap.
- Fully functional API for stock management (Django Rest Framework).
- PostgreSQL database integration.

## Tech Stack
- Backend: Django, Django Rest Framework
- Database: PostgreSQL
- Frontend: HTML, CSS (Bootstrap), JavaScript (Fetch API)
- Environment: Python 3.x

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- Python 3.x: [Download Python](https://www.python.org/downloads/)
- PostgreSQL: [Download PostgreSQL](https://www.postgresql.org/download/windows/)
- Git: [Download Git](https://git-scm.com/downloads)
- pip (Python package installer)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/stock-manager.git
   cd stock-manager
   ```

2. **Create and activate a virtual environment**:
   ```bash
   python -m venv venv
   venv\Scripts\activate  # For Windows
   ```

3. **Install the project dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

### Database Setup

1. Install PostgreSQL:
   - Download and install PostgreSQL from [PostgreSQL Download Page](https://www.postgresql.org/download/windows/).
   - Set up a PostgreSQL user and a database.

2. Create a PostgreSQL Database:
   - Open `psql` or **pgAdmin 4** and run the following commands to create a user and database:
     ```sql
     CREATE USER myuser WITH PASSWORD 'mypassword';
     CREATE DATABASE mydatabase;
     GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;
     ```

3. **Update Django `settings.py`**:
   - Open the `stock_project/settings.py` file and modify the `DATABASES` configuration to match your PostgreSQL setup:
     ```python
     DATABASES = {
         'default': {
             'ENGINE': 'django.db.backends.postgresql',
             'NAME': 'mydatabase',  # Replace with your PostgreSQL database name
             'USER': 'myuser',      # Replace with your PostgreSQL username
             'PASSWORD': 'mypassword',  # Replace with your PostgreSQL password
             'HOST': 'localhost',
             'PORT': '5432',
         }
     }
     ```

4. **Apply Migrations**:
   - After configuring the database, apply the database migrations to set up the necessary tables:
     ```bash
     python manage.py makemigrations
     python manage.py migrate
     ```

### Run the Application

1. **Start the Django development server**:
   ```bash
   python manage.py runserver
   ```

2. Open your browser and visit `http://127.0.0.1:8000/` to see the application.

---

## API Endpoints

The following API endpoints are available for managing stocks:

- **GET** `/api/stocks/`: Retrieve a list of all stocks.
- **POST** `/api/stocks/`: Create a new stock (requires JSON payload with `name`, `ticker_symbol`, and `price`).
- **PUT** `/api/stocks/{id}/`: Update an existing stock (requires JSON payload with `name`, `ticker_symbol`, and `price`).
- **DELETE** `/api/stocks/{id}/`: Delete a stock by its ID.

### Sample JSON Payload
```json
{
    "name": "Apple",
    "ticker_symbol": "AAPL",
    "price": "150.00"
}
```

---

## Frontend Features

- **Add Stock**: Users can fill out a form to add a new stock.
- **Edit Stock**: Edit any stock’s details directly from the list.
- **Delete Stock**: Delete any stock using the delete button.
- **Responsive Design**: The frontend is styled with Bootstrap for a responsive and clean look.

---


