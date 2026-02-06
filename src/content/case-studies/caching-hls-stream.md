---
title: Caching HLS Streams at Scale
description: Designing a performant video caching layer to reduce buffering, bandwidth usage, and startup latency in mobile environments.
company: Syntizen Technologies
role: Senior Software Engineer
timeline: 2024 – Present
teamSize: Solo (with code reviews)
metrics: Reduced buffering events by 60%
tags: [React Native, iOS, Swift, Video, HLS, Caching]
publishedAt: 2024-06-15
featured: true
---

## Context

At Syntizen, our fleet tracking app includes a video streaming feature that allows dispatchers to view live feeds from vehicle dashcams. As we scaled to 50,000+ active drivers, video playback quality became a critical pain point.

The existing implementation had no caching layer — every segment was fetched from the CDN, even on replay. This resulted in:
- High buffering rates on poor networks
- Excessive bandwidth consumption
- Slow startup times (2-4 seconds on average)

## Problem

How do we build a caching layer for HLS video streams in React Native that:
1. Reduces network dependency without breaking adaptive bitrate switching
2. Works offline for recently viewed content
3. Maintains acceptable memory and storage footprint
4. Doesn't require ejecting from Expo

## Constraints

- **Platform:** React Native with Expo (managed workflow initially, later bare)
- **Video format:** HLS with multiple quality variants
- **Storage budget:** 500MB maximum per device
- **Memory pressure:** Must work on mid-range Android devices
- **Timeline:** 6 weeks to production

## Architecture & Decisions

### Decision 1: Local Proxy Server

Rather than patching video players directly, I implemented a local HTTP proxy that intercepts HLS requests and serves cached segments when available.

```
┌─────────────┐     ┌──────────────┐     ┌─────────┐
│ Video Player│────▶│ Local Proxy  │────▶│   CDN   │
│             │◀────│  (Swift)     │◀────│         │
└─────────────┘     └──────────────┘     └─────────┘
                           │
                    ┌──────▼──────┐
                    │ Disk Cache  │
                    └─────────────┘
```

**Why this approach:**
- Player-agnostic (works with any HLS player)
- No modification to video URLs at the application layer
- Can handle adaptive bitrate switching transparently

### Decision 2: Segment-Level Caching

I chose to cache at the segment level (.ts files) rather than full video files:
- Segments are typically 2-6 seconds
- Enables partial caching of long videos
- Works with live and VOD content

### Decision 3: LRU Eviction with Priority Hints

The cache uses LRU eviction with priority hints:
- Recent segments weighted higher
- I-frame segments (keyframes) never evicted first
- User-favorited videos pinned in cache

## Trade-offs

| Choice | Benefit | Cost |
|--------|---------|------|
| Local proxy | Player-agnostic | Increased complexity, battery usage |
| Segment caching | Partial cache useful | More disk I/O than full-file cache |
| Swift implementation | Performance, low-level control | Platform-specific, maintenance burden |

### What I Would Do Differently

If I rebuilt this today, I'd consider:
- **Using AVAssetResourceLoader** more heavily on iOS to reduce proxy overhead
- **Implementing predictive prefetch** based on viewing patterns
- **Adding bandwidth estimation** to adjust cache-write behavior

## Outcome & Impact

After 3 months in production:
- **Buffering events:** -60%
- **Average startup time:** 2.8s → 0.9s
- **Bandwidth usage:** -35% per session
- **User complaints about video:** -80%

The project was open-sourced as `expo-video-cache` and has since been adopted by other teams in the React Native ecosystem.

## What I'd Improve Next Time

1. **Better telemetry integration** — We added metrics late, which made debugging harder initially
2. **Preemptive quality selection** — Currently reactive, could be predictive based on network history
3. **Cross-device sync** — Allow cache warming from backend for important videos
