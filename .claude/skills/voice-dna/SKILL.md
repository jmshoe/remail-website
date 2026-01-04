---
name: voice-dna
description: Analyze voice samples to extract writing style characteristics for content creation. Auto-triggered when creating blog posts or any content that should match the author's voice.
allowed-tools: Read, Glob
---

# Voice DNA Skill

Analyze voice samples from `.claude/context/` to extract and apply the author's unique writing style.

## When This Skill Triggers

Automatically activate when:
- Creating blog posts (`/new-blog-post`)
- Writing marketing content
- Any task requiring the author's authentic voice

## Before Writing ANY Content

**ALWAYS analyze voice samples first:**

```bash
# Check what samples exist
ls .claude/context/transcripts/
ls .claude/context/written/
```

If samples exist, read them ALL before writing.

## Analysis Process

### Step 1: Gather All Samples

Read every file in both folders:

```bash
# Read all transcript samples
cat .claude/context/transcripts/*.txt

# Read all written samples
cat .claude/context/written/*.txt
```

**If total content exceeds 50KB:**
1. Read first 1500 words from each transcript
2. Read full written samples (prioritize these)
3. Focus on most recent files

### Step 2: Extract Voice Characteristics

Analyze samples for these patterns:

#### Tone Analysis
| Dimension | Look For |
|-----------|----------|
| Formality | Academic / Professional / Conversational / Casual |
| Confidence | Assertive / Balanced / Humble |
| Energy | High / Medium / Low |
| Warmth | Warm / Neutral / Distant |

#### Sentence Structure
- Average sentence length (count words per sentence)
- Simple vs complex sentence preference
- Question frequency (rhetorical questions?)
- Use of fragments for emphasis
- Paragraph length patterns

#### Vocabulary Analysis
- Complexity level (simple vs sophisticated words)
- Industry jargon frequency and type
- Contractions usage (it's vs it is, don't vs do not)
- Favorite transition words
- Words/phrases that appear repeatedly

#### Content Flow Patterns
- How they open articles/sections (story? question? bold statement? data?)
- How they transition between ideas
- How they present examples (detailed stories vs quick bullets)
- How they close/summarize sections
- CTA style (soft suggestion vs direct command)

### Step 3: Create Voice Profile

Generate a voice profile for this session:

```markdown
## Voice Profile

### Tone
- Formality: [level]
- Energy: [level]
- Personality: [description]

### Sentence Patterns
- Average length: ~[X] words
- Structure: [Simple/Mixed/Complex]
- Questions: [Frequent/Occasional/Rare]

### Signature Phrases
- "[phrase 1]"
- "[phrase 2]"
- "[phrase 3]"

### Structural Patterns
- Opens with: [pattern]
- Transitions using: [pattern]
- Closes with: [pattern]

### Things to Avoid
- [anti-pattern from samples]
- [words/phrases never used]
```

## Applying the Voice

When writing content:

1. **Mirror sentence rhythm** - Match the flow from samples
2. **Use their vocabulary** - Their actual words, not synonyms
3. **Follow their structure** - How they organize ideas
4. **Match their energy** - Enthusiasm level, urgency
5. **Honor their preferences** - Lists vs prose, examples vs theory

### Voice Matching Checklist

Before finalizing any content:
- [ ] Sentence length matches sample average (+/- 20%)
- [ ] Using vocabulary from samples (not generic synonyms)
- [ ] Tone is consistent with samples
- [ ] Structure follows established patterns
- [ ] No phrases that feel "off-brand" for this author
- [ ] Contractions match their preference
- [ ] Energy level is appropriate

## If No Samples Exist

When `.claude/context/` folders are empty:

1. Notify the user:
   > "No voice samples found in `.claude/context/`. Using default professional tone. To write in your voice, add samples per the README."

2. Proceed with standard professional tone
3. Suggest adding samples for future content

## Sample Content Reference

See `.claude/context/README.md` for:
- How to add samples
- Recommended file types
- Sample size guidelines
- Troubleshooting tips
