# TinyStories SLM Model Architecture
This project implements a **small language model (SLM)** inspired by GPT-2, trained from scratch on the TinyStories dataset. The model is designed to generate simple, coherent stories from short prompts especially for 3-4 year olds.

## Model Architecture

- **Type:** Transformer-based language model (GPT-like)
- **Core Components:**
  - **Embedding Layers:** 
    - Token embedding for vocabulary
    - Positional embedding for sequence order
  - **Transformer Blocks:** Each block contains:
    - LayerNorm (with optional bias)
    - Causal Self-Attention (multi-head)
    - MLP (feed-forward network with GELU activation)
    - Residual connections
  - **Output Layer:** 
    - Linear layer for next-token prediction
    - Weight tying between input embedding and output layer

### Configurable Hyperparameters

| Hyperparameter | Value (default) | Description                       |
|----------------|-----------------|-----------------------------------|
| `n_layer`      | 6               | Number of transformer layers      |
| `n_head`       | 6               | Number of attention heads         |
| `n_embd`       | 384             | Embedding dimension size          |
| `block_size`   | 128             | Context window (sequence length)  |
| `dropout`      | 0.1             | Dropout rate for regularization   |
| `vocab_size`   | 50257           | Size of GPT-2 tokenizer vocabulary|

### Key Features

- **Causal Self-Attention:** Ensures each token can only attend to previous tokens (auto-regressive).
- **Layer Normalization:** Applied before attention and MLP for stability.
- **Weight Tying:** Embedding and output projection weights are shared for efficiency.
- **Mixed Precision:** Supports bfloat16/float16 for faster training on GPUs.
