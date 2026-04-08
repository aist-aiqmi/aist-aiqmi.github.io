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

`;