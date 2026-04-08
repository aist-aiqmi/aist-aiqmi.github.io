var toc_content = `OWASP Top 10 for LLM Applications v2.0
31
genai.owasp.org
In a multi-tenant environment where different groups or classes of users share the same
vector database, embeddings from one group might be inadvertently retrieved in response to
queries from another group’s LLM, potentially leaking sensitive business information.
Mitigation
A permission-aware vector database should be implemented to restrict access and ensure
that only authorized groups can access their specific information.
Scenario #3: Behavior alteration of the foundation model
After Retrieval Augmentation, the foundational model's behavior can be altered in subtle
ways, such as reducing emotional intelligence or empathy in responses. For example, when a
user asks,
"I'm feeling overwhelmed by my student loan debt. What should I do?"
the original response might offer empathetic advice like,
"I understand that managing student loan debt can be stressful. Consider looking into repayment
plans that are based on your income."
However, after Retrieval Augmentation, the response may become purely factual, such as,
"You should try to pay off your student loans as quickly as possible to avoid accumulating
interest. Consider cutting back on unnecessary expenses and allocating more money toward
your loan payments."
While factually correct, the revised response lacks empathy, rendering the application less
useful.
Mitigation
The impact of RAG on the foundational model's behavior should be monitored and evaluated,
with adjustments to the augmentation process to maintain desired qualities like empathy(Ref
#8).
Reference Links
1. Augmenting a Large Language Model with Retrieval-Augmented Generation and Fine-
tuning
2. Astute RAG: Overcoming Imperfect Retrieval Augmentation and Knowledge Conflicts for
Large Language Models
3. Information Leakage in Embedding Models
4. Sentence Embedding Leaks More Information than You Expect: Generative Embedding
Inversion Attack to Recover the Whole Sentence
5. New ConfusedPilot Attack Targets AI Systems with Data Poisoning
6. Confused Deputy Risks in RAG-based LLMs
7. How RAG Poisoning Made Llama3 Racist!
8. What is the RAG Triad?

`;