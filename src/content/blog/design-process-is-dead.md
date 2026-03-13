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

<div style="background: linear-gradient(135deg, #1a183a 0%, #0d2b20 50%, #1e1208 100%); border-radius: 16px; height: 200px; display: flex; align-items: center; justify-content: center; margin-bottom: 48px; position: relative; overflow: hidden;">
  <span style="font-family: var(--font-sans); font-size: 13px; color: rgba(255,255,255,0.3); letter-spacing: 0.06em; text-transform: uppercase;">Design × Engineering × AI</span>
</div>

Seven agents. Running in parallel. Constantly. That's the reality inside a modern engineering team right now — and it's not just at Anthropic or OpenAI. It's happening at product companies everywhere. Engineers aren't asking for permission to ship anymore. They're just shipping.

So what does that mean for design?

**It means the old process — research, personas, journey maps, problem statements, wireframes, high-fidelity mocks, handoff — is over.** Not because it was wrong. It was genuinely useful for a decade. But the environment has changed so drastically that clinging to it now is like insisting on waterfall development when your entire team has gone agile.

> "This design process that designers have been taught — we sort of treat it as gospel. That's basically dead."
> <cite>— Jenny Wen, Design Lead at Anthropic, former Director of Design at Figma</cite>

The shift isn't optional. It's not a trend. It's the direct consequence of one thing: **building software has gotten astronomically faster**, and design hasn't kept pace. The question isn't whether to change. It's how to change in a way that makes you more valuable, not less.

---

## How fast is "fast" now?

Let's make this concrete. A few years ago, a product manager or engineer pitching a feature would wait for a designer to create mockups before they could visualize whether the idea was worth pursuing. That back-and-forth could take days. Sometimes weeks.

Today, a PM can vibe-code a working prototype in a few hours. An engineer can spin up seven Claude agents running in parallel, each tackling a different part of a feature — simultaneously. By the time a designer has opened Figma, there's already a real, clickable, testable thing in the world.

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin: 40px 0;">
  <div style="background: var(--color-bg-elevated); border: 1px solid var(--color-border); border-radius: 12px; padding: 24px 20px; text-align: center;">
    <div style="font-size: 36px; font-weight: 700; color: #7f77dd; font-family: var(--font-sans); line-height: 1;">60–70%</div>
    <div style="font-family: var(--font-sans); font-size: 13px; color: var(--color-text-muted); margin-top: 8px;">of design time was mocking & prototyping a few years ago</div>
  </div>
  <div style="background: var(--color-bg-elevated); border: 1px solid var(--color-border); border-radius: 12px; padding: 24px 20px; text-align: center;">
    <div style="font-size: 36px; font-weight: 700; color: #7f77dd; font-family: var(--font-sans); line-height: 1;">30–40%</div>
    <div style="font-family: var(--font-sans); font-size: 13px; color: var(--color-text-muted); margin-top: 8px;">of design time is mocking today — the rest is execution & pairing</div>
  </div>
  <div style="background: var(--color-bg-elevated); border: 1px solid var(--color-border); border-radius: 12px; padding: 24px 20px; text-align: center;">
    <div style="font-size: 36px; font-weight: 700; color: #7f77dd; font-family: var(--font-sans); line-height: 1;">3–6 mo</div>
    <div style="font-family: var(--font-sans); font-size: 13px; color: var(--color-text-muted); margin-top: 8px;">is now the realistic vision horizon — not 2 or 5 years</div>
  </div>
</div>

This isn't hypothetical. Jenny Wen, who led design for Claude at Anthropic (and before that, built Fig Jam at Figma), described her pie chart shifting dramatically. The mocking and prototyping slice has nearly halved. In its place: pairing directly with engineers, implementing polish in code, and doing rapid directional vision work.

---

## The two modes of modern design work

Design work is bifurcating. There are now two distinct modes, and knowing which one you're in — and switching between them fluidly — is a core skill for 2025.

