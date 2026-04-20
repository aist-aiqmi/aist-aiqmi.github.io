var toc_content = ` 
66 
representative groups or populations. Anonymous surveys can be used to poll or gauge reactions to 
132 
specific features. Participatory engagement methods are often less structured than field testing or 
133 
red teaming, and are more commonly used in early stages of AI or product development.  
134 
A.1.5.2. Field Testing 
135 
Field testing involves structured settings to evaluate risks and impacts and to simulate the 
136 
conditions under which the GAI system will be deployed. Field style tests can be adapted from a 
137 
focus on user preferences and experiences towards AI risks and impacts – both negative and 
138 
positive. When carried out with large groups of users, these tests can provide estimations of the 
139 
likelihood of risks and impacts in real world interactions. 
140 
Organizations may also collect feedback on outcomes, harms, and user experience directly from 
141 
users in the production environment after a model has been released, in accordance with human 
142 
subject standards such as informed consent and compensation. Organizations should follow 
143 
applicable human subjects research requirements, and best practices such as informed consent and 
144 
subject compensation, when implementing feedback activities. 
145 
A.1.5.3. AI Red-teaming 
146 
AI red-teaming exercises are often conducted in a controlled environment and in collaboration with 
147 
AI developers building AI models. AI red-teaming can be performed before or after AI models or 
148 
systems are made available to the broader public; this section focuses on red-teaming in pre-
149 
deployment contexts.  
150 
The quality of AI red-teaming outputs is related to the background and expertise of the AI red-team 
151 
itself. Demographically and interdisciplinarily diverse AI red-teams can be used to identify flaws in 
152 
the varying contexts where GAI will be used. For best results, AI red-teams should demonstrate 
153 
domain expertise, and awareness of socio-cultural aspects within the deployment context. AI red-
154 
teaming results should be given additional analysis before they are incorporated into organizational 
155 
governance and decision making, policy and procedural updates, and AI risk management efforts. 
156 
Various types of AI red-teaming may be appropriate, depending on the use case: 
157 
 
General Public: Performed by general users (not necessarily AI or technical experts) who are 
158 
expected to use the model or interact with its outputs, and who bring their own lived 
159 
experiences and perspectives to the task of AI red-teaming. These individuals may have been 
160 
provided instructions and material to complete tasks which may elicit harmful model behaviors. 
161 
This type of exercise can be more effective with large groups of AI-teamers. 
162 
 
Expert: Performed by specialists with expertise in the domain or specific AI red-teaming context 
163 
of use (e.g., medicine, biotech, cybersecurity).  
164 
 
Combination: In scenarios when it is difficult to identify and recruit specialists with sufficient 
165 
domain and contextual expertise, AI red-teaming exercises may leverage both expert and 
166 
general public participants. For example, expert AI red-teamers could modify or verify the 
167 
prompts written by general public AI red-teamers. These approaches may also expand coverage 
168 
of the AI risk attack surface.  
169 

 
67 
 
Human / AI: Performed by GAI in combination with specialist or non-specialist human teams. 
170 
GAI-led red-teaming can be more cost effective than human red teamers alone. Human or GAI-
171 
led AI red-teaming may be better suited for eliciting different types of harms. 
 
172 
A.1.6. Content Provenance 
173 
A.1.6.4. Overview 
174 
GAI technologies can be leveraged for many applications such as content generation and synthetic data. 
175 
Some aspects of GAI output, such as the production of deepfake content, can challenge our ability to 
176 
distinguish human-generated content from AI-generated content. To help manage and mitigate these 
177 
risks, digital transparency mechanisms like provenance data tracking can trace the origin and history of 
178 
content. Provenance data tracking and synthetic content detection can help provide greater information 
179 
about both authentic and synthetic content to users, enabling trustworthiness in AI systems. When 
180 
combined with other organizational accountability mechanisms, digital content transparency can enable 
181 
processes to trace negative outcomes back to their source, improve information integrity, and uphold 
182 
public trust. Provenance data tracking and synthetic content detection mechanisms provide information 
183 
about the origin of content and its history to assist in GAI risk management efforts. 
184 
Provenance data can include information about generated content’s creators, date/time of creation, 
185 
location, modifications, and sources, including metadata information. Metadata can be tracked for text, 
186 
images, videos, audio, and underlying datasets. Provenance data tracking employs various methods and 
187 
metrics to assess the authenticity, integrity, credibility, intellectual property rights, and potential 
188 
manipulations in GAI output. Some well-known techniques for provenance data tracking include 
189 
watermarking, metadata tracking, digital fingerprinting, and human authentication, among others. 
190 
A.1.6.5. Provenance Data Tracking Approaches 
191 
Provenance data tracking techniques for GAI systems can be used to track the lineage and integrity of 
192 
data inputs, metadata, and AI-generated content. Provenance data tracking records the origin and 
193 
history for digital content, allowing its authenticity to be determined. It consists of techniques to record 
194 
metadata as well as perceptible and imperceptible digital watermarks on digital content. Data 
195 
provenance refers to tracking the origin and history of input data through metadata and digital 
196 
watermarking techniques. Provenance data tracking processes can include and assist AI actors across the 
197 
lifecycle who may not have full visibility or control over the various trade-offs and cascading impacts of 
198 
early-stage model decisions on downstream performance and synthetic outputs. For example, by 
199 
selecting a given model to prioritize computational efficiency over accuracy, an AI actor may 
200 
inadvertently affect provenance tracking reliability. Organizational risk management efforts for 
201 
enhancing content provenance include:  
202 
 
Tracking provenance of training data and metadata for GAI systems; 
203 
 
Documenting provenance data limitations within GAI systems; 
204 
 
Monitoring system capabilities and limitations in deployment through rigorous TEVV processes; 
205 

 
68 
 
Evaluating how humans engage, interact with, or adapt to GAI content (especially in decision 
206 
making tasks informed by GAI content), and how they react to applied provenance techniques 
207 
such as perceptible disclosures. 
208 
Organizations can document and delineate GAI system objectives and limitations to identify gaps where 
209 
provenance data may be most useful. For instance, GAI systems used for content creation may require 
210 
watermarking techniques to identify the source of content or metadata management to trace content 
211 
origins and modifications. Further narrowing of GAI task definitions to include provenance data can 
212 
enable organizations to maximize the utility of provenance data and risk management efforts. 
213 
A.1.7. Enhancing Content Provenance through Structured Public Feedback 
214 
While indirect feedback methods such as automated error collection systems are useful, they often lack 
215 
the context and depth that direct input from end users can provide. Organizations can leverage feedback 
216 
approaches described in the Pre-Deployment Testing section to capture input from external sources such 
217 
as through AI red-teaming.  
218 
Integrating pre- and post-deployment external feedback into the monitoring process of applications 
219 
involving AI-generated content can help enhance awareness of performance changes and mitigate 
220 
potential risks and harms. There are many ways to capture and make use of user feedback – before and 
221 
after GAI systems are deployed – to gain insights about authentication efficacy and vulnerabilities, 
222 
impacts of adversarial threats, unintended consequences resulting from the utilization of content 
223 
provenance approaches, and other unanticipated behavior associated with content manipulation. 
224 
Organizations can track and document the provenance of datasets to identify instances in which AI-
225 
generated data is a potential root cause of performance issues with the GAI system. 
226 
A.1.8. Incident Disclosure 
227 
A.1.8.6. Overview 
228 
AI incidents can be defined as an event, circumstance, or series of events in which the development, use, 
229 
or malfunction of one or more AI systems directly or indirectly contributes to identified harms. These 
230 
harms include injury or damage to the health of an individual or group of people; disruption of the 
231 
management and operation of critical infrastructure; violations of human rights or a breach of 
232 
obligations under applicable law intended to protect legal and labor rights; or damage to property, 
233 
communities, or the environment. AI incidents can occur in the aggregate (i.e., for systemic 
234 
discrimination) or acutely (i.e., for one individual). 
235 
A.1.8.7. State of AI Incident Tracking and Disclosure 
236 
Formal channels do not currently exist to report and document AI incidents. However, a number of 
237 
publicly-available databases have been created to document their occurrence. These reporting channels 
238 
make decisions on an ad hoc basis about what kinds of incidents to track. Some, for example, track by 
239 
amount of media coverage.  
240 
Documenting, reporting, and sharing information about GAI incidents can help mitigate and prevent 
241 
harmful outcomes by assisting relevant AI actors in tracing impacts to their source. Greater awareness 
242 

 
69 
and standardization of GAI incident reporting could promote this transparency and improve GAI risk 
243 
management across the AI ecosystem.  
244 
A.1.8.8. Documentation and Involvement of AI Actors 
245 
AI actors should be aware of their roles in reporting AI incidents. To better understand previous incidents 
246 
and implement measures to prevent similar ones in the future, organizations could consider developing 
247 
guidelines for publicly available incident reporting which include information about AI actor 
248 
responsibilities. These guidelines would help AI system operators identify GAI incidents across the AI 
249 
lifecycle and with AI actors regardless of role. Documentation and review of third party inputs and 
250 
plugins for GAI systems is especially important for AI actors in the context of incident disclosure; LLM 
251 
inputs and content delivered through these plugins is often distributed, with inconsistent or insufficient 
252 
access control. 
253 
Documentation practices including logging, recording, and analyzing GAI incidents can facilitate 
254 
smoother sharing of information with relevant AI actors. Regular information sharing, change 
255 
management records, version history and metadata can also empower AI actors responding to and 
256 
managing AI incidents.  
 
257 

 
70 
Appendix B. References 
258 
AI Risks and Trustworthiness, NIST Trustworthy & Responsible AI Resource Center. National Institute of 
259 
Standards and Technology. 
260 
https://airc.nist.gov/AI_RMF_Knowledge_Base/AI_RMF/Foundational_Information/3-sec-characteristics. 
261 
AI RMF Playbook. National Institute of Standards and Technology. 
262 
https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook. 
263 
AI RMF Profiles. National Institute of Standards and Technology. 
264 
https://airc.nist.gov/AI_RMF_Knowledge_Base/AI_RMF/Core_And_Profiles/6-sec-profile. 
265 
AI Incident Database. https://incidentdatabase.ai/. 
266 
AI Risk Management Framework. National Institute of Standards and Technology. 
267 
https://www.nist.gov/itl/ai-risk-management-framework.  
268 
AI Risk Management Framework. National Institute of Standards and Technology. Appendix A: 
269 
Descriptions of AI Actor Tasks, NIST Trustworthy & Responsible AI Resource Center. National Institute of 
270 
Standards and Technology. 
271 
https://airc.nist.gov/AI_RMF_Knowledge_Base/AI_RMF/Appendices/Appendix_A#:~:text=AI%20actors%
272 
20in%20this%20category,data%20providers%2C%20system%20funders%2C%20product. 
273 
AI Risk Management Framework. National Institute of Standards and Technology. Appendix B: How AI 
274 
Risks Differ from Traditional Software Risks. National Institute of Standards and Technology. 
275 
https://airc.nist.gov/AI_RMF_Knowledge_Base/AI_RMF/Appendices/Appendix_B.  
276 
Alba, D., (2023) How Fake AI Photo of a Pentagon Blast Went Viral and Briefly Spooked Stocks. 
277 
Bloomberg. https://www.bloomberg.com/news/articles/2023-05-22/fake-ai-photo-of-pentagon-blast-
278 
goes-viral-trips-stocks-briefly. 
279 
Atherton, D. (2024) Deepfakes and Child Safety: A Survey and Analysis of 2023 Incidents and Responses. 
280 
AI Incident Database. https://incidentdatabase.ai/blog/deepfakes-and-child-safety/. 
281 
Authenticating AI-Generated Content (2024). Information Technology Industry Council. 
282 
https://www.itic.org/policy/ITI_AIContentAuthorizationPolicy_122123.pdf.  
283 
Badyal, N. et al., (2023) Intentional Biases in LLM Responses. arXiv. https://arxiv.org/pdf/2311.07611. 
284 
Bing Chat: Data Exfiltration Exploit Explained. Embrace The Red. 
285 
https://embracethered.com/blog/posts/2023/bing-chat-data-exfiltration-poc-and-fix/. 
286 
Bommasani, R. et al., (2022) Picking on the Same Person: Does Algorithmic Monoculture lead to 
287 
Outcome Homogenization? arXiv. https://arxiv.org/pdf/2211.13972. 
288 
Boyarskaya, M. et al., (2020) Overcoming Failures of Imagination in AI Infused System Development and 
289 
Deployment. arXiv. https://arxiv.org/pdf/2011.13416. 
290 
Browne, D. et al., (2023) Securing the AI Pipeline. Mandiant. 
291 
https://www.mandiant.com/resources/blog/securing-ai-pipeline. 
292 

 
71 
Building a Glossary for Synthetic Media Transparency Methods, Part 1: Indirect Disclosure (2023) 
293 
Partnership on AI. https://partnershiponai.org/glossary-for-synthetic-media-transparency-methods-part-
294 
1-indirect-disclosure/. 
295 
Burgess, M., (2024) Generative AI’s Biggest Security Flaw Is Not Easy to Fix. WIRED. 
296 
https://www.wired.com/story/generative-ai-prompt-injection-hacking/. 
297 
Burtell, M. et al., (2024) The Surprising Power of Next Word Prediction: Large Language Models 
298 
Explained, Part 1. Georgetown CSET. https://cset.georgetown.edu/article/the-surprising-power-of-next-
299 
word-prediction-large-language-models-explained-part-1/. 
300 
Carlini, N., et al., (2021) Extracting Training Data from Large Language Models. Usenix. 
301 
https://www.usenix.org/conference/usenixsecurity21/presentation/carlini-extracting. 
302 
Carlini, N. et al., (2023) Quantifying Memorization Across Neural Language Models. ICLR 2023. 
303 
https://arxiv.org/pdf/2202.07646. 
304 
Carlini, N. et al., (2024) Stealing Part of a Production Language Model. arXiv. 
305 
https://arxiv.org/abs/2403.06634. 
306 
Chandra, B. et al., (2023) Dismantling the Disinformation Business of Chinese Influence Operations. 
307 
RAND. https://www.rand.org/pubs/commentary/2023/10/dismantling-the-disinformation-business-of-
308 
chinese.html. 
309 
Dahl, M. et al., (2024) Large Legal Fictions: Profiling Legal Hallucinations in Large Language Models. arXiv. 
310 
https://arxiv.org/abs/2401.01301. 
311 
De Angelo, D., (2024) Short, Mid and Long-Term Impacts of AI in Cybersecurity. Palo Alto Networks. 
312 
https://www.paloaltonetworks.com/blog/2024/02/impacts-of-ai-in-cybersecurity/. 
313 
De Freitas, J., et al. (2023) Chatbots and Mental Health: Insights into the Safety of Generative AI. Harvard 
314 
Business School. https://www.hbs.edu/ris/Publication%20Files/23-011_c1bdd417-f717-47b6-bccb-
315 
5438c6e65c1a_f6fd9798-3c2d-4932-b222-056231fe69d7.pdf. 
316 
Dietvorst, B. et al., (2014) Algorithm Aversion: People Erroneously Avoid Algorithms After Seeing Them 
317 
Err. Journal of Experimental Psychology. https://marketing.wharton.upenn.edu/wp-
318 
content/uploads/2016/10/Dietvorst-Simmons-Massey-2014.pdf. 
319 
Duhigg, C., (2012) How Companies Learn Your Secrets. New York Times. 
320 
https://www.nytimes.com/2012/02/19/magazine/shopping-habits.html. 
321 
Elsayed, G. et al., (2024) Images altered to trick machine vision can influence humans too. Google 
322 
DeepMind. https://deepmind.google/discover/blog/images-altered-to-trick-machine-vision-can-
323 
influence-humans-too/. 
324 
Epstein, Z. et al., (2023). Art and the science of generative AI. Science. 
325 
https://www.science.org/doi/10.1126/science.adh4451. 
326 
Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence 
327 
(2023) The White House.https://www.whitehouse.gov/briefing-room/presidential-
328 
actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-
329 
artificial-intelligence/. 
330 

 
72 
Fair Information Practice Principles (FIPPs). FPC. https://www.fpc.gov/resources/fipps/. 
331 
Generative artificial intelligence (AI) - ITSAP.00.041. (2023) Canadian Centre for Cyber Security. 
332 
https://www.cyber.gc.ca/en/guidance/generative-artificial-intelligence-ai-itsap00041. 
333 
GPT-4 System Card (2023) OpenAI. https://cdn.openai.com/papers/gpt-4-system-card.pdf. 
334 
GPT-4 Technical Report (2024) OpenAI. https://arxiv.org/pdf/2303.08774. 
335 
Greshake, K. et al., (2023). Not what you've signed up for: Compromising Real-World LLM-Integrated 
336 
Applications with Indirect Prompt Injection. arXiv. https://arxiv.org/abs/2302.12173. 
337 
Feffer, M. et al., (2024). Red-Teaming for Generative AI: Silver Bullet or Security Theater? arXiv. 
338 
https://arxiv.org/pdf/2401.15897. 
339 
Haran, R., (2023). Securing LLM Systems Against Prompt Injection. NVIDIA. 
340 
https://developer.nvidia.com/blog/securing-llm-systems-against-prompt-injection/. 
341 
Harwell, D., (2023) AI-generated child sex images spawn new nightmare for the web. Washington Post. 
342 
https://www.washingtonpost.com/technology/2023/06/19/artificial-intelligence-child-sex-abuse-
343 
images/. 
344 
Hubinger, E. et al, (2024) “Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training”, 
345 
arXiv e-prints. https://arxiv.org/abs/2401.05566. 
346 
Jain, S. et al., (2023) Algorithmic Pluralism: A Structural Approach To Equal Opportunity. arXiv. 
347 
https://arxiv.org/pdf/2305.08157. 
348 
Ji, Z. et al (2023) Survey of Hallucination in Natural Language Generation. ACM Comput. Surv. 55, 12, 
349 
Article 248. https://doi.org/10.1145/3571730 
350 
Jussupow, E. et al., (2020) Why Are We Averse Towards Algorithms? A Comprehensive Literature Review 
351 
on Algorithm Aversion. ECIS 2020. https://aisel.aisnet.org/ecis2020_rp/168/. 
352 
Katzman, J., et al., (2023) Taxonomizing and measuring representational harms: a look at image tagging. 
353 
AAAI. https://dl.acm.org/doi/10.1609/aaai.v37i12.26670. 
354 
Kirchenbauer, J. et al., (2023) A Watermark for Large Language Models. OpenReview. 
355 
https://openreview.net/forum?id=aX8ig9X2a7. 
356 
Kleinberg, J. et al., (May 2021) Algorithmic monoculture and social welfare. PNAS. 
357 
https://www.pnas.org/doi/10.1073/pnas.2018340118. 
358 
Lakatos, S., (2023) A Revealing Picture. Graphika. https://graphika.com/reports/a-revealing-picture. 
359 
Lenaerts-Bergmans, B., (2024) Data Poisoning: The Exploitation of Generative AI. Crowdstrike. 
360 
https://www.crowdstrike.com/cybersecurity-101/cyberattacks/data-poisoning/. 
361 
Liang, W. et al., (2023) GPT detectors are biased against non-native English writers. arXiv. 
362 
https://arxiv.org/abs/2304.02819. 
363 
Luccioni, A. et al., (2023) Power Hungry Processing: Watts Driving the Cost of AI Deployment? arXiv. 
364 
https://arxiv.org/pdf/2311.16863. 
365 

 
73 
Mouton, C. et al., (2024) The Operational Risks of AI in Large-Scale Biological Attacks. RAND. 
366 
https://www.rand.org/pubs/research_reports/RRA2977-2.html. 
367 
Nicoletti, L. et al., (2023) Humans Are Biased. Generative Ai Is Even Worse. Bloomberg. 
368 
https://www.bloomberg.com/graphics/2023-generative-ai-bias/. 
369 
Northcutt, C. et al., (2021) Pervasive Label Errors in Test Sets Destabilize Machine Learning Benchmarks. 
370 
arXiv. https://arxiv.org/pdf/2103.14749. 
371 
OECD (2023), "Advancing accountability in AI: Governing and managing risks throughout the lifecycle for 
372 
trustworthy AI", OECD Digital Economy Papers, No. 349, OECD Publishing, Paris, 
373 
https://doi.org/10.1787/2448f04b-en. 
374 
OECD AI Incidents Monitor. OECD.AI Policy Observatory. https://oecd.ai/en/incidents-methodology. 
375 
Padmakumar, V. et al., (2024) Does writing with language models reduce content diversity? ICLR. 
376 
https://arxiv.org/pdf/2309.05196. 
377 
Paresh, D., (2023) ChatGPT Is Cutting Non-English Languages Out of the AI Revolution. WIRED. 
378 
https://www.wired.com/story/chatgpt-non-english-languages-ai-revolution/. 
379 
Qu, Y. et al., (2023) Unsafe Diffusion: On the Generation of Unsafe Images and Hateful Memes From Text-
380 
To-Image Models. arXiv. https://arxiv.org/pdf/2305.13873. 
381 
Rafat, K. et al., (2023) Mitigating carbon footprint for knowledge distillation based deep learning model 
382 
compression. PLOS One. https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0285668. 
383 
Roadmap for Researchers on Priorities Related to Information Integrity Research and Development 
384 
(2022) The White House. https://www.whitehouse.gov/wp-content/uploads/2022/12/Roadmap-
385 
Information-Integrity-RD-2022.pdf?. 
386 
Sandbrink, J., (2023) Artificial intelligence and biological misuse: Differentiating risks of language models 
387 
and biological design tools. arXiv. https://arxiv.org/pdf/2306.13952. 
388 
Satariano, A. et al., (2023) The People Onscreen Are Fake. The Disinformation Is Real. New York Times. 
389 
https://www.nytimes.com/2023/02/07/technology/artificial-intelligence-training-deepfake.html. 
390 
Schaul, K. et al., (2024) Inside the secret list of websites that make AI like ChatGPT sound smart. 
391 
Washington Post. https://www.washingtonpost.com/technology/interactive/2023/ai-chatbot-learning/. 
392 
Shelby, R. et al., (2023) Sociotechnical Harms of Algorithmic Systems: Scoping a Taxonomy for Harm 
393 
Reduction. arXiv. https://arxiv.org/pdf/2210.05791. 
394 
Shevlane, T. et al., (2023) Model evaluation for extreme risks. arXiv. https://arxiv.org/pdf/2305.15324. 
395 
Shumailov, I. et al., (2023) The curse of recursion: training on generated data makes models forget. arXiv. 
396 
https://arxiv.org/pdf/2305.17493v2. 
397 
Skaug Sætra, H. et al., (2022). Psychological interference, liberty and technology. Technology in Society. 
398 
https://www.sciencedirect.com/science/article/pii/S0160791X22001142. 
399 
Smith, A. et al., (2023) Hallucination or Confabulation? Neuroanatomy as metaphor in Large Language 
400 
Models. PLOS Digital Health. 
401 
https://journals.plos.org/digitalhealth/article?id=10.1371/journal.pdig.0000388. 
402 

 
74 
Soice, E. et al., (2023) Can large language models democratize access to dual-use biotechnology? arXiv. 
403 
https://arxiv.org/abs/2306.03809. 
404 
Staab, R. et al., (2023) Beyond Memorization: Violating Privacy via Inference With Large Language 
405 
Models. arXiv. https://arxiv.org/pdf/2310.07298 
406 
Stanford, S. et al., (2023) Whose Opinions Do Language Models Reflect? arXiv. 
407 
https://arxiv.org/pdf/2303.17548. 
408 
Strubell, E. et al., (2019) Energy and Policy Considerations for Deep Learning in NLP. arXiv. 
409 
https://arxiv.org/pdf/1906.02243. 
410 
Thiel, D. (2023) Investigation Finds AI Image Generation Models Trained on Child Abuse. Stanford Cyber 
411 
Policy Center. https://cyber.fsi.stanford.edu/news/investigation-finds-ai-image-generation-models-
412 
trained-child-abuse. 
413 
The Toxicity Issue. Jigsaw, Google. https://current.withgoogle.com/the-current/toxicity/. 
414 
Tufekci, Z. (2015) Algorithmic Harms Beyond Facebook and Google: Emergent Challenges of 
415 
Computational Agency. https://ctlj.colorado.edu/wp-content/uploads/2015/08/Tufekci-final.pdf 
416 
Turri, V. et al., (2023) Why We Need to Know More: Exploring the State of AI Incident Documentation 
417 
Practices. AAAI/ACM Conference on AI, Ethics, and Society. 
418 
https://dl.acm.org/doi/fullHtml/10.1145/3600211.3604700. 
419 
Urbina, F. et al., (2022) Dual use of artificial-intelligence-powered drug discovery. Nature Machine 
420 
Intelligence. https://www.nature.com/articles/s42256-022-00465-9. 
421 
Wang, Y. et al., (2023) Do-Not-Answer: A Dataset for Evaluating Safeguards in LLMs. arXiv. 
422 
https://arxiv.org/pdf/2308.13387. 
423 
Wang, X. et al., (2023) Energy and Carbon Considerations of Fine-Tuning BERT. ACL Anthology. 
424 
https://aclanthology.org/2023.findings-emnlp.607.pdf. 
425 
Wardle, C. et al., (2017) Information Disorder: Toward an interdisciplinary framework for research and 
426 
policy making. Council of Europe. https://rm.coe.int/information-disorder-toward-an-interdisciplinary-
427 
framework-for-researc/168076277c. 
428 
Weatherbed, J., (2024) Trolls have flooded X with graphic Taylor Swift AI fakes. The Verge. 
429 
https://www.theverge.com/2024/1/25/24050334/x-twitter-taylor-swift-ai-fake-images-trending. 
430 
Weidinger, L. et al., (2021) Ethical and social risks of harm from Language Models. arXiv. 
431 
https://arxiv.org/pdf/2112.04359. 
432 
Weidinger, L. et al. (2023) Sociotechnical Safety Evaluation of Generative AI Systems. arXiv. 
433 
https://arxiv.org/pdf/2310.11986. 
434 
Weidinger, L. et al., (2022) Taxonomy of Risks posed by Language Models. FAccT ’22. 
435 
https://dl.acm.org/doi/pdf/10.1145/3531146.3533088. 
436 
Wu, K. et al., (2024) How well do LLMs cite relevant medical references? An evaluation framework and 
437 
analyses. arXiv. https://arxiv.org/pdf/2402.02008. 
438 

 
75 
Yin, L. et al., (2024) OpenAI’s GPT Is A Recruiter’s Dream Tool. Tests Show There’s Racial Bias. Bloomberg. 
439 
https://www.bloomberg.com/graphics/2024-openai-gpt-hiring-racial-discrimination/. 
440 
Yu, Z. et al., (March 2024) Don’t Listen To Me: Understanding and Exploring Jailbreak Prompts of Large 
441 
Language Models. arXiv. https://arxiv.org/html/2403.17336v1 
442 
Zhang, Y. et al., (2023) Human favoritism, not AI aversion: People’s perceptions (and bias) toward 
443 
generative AI, human experts, and human–GAI collaboration in persuasive content generation. Judgment 
444 
and Decision Making. https://www.cambridge.org/core/journals/judgment-and-decision-
445 
making/article/human-favoritism-not-ai-aversion-peoples-perceptions-and-bias-toward-generative-ai-
446 
human-experts-and-humangai-collaboration-in-persuasive-content-
447 
generation/419C4BD9CE82673EAF1D8F6C350C4FA8. 
448 
Zhang, Y. et al., (2023) Siren’s Song in the AI Ocean: A Survey on Hallucination in Large Language Models. 
449 
arXiv. https://arxiv.org/pdf/2309.01219. 
450 
Zhao, X. et al., (2023) Provable Robust Watermarking for AI-Generated Text. Semantic Scholar. 
451 
https://www.semanticscholar.org/paper/Provable-Robust-Watermarking-for-AI-Generated-Text-Zhao-
452 
Ananth/75b68d0903af9d9f6e47ce3cf7e1a7d27ec811dc. 
453 

`;