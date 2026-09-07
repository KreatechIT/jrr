# Blog API

Public, read-only endpoints for the blog. No authentication required.

Base URL: `/api/blog`

---

## 1. List Posts

```
GET /api/blog
```

Returns published posts only, newest first (by `published_at`). This endpoint does **not** include the full post body/content — use the detail endpoint (below) for that.

### Query Parameters

| Param       | Type | Default | Notes                        |
|-------------|------|---------|-------------------------------|
| `page`      | int  | 1       | Page number                  |
| `page_size` | int  | 10      | Max 50                       |

### Example Request

```
GET /api/blog?page=1&page_size=10
```

### Example Response

```json
{
  "count": 227,
  "next": "http://localhost/api/blog?page=2&page_size=10",
  "previous": null,
  "results": [
    {
      "title": "What Electronics Contain the Most Gold? Recovery of Noble Metals from Electronics",
      "slug": "what-electronics-contain-the-most-gold-recovery-of-noble-metals-from-electronics",
      "excerpt": "A look at which electronic devices contain recoverable gold and other noble metals...",
      "short_description": "To the present day, one of the most valuable and expensive noble metals in the world is gold. The value of gold never decreased, rather it is increasing day by day.",
      "featured_image_url": "http://localhost/storage/blog/2025/06/gold-recovery.jpg",
      "featured_image_alt": "Gold-plated circuit board components",
      "published_at": "2025-06-12T00:00:00+00:00",
      "categories": [
        { "name": "E-Waste Recycling", "slug": "e-waste-recycling" }
      ]
    }
  ]
}
```

### Response Fields

| Field                        | Type          | Notes                                    |
|-------------------------------|---------------|-------------------------------------------|
| `count`                       | int           | Total published posts                     |
| `next`                        | string / null | Full URL to next page, or `null`           |
| `previous`                    | string / null | Full URL to previous page, or `null`       |
| `results`                     | array         | List of posts (see below)                  |
| `results[].title`             | string        |                                            |
| `results[].slug`              | string        | Use with the detail endpoint               |
| `results[].excerpt`           | string / null |                                            |
| `results[].short_description` | string / null | One or two sentence plain-text summary     |
| `results[].featured_image_url`| string / null |                                            |
| `results[].featured_image_alt`| string / null |                                            |
| `results[].published_at`      | string / null | ISO 8601                                   |
| `results[].categories`        | array         | `{ name, slug }` objects                   |

---

## 2. Post Detail

```
GET /api/blog/{slug}
```

Returns a single published post. Returns `404` if the slug doesn't exist or the post isn't published.

### Example Request

```
GET /api/blog/what-electronics-contain-the-most-gold-recovery-of-noble-metals-from-electronics
```

### Example Response

```json
{
  "data": {
    "title": "What Electronics Contain the Most Gold? Recovery of Noble Metals from Electronics",
    "slug": "what-electronics-contain-the-most-gold-recovery-of-noble-metals-from-electronics",
    "h1_title": null,
    "excerpt": "A look at which electronic devices contain recoverable gold and other noble metals...",
    "body": "<p>To the present day, one of the most valuable and expensive noble metals in the world is gold...</p>\n\n<h2 class=\"wp-block-heading\">Why is Gold Used in Electronics?</h2>\n\n<p>For many years, gold has been crucial to the electronics industry...</p>",
    "content_blocks": null,
    "featured_image_url": "http://localhost/storage/blog/2025/06/gold-recovery.jpg",
    "featured_image_alt": "Gold-plated circuit board components",
    "published_at": "2025-06-12T00:00:00+00:00",
    "categories": [
      { "name": "E-Waste Recycling", "slug": "e-waste-recycling" }
    ],
    "seo": {
      "meta_title": "What Electronics Contain the Most Gold?",
      "meta_description": "A look at which electronic devices contain recoverable gold...",
      "focus_keyword": "gold recovery from electronics",
      "meta_robots": "index,follow",
      "og_title": null,
      "og_description": null,
      "og_image_url": null,
      "schema_output": "enabled",
      "primary_schema_type": null
    }
  }
}
```

### Response Fields

| Field                        | Type          | Notes                                    |
|-------------------------------|---------------|--------------------------------------------|
| `title`                       | string        |                                             |
| `slug`                        | string        |                                             |
| `h1_title`                    | string / null | Overrides `title` for display H1 if set    |
| `excerpt`                     | string / null |                                             |
| `body`                        | string        | Full post content as a raw HTML string (`<p>`, `<h2>`/`<h3>`, `<ul>`/`<ol>`, `<a>`, `<img>`, `<blockquote>`, `<table>`, etc.). Render it directly as HTML on the frontend — do not treat it as plain text or Markdown. |
| `content_blocks`              | array / null  | Structured extra blocks (quotes, FAQs, etc.)|
| `featured_image_url`          | string / null |                                             |
| `featured_image_alt`          | string / null |                                             |
| `published_at`                | string / null | ISO 8601                                   |
| `categories`                  | array         | `{ name, slug }` objects                   |
| `seo.meta_title`               | string / null |                                             |
| `seo.meta_description`         | string / null |                                             |
| `seo.focus_keyword`            | string / null | Primary SEO keyword/phrase                 |
| `seo.meta_robots`              | string        | e.g. `index,follow`                        |
| `seo.og_title`                 | string / null |                                             |
| `seo.og_description`           | string / null |                                             |
| `seo.og_image_url`             | string / null |                                             |
| `seo.schema_output`            | string        | `enabled` / `disabled`                     |
| `seo.primary_schema_type`      | string / null |                                             |

---

## 3. Sitemap List

```
GET /api/blog/sitemap
```

Returns **all** published posts — title and slug only, no pagination. Intended for generating an XML/HTML sitemap.

### Example Request

```
GET /api/blog/sitemap
```

### Example Response

```json
{
  "data": [
    {
      "title": "What Electronics Contain the Most Gold? Recovery of Noble Metals from Electronics",
      "slug": "what-electronics-contain-the-most-gold-recovery-of-noble-metals-from-electronics"
    },
    {
      "title": "The Recycling Process of Electronic Waste",
      "slug": "the-recycling-process-of-electronic-waste"
    }
  ]
}
```

### Response Fields

| Field           | Type   | Notes |
|-----------------|--------|-------|
| `data`          | array  | All published posts |
| `data[].title`  | string |       |
| `data[].slug`   | string | Use with the detail endpoint |
