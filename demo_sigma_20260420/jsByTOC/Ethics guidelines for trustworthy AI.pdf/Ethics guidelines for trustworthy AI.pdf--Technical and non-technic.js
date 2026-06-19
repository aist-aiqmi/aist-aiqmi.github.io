var toc_content = `Technical and non-technical methods to realise Trustworthy AI 
To implement the above requirements, both technical and non-technical methods can be employed. These 
encompass all stages of an AI system’s life cycle. An evaluation of the methods employed to implement the 
requirements, as well as reporting and justifying51 changes to the implementation processes, should occur on an 
ongoing basis. AI systems are continuously evolving and acting in a dynamic environment. The realisation of 
Trustworthy AI is therefore a continuous process, as depicted in Figure 3 here below. 
 
 
Figure 3: Realising Trustworthy AI throughout the system’s entire life cycle  
                                                           
49  
Different governance models can help achieving this. E.g. the presence of an internal and/or external ethical (and sector specific) 
expert or board might be useful to highlight areas of potential conflict and suggest ways in which that conflict might best be 
resolved. Meaningful consultation and discussion with stakeholders, including those at risk of being adversely affected by an AI 
system is useful too. European universities should take a leading role in training the ethics experts needed. 
50  
See also the European Union Agency for Fundamental Rights' Opinion on ‘Improving access to remedy in the area of business and 
human rights at the EU level’, 2017, https://fra.europa.eu/en/opinion/2017/business-human-rights.  
51  
This entails e.g. justification of the choices in the system’s design, development and deployment to implement the requirements. 

21 
 
 
The following methods can be either complementary or alternative to each other, since different requirements – 
and different sensitivities – may raise the need for different methods of implementation. This overview is neither 
meant to be comprehensive or exhaustive, nor mandatory. Rather, its aim is to offer a list of suggested methods 
that may help to implement Trustworthy AI. 
  
2.1. Technical methods  
This section describes technical methods to ensure Trustworthy AI that can be incorporated in the design, 
development and use phases of an AI system. The methods listed below vary in level of maturity.52 
▪ 
Architectures for Trustworthy AI 
Requirements for Trustworthy AI should be “translated” into procedures and/or constraints on procedures, which 
should be anchored in the AI system’s architecture. This could be accomplished through a set of “white list” rules 
(behaviours or states) that the system should always follow, “black list” restrictions on behaviours or states that the 
system should never transgress, and mixtures of those or more complex provable guarantees regarding the system’s 
behaviour. Monitoring of the system’s compliance with these restrictions during operations may be achieved by a 
separate process. 
AI systems with learning capabilities that can dynamically adapt their behaviour can be understood as non-
deterministic systems possibly exhibiting unexpected behaviour. These are often considered through the theoretical 
lens of a “sense-plan-act” cycle. Adapting this architecture to ensure Trustworthy AI requires the requirements’ 
integration at all three steps of the cycle: (i) at the “sense”-step, the system should be developed such that it 
recognises all environmental elements necessary to ensure adherence to the requirements; (ii) at the “plan”-step, 
the system should only consider plans that adhere to the requirements; (iii) at the “act”-step, the system’s actions 
should be restricted to behaviours that realise the requirements.  
The architecture as sketched above is generic and only provides an imperfect description for most AI systems. 
Nevertheless, it gives anchor points for constraints and policies that should be reflected in specific modules to result 
in an overall system that is trustworthy and perceived as such. 
▪ 
Ethics and rule of law by design (X-by-design) 
Methods to ensure values-by-design provide precise and explicit links between the abstract principles which the 
system is required to respect and the specific implementation decisions. The idea that compliance with norms can 
be implemented into the design of the AI system is key to this method. Companies are responsible for identifying 
the impact of their AI systems from the very start, as well as the norms their AI system ought to comply with to 
avert negative impacts. Different “by-design” concepts are already widely used, e.g. privacy-by-design and security-
by-design. As indicated above, to earn trust AI needs to be secure in its processes, data and outcomes, and should 
be designed to be robust to adversarial data and attacks. It should implement a mechanism for fail-safe shutdown 
and enable resumed operation after a forced shut-down (such as an attack).  
▪ 
Explanation methods  
For a system to be trustworthy, we must be able to understand why it behaved a certain way and why it provided a 
given interpretation. A whole field of research, Explainable AI (XAI) tries to address this issue to better understand 
the system’s underlying mechanisms and find solutions. Today, this is still an open challenge for AI systems based on 
neural networks. Training processes with neural nets can result in network parameters set to numerical values that 
are difficult to correlate with results. Moreover, sometimes small changes in data values might result in dramatic 
changes in interpretation, leading the system to e.g. confuse a school bus with an ostrich. This vulnerability can also 
be exploited during attacks on the system. Methods involving XAI research are vital not only to explain the system’s 
                                                           
52  
While some of these methods are already available today, others still require more research. Those areas where further research 
is needed will also inform the AI HLEG's second deliverable, i.e. the Policy and Investment Recommendations.  
 

22 
 
behaviour to users, but also to deploy reliable technology. 
▪ 
Testing and validating 
Due to the non-deterministic and context-specific nature of AI systems, traditional testing is not enough. Failures of 
the concepts and representations used by the system may only manifest when a programme is applied to 
sufficiently realistic data. Consequently, to verify and validate processing of data, the underlying model must be 
carefully monitored during both training and deployment for its stability, robustness and operation within well-
understood and predictable bounds. It must be ensured that the outcome of the planning process is consistent with 
the input, and that the decisions are made in a way allowing validation of the underlying process.  
Testing and validation of the system should occur as early as possible, ensuring that the system behaves as intended 
throughout its entire life cycle and especially after deployment. It should include all components of an AI system, 
including data, pre-trained models, environments and the behaviour of the system as a whole. The testing processes 
should be designed and performed by an as diverse group of people as possible. Multiple metrics should be 
developed to cover the categories that are being tested for different perspectives. Adversarial testing by trusted and 
diverse “red teams” deliberately attempting to “break” the system to find vulnerabilities, and “bug bounties” that 
incentivise outsiders to detect and responsibly report system errors and weaknesses, can be considered. Finally, it 
must be ensured that the outputs or actions are consistent with the results of the preceding processes, comparing 
them to the previously defined policies to ensure that they are not violated. 
▪ 
Quality of Service Indicators 
Appropriate quality of service indicators can be defined for AI systems to ensure that there is a baseline 
understanding as to whether they have been tested and developed with security and safety considerations in mind. 
These indicators could include measures to evaluate the testing and training of algorithms as well as traditional 
software metrics of functionality, performance, usability, reliability, security and maintainability. 
 
2.2. Non-technical methods  
This section describes a variety of non-technical methods that can serve a valuable role in securing and maintaining 
Trustworthy AI. These too should be evaluated on an ongoing basis.  
▪ 
Regulation  
As mentioned above, regulation to support AI’s trustworthiness already exists today – think of product safety 
legislation and liability frameworks. To the extent we consider that regulation may need to be revised, adapted or 
introduced, both as a safeguard and as an enabler, this will be raised in our second deliverable, consisting of AI 
Policy and Investment Recommendations.  
▪ 
Codes of conduct  
Organisations and stakeholders can sign up to the Guidelines and adapt their charter of corporate responsibility, Key 
Performance Indicators (“KPIs”), their codes of conduct or internal policy documents to add the striving towards 
Trustworthy AI. An organisation working on or with AI systems can, more generally, document its intentions, as well 
as underwrite them with standards of certain desirable values such as fundamental rights, transparency and the 
avoidance of harm. 
▪ 
Standardisation 
Standards, for example for design, manufacturing and business practices, can function as a quality management 
system for AI users, consumers, organisations, research institutions and governments by offering the ability to 
recognise and encourage ethical conduct through their purchasing decisions. Beyond conventional standards, co-
regulatory approaches exist: accreditation systems, professional codes of ethics or standards for fundamental rights 
compliant design. Current examples are e.g. ISO Standards or the IEEE P7000 standards series, but in the future a 
possible ‘Trustworthy AI' label might be suitable, confirming by reference to specific technical standards that the 
system, for instance, adheres to safety, technical robustness and transparency. 

23 
 
 
▪ 
Certification  
As it cannot be expected that everyone is able to fully understand the workings and effects of AI systems, 
consideration can be given to organisations that can attest to the broader public that an AI system is transparent, 
accountable and fair.53 These certifications would apply standards developed for different application domains and 
AI techniques, appropriately aligned with the industrial and societal standards of different contexts. Certification 
can however never replace responsibility. It should hence be complemented by accountability frameworks, 
including disclaimers as well as review and redress mechanisms.54 
▪ 
Accountability via governance frameworks 
Organisations should set up governance frameworks, both internal and external, ensuring accountability for the 
ethical dimensions of decisions associated with the development, deployment and use of AI systems. This can, for 
instance, include the appointment of a person in charge of ethics issues relating to AI systems, or an 
internal/external ethics panel or board. Amongst the possible roles of such a person, panel or board, is to provide 
oversight and advice. As set out above, certification specifications and bodies can also play a role to this end. 
Communication channels should be ensured with industry and/or public oversight groups, sharing best practices, 
discussing dilemmas or reporting emerging issues of ethical concerns. Such mechanisms can complement but 
cannot replace legal oversight (e.g. in the form of the appointment of a data protection officer or equivalent 
measures, legally required under data protection law).  
▪ 
Education and awareness to foster an ethical mind-set 
Trustworthy AI encourages the informed participation of all stakeholders. Communication, education and training 
play an important role, both to ensure that knowledge of the potential impact of AI systems is widespread, and to 
make people aware that they can participate in shaping the societal development. This includes all stakeholders, 
e.g. those involved in making the products (the designers and developers), the users (companies or individuals) and 
other impacted groups (those who may not purchase or use an AI system but for whom decisions are made by an AI 
system, and society at large). Basic AI literacy should be fostered across society. A prerequisite for educating the 
public is to ensure the proper skills and training of ethicists in this space.  
▪ 
Stakeholder participation and social dialogue 
The benefits of AI systems are many, and Europe needs to ensure that they are available to all. This requires an 
open discussion and the involvement of social partners and stakeholders, including the general public. Many 
organisations already rely on stakeholder panels to discuss the use of AI systems and data analytics. These panels 
include various members, such as legal experts, technical experts, ethicists, consumer representatives and workers. 
Actively seeking participation and dialogue on the use and impact of AI systems supports the evaluation of results 
and approaches, and can particularly be helpful in complex cases.  
▪ 
Diversity and inclusive design teams 
Diversity and inclusion play an essential role when developing AI systems that will be employed in the real world. It 
is critical that, as AI systems perform more tasks on their own, the teams that design, develop, test and maintain, 
deploy and procure these systems reflect the diversity of users and of society in general. This contributes to 
objectivity and consideration of different perspectives, needs and objectives. Ideally, teams are not only diverse in 
terms of gender, culture, age, but also in terms of professional backgrounds and skill sets. 
 
 
 
                                                           
53  
As 
advocated 
by 
e.g. 
the 
IEEE 
Ethically 
Aligned 
Design 
Initiative: 
https://standards.ieee.org/industry-
connections/ec/autonomous-systems.html. 
54  
For more on the limitations of certification, see: https://ainowinstitute.org/AI_Now_2018_Report.pdf. 

24 
 
Key guidance derived from Chapter II: 
 Ensure that the AI system’s entire life cycle meets the seven key requirements for Trustworthy AI: (1) 
human agency and oversight, (2) technical robustness and safety, (3) privacy and data governance, (4) 
transparency, (5) diversity, non-discrimination and fairness, (6) environmental and societal well-being and 
(7) accountability.  
 Consider technical and non-technical methods to ensure the implementation of those requirements.  
 Foster research and innovation to help assessing AI systems and to further the achievement of the 
requirements; disseminate results and open questions to the wider public, and systematically train a new 
generation of experts in AI ethics. 
 Communicate, in a clear and proactive manner, information to stakeholders about the AI system’s 
capabilities and limitations, enabling realistic expectation setting, and about the manner in which the 
requirements are implemented. Be transparent about the fact that they are dealing with an AI system. 
 Facilitate the traceability and auditability of AI systems, particularly in critical contexts and situations.  
 Involve stakeholders throughout the AI system’s life cycle. Foster training and education so that all 
stakeholders are aware of and trained in Trustworthy AI. 
 Be mindful that there might be fundamental tensions between different principles and requirements. 
Continuously identify, evaluate, document and communicate these trade-offs and their solutions. 
 
III. Chapter III: Assessing Trustworthy AI  
Based on the key requirements of Chapter II, this Chapter sets out a non-exhaustive Trustworthy AI assessment 
list (pilot version) to operationalise Trustworthy AI. It particularly applies to AI systems that directly interact 
with users, and is primarily addressed to developers and deployers of AI systems (whether self-developed or 
acquired from third parties). This assessment list does not address the operationalisation of the first component 
of Trustworthy AI (lawful AI). Compliance with this assessment list is not evidence of legal compliance, nor is it 
intended as guidance to ensure compliance with applicable law. Given the application-specificity of AI systems, 
the assessment list will need to be tailored to the specific use case and context in which the system operates. In 
addition, this chapter offers a general recommendation on how to implement the assessment list for 
Trustworthy AI though a governance structure embracing both operational and management level.    
The assessment list and governance structure will be developed in close collaboration with stakeholders across 
the public and private sector. The process will be driven as a piloting process, allowing for extensive feedback 
from two parallel processes: 
a) 
a qualitative process, ensuring representability, where a small selection of companies, organisations 
and institutions (from different sectors and of different sizes) will sign up to pilot the assessment list 
and the governance structure in practice and to provide in-depth feedback; 
b) 
a quantitative process where all interested stakeholders can sign up to pilot the assessment list and 
provide feedback through an open consultation. 
After the piloting phase, we will integrate the results from the feedback process into the assessment list and 
prepare a revised version in early 2020. The aim is to achieve a framework that can be horizontally used across 
all applications and hence offer a foundation for ensuring Trustworthy AI in all domains. Once such foundation 
has been established, a sectorial or application-specific framework could be developed.    
 
Governance 
Stakeholders may wish to consider how the Trustworthy AI assessment list can be implemented in their 
organisation. This can be done by incorporating the assessment process into existing governance mechanisms, 
or by implementing new processes. This choice will depend on the internal structure of the organisation as well 
as its size and available resources.  

25 
 
Research demonstrates that management attention at the highest level is essential to achieve change.55 It also 
demonstrates that involving all stakeholders in a company, organisation or institution fosters the acceptance 
and the relevance of the introduction of any new process (whether or not technological).56 Therefore, we 
recommend implementing a process that embraces both the involvement of operational level as well as top 
management level. 
Level 
Relevant roles (depending on the organisation) 
Management and 
Board 
Top management discusses and evaluates the AI systems’ development, deployment or 
procurement and serves as an escalation board for evaluating all AI innovations and 
uses, when critical concerns are detected. It involves those impacted by the possible 
introduction of AI systems (e.g. workers) and their representatives throughout the 
process via information, consultation and participation procedures. 
Compliance/Legal 
department/Corporate 
responsibility 
department 
The responsibility department monitors the use of the assessment list and its necessary 
evolution to meet the technological or regulatory changes. It updates the standards or 
internal policies on AI systems and ensures that the use of such systems complies with 
the current legal and regulatory framework and to the values of the organisation. 
Product and Service 
Development or 
equivalent 
The Product and Service Development department uses the assessment list to evaluate 
AI-based products and services and logs all the results. These results are discussed at 
management level, which ultimately approves the new or revised AI-based applications.   
Quality Assurance 
The Quality Assurance department (or equivalent) ensures and checks the results of the 
assessment list and takes action to escalate an issue higher up if the result is not 
satisfactory or if unforeseen results are detected. 
HR 
The HR department ensures the right mix of competences and diversity of profiles for 
developers of AI systems. It ensures that the appropriate level of training is delivered on 
Trustworthy AI inside the organisation. 
Procurement 
The procurement department ensures that the process to procure AI-based products or 
services includes a check of Trustworthy AI. 
Day-to-day Operations 
Developers and project managers include the assessment list in their daily work and 
document the results and outcomes of the assessment. 
 
 
Using the Trustworthy AI assessment list 
When using the assessment list in practice, we recommend paying attention not only to the areas of concern 
but also to the questions that cannot be (easily) answered. One potential problem might be the lack of diversity 
of skills and competences in the team developing and testing the AI system, and therefore it might be necessary 
to involve other stakeholders inside or outside the organisation. It is strongly recommended to log all results 
both in technical terms and in management terms, ensuring that the problem solving can be understood at all 
levels in the governance structure.  
This assessment list is meant to guide AI practitioners to achieve Trustworthy AI. The assessment should be 
tailored to the specific use case in a proportionate way. During the piloting phase, specific sensitive areas might 
be revealed and the need for further specifications in such cases will be evaluated in the next steps. While this 
                                                           
55  
https://www.mckinsey.com/business-functions/operations/our-insights/secrets-of-successful-change-implementation  
56  
See for instance A. Bryson, E. Barth and H. Dale-Olsen, The Effects of Organisational change on worker well-being and the 
moderating role of trade unions, ILRReview, 66(4), July 2013; Jirjahn, U. and Smith, S.C. (2006). ‘What Factors Lead Management 
to Support or Oppose Employee Participation—With and Without Works Councils? Hypotheses and Evidence from Germany’s 
Industrial Relations, 45(4), 650–680; Michie, J. and Sheehan, M. (2003). ‘Labour market deregulation, “flexibility” and innovation’, 
Cambridge Journal of Economics, 27(1), 123–143. 

26 
 
assessment list does not provide concrete answers to address the raised questions, it encourages reflection on 
how Trustworthy AI can be operationalised, and on the potential steps that should be taken in this regard. 
 
 
Relation to existing law and processes 
It is also important for AI practitioners to recognise that there are various existing laws mandating particular 
processes or prohibiting particular outcomes, which may overlap and coincide with some of the measures listed 
in the assessment list. For example, data protection law sets out a series of legal requirements that must be 
met by those engaged in the collection and processing of personal data. Yet, because Trustworthy AI also 
requires the ethical handling of data, internal procedures and policies aimed at securing compliance with data 
protection laws might also help to facilitate ethical data handling and can hence complement existing legal 
processes. Compliance with this assessment list is not, however, evidence of legal compliance, nor is it intended 
as guidance to ensure compliance with applicable laws.  
Moreover, many AI practitioners already have existing assessment tools and software development processes 
in place to ensure compliance also with non-legal standards. The below assessment should not necessarily be 
carried out as a stand-alone exercise, but can be incorporated into such existing practices.   
 
TRUSTWORTHY AI ASSESSMENT LIST (PILOT VERSION) 
 
1. Human agency and oversight 
Fundamental rights: 
 Did you carry out a fundamental rights impact assessment where there could be a negative impact on 
fundamental rights? Did you identify and document potential trade-offs made between the different 
principles and rights?  
 Does the AI system interact with decisions by human (end) users (e.g. recommended actions or 
decisions to take, presenting of options)? 
 
Could the AI system affect human autonomy by interfering with the (end) user’s decision-making 
process in an unintended way? 
 
Did you consider whether the AI system should communicate to (end) users that a decision, 
content, advice or outcome is the result of an algorithmic decision?  
 
In case of a chat bot or other conversational system, are the human end users made aware that 
they are interacting with a non-human agent?  
Human agency: 
 Is the AI system implemented in work and labour process? If so, did you consider the task allocation 
between the AI system and humans for meaningful interactions and appropriate human oversight and 
control?  
 
Does the AI system enhance or augment human capabilities? 
 
Did you take safeguards to prevent overconfidence in or overreliance on the AI system for work 
processes? 
Human oversight: 
 Did you consider the appropriate level of human control for the particular AI system and use case? 
 
Can you describe the level of human control or involvement?  
 
Who is the “human in control” and what are the moments or tools for human intervention? 
 
Did you put in place mechanisms and measures to ensure human control or oversight? 
 
Did you take any measures to enable audit and to remedy issues related to governing AI 
autonomy? 
 Is there is a self-learning or autonomous AI system or use case? If so, did you put in place more 
specific mechanisms of control and oversight? 
 
Which detection and response mechanisms did you establish to assess whether something could 
go wrong? 

27 
 
 
Did you ensure a stop button or procedure to safely abort an operation where needed? Does this 
procedure abort the process entirely, in part, or delegate control to a human? 
 
2. Technical robustness and safety 
Resilience to attack and security:  
 Did you assess potential forms of attacks to which the AI system could be vulnerable? 
 
Did you consider different types and natures of vulnerabilities, such as data pollution, physical 
infrastructure, cyber-attacks? 
 Did you put measures or systems in place to ensure the integrity and resilience of the AI system 
against potential attacks? 
 Did you verify how your system behaves in unexpected situations and environments? 
 Did you consider to what degree your system could be dual-use? If so, did you take suitable 
preventative measures against this case (including for instance not publishing the research or 
deploying the system)? 
Fallback plan and general safety: 
 Did you ensure that your system has a sufficient fallback plan if it encounters adversarial attacks or 
other unexpected situations (for example technical switching procedures or asking for a human 
operator before proceeding)? 
 Did you consider the level of risk raised by the AI system in this specific use case? 
 
Did you put any process in place to measure and assess risks and safety? 
 
Did you provide the necessary information in case of a risk for human physical integrity?  
 
Did you consider an insurance policy to deal with potential damage from the AI system? 
 
Did you identify potential safety risks of (other) foreseeable uses of the technology, including 
accidental or malicious misuse? Is there a plan to mitigate or manage these risks? 
 Did you assess whether there is a probable chance that the AI system may cause damage or harm to 
users or third parties? Did you assess the likelihood, potential damage, impacted audience and 
severity?  
 
Did you consider the liability and consumer protection rules, and take them into account?  
 
Did you consider the potential impact or safety risk to the environment or to animals? 
 
Did your risk analysis include whether security or network problems such as cybersecurity 
hazards could pose safety risks or damage due to unintentional behaviour of the AI system? 
 Did you estimate the likely impact of a failure of your AI system when it provides wrong results, 
becomes unavailable, or provides societally unacceptable results (for example discrimination)? 
 
Did you define thresholds and did you put governance procedures in place to trigger 
alternative/fallback plans? 
 
Did you define and test fallback plans? 
Accuracy 
 Did you assess what level and definition of accuracy would be required in the context of the AI system 
and use case? 
 
Did you assess how accuracy is measured and assured?  
 
Did you put in place measures to ensure that the data used is comprehensive and up to date? 
 
Did you put in place measures in place to assess whether there is a need for additional data, for 
example to improve accuracy or to eliminate bias? 
 Did you verify what harm would be caused if the AI system makes inaccurate predictions?  
 Did you put in place ways to measure whether your system is making an unacceptable amount of 
inaccurate predictions? 
 Did you put in place a series of steps to increase the system's accuracy? 
 
Reliability and reproducibility: 

28 
 
 Did you put in place a strategy to monitor and test if the AI system is meeting the goals, purposes and 
intended applications? 
 
Did you test whether specific contexts or particular conditions need to be taken into account to 
ensure reproducibility? 
 
Did you put in place verification methods to measure and ensure different aspects of the 
system's reliability and reproducibility?  
 
Did you put in place processes to describe when an AI system fails in certain types of settings? 
 
Did you clearly document and operationalise these processes for the testing and verification of 
the reliability of AI systems? 
 
Did you establish mechanisms of communication to assure (end-)users of the system’s reliability? 
 
3. Privacy and data governance 
Respect for privacy and data Protection: 
 Depending on the use case, did you establish a mechanism allowing others to flag issues related to 
privacy or data protection in the AI system’s processes of data collection (for training and operation) 
and data processing? 
 Did you assess the type and scope of data in your data sets (for example whether they contain 
personal data)?  
 Did you consider ways to develop the AI system or train the model without or with minimal use of 
potentially sensitive or personal data? 
 Did you build in mechanisms for notice and control over personal data depending on the use case 
(such as valid consent and possibility to revoke, when applicable)? 
 Did you take measures to enhance privacy, such as via encryption, anonymisation and aggregation? 
 Where a Data Privacy Officer (DPO) exists, did you involve this person at an early stage in the process?  
Quality and integrity of data: 
 Did you align your system with relevant standards (for example ISO, IEEE) or widely adopted protocols 
for daily data management and governance?  
 Did you establish oversight mechanisms for data collection, storage, processing and use? 
 Did you assess the extent to which you are in control of the quality of the external data sources used?  
 Did you put in place processes to ensure the quality and integrity of your data? Did you consider other 
processes? How are you verifying that your data sets have not been compromised or hacked? 
Access to data: 
 What protocols, processes and procedures did you follow to manage and ensure proper data 
governance? 
 
Did you assess who can access users’ data, and under what circumstances? 
 
Did you ensure that these persons are qualified and required to access the data, and that they 
have the necessary competences to understand the details of data protection policy? 
 
Did you ensure an oversight mechanism to log when, where, how, by whom and for what 
purpose data was accessed? 
 
 
4. Transparency 
Traceability: 
 Did you establish measures that can ensure traceability? This could entail documenting the following 
methods: 
 Methods used for designing and developing the algorithmic system:  
o 
Rule-based AI systems: the method of programming or how the model was built;  
o 
Learning-based AI systems; the method of training the algorithm, including which input 
data was gathered and selected, and how this occurred. 

29 
 
 Methods used to test and validate the algorithmic system: 
o 
Rule-based AI systems; the scenarios or cases used in order to test and validate;  
o 
Learning-based model: information about the data used to test and validate. 
 Outcomes of the algorithmic system: 
o 
The outcomes of or decisions taken by the algorithm, as well as potential other decisions 
that would result from different cases (for example, for other subgroups of users). 
Explainability: 
 Did you assess: 
 
to what extent the decisions and hence the outcome made by the AI system can be understood? 
 
to what degree the system’s decision influences the organisation’s decision-making processes? 
 
why this particular system was deployed in this specific area? 
 
what the system’s business model is (for example, how does it create value for the organisation)? 
 Did you ensure an explanation as to why the system took a certain choice resulting in a certain 
outcome that all users can understand? 
 Did you design the AI system with interpretability in mind from the start? 
 
Did you research and try to use the simplest and most interpretable model possible for the 
application in question? 
 
Did you assess whether you can analyse your training and testing data? Can you change and 
update this over time? 
 
Did you assess whether you can examine interpretability after the model’s training and 
development, or whether you have access to the internal workflow of the model? 
Communication: 
 Did you communicate to (end-)users – through a disclaimer or any other means – that they are 
interacting with an AI system and not with another human? Did you label your AI system as such? 
 Did you establish mechanisms to inform (end-)users on the reasons and criteria behind the AI 
system’s outcomes? 
 
Did you communicate this clearly and intelligibly to the intended audience?  
 
Did you establish processes that consider users’ feedback and use this to adapt the system? 
 
Did you communicate around potential or perceived risks, such as bias? 
 
Depending on the use case, did you consider communication and transparency towards other 
audiences, third parties or the general public? 
 Did you clarify the purpose of the AI system and who or what may benefit from the product/service? 
 
Did you specify usage scenarios for the product and clearly communicate these to ensure that it 
is understandable and appropriate for the intended audience? 
 
Depending on the use case, did you think about human psychology and potential limitations, 
such as risk of confusion, confirmation bias or cognitive fatigue? 
 Did you clearly communicate characteristics, limitations and potential shortcomings of the AI system? 
 
In case of the system's development: to whoever is deploying it into a product or service? 
 
In case of the system's deployment: to the (end-)user or consumer? 
 
5. Diversity, non-discrimination and fairness 
Unfair bias avoidance: 
 Did you establish a strategy or a set of procedures to avoid creating or reinforcing unfair bias in the AI 
system, both regarding the use of input data as well as for the algorithm design? 
 
Did you assess and acknowledge the possible limitations stemming from the composition of the 
used data sets?  
 
Did you consider diversity and representativeness of users in the data? Did you test for specific 
populations or problematic use cases? 
 
Did you research and use available technical tools to improve your understanding of the data, 
model and performance? 

30 
 
 
Did you put in place processes to test and monitor for potential biases during the development, 
deployment and use phase of the system?  
 Depending on the use case, did you ensure a mechanism that allows others to flag issues related to 
bias, discrimination or poor performance of the AI system? 
 
Did you establish clear steps and ways of communicating on how and to whom such issues can be 
raised?  
 
Did you consider others, potentially indirectly affected by the AI system, in addition to the (end)-
users? 
 Did you assess whether there is any possible decision variability that can occur under the same 
conditions?  
 
If so, did you consider what the possible causes of this could be? 
 
In case of variability, did you establish a measurement or assessment mechanism of the potential 
impact of such variability on fundamental rights? 
 Did you ensure an adequate working definition of “fairness” that you apply in designing AI systems?  
 
Is your definition commonly used? Did you consider other definitions before choosing this one? 
 
Did you ensure a quantitative analysis or metrics to measure and test the applied definition of 
fairness?  
 
Did you establish mechanisms to ensure fairness in your AI systems? Did you consider other 
potential mechanisms?   
Accessibility and universal design: 
 Did you ensure that the AI system accommodates a wide range of individual preferences and 
abilities? 
 
Did you assess whether the AI system usable by those with special needs or disabilities or those 
at risk of exclusion? How was this designed into the system and how is it verified? 
 
Did you ensure that information about the AI system is accessible also to users of assistive 
technologies? 
 
Did you involve or consult this community during the development phase of the AI system? 
 Did you take the impact of your AI system on the potential user audience into account? 
 
Did you assess whether the team involved in building the AI system is representative of your 
target user audience? Is it representative of the wider population, considering also of other 
groups who might tangentially be impacted?  
 
Did you assess whether there could be persons or groups who might be disproportionately 
affected by negative implications? 
 
Did you get feedback from other teams or groups that represent different backgrounds and 
experiences? 
Stakeholder participation: 
 Did you consider a mechanism to include the participation of different stakeholders in the AI system’s 
development and use? 
 Did you pave the way for the introduction of the AI system in your organisation by informing and 
involving impacted workers and their representatives in advance? 
 
6. Societal and environmental well-being 
Sustainable and environmentally friendly AI: 
 Did you establish mechanisms to measure the environmental impact of the AI system’s development, 
deployment and use (for example the type of energy used by the data centres)? 
 Did you ensure measures to reduce the environmental impact of your AI system’s life cycle? 
Social impact: 
 In case the AI system interacts directly with humans: 
 
Did you assess whether the AI system encourages humans to develop attachment and empathy 
towards the system? 
 
Did you ensure that the AI system clearly signals that its social interaction is simulated and that it 

31 
 
has no capacities of “understanding” and “feeling”? 
 Did you ensure that the social impacts of the AI system are well understood? For example, did you 
assess whether there is a risk of job loss or de-skilling of the workforce? What steps have been taken 
to counteract such risks? 
Society and democracy: 
 Did you assess the broader societal impact of the AI system’s use beyond the individual (end-)user, 
such as potentially indirectly affected stakeholders?  
 
7. Accountability 
Auditability: 
 Did you establish mechanisms that facilitate the system’s auditability, such as ensuring traceability 
and logging of the AI system’s processes and outcomes? 
 Did you ensure, in applications affecting fundamental rights (including safety-critical applications) that 
the AI system can be audited independently? 
Minimising and reporting negative Impact: 
 Did you carry out a risk or impact assessment of the AI system, which takes into account different 
stakeholders that are (in)directly affected? 
 Did you provide training and education to help developing accountability practices? 
 
Which workers or branches of the team are involved? Does it go beyond the development phase? 
 
Do these trainings also teach the potential legal framework applicable to the AI system? 
 
Did you consider establishing an ‘ethical AI review board’ or a similar mechanism to discuss 
overall accountability and ethics practices, including potentially unclear grey areas?  
 Did you foresee any kind of external guidance or put in place auditing processes to oversee ethics and 
accountability, in addition to internal initiatives? 
 Did you establish processes for third parties (e.g. suppliers, consumers, distributors/vendors) or 
workers to report potential vulnerabilities, risks or biases in the AI system? 
Documenting trade-offs: 
 Did you establish a mechanism to identify relevant interests and values implicated by the AI system 
and potential trade-offs between them?  
 How do you decide on such trade-offs? Did you ensure that the trade-off decision was documented?  
Ability to redress: 
 Did you establish an adequate set of mechanisms that allows for redress in case of the occurrence of 
any harm or adverse impact?  
 Did you put mechanisms in place both to provide information to (end-)users/third parties about 
opportunities for redress? 
 
 
We invite all stakeholders to pilot this Assessment List in practice and to provide feedback on its 
implementability, completeness, relevance for the specific AI application or domain, as well as overlap or 
complementarity with existing compliance or assessment processes. Based on this feedback, a revised 
version of the Trustworthy AI assessment list will be proposed to the Commission in early 2020 
 
Key guidance derived from Chapter III: 
 Adopt a Trustworthy AI assessment list when developing, deploying or using AI systems, and adapt it to 
the specific use case in which the system is being applied.  
 Keep in mind that such assessment list will never be exhaustive. Ensuring Trustworthy AI is not about 
ticking boxes, but about continuously identifying requirements, evaluating solutions and ensuring 
improved outcomes throughout the AI system’s lifecycle, and involving stakeholders therein. 
 

32 
 
C. 
EXAMPLES OF OPPORTUNITIES AND CRITICAL CONCERNS RAISED BY AI 
In the following section, we provide examples of AI development and use that should be encouraged, as well as 
examples of where AI development, deployment or use can run counter to our values and may raise specific 
concerns. A balance must be struck between what should and what can be done with AI, and due care must be 
given to what should not be done with AI. 
 
1. 
Examples of Trustworthy AI’s opportunities 
Trustworthy AI can represent a great opportunity to support the mitigation of pressing challenges facing society 
such as an ageing population, growing social inequality and environmental pollution. This potential is also reflected 
globally, such as with the UN Sustainable Development Goals.57  The following section looks at how to encourage a 
European AI strategy that tackles some of these challenges. 
 
Climate action and sustainable infrastructure 
While tackling climate change should be a top priority for policy-makers across the world, digital transformation and 
Trustworthy AI have a great potential to reduce humans’ impact on the environment and enable the efficient and 
effective use of energy and natural resources.58 Trustworthy AI can, for instance, be coupled to big data in order to 
detect energy needs more accurately, resulting in more efficient energy infrastructure and consumption.59 
Looking at sectors like public transportation, AI systems for intelligent transport systems60 can be used to minimise 
queuing, optimise routing, allow vision impaired people to be more independent,61 optimise energy efficient 
engines and thereby enhance decarbonisation efforts and reduce the environmental footprint, for a greener society. 
Currently, worldwide, one human dies every 23 seconds in a car accident.62 AI systems could help to reduce the 
number fatalities significantly, for instance through better reaction times and better adherence to rules.63 
 
Health and well-being 
Trustworthy AI technologies can be used – and are already being used – to render treatment smarter and more 
targeted, and to help preventing life-threatening diseases.64 Doctors and medical professionals can potentially 
perform a more accurate and detailed analysis of a patient’s complex health data, even before people get sick, and 
provide tailored preventive treatment.65 In the context of Europe’s ageing population, AI technologies and robotics 
can be valuable tools to assist caregivers, support elderly care,66 and monitor patients’ conditions on a real time 
                                                           
57  
https://sustainabledevelopment.un.org/?menu=1300  
58  
A number of EU projects aim for the development of Smart  Grids  and  Energy  Storage,  which  have  the  potential  to  
contribute  to  a successful digitally supported energy transition, including through AI-based and other digital solutions. To 
complement the work of those individual projects, the Commission has launched the BRIDGE initiative, allowing ongoing Horizon 
2020 Smart Grid and Energy Storage projects to create a common view on cross cutting issues: https://www.h2020-bridge.eu/. 
59  
See for instance the Encompass project:  http://www.encompass-project.eu/. 
60  
New AI-based solutions help prepare cities for the future of mobility. See for instance the EU funded project called Fabulos:  
https://fabulos.eu/. 
61  
See for instance the PRO4VIP project, which is part of the European Vision 2020 strategy to combat preventable blindness, 
especially due to old age. Mobility and orientation was one of the project's priority areas. 
62  
https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries. 
63  
The European UP-Drive project for instance aims to address the outlined transport-related challenges by providing contributions 
enabling gradual automation of and collaboration among vehicles , facilitating a safer, more inclusive and more affordable 
transportation system. https://up-drive.eu/. 
64  
See for instance the REVOLVER (Repeated Evolution of Cancer) project: https://www.healtheuropa.eu/personalised-cancer-
treatment/87958/, or the Murab project which conducts more accurate biopsies, and which aims at diagnosing cancer and other 
illnesses faster: https://ec.europa.eu/digital-single-market/en/news/murab-eu-funded-project-success-story. 
65  
See for instance the Live INCITE project: www.karolinska.se/en/live-incite. This consortium of healthcare procurers challenges the 
industry to develop smart AI and other ICT solutions that enable lifestyle interventions in the perioperative process. The target 
concerns new innovative eHealth solutions that can influence patients in a personalised way to take the necessary actions both 
prior and after surgery in their lifestyle to optimise the healthcare outcome. 
66  
The EU-funded project CARESSES deals with robots for elderly care, focusing on their cultural sensitivity: they adapt their way of 
acting 
and 
speaking 
to 
match 
the 
culture 
and 
habits 
of 
the 
elderly 
person 
they 
are 
assisting: 
http://caressesrobot.org/en/project/. See also the AI application called Alfred, a virtual assistant helping older people stay active: 
 

33 
 
basis, thus saving lives.67   
Trustworthy AI can also assist on a broader scale. For example, it can examine and identify general trends in the 
healthcare and treatment sector,68 leading to earlier detection of diseases, more efficient development of 
medicines, more targeted treatments69 and ultimately more lives saved.  
 
Quality education and digital transformation 
New technological, economic and environmental changes mean that society needs to become more proactive. 
Governments, industry leaders, educational institutions and unions face a responsibility to bring the citizens into the 
new digital era ensuring they have the right skills to fill the future jobs. Trustworthy AI technologies could assist in 
more accurately forecasting which jobs and professions will be disrupted by technology, which new roles will be 
created and which skills will be needed. This could help governments, unions and industry with planning the 
(re)skilling of workers. It could also give citizens who may fear redundancy a path of development into a new role.  
In addition, AI can be a great tool to fight educational inequalities and create personalised and adaptable education 
programmes that could help everyone acquire new qualifications, skills and competences according to his or her 
own ability to learn.70 It could increase both the learning speed and the quality of education – reaching from 
primary school to university. 
 
2. 
Examples of critical concerns raised by AI 
A critical AI concern arises one of the components of Trustworthy AI is violated. Many of the concerns listed below 
will already fall within the scope of existing legal requirements, which are mandatory and must therefore be 
complied with. Yet even in circumstances where compliance with legal requirements has been demonstrated, these 
may not address the full range of ethical concerns that may arise. As our understanding of the adequacy of rules and 
ethical principles invariably evolves and may change over time, the following non-exhaustive list of concerns may be 
shortened, expanded, edited or updated in the future.  
 
Identifying and tracking individuals with AI  
AI enables the ever more efficient identification of individual persons by both public and private entities. 
Noteworthy examples of a scalable AI identification technology are face recognition and other involuntary methods 
of identification using biometric data (i.e. lie detection, personality assessment through micro expressions, and 
automatic voice detection). Identification of individuals is sometimes the desirable outcome, aligned with ethical 
principles (for example in detecting fraud, money laundering, or terrorist financing). However, automatic 
identification raises strong concerns of both a legal and ethical nature, as it may have an unexpected impact on 
many psychological and sociocultural levels. A proportionate use of control techniques in AI is needed to uphold the 
autonomy of European citizens. Clearly defining if, when and how AI can be used for automated identification of 
individuals and differentiating between the identification of an individual vs the tracing and tracking of an individual, 
                                                                                                                                                                                             
https://ec.europa.eu/digital-single-market/en/news/alfred-virtual-assistant-helping-older-people-stay-active. 
Moreover, 
the 
EMPATTICS project (EMpowering PAtients for a BeTTer Information and improvement of the Communication Systems) will 
research and define how health care professionals and patients use ICT technologies including AI systems to plan interventions 
with patients and to monitor the progression of their physical and mental state: www.empattics.eu. 
67  
See for instance the MyHealth Avatar (www.myhealthavatar.eu), which offers a digital representation of a patient's health status. 
The research project launched an app and an online platform that collects, and gives access to, your digital long-term health-
status information. This takes on the form of a life-long health companion ('avatar'). MyHealthAvatar also predicts your risk for 
stroke, diabetes, cardiovascular disease and hypertension.  
68  
See for instance the ENRICHME project (www.enrichme.eu), which tackles the progressive decline of cognitive capacity in the 
ageing population. An integrated platform for Ambient Assisted Living (AAL) and a mobile service robot for long-term monitoring 
and interaction will help the elderly to remain independent and active for longer.  
69  
See for instance the use of AI by Sophia Genetics, which leverages statistical inference, pattern recognition and machine learning 
to maximize the value of genomics and radiomics data: https://www.sophiagenetics.com/home.html. 
70  
See for instance the MaTHiSiS project, aimed at providing a solution for affect-based learning in a comfortable learning 
environment, comprising of high-end technological devices and algorithms: (http://mathisis-project.eu/). See also IBM’s Watson 
Classroom or Century Tech’s platform. 

34 
 
and between targeted surveillance and mass surveillance, will be crucial for the achievement of Trustworthy AI. The 
application of such technologies must be clearly warranted in existing law.71 Where the legal basis for such activity is 
“consent”, practical means72 must be developed which allow meaningful and verified consent to be given to being 
automatically identified by AI or equivalent technologies. This also applies to the usage of “anonymous” personal 
data that can be re-personalised. 
 
Covert AI systems 
Human beings should always know if they are directly interacting with another human being or a machine, and it is 
the responsibility of AI practitioners that this is reliably achieved. AI practitioners should therefore ensure that 
humans are made aware of – or able to request and validate the fact that – they interact with an AI system (for 
instance, by issuing clear and transparent disclaimers). Note that borderline cases exist and complicate the matter 
(e.g. an AI-filtered voice spoken by a human). It should be borne in mind that the confusion between humans and 
machines could have multiple consequences such as attachment, influence, or reduction of the value of being 
human.73 The development of human-like robots74 should therefore undergo careful ethical assessment.  
 
AI enabled citizen scoring in violation of fundamental rights  
Societies should strive to protect the freedom and autonomy of all citizens. Any form of citizen scoring can lead to 
the loss of this autonomy and endanger the principle of non-discrimination. Scoring should only be used if there is a 
clear justification, and where measures are proportionate and fair. Normative citizen scoring (general assessment of 
“moral personality” or “ethical integrity”) in all aspects and on a large scale by public authorities or private actors 
endangers these values, especially when used not in accordance with fundamental rights, and when used 
disproportionately and without a delineated and communicated legitimate purpose.  
Today, citizen scoring – on a large or smaller scale – is already often used in purely descriptive and domain-specific 
scorings (e.g. school systems, e-learning, and driver licences). Even in those more narrow applications, a fully 
transparent procedure should be made available to citizens, including information on the process, purpose and 
methodology of the scoring. Note that transparency cannot prevent non-discrimination or ensure fairness, and is 
not the panacea against the problem of scoring. Ideally the possibility of opting out of the scoring mechanism when 
possible without detriment should be provided – otherwise mechanisms for challenging and rectifying the scores 
must be given. This is particularly important in situations where an asymmetry of power exists between the parties. 
Such opt-out options should be ensured in the technology’s design in circumstances where this is necessary to 
ensure compliance with fundamental rights and is necessary in a democratic society.  
 
Lethal autonomous weapon systems (LAWS) 
Currently, an unknown number of countries and industries are researching and developing lethal autonomous 
weapon systems, ranging from missiles capable of selective targeting to learning machines with cognitive skills to 
decide whom, when and where to fight without human intervention. This raises fundamental ethical concerns, such 
as the fact that it could lead to an uncontrollable arms race on a historically unprecedented level, and create 
military contexts in which human control is almost entirely relinquished and the risks of malfunction are not 
addressed. The European Parliament has called for the urgent development of a common, legally binding position 
addressing ethical and legal questions of human control, oversight, accountability and implementation of 
international human rights law, international humanitarian law and military strategies.75 Recalling the European 
Union’s aim to promote peace as enshrined in Article 3 of the Treaty of the European Union, we stand with, and 
look to support, the Parliament’s resolution of 12 September 2018 and all related efforts on LAWS. 
                                                           
71  
In this regard, Article 6 of the GDPR can be recalled, which provides, among other things, that processing of data shall only be 
lawful if it has a valid legal basis. 
72  
As current mechanisms for giving informed consent in the internet show, consumers typically give consent without meaningful 
consideration. Hence, they can hardly be classified as practical. 
73  
Madary & Metzinger (2016). Real Virtuality: A Code of Ethical Conduct. Recommendations for Good Scientific Practice and the 
Consumers of VR-Technology. Frontiers in Robotics and AI, 3(3). 
74  
This also applies to AI-driven avatars. 
75  
European Parliament’s Resolution 2018/2752(RSP). 

35 
 
 
Potential longer-term concerns  
AI development is still domain-specific and requires well-trained human scientists and engineers to precisely specify 
its targets. However, extrapolating into the future with a longer time horizon, certain critical long-term concerns can 
be hypothesized.76 A risk-based approach suggests that these concerns should be kept into consideration in view of 
possible unknown unknowns and “black swans.”77 The high-impact nature of these concerns, combined with the 
current uncertainty in corresponding developments, calls for regular assessments of these topics. 
 
D. CONCLUSION 
This document constitutes the AI Ethics Guidelines produced by the High-Level Expert Group on Artificial 
Intelligence (AI HLEG). 
We recognise the positive impact that AI systems already have and will continue having, both commercially and 
societally. However, we are equally concerned to ensure that the risks and other adverse impacts with which these 
technologies are associated are properly and proportionately handled. AI is a technology that is both transformative 
and disruptive, and its evolution over the last several years has been facilitated by the availability of enormous 
amounts of digital data, major technological advances in computational power and storage capacity, as well as 
significant scientific and engineering innovation in AI methods and tools. AI systems will continue to impact society 
and citizens in ways that we cannot yet imagine. 
In this context, it is important to build AI systems that are worthy of trust, since human beings will only be able to 
confidently and fully reap its benefits when the technology, including the processes and people behind the 
technology, are trustworthy. When drafting these Guidelines, Trustworthy AI has, therefore, been our foundational 
ambition. 
Trustworthy AI has three components: (1) it should be lawful, ensuring compliance with all applicable laws and 
regulations, (2) it should be ethical, ensuring adherence to ethical principles and values and (3) it should be robust, 
both from a technical and social perspective since to ensure that, even with good intentions, AI systems do not 
cause any unintentional harm. Each component is necessary but not sufficient to achieve Trustworthy AI. Ideally, all 
three components work in harmony and overlap in their operation. Where tensions arise, we should endeavour to 
align them. 
In Chapter I, we articulated the fundamental rights and a corresponding set of ethical principles that are crucial in an 
AI-context. In Chapter II, we listed seven key requirements that AI systems should meet in order to realise 
Trustworthy AI. We proposed technical and non-technical methods that can help with their implementation. Finally, 
in Chapter III we provided a Trustworthy AI assessment list that can help operationalising the seven requirements. In 
a final section, we provided examples of beneficial opportunities and critical concerns raised by AI systems, on 
which we hope to stimulate further discussion. 
Europe has a unique vantage point based on its focus on placing the citizen at the heart of its endeavours. This focus 
is written into the very DNA of the European Union through the Treaties upon which it is built. The current 
document forms part of a vision that promotes Trustworthy AI which we believe should be the foundation upon 
which Europe can build leadership in innovative, cutting-edge AI systems. This ambitious vision will help securing 
human flourishing of European citizens, both individually and collectively. Our goal is to create a culture of 
“Trustworthy AI for Europe”, whereby the benefits of AI can be reaped by all in a manner that ensures respect for 
our foundational values: fundamental rights, democracy and the rule of law. 
 
 
                                                           
76  
While some consider that Artificial General Intelligence, Artificial Consciousness, Artificial Moral Agents, Super-intelligence or 
Transformative AI can be examples of such long-term concerns (currently non-existent), many others believe these to be 
unrealistic. 
77  
A black swan event is a very rare, yet high impact, event – so rare, that it might not have been observed. Hence, probability of 
occurrence typically can only be estimated with high uncertainty. 

36 
 
GLOSSARY  
This glossary pertains to the Guidelines and is meant to help in the understanding of the terms used in this 
document. 
Artificial Intelligence or AI systems 
Artificial intelligence (AI) systems are software (and possibly also hardware) systems designed by humans78 that, 
given a complex goal, act in the physical or digital dimension by perceiving their environment through data 
acquisition, interpreting the collected structured or unstructured data, reasoning on the knowledge, or processing 
the information, derived from this data and deciding the best action(s) to take to achieve the given goal. AI systems 
can either use symbolic rules or learn a numeric model, and they can also adapt their behaviour by analysing how 
the environment is affected by their previous actions. 
As a scientific discipline, AI includes several approaches and techniques, such as machine learning (of which deep 
learning and reinforcement learning are specific examples), machine reasoning (which includes planning, 
scheduling, knowledge representation and reasoning, search, and optimization), and robotics (which includes 
control, perception, sensors and actuators, as well as the integration of all other techniques into cyber-physical 
systems). 
A separate document prepared by the AI HLEG and elaborating on the definition of AI used for the purpose of this 
document is published in parallel, titled "A definition of AI: Main capabilities and scientific disciplines".  
AI Practitioners 
By AI practitioners we denote all individuals or organisations that develop (including research, design or provide 
data for) deploy (including implement) or use AI systems, excluding those that use AI systems in the capacity of end-
user or consumer.  
AI system’s life cycle 
An AI system’s life cycle encompasses its development (including research, design, data provision, and limited trials), 
deployment (including implementation) and use phase.  
Auditability 
Auditability refers to the ability of an AI system to undergo the assessment of the system’s algorithms, data and 
design processes. This does not necessarily imply that information about business models and Intellectual Property 
related to the AI system must always be openly available. Ensuring traceability and logging mechanisms from the 
early design phase of the AI system can help enabling the system's auditability.  
Bias 
Bias is an inclination of prejudice towards or against a person, object, or position. Bias can arise in many ways in AI 
systems. For example, in data-drive AI systems, such as those produced through machine learning, bias in data 
collection and training can result in an AI system demonstrating bias. In logic-based AI, such as rule-based systems, 
bias can arise due to how a knowledge engineer might view the rules that apply in a particular setting. Bias can also 
arise due to online learning and adaptation through interaction. It can also arise through personalisation whereby 
users are presented with recommendations or information feeds that are tailored to the user’s tastes. It does not 
necessarily relate to human bias or human-driven data collection. It can arise, for example, through the limited 
contexts in which a system in used, in which case there is no opportunity to generalise it to other contexts. Bias can 
be good or bad, intentional or unintentional. In certain cases, bias can result in discriminatory and/or unfair 
outcomes, indicated in this document as unfair bias. 
 
                                                           
78  
Humans design AI systems directly, but they may also use AI techniques to optimise their design. 

37 
 
Ethics  
Ethics is an academic discipline which is a subfield of philosophy. In general terms, it deals with questions like “What 
is a good action?”, “What is the value of a human life?”, “What is justice?”, or “What is the good life?”. In academic 
ethics, there are four major fields of research: (i) Meta-ethics, mostly concerning the meaning and reference of 
normative sentence, and the question how their truth values can be determined (if they have any); (ii) normative 
ethics, the practical means of determining a moral course of action by examining the standards for right and wrong 
action and assigning a value to specific actions; (iii) descriptive ethics, which aims at an empirical investigation of 
people's moral behaviour and beliefs; and (iv) applied ethics, concerning what we are obligated (or permitted) to do 
in a specific (often historically new) situation or a particular domain of (often historically unprecedented) 
possibilities for action. Applied ethics deals with real-life situations, where decisions have to be made under time-
pressure, and often limited rationality. AI Ethics is generally viewed as an example of applied ethics and focuses on 
the normative issues raised by the design, development, implementation and use of AI. 
Within ethical discussions, the terms “moral” and “ethical” are often used. The term “moral” refers to the concrete, 
factual patterns of behaviour, the customs, and conventions that can be found in specific cultures, groups, or 
individuals at a certain time. The term “ethical” refers to an evaluative assessment of such concrete actions and 
behaviours from a systematic, academic perspective.  
Ethical AI  
In this document, ethical AI is used to indicate the development, deployment and use of AI that ensures compliance 
with ethical norms, including fundamental rights as special moral entitlements, ethical principles and related core 
values. It is the second of the three core elements necessary for achieving Trustworthy AI.   
Human-Centric AI 
The human-centric approach to AI strives to ensure that human values are central to the way in which AI systems 
are developed, deployed, used and monitored, by ensuring respect for fundamental rights, including those set out in 
the Treaties of the European Union and Charter of Fundamental Rights of the European Union, all of which are 
united by reference to a common foundation rooted in respect for human dignity, in which the human being enjoy a 
unique and inalienable moral status. This also entails consideration of the natural environment and of other living 
beings that are part of the human ecosystem, as well as a sustainable approach enabling the flourishing of future 
generations to come. 
Red Teaming 
Red teaming is the practice whereby a “red team” or independent group challenges an organisation to improve its 
effectiveness by assuming an adversarial role or point of view. It is particularly used to help identifying and 
addressing potential security vulnerabilities. 
Reproducibility 
 
Reproducibility describes whether an AI experiment exhibits the same behaviour when repeated under the same 
conditions.  
Robust AI 
Robustness of an AI system encompasses both its technical robustness (appropriate in a given context, such as the 
application domain or life cycle phase) and as well as its robustness from a social perspective (ensuring that the AI 
system duly takes into account the context and environment in which the system operates). This is crucial to ensure 
that, even with good intentions, no unintentional harm can occur. Robustness is the third of the three components 
necessary for achieving Trustworthy AI. 
Stakeholders 
By stakeholders we denote all those that research develop, design, deploy or use AI, as well as those that are 
(directly or indirectly) affected by AI – including but not limited to companies, organisations, researchers, public 
services, institutions, civil society organisations, governments, regulators, social partners, individuals, citizens, 

38 
 
workers and consumers. 
Traceability 
Traceability of an AI system refers to the capability to keep track of the system’s data, development and deployment 
processes, typically by means of documented recorded identification.  
Trust  
We take the following definition from the literature: “Trust is viewed as: (1) a set of specific beliefs dealing with 
benevolence, competence, integrity, and predictability (trusting beliefs); (2) the willingness of one party to depend 
on another in a risky situation (trusting intention); or (3) the combination of these elements.”79 While “Trust” is 
usually not a property ascribed to machines, this document aims to stress the importance of being able to trust not 
only in the fact that AI systems are legally compliant, ethically adherent and robust, but also that such trust can be 
ascribed to all people and processes involved in the AI system’s life cycle.   
Trustworthy AI 
Trustworthy AI has three components: (1) it should be lawful, ensuring compliance with all applicable laws and 
regulations (2) it should be ethical, demonstrating respect for, and ensure adherence to, ethical principles and 
values and (3) it should be robust, both from a technical and social perspective, since, even with good intentions, AI 
systems can cause unintentional harm. Trustworthy AI concerns not only the trustworthiness of the AI system itself 
but also comprises the trustworthiness of all processes and actors that are part of the system’s life cycle. 
Vulnerable Persons and Groups 
No commonly accepted or widely agreed legal definition of vulnerable persons exists, due to their heterogeneity. 
What constitutes a vulnerable person or group is often context-specific. Temporary life events (such as childhood or 
illness), market factors (such as information asymmetry or market power), economic factors (such as poverty), 
factors linked to one’s identity (such as gender, religion or culture) or other factors can play a role. The Charter of 
Fundamental Rights of the EU encompasses under Article 21 on non-discrimination the following grounds, which 
can be a reference point amongst others: namely sex, race, colour, ethnic or social origin, genetic features, 
language, religion or belief, political or any other opinion, membership of a national minority, property, birth, 
disability, age and sexual orientation. Other articles of law address the rights of specific groups, in addition to those 
listed above. Any such list is not exhaustive, and may change over time. A vulnerable group is a group of persons 
who share one or several characteristics of vulnerability.  
                                                           
79  
Siau, K., Wang, W. (2018), Building Trust in Artificial Intelligence, Machine Learning, and Robotics, CUTTER BUSINESS 
TECHNOLOGY JOURNAL (31), S. 47–53. 

39 
 
This Document was prepared by the members of the High-Level Expert Group on AI  
 
 
listed here below in alphabetical order 
 
Pekka Ala-Pietilä, Chair of the AI HLEG 
     AI Finland, Huhtamaki, Sanoma 
Pierre Lucas 
     Orgalim – Europe’s technology industries 
Wilhelm Bauer 
     Fraunhofer 
Ieva Martinkenaite 
     Telenor 
Urs Bergmann – Co-Rapporteur 
     Zalando 
Thomas Metzinger – Co-Rapporteur 
     JGU Mainz & European University Association 
Mária Bieliková 
     Slovak University of Technology in Bratislava 
Catelijne Muller 
     ALLAI Netherlands & EESC 
Cecilia Bonefeld-Dahl – Co-Rapporteur 
     DigitalEurope 
Markus Noga 
     SAP 
Yann Bonnet 
     ANSSI 
Barry O’Sullivan, Vice-Chair of the AI HLEG  
     University College Cork  
Loubna Bouarfa 
     OKRA 
Ursula Pachl  
     BEUC 
Stéphan Brunessaux 
     Airbus 
Nicolas Petit – Co-Rapporteur 
     University of Liège  
Raja Chatila 
     IEEE Initiative Ethics of Intelligent/Autonomous Systems &   
Sorbonne University 
Christoph Peylo 
     Bosch 
Mark Coeckelbergh 
     University of Vienna 
Iris Plöger 
     BDI 
Virginia Dignum – Co-Rapporteur 
     Umea University 
Stefano Quintarelli 
     Garden Ventures 
Luciano Floridi 
     University of Oxford 
Andrea Renda 
     College of Europe Faculty & CEPS 
Jean-Francois Gagné – Co-Rapporteur 
     Element AI 
Francesca Rossi 
    IBM  
Chiara Giovannini 
     ANEC 
Cristina San José 
     European Banking Federation 
Joanna Goodey 
     Fundamental Rights Agency 
George Sharkov 
     Digital SME Alliance 
Sami Haddadin 
     Munich School of Robotics and MI 
Philipp Slusallek 
     German Research Centre for AI (DFKI) 
Gry Hasselbalch 
     The thinkdotank DataEthics & Copenhagen University 
Françoise Soulié Fogelman 
     AI Consultant 
Fredrik Heintz 
     Linköping University 
Saskia Steinacker – Co-Rapporteur 
     Bayer 
Fanny Hidvegi 
     Access Now 
Jaan Tallinn 
     Ambient Sound Investment 
Eric Hilgendorf 
     University of Würzburg 
Thierry Tingaud 
     STMicroelectronics 
Klaus Höckner 
     Hilfsgemeinschaft der Blinden und Sehschwachen 
Jakob Uszkoreit 
     Google 
Mari-Noëlle Jégo-Laveissière 
     Orange 
Aimee Van Wynsberghe – Co-Rapporteur 
     TU Delft  
Leo Kärkkäinen 
     Nokia Bell Labs 
Thiébaut Weber 
     ETUC 
Sabine Theresia Köszegi 
     TU Wien  
Cecile Wendling 
     AXA 
Robert Kroplewski 
     Solicitor & Advisor to Polish Government 
Karen Yeung – Co-Rapporteur 
     The University of Birmingham 
Elisabeth Ling 
     RELX 
 
 
Urs Bergmann, Cecilia Bonefeld-Dahl, Virginia Dignum, Jean-François Gagné, Thomas Metzinger, Nicolas Petit, Saskia Steinacker, 
Aimee Van Wynsberghe and Karen Yeung acted as rapporteurs for this document.  
 
Pekka Ala-Pietilä is Chairing the AI HLEG. Barry O'Sullivan is Vice-Chair, coordinating the AI HLEG’s second deliverable. Nozha 
Boujemaa, Vice-Chair until 1 February 2019 coordinating the first deliverable, also contributed to the content of this document.  
 
Nathalie Smuha provided editorial support. 
 

`;