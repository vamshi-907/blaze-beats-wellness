import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Blaze Beats Zumba Fitness Studio | Zumba, Weight Loss, PCOD & Thyroid Care – Mahbubnagar" },
      { name: "description", content: "Blaze Beats Zumba Fitness Studio in Padmavathi Colony, Mahbubnagar. Certified Zumba, HIIT, Yoga, Nutrition & specialised programs for PCOD, Thyroid and transparent weight loss. Call 93983 21142." },
      { name: "author", content: "Blaze Beats Zumba Fitness Studio" },
      { name: "keywords", content: "Zumba Mahbubnagar, Blaze Beats, Zumba fitness studio, PCOD weight loss, thyroid fitness, dance fitness, Padmavathi Colony gym, D Prashanth nutritionist" },
      { property: "og:title", content: "Blaze Beats Zumba Fitness Studio | Zumba, Weight Loss, PCOD & Thyroid Care – Mahbubnagar" },
      { property: "og:description", content: "Blaze Beats Zumba Fitness Studio in Padmavathi Colony, Mahbubnagar. Certified Zumba, HIIT, Yoga, Nutrition & specialised programs for PCOD, Thyroid and transparent weight loss. Call 93983 21142." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Blaze Beats Zumba Fitness Studio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#7c3aed" },
      { name: "twitter:title", content: "Blaze Beats Zumba Fitness Studio | Zumba, Weight Loss, PCOD & Thyroid Care – Mahbubnagar" },
      { name: "twitter:description", content: "Blaze Beats Zumba Fitness Studio in Padmavathi Colony, Mahbubnagar. Certified Zumba, HIIT, Yoga, Nutrition & specialised programs for PCOD, Thyroid and transparent weight loss. Call 93983 21142." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b5fcc36a-9b97-47ca-a12f-23085474acfb/id-preview-ee41fc5f--4102521f-ef1d-4d79-bfa7-b6efa0dd1970.lovable.app-1782303188538.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b5fcc36a-9b97-47ca-a12f-23085474acfb/id-preview-ee41fc5f--4102521f-ef1d-4d79-bfa7-b6efa0dd1970.lovable.app-1782303188538.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthClub",
          name: "Blaze Beats Zumba Fitness Studio",
          image: "https://blazebeats.example/og.jpg",
          telephone: "+91 93983 21142",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Ravindranagar, Padmavathi Colony",
            addressLocality: "Mahbubnagar",
            addressRegion: "Telangana",
            postalCode: "509001",
            addressCountry: "IN",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", reviewCount: "43" },
          priceRange: "₹₹",
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
