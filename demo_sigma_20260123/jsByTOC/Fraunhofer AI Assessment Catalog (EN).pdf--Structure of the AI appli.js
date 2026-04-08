var toc_content = `Structure of the AI application (ST)
[PF-T-ST-01] Describe the structure of the AI application. To do this, outline:
A list of the most important components (AI component, other software modules) and the specification 
of their functionalities,
The architecture of the AI application and how the individual components interact with each other.
[PF-T-ST-02] Describe the AI component in more detail. In doing so, provide the following information:
On which ML model or learning algorithm is the AI application based?
Does the AI component learn in operation continuously, at regular intervals or by initiating retraining?
[PF-T-ST-03] Are there any other important points about the structure of the AI application?

37
Dimension: Fairness
4.  Dimension: Fairness (FN)
28  The description in this section and also partly in the following sections draws heavily on section “3.2 Fairness” in the white paper: 
Poretschkin, M.; Rostalski, F.; Voosholz, J. et al. (2019). Trustworthy Use of Artificial Intelligence. Sankt Augustin: Fraunhofer Institute 
for Intelligent Analysis and Information Systems IAIS. https://www.ki.nrw/wp-content/uploads/2020/03/Whitepaper_Thrustworthy_AI.pdf 
(last accessed: 06/18/2021)
29  Kühl, E. (July 2015). Gesichtserkennung: Auch selbstlernende Algorithmen müssen begleitet werden [Facial recognition: self-learning 
algorithms also need supervision]. Zeit Online. https://www.zeit.de/digital/internet/2015-07/google-fotos-algorithmus-rassismus/seite-2 
(in German, last accessed: 06/16/2021)
Description and objectives
Emanating from the general principle of equal treatment, safeguarding the principle of fairness is to be required 
from an AI application both in an ethical and in a legal respect. This refers to the ban on treating the same 
social issues unequally or differing ones equally unless a different procedure would be objectively justified. This 
means in particular that individuals may not be discriminated against due to their affiliation to a marginalized or 
disadvantaged group.28
For example, the AI application may not unjustifiably withhold generally preferential output from individuals on 
the basis of their religious beliefs, age or gender. Accordingly, an AI application that decides whether a person 
is invited for an interview during a recruitment process, for instance, should not unfairly favor men. But even 
if there is no generally preferential output (such as being invited to an interview), an AI application could still 
discriminate. This discrimination could exist if the quality or performance of its outputs in relation to certain 
groups of people was reduced. For example, voice control systems must be able to react to people with specific 
accents or sociolects and be customizable. In addition, facial recognition software must not inherently be more 
fault-prone for people with a particular skin color or other phenotypic characteristics.
AI applications learn from historical data. This data is not necessarily free from bias. If the data contain 
disadvantegous patterns for certain groups of people, the ML model may adopt these biases. In addition, 
certain groups may be underrepresented in the data which can also result in unfair decisions. Black people being 
incorrectly tagged as gorillas by Google Photos29 has become known as a frightening example. It is therefore 
vital that representative training data is used. In addition, post-processing the output of the ML model may be 
a suitable way to prevent discrimination.
From a technical perspective, a quantifiable concept of fairness must be developed to operationalize fairness. 
The first step is to identify those groups against which the AI application is potentially biased. This can include 
ethnic minorities or socially disadvantaged groups, but also companies or legal entities in general, as is the case 
with pricing in digital marketplaces, for instance. It is worth underlining the distinction between group fairness 
and individual fairness before choosing the fairness definition. For group fairness, the results of the AI application 
must be comparable for all existing groups, e.g., in the sense of an equal distribution of outputs among the 
different groups or in the sense of equal “hit rate” or prediction quality in all groups. For individual fairness, 
similar treatment of similar individuals is considered the benchmark.

`;