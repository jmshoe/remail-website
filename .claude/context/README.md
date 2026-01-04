# Voice DNA Samples

This folder contains voice samples that Claude analyzes when creating blog content to match your unique writing style.

## How It Works

1. Add your samples to the appropriate folder (`transcripts/` or `written/`)
2. When you run `/new-blog-post`, Claude reads ALL samples
3. Claude extracts voice characteristics and applies them to the new content
4. No pre-curated profile needed - fresh analysis each time

## Adding Samples

### Transcripts (Audio/Video)

**Location:** `.claude/context/transcripts/`

Best sources:
- Podcast episodes (transcribed)
- YouTube video transcripts
- Webinar recordings
- Interview segments
- Voice memos

**How to get transcripts:**
- YouTube: Click "..." under video → "Show transcript" → Copy
- Podcasts: Use Otter.ai, Rev.com, Descript, or AssemblyAI
- Recordings: Upload to any transcription service

### Written Content

**Location:** `.claude/context/written/`

Best sources:
- Email newsletters you've written
- LinkedIn posts
- Previous blog posts (ones YOU wrote, not AI-generated)
- Social media content
- Business communications
- Slack/Discord messages (longer ones)

## File Naming Convention

Use descriptive names that help identify the content:

```
transcripts/
├── podcast-remail-launch-2026-01.txt
├── youtube-wholesaling-tips.txt
└── interview-biggerpockets-guest.txt

written/
├── linkedin-direct-mail-roi.txt
├── newsletter-monthly-jan-2026.txt
└── email-customer-success-story.txt
```

## Sample Size Guidelines

| Type | Recommended | Minimum | Maximum |
|------|-------------|---------|---------|
| Transcript files | 3-5 files | 1 file | 10 files |
| Written files | 5-10 files | 2 files | 15 files |
| Words per file | 500-2000 | 200 | 5000 |

**Total recommended:** 3,000-10,000 words across all samples

## What Claude Extracts

From your samples, Claude identifies:

### Tone & Personality
- Formal vs conversational
- Authoritative vs approachable
- Serious vs humorous
- Direct vs explanatory

### Sentence Structure
- Average sentence length
- Simple vs complex sentences
- Question usage frequency
- List/bullet preferences

### Vocabulary Patterns
- Industry jargon usage
- Common phrases/expressions
- Word complexity level
- Contractions (it's vs it is)

### Content Style
- How you open articles/sections
- Transition patterns between ideas
- How you present examples
- Call-to-action style

## Tips for Best Results

1. **Variety** - Include different content types (casual, formal, educational)
2. **Authenticity** - Use content YOU wrote, not edited heavily by others
3. **Recency** - Prioritize recent content (your voice evolves)
4. **Length** - Longer samples reveal more patterns
5. **Relevance** - Include content similar to blog posts when possible

## Updating Samples

Add or remove samples anytime. Claude analyzes fresh each time.

To refresh your voice DNA:
1. Remove outdated samples
2. Add recent content
3. Next `/new-blog-post` will use updated samples

## Troubleshooting

**Content doesn't match my style:**
- Add more samples (especially written ones)
- Include samples similar to your target output
- Remove samples from other authors

**Too formal/informal:**
- Balance transcript and written samples
- Transcripts = more casual tone
- Written = more polished tone

**Missing industry terms:**
- Add samples where you discuss your industry naturally
