---
title: "The Design Process Is Dead. Here's What Replaced It."
description: "AI changed how engineers ship software forever — designers must adapt. Discover the new design process that keeps you relevant, fast, and in sync with your team."
hook: "Engineers are shipping faster than you can open Figma."
publishedAt: 2026-03-13
draft: false
tags:
  [
    "Design",
    "AI Tools",
    "Career",
    "Design Process",
    "Product",
  ]
---

<div style="background: linear-gradient(135deg, #1e1640 0%, #0f2e22 40%, #2a1a0a 100%); border-radius: 16px; height: 220px; display: flex; align-items: center; justify-content: center; margin-bottom: 48px; position: relative; overflow: hidden;">
  <div style="position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 50%, rgba(127,119,221,0.15), transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(29,158,117,0.12), transparent 60%);"></div>
  <span style="font-family: var(--font-sans); font-size: 14px; color: rgba(255,255,255,0.4); letter-spacing: 0.1em; text-transform: uppercase; position: relative; z-index: 1;">Design × Engineering × AI</span>
</div>

Imagine this. It's the start of a quarter. You know exactly what to do. You go do some user research. You make this perfect persona — it's got demographic data, a fake name, a generated photo. You create a beautiful user journey map showing every step, every emotion, every pain point. You lead a brainstorm. Sticky notes everywhere. You write the perfect problem statement. *How might we...* You brainstorm solutions. More sticky notes. You pick one, wireframe it in low-fi, then higher fidelity, then pixel-perfect. You run a usability study. You hand it off.

Hooray. You just followed the design process. You solved all the company's problems. You made millions of dollars. You created a product people love.

Right? *Right?*

**That process is dead.** Not because it was wrong — it was genuinely useful for a decade. But the environment has changed so drastically that clinging to it now is like insisting on waterfall when your entire team has gone agile.

> "This design process that designers have been taught — we sort of treat it as gospel. That's basically dead."
> <cite>— Jenny Wen, Design Lead at Anthropic, former Director of Design at Figma</cite>

The shift is everywhere — not just at Anthropic or OpenAI. Engineers aren't asking for permission to ship anymore. They're just shipping. The question isn't whether to change. It's how to change in a way that makes you more valuable, not less.

---

## How fast is "fast" now?

A few years ago, a PM pitching a feature would wait for a designer to create mockups before anyone could visualize whether the idea was worth pursuing. That back-and-forth could take days. Sometimes weeks.

Today, a PM can vibe-code a working prototype in a few hours. An engineer can spin up seven Claude agents in parallel, each tackling a different piece of a feature — simultaneously. By the time you've opened Figma, there's already a real, clickable, testable thing in the world.

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin: 40px 0;">
  <div style="background: linear-gradient(145deg, rgba(127,119,221,0.1), rgba(127,119,221,0.03)); border: 1px solid rgba(127,119,221,0.2); border-radius: 12px; padding: 24px 20px; text-align: center;">
    <div style="font-size: 36px; font-weight: 700; color: #9b8fe8; font-family: var(--font-sans); line-height: 1;">60–70%</div>
    <div style="font-family: var(--font-sans); font-size: 13px; color: var(--color-text-muted); margin-top: 8px;">of design time was mocking & prototyping a few years ago</div>
  </div>
  <div style="background: linear-gradient(145deg, rgba(29,158,117,0.1), rgba(29,158,117,0.03)); border: 1px solid rgba(29,158,117,0.2); border-radius: 12px; padding: 24px 20px; text-align: center;">
    <div style="font-size: 36px; font-weight: 700; color: #3dbf8e; font-family: var(--font-sans); line-height: 1;">30–40%</div>
    <div style="font-family: var(--font-sans); font-size: 13px; color: var(--color-text-muted); margin-top: 8px;">of design time is mocking today — the rest is execution & pairing</div>
  </div>
  <div style="background: linear-gradient(145deg, rgba(239,159,39,0.1), rgba(239,159,39,0.03)); border: 1px solid rgba(239,159,39,0.2); border-radius: 12px; padding: 24px 20px; text-align: center;">
    <div style="font-size: 36px; font-weight: 700; color: #f0a83a; font-family: var(--font-sans); line-height: 1;">3–6 mo</div>
    <div style="font-family: var(--font-sans); font-size: 13px; color: var(--color-text-muted); margin-top: 8px;">is now the realistic vision horizon — not 2 or 5 years</div>
  </div>
