# Figma to Code Project Plan

## Project Overview
A Next.js web application that allows users to generate iOS mobile app designs through prompts or image uploads, with the ability to convert the resulting Figma designs into production-ready Swift code.

## Key Features
1. **Prompt-to-Design**: Users can enter text prompts to generate Figma mobile UI designs
2. **Image-to-Design**: Users can upload images to be converted into editable Figma designs 
3. **Design-to-Code**: Convert Figma designs to production-ready Swift code
4. **Mobile UI Focus**: Specifically optimized for iOS mobile app interface design

## Tech Stack
- **Frontend**: Next.js 15+ with App Router architecture
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **API Routes**: Next.js API routes for serverless functions
- **Authentication & Storage**: Supabase for auth, database, and file storage
- **AI Model**: OpenRouter API with Claude 3.7 Sonnet
- **Design Tool Integration**: Figma API

## Architecture Overview

### Frontend
- Next.js App Router for routing and layouts
- React components for UI elements
- Tailwind for styling with custom design system
- Zustand for global state management
- Custom hooks for API integration

### Backend
- Next.js API routes for serverless endpoints
- Supabase for authentication, database and storage
- OpenRouter API integration for AI model access
- Figma API integration for design generation

### Database (Supabase)
- **Users**: User account information
- **Projects**: Saved design projects 
- **Designs**: Design versions and metadata
- **AIUsage**: Tracking API usage

### Storage (Supabase)
- User uploaded images
- Generated design assets
- Exported Swift code files

### Authentication (Supabase)
- Email/password authentication
- Social login (Google, GitHub)
- JWT token management

## Integration Flow
1. User inputs prompt or uploads image
2. Request is sent to OpenRouter API (Claude 3.7)
3. AI generates design specifications
4. Figma API creates design based on specifications
5. Design is displayed to user
6. User can edit or export design
7. When ready, design is analyzed and converted to Swift code
8. Swift code is presented to user for download

## Development Approach
- Modular component development
- Test-driven development
- Agile sprint methodology
- Progressive enhancement

## Deployment Strategy
- Vercel for Next.js hosting
- Supabase for backend services
- CI/CD pipeline via GitHub Actions

## Future Enhancements
- Support for Android UI design
- Design component library system
- Collaborative design editing
- Custom template creation
- Additional export formats (React Native, Flutter)
## Development Workflow

- Always check PLANNING.md and TASKS.md at the beginning of each work session
- Update TASKS.md to mark tasks as completed when finished
- Mark tasks as "in progress" when actively working on them
- Always get user approval before beginning the next task
- Follow the task sequence outlined in TASKS.md
- For complex tasks, create detailed implementation plans before starting
- When less than 85% certain about an implementation, research before proceeding
- Test each implementation thoroughly before marking as complete

## Research Methodology

- Use perplexity MCPs to search for documentation and information when needed
- Implement sequential thinking for complex implementation planning
- Create step-by-step plans for all major features
- Document useful research findings in code comments
- Consult iOS design guidelines for mobile UI implementation
- Research Swift best practices for code generation
