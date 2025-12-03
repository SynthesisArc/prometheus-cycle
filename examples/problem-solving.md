# 🤔 Example: Problem Solving (Business Strategy)

This example shows how PROMETHEUS transforms a vague business question into a structured, actionable analysis with quantified recommendations.

---

## The Task

**User Request:**
```
I need help improving customer retention for my B2B SaaS company. Our churn rate is around 8% monthly.
```

---

## ❌ What Most People Do (Basic Prompt)

```
I need help improving customer retention for my B2B SaaS company. Our churn rate is around 8% monthly. Can you analyze this and give me some recommendations?
```

**Problems with this approach:**
- No context about the business
- No constraints (resources, timeline)
- No target metrics
- No prioritization criteria
- No verification of actionability

**Result:** Generic advice that might not fit your specific situation, resources, or stage.

---

## ✅ PROMETHEUS-Optimized Prompt

```xml
<persona>
You are a seasoned B2B SaaS retention strategist with 15+ years of experience helping Series A-B companies reduce churn. You specialize in diagnosing root causes and designing high-ROI interventions that fit resource-constrained environments.
</persona>

<objective>
Analyze our customer retention challenge and provide 3-5 prioritized, actionable recommendations to reduce monthly churn from 8% to 5-6% within 6 months.
</objective>

<context>
• Company: B2B SaaS, Series A funded, 18 months post-launch
• Product: Project management tool for SMBs (10-50 employees)
• Customer base: 50-200 customers, mostly in tech and professional services
• Current churn: 8% monthly (industry benchmark: 5-6% for our stage)
• Revenue: $50K-$150K MRR
• Team: 15 people (3 in customer success, 5 in product/eng)
• Resources: Limited budget, typical Series A constraints
• Timeline: Need recommendations we can implement in Q1
• Goal: Reduce churn to 5-6% within 6 months
</context>

<requirements>
• Recommendations must be specific and actionable (not generic advice)
• Prioritize by impact vs. effort (quick wins + strategic bets)
• Consider our resource constraints (can't hire 10 people)
• Include estimated impact (% reduction in churn)
• Include estimated timeline and resources needed
• Focus on root causes, not just symptoms
• Avoid: Generic advice ("improve customer support"), unfunded mandates, unrealistic timelines
</requirements>

<steps>
Think step-by-step:
1. What are the top 5 reasons customers typically churn in this segment and stage?
2. Which reasons are within our control vs. external factors we can't influence?
3. What interventions have highest ROI based on our stage, resources, and timeline?
4. Prioritize recommendations by impact vs. effort (2x2 matrix thinking)
5. Validate that each recommendation is achievable with our constraints
6. Quantify expected impact and timeline for each recommendation
7. Self-check: Are these specific enough to act on immediately? Do they address root causes?
</steps>

<output>
Structured analysis with:
1. Root Cause Analysis (3-5 key drivers of churn)
2. Prioritized Recommendations (3-5 specific actions)
   - For each: Description, Expected Impact (% churn reduction), Timeline, Resources Needed, Implementation Steps
3. Quick Wins (1-2 things we can do this month)
4. Strategic Bets (1-2 longer-term investments)
5. Success Metrics (how to measure progress)
</output>

<verification>
✓ Recommendations are specific and actionable (not generic)
✓ Each has quantified impact estimate (% churn reduction)
✓ Each has realistic timeline and resource requirements
✓ Prioritization considers impact vs. effort
✓ Addresses root causes, not just symptoms
✓ Achievable with Series A constraints
✓ Can start implementing immediately
</verification>
```

---

## 📊 Key Improvements

| Aspect | Basic Prompt | PROMETHEUS Prompt |
|--------|--------------|-------------------|
| **Persona** | None | B2B SaaS retention strategist with 15+ years |
| **Context** | Minimal | Full company profile, stage, resources, constraints |
| **Goal** | "Improve retention" | "Reduce churn from 8% to 5-6% in 6 months" |
| **Prioritization** | None | Impact vs. effort, quick wins + strategic bets |
| **Quantification** | None | Expected impact %, timeline, resources |
| **Constraints** | None | Series A resources, Q1 timeline |
| **Verification** | None | 7 specific criteria |
| **Root Cause Analysis** | None | Built into steps |

---

## 📝 Sample Output

Using the PROMETHEUS prompt, here's what you might get:

---

### Root Cause Analysis

Based on typical B2B SaaS churn patterns at your stage, the top 5 drivers are likely:

1. **Poor Onboarding** (30-40% of churn) - Customers don't reach "aha moment" in first 30 days
2. **Lack of Engagement** (25-30%) - Low usage after initial setup, product becomes "shelfware"
3. **Missing Features** (15-20%) - Customers hit limitations and switch to competitors
4. **Poor Support Experience** (10-15%) - Slow response times, unresolved issues
5. **Price/Value Mismatch** (5-10%) - Perceived value doesn't justify cost

**Within Your Control:** #1, #2, #4 (high control), #3 (medium control), #5 (low control)

---

### Prioritized Recommendations

#### 🎯 Quick Win #1: Implement 30-Day Onboarding Cadence
**Impact:** 2-3% churn reduction  
**Timeline:** 4 weeks to implement  
**Resources:** 1 CS person, 40 hours total  

**What to do:**
- Week 1: Welcome email + setup call (15 min)
- Week 2: Check-in email + usage report
- Week 3: Best practices webinar invite
- Week 4: Success milestone celebration + expansion conversation

**Why it works:** Most churn happens in first 60 days. Structured onboarding ensures customers reach value quickly.

