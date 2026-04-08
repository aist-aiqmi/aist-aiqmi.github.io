var toc_content = `OWASP Top 10 for LLM Applications v2.0
9
genai.owasp.org
Limit the ability for users to override or access the system's initial settings, reducing the risk
of exposure to internal configurations.
2. Reference Security Misconfiguration Best Practices
Follow guidelines like "OWASP API8:2023 Security Misconfiguration" to prevent leaking
sensitive information through error messages or configuration details.
(Ref. link:OWASP API8:2023 Security Misconfiguration)
Advanced Techniques:
1. Homomorphic Encryption
Use homomorphic encryption to enable secure data analysis and privacy-preserving machine
learning. This ensures data remains confidential while being processed by the model.
2. Tokenization and Redaction
Implement tokenization to preprocess and sanitize sensitive information. Techniques like
pattern matching can detect and redact confidential content before processing.
Example Attack Scenarios
Scenario #1: Unintentional Data Exposure
A user receives a response containing another user's personal data due to inadequate data
sanitization.
Scenario #2: Targeted Prompt Injection
An attacker bypasses input filters to extract sensitive information.
Scenario #3: Data Leak via Training Data
Negligent data inclusion in training leads to sensitive information disclosure.
Reference Links
1. Lessons learned from ChatGPT’s Samsung leak: Cybernews
2. AI data leak crisis: New tool prevents company secrets from being fed to ChatGPT: Fox
Business
3. ChatGPT Spit Out Sensitive Data When Told to Repeat ‘Poem’ Forever: Wired
4. Using Differential Privacy to Build Secure Models: Neptune Blog
5. Proof Pudding (CVE-2019-20634) AVID (\`moohax\` & \`monoxgas\`)
Related Frameworks and Taxonomies
Refer to this section for comprehensive information, scenarios strategies relating to
infrastructure deployment, applied environment controls and other best practices.
• AML.T0024.000 - Infer Training Data Membership MITRE ATLAS

OWASP Top 10 for LLM Applications v2.0
10
genai.owasp.org
• AML.T0024.001 - Invert ML Model MITRE ATLAS
• AML.T0024.002 - Extract ML Model MITRE ATLAS

OWASP Top 10 for LLM Applications v2.0
11
genai.owasp.org
LLM03:2025 Supply Chain
Description
LLM supply chains are susceptible to various vulnerabilities, which can affect the integrity of
training data, models, and deployment platforms. These risks can result in biased outputs,
security breaches, or system failures. While traditional software vulnerabilities focus on issues
like code flaws and dependencies, in ML the risks also extend to third-party pre-trained models
and data.
These external elements can be manipulated through tampering or poisoning attacks.
Creating LLMs is a specialized task that often depends on third-party models. The rise of open-
access LLMs and new fine-tuning methods like "LoRA" (Low-Rank Adaptation)  and "PEFT"
(Parameter-Efficient Fine-Tuning), especially on platforms like Hugging Face, introduce new
supply-chain risks. Finally, the emergence of on-device LLMs increase the attack surface and
supply-chain risks for LLM applications.
Some of the risks discussed here are also discussed in "LLM04 Data and Model Poisoning." This
entry focuses on the supply-chain aspect of the risks.
A simple threat model can be found here.
Common Examples of Risks
1. Traditional Third-party Package Vulnerabilities
Such as outdated or deprecated components, which attackers can exploit to compromise
LLM applications. This is similar to "A06:2021 – Vulnerable and Outdated Components" with
increased risks when components are used during model development or finetuning.
(Ref. link: A06:2021 – Vulnerable and Outdated Components)
2. Licensing Risks
AI development often involves diverse software and dataset licenses, creating risks if not
properly managed. Different open-source and proprietary licenses impose varying legal
requirements. Dataset licenses may restrict usage, distribution, or commercialization.
3. Outdated or Deprecated Models
Using outdated or deprecated models that are no longer maintained leads to security issues.

`;