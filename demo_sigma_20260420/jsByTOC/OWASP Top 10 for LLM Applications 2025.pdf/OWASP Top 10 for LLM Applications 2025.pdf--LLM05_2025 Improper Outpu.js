var toc_content = `OWASP Top 10 for LLM Applications v2.0
15
genai.owasp.org
Scenario #10: Model Merge/Format Conversion Service
An attacker stages an attack with a model merge or format conversation service to
compromise a publicly available access model to inject malware. This is an actual attack
published by vendor HiddenLayer.
Scenario #11: Reverse-Engineer Mobile App
An attacker reverse-engineers an mobile app to replace the model with a tampered version
that leads the user to scam sites. Users are encouraged to dowload the app directly via social
engineering techniques. This is a "real attack on predictive AI" that affected 116 Google Play
apps including popular security and safety-critical applications used for as cash recognition,
parental control, face authentication, and financial service.
(Ref. link: real attack on predictive AI)
Scenario #12: Dataset Poisoning
An attacker poisons publicly available datasets to help create a back door when fine-tuning
models. The back door subtly favors certain companies in different markets.
Scenario #13: T&Cs and Privacy Policy
An LLM operator changes its T&Cs and Privacy Policy to require an explicit opt out from using
application data for model training, leading to the memorization of sensitive data.
Reference Links
1. PoisonGPT: How we hid a lobotomized LLM on Hugging Face to spread fake news
2. Large Language Models On-Device with MediaPipe and TensorFlow Lite
3. Hijacking Safetensors Conversion on Hugging Face
4. ML Supply Chain Compromise
5. Using LoRA Adapters with vLLM
6. Removing RLHF Protections in GPT-4 via Fine-Tuning
7. Model Merging with PEFT
8. HuggingFace SF_Convertbot Scanner
9. Thousands of servers hacked due to insecurely deployed Ray AI framework
10. LeftoverLocals: Listening to LLM responses through leaked GPU local memory
Related Frameworks and Taxonomies
Refer to this section for comprehensive information, scenarios strategies relating to
infrastructure deployment, applied environment controls and other best practices.
• ML Supply Chain Compromise -  MITRE ATLAS

`;