# RedX

RedX is a Social Media application that integrates with Google authentication to provide a streamlined user sign-up and login process. After signing in with Google, users can set up their username and access the app's features.
Post thoughts, like a post, comment on a post, and search for users or posts using the search bar. The app's layout is responsive, adapting to different screen sizes, and includes a fixed sidebar and bottom bar for easy navigation.

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/redx.git
cd redx
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/home/page.tsx`. The page auto-updates as you edit the file.

## Features

- **Google Authentication**: Users sign in using their Google account.
- **Username Setup**: After signing in, users are prompted to choose a unique username.
- **Responsive Layout**: The app's layout adapts to different screen sizes, similar to Twitter's responsive design.
- **Sidebar and Bottom Bar**: Fixed sidebar and bottom bar for easy navigation, ensuring they are not scrollable while the main content scrolls.

## Environment Variables

To run this project, you will need to set up the following environment variables. Create a `.env.local` file in the root of your project and add the following:

```plaintext
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-next-auth-secret
DATABASE_URL=your-database-url
```

## Folder Structure

- `components/Home/Sidebar.tsx`: Sidebar component with navigation links.
- `components/Home/BottomBar.tsx`: Bottom bar component with navigation links.
- `components/Home/SearchBar.tsx`: Search bar component with integrated search functionality.

## Middleware

The middleware handles user authentication and redirects appropriately. Here is the middleware setup:

```typescript
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicPaths = ["/auth", "/api/auth/signin", "/auth/signin"];
  const isPublicPath = publicPaths.includes(path);
  const token = request.cookies.get("next-auth.session-token")?.value;

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/auth/signin", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/auth", request.nextUrl));
  }
}

export const config = {
  matcher: ["/home", "/api/auth/signin", "/auth", "/profile", "/"],
};
```

## API Endpoints

- **`/api/user`**: Checks if the user exists in the database.
- **`/api/signup`**: Handles user signup by creating a new user in the database.

### Example Usage in API Routes

```typescript
import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { username } = await req.json();
    
    if (!username) {
      return NextResponse.json({ error: "Username not given", status: 411 });
    }

    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found", status: 404 });
    }
    return NextResponse.json({ user, status: 200 });
  } catch (error: any) {
    return NextResponse.json({
      error: "Error on the server api/user",
      status: 500,
    });
  }
}
```

## Database Connection Management

To avoid the "Too many database connections" error, ensure you are using a singleton instance of the Prisma client:

```typescript
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

