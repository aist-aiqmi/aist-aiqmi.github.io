var toc_content = `III. COMMITMENTS BY PROVIDERS OF GENERAL-
PURPOSE AI MODELS WITH SYSTEMIC RISK 
 
EXPLANATORY BOX  
 
The Commitments in this Chapter of the Code are relevant only for providers of general-purpose AI 
models classified as general-purpose AI models with systemic risk based on Article 51 AI Act.  
 
The current draft is written under the assumption that there will only be a small number of both general-
purpose AI models with systemic risks and providers thereof. If these numbers grow considerably, future 
versions of the Code might need to be changed significantly, to be made appropriate for a wider range of 
models and providers.  
 
The Commitments, Measures, and KPIs should be proportionate. In particular, their operationalisation 
will require tailoring to the size and capacity of a specific provider, particularly SMEs and start-ups with 
fewer financial resources than those at the frontier of AI development, and to different distribution 
strategies (e.g. open-sourcing), where appropriate, reflecting the principle of proportionality and taking 
into account both benefits and risks. 
 
The “whereas” part immediately below is a preamble for Section III. Here, high-level principles guide 
the interpretation of the Commitments, Measures, and KPIs.  
  
Finally, this is the second draft in the process of finalising the Code. In producing this second draft, we 
have attempted to find compromises between feedback from a wide range of stakeholders, including 
providers and civil society. Compared to the first draft, we have added considerably more detail on what 
following the Code would entail.  
 
We look forward to your feedback. Plenty of changes will be required between now and the final version. 
We have highlighted relevant open questions, but welcome input on other parts of the draft as well. We 
also welcome suggestions on how the Commitments can be made more proportionate, as well as more 
appropriate, for different business models and deployment strategies. 
 
Chairs and Vice-Chairs of Working Groups 2, 3, and 4. 
 
 
LEGAL TEXT  
Article 55(1) AI Act: “In addition to the obligations listed in Articles 53 and 54, providers of general-
purpose AI models with systemic risk shall:  

DRAFT DOCUMENT 
 
27 
(a) perform model evaluation in accordance with standardised protocols and tools reflecting the state 
of the art, including conducting and documenting adversarial testing of the model with a view to 
identifying and mitigating systemic risks;  
(b) assess and mitigate possible systemic risks at Union level, including their sources, that may stem 
from the development, the placing on the market, or the use of general-purpose AI models with 
systemic risk;  
(c) keep track of, document, and report, without undue delay, to the AI Office and, as appropriate, to 
national competent authorities, relevant information about serious incidents and possible 
corrective measures to address them;  
(d) ensure an adequate level of cybersecurity protection for the general-purpose AI model with 
systemic risk and the physical infrastructure of the model.” 
 
Article 51(1) AI Act: “A general-purpose AI model shall be classified as a general-purpose AI model 
with systemic risk if it meets any of the following conditions: 
(a) it has high impact capabilities evaluated on the basis of appropriate technical tools and 
methodologies, including indicators and benchmarks;   
(b) based on a decision of the Commission, ex officio or following a qualified alert from the 
scientific panel, it has capabilities or an impact equivalent to those set out in point (a) having 
regard to the criteria set out in Annex XIII.” 
 
Article 51(2) AI Act: “A general-purpose AI model shall be presumed to have high impact capabilities 
pursuant to paragraph 1, point (a), when the cumulative amount of computation used for its training 
measured in floating point operations is greater than 1025.” 
 
Article 3(65) AI Act: “‘systemic risk’ means a risk that is specific to the high-impact capabilities of 
general-purpose AI models, having a significant impact on the Union market due to their reach, or due 
to actual or reasonably foreseeable negative effects on public health, safety, public security, fundamental 
rights, or the society as a whole, that can be propagated at scale across the value chain;” 
 
Article 3(64) AI Act: “‘high-impact capabilities’ means capabilities that match or exceed the capabilities 
recorded in the most advanced general-purpose AI models;” 
 
Whereas: 
 
a) The Signatories recognise that providers of general-purpose AI models with systemic risk should 
continuously assess and mitigate systemic risks, taking appropriate measures along the entire model 
lifecycle, cooperating with relevant actors along the AI value chain, and ensuring their risk 
management builds on the state-of-the-art measures and is future proof by regularly updating their 
practices in light of improving and emerging capabilities (see Recital 114 AI Act).  
b) The Signatories recognise that detailed risk assessment, mitigations, and documentation are 
particularly important where the general-purpose AI model with systemic risk is more likely to (i) 
present substantial systemic risk, (ii) has uncertain capabilities and impacts, or (iii) where the 
provider lacks relevant expertise. Conversely, there may be less need for more comprehensive 

DRAFT DOCUMENT 
 
28 
measures when there is good reason to believe that a new general-purpose AI model with systemic 
risk will exhibit the same capabilities and propensities as exhibited by general-purpose AI models 
with systemic risk that have already been deployed safely, without significant systemic risks 
materialising and where appropriate mitigations have been sufficiently implemented. To account 
for differences in available resources between providers of different size and capacity, and 
recognising the principle of proportionality, simplified ways of compliance for SMEs, including 
startups, will be provided where appropriate. 
c) The Signatories recognise that there are a wide range of organisations that have significant expertise 
and are well placed to assist with the assessment and mitigation of systemic risks. While 
Commitments 3—13 do not individually specify the role of external assessment and mitigation of 
risks, the Signatories acknowledge that this does not imply they are to be excluded, and that their 
involvement is specified in detail in Commitment 16. 
d) The Signatories recognise that many risk assessment methods come with significant workload and 
costs. They encourage each other to “share the load”, for example by sharing evaluations, best 
practices or infrastructure, or – where appropriate – by working with qualified third-party providers, 
potentially facilitated by industry organisations. 
e) The Signatories interpret all Commitments, Measures, and KPIs, as intended to ensure the most 
effective assessment and mitigation of systemic risks.  
f) The Signatories recognise that the taxonomy of systemic risks includes considerations for the 
identification of systemic risks, selected systemic risks, additional risks for consideration, and 
sources of systemic risks, including model capabilities, model propensities, and model affordances 
and deployment context. 
g) The Signatories recognise that the taxonomy has been developed and, when in doubt, should be 
interpreted in good faith in light of the severity and probability of each risk as defined in Article 
3(2) AI Act and of the definition of systemic risk as defined in Article 3(65) AI Act. 
h) The Signatories recognise that the taxonomy of systemic risks is non-exhaustive and will be subject 
to change over time, reflecting scientific advances and societal changes. 
i) The Signatories recognise that Section III of the Code generally refers to general-purpose AI 
models and not AI systems but that some risks are often best identified, assessed, evaluated, and 
mitigated by taking into account how the general-purpose AI model could be integrated and 
deployed in AI systems. In cases where general-purpose AI model providers also develop and 
operate AI systems based on general-purpose AI models with systemic risk, they commit to 
undertaking risk assessment and mitigation (as described in the Safety and Security Framework) 
by taking into account these systems. 
j) The Signatories recognise the important role of the Precautionary Principle (see Article 191 TFEU), 
especially for risks where the lack or quality of scientific data does not yet permit a complete 
assessment, and will take the extrapolation of current adoption rates and research and development 
trajectories of general-purpose AI models with systemic risk into account for the identification of 
systemic risks. 

DRAFT DOCUMENT 
 
29 
Therefore, the Signatories of this Code commit to the following: 

`;