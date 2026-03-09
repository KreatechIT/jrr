export default function BlogRootLayout({
  children,
  pageTitle,
  pageDescription,
}) {
  const title = pageTitle || "JR Enterprise";
  const description = pageDescription || "JR Enterprise";

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>{children}</body>
    </html>
  );
}
