---
title: Clustering Large Map Datasets
description: Rendering dense geospatial data efficiently using clustering strategies to maintain smooth UX at scale.
company: Syntizen Technologies
role: Senior Software Engineer
timeline: "2023"
teamSize: "2 engineers"
metrics: Rendered 50k+ markers at 60fps
tags: [React Native, Maps, Performance, Clustering, Geospatial]
publishedAt: 2023-11-20
featured: false
---

## Context

The fleet tracking app displays vehicle positions in real-time. Initially designed for ~500 vehicles, the system needed to scale to 50,000+ active markers on a single map view.

At this scale, naive rendering approaches caused:
- Frame drops to 5-10fps on scroll/zoom
- Memory crashes on lower-end devices
- Unreadable UI with overlapping markers

## Problem

How do we display tens of thousands of markers on a mobile map while:
1. Maintaining 60fps scroll/zoom performance
2. Keeping memory usage under control
3. Showing meaningful information at all zoom levels
4. Supporting real-time position updates

## Constraints

- **Platform:** React Native with react-native-maps
- **Update frequency:** 15-second intervals for all vehicles
- **Device target:** Mid-range Android phones (2GB RAM)
- **Map library:** Google Maps on Android, Apple Maps on iOS

## Architecture & Decisions

### Decision 1: Quadtree-Based Clustering

I implemented a quadtree spatial index for efficient point clustering:

```
┌─────────────────────────────────┐
│           Viewport              │
├────────────────┬────────────────┤
│   Cluster A    │   Cluster B    │
│   (1,247 pts)  │   (892 pts)    │
├────────┬───────┼────────┬───────┤
│ Sub A  │ Sub B │ Sub C  │ Sub D │
│ (45)   │ (12)  │ (8)    │ (3)   │
└────────┴───────┴────────┴───────┘
```

**Why quadtree:**
- O(log n) point insertion and lookup
- Natural fit for rectangular viewport queries
- Memory-efficient for sparse data

### Decision 2: Viewport-Based Rendering

Only markers within the visible viewport (plus buffer) are passed to the native map:

- Calculate visible bounds on every camera change
- Query quadtree for points in bounds
- Cluster based on current zoom level
- Render only cluster centers + individual points

### Decision 3: Incremental Updates

Rather than rebuilding the entire tree on position updates:
- Track which cells contain updated points
- Only recalculate affected clusters
- Batch updates at 100ms intervals

## Trade-offs

| Choice | Benefit | Cost |
|--------|---------|------|
| Quadtree | Fast spatial queries | Memory overhead for tree structure |
| Viewport culling | Dramatically fewer rendered markers | Re-render on every pan |
| Batched updates | Smoother animation | 100ms latency on position changes |

## Implementation Details

The clustering algorithm uses a grid-based approach at each zoom level:

```javascript
function clusterAtZoom(points, zoom) {
  const cellSize = GRID_SIZE / Math.pow(2, zoom);
  const grid = new Map();
  
  for (const point of points) {
    const cellKey = getCellKey(point, cellSize);
    if (!grid.has(cellKey)) {
      grid.set(cellKey, { points: [], center: null });
    }
    grid.get(cellKey).points.push(point);
  }
  
  // Calculate cluster centers
  for (const cell of grid.values()) {
    cell.center = calculateCentroid(cell.points);
  }
  
  return Array.from(grid.values());
}
```

### Optimizations Applied

1. **Web Worker for clustering** — Heavy computation off main thread
2. **Shared memory** — Using SharedArrayBuffer for point data
3. **Memoization** — Cache cluster results by zoom level
4. **Marker pooling** — Reuse native marker objects instead of creating new ones

## Outcome & Impact

Performance after optimization:
- **Frame rate:** Consistent 60fps on mid-range devices
- **Memory usage:** Peak 120MB (previously 400MB+)
- **Initial load:** 800ms for 50k points
- **Pan/zoom responsiveness:** <16ms per frame

## What I'd Improve Next Time

1. **Server-side pre-clustering** — Reduce client computation for static datasets
2. **LOD system** — Load detail progressively based on zoom (tiles approach)
3. **WebGL rendering** — For extreme scale (100k+ points)
