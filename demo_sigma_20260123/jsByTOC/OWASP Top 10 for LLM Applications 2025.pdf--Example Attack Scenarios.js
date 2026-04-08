var toc_content = `OWASP Top 10 for LLM Applications v2.0
33
genai.owasp.org
level of expertise. For example, chatbots have been found to misrepresent the complexity of
health-related issues, suggesting uncertainty where there is none, which misled users into
believing that unsupported treatments were still under debate.
(Ref. link: KFF)
4. Unsafe Code Generation
The model suggests insecure or non-existent code libraries, which can introduce
vulnerabilities when integrated into software systems. For example, LLMs propose using
insecure third-party libraries, which, if trusted without verification, leads to security risks.
(Ref. link: Lasso)
Prevention and Mitigation Strategies
1. Retrieval-Augmented Generation (RAG)
Use Retrieval-Augmented Generation to enhance the reliability of model outputs by
retrieving relevant and verified information from trusted external databases during response
generation. This helps mitigate the risk of hallucinations and misinformation.
2. Model Fine-Tuning
Enhance the model with fine-tuning or embeddings to improve output quality. Techniques
such as parameter-efficient tuning (PET) and chain-of-thought prompting can help reduce
the incidence of misinformation.
3. Cross-Verification and Human Oversight
Encourage users to cross-check LLM outputs with trusted external sources to ensure the
accuracy of the information. Implement human oversight and fact-checking processes,
especially for critical or sensitive information. Ensure that human reviewers are properly
trained to avoid overreliance on AI-generated content.
4. Automatic Validation Mechanisms
Implement tools and processes to automatically validate key outputs, especially output from
high-stakes environments.
5. Risk Communication
Identify the risks and possible harms associated with LLM-generated content, then clearly
communicate these risks and limitations to users, including the potential for misinformation.
6. Secure Coding Practices
Establish secure coding practices to prevent the integration of vulnerabilities due to
incorrect code suggestions.
7. User Interface Design
Design APIs and user interfaces that encourage responsible use of LLMs, such as integrating
content filters, clearly labeling AI-generated content and informing users on limitations of
reliability and accuracy. Be specific about the intended field of use limitations.
8. Training and Education
Provide comprehensive training for users on the limitations of LLMs, the importance of
independent verification of generated content, and the need for critical thinking. In specific

OWASP Top 10 for LLM Applications v2.0
34
genai.owasp.org
contexts, offer domain-specific training to ensure users can effectively evaluate LLM
outputs within their field of expertise.
Example Attack Scenarios
Scenario #1
Attackers experiment with popular coding assistants to find commonly hallucinated package
names. Once they identify these frequently suggested but nonexistent libraries, they publish
malicious packages with those names to widely used repositories. Developers, relying on the
coding assistant's suggestions, unknowingly integrate these poised packages into their
software. As a result, the attackers gain unauthorized access, inject malicious code, or
establish backdoors, leading to significant security breaches and compromising user data.
Scenario #2
A company provides a chatbot for medical diagnosis without ensuring sufficient accuracy.
The chatbot provides poor information, leading to harmful consequences for patients. As a
result, the company is successfully sued for damages. In this case, the safety and security
breakdown did not require a malicious attacker but instead arose from the insufficient
oversight and reliability of the LLM system. In this scenario, there is no need for an active
attacker for the company to be at risk of reputational and financial damage.

`;