</div>

Jenny Wen described her own pie chart shifting dramatically. The mocking slice has nearly halved. In its place: pairing directly with engineers, implementing polish in code, and doing rapid directional vision work. The tools changed. The time allocation had to follow.

---

## Start from the solution, not the problem

Here's something the old process made feel illegal: **starting with a solution before you've defined the problem.**

Claude Artifacts — the interactive right-panel that spawned a pattern now copied across every AI product — didn't come from a problem statement. A researcher built a janky prototype. One of the designers on the team saw it and thought *I love this*. He iterated on it, built his own version, and the reactions across the team were immediate. Nobody had written a "how might we." They didn't know it was a problem worth solving until they saw the solution.

The old process treated this as heresy. But in an era where AI capabilities ship faster than you can research them, **you often have to work backwards** — see what the technology makes possible, then figure out which problems it solves. That's fundamentally different from the last decade, where the tech was relatively static and you went hunting for problems.

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; margin: 32px 0;">
  <div style="background: linear-gradient(160deg, rgba(226,75,74,0.08), rgba(226,75,74,0.02)); border: 1px solid rgba(226,75,74,0.2); border-radius: 12px; padding: 20px;">
    <div style="font-family: var(--font-sans); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; color: #e24b4a;">&#10005; Losing leverage</div>
    <ul style="font-family: var(--font-sans); font-size: 14px; color: var(--color-text-muted); padding-left: 18px; line-height: 1.8;">
      <li>Writing perfect problem statements</li>
      <li>8-week research sprints</li>
      <li>Beautiful 40-slide vision decks</li>
      <li>Waiting to hand off mocks</li>
      <li>Gatekeeping the design phase</li>
    </ul>
  </div>
  <div style="background: linear-gradient(160deg, rgba(29,158,117,0.1), rgba(29,158,117,0.02)); border: 1px solid rgba(29,158,117,0.25); border-radius: 12px; padding: 20px;">
    <div style="font-family: var(--font-sans); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; color: #3dbf8e;">&#10003; Gaining leverage</div>
    <ul style="font-family: var(--font-sans); font-size: 14px; color: var(--color-text-muted); padding-left: 18px; line-height: 1.8;">
      <li>Prototyping in actual code</li>
      <li>Operating on strong intuition</li>
      <li>Pairing with engineers daily</li>
      <li>Shipping, learning, iterating fast</li>
      <li>Betting on ideas others can't yet see</li>
    </ul>
  </div>
</div>

Jenny put it well: the design process is like a set of IKEA instructions. Same steps every time, and you're supposed to get a Billy bookshelf at the end. But when you're designing something new, you don't *know* what the end result is. It could be a bookshelf. It could be a chair. It could be a hot dog. **If you don't know what you're building, how can you use the same steps every time?**

And here's the uncomfortable truth: the user doesn't care about your process artifacts. They don't care about your journey map or your perfectly formatted problem statement. They care about the thing they're looking at and how it feels to use. You see this in portfolios constantly — 80% process artifacts, beautifully presented, and then one screen at the very end that's just... fine.

---

## The new workflow, visualized

The old process was linear. Research → define → ideate → prototype → test → launch. Clean arrows. The new process is messier, faster, and more parallel — design bifurcates into two modes: **execution** (pairing with engineers, polishing in code, reviewing live builds) and **vision** (where is this going in 90 days?). Both run alongside engineering, not before it.

