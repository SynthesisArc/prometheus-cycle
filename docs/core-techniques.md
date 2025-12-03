# 🎯 The 4 Core Techniques

These four techniques form the foundation of effective prompt engineering. Master these, and you'll see immediate improvements in your AI outputs.

---

## 1. PERSONA - Who is the AI?

### What It Is
Give the AI a specific role, expertise, or identity to narrow its focus and activate relevant knowledge patterns.

### Why It Works
AI models are trained on vast amounts of text from different domains. By assigning a persona, you're telling the AI which "knowledge space" to draw from. It's like hiring a specialist instead of asking a generalist.

### How to Use It

**Bad:**
```
Write about marketing strategy
```

**Good:**
```
You are a senior marketing strategist with 15 years of experience in B2B SaaS, specializing in product launches for technical audiences.

Write about marketing strategy for our new developer tool.
```

### Formula
```
You are a [specific role] with [years of experience] in [domain/industry], 
known for [specific expertise or approach].
```

### Examples

**For Business Writing:**
```
You are an experienced executive assistant with 10+ years of diplomatic communication expertise, known for maintaining relationships while delivering difficult messages gracefully.
```

**For Technical Content:**
```
You are a senior software architect with deep expertise in distributed systems, cloud infrastructure, and microservices architecture. You explain complex concepts clearly to both technical and non-technical audiences.
```

**For Creative Work:**
```
You are an award-winning copywriter specializing in storytelling for consumer brands. Your work is known for emotional resonance and memorable hooks.
```

### Pro Tips

✅ **Be specific** - "Senior marketing strategist" > "Marketer"  
✅ **Add years of experience** - Signals depth of knowledge  
✅ **Include specialization** - Narrows the focus further  
✅ **Mention approach/style** - Shapes the output tone  
❌ **Don't be too generic** - "Expert" alone doesn't help much  

---

## 2. CONTEXT - What's the Situation?

### What It Is
Provide ALL the background information, constraints, and details the AI needs. Whatever you don't include, the AI will guess—and when it guesses, it hallucinates.

### Why It Works
AI models are prediction engines. They fill information gaps with the most statistically likely content. But "most likely" isn't always what YOU need. Providing context eliminates guessing and prevents hallucinations.

### The Golden Rule: ABC
**Always Be Context-ing!**

If you don't tell the AI something, it will make it up.

### How to Use It

**Bad:**
```
Write a blog post about our Q4 results
```

**Good:**
```
Write a blog post about our Q4 results.

Context:
• Revenue: $2.3M (up 23% YoY)
• Customer churn: Down from 8% to 5%
• New features launched: AI-powered analytics, mobile app, API v2
• Market expansion: Entered EU market (UK, Germany, France)
• Team growth: Hired 12 people, now at 45 employees
• Target audience: Current customers and potential investors
• Tone: Optimistic but grounded, data-driven
• Length: 800-1000 words
```

### What to Include

**Background Information:**
- What's the situation?
- What led to this moment?
- What's the history?

**Constraints:**
- What limitations exist?
- What must be avoided?
- What boundaries apply?

**Audience:**
- Who will read/use this?
- What do they know already?
- What do they care about?

**Goals:**
- What are you trying to achieve?
- What success looks like?
- What metrics matter?

### Examples

**For Email Writing:**
```
Context:
• Recipient: Valued client we've worked with for 2 years
• Relationship: Strong, collaborative, professional
• Situation: They requested a meeting this week, but my calendar is fully committed
• Goal: Decline politely while maintaining relationship warmth
• Constraint: Must offer specific alternative times (not vague "let's reschedule")
```

**For Problem Solving:**
```
Context:
• Company: B2B SaaS, Series A, 50-200 customers
• Product: Project management tool for SMBs (10-50 employees)
• Problem: Monthly churn rate is 8% (industry benchmark: 5-6%)
• Resources: Limited (typical Series A constraints)
• Timeline: Need recommendations we can implement in Q1
• Goal: Reduce churn to 5-6% within 6 months
```

### Pro Tips

✅ **Include numbers** - Metrics, dates, quantities  
✅ **Specify audience** - Who's this for?  
✅ **State constraints** - What can't you do?  
✅ **Clarify goals** - What does success look like?  
✅ **Mention tone** - Professional? Casual? Urgent?  
❌ **Don't assume** the AI knows your situation  

