# 📧 Example: Professional Email Writing

This example shows how PROMETHEUS transforms a basic email request into a production-ready prompt.

---

## The Task

**User Request:**
```
Write a professional email declining a meeting request because I have a scheduling conflict. Make it polite and offer to reschedule.
```

---

## ❌ What Most People Do (Basic Prompt)

```
Write a professional email declining a meeting request because I have a scheduling conflict. Make it polite and offer to reschedule.
```

**Problems with this approach:**
- No context about the relationship
- No tone specification
- Vague "offer to reschedule" (how specific?)
- No format requirements
- No verification criteria

**Result:** Generic, potentially apologetic email that might not fit your situation.

---

## ✅ PROMETHEUS-Optimized Prompt

```xml
<persona>
You are an experienced executive assistant with 10+ years of diplomatic communication expertise, known for maintaining relationships while delivering difficult messages gracefully.
</persona>

<objective>
Compose a professional email that declines a meeting request due to scheduling conflicts while preserving the relationship and offering concrete alternatives.
</objective>

<context>
• Recipient: Valued client we've worked with for 2 years
• Relationship: Strong, collaborative, professional
• Situation: They requested a meeting this week, but calendar is fully committed
• Goal: Decline clearly without damaging rapport
• Importance: Maintaining this relationship is critical for ongoing partnership
</context>

<requirements>
• Length: Under 100 words (brief and scannable)
• Tone: Warm but direct (confident, not apologetic)
• Offer 2-3 specific alternative time slots next week with exact dates/times
• Use 'I appreciate' rather than 'Thank you' (more personal)
• Avoid: 'unfortunately', 'regrettably', excessive apologies, vague reschedule offers
• Subject line: Clear and action-oriented
</requirements>

<steps>
1. Craft a clear, action-oriented subject line
2. Open with appreciation for the invitation (not apology)
3. State the decline clearly using positive framing ("my calendar is fully committed" not "I can't")
4. Briefly mention scheduling conflict (one sentence max, no excessive detail)
5. Offer 2-3 specific alternatives with exact dates, times, and time zones
6. Close with forward-looking positive sentiment
7. Self-critique: Review for apologetic language, negative framing, or vague alternatives. Revise any weak sections.
</steps>

<output>
Subject line + complete email body, ready to send (no placeholders, no [brackets])
</output>

<verification>
✓ Tone is warm but not apologetic
✓ Decline is clear and direct
✓ At least 2 specific alternatives provided (with dates and times)
✓ No negative language used ("unfortunately", "can't", "sorry")
✓ Relationship integrity maintained
✓ Under 100 words
</verification>
```

---

## 📊 Key Improvements

| Aspect | Basic Prompt | PROMETHEUS Prompt |
|--------|--------------|-------------------|
| **Persona** | None | Executive assistant with diplomatic expertise |
| **Context** | Minimal | Full relationship context, goals, constraints |
| **Tone** | "Polite" (vague) | "Warm but direct, not apologetic" (specific) |
| **Format** | Unspecified | Under 100 words, specific structure |
| **Alternatives** | "Offer to reschedule" | "2-3 specific time slots with dates/times" |
| **Verification** | None | 6 specific criteria |
| **Self-Critique** | None | Built into steps |

---

## 📝 Sample Output

Using the PROMETHEUS prompt, here's what you might get:

**Subject:** Re: Meeting Request - Alternative Times This Week

**Body:**
```
Hi [Name],

I appreciate you reaching out about meeting this week. My calendar is fully committed through Friday, but I'd love to connect next week.

Would any of these work for you?
• Tuesday, Dec 10 at 2:00 PM EST
• Wednesday, Dec 11 at 10:00 AM EST
• Thursday, Dec 12 at 3:00 PM EST

Looking forward to catching up!

Best,
[Your Name]
```

**Word count:** 68 words  
**Tone:** Warm, direct, confident  
**Alternatives:** 3 specific options with dates and times  
**Negative language:** None  
**Relationship preservation:** ✅

---

## 🎯 Variations for Different Scenarios

### Scenario 1: Declining a Cold Outreach

**Context Changes:**
- Recipient: Someone you don't know (cold outreach)
- Relationship: None yet
- Goal: Decline politely but firmly

**Key Adjustments:**
```xml
<context>
• Recipient: Cold outreach from someone I don't know
• Relationship: None (first contact)
• Situation: Not interested in the meeting
• Goal: Decline politely but firmly, without offering alternatives
</context>

<requirements>
• Length: Under 50 words (very brief)
• Tone: Polite but firm
• No alternatives offered (not interested)
• Close the loop clearly
</requirements>
```

---

### Scenario 2: Declining Your Boss

**Context Changes:**
- Recipient: Your manager
- Relationship: Professional hierarchy
- Goal: Decline respectfully while explaining constraints

**Key Adjustments:**
```xml
<context>
• Recipient: My direct manager
• Relationship: Professional, respectful
• Situation: They requested a meeting during a critical deadline
• Goal: Decline respectfully while explaining workload constraints
• Importance: Must maintain professional relationship and respect hierarchy
</context>

<requirements>
• Tone: Respectful and professional (acknowledge their authority)
• Explain constraint clearly (critical deadline)
• Offer alternatives that work around deadline
• Show willingness to accommodate
</requirements>
```

---

### Scenario 3: Declining a Networking Request

**Context Changes:**
- Recipient: Someone seeking career advice/networking
- Relationship: Weak or none
- Goal: Decline gracefully, possibly offer alternative help

**Key Adjustments:**
```xml
<context>
• Recipient: Someone seeking career advice or networking
• Relationship: Weak connection (LinkedIn, mutual friend, etc.)
• Situation: Don't have bandwidth for 1:1 meeting
• Goal: Decline gracefully, possibly offer alternative form of help
</context>

<requirements>
• Tone: Warm and encouraging (not dismissive)
• Acknowledge their request positively
• Offer alternative: article, resource, group event, brief email exchange
• Keep door open for future
</requirements>
```

---

## 💡 Lessons Learned

### 1. Context is Everything
The same task ("decline a meeting") requires completely different approaches depending on:
- Who the recipient is
- What your relationship is
- What your goal is

### 2. Specificity Prevents Apology Creep
By explicitly stating "avoid 'unfortunately', 'regrettably', excessive apologies", you prevent the AI from defaulting to overly apologetic language.

### 3. Self-Critique Catches Weak Language
The self-critique step in `<steps>` ensures the AI reviews its own output for common pitfalls before delivering it to you.

### 4. Verification Ensures Quality
The `<verification>` section creates a checklist the AI (and you) can use to confirm the output meets all requirements.

---

## 🔄 Try It Yourself

**Exercise:** Adapt the PROMETHEUS prompt for this scenario:

**Task:** Write an email accepting a meeting request, but proposing a different time.

**Your Turn:**
1. What persona would you use?
2. What context is essential?
3. What tone and format requirements?
4. What steps should the AI follow?
5. How would you verify success?

---

## 📚 Related Examples

- **[Content Creation](content-creation.md)** - LinkedIn posts, blog articles
- **[Problem Solving](problem-solving.md)** - Business analysis and strategy
- **[Data Analysis](data-analysis.md)** - Insights and recommendations

---

**Master email prompting, and you'll save hours every week.** 📧