<div style="background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: 16px; padding: 32px 24px; margin: 48px 0;">
  <div style="font-family: var(--font-sans); font-size: 13px; color: var(--color-text-muted); margin-bottom: 20px; text-align: center; letter-spacing: 0.04em;">THE TWO MODES OF MODERN DESIGN WORK</div>
  <svg width="100%" viewBox="0 0 640 280">
    <defs>
      <marker id="arr1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </marker>
    </defs>
    <rect x="30" y="40" width="260" height="200" rx="14" fill="rgba(127,119,221,0.08)" stroke="#534AB7" stroke-width="0.8"/>
    <text x="160" y="72" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="13" font-weight="600" fill="#afa9ec" letter-spacing="0.06em">MODE 1</text>
    <text x="160" y="96" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="16" font-weight="700" fill="#f0ece4">Execution &amp; Support</text>
    <line x1="60" y1="110" x2="260" y2="110" stroke="rgba(127,119,221,0.2)" stroke-width="0.5"/>
    <text x="160" y="136" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="13" fill="#888780">Pair with engineers</text>
    <text x="160" y="158" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="13" fill="#888780">Polish &amp; implement in code</text>
    <text x="160" y="180" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="13" fill="#888780">Review &amp; guide live builds</text>
    <text x="160" y="202" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="13" fill="#888780">Design system guardrails</text>
    <text x="160" y="224" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="12" fill="#534AB7">Fast-moving, always on</text>
    <rect x="350" y="40" width="260" height="200" rx="14" fill="rgba(29,158,117,0.07)" stroke="#0F6E56" stroke-width="0.8"/>
    <text x="480" y="72" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="13" font-weight="600" fill="#5dcaa5" letter-spacing="0.06em">MODE 2</text>
    <text x="480" y="96" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="16" font-weight="700" fill="#f0ece4">Vision &amp; Direction</text>
    <line x1="380" y1="110" x2="580" y2="110" stroke="rgba(29,158,117,0.2)" stroke-width="0.5"/>
    <text x="480" y="136" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="13" fill="#888780">3–6 month prototypes</text>
    <text x="480" y="158" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="13" fill="#888780">North star narratives</text>
    <text x="480" y="180" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="13" fill="#888780">Point team toward something</text>
    <text x="480" y="202" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="13" fill="#888780">Spot illegible ideas early</text>
    <text x="480" y="224" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="12" fill="#0F6E56">Rare, focused time blocks</text>
    <circle cx="320" cy="140" r="18" fill="var(--color-bg-elevated)" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
    <text x="320" y="145" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="12" font-weight="600" fill="#888780">VS</text>
  </svg>
</div>

**Mode 1 is the default state.** It's reactive. It's collaborative. It means being in Slack, in the codebase, in a Loom review. Not blocking. Not saying "wait for my mocks." Instead: running alongside engineers and helping what they're building land well.

**Mode 2 is protected time.** It's where you ask: where is this product going in 90 days? Not a 47-slide deck. A prototype. A prototype that points people north. It's rarer, harder to carve out, and increasingly valuable precisely because everyone else is in execution mode.

---

## What actually makes great products in this era

Here's something worth saying plainly: **the design process never guaranteed great work.** The best products you've ever loved weren't made by following a double diamond. They were made by teams that cared deeply, moved fast, and made judgment calls.

The research process that led to Claude Artifacts — the interactive right-panel that spawned a pattern now copied across every AI product — didn't come from a problem statement. It came from a researcher building a prototype, a designer seeing something in it, and a team reacting. *The solution came first. The problem revealed itself after.*

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 32px 0;">
  <div style="background: var(--color-bg-elevated); border: 1px solid rgba(226, 75, 74, 0.2); border-radius: 12px; padding: 20px;">
    <div style="font-family: var(--font-sans); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; color: #e24b4a;">✕ Losing leverage</div>
    <ul style="font-family: var(--font-sans); font-size: 14px; color: var(--color-text-muted); padding-left: 18px; line-height: 1.8;">
      <li>Writing perfect problem statements</li>
      <li>8-week research sprints</li>
      <li>Beautiful 40-slide vision decks</li>
      <li>Waiting to hand off mocks</li>
      <li>Gatekeeping the design phase</li>
    </ul>
  </div>
  <div style="background: var(--color-bg-elevated); border: 1px solid rgba(29, 158, 117, 0.25); border-radius: 12px; padding: 20px;">
    <div style="font-family: var(--font-sans); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; color: #1d9e75;">✓ Gaining leverage</div>
    <ul style="font-family: var(--font-sans); font-size: 14px; color: var(--color-text-muted); padding-left: 18px; line-height: 1.8;">
      <li>Prototyping in actual code</li>
      <li>Operating on strong intuition</li>
      <li>Pairing with engineers daily</li>
      <li>Shipping, learning, iterating fast</li>
      <li>Spotting illegible ideas early</li>
    </ul>
  </div>
