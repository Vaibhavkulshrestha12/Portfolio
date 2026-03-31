# JOURNAL.

JOURNAL is a high-performance blogging platform designed for developers and technical writers who want a clean, fast, and modern writing environment. It strips away the noise of traditional social-media blogs and focuses on premium design, lightning-fast delivery, and a powerful administrative experience.

### Main Idea
The goal was to build a platform that feels as fluid as a local app but scales globally. Every reader visit is served from the network edge to keep latency near zero, while the admin experience remains live and reactive for pushing updates, managing media, and tracking engagement.

---

### Features

**For Readers**
*   **Edge Performance**: Every article is cached globally. Pages load instantly without waiting for a database.
*   **VS-Code Syntax Highlighting**: Technical articles look the way they should, with colored code blocks matching professional editors.
*   **Responsive Interaction**: A mobile-first layout that ensures long-form reading feels natural on any device, with no horizontal scrolling or cluttered sidebars.
*   **Discussion System**: Simple, anonymous engagement where readers can leave thoughts and reactions without jumping through registration hoops.

**For Admins**
*   **Integrated Markdown Editor**: A custom-built writing suite featuring image drag-and-drop, emoji pickers, and real-time formatting.
*   **Live Dashboard**: High-level metrics for total views and post performance, updated in real-time.
*   **Production Media Pipeline**: Images are automatically processed and stored in AWS S3 for long-term durability and fast delivery.
*   **Instant Revalidation**: When you hit publish or edit, the global cache for that page is surgically cleared and rebuilt so your changes are live everywhere immediately.

---

### Infrastructure & Technology

This is a full-stack implementation balancing speed with data durability:

*   **Core Logic**: Next.js 15 (using the App Router and Server Components).
*   **Database**: PostgreSQL via AWS RDS, managed with Prisma ORM.
*   **Styling**: Modern CSS via Tailwind and Shadcn/UI for a consistent, premium aesthetic.
*   **Storage**: AWS S3 for all blog media and assets.
*   **Authentication**: Secure admin access via NextAuth (aws cognito).
*   **Deployment**: Vercel for the frontend edge, with Terraform managing the underlying AWS infrastructure.
