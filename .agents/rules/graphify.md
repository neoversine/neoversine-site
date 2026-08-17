---
trigger: always_on
description: Consult the graphify knowledge graph at graphify-out/ for codebase and architecture questions with minimal token usage.
---

## Graphify (Token-Optimized Knowledge Graph)

This project is indexed using Graphify at `graphify-out/`.

### Low Token Usage Guidelines:
1. **Never read `graphify-out/graph.json` directly**:
   - Do NOT load `graphify-out/graph.json` or full dump files into the prompt window.
   - Always query the graph through CLI subcommands which return compact, pinpointed subgraphs (saving 90%+ tokens vs full file grepping).
2. **Querying the Knowledge Graph**:
   - General questions: `& "C:\Users\ankon\AppData\Roaming\Python\Python312\Scripts\graphify.exe" query "<question>" --budget 500` (or `graphify query "<question>"`)
   - Architectural hubs & critical files: `graphify god-nodes --top 10`
   - Path between two components: `graphify path "<ComponentA>" "<ComponentB>"`
   - Detailed symbol explanation: `graphify explain "<SymbolName>"`
3. **Targeted File Reading**:
   - Use graph query results to identify the exact files/symbols needed before viewing code files. Avoid broad repository greps.
4. **Zero-Token Graph Maintenance**:
   - Local AST parsing is deterministic and consumes 0 LLM tokens.
   - Run `graphify .` or `graphify . --update` after significant structural changes.
