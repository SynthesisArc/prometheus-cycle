# PROMETHEUS Cycle for Claude Code

Single source of truth integration of the PROMETHEUS prompt engineering framework.

## Overview

The PROMETHEUS Cycle enhances Claude Code with a structured 5-phase development methodology: Discovery → Creation → Optimization → Testing → Evaluation → Delivery.

## Installation

### Step 1: Copy the Framework Files

```bash
# From the root of this repository:

# 1. Create directories
mkdir -p ~/.claude/commands

# 2. Install the latest framework (single source of truth)
cp prometheus-cycle/prometheus{current_version}.md ~/.claude/PROMETHEUS.md

# 3. Install the slash command
cp .claude/commands/prometheus.md ~/.claude/commands/prometheus.md

edit ~/.claude/commands/prometheus.md

prepend the following to top the command file

---
name: prometheus
description: expert prompt engineer that creates, optimize, XML – structured prompts with intelligent depth, selection.
argument-hint: [task description]
---

```

### Step 2: Create the Slash Command

Create `~/.claude/commands/prometheus.md` with the following content:

```markdown
Read and apply the PROMETHEUS framework from ~/.claude/PROMETHEUS.md

Execute the full PROMETHEUS cycle on this request:

$ARGUMENTS
```

## Usage

```bash
/prometheus build a CLI tool that monitors docker containers
```

```bash
/prometheus refactor the auth module to use JWT with refresh tokens
```

```bash
/prometheus create a GitHub Actions workflow for multi-environment deployment
```

## How It Works

1. **PROMETHEUS.md** lives in `~/.claude/` as the canonical framework
2. **Slash command** tells Claude to read that file and apply it to your request
3. Claude executes the 5-phase cycle: Discovery → Creation → Optimization → Testing → Evaluation → Delivery

## Optional: Auto-Injection Hook

If you want PROMETHEUS principles injected on every prompt, add to `~/.claude/settings.json`:

```json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "cat ~/.claude/PROMETHEUS.md"
          }
        ]
      }
    ]
  }
}
```

⚠️ **Warning**: This injects the full framework on every prompt, which uses tokens. The slash command approach is more efficient for on-demand use.

## Agent Configuration

Claude Code agents will automatically recognize and use the PROMETHEUS framework when:

1. The `/prometheus` slash command is used
2. The `PROMETHEUS.md` file exists in `~/.claude/`
3. The agent reads the framework and applies the 5-phase cycle to the request

## Framework Reference

Based on [PROMETHEUS CYCLE v4.0](https://github.com/SynthesisArc/prometheus-cycle) by Daniel Willitzer / SynthesisArc.

---

*Last updated: December 2025*