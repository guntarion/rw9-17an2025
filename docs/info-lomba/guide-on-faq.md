# FAQ Management Guide

This guide explains how to manage the FAQ (Frequently Asked Questions) system for the HUT RI Ke-80 RW IX website.

## Overview

The FAQ system supports categorized questions with two-level filtering:
1. **Main Categories**: `competition`, `event`, `logistics`, `general`
2. **Lomba Sub-categories** (for competition FAQs): `general`, `lingkungan`, `badminton`, `jalan-sehat`, `bazaar`

## File Structure

```
src/
   data/
      faq.json              # Main FAQ data file
   app/
      faq/
          page.tsx           # FAQ page component
   types/
       index.ts               # Type definitions
```

## FAQ Data Structure

### Main FAQ File: `src/data/faq.json`

```json
{
  "competition": [
    {
      "id": "unique-faq-id",
      "category": "competition",
      "lomba": "specific-lomba-type",
      "question": "Your question here?",
      "answer": "Detailed answer here.",
      "tags": ["tag1", "tag2", "tag3"],
      "featured": true/false
    }
  ]
}
```

### FAQ Item Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string |  | Unique identifier (use kebab-case) |
| `category` | string |  | Main category: `competition`, `event`, `logistics`, `general` |
| `lomba` | string |   | Lomba type (required only for competition category) |
| `question` | string |  | The FAQ question |
| `answer` | string |  | Detailed answer |
| `tags` | string[] |  | Array of searchable tags |
| `featured` | boolean |  | Whether to show in featured section |

### Category Values

#### Main Categories
- `competition` - Questions about competitions/lomba
- `event` - Questions about the main event
- `logistics` - Questions about logistics, parking, etc.
- `general` - General questions

#### Lomba Sub-categories (only for `competition` category)
- `general` - General competition questions
- `lingkungan` - Lomba Lingkungan Hidup
- `badminton` - Lomba Fun Badminton
- `jalan-sehat` - Lomba Jalan Sehat
- `bazaar` - Lomba Bazaar

## How to Add New FAQ Entries

### 1. Competition FAQ (Lomba-specific)

```json
{
  "id": "comp-badminton-scoring",
  "category": "competition",
  "lomba": "badminton",
  "question": "Bagaimana sistem penilaian lomba badminton?",
  "answer": "Penilaian berdasarkan: Point Kemenangan (Menang=3, Kalah=0), Kekompakan/Keserasian (Kompak=1, Tidak kompak=0), dan Penampilan/Kostum (Kreatif inovatif=2, Seragam biasa=1, Tidak seragam=0).",
  "tags": ["badminton", "penilaian", "sistem", "skor"],
  "featured": false
}
```

### 2. General Event FAQ

For non-competition questions, add to the `otherFaqData` array in `src/app/faq/page.tsx`:

```typescript
{
  id: 'event-new-question',
  category: 'event',
  question: 'Your new question?',
  answer: 'Your detailed answer.',
  tags: ['tag1', 'tag2'],
  featured: false
}
```

## Step-by-Step Instructions

### Adding a New Competition FAQ

1. **Open the FAQ data file**:
   ```
   src/data/faq.json
   ```

2. **Find the appropriate section** in the `competition` array

3. **Add your new entry** following this template:
   ```json
   {
     "id": "comp-[lomba-type]-[short-description]",
     "category": "competition",
     "lomba": "[lingkungan|badminton|jalan-sehat|bazaar|general]",
     "question": "Your question?",
     "answer": "Your detailed answer.",
     "tags": ["relevant", "tags", "for", "search"],
     "featured": false
   }
   ```

4. **Follow naming conventions**:
   - ID: `comp-[lomba]-[topic]` (e.g., `comp-badminton-rules`)
   - Use kebab-case for IDs
   - Keep questions clear and concise
   - Provide detailed, helpful answers

### Adding a Non-Competition FAQ

1. **Open the FAQ page**:
   ```
   src/app/faq/page.tsx
   ```

2. **Find the `otherFaqData` array** (around line 29)

3. **Add your entry**:
   ```typescript
   {
     id: 'category-topic',
     category: 'event', // or 'logistics', 'general'
     question: 'Your question?',
     answer: 'Your answer.',
     tags: ['tag1', 'tag2'],
     featured: false
   }
   ```