</div>

Fig Jam at Figma is another example. After launch, the team didn't just add features. They spent years iterating on snapping, selection borders, toolbar interactions, font size controls. Ruthless attention to the micro. There's no step in the design process for "care about the details long after launch" — but that's what built the loyalty.

---

## The new design workflow, visualized

The old process was linear. Research → define → ideate → prototype → test → launch. Clean arrows. A predictable sequence. The new process is messier, faster, and more parallel.

<div style="background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: 16px; padding: 32px 24px; margin: 48px 0;">
  <div style="font-family: var(--font-sans); font-size: 13px; color: var(--color-text-muted); margin-bottom: 20px; text-align: center; letter-spacing: 0.04em;">OLD LINEAR VS. NEW PARALLEL DESIGN FLOW</div>
  <svg width="100%" viewBox="0 0 640 340">
    <defs>
      <marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </marker>
    </defs>
    <text x="30" y="38" font-family="var(--font-sans), sans-serif" font-size="11" font-weight="600" fill="#e24b4a" letter-spacing="0.08em">OLD — SEQUENTIAL</text>
    <rect x="28" y="50" width="72" height="32" rx="6" fill="rgba(226,75,74,0.08)" stroke="rgba(226,75,74,0.3)" stroke-width="0.5"/>
    <text x="64" y="70" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="11" fill="#888780">Research</text>
    <line x1="102" y1="66" x2="118" y2="66" stroke="#e24b4a" stroke-width="0.8" opacity="0.4" marker-end="url(#arr2)"/>
    <rect x="120" y="50" width="72" height="32" rx="6" fill="rgba(226,75,74,0.08)" stroke="rgba(226,75,74,0.3)" stroke-width="0.5"/>
    <text x="156" y="70" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="11" fill="#888780">Define</text>
    <line x1="194" y1="66" x2="210" y2="66" stroke="#e24b4a" stroke-width="0.8" opacity="0.4" marker-end="url(#arr2)"/>
    <rect x="212" y="50" width="72" height="32" rx="6" fill="rgba(226,75,74,0.08)" stroke="rgba(226,75,74,0.3)" stroke-width="0.5"/>
    <text x="248" y="70" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="11" fill="#888780">Ideate</text>
    <line x1="286" y1="66" x2="302" y2="66" stroke="#e24b4a" stroke-width="0.8" opacity="0.4" marker-end="url(#arr2)"/>
    <rect x="304" y="50" width="72" height="32" rx="6" fill="rgba(226,75,74,0.08)" stroke="rgba(226,75,74,0.3)" stroke-width="0.5"/>
    <text x="340" y="70" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="11" fill="#888780">Prototype</text>
    <line x1="378" y1="66" x2="394" y2="66" stroke="#e24b4a" stroke-width="0.8" opacity="0.4" marker-end="url(#arr2)"/>
    <rect x="396" y="50" width="60" height="32" rx="6" fill="rgba(226,75,74,0.08)" stroke="rgba(226,75,74,0.3)" stroke-width="0.5"/>
    <text x="426" y="70" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="11" fill="#888780">Test</text>
    <line x1="458" y1="66" x2="474" y2="66" stroke="#e24b4a" stroke-width="0.8" opacity="0.4" marker-end="url(#arr2)"/>
    <rect x="476" y="50" width="60" height="32" rx="6" fill="rgba(226,75,74,0.08)" stroke="rgba(226,75,74,0.3)" stroke-width="0.5"/>
    <text x="506" y="70" text-anchor="middle" font-family="var(--font-sans), sans-serif" font-size="11" fill="#888780">Launch</text>
    <text x="30" y="106" font-family="var(--font-sans), sans-serif" font-size="11" fill="#e24b4a" opacity="0.5">Weeks → Months</text>
    <line x1="28" y1="128" x2="612" y2="128" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    <text x="30" y="156" font-family="var(--font-sans), sans-serif" font-size="11" font-weight="600" fill="#5dcaa5" letter-spacing="0.08em">NEW — PARALLEL</text>
    <rect x="28" y="170" width="480" height="38" rx="8" fill="rgba(29,158,117,0.07)" stroke="rgba(29,158,117,0.25)" stroke-width="0.5"/>
    <text x="40" y="187" font-family="var(--font-sans), sans-serif" font-size="11" font-weight="600" fill="#5dcaa5">Engineering + AI agents</text>
    <text x="40" y="202" font-family="var(--font-sans), sans-serif" font-size="11" fill="#888780">Ship → iterate → ship → iterate (continuous, fast)</text>
    <rect x="28" y="220" width="230" height="38" rx="8" fill="rgba(127,119,221,0.08)" stroke="rgba(127,119,221,0.3)" stroke-width="0.5"/>
    <text x="40" y="237" font-family="var(--font-sans), sans-serif" font-size="11" font-weight="600" fill="#afa9ec">Design — execution mode</text>
    <text x="40" y="252" font-family="var(--font-sans), sans-serif" font-size="11" fill="#888780">Pair, polish, review, guide</text>
    <rect x="278" y="220" width="230" height="38" rx="8" fill="rgba(239,159,39,0.07)" stroke="rgba(239,159,39,0.25)" stroke-width="0.5"/>
    <text x="290" y="237" font-family="var(--font-sans), sans-serif" font-size="11" font-weight="600" fill="#ef9f27">Design — vision mode</text>
    <text x="290" y="252" font-family="var(--font-sans), sans-serif" font-size="11" fill="#888780">3–6mo direction, prototype</text>
    <line x1="200" y1="208" x2="140" y2="218" stroke="#5dcaa5" stroke-width="0.7" opacity="0.4" marker-end="url(#arr2)"/>
    <line x1="350" y1="208" x2="380" y2="218" stroke="#5dcaa5" stroke-width="0.7" opacity="0.4" marker-end="url(#arr2)"/>
    <rect x="28" y="272" width="480" height="38" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
    <text x="40" y="289" font-family="var(--font-sans), sans-serif" font-size="11" font-weight="600" fill="#888780">Real users + real data</text>
    <text x="40" y="304" font-family="var(--font-sans), sans-serif" font-size="11" fill="#666461">Feedback loops back into both tracks immediately</text>
    <path d="M510 291 Q580 291 580 189 Q580 86 510 86" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="0.8" marker-end="url(#arr2)"/>
    <text x="584" y="192" font-family="var(--font-sans), sans-serif" font-size="10" fill="#666461">loop</text>
    <text x="30" y="328" font-family="var(--font-sans), sans-serif" font-size="11" fill="#5dcaa5" opacity="0.5">Days → Weeks</text>
  </svg>
