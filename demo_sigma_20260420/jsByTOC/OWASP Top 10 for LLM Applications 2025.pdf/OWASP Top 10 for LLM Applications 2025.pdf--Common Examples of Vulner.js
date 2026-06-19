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

OWASP Top 10 for LLM Applications v2.0
32
genai.owasp.org
LLM09:2025 Misinformation
Description
Misinformation from LLMs poses a core vulnerability for applications relying on these models.
Misinformation occurs when LLMs produce false or misleading information that appears credible.
This vulnerability can lead to security breaches, reputational damage, and legal liability.
One of the major causes of misinformation is hallucination—when the LLM generates content that
seems accurate but is fabricated. Hallucinations occur when LLMs fill gaps in their training data
using statistical patterns, without truly understanding the content. As a result, the model may
produce answers that sound correct but are completely unfounded. While hallucinations are a
major source of misinformation, they are not the only cause; biases introduced by the training
data and incomplete information can also contribute.
A related issue is overreliance. Overreliance occurs when users place excessive trust in LLM-
generated content, failing to verify its accuracy. This overreliance exacerbates the impact of
misinformation, as users may integrate incorrect data into critical decisions or processes without
adequate scrutiny.
Common Examples of Risk
1. Factual Inaccuracies
The model produces incorrect statements, leading users to make decisions based on false
information. For example, Air Canada's chatbot provided misinformation to travelers, leading
to operational disruptions and legal complications. The airline was successfully sued as a
result.
(Ref. link: BBC)
2. Unsupported Claims
The model generates baseless assertions, which can be especially harmful in sensitive
contexts such as healthcare or legal proceedings. For example, ChatGPT fabricated fake
legal cases, leading to significant issues in court.
(Ref. link: LegalDive)
3. Misrepresentation of Expertise
The model gives the illusion of understanding complex topics, misleading users regarding its

`;