### Updating Existing FAQs

1. **Find the FAQ** by searching for its `id` in the appropriate file
2. **Update the desired fields** (question, answer, tags, etc.)
3. **Keep the `id` unchanged** to maintain consistency
4. **Update `featured` status** if needed

## Best Practices

### ID Naming Convention
- Use descriptive, kebab-case IDs
- Competition FAQs: `comp-[lomba]-[topic]`
- Event FAQs: `event-[topic]`
- Logistics FAQs: `logistics-[topic]`
- General FAQs: `general-[topic]`

### Writing Questions
- Use clear, conversational Indonesian
- End with question mark
- Keep concise but specific
- Address common user concerns

### Writing Answers
- Provide complete, helpful information
- Use proper formatting (bullet points in text)
- Include specific details (dates, times, contacts)
- Keep language simple and accessible

### Tags
- Use 3-5 relevant tags per FAQ
- Include key terms users might search for
- Use lowercase, kebab-case format
- Include variations (e.g., both "jadwal" and "waktu")

### Featured FAQs
- Mark important or commonly asked questions as `featured: true`
- Limit to 4-6 featured FAQs per category
- Review and update featured status regularly

## Example: Complete FAQ Entry

```json
{
  "id": "comp-lingkungan-penilaian-detail",
  "category": "competition",
  "lomba": "lingkungan",
  "question": "Apa saja kriteria detail penilaian Lomba Lingkungan Hidup?",
  "answer": "Penilaian terdiri dari 3 aspek: (1) Kebersihan Lingkungan RT (30%) meliputi kebersihan jalan, selokan, dan pengelolaan sampah, (2) Hias Lingkungan RT (30%) berupa kreativitas gapura/penjor menggunakan bahan daur ulang, dan (3) Penanaman Pohon (40%) dinilai dari kuantitas, jenis pohon produktif, dan kualitas perawatan.",
  "tags": ["lingkungan", "penilaian", "kriteria", "kebersihan", "pohon", "dekorasi"],
  "featured": true
}
```

## Testing Your Changes

After adding/updating FAQs:

1. **Run the development server**:
   ```bash
   npm run dev
   ```

2. **Visit the FAQ page**: `http://localhost:3000/faq`

3. **Test filtering**:
   - Try different category filters
   - Test lomba sub-filters for competition FAQs
   - Search for your tags

4. **Check display**:
   - Verify question appears correctly
   - Check answer formatting
   - Confirm badges show proper categories

## Troubleshooting

### Common Issues

1. **FAQ not appearing**:
   - Check JSON syntax (commas, brackets)
   - Verify category spelling
   - Ensure ID is unique

2. **Wrong category showing**:
   - Check `category` field spelling
   - For competitions, verify `lomba` field

3. **Search not working**:
   - Add relevant `tags`
   - Include variations of keywords

4. **TypeScript errors**:
   - Run `npm run typecheck`
   - Ensure all required fields are present
   - Check data types match interface

### Validation Checklist

Before committing changes:

- [ ] JSON syntax is valid
- [ ] All required fields present
- [ ] IDs are unique
- [ ] Categories match allowed values
- [ ] Lomba types are correct (for competition FAQs)
- [ ] Tags are relevant and searchable
- [ ] Questions are clear and well-written
- [ ] Answers are complete and helpful
- [ ] TypeScript compilation passes
- [ ] FAQ appears correctly on website

## Advanced Features

### Search Functionality
The search feature looks through:
- Question text
- Answer text  
- All tags

Make sure to include variations and common terms in your tags.

### Featured FAQs
Featured FAQs appear in a special section when no filters are applied. Use sparingly for the most important questions.

### Lomba-Specific Filtering
When users select "Lomba" category, they get additional sub-filters for each lomba type. This makes it easy to find competition-specific information.

## Maintenance

### Regular Tasks
- Review and update FAQ answers as information changes
- Add new questions based on user feedback
- Update featured status based on popularity
- Remove outdated questions

### Before Major Events
- Verify all dates and times are current
- Update contact information
- Add event-specific FAQs
- Review featured questions for relevance

---

*This guide covers the FAQ system as implemented for HUT RI Ke-80 RW IX website. For technical support, contact the development team.*