</div>

Notice what changed: design and engineering are no longer sequential. They're parallel. Design isn't a gate before engineering starts. It's a thread running alongside it — sometimes ahead (vision), sometimes behind (cleanup), sometimes simultaneous (pairing).

---

## The three designer archetypes that matter now

Not all designers will thrive in this new world by doing the same thing. Jenny Wen, who thinks deeply about hiring, has identified three archetypes that are genuinely valuable right now.

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 32px 0;">
  <div style="background: var(--color-bg-elevated); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px;">
    <div style="font-size: 24px; margin-bottom: 10px;">■</div>
    <h4 style="font-family: var(--font-sans); font-size: 15px; font-weight: 600; color: #f0ece4; margin-bottom: 6px;">The block-shaped generalist</h4>
    <p style="font-family: var(--font-sans); font-size: 13px; color: var(--color-text-muted); margin: 0; line-height: 1.5;">Strong at many things — 80th percentile across design, product thinking, and implementation. Rare. Extremely flexible as roles blur.</p>
  </div>
  <div style="background: var(--color-bg-elevated); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px;">
    <div style="font-size: 24px; margin-bottom: 10px;">⟟</div>
    <h4 style="font-family: var(--font-sans); font-size: 15px; font-weight: 600; color: #f0ece4; margin-bottom: 6px;">The deep specialist</h4>
    <p style="font-family: var(--font-sans); font-size: 13px; color: var(--color-text-muted); margin: 0; line-height: 1.5;">World-class at one specific skill — visual craft, motion, engineering integration. The deep T. In an age of AI mediocrity, exceptional depth stands out.</p>
  </div>
  <div style="background: var(--color-bg-elevated); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px;">
    <div style="font-size: 24px; margin-bottom: 10px;">✨</div>
    <h4 style="font-family: var(--font-sans); font-size: 15px; font-weight: 600; color: #f0ece4; margin-bottom: 6px;">The craft new grad</h4>
    <p style="font-family: var(--font-sans); font-size: 13px; color: var(--color-text-muted); margin: 0; line-height: 1.5;">Early-career, blank-slate, fast learner with taste beyond their years. Unburdened by old processes. These are being overlooked and shouldn't be.</p>
  </div>
