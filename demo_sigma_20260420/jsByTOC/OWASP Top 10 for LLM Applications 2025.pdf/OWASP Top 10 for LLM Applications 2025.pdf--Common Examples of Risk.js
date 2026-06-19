var toc_content = `OWASP Top 10 for LLM Applications v2.0
28
genai.owasp.org
not be delegated to the LLM, either through the system prompt or otherwise. These controls
need to occur in a deterministic, auditable manner, and LLMs are not (currently) conducive to
this. In cases where an agent is performing tasks, if those tasks require different levels of
access, then multiple agents should be used, each configured with the least privileges
needed to perform the desired tasks.
Example Attack Scenarios
Scenario #1
An LLM has a system prompt that contains a set of credentials used for a tool that it has been
given access to.  The system prompt is leaked to an attacker, who then is able to use these
credentials for other purposes.
Scenario #2
An LLM has a system prompt prohibiting the generation of offensive content, external links,
and code execution. An attacker extracts this system prompt and then uses a prompt
injection attack to bypass these instructions, facilitating a remote code execution attack.
Reference Links
1. SYSTEM PROMPT LEAK: Pliny the prompter
2. Prompt Leak: Prompt Security
3. chatgpt_system_prompt: LouisShark
4. leaked-system-prompts: Jujumilk3
5. OpenAI Advanced Voice Mode System Prompt: Green_Terminals
Related Frameworks and Taxonomies
Refer to this section for comprehensive information, scenarios strategies relating to
infrastructure deployment, applied environment controls and other best practices.
• AML.T0051.000 - LLM Prompt Injection: Direct (Meta Prompt Extraction) MITRE ATLAS

OWASP Top 10 for LLM Applications v2.0
29
genai.owasp.org
LLM08:2025 Vector and Embedding Weaknesses
Description
Vectors and embeddings vulnerabilities present significant security risks in systems utilizing
Retrieval Augmented Generation (RAG) with Large Language Models (LLMs). Weaknesses in how
vectors and embeddings are generated, stored, or retrieved can be exploited by malicious actions
(intentional or unintentional) to inject harmful content, manipulate model outputs, or access
sensitive information.
Retrieval Augmented Generation (RAG) is a model adaptation technique that enhances the
performance and contextual relevance of responses from LLM Applications, by combining pre-
trained language models with external knowledge sources.Retrieval Augmentation uses vector
mechanisms and embedding. (Ref #1)
Common Examples of Risks
1. Unauthorized Access & Data Leakage
Inadequate or misaligned access controls can lead to unauthorized access to embeddings
containing sensitive information. If not properly managed, the model could retrieve and
disclose personal data, proprietary information, or other sensitive content. Unauthorized use
of copyrighted material or non-compliance with data usage policies during augmentation can
lead to legal repercussions.
2. Cross-Context Information Leaks and Federation Knowledge Conflict
In multi-tenant environments where multiple classes of users or applications share the same
vector database, there's a risk of context leakage between users or queries. Data federation
knowledge conflict errors can occur when data from multiple sources contradict each other
(Ref #2). This can also happen when an LLM can’t supersede old knowledge that it has learned
while training, with the new data from Retrieval Augmentation.
3. Embedding Inversion Attacks
Attackers can exploit vulnerabilities to invert embeddings and recover significant amounts of
source information, compromising data confidentiality.(Ref #3, #4)
4. Data Poisoning Attacks
Data poisoning can occur intentionally by malicious actors  (Ref #5, #6, #7) or unintentionally.
Poisoned data can originate from insiders, prompts, data seeding, or unverified data

`;