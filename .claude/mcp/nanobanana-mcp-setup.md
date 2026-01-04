# NanoBanana MCP (Gemini Image Generation) Setup

## Overview

NanoBanana MCP provides AI image generation using Google's Gemini 2.5 Flash Image model. It's used for creating hero images for blog posts and other marketing content.

**GitHub:** [gemini-nanobanana-mcp](https://github.com/Junhan2/gemini-nanobanana-mcp)

## Installation

```bash
claude mcp add gemini-nanobanana-mcp -s user -e GEMINI_API_KEY="YOUR_API_KEY" -- npx -y gemini-nanobanana-mcp@latest
```

### Verify Installation

```bash
claude mcp list
```

You should see `gemini-nanobanana-mcp` in the list.

## Prerequisites

1. **Google Cloud Account** with Gemini API access
2. **Gemini API Key** from [Google AI Studio](https://aistudio.google.com/apikey)

### Getting a Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Click "Get API Key" in the left sidebar
4. Create a new API key or use an existing one
5. Copy the key for use in the installation command

## Available Models

| Model | ID | Best For |
|-------|-------|----------|
| NanoBanana | `gemini-2.5-flash-image` | Fast generation, general use (default) |
| NanoBanana Pro | `gemini-3-pro-image-preview` | High-fidelity, complex instructions |

To use Pro model, set environment variable:
```bash
NANOBANANA_MODEL=gemini-3-pro-image-preview
```

## Available Tools

| Tool | Description |
|------|-------------|
| **Image Generation** | Create images from text prompts |
| **Image Editing** | Transform existing images with natural language |
| **Vision Analysis** | Analyze and understand image content |
| **Multi-turn Chat** | Maintain context across interactions |

## Use Cases for REmail Blog

- Generate hero images for blog posts
- Create custom illustrations matching brand guidelines
- Generate diagrams for how-to articles
- Edit/enhance stock photos to fit brand aesthetic

## Image Specifications

| Property | Value |
|----------|-------|
| Dimensions | 1920x1080px (16:9 aspect ratio) |
| Max file size | 200KB (optimize after generation) |
| Format | JPG or WebP |
| Save location | `/public/images/blog/` |
| Naming | `{target-keyword-slug}-hero.jpg` |

## REmail Brand Style Guidelines

When generating images, include these style elements:

```
Modern SaaS aesthetic, minimalist design,
blue (#2563EB) and green (#10B981) color accents,
clean background, soft natural lighting,
professional photography style, 16:9 aspect ratio,
no text overlays, high quality
```

## Example Prompts

### Direct Mail / Real Estate

```
Modern minimalist workspace with professional postcards and property photos
on a clean desk, blue and green accent colors, soft natural lighting,
modern SaaS aesthetic, clean white background, 16:9 aspect ratio
```

### Skip Tracing

```
Digital dashboard showing property owner contact information,
modern UI design with blue and green highlights, clean interface,
soft lighting, professional SaaS aesthetic, 16:9 aspect ratio
```

### Lead Generation

```
Real estate investor reviewing property leads on laptop and documents,
modern home office, natural lighting, blue and green accent colors,
minimalist design, professional atmosphere, 16:9 aspect ratio
```

### Analytics / ROI

```
Clean data visualization dashboard with graphs and charts,
blue and green color scheme, modern SaaS interface design,
professional lighting, minimalist aesthetic, 16:9 aspect ratio
```

## Post-Generation Optimization

After generating images, optimize file size:

1. **TinyPNG** - https://tinypng.com (free, drag-and-drop)
2. **Squoosh** - https://squoosh.app (free, more control)
3. **ImageOptim** - https://imageoptim.com (Mac app)

Target: <200KB per image while maintaining quality.

## Troubleshooting

### "API key not valid" Error

- Verify your API key at [Google AI Studio](https://aistudio.google.com/apikey)
- Ensure no extra spaces in the key
- Try regenerating the key

### "Rate limit exceeded" Error

- Wait 1-2 minutes before retrying
- Consider upgrading to paid tier for higher limits

### Image Quality Issues

- Use more specific prompts
- Try the Pro model (`gemini-3-pro-image-preview`)
- Add quality keywords: "high quality", "professional", "detailed"

## Integration with Blog Workflow

The `/new-blog-post` command includes a hero image step that:

1. Generates an SEO-optimized image prompt based on the topic
2. Suggests a file name using target keywords
3. Provides alt text recommendation
4. Offers NanoBanana as primary generation option

See `.claude/commands/new-blog-post.md` for the full workflow.