**Implementation:**
1. Create email templates (Week 1)
2. Build automated workflows in your CRM (Week 2)
3. Train CS team (Week 3)
4. Launch and monitor (Week 4)

---

#### 🎯 Quick Win #2: Create In-App Engagement Triggers
**Impact:** 1-2% churn reduction  
**Timeline:** 6 weeks to implement  
**Resources:** 1 engineer, 80 hours; 1 product person, 20 hours  

**What to do:**
- Identify "healthy usage" patterns (e.g., 3+ projects created, 5+ team members active)
- Set up alerts when customers fall below thresholds
- Trigger automated in-app messages + CS outreach

**Why it works:** Proactive intervention before customers disengage completely.

**Implementation:**
1. Analyze usage data to define "healthy" thresholds (Week 1-2)
2. Build in-app messaging system (Week 3-4)
3. Create CS playbook for outreach (Week 5)
4. Launch and iterate (Week 6)

---

#### 🚀 Strategic Bet #1: Build Customer Health Score System
**Impact:** 3-4% churn reduction (long-term)  
**Timeline:** 12 weeks to implement  
**Resources:** 1 data analyst, 120 hours; 1 engineer, 60 hours; CS team, 40 hours  

**What to do:**
- Define health score based on usage, engagement, support tickets, NPS
- Build dashboard for CS team
- Create automated workflows for at-risk customers
- Establish quarterly business reviews for top accounts

**Why it works:** Predictive churn prevention vs. reactive firefighting.

**Implementation:**
1. Define health score model (Week 1-2)
2. Build data pipeline and dashboard (Week 3-6)
3. Create CS playbooks for each health tier (Week 7-8)
4. Train team and launch (Week 9-10)
5. Iterate based on results (Week 11-12)

---

#### 🚀 Strategic Bet #2: Launch Customer Advisory Board
**Impact:** 1-2% churn reduction + product insights  
**Timeline:** 8 weeks to launch  
**Resources:** 1 product person, 60 hours; 1 CS person, 40 hours  

**What to do:**
- Invite 8-12 top customers to quarterly advisory board
- Gather feedback on roadmap, pain points, feature requests
- Make customers feel heard and invested in product direction

**Why it works:** Increases customer investment, provides early warning on churn risks, informs product roadmap.

**Implementation:**
1. Identify and invite members (Week 1-2)
2. Plan first meeting agenda (Week 3)
3. Host first meeting (Week 4)
4. Synthesize feedback and share with team (Week 5-6)
5. Communicate roadmap updates to board (Week 7-8)

---

### Success Metrics

**Track these monthly:**
- Monthly churn rate (goal: 8% → 5-6%)
- 30-day activation rate (% of new customers reaching "aha moment")
- Average health score (trending up)
- Support ticket resolution time (trending down)
- NPS score (trending up)

**Leading indicators (track weekly):**
- % of customers in onboarding cadence
- % of customers below "healthy usage" threshold
- % of at-risk customers receiving proactive outreach

---

### Expected Impact Timeline

- **Month 1:** Implement Quick Wins → 1-2% churn reduction
- **Month 2-3:** Quick Wins mature → 3-4% churn reduction
- **Month 4-6:** Strategic Bets launch → 4-5% churn reduction
- **Month 6+:** Full system operational → 5-6% churn rate achieved

**Total Investment:** ~400 hours across team (10 weeks of 1 FTE)  
**Expected ROI:** Reducing churn from 8% to 6% saves ~$10K-$30K MRR over 6 months

---

## 🎯 Why This Works

### 1. Quantified Everything
Every recommendation has:
- Expected impact (% churn reduction)
- Timeline (weeks to implement)
- Resources needed (hours, people)
- Implementation steps

### 2. Prioritized by Impact vs. Effort
Quick Wins = High impact, low effort (do first)  
Strategic Bets = High impact, higher effort (invest for long-term)

### 3. Addressed Root Causes
Didn't just say "improve customer support." Identified specific drivers (poor onboarding, lack of engagement) and targeted interventions.

### 4. Realistic Constraints
Acknowledged Series A resources. Didn't recommend "hire 10 people" or "rebuild the product."

### 5. Actionable Immediately
Each recommendation has clear implementation steps. You could start tomorrow.

---

## 💡 Problem-Solving Principles

### 1. Root Cause > Symptoms
Don't just treat symptoms ("customers are leaving"). Dig into WHY they're leaving.

### 2. Quantify Everything
"Improve retention" is vague. "Reduce churn from 8% to 5-6% in 6 months" is specific and measurable.

### 3. Prioritize by Impact vs. Effort
Not all recommendations are equal. Focus on high-impact, low-effort wins first.

### 4. Consider Constraints
Generic advice ignores reality. Great advice fits your stage, resources, and timeline.

### 5. Make It Actionable
"Improve customer support" is not actionable. "Implement 30-day onboarding cadence with 4 touchpoints" is.

---

## 🔄 Try It Yourself

**Exercise:** Adapt the PROMETHEUS prompt for this scenario:

**Task:** Our sales cycle is too long (6+ months). How do we shorten it to 3-4 months?

**Your Turn:**
1. What persona would you use?
2. What context is essential?
3. What quantified goal?
4. What steps for root cause analysis?
5. How would you prioritize recommendations?

---

## 📚 Related Examples

- **[Email Writing](email-writing.md)** - Professional communication
- **[Content Creation](content-creation.md)** - LinkedIn posts, blog articles
- **[Data Analysis](data-analysis.md)** - Insights and recommendations

---

**Master problem-solving prompts, and you'll make better decisions faster.** 🤔
