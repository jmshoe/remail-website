# Website Design Setup

## Summary
This guide explores **advanced methods for building high-quality websites** using **AI coding agents** like Claude Code. It emphasizes that **iterative design** and specialized tools are essential for moving beyond generic, low-quality results. Key resources mentioned include **SuperDesign.dev** for real-time visual canvas editing and **Shadcn MCP** for integrating professional component libraries. The source also highlights techniques for **cloning existing layouts** via metadata scraping and enhancing user interfaces with **custom animations**. Ultimately, the material serves as a roadmap for developers to achieve **stunning, functional web applications** through precise AI prompting and strategic workflow integration.

## Plan
To build an amazingly designed website using Claude Code, you must move beyond generic prompts like "make it beautiful." The sources outline a game plan that combines specific external tools, Model Context Protocol (MCP) servers, and an iterative workflow.

Here is your step-by-step game plan, organized by phase.

### Phase 1: Preparation and Tool Setup
Before writing code, you must equip Claude Code with the right environment and "skills" to act as a senior designer.

**1. Install the "SuperDesign" Extension**
This tool is described as the "Cursor for design." It allows you to visualize what Claude is building in real-time without needing a separate subscription.
*   **Action:** Install the SuperDesign extension in VS Code or Cursor. Open the command palette (`Cmd+Shift+P`), type `SuperDesign`, and select **Initialize SuperDesign**.
*   **Why:** This generates a `claude.md` file in your directory. This file acts as a massive system prompt, telling Claude it is a "senior front-end engineer" and providing it with strict font, color, and styling guidelines.

**2. Install the "Front-End Design Skill"**
This is a specific plugin that stops Claude from generating generic "AI aesthetics" (like purple gradients).
*   **Action:** In Claude Code, input the installation command for the marketplace, then the command to install the **Front-End Design Skill** (found in source 24).
*   **Why:** This skill forces the AI to use modern typography (like Outfit), soft shadows, glassmorphism, and "production-grade" aesthetics rather than generic styles.

**3. Set Up MCP Servers (Optional but Recommended)**
*   **ShadCN MCP:** If you want to use the ShadCN library, install this server so Claude understands the context of these components to prevent errors.
*   **Firecrawl or Figma MCP:** If you want to clone an existing site or Figma file, install these to feed metadata directly to Claude.

### Phase 2: Design Strategy and Planning
Do not ask Claude to design from scratch without input.

**1. Secure Inspiration and Colors First**
*   **Colors:** Use a tool like **Coolors** to generate a palette. Once you like one, copy the CSS and provide it to Claude immediately.
*   **Layout:** Browse galleries like **Dribbble** or specific hero section galleries. Take screenshots of designs you like.
*   **Pre-Design (Google Stitch):** You can use **Google Stitch** to prototype the UI first, then export the design as a ZIP file to import into Claude.

**2. The "HTML First" Rule**
*   **Strategy:** When starting the iteration process, ask Claude to use **HTML files** initially. They are much easier to modify rapidly than fully developed frameworks like Next.js or React. Convert to a framework only after the design is finalized.

### Phase 3: The Iterative Execution Workflow
This is the core loop for creating high-quality designs.

**Step 1: The Layout Phase (Structure)**
Using SuperDesign, ask Claude to build the main screen. Request **five iterations** of the layout.
*   *Note:* At this stage, SuperDesign uses ASCII format in the terminal to visualize layouts instantly without writing full code. You can request changes (e.g., "move the search bar down") and pick the best structural option.

**Step 2: The Theme Phase (Styling)**
Once the layout is picked, move to styling. Request **five distinct theme iterations** (e.g., "professional," "neon," "glassmorphism") or feed it your specific color palette from Coolors.
*   **Refinement:** If the colors look off, tell Claude specifically, "The colors aren't being used effectively; give me 5 variations with better color implementation".

**Step 3: The "Skill" Polish**
To elevate the design, invoke the Front-End Design Skill you installed in Phase 1.
*   **Prompt:** "Use the front-end design skill to improve the design of this page."
*   **Advanced:** "Use the front-end design skill to improve the design following the attached screenshot" (attach a Dribbble reference). This can turn a "brutalist" design into a premium SaaS interface with soft gradients and modern fonts.

**Step 4: Interaction and Animation**
Static sites feel cheap. Add life to the design:
*   **Micro-interactions:** Ask for specific mechanical click animations or hover effects. Verify they trigger on click, not just hover.
*   **Library:** Use **Animattopi** to find specific CSS animations, copy the code, and ask Claude to integrate them.

### Phase 4: Component Implementation & Debugging
If you are building a complex app, use established libraries to ensure consistency.

**1. Using ShadCN (The Structural Approach)**
*   **Planning:** Run the ShadCN command to "plan the app" and save it to `implementation.md`.
*   **Execution:** Command Claude to implement the app based on that plan. The MCP server ensures it imports components correctly (e.g., dark mode, functional inputs) without breaking.
*   **Theming:** Use **Tweak CN** to customize the ShadCN CSS variables, then paste that CSS into Claude to instantly brand the components.

**2. Fixing UI Bugs with Drawbridge**
If Claude struggles to align elements or fix a visual bug:
*   **Tool:** Use **Drawbridge**. It allows you to select specific sections of the screen visually and automatically sets up a prompt for Claude Code to fix that exact area.

### Summary Checklist
1.  **Initialize SuperDesign** to get the `claude.md` system prompt.
2.  **Install Front-End Design Skill** to avoid "AI look."
3.  **Start with HTML** for rapid iteration.
4.  **Iterate 5x** on Layout (ASCII) and then 5x on Theme.
5.  **Inject external taste** (Dribbble screenshots, Coolors palettes).
6.  **Convert** to React/Next.js only when the design is perfect.

***

**Analogy:** Think of this process like building a luxury custom home.
*   **SuperDesign (Layout Phase)** is the architect drawing blueprints; you don't pour concrete (code) until you agree on where the walls go.
*   **ShadCN** is buying high-quality pre-fab windows and doors so you don't have to build them from scratch.
*   **The Front-End Skill** is the interior designer who comes in at the end to ensure the paint, furniture, and lighting (typography and spacing) look like a magazine cover, not a generic motel.