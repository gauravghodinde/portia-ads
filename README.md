# SalesShortcut AI - Master Content Production System

SalesShortcut AI is an advanced, AI-powered orchestrator designed to automate the entire lifecycle of content production. From deep market research to multi-format content generation (articles, podcasts, videos) and final publishing, this system leverages the Portia SDK to manage complex, multi-agent workflows.

## 🚀 Key Features

*   **Comprehensive Market Research**: Autonomous agents analyze market trends, audience demographics, and high-performing topics using **Tavily**.
*   **Strategic Content Planning**: Generates data-driven content strategies and editorial calendars tailored to your brand guidelines.
*   **Multi-Format Creation**:
    *   **Articles**: Professional-grade articles with automated fact-checking and SEO optimization.
    *   **Podcasts**: Scripting and audio production using **ElevenLabs** for realistic AI voices.
    *   **Videos**: Educational video scripts and production workflows for platforms like YouTube.
*   **Quality Assurance**: Automated fact-checking and "Human-in-the-Loop" approval gates ensure high-quality, brand-safe output.
*   **Multi-Platform Publishing**: seamless distribution to WordPress, LinkedIn, Twitter, and other platforms.

## 🛠️ Technical Stack

### Backend
*   **Language**: Python 3.11+
*   **Orchestration**: [Portia SDK](https://github.com/portia-ai/portia-sdk) (Agentic Workflow Management)
*   **API Framework**: FastAPI / Flask
*   **AI & ML Services**:
    *   **Tavily**: Web search and research.
    *   **ElevenLabs**: Text-to-Speech for podcasts.
*   **Infrastructure**:
    *   **Database**: SQLAlchemy (ORM) + Alembic (Migrations)
    *   **Task Queue**: Celery + Redis
*   **Utilities**: Pandas, BeautifulSoup4, PyPDF2

### Frontend
*   **Framework**: React 19
*   **Language**: TypeScript
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS (implied structure)

## 📂 Project Structure

```
├── app.py                  # Main application entry point & Master Plan definition
├── app_api.py              # API endpoints for the frontend
├── agents/                 # Specialized AI agent definitions
│   ├── research_plans.py   # Market research logic
│   ├── content_plans.py    # Article writing & planning
│   ├── podcast_plans.py    # Audio content production
│   └── ...
├── frontend/               # React + TypeScript web interface
└── pyproject.toml          # Python dependencies and configuration
```

## 🚀 Getting Started

### Prerequisites
*   Python 3.11 or higher
*   Node.js & npm (for frontend)
*   Redis server (for background tasks)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portia-ads.git
    cd portia-ads
    ```

2.  **Backend Setup**
    ```bash
    # Install dependencies
    pip install .
    
    # Or install dev dependencies
    pip install .[dev]
    ```

3.  **Frontend Setup**
    ```bash
    cd frontend
    npm install
    ```

4.  **Environment Configuration**
    Create a `.env` file in the root directory with your API keys:
    ```env
    PORTIA_API_KEY=your_key
    TAVILY_API_KEY=your_key
    ELEVENLABS_API_KEY=your_key
    OPENAI_API_KEY=your_key
    ```

5.  **Run the Application**
    *   Start Backend: `python app_api.py` (or `uvicorn app_api:app --reload`)
    *   Start Frontend: `cd frontend && npm run dev`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
