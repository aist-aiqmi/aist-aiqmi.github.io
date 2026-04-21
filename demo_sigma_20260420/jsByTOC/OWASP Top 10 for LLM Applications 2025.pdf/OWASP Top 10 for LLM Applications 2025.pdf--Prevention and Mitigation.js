var toc_content = `OWASP Top 10 for LLM Applications v2.0
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

OWASP Top 10 for LLM Applications v2.0
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

`;