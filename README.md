# RoASt Configuration Wizard Guide

**Live Wizard**: [RoASt Configuration Wizard](https://luminousrobots.github.io/RoASt-Configuration-Wizard/)


---

## Overview

This wizard helps you create a `config.json` file for the RoASt (Robot Algorithm Synthesizer Tool). The wizard has 4 pages that guide you through configuring parameters, initial positions, goals, and exporting your configuration.

---

## Page 1: Parameters Configuration

Define the fundamental settings for your algorithm synthesis.

### Algorithm Preset

Select a preset to load a pre-configured algorithm setup:
- **Algorithm 1**: Leader-based with obstacle O
- **Algorithm 2**: Cooperative with obstacle O  
- **Custom Configuration**: Start from scratch

**Note**: To modify preset data, add `?edit=true` to the URL.

### Basic Configuration

| Field | Description | Example |
|-------|-------------|---------|
| **Number of Robots** | Total robots participating in the algorithm | 2, 3, 4 |
| **Visibility Range** | Maximum distance where robots can detect each other | 1, 2, 3 |
| **Algorithm Path** | Path to the existing algorithm rules file (JSON) | `/src/data/algorithms_data.json` |
| **Generation Mode** | Synthesis strategy (All or ProgressiveValidationByLevels) | ProgressiveValidationByLevels |
| **Level** | Number of progressive validation levels | 5 |
| **Opacity** | Whether robots can see through other robots | ☑ / ☐ |

**Generation Modes**:
- **All**: Generates all algorithms, validates them, then classifies
- **ProgressiveValidationByLevels**: Validates by level, classifies in activation sets, picks specified level number

### Obstacle Configuration

| Field | Description | Options |
|-------|-------------|---------|
| **Obstacle Type** | Type of obstacle | O (Orange - Custom) / W (Black - Wall) |
| **Obstacle Opaque** | Whether robots can see through obstacles | ☑ / ☐ (auto-enabled for walls) |

### Robot Colors

Define robot types with character-color pairs:
1. Click **"+ Add Color"**
2. Enter a unique character (F, L, R, etc.)
3. Select a color
4. Click **"Add"**

**Note**: 'O' is reserved for obstacles (Orange), 'W' for walls (Black).

---

## Page 2: Initial Configurations Editor

Generate all possible initial robot configurations.

### What are Initial Configurations?

- **Essential configurations**: Validate where robots are far from obstacles
- **Non-essential configurations**: Complete validation coverage
- Together they guarantee the algorithm is locally defined

### How to Create

#### 1. Show Editor
Click **"▼ Show"** to open the editor panel

#### 2. Add Pattern
Click **"+ Add Pattern"** and place robots from the palette

**Important**: Direction must be **left to right**

#### 3. Select Leader Colors
Choose which robot colors can be leaders (automatically calculates essential property)

#### 4. Switch Essential Status
Manually toggle essential status if corrections are needed

#### 5. Continue
Click **"Continue"** to embed configurations in `config.json`

### Tips
- Drag robots from palette to place them
- Click X on pattern to delete it
- Drag a robot out of the grid to remove it
- Use "Reset from Preset" to reload defaults

---

## Page 3: Goal Simulator

Create robot movement puzzles with starting positions, targets, and constraints.

### What is a Goal?

A goal defines:
- **Starting positions**: Where robots begin
- **Target positions**: Where robots need to reach
- **Constraints**: Boundaries, waypoints, exclusive points, step limits

### How to Create Goals

#### 1. Add Goal
Click **"+ Add Goal"** to create a new scenario

#### 2. Place Robots
Drag robots (F, L, R, O) from the palette to:
- **Starting Position** grid
- **Target** grid

#### 3. Set Constraints

##### Boundaries
Drag dashed lines to set the movement area

##### Steps
Set the number in the Steps input (max moves allowed)

##### Waypoints
Drag waypoint icons to mark positions that **must be visited** at least once

##### Exclusive Points
Drag exclusive point icons to mark positions that are **not allowed to be visited**

#### 4. Continue
Click **"Continue"** to embed goals in `config.json`

### Tips
- Drag robots from palette to place them
- Drag boundary edges to resize area
- Click rotate button to rotate goals
- Click (+) to add more targets
- Reset goals will reload from preset configuration

---

## Page 4: Export & Summary

Review and download your complete configuration.

### What You'll See

- **Parameters**: Robot count, visibility range, generation mode
- **Obstacle Configuration**: Type and opacity settings
- **Robot Colors**: All defined robot types
- **`web-algo` Parameters**: 
- **Goals**: Goal count 

### Download Configuration

1. Review all settings
2. Click **"Download config.json"**
3. Save the file to your computer

---

## Using the Configuration File

After downloading `config.json`, follow these steps:

### 1. Download Configuration
Download the generated `config.json` file from the final summary page

### 2. Navigate to Project
Navigate to your RoASt project folder (the one containing the `src` folder)

### 3. Place Configuration File
Place the `config.json` file in the **RoASt root directory** (as a sibling to the `src` folder)

```
RoASt/
├── config.json          ← Place here
├── src/
│   ├── main.rs
│   └── ...
└── Cargo.toml
```

### 4. Run RoASt
Run the RoASt tool - it will automatically load the configuration

```bash
cargo run --release 
```
or 
```bash
cargo rel
```

---

## Quick Tips

### Getting Started
- Start with a preset for a complete, tested configuration
- Use Progressive mode with levels for balanced exploration
- Enable edit mode with `?edit=true` in URL to modify presets

### Creating Configurations
- Start with simple patterns and goals
- Verify essential/non-essential classification
- Test goals with different rotations

### Before Exporting
- Review all parameters in summary page
- Ensure goals are achievable
- Check algorithm path is correct
- Verify robot colors are properly assigned

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Preset won't load or edit | Add `?edit=true` to the URL |
| Can't add more colors | Check for duplicate characters |
| Goals appear invalid | Ensure matching robot counts in start/target |
| Config file not loading in RoASt | Verify file is `config.json` in root directory |
| Drag and drop not working | Enable JavaScript and refresh page |

---

## Help

Each page has a **"? Help"** button that opens detailed context-specific guidance.

---

*Generated by RoASt Configuration Wizard*
