var toc_content = `Information Security: Lowered barriers for offensive cyber capabilities, including ease of security 
8 
attacks, hacking, malware, phishing, and offensive cyber operations through accelerated 
9 
automated discovery and exploitation of vulnerabilities; increased available attack surface for 
10 
targeted cyber attacks, which may compromise the confidentiality and integrity of model 
11 
weights, code, training data, and outputs. 
12 
9. Intellectual Property: Eased production of alleged copyrighted, trademarked, or licensed 
13 
content used without authorization and/or in an infringing manner; eased exposure to trade 
14 
secrets; or plagiarism or replication with related economic or ethical impacts. 
15 
10. Obscene, Degrading, and/or Abusive Content: Eased production of and access to obscene, 
16 
degrading, and/or abusive imagery, including synthetic child sexual abuse material (CSAM), and 
17 
nonconsensual intimate images (NCII) of adults. 
18 
11. Toxicity, Bias, and Homogenization: Difficulty controlling public exposure to toxic or hate 
19 
speech, disparaging or stereotyping content; reduced performance for certain sub-groups or 
20 
languages other than English due to non-representative inputs; undesired homogeneity in data 
21 
inputs and outputs resulting in degraded quality of outputs.  
22 
12. Value Chain and Component Integration: Non-transparent or untraceable integration of 
23 
upstream third-party components, including data that has been improperly obtained or not 
24 
cleaned due to increased automation from GAI; improper supplier vetting across the AI lifecycle; 
25 
or other issues that diminish transparency or accountability for downstream users. 
26 
 CBRN Information 
27 
In the coming years, GAI may increasingly facilitate eased access to information related to CBRN hazards. 
28 
CBRN information is already publicly accessible, but the use of chatbots could facilitate its analysis or 
29 
synthesis for non-experts. For example, red teamers were able to prompt GPT-4 to provide general 
30 
information on unconventional CBRN weapons, including common proliferation pathways, potentially 
31 
vulnerable targets, and information on existing biochemical compounds, in addition to equipment and 
32 
companies that could build a weapon. These capabilities might increase the ease of research for 
33 
adversarial users and be especially useful to malicious actors looking to cause biological harms without 
34 
formal scientific training. However, despite these enhanced capabilities, the physical synthesis and 
35 
successful use of chemical or biological agents will continue to require both applicable expertise and 
36 
supporting infrastructure. 
37 
Other research on this topic indicates that the current generation of LLMs do not have the capability to 
38 
plan a biological weapons attack: LLM outputs regarding biological attack planning were observed to be 
39 

 
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

`;