<div style="background: linear-gradient(180deg, var(--color-bg-surface), rgba(14,17,22,0.6)); border: 1px solid var(--color-border); border-radius: 16px; padding: 32px 24px; margin: 48px 0;">
  <div style="font-family: var(--font-sans); font-size: 13px; color: var(--color-text-muted); margin-bottom: 24px; text-align: center; letter-spacing: 0.04em;">OLD LINEAR VS. NEW PARALLEL DESIGN FLOW</div>
  <!-- OLD: Sequential -->
  <div style="margin-bottom: 28px; opacity: 0.7;">
    <div style="font-family: var(--font-sans); font-size: 11px; font-weight: 600; color: #c45a59; letter-spacing: 0.08em; margin-bottom: 12px;">OLD — SEQUENTIAL</div>
    <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
      <span style="font-family: var(--font-sans); font-size: 11px; color: #706b65; background: rgba(226,75,74,0.05); border: 1px solid rgba(226,75,74,0.15); border-radius: 6px; padding: 5px 12px;">Research</span>
      <span style="color: rgba(226,75,74,0.35); font-size: 13px;">→</span>
      <span style="font-family: var(--font-sans); font-size: 11px; color: #706b65; background: rgba(226,75,74,0.05); border: 1px solid rgba(226,75,74,0.15); border-radius: 6px; padding: 5px 12px;">Define</span>
      <span style="color: rgba(226,75,74,0.35); font-size: 13px;">→</span>
      <span style="font-family: var(--font-sans); font-size: 11px; color: #706b65; background: rgba(226,75,74,0.05); border: 1px solid rgba(226,75,74,0.15); border-radius: 6px; padding: 5px 12px;">Ideate</span>
      <span style="color: rgba(226,75,74,0.35); font-size: 13px;">→</span>
      <span style="font-family: var(--font-sans); font-size: 11px; color: #706b65; background: rgba(226,75,74,0.05); border: 1px solid rgba(226,75,74,0.15); border-radius: 6px; padding: 5px 12px;">Prototype</span>
      <span style="color: rgba(226,75,74,0.35); font-size: 13px;">→</span>
      <span style="font-family: var(--font-sans); font-size: 11px; color: #706b65; background: rgba(226,75,74,0.05); border: 1px solid rgba(226,75,74,0.15); border-radius: 6px; padding: 5px 12px;">Test</span>
      <span style="color: rgba(226,75,74,0.35); font-size: 13px;">→</span>
      <span style="font-family: var(--font-sans); font-size: 11px; color: #706b65; background: rgba(226,75,74,0.05); border: 1px solid rgba(226,75,74,0.15); border-radius: 6px; padding: 5px 12px;">Handoff</span>
      <span style="color: rgba(226,75,74,0.35); font-size: 13px;">→</span>
      <span style="font-family: var(--font-sans); font-size: 11px; color: #706b65; background: rgba(226,75,74,0.05); border: 1px solid rgba(226,75,74,0.15); border-radius: 6px; padding: 5px 12px;">Launch</span>
    </div>
    <div style="font-family: var(--font-sans); font-size: 10px; color: #c45a59; opacity: 0.5; margin-top: 10px;">Weeks → Months</div>
  </div>
  <!-- Divider -->
  <div style="border-top: 1px solid rgba(255,255,255,0.06); margin-bottom: 28px;"></div>
  <!-- NEW: Parallel -->
  <div>
    <div style="font-family: var(--font-sans); font-size: 11px; font-weight: 600; color: #5dcaa5; letter-spacing: 0.08em; margin-bottom: 4px;">NEW — PARALLEL</div>
    <div style="font-family: var(--font-sans); font-size: 10px; color: #888780; margin-bottom: 14px;">Designers and engineers work in the same codebase, simultaneously.</div>
    <!-- Shared codebase container -->
    <div style="border: 1px dashed rgba(93,202,165,0.2); border-radius: 12px; padding: 16px; margin-bottom: 12px; background: rgba(29,158,117,0.02);">
      <div style="font-family: var(--font-sans); font-size: 10px; font-weight: 600; color: #5dcaa5; letter-spacing: 0.06em; margin-bottom: 12px; opacity: 0.7;">SAME CODEBASE / SAME REPO</div>
      <!-- Engineering track -->
      <div style="background: linear-gradient(135deg, rgba(29,158,117,0.12), rgba(29,158,117,0.04)); border: 1px solid rgba(29,158,117,0.25); border-radius: 8px; padding: 10px 14px; margin-bottom: 8px;">
        <div style="font-family: var(--font-sans); font-size: 11px; font-weight: 600; color: #5dcaa5;">Engineering + AI agents</div>
        <div style="font-family: var(--font-sans); font-size: 10px; color: #888780;">Ship → iterate → ship → iterate (continuous)</div>
      </div>
      <!-- Design in code track -->
      <div style="background: linear-gradient(135deg, rgba(127,119,221,0.12), rgba(127,119,221,0.04)); border: 1px solid rgba(127,119,221,0.25); border-radius: 8px; padding: 10px 14px;">
        <div style="font-family: var(--font-sans); font-size: 11px; font-weight: 600; color: #afa9ec;">Design in code</div>
        <div style="font-family: var(--font-sans); font-size: 10px; color: #888780;">Pair with eng, polish UI, review PRs, tweak CSS, run local builds</div>
      </div>
    </div>
    <!-- Bottom row: Vision + Feedback -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
      <div style="background: linear-gradient(135deg, rgba(239,159,39,0.1), rgba(239,159,39,0.03)); border: 1px solid rgba(239,159,39,0.25); border-radius: 8px; padding: 10px 14px;">
        <div style="font-family: var(--font-sans); font-size: 11px; font-weight: 600; color: #f0a83a;">Design — vision mode</div>
        <div style="font-family: var(--font-sans); font-size: 10px; color: #888780;">3–6mo direction, prototypes</div>
      </div>
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 10px 14px;">
        <div style="font-family: var(--font-sans); font-size: 11px; font-weight: 600; color: #888780;">User feedback → next iteration</div>
        <div style="font-family: var(--font-sans); font-size: 10px; color: #666461;">Real data feeds back into the codebase</div>
      </div>
    </div>
    <div style="font-family: var(--font-sans); font-size: 10px; color: #5dcaa5; opacity: 0.6;">Days → Weeks</div>
  </div>
