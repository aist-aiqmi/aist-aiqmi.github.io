var toc_content = `CYBERSECURITY OF AI AND STANDARDISATION 
 
24 
 
5. CONCLUSIONS 
This section sums up the report and recommends actions to ensure standardisation support to 
the cybersecurity of AI, and to the implementation of the draft AI Act. 
5.1 WRAP-UP 
The study suggests that general-purpose standards for information security and quality 
management (in particular ISO/IEC 27001, ISO/IEC 27002 and ISO/IEC 9001) can partially 
mitigate the cybersecurity risks related to the confidentiality, integrity and availability of AI 
systems. This conclusion relies on the assumption that AI is in its essence software, and 
therefore what is applicable to software can be applied to AI, if adequate guidance is provided. 
This approach can suffice at a general level but needs to be complemented by a system-
specific analysis (e.g. relying on ISO/IEC 15408-1:2009), as the identification of standardised 
methods supporting the CIA security objectives is often domain specific. It is a matter of debate 
to what extent the assessment of compliance with the resulting security requirements can be 
based on AI-specific horizontal standards and to what extent it can be based on vertical/sector-
specific standards. 
Still, some standardisation gaps have been identified: 
• the traceability of processes is addressed by several standards, but the traceability of the data 
and AI components throughout their life cycles remains an issue that cuts across most threats 
and remains largely unaddressed in practice, despite being covered well in various standards 
or drafts (e.g. ISO/IEC DIS 42001 on AI management systems 20 and the ISO/IEC CD 5259 
series on data quality for analytics and ML21); 
• the inherent features of ML are not fully reflected in existing standards, especially in terms of 
metrics and testing procedures; 
• in some areas, existing standards cannot be adapted or new standards cannot be fully defined 
yet, as related technologies are still being developed and not yet quite mature enough to be 
standardised. 
Going beyond the mere CIA paradigm and considering the broader trustworthiness perspective, 
the main takeaway is that, since cybersecurity cuts across a number of trustworthiness 
requirements (e.g. data governance, transparency), it is important that standardisation activities 
around these requirements treat cybersecurity in a coherent manner. 
Concerning the implementation of the draft AI Act, besides the considerations above, the 
following gaps have been identified: 
• to date there are no standards that adequately cover cybersecurity and describe the 
competences of organisations for auditing, certification and testing of AI systems (and AI 
management systems) and their evaluators; 
• the abovementioned gap on areas that are the subject of R&D is relevant to the 
implementation of the draft AI Act, in particular with respect to data poisoning and adversarial 
examples. 
 
20 ISO/IEC DIS 42001, Information technology — Artificial intelligence — Management system (under development) 
21 The series is under development (https://www.iso.org/ics/35.020/x/) 

CYBERSECURITY OF AI AND STANDARDISATION 
 
25 
 
5.2 RECOMMENDATIONS 
5.2.1 Recommendations to all organisations 
The ESOs have made a commitment to standardisation in support of cybersecure AI, as is 
evidenced by ETSI’s ISG SAI and by CEN’s JTC 21. These actions are all positive and are to be 
encouraged and reinforced. 
While it is recognised that the ESOs have different operational models and different 
membership profiles, it is also recognised that the ESOs operate cooperatively in many fields, 
and this is, again, to be encouraged. Competitive effort to develop standards is to some extent 
inevitable and, while that is recognised, the ESOs are strongly discouraged from negative 
competition. One area where harmonisation is seen as essential is in the adoption of a common 
AI-related terminology and set of concepts not only across SDOs but also with other 
stakeholders. The present report does not suggest which SDO/ESO should initiate this activity 
but it is strongly suggested that, without a common set of cross-domain terminology and 
concepts, the first risk to cybersecurity would be not understanding each other22. 
Recommendation 1: Use a standardised and harmonised AI terminology for cybersecurity, 
including trustworthiness characteristics and a taxonomy of different types of attacks specific to 
AI systems. 
5.2.2 Recommendations to standards-developing organisations 
The following recommendations are to standardisation organisations. 
Recommendation 2: Develop specific/technical guidance on how existing standards related to 
the cybersecurity of software should be applied to AI. These should also include defences at 
different levels (before the AI system itself, e.g. infrastructure), for which the application of 
generic standards might be straightforward in many cases. At the same time, it is recommended 
to monitor and encourage areas where standardisation is limited by technological development, 
e.g. testing and validation for systems relying on continuous learning and mitigation of some AI-
specific attacks. 
Recommendation 3: The inherent features of ML should be reflected in standards. The most 
obvious aspects to be considered relate to risk mitigation by associating hardware/software 
components with AI; reliable metrics; and testing procedures. The traceability and lineage of 
both data and AI components should also be reflected. 
Recommendation 4: Ensure that liaisons are established between cybersecurity technical 
committees and AI technical committees so that AI standards on trustworthiness characteristics 
(oversight, robustness, accuracy, explainability, transparency, etc.) and data quality include 
potential cybersecurity concerns. 
5.2.3 Recommendations in preparation for the implementation of the 
draft AI Act 
The following recommendations are suggested to prepare for the implementation of the draft AI 
Act, and should be understood as complementary to the recommendations above. 
Recommendation 5: Given the applicability of AI in a wide range of domains, the identification 
of cybersecurity risks and the determination of appropriate security requirements should rely on 
 
22 Two horizontal terminology-related standards (ISO/IEC 22989 and ISO/IEC 23053) have been published recently (June 
and July 2022). JTC 21 will base all its work on ISO/IEC terminology. 

`;