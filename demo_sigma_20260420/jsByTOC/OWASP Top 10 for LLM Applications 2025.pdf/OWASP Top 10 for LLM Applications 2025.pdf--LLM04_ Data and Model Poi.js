var toc_content = `OWASP Top 10 for LLM Applications v2.0
12
genai.owasp.org
4. Vulnerable Pre-Trained Model
Models are binary black boxes and unlike open source, static inspection can offer little to
security assurances. Vulnerable pre-trained models can contain hidden biases, backdoors, or
other malicious features that have not been identified through  the safety evaluations of
model repository. Vulnerable models can be created by both poisoned datasets and direct
model tampering using tehcniques such as ROME also known as lobotomisation.
5. Weak Model Provenance
Currently there are no strong provenance assurances in published models. Model Cards and
associated documentation provide model information and relied upon users, but they offer
no guarantees on the origin of the model. An attacker can compromise supplier account on a
model repo or create a similar one and combine it with social engineering techniques to
compromise the supply-chain of an LLM application.
6. Vulnerable LoRA adapters
LoRA is a popular fine-tuning technique that enhances modularity by allowing pre-trained
layers to be bolted onto an existing LLM. The method increases efficiency but create new
risks, where a malicious LorA adapter compromises the integrity and security of the pre-
trained base model. This can happen both in collaborative model merge environments but
also exploiting the support for LoRA from popular inference deployment platforms such as
vLMM and OpenLLM where adapters can be downloaded and applied to a deployed model.
7. Exploit Collaborative Development Processes
Collaborative model merge and model handling services (e.g. conversions) hosted in shared
environments can be exploited to introduce vulnerabilities in shared models. Model merging
is is very popular on Hugging Face with model-merged models topping the OpenLLM
leaderboard and can be exploited to bypass reviews. Similarly, services such as conversation
bot have been proved to be vulnerable to maniputalion and introduce malicious code in
models.
8. LLM Model on Device supply-chain vulnerabilities
LLM models on device increase the supply attack surface with compromised manufactured
processes and exploitation of device OS or fimware vulnerabilities to compromise models.
Attackers can reverse engineer and re-package applications with tampered models.
9. Unclear T&Cs and Data Privacy Policies
Unclear T&Cs and data privacy policies of the model operators lead to the application's
sensitive data being used for model training and subsequent sensitive information exposure.
This may also apply to risks from using copyrighted material by the model supplier.
Prevention and Mitigation Strategies
1. Carefully vet data sources and suppliers, including T&Cs and their privacy policies, only using
trusted suppliers. Regularly review and audit supplier Security and Access, ensuring no
changes in their security posture or T&Cs.
2. Understand and apply the mitigations found in the OWASP Top Ten's "A06:2021 – Vulnerable

`;