</div>

Design and engineering are no longer sequential — they're parallel. Design isn't a gate before engineering starts. It's a thread running alongside, sometimes ahead (vision), sometimes behind (polish), sometimes simultaneous (pairing).

---

## Intuition is your superpower, not a dirty word

For a decade, the design industry trained us to distrust our gut. Every decision needed research. Every recommendation needed a user quote. Intuition was considered sloppy — the opposite of user-centered design.

Jenny calls this out directly: designers treat intuition like it's just vibes or whoever has the best argument. But that's not what it is.

> "Intuition is not guessing. It's the ability to make reasoned judgments quickly. It's a shortcut to thinking really long and hard because you know the subject so deeply."
> <cite>— Jenny Wen</cite>

The designers who are thriving right now have built sharp intuition deliberately. They read user feedback obsessively — Twitter, Reddit, internal boards, sales team notes. They go to research sessions outside their product area. They watch usage dashboards to feel the trends. They draw on cognitive biases and design principles to predict behavior before testing it.

They're building an internal model of the world so aggressively that they can make good calls fast — without an 8-week research sprint for every decision. **That intuition is what makes you a great designer.** You wield it for decisions of all sizes: picking the right pattern, defending a direction, making a snap choice on a Tuesday afternoon. AI can't generate that. It's yours.

---

## Design where the product actually lives

Here's the practical shift nobody talks about enough: **designers need to be in the same repo as the engineers.** Not in a parallel Figma universe. In the actual codebase, running the actual app, seeing the actual pixels on screen.

> "It's no longer 'should designers code' — designers *can* code. We don't have to just make static pictures anymore. We can prototype really easily and we can implement to fit and finish all by ourselves."
> <cite>— Jenny Wen</cite>

Think about what this means concretely. When the FigJam team built stamps, emotes, and cursor chat — features that became some of the most beloved in the product — the process wasn't: design in Figma, hand off specs, wait for engineers. It was: prototype in real code, try it out in internal builds, show up to people's meetings uninvited and watch them use it. Even with usability issues everywhere, they could see people smiling and laughing. They knew they had something. That signal doesn't show up in a static mock.

