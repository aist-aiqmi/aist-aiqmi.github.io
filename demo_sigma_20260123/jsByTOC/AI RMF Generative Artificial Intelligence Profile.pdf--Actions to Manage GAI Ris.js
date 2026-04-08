var toc_content = ` 
7 
emissions for LLM inference, generative tasks (i.e., text summarization) were found to be more energy 
1 
and carbon intensive then discriminative or non-generative tasks.  
2 
Methods for training smaller models, such as model distillation or compression, can reduce 
3 
environmental impacts at inference time, but may still contribute to large environmental impacts for 
4 
hyperparameter tuning and training. 
5 
 Human-AI Configuration 
6 
Human-AI configurations involve varying levels of automation and human-AI interactions. Each setup 
7 
can contribute to risks for abuse, misuse, and unsafe repurposing by humans, and it is difficult to 
8 
estimate the scale of those risks. While AI systems can generate decisions independently, human experts 
9 
often work in collaboration with most AI systems to drive their own decision-making tasks or complete 
10 
other objectives. Humans bring their domain-specific expertise to these scenarios but may not 
11 
necessarily have detailed knowledge of AI systems and how they work.  
12 
The integration of GAI systems can involve varying risks of misconfigurations and poor interactions. 
13 
Human experts may be biased against or “averse” to AI-generated outputs, such as in their 
14 
perceptions of the quality of generated content. In contrast, due to the complexity and increasing 
15 
reliability of GAI technology, other human experts may become conditioned to and overly rely upon GAI 
16 
systems. This phenomenon is known as “automation bias,” which refers to excessive deference to AI 
17 
systems.  
18 
Accidental misalignment or mis-specification of system goals or rewards by developers or users can 
19 
cause a model not to operate as intended. One AI model persistently shared deceptive outputs after a 
20 
group of researchers taught it to do so, despite applying standards safety techniques to correct its 
21 
behavior. While deceptive capabilities is an emergent field of risks, adversaries could prompt deceptive 
22 
behaviors which could lead to other risks.  
23 
Finally, reorganizations of entities using GAI may result in insufficient organizational awareness of GAI-
24 
generated content or decisions, and the resulting reduction of institutional checks against GAI-related 
25 
risks. There may also be a risk of emotional entanglement between humans and GAI systems, such as 
26 
coercion or manipulation that leads to safety or psychological risks.  
27 
 Information Integrity 
28 
Information integrity describes the spectrum of information and associated patterns of its creation, 
29 
exchange, and consumption in society, where high-integrity information can be trusted; distinguishes 
30 
fact from fiction, opinion, and inference; acknowledges uncertainties; and is transparent about its level 
31 
of vetting. GAI systems ease access to the production of false, inaccurate, or misleading content at scale 
32 
that can be created or spread unintentionally (misinformation), especially if it arises from confabulations 
33 
that occur in response to innocuous queries. Research has shown that even subtle changes to text or 
34 
images can influence human judgment and perception.  
35 
GAI systems also enable the production of false or misleading information at scale, where the user has 
36 
the explicit intent to deceive or cause harm to others (disinformation). Regarding disinformation, GAI 
37 
systems could also enable a higher degree of sophistication for malicious actors to produce content that 
38 
is targeted towards specific demographics. Current and emerging multimodal models make it possible to 
39 

 
8 
not only generate text-based disinformation, but produce highly realistic “deepfakes” of audiovisual 
1 
content and photorealistic synthetic images as well. Additional disinformation threats could be enabled 
2 
by future GAI models trained on new data modalities. 
3 
Disinformation campaigns conducted by bad faith actors, and misinformation – both enabled by GAI – 
4 
may erode public trust in true or valid evidence and information. For example, a synthetic image of a 
5 
Pentagon blast went viral and briefly caused a drop in the stock market. Generative AI models can also 
6 
assist malicious actors in creating compelling imagery and propaganda to support disinformation 
7 
campaigns, which may not be photorealistic, but could enable these campaigns to gain more reach and 
8 
engagement on social media platforms. 
9 
 Information Security 
10 
Information security for computer systems and data is a mature field with widely accepted and 
11 
standardized practices for offensive and defensive cyber capabilities. GAI-based systems present two 
12 
primary information security risks: the potential for GAI to discover or enable new cybersecurity risks 
13 
through lowering the barriers for offensive capabilities, and simultaneously expands the available attack 
14 
surface as GAI itself is vulnerable to novel attacks like prompt-injection or data poisoning.   
15 
Offensive cyber capabilities advanced by GAI systems may augment security attacks such as hacking, 
16 
malware, and phishing. Reports have indicated that LLMs are already able to discover vulnerabilities in 
17 
systems (hardware, software, data) and write code to exploit them. Sophisticated threat actors might 
18 
further these risks by developing GAI-powered security co-pilots for use in several parts of the attack 
19 
chain, including informing attackers on how to proactively evade threat detection and escalate privileges 
20 
after gaining system access. Given the complexity of the GAI value chain, practices for identifying and 
21 
securing potential attack points or threats to specific components (i.e., data inputs, processing, GAI 
22 
training, and deployment contexts) may need to be adapted or evolved. 
23 
One of the most concerning GAI vulnerabilities involves prompt-injection, or manipulating GAI systems 
24 
to behave in unintended ways. In direct prompt injections, attackers might openly exploit input prompts 
25 
to cause unsafe behavior with a variety of downstream consequences to interconnected systems. 
26 
Indirect prompt injection attacks occur when adversaries remotely (i.e., without a direct interface) 
27 
exploit LLM-integrated applications by injecting prompts into data likely to be retrieved. Security 
28 
researchers have already demonstrated how indirect prompt injections can steal data and run code 
29 
remotely on a machine. Merely querying a closed production model can elicit previously undisclosed 
30 
information about that model. 
31 
Information security for GAI models and systems also includes security, confidentiality, and integrity of 
32 
the GAI training data, code, and model weights. Another novel cybersecurity risk to GAI is data 
33 
poisoning, in which an adversary compromises a training dataset used by a model to manipulate its 
34 
operation. Malicious tampering of data or parts of the model via this type of unauthorized access could 
35 
exacerbate risks associated with GAI system outputs. 
36 
 Intellectual Property 
37 
GAI systems may infringe on copyrighted or trademarked content, trade secrets, or other licensed 
38 
content. These types of intellectual property are often part of the training data for GAI systems, namely 
39 
foundation models, upon which many downstream GAI applications are built. Model outputs could 
40 

`;