---

## 3. FORMAT - How Should It Look?

### What It Is
Tell the AI exactly how you want the output structured. Specify length, format, tone, style—everything about the presentation.

### Why It Works
Without format specifications, the AI chooses a default structure that might not match your needs. Specifying format ensures consistent, predictable outputs that fit your use case.

### How to Use It

**Bad:**
```
Create a weekly report
```

**Good:**
```
Create a weekly report.

Format:
• Structure: 3 sections (Wins, Challenges, Next Week)
• Length: 3 bullet points per section, each under 50 words
• Metrics: Include percentages where relevant
• Tone: Professional but conversational (not overly formal)
• Output: Markdown format, ready to paste into Slack
```

### What to Specify

**Structure:**
- Sections/headings
- Bullet points vs paragraphs
- Numbered lists vs unnumbered
- Tables, charts, diagrams

**Length:**
- Word count
- Character limit
- Number of items
- Page count

**Tone:**
- Professional / Casual
- Formal / Conversational
- Urgent / Calm
- Optimistic / Realistic

**Style:**
- First person / Third person
- Active voice / Passive voice
- Technical / Accessible
- Detailed / Concise

**Output Format:**
- Markdown
- HTML
- Plain text
- JSON
- CSV

### Examples

**For Content:**
```
Format:
• Length: 250-350 words
• Structure: Hook (2 lines) → Body (story arc, not listicle) → Call-to-action
• Tone: Warm, intelligent, slightly rebellious
• Style: No jargon, no corporate-speak, no "here's the thing"
• Output: Plain text, ready to copy-paste into LinkedIn
• Hashtags: 3-5 relevant tags at the very end (not in body)
```

**For Analysis:**
```
Format:
• Structure: Executive Summary → Key Findings (3-5 bullets) → Recommendations (numbered list) → Next Steps
• Length: Executive summary under 100 words, full report 800-1000 words
• Data presentation: Include specific metrics and percentages
• Tone: Data-driven, objective, actionable
• Output: Markdown with clear headings
```

**For Email:**
```
Format:
• Length: Under 100 words (brief and scannable)
• Structure: Subject line + 3-paragraph body + signature
• Tone: Warm but direct (confident, not apologetic)
• Style: Use "I appreciate" rather than "Thank you" (more personal)
• Avoid: "Unfortunately", "regrettably", excessive apologies
```

### Pro Tips

✅ **Be specific about length** - Word count, not "short" or "long"  
✅ **Specify structure** - Bullets? Paragraphs? Sections?  
✅ **Define tone** - Professional? Casual? Urgent?  
✅ **State what to avoid** - Prevents common mistakes  
✅ **Include examples** - Show what "good" looks like  
❌ **Don't leave it to chance** - Default format may not fit your needs  

---

## 4. CHAIN OF THOUGHT (CoT) - How Should It Think?

### What It Is
Ask the AI to "think step-by-step" before providing an answer. This forces the AI to show its reasoning process, dramatically improving accuracy for complex tasks.

### Why It Works
When AI models reason step-by-step, they catch errors early, avoid logical leaps, and produce more accurate results. It's like showing your work in math class—you're less likely to make mistakes.

### When to Use It
- Complex reasoning tasks
- Multi-step problems
- Calculations or analysis
- Strategic decisions
- Anything that makes you think "hmm, this is tricky"

### How to Use It

**Bad:**
```
Calculate the ROI of our AI implementation
```

**Good:**
```
Calculate the ROI of our AI implementation.

Think step-by-step:
1. List all costs (software, implementation, training, maintenance)
2. List all benefits (time saved, revenue increase, cost reduction)
3. Calculate net value (benefits minus costs)
4. Express as ROI percentage
5. Show your work for each calculation
```

### Formula
```
Think step-by-step:
1. [First step]
2. [Second step]
3. [Third step]
...
N. [Final step]
```

### Examples

**For Problem Solving:**
```
Think step-by-step:
1. What are the top 5 reasons customers churn in this segment?
2. Which reasons are within our control vs. external factors?
3. What interventions have highest ROI based on our stage and resources?
4. Prioritize recommendations by impact vs. effort
5. Validate that recommendations are achievable with our constraints
6. Self-check: Are these specific enough to act on immediately?
```