A Figma mock is a picture of your idea. A locally running app *is* your idea. There's an enormous difference between looking at a screen in a design tool and feeling a component render on an actual phone — the scroll physics, the tap targets, the way a transition lands at 60fps. That's where design judgment actually matters.

What this looks like in practice: you clone the repo. You run `npm run dev` or build to a simulator. You see the feature as users will see it — on web, on iOS, on Android. And then you design *there*. You tweak the padding. You adjust the color. You feel whether that hover state lands or if the loading skeleton feels too abrupt. You open a pull request with your changes, not a Figma link with redlines.

This isn't about replacing Figma. Figma is still valuable for exploration and vision work. But the final mile — the craft, the polish, the thing that makes a user say *this feels good* — that happens in code now. Claude Code, Cursor, v0 — these make it possible for a designer with taste but limited engineering experience to ship real changes in a production codebase. **Start small. Ship one thing per week that you built, not just mocked.**

<div style="background: linear-gradient(145deg, rgba(239,159,39,0.08), rgba(239,159,39,0.02)); border: 1px solid rgba(239,159,39,0.2); border-radius: 12px; padding: 24px 28px; margin: 40px 0;">
  <div style="font-family: var(--font-sans); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #f0a83a; font-weight: 600; margin-bottom: 10px;">The craft is in the code</div>
  <p style="font-family: var(--font-sans); font-size: 15px; color: var(--color-text-muted); margin: 0; line-height: 1.6;">FigJam's team spent years after launch iterating on snapping, selection borders, toolbar interactions, font size controls. That ruthless micro-attention is what built user loyalty — and none of it happened in a design tool. It happened in the repo, one pull request at a time.</p>
</div>

---

## What doesn't change

Amid the upheaval, a few things stay constant.

**Taste is the anti-slop.** In a world where you can one-shot prompt something that looks passable, the bar just moved. Your work has to be better than what AI generates for free. Think about the apps people actually *choose* to pay for: Linear's speed. Notion Calendar's polish. That gorgeous camera app with tactile knobs and sound effects. These are the anti-AI slop — they feel considered, crafted, human. They weren't made by following a double diamond. They were made by people who cared enough to spend a Tuesday afternoon on a hover state.

**Accountability still requires humans.** AI can advise, analyze, generate options. But the decision — with all its downstream consequences — still needs a person behind it. Someone has to say: we're building this, not that.

**Your value is in the judgment, not the process.** If anyone could follow the steps and get great work, then anyone could be a designer. Your power is in knowing *which* tools to reach for, *when* to skip steps, *what* to bet on. That's intuition. That's taste. That's the thing worth building.

> "Our value isn't in repeating a process. If it was, anyone could be a designer. We're rewriting the process right now."
> <cite>— Jenny Wen</cite>

---

<div style="background: linear-gradient(135deg, rgba(127,119,221,0.12) 0%, rgba(29,158,117,0.1) 50%, rgba(239,159,39,0.08) 100%); border: 1px solid rgba(127,119,221,0.2); border-radius: 16px; padding: 40px 32px; margin: 56px 0; text-align: center; position: relative; overflow: hidden;">
  <div style="position: absolute; inset: 0; background: radial-gradient(ellipse at 20% 80%, rgba(127,119,221,0.08), transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(29,158,117,0.06), transparent 50%);"></div>
  <h3 style="font-family: var(--font-sans); font-size: 20px; font-weight: 600; color: #f0ece4; margin-bottom: 12px; text-transform: none; letter-spacing: 0; position: relative;">Trust yourself, not the process</h3>
  <p style="font-family: var(--font-sans); font-size: 15px; color: var(--color-text-secondary); margin: 0; position: relative;">This is scary because there's no manual. You have to both chart the map and define what you're building — every single time. But honestly? It's also kind of fun. The new era of design demands that you build real things, develop sharp judgment, stay close to the work, and point your team toward something worth building. It's more interesting than following a diamond.</p>
</div>
