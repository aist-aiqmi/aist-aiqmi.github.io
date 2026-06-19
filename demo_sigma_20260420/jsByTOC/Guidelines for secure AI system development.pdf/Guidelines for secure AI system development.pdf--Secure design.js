var toc_content = `Secure design
09
Design your system for security as well as functionality and performance
You are confident that the task at hand is most appropriately addressed using AI. Having determined 
this, you assess the appropriateness of your AI-specific design choices. You consider your threat model 
and associated security mitigations alongside functionality, user experience, deployment environment, 
performance, assurance, oversight, ethical and legal requirements, among other considerations. 
For example:
 >
you consider supply chain security when choosing whether to develop in house or use external 
components, for example:
 >
your choice to train a new model, use an existing model (with or without fine-tuning) or 
access a model via an external API is appropriate to your requirements
 >
your choice to work with an external model provider includes a due diligence evaluation of 
that provider’s own security posture
 >
if using an external library, you complete a due diligence evaluation (for example, to 
ensure the library has controls that prevent the system loading untrusted models without 
immediately exposing themselves to arbitrary code execution9)
 >
you implement scanning and isolation/sandboxing when importing third-party models or 
serialised weights, which should be treated as untrusted third-party code and could enable 
remote code execution
Model the threats to your system
As part of your risk management process, you apply a holistic process to assess the threats to your 
system, which includes understanding the potential impacts to the system, users, organisations, and 
wider society if an AI component is compromised or behaves unexpectedly7. This process involves 
assessing the impact of AI-specific threats8 and documenting your decision making.

You recognise that the sensitivity and types of data used in your system may influence its value as a 
target to an attacker. Your assessment should consider that some threats may grow as AI systems 
increasingly become viewed as high value targets, and as AI itself enables new, automated attack 
vectors.  
Guidelines for secure AI system development

 >
if using an external APIs, you apply appropriate controls to data that can be sent to services 
outside of your organisation’s control, such as requiring users to log in and confirm before 
sending potentially sensitive information
 >
you apply appropriate checks and sanitisation of data and inputs; this includes when 
incorporating user feedback or continuous learning data into your model, recognising that 
training data defines system behaviour
 >
you integrate AI software system development into existing secure development and operations 
best practices; all elements of the AI system are written in appropriate environments using coding 
practices and languages that reduce or eliminate known classes of vulnerabilities where plausible
 >
if AI components need to trigger actions, for example amending files or directing output to external 
systems, you apply appropriate restrictions to the possible actions (this includes external AI and non-
AI fail-safes if necessary)
 >
decisions around user interaction are informed by AI-specific risks, for example:
 >
your system provides users with usable outputs without revealing unnecessary levels of 
detail to a potential attacker
 >
if necessary, your system provides effective guardrails around model outputs
 >
if offering an API to external customers or collaborators, you apply appropriate controls that 
mitigate attacks on the AI system via the API
 >
you integrate the most secure settings into the system by default
 >
you apply least privilege principles to limit access to a system’s functionality
 >
you explain riskier capabilities to users and require users to opt in to use them; you 
communicate prohibited use cases, and, where possible, inform users of alternative 
solutions
10
Consider security benefits and trade-offs when selecting your AI model
Your choice of AI model will involve balancing a range of requirements. This includes choice of model 
architecture, configuration, training data, training algorithm and hyperparameters. Your decisions are 
informed by your threat model, and are regularly reassessed as AI security research advances and 
understanding of the threat evolves.
When choosing an AI model, your considerations will likely include, but are not limited to:
 >
the complexity of the model you are using, that is, the chosen architecture and number of parameters; 
your model’s chosen architecture and number of parameters will, among other factors, affect how 
much training data it requires and how robust it is to changes in input data when in use
 >
the appropriateness of the model for your use case and/or feasibility of adapting it to your specific 
need (for example by fine-tuning)
 >
the ability to align, interpret and explain your model’s outputs (for example for debugging, audit or 
regulatory compliance); there may be benefits to using simpler, more transparent models over large 
and complex ones which are more difficult to interpret
 >
characteristics of training dataset(s), including size, integrity, quality, sensitivity, age, relevance and 
diversity
Guidelines for secure AI system development

 >
the value of using model hardening (such as adversarial training), regularisation and/or privacy-
enhancing techniques
 >
the provenance and supply chains of components including the model or foundation model, training 
data and associated tools 
For more information about how many of these factors impact security outcomes, refer to the NCSC’s 
‘Principles for the Security of Machine Learning’, in particular Design for security (model architecture).
11
Guidelines for secure AI system development

This section contains guidelines that apply to the development stage of the AI system development 
lifecycle, including supply chain security, documentation, and asset and technical debt management.
Secure your supply chain
You assess and monitor the security of your AI supply chains across a system’s life cycle, and require 
suppliers to adhere to the same standards your own organisation applies to other software. If 
suppliers cannot adhere to your organisation’s standards, you act in accordance with your existing risk 
management policies.
Where not produced in-house, you acquire and maintain well-secured and well-documented hardware 
and software components (for example, models, data, software libraries, modules, middleware, 
frameworks, and external APIs) from verified commercial, open source, and other third-party developers to 
ensure robust security in your systems.
You are ready to failover to alternate solutions for mission-critical systems, if security criteria are not met. 
You use resources like the NCSC’s Supply Chain Guidance and frameworks such as Supply Chain Levels 
for Software Artifacts (SLSA)10 for tracking attestations of the supply chain and software development life 
cycles.
Identify, track and protect your assets
You understand the value to your organisation of your AI-related assets, including models, data 
(including user feedback), prompts, software, documentation, logs and assessments (including 
information about potentially unsafe capabilities and failure modes), recognising where they represent 
significant investment and where access to them enables an attacker. You treat logs as sensitive data 
and implement controls to protect their confidentiality, integrity and availability. 
You know where your assets reside and have assessed and accepted any associated risks. You have 
processes and tools to track, authenticate, version control and secure your assets, and can restore to a 
known good state in the event of compromise.
You have processes and controls in place to manage what data AI systems can access, and to manage 
content generated by AI according to its sensitivity (and the sensitivity of the inputs that went into 
generating it).
Document your data, models and prompts
You document the creation, operation, and life cycle management of any models, datasets and meta- 
or system-prompts. Your documentation includes security-relevant information such as the sources 
of training data (including fine-tuning data and human or other operational feedback), intended 
scope and limitations, guardrails, cryptographic hashes or signatures, retention time, suggested review 
frequency and potential failure modes. Useful structures to help do this include model cards, data cards 
and software bills of materials (SBOMs). The production of comprehensive documentation supports 
transparency and accountability11.
12
2. 
`;