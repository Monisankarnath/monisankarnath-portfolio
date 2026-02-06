---
title: "Optimizing React Native FlatLists"
description: "A deep dive into improving scroll performance for large lists in React Native using memoization and layout optimization."
publishedAt: 2024-03-15
draft: false
tags: ["React Native", "Performance"]
---

## The Problem with Large Lists

When rendering thousands of items in a mobile app, the default `FlatList` configuration often leads to:
- Blank spaces during fast scrolling
- High memory usage
- Frame drops on lower-end devices

## Key Optimizations

### 1. getItemLayout

Helping the list calculate layouts ahead of time allows for skipping measurement steps.

```tsx
const getItemLayout = (data, index) => ({
  length: ITEM_HEIGHT,
  offset: ITEM_HEIGHT * index,
  index,
});
```

### 2. Memoized Render Item

Using `React.memo` for list items prevents unnecessary re-renders when parent state changes.

```tsx
const ListItem = React.memo(({ item }) => {
  return <View>{/* content */}</View>;
}, (prev, next) => prev.item.id === next.item.id);
```

### 3. Tuning windowSize

The `windowSize` prop determines how much content is rendered outside the viewport. Reducing this from default (21) to something smaller (e.g., 5) saves memory at the cost of potential blank areas on extremely fast scrolls.

## Results

After applying these changes to our transaction history screen:
- JS frame rate stabilized at 60fps
- Memory profile reduced by ~40%
- Blank areas eliminated on normal scroll speeds
