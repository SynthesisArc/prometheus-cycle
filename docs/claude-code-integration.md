# PROMETHEUS Cycle for Claude Code

Single source of truth integration of the PROMETHEUS prompt engineering framework.

## Overview

The PROMETHEUS Cycle enhances Claude Code with a structured 5-phase development methodology: Discovery → Creation → Optimization → Testing → Evaluation → Delivery.

## Installation

### Step 1: Install the PROMETHEUS Framework

```bash
# From the root of this repository:

# 1. Create directories
mkdir -p ~/.claude/commands

# 2. Copy the latest version of the framework from the repo root into ~/.claude/PROMETHEUS.md
# Note: Update to the current version when releasing new versions
cp prometheus-cycle-v4.0.md ~/.claude/PROMETHEUS.md

# 3. Install the slash command with metadata
cat > ~/.claude/commands/prometheus.md << 'EOF'
---
name: prometheus
description: expert prompt engineer that creates, optimize, XML – structured prompts with intelligent depth, selection.
argument-hint: [task description]
---

Read and apply the PROMETHEUS framework from ~/.claude/PROMETHEUS.md

Execute the full PROMETHEUS cycle on this request:

$ARGUMENTS
EOF
```

That's it! The PROMETHEUS framework is now installed and ready to use.

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