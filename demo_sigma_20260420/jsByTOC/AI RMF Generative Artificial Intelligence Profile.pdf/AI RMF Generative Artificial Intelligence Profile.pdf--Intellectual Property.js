var toc_content = ` 
5 
not more sophisticated than outputs from traditional search engine queries, suggesting that existing 
1 
LLMs may not dramatically increase the operational risk of such an attack.  
2 
Separately, chemical and biological design tools – highly specialized AI systems trained on biological data 
3 
which can help design proteins or other agents – may be able to predict and generate novel structures 
4 
that are not in the training data of text-based LLMs. For instance, an AI system might be able to generate 
5 
information or infer how to create novel biohazards or chemical weapons, posing risks to society or 
6 
national security since such information is not likely to be publicly available.  
7 
While some of these capabilities lie beyond the capability of existing GAI tools, the ability of models to 
8 
facilitate CBRN weapons planning and GAI systems’ connection or access to relevant data and tools 
9 
should be carefully monitored.  
10 
 Confabulation 
11 
“Confabulation” refers to a phenomenon in which GAI systems generate and confidently present 
12 
erroneous or false content to meet the programmed objective of fulfilling a user’s prompt. 
13 
Confabulations are not an inherent flaw of language models themselves, but are instead the result of 
14 
GAI pre-training involving next word prediction. For example, an LLM may generate content that deviates 
15 
from the truth or facts, such as mistaking people, places, or other details of historical events. Legal 
16 
confabulations have been shown to be pervasive in current state-of-the-art LLMs. Confabulations also 
17 
include generated outputs that diverge from the source input, or contradict previously generated 
18 
statements in the same context. This phenomenon is also referred to as “hallucination” or “fabrication,” 
19 
but some have noted that these characterizations imply consciousness and intentional deceit, and 
20 
thereby inappropriately anthropomorphize GAI.  
21 
Risks from confabulations may arise when users believe false content due to the confident nature of the 
22 
response, or the logic or citations accompanying the response, leading users to act upon or promote the 
23 
false information. For instance, LLMs may sometimes provide logical steps of how they arrived at an 
24 
answer even when the answer itself is incorrect. This poses a risk for many real-world applications, such 
25 
as in healthcare, where a confabulated summary of patient information reports could cause doctors to 
26 
make incorrect diagnoses and/or recommend the wrong treatments. While the research above indicates 
27 
confabulated content is abundant, it is difficult to estimate the downstream scale and impact of 
28 
confabulated content today.  
29 
 Dangerous or Violent Recommendations 
30 
GAI systems can produce output or recommendations that are inciting, radicalizing, threatening, or that 
31 
glorify violence. LLMs have been reported to generate dangerous or violent content, and some models 
32 
have even generated actionable instructions on dangerous or unethical behavior, including how to 
33 
manipulate people and conduct acts of terrorism. Text-to-image models also make it easy to create 
34 
unsafe images that could be used to promote dangerous or violent messages, depict manipulated 
35 
scenes, or other harmful content. Similar risks are present for other media, including video and audio. 
36 
GAI may produce content that recommends self-harm or criminal/illegal activities. For some dangerous 
37 
queries, many current systems restrict model outputs in response to certain prompts, but this approach 
38 
may still produce harmful recommendations in response to other less-explicit, novel queries, or 
39 
jailbreaking (i.e., manipulating prompts to circumvent output controls). Studies have observed that a 
40 

 
6 
non-negligible number of user conversations with chatbots reveal mental health issues among the users 
1 
– and that current systems are unequipped or unable to respond appropriately or direct these users to 
2 
the help they may need. 
3 
 Data Privacy 
4 
GAI systems implicate numerous risks to privacy. Models may leak, generate, or correctly infer sensitive 
5 
information about individuals such as biometric, health, location, or other personally identifiable 
6 
information (PII). For example, during adversarial attacks, LLMs have revealed private or sensitive 
7 
information (from in the public domain) that was included in their training data. This information 
8 
included phone numbers, code, conversations and 128-bit universally unique identifiers extracted 
9 
verbatim from just one document in the training data. This problem has been referred to as data 
10 
memorization.  
11 
GAI system training requires large volumes of data, often collected from millions of publicly available 
12 
sources. When involving personal data, this practice raises risks to widely accepted privacy principles, 
13 
including to transparency, individual participation (including consent), and purpose specification. Most 
14 
model developers do not disclose specific data sources (if any) on which models were trained. Unless 
15 
training data is available for inspection, there is generally no way for consumers to know what kind of PII 
16 
or other sensitive material may have been used to train GAI models. These practices also pose risks to 
17 
compliance with existing privacy regulations.  
18 
GAI models may be able to correctly infer PII that was not in their training data nor disclosed by the user, 
19 
by stitching together information from a variety of disparate sources. This might include automatically 
20 
inferring attributes about individuals, including those the individual might consider sensitive (like 
21 
location, gender, age, or political leanings). 
22 
Wrong and inappropriate inferences of PII based on available data can contribute to harmful bias and 
23 
discrimination. For example, GAI models can output information based on predictive inferences beyond 
24 
what users openly disclose, and these insights might be used by the model, other systems, or individuals 
25 
to undermine privacy or make adverse decisions – including discriminatory decisions – about the 
26 
individual. These types of harms already occur in non-generative algorithmic systems that make 
27 
predictive inferences, such as the example in which online advertisers inferred that a consumer was 
28 
pregnant before her own family members knew. Based on their access to many data sources, GAI 
29 
systems might further improve the accuracy of inferences on private data, increasing the likelihood of 
30 
sensitive data exposure or harm. Inferences about private information pose a risk even if they are not 
31 
accurate (e.g., confabulations), especially if they reveal information the individual considers sensitive or 
32 
are used to disadvantage or harm them. 
33 
 Environmental  
34 
The training, maintenance, and deployment (inference) of GAI systems are resource intensive, with 
35 
potentially large energy and environmental footprints. Energy and carbon emissions vary based on types 
36 
of GAI model development activities (i.e., pre-training, fine-tuning, inference), modality, hardware used, 
37 
and type of task or application. 
38 
Estimates suggest that training a single GAI transformer model can emit as much carbon as 300 round-
39 
trip flights between San Francisco and New York. In a study comparing energy consumption and carbon 
40 

 
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

`;