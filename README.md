# NestJS Microservices Architecture Project

This project demonstrates the implementation of a microservices architecture using NestJS, based on the tutorial from the YouTube video "Microservices with NestJS" by Marius Espejo.

## Project Overview

The project showcases a microservices-based application with the following components:

- User Service
- Gateway
- Books Application

## Architecture

This application follows a microservices architecture, which allows for:

- Scalability: Each service can be scaled independently.
- Modularity: Services are loosely coupled, making it easier to maintain and update.
- Resilience: Failure in one service doesn't bring down the entire system.

## Technology Stack

- NestJS: A progressive Node.js framework for building efficient and scalable server-side applications.
- TypeScript: Enhances code quality and maintainability.

## Key Dependencies

- `@nestjs/common` and `@nestjs/core`: Core NestJS packages for building applications.
- `@nestjs/microservices`: Enables microservices architecture in NestJS.
- `@nestjs/platform-express`: Integrates Express.js with NestJS.
- `rxjs`: Reactive Extensions Library for JavaScript, used for handling asynchronous data streams.

## Development Dependencies

- `@nestjs/cli`: Command-line interface for NestJS development.
- `jest` and `@nestjs/testing`: For unit and integration testing.
- `eslint` and `prettier`: For code linting and formatting.
- `typescript`: For TypeScript support.

## Scripts

- `npm run build`: Build the application.
- `npm run start`: Start the application.
- `npm run start:dev`: Start the application in watch mode.
- `npm run test`: Run tests.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the application: `npm run start:dev`
