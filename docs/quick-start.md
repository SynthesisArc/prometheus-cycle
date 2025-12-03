# 🚀 Quick Start Guide

Get up and running with PROMETHEUS CYCLE in 3 minutes.

---

## Prerequisites

- Access to an LLM (ChatGPT, Claude, Grok, Gemini, etc.)
- The PROMETHEUS CYCLE framework ([prometheus-cycle-v2.md](../prometheus-cycle-v2.md))

---

## Step 1: Copy the Framework (30 seconds)

1. Open [`prometheus-cycle-v2.md`](../prometheus-cycle-v2.md)
2. Select all text (Ctrl+A or Cmd+A)
3. Copy to clipboard (Ctrl+C or Cmd+C)

---

## Step 2: Paste as System Prompt (30 seconds)

### For ChatGPT:
1. Start a new chat
2. Paste the PROMETHEUS framework as your first message
3. Send it

### For Claude:
1. Start a new conversation
2. Paste the PROMETHEUS framework
3. Send it

### For Grok:
1. Open a new chat
2. Paste the PROMETHEUS framework
3. Send it

**Note:** Some platforms have "system prompt" or "custom instructions" settings. If available, paste PROMETHEUS there for persistent use across all chats.

---

## Step 3: Send Your Task (1 minute)

Simply describe what you want to accomplish. Be as specific or as vague as you like—PROMETHEUS will ask clarifying questions if needed.

### Example Tasks:

**Simple:**
```
Write a professional email declining a meeting request
```

**Medium:**
```
Create a LinkedIn post about why AI literacy matters for business leaders
```

**Complex:**
```
Analyze our customer retention strategy and provide 3 actionable recommendations to reduce churn from 8% to 5%
```

---

## Step 4: Watch PROMETHEUS Work (1 minute)

PROMETHEUS will automatically guide you through all 4 phases:

### Phase 1: CREATION
You'll see a structured base prompt with XML tags:
```xml
<objective>...</objective>
<context>...</context>
<requirements>...</requirements>
<steps>...</steps>
<output>...</output>
<verification>...</verification>
```

### Phase 2: OPTIMIZATION
PROMETHEUS will:
- Audit for flaws
- Inject advanced techniques (CoT, personas, self-critique)
- Provide a "Forge Rationale" explaining improvements

### Phase 3: DEPLOYMENT
You'll get:
- Model-specific optimization
- Execution plan (single run, parallel, or sequential)
- File save location
- Options to run, edit, or save for later

### Phase 4: ITERATION
You'll see:
- Cycle log with scoring
- Progress tracking
- Option to iterate if needed

---

## Step 5: Use Your Optimized Prompt

Copy the optimized prompt from Phase 2 and use it in any LLM. You now have a production-ready, professional-grade prompt!

---

## 🎯 Your First Task

Try this right now:

1. Copy PROMETHEUS
2. Paste it into ChatGPT or Claude
3. Send this task:
   ```
   Write a professional thank-you email after a job interview
   ```
4. Watch PROMETHEUS create a structured, optimized prompt
5. Use that prompt to generate the actual email

**Time:** 3 minutes total

---

## 💡 Pro Tips

### Tip 1: Be Specific About Your Goal
Instead of: "Write an email"  
Try: "Write a professional email declining a meeting request while maintaining the relationship"

### Tip 2: Provide Context When You Have It
Instead of: "Create a report"  
Try: "Create a quarterly sales report for our executive team, highlighting revenue growth and customer acquisition"

### Tip 3: Use Pro Mode for Complex Tasks
Add "pro mode" to your task description for advanced techniques:
```
[Pro mode] Design a multi-agent AI system for customer support automation
```

### Tip 4: Save Your Prompts
PROMETHEUS will save prompts to `./prompts/` directory. Keep a library of your best prompts for reuse.

### Tip 5: Iterate When Needed
If the first output isn't perfect, provide feedback and let PROMETHEUS iterate:
```
The tone is too formal. Make it more conversational and warm.
```

---

## 🔄 What Happens Next?

After your first successful run:

1. **Experiment** - Try different types of tasks
2. **Compare** - Run the same task through different LLMs
3. **Build** - Create your personal prompt library
4. **Learn** - Study the [Core Techniques](core-techniques.md)
5. **Master** - Explore [Advanced Topics](advanced/)

---

## 🆘 Troubleshooting

### "The output is too long"
PROMETHEUS has a 1,200 token limit for prompts. If your task is very complex, break it into smaller subtasks.

### "It's asking too many questions"
PROMETHEUS asks clarifying questions when your task is ambiguous. Provide more context upfront to reduce back-and-forth.

### "I want simpler output"
PROMETHEUS defaults to beginner mode. If you're seeing complex terminology, make sure you haven't accidentally triggered pro mode.

### "It's not working"
Make sure you:
1. Copied the ENTIRE framework (all lines)
2. Pasted it as a single message
3. Sent your task as a separate message after PROMETHEUS confirms it's ready

---

## 📚 Next Steps

- **[Learn the Core Techniques](core-techniques.md)** - Understand the fundamentals
- **[Study the Examples](../examples/)** - See PROMETHEUS in action
- **[Build Your Prompt Library](prompt-library.md)** - Save what works
- **[Explore Advanced Topics](advanced/)** - Level up your prompting

---

**You're ready! Go create something amazing.** 🚀