</div>

The common thread: all three are **building things**, not following a process. They all have strong opinions. They're all comfortable in ambiguity. And they all treat AI tools as a multiplier, not a threat.

---

## Intuition isn't a dirty word anymore

For a decade, the design industry trained us to distrust our gut. Every decision needed research to back it. Every recommendation needed a user quote. Intuition was considered sloppy — the opposite of user-centered design.

That's changing fast. **Intuition is a compressed form of experience.** It's not guessing. It's the ability to make well-reasoned judgments quickly, because you've spent years building an internal model of how users behave, what works, and what doesn't.

> "Intuition is not guessing. It's the ability to make reasoned judgments quickly. It's a shortcut to thinking really long and hard because you know the subject so deeply."
> <cite>— Jenny Wen</cite>

The designers who are thriving right now are the ones who've built strong intuition through deliberate practice — reading user feedback obsessively, going to research sessions (even ones outside their product area), watching usage dashboards, drawing on cognitive biases and design principles to predict behavior. **They don't need a research sprint for every decision. They already know.**

---

## The "illegibility" advantage

There's a framework worth stealing from the VC world: the legibility matrix. Ideas and founders can be either *legible* (obvious, understood, already being built by ten teams) or *illegible* (confusing on the surface, but energetically compelling to a small group of people who see something others don't).

The best design opportunities right now are illegible. A scrappy internal prototype that nobody quite understands but everyone keeps coming back to. A use case that doesn't fit the product brief but users keep inventing anyway. Co-work — Claude's agentic desktop product — came from exactly this kind of thing. There was an internal prototype with a dense, confusing interface that nobody could quite describe. But the energy around it was real. A designer's job was to spot that energy, lean in, and extract what was actually valuable.

<div style="background: var(--color-bg-elevated); border: 1px solid var(--color-border); border-radius: 12px; padding: 24px 28px; margin: 40px 0;">
  <div style="font-family: var(--font-sans); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #ef9f27; font-weight: 600; margin-bottom: 10px;">💡 Design as venture thinking</div>
  <p style="font-family: var(--font-sans); font-size: 15px; color: var(--color-text-muted); margin: 0; line-height: 1.6;">The best designers at frontier companies are operating like internal VCs — scanning prototypes, sensing energy, picking up on illegible signals, and placing bets on directions others can't yet see. That's a new skill. It's learnable.</p>
</div>

---

## How to pivot your career from here

If you're a designer reading this and feeling the ground shift under you, here's what matters most right now.