**For Analysis:**
```
Think step-by-step:
1. What patterns do you see in the data?
2. What could explain these patterns?
3. What alternative explanations exist?
4. Which explanation is most likely given the evidence?
5. What additional data would confirm or refute this?
6. What are the implications for our strategy?
```

**For Decision Making:**
```
Think step-by-step:
1. What are the possible options?
2. What are the pros and cons of each?
3. What criteria matter most for this decision?
4. How does each option score on those criteria?
5. What are the risks of each option?
6. Which option best balances benefits and risks?
```

### Advanced: Self-Critique Loop

Add a self-check step at the end:

```
Think step-by-step:
1. [Your steps here]
...
N. Self-critique: Review your reasoning for logical gaps, unsupported assumptions, or weak conclusions. Revise if needed.
```

### Pro Tips

✅ **Number the steps** - Makes reasoning clear and trackable  
✅ **Be explicit** - Don't assume the AI knows the process  
✅ **Add self-critique** - Catches errors before output  
✅ **Use for complex tasks** - Not needed for simple prompts  
✅ **Combine with other techniques** - Persona + Context + CoT is powerful  
❌ **Don't overuse** - Simple tasks don't need step-by-step reasoning  

---

## 🔗 Combining the Techniques

The real power comes from using all four techniques together:

### Example: Professional Email

```
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
</context>

<requirements>
• Length: Under 100 words
• Tone: Warm but direct (confident, not apologetic)
• Offer 2-3 specific alternative time slots next week
• Use 'I appreciate' rather than 'Thank you' (more personal)
• Avoid: 'unfortunately', 'regrettably', excessive apologies, vague reschedule offers
</requirements>

<steps>
1. Open with appreciation for the invitation
2. State the decline clearly using positive framing
3. Briefly mention scheduling conflict (no excessive detail)
4. Offer 2-3 specific alternatives with exact dates/times
5. Close with forward-looking positive sentiment
6. Self-critique: Review for apologetic language or negativity
</steps>

<output>
Subject line + complete email body, ready to send
</output>

<verification>
Tone is warm but not apologetic, decline is clear, at least 2 specific alternatives provided, no negative language used, relationship integrity maintained
</verification>
```

**Result:** A professional, relationship-preserving email that gets results.

---

## 📊 Quick Reference

| Technique | Purpose | When to Use | Example |
|-----------|---------|-------------|---------|
| **PERSONA** | Narrow AI's focus | Always | "You are a senior marketing strategist..." |
| **CONTEXT** | Prevent hallucinations | Always | "Revenue up 23%, churn down 15%..." |
| **FORMAT** | Ensure consistency | Always | "Length: 300 words, Tone: Professional..." |
| **CHAIN OF THOUGHT** | Improve accuracy | Complex tasks | "Think step-by-step: 1) ... 2) ..." |

---

## 🎯 Practice Exercise

Try rewriting this basic prompt using all 4 techniques:

**Basic Prompt:**
```
Write a social media post about our new product
```

**Your Turn:**
- Add a PERSONA
- Provide CONTEXT
- Specify FORMAT
- Include CHAIN OF THOUGHT (if needed)

**Example Solution:**
```
<persona>You are a social media strategist specializing in B2B tech launches, known for creating engaging, shareable content that drives conversions.</persona>

<objective>Create a LinkedIn post announcing our new AI-powered analytics feature.</objective>

<context>
• Product: AI-powered analytics dashboard
• Target audience: Data analysts and business intelligence professionals
• Key benefit: Reduces analysis time by 70%
• Launch date: Next Monday
• Company: B2B SaaS, 500+ customers
</context>

<requirements>
• Length: 200-250 words
• Hook: Start with a pain point or surprising stat
• Include one customer quote or testimonial
• Tone: Excited but professional (not hypey)
• Call-to-action: Link to demo signup
• Hashtags: 3-5 relevant tags at end
</requirements>

<output>LinkedIn post ready to copy-paste</output>
```

---

## 📚 Next Steps

- **[Study Examples](../examples/)** - See these techniques in action
- **[Learn PROMETHEUS Structure](prometheus-structure.md)** - How it all fits together
- **[Explore Advanced Techniques](advanced/)** - Level up your skills
- **[Build Your Library](prompt-library.md)** - Save what works

---

**Master these 4 techniques, and you'll transform your AI outputs.** 🚀
