# Next.js E-Commerce Store with Authentication

## Overview

This project is a Next.js-based e-commerce web application that utilizes Tailwind CSS for styling and the FakeStoreAPI for product data and authentication. The application provides users with the ability to browse and purchase products, view product details, and manage their shopping cart.

## Features

### Product Listing

- The application displays a list of products retrieved from the FakeStoreAPI.
- Users can view product details by clicking on a product card.

### Product Detail Page

- Each product has a dedicated detail page.
- On the product detail page, users can view product information, including the product name, description, price, and related products.

### Related Products

- The product detail page shows related products that users might be interested in.
- Related products are fetched from the FakeStoreAPI based on category or other criteria.

### Shopping Cart

- Users can add products to their shopping cart.
- The shopping cart is persisted using local storage, allowing users to keep items in their cart across sessions.
- Users can view the contents of their cart, update quantities, and remove items.

### Authentication

- Authentication is implemented using the FakeStoreAPI's authentication endpoint.
- Users can log in and log out of the application.
- username: "mor_2314",
- password: "83r5^_"

## Tech Stack

- Next.js: A React framework for building web applications.
- Tailwind CSS: A utility-first CSS framework for styling.
- FakeStoreAPI: A mock e-commerce API for product data and authentication.

## Installation

1. Clone this repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Start the development server with `npm run dev` or `yarn dev`.

## Usage

- Open the application in your web browser.
- Browse products, view product details, and add items to your cart.
- Log in to access additional features.
- Complete the purchase process.