<div style="margin: 32px 0;">
  <div style="display: grid; grid-template-columns: 80px 1fr; gap: 20px; margin-bottom: 28px; align-items: start;">
    <div style="font-family: var(--font-sans); font-size: 13px; color: #7f77dd; font-weight: 600; padding-top: 3px;">Now</div>
    <div>
      <h4 style="font-family: var(--font-sans); font-size: 15px; font-weight: 600; color: #f0ece4; margin-bottom: 4px;">Learn to ship in code</h4>
      <p style="font-family: var(--font-sans); font-size: 14px; color: var(--color-text-muted); margin: 0; line-height: 1.5;">You don't need to become a full-stack engineer. But implementing last-mile polish, tweaking CSS, reading diffs — this is now part of the design vocabulary. Use Claude Code, Cursor, or v0. Start small. Ship one thing per week that you built, not just mocked.</p>
    </div>
  </div>
  <div style="display: grid; grid-template-columns: 80px 1fr; gap: 20px; margin-bottom: 28px; align-items: start;">
    <div style="font-family: var(--font-sans); font-size: 13px; color: #7f77dd; font-weight: 600; padding-top: 3px;">Next</div>
    <div>
      <h4 style="font-family: var(--font-sans); font-size: 15px; font-weight: 600; color: #f0ece4; margin-bottom: 4px;">Build your pairing practice</h4>
      <p style="font-family: var(--font-sans); font-size: 14px; color: var(--color-text-muted); margin: 0; line-height: 1.5;">Get next to engineers daily. Not to review their work — to build with them. Understand their constraints, their stack, their frustrations. The designers who are indispensable right now are the ones engineers want in their Slack thread, not in a scheduled review.</p>
    </div>
  </div>
  <div style="display: grid; grid-template-columns: 80px 1fr; gap: 20px; margin-bottom: 28px; align-items: start;">
    <div style="font-family: var(--font-sans); font-size: 13px; color: #7f77dd; font-weight: 600; padding-top: 3px;">Ongoing</div>
    <div>
      <h4 style="font-family: var(--font-sans); font-size: 15px; font-weight: 600; color: #f0ece4; margin-bottom: 4px;">Build sharp intuition deliberately</h4>
      <p style="font-family: var(--font-sans); font-size: 14px; color: var(--color-text-muted); margin: 0; line-height: 1.5;">Read feedback everywhere. Watch session recordings. Attend research sessions outside your area. Build your internal model so aggressively that you can make good calls fast — without waiting for data that will take weeks to collect.</p>
    </div>
  </div>
  <div style="display: grid; grid-template-columns: 80px 1fr; gap: 20px; margin-bottom: 28px; align-items: start;">
    <div style="font-family: var(--font-sans); font-size: 13px; color: #7f77dd; font-weight: 600; padding-top: 3px;">Future</div>
    <div>
      <h4 style="font-family: var(--font-sans); font-size: 15px; font-weight: 600; color: #f0ece4; margin-bottom: 4px;">Protect your vision time</h4>
      <p style="font-family: var(--font-sans); font-size: 14px; color: var(--color-text-muted); margin: 0; line-height: 1.5;">As execution gets faster, the scarcest thing is someone who can look 90 days out and say: <em>this is where we should go</em>. That's your edge. Block time for it. Don't let it get eaten by execution work.</p>
    </div>
  </div>
</div>

---

## What doesn't change

Amid all this upheaval, a few things stay constant — and it's worth naming them.

**Taste is irreplaceable for now.** AI will get better at taste and judgment. It already has. But there's still something in the gap between "technically correct" and "this feels right" that lives in human experience. That gap is shrinking. But it's real, and it's yours.

**Accountability still requires humans.** Someone has to sign off. Someone has to say: we're building this, not that. AI can advise, analyze, generate options. But the decision — with all its downstream consequences — still needs a person behind it.

**Great craft is the anti-slop.** In a world where anything can be generated, the things people actually choose to use and pay for are the things that feel *considered*. Linear's speed. Notion Calendar's polish. Fig Jam's delight. Those weren't made by a process. They were made by people who cared enough to spend a Tuesday afternoon on a hover state.

> "Our value isn't in repeating a process. If it was, anyone could be a designer. We're rewriting the process right now."
> <cite>— Jenny Wen</cite>

---

<div style="background: linear-gradient(135deg, rgba(127,119,221,0.1), rgba(29,158,117,0.08)); border: 1px solid rgba(127,119,221,0.2); border-radius: 16px; padding: 36px 32px; margin: 56px 0; text-align: center;">
  <h3 style="font-family: var(--font-sans); font-size: 20px; font-weight: 600; color: #f0ece4; margin-bottom: 12px; text-transform: none; letter-spacing: 0;">The designers who thrive will be the ones who trust themselves</h3>
  <p style="font-family: var(--font-sans); font-size: 15px; color: var(--color-text-muted); margin: 0;">Not a process. Not a framework. Not a certification. The new era of design demands that you build real things, develop sharp judgment, stay close to the work, and point your team toward something worth building. That's hard. It's also more interesting than following a diamond.</p>
</div>
