# 🔥 PROMETHEUS CYCLE v2

**The Complete Prompt Lifecycle Engine**

[![SynthesisArc](https://img.shields.io/badge/Built%20by-SynthesisArc-00d4ff?style=for-the-badge)](https://synthesisarc.com)
[![Version](https://img.shields.io/badge/Version-2.0-blueviolet?style=for-the-badge)](https://github.com/SynthesisArc/prometheus-cycle)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> **Transform any prompt from zero to masterpiece through a rigorous 4-phase cycle.**

---

## 🎯 What Is PROMETHEUS CYCLE?

PROMETHEUS CYCLE is a **systematic framework** that guides you through the complete lifecycle of prompt engineering—from initial creation to production-ready optimization. It's not just a template; it's a **thinking system** that teaches you to craft professional-grade prompts while you use it.

### The 4 Phases

```
1. CREATION     → Build a crystal-clear base prompt
2. OPTIMIZATION → Elevate with frontier tactics (CoT, ToT, personas, self-critique)
3. DEPLOYMENT   → Model-specific tuning & execution plan
4. ITERATION    → Track progress & continuously improve
```

### Why PROMETHEUS?

- ✅ **Systematic** - No more guessing or trial-and-error
- ✅ **Educational** - Teaches you while you use it
- ✅ **Production-Ready** - Built for real-world applications
- ✅ **Model-Agnostic** - Works with ChatGPT, Claude, Grok, Gemini, etc.
- ✅ **Beginner-Friendly** - Default mode explains everything simply
- ✅ **Pro-Grade** - Advanced mode for complex tasks

---

## 🚀 Quick Start (3 Minutes)

### Step 1: Copy the Framework

Copy the entire contents of [`prometheus-cycle-v2.md`](prometheus-cycle-v2.md)

### Step 2: Paste as System Prompt

In your LLM of choice (ChatGPT, Claude, Grok, etc.), paste PROMETHEUS as your **system prompt** or **first message**.

### Step 3: Send Your Task

Simply describe what you want to accomplish:

```
"Write a professional email declining a meeting request"
```

or

```
"Create a LinkedIn post about why prompt engineering matters"
```

### Step 4: Watch the Magic

PROMETHEUS will guide you through all 4 phases automatically, producing a production-ready prompt with:
- Clear structure (`<objective>`, `<context>`, `<requirements>`, `<steps>`, `<output>`, `<verification>`)
- Advanced techniques applied (Chain of Thought, personas, self-critique)
- Model-specific optimization
- Quality scoring and verification

**That's it!** You now have a professional-grade prompt.

---

## 📚 Complete Documentation

### Core Concepts

- **[What Is Prompt Engineering?](docs/what-is-prompt-engineering.md)** - Foundation and mindset
- **[The 4 Core Techniques](docs/core-techniques.md)** - Persona, Context, Format, Chain of Thought
- **[PROMETHEUS Structure](docs/prometheus-structure.md)** - Understanding the XML format
- **[Beginner vs Pro Mode](docs/modes.md)** - When to use each

### Guides

- **[Quick Start Guide](docs/quick-start.md)** - Get up and running in 3 minutes
- **[Complete Tutorial](docs/tutorial.md)** - Step-by-step walkthrough
- **[Best Practices](docs/best-practices.md)** - Tips from the experts
- **[Troubleshooting](docs/troubleshooting.md)** - Common issues and solutions

### Examples

- **[Email Writing](examples/email-writing.md)** - Professional communication
- **[Content Creation](examples/content-creation.md)** - LinkedIn, blogs, marketing
- **[Problem Solving](examples/problem-solving.md)** - Business analysis and strategy
- **[Data Analysis](examples/data-analysis.md)** - Insights and recommendations
- **[Code Generation](examples/code-generation.md)** - Software development
- **[Creative Writing](examples/creative-writing.md)** - Stories, scripts, narratives

### Advanced Topics

- **[Chain of Thought (CoT)](docs/advanced/chain-of-thought.md)** - Step-by-step reasoning
- **[Tree of Thoughts (ToT)](docs/advanced/tree-of-thoughts.md)** - Multi-path exploration
- **[Self-Critique Loops](docs/advanced/self-critique.md)** - Quality assurance
- **[Persona Engineering](docs/advanced/personas.md)** - Expert role assignment
- **[Model-Specific Optimization](docs/advanced/model-optimization.md)** - ChatGPT vs Claude vs Grok

---

## 🎓 Learning Path

### For Complete Beginners

1. Read [What Is Prompt Engineering?](docs/what-is-prompt-engineering.md)
2. Learn [The 4 Core Techniques](docs/core-techniques.md)
3. Try the [Quick Start Guide](docs/quick-start.md)
4. Practice with [Email Writing Example](examples/email-writing.md)
5. Build your [Prompt Library](docs/prompt-library.md)

### For Intermediate Users

1. Review [PROMETHEUS Structure](docs/prometheus-structure.md)
2. Study [Best Practices](docs/best-practices.md)
3. Explore [Advanced Techniques](docs/advanced/)
4. Try [Pro Mode](docs/modes.md#pro-mode)
5. Build your [Prompt Library](docs/prompt-library.md)

### For Advanced Users

1. Master [Chain of Thought](docs/advanced/chain-of-thought.md)
2. Implement [Tree of Thoughts](docs/advanced/tree-of-thoughts.md)
3. Optimize for [Specific Models](docs/advanced/model-optimization.md)
4. Contribute to [Community Examples](CONTRIBUTING.md)
5. Build [Custom Frameworks](docs/advanced/custom-frameworks.md)

---

## 💡 Before & After Examples

### Example 1: Email Writing

#### ❌ Before (Basic Prompt)
```
Write a professional email declining a meeting request because I have a scheduling conflict. Make it polite and offer to reschedule.
```

#### ✅ After (PROMETHEUS-Optimized)
```xml
<persona>You are an experienced executive assistant with 10+ years of diplomatic communication expertise, known for maintaining relationships while delivering difficult messages gracefully.</persona>

<objective>Compose a professional email that declines a meeting request due to scheduling conflicts while preserving the relationship and offering concrete alternatives.</objective>

<context>The recipient is a valued client or colleague. You want to decline clearly without damaging rapport. The meeting was requested for this week, but your calendar is fully committed.</context>

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

<output>Subject line + complete email body, ready to send</output>

<verification>Tone is warm but not apologetic, decline is clear, at least 2 specific alternatives provided, no negative language used, relationship integrity maintained</verification>
```

**Result:** Professional, relationship-preserving email that gets results.

---

### Example 2: Content Creation

#### ❌ Before (Basic Prompt)
```
Write a LinkedIn post about why prompt engineering is still important even though AI models are getting smarter. Make it engaging and shareable. Around 300 words.
```

#### ✅ After (PROMETHEUS-Optimized)
```xml
<persona>You are a seasoned thought leader at the intersection of AI strategy and human communication—someone who has watched hype cycles rise and fall, and who sees patterns others miss. Your voice is confident but not arrogant, contrarian but grounded in evidence.</persona>

<objective>Craft a LinkedIn post (250-350 words) arguing that prompt engineering remains essential, using an unexpected philosophical, historical, or cross-disciplinary lens that makes readers stop scrolling and think differently.</objective>

<context>LinkedIn is saturated with hot takes declaring 'prompt engineering is dead' now that AI models are smarter. These posts get engagement through controversy but lack depth. Your task: Reframe the entire conversation from an angle readers won't see coming.</context>

<requirements>
• Hook (first 2 lines): Create pattern interrupt before 'see more'—counterintuitive statement, vivid micro-story, or provocative question
• Narrative arc: Structure as mini-story with tension and resolution (not a listicle)
• Unexpected angle: Choose ONE fresh lens (e.g., prompt engineering as Aristotelian rhetoric, as new literacy post-printing press, as jazz improvisation vs. classical composition)
• Include one line so quotable readers will screenshot it
• Tone: Warm, intelligent, slightly rebellious. No jargon. No 'here's the thing' or 'let me be clear'
• End with question/invitation that sparks conversation (not generic CTA)
• No hashtags in body; place 3-5 relevant hashtags at very end
</requirements>

<steps>
1. Brainstorm 3 distinct angles (one sentence each) that could reframe the debate
2. Select the most surprising and defensible angle; briefly justify your choice
3. Write the full post, ensuring hook lands, narrative builds, insight resonates
4. Self-critique: Review for clichés, LinkedIn-speak, or weak logic. Revise any flat sections
5. Output final post only after revision
</steps>

<output>Final LinkedIn post only. No preamble, no explanation, no labels. Just the post text ready to copy-paste, ending with hashtags.</output>

<verification>Hook creates pattern interrupt, narrative has clear arc, metaphor is committed to fully, includes one quotable line, tone avoids jargon and corporate-speak, ends with conversation starter</verification>
```

**Result:** Viral-worthy LinkedIn post with engineered shareability.

---

## 🛠️ Use Cases

PROMETHEUS CYCLE works for any prompting task:

### Business & Professional
- 📧 **Email Communication** - Proposals, declines, negotiations
- 📊 **Reports & Analysis** - Market research, competitive analysis
- 📈 **Strategy & Planning** - Business plans, roadmaps, OKRs
- 💼 **Presentations** - Slide content, speaker notes, executive summaries

### Content & Marketing
- ✍️ **Content Creation** - Blog posts, LinkedIn, Twitter threads
- 📱 **Social Media** - Engaging posts, captions, campaigns
- 🎯 **Copywriting** - Landing pages, ads, product descriptions
- 📰 **Journalism** - Articles, interviews, press releases

### Technical & Development
- 💻 **Code Generation** - Functions, classes, APIs
- 🐛 **Debugging** - Error analysis, troubleshooting
- 📚 **Documentation** - README files, API docs, tutorials
- 🏗️ **Architecture** - System design, technical specs

### Creative & Personal
- 📖 **Creative Writing** - Stories, scripts, poetry
- 🎨 **Brainstorming** - Ideas, concepts, innovations
- 🎓 **Learning** - Explanations, summaries, study guides
- 🤔 **Problem Solving** - Personal decisions, life planning

---

## 🎯 The 4 Core Techniques

PROMETHEUS is built on 4 fundamental prompt engineering techniques:

### 1. **PERSONA** - Who is the AI?
Give the AI a specific role to narrow its focus and draw from relevant expertise.

**Example:**
```
You are a senior marketing strategist with 15 years of experience in B2B SaaS.
```

**Why it works:** Narrows the AI's knowledge space and activates relevant patterns.

---

### 2. **CONTEXT** - What's the situation?
Provide ALL the details. Whatever you don't include, the AI will guess (hallucinate).

**Example:**
```
Context: Revenue up 23%, customer churn down 15%, launched 3 new features, expanded to EU market. Target audience: investors and customers.
```

**Why it works:** Prevents hallucinations by eliminating information gaps.

**Remember:** ABC - Always Be Context-ing!

---

### 3. **FORMAT** - How should it look?
Tell the AI exactly how you want the output structured.

**Example:**
```
Format: 3 bullet points max, each under 50 words. Include metrics as percentages. Tone: professional but conversational.
```

**Why it works:** Ensures consistent, predictable outputs.

---

### 4. **CHAIN OF THOUGHT (CoT)** - How should it think?
Ask the AI to "think step-by-step" before answering. Dramatically improves accuracy.

**Example:**
```
Think step-by-step:
1. List all costs
2. List all benefits
3. Calculate net value
4. Express as percentage
```

**Why it works:** Forces the AI to show its reasoning, catching errors early.

---

## 📖 Understanding the PROMETHEUS Structure

PROMETHEUS uses a lightweight XML structure for maximum clarity:

```xml
<persona>Who is the AI? What expertise does it have?</persona>

<objective>What are you trying to achieve? Be specific and measurable.</objective>

<context>What's the situation? What background information is essential?</context>

<requirements>
• What constraints must be met?
• What should be included?
• What should be avoided?
</requirements>

<steps>
How should the AI approach this task?
1. First step
2. Second step
3. Include self-critique: Review for X
</steps>

<output>What exactly should the AI produce? What format?</output>

<verification>How do you know if the output is successful? What criteria?</verification>
```

### Why XML Tags?

- **Clarity** - Each section has a clear purpose
- **Structure** - Forces you to think systematically
- **Consistency** - Produces reliable, repeatable results
- **Debugging** - Easy to identify what's missing or unclear

---



## 🧠 Advanced Techniques

### Chain of Thought (CoT)
Ask the AI to think step-by-step before answering.

**When to use:** Complex reasoning, calculations, multi-step problems

**Example:**
```
Think step-by-step:
1. What are the key factors?
2. How do they interact?
3. What's the logical conclusion?
```

---

### Tree of Thoughts (ToT)
Have multiple AI "personas" explore different approaches, then synthesize.

**When to use:** Creative problems, strategic decisions, complex analysis

**Example:**
```
Approach this from 3 perspectives:
1. Optimist: What's the best-case scenario?
2. Pessimist: What could go wrong?
3. Realist: What's most likely?

Then synthesize into a balanced recommendation.
```

---

### Self-Critique Loops
Ask the AI to review and improve its own output.

**When to use:** High-stakes content, quality assurance, refinement

**Example:**
```
After generating the output:
1. Review for clichés and weak language
2. Check for logical gaps
3. Revise any flat sections
4. Output final version only
```

---

### Persona Engineering
Craft specific, detailed personas that activate relevant knowledge.

**Bad:** "You are a marketer"  
**Good:** "You are a senior marketing strategist with 15 years of experience in B2B SaaS, specializing in product launches for technical audiences"

**Why:** Specificity activates more relevant patterns in the AI's training.

---

## 🎯 Choosing the Right LLM

Different models have different strengths:

| Model | Best For | Strengths |
|-------|----------|-----------|
| **ChatGPT** | General tasks, creative writing, brainstorming | Conversational, creative, fast |
| **Claude** | Long documents, analysis, nuanced reasoning | Careful, thorough, context-aware |
| **Grok** | Real-time info, truth-seeking, technical depth | Direct, up-to-date, no-nonsense |
| **Gemini** | Multimodal tasks, research, data analysis | Integrates multiple sources, research-oriented |

**Pro Tip:** Use 2-3 models and compare outputs for important tasks. Run the same PROMETHEUS-optimized prompt through ChatGPT and Claude. See which gives better results.

---

## 💡 Best Practices

### Do's ✅

✅ **Start with PROMETHEUS** for any important task  
✅ **Be specific** - Vague prompts = vague outputs  
✅ **Provide context** - ABC (Always Be Context-ing!)  
✅ **Iterate** - First draft is rarely perfect  
✅ **Build a library** - Save prompts that work  
✅ **Experiment** - Try different techniques  
✅ **Compare models** - Each has strengths  

### Don'ts ❌

❌ **Don't assume** the AI knows your context  
❌ **Don't skip verification** - Always check outputs  
❌ **Don't trust blindly** - AI can hallucinate  
❌ **Don't chase every tool** - Master one first  
❌ **Don't give up** - Prompting is a skill (practice!)  

---

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

**Ways to contribute:**
- 📝 Share your PROMETHEUS examples
- 🐛 Report bugs or issues
- 💡 Suggest improvements
- 📚 Improve documentation
- 🎓 Create tutorials

---

## 📞 Support & Community

- **Website:** [prometheus.synthesisarc.com](https://prometheus.synthesisarc.com)
- **GitHub Issues:** [Report bugs or request features](https://github.com/SynthesisArc/prometheus-cycle/issues)
- **Discussions:** [Join the conversation](https://github.com/SynthesisArc/prometheus-cycle/discussions)
- **SynthesisArc:** [Learn more about us](https://synthesisarc.com)

---

## 📜 License

MIT License - See [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgments

PROMETHEUS CYCLE was built by **SynthesisArc** with insights from:
- Anthropic's prompt engineering research
- OpenAI's best practices
- Google's prompting guides
- NetworkChuck's practical tutorials
- Real-world testing with thousands of prompts

Special thanks to the prompt engineering community for continuous feedback and improvements.

---

## 🚀 Get Started Now

1. **[Download PROMETHEUS](prometheus-cycle-v2.md)** - Copy the framework
2. **[Read the Quick Start](docs/quick-start.md)** - 3-minute setup
3. **[Try an Example](examples/)** - See it in action
4. **[Build Your Library](docs/prompt-library.md)** - Save what works

**Get your prompting on point. Start creating magic.** 🔥

---

**Built with ❤️ by [SynthesisArc](https://synthesisarc.com)**  
**Powered by the UCS Full Cognitive Architecture**  
**© 2025 SynthesisArc. All rights reserved.**
