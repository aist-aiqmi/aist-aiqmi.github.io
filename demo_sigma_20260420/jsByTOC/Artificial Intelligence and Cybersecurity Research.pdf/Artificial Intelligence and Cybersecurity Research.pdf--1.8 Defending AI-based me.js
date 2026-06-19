var toc_content = `ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
24 
 
1.7 AI-POWERED CYBERATTACKS 
As AI technology continues to advance, it is likely that we will see more sophisticated 
and complex AI-powered cyberattacks in the future. For example, a generative 
adversarial network (GAN), a class of ML frameworks, can be used to generate ‘deep 
fakes’ by swapping or manipulating faces or voices in an image or a video.  
AI-based algorithms are also able to prepare persuasive spear-phishing emails77 
targeted at individuals and organisations. AI can also be used to enhance the 
efficiency and effectiveness of malware78, by improving its ability to evade detection, 
adapt to changing environments, target specific vulnerabilities, propagate itself and 
persist on target systems. AI-driven malware can use reinforcement learning 
techniques to improve itself and perform even more successful attacks.  
Attackers can take advantage of training data to generate a ‘back door’ in the AI 
algorithm. Attackers can also use AI to help in deciding which vulnerability is most 
likely to be worth exploiting. These are just a few examples of AI-powered 
cyberattacks that already raise substantial concern. 
1.8 DEFENDING AI-BASED MECHANISMS 
AI systems can be susceptible due to their own vulnerabilities or weak points 
introduced by other interdependent mechanisms. Attacks against AI-based 
mechanisms can be organised in the following categories79 (non-exhaustive list). 
• 
Attacks exploiting existing vulnerabilities in popular open-source software 
libraries, e.g. pytorch, tensorflow, etc. 
• 
Attacks poisoning training data. Here, it is assumed that the attacker has 
access to the training data and is able to alter them and introduce 
manipulations such as wrong labels so that the AI system, trained on 
poisoned data, carries out processing and/or predictions following the 
attacker’s interests. 
• 
Adversarial attacks, where usually the AI system under attack is a deep neural 
network. Here, the attacker introduces minor alterations to the test examples 
in order to alter the prediction of the AI system in a targeted or untargeted 
manner, i.e. steering the prediction towards a given desired class or to any 
class other than the correct one. 
• 
Reverse-engineering the trained model based on publicly accessible query 
interfaces, e.g. model stealing, model inversion and membership inference. 
Several approaches have been proposed in literature to secure and protect AI-based 
mechanisms from such malicious attempts. These approaches include the following. 
 
77 https://www.wired.com/story/ai-phishing-emails/, last accessed March 2023. 
78 Cong Truong Thanh and Ivan Zelinka. A survey on artificial intelligence in malware as next-generation threats. MENDEL, 
25(2):27–34, December 2019. doi:10.13164/mendel.2019.2.027. URL https://doi.org/10.13164/mendel.2019.2.027  
79 ENISA Artificial Intelligence Cybersecurity Challenges, 2020, available at 
https://www.enisa.europa.eu/publications/artificial-intelligence-cybersecurity-challenges/@@download/fullReport 

ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
25 
 
• 
Securing the software packages that were used and verifying the validity of 
the training data80. 
• 
Approaches addressing adversarial attacks81 82 that in general are ad-hoc and 
focused on a specific type of attack assumed to be known a-priori. This is due 
to the size of the adversarial attack generation space which is potentially of 
large dimensions. As such, both traditional and neural network-based ML 
approaches can be used depending on the specifications of the problem-at-
hand. 
 
 
80D. Gümüşbaş, T. Yıldırım, A. Genovese and F. Scotti, A Comprehensive Survey of Databases and Deep Learning 
Methods for Cybersecurity and Intrusion Detection Systems, in IEEE Systems Journal, vol. 15, no. 2, pp. 1717-1731, June 
2021, DOI: 10.1109/JSYST.2020.2992966. 
81 Idem footnote 79 
82 Yunfei Song, Tian Liu, Tongquan Wei, Xiangfeng Wang, Zhe Tao, and Mingsong Chen. Fda3: Federated defense against 
adversarial attacks for cloud-based IoT applications. IEEE Transactions on Industrial Informatics, ages 1–1, 2020. 
DOI:10.1109/TII.2020.3005969 

ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
26 
 
SELECTED CASE STUDIES 
Four focus areas were examined because of their strong interdependence with AI and 
cybersecurity, namely the next-generation of telecommunications (6G), cyber 
biotechnology, the Internet of Things (IoT) and cyber-physical systems (CPS). As 
some of these areas are still at an early stage of development (at least the first two), 
there is an expectation that AI will contribute to increasing their potential. This 
assumption is justified not only in terms of potential but also as regards security.  
However, existing cybersecurity tools that use AI may not be adequate in securing 
these technologies and areas. The use of AI in new contexts needs to be evaluated 
and often adapted, especially when it learns from data describing attack patterns in 
new attack surfaces83. However, this requires sufficient amounts of reference data to 
train the models, which may not be yet available due to the novelty of these 
technologies and domains.  
1.9 NEXT GENERATION OF TELCOMMUNICATIONS84  
In this section we will examine how 5G, beyond-5G and 6G can equally benefit and be 
at risk from the use of AI. Some promising AI capabilities85 to support 5G 
cybersecurity are listed below (not exhaustively): 
• 
optimising resources and dynamic arbitrations, especially in a situation of 
massive multi-mobility86, 
• 
improving the management and coordination of algorithms87,  
• 
improving the ‘learning curve’ in the management of cybersecurity issues, in 
particular with the detection of anomalies, e.g. potentially linked to malware, 
or even attack patterns already listed88, 
• 
helping to develop more agile and automated capabilities, able to react to 
subtly changing or threatening situations89, 
• 
helping to develop security mechanisms by creating trust models, device 
security and data assurance to provide systematic security for the whole 5G-
 
83 Pujolle, Guy (2020). Faut-il avoir peur de la 5G. Paris, Larousse, p. 217-219. 
84 In this chapter, we will leave aside the issue of AI-based facial recognition and surveillance using 5G, a full topic in itself, 
with growing concerns and technological power. 
85 Haider, Noman; Baig, Muhammad Zeeshan; Imran, Muhammad. 2020. Artificial Intelligence and Machine Learning in 5G 
Network Security: Opportunities, advantages, and future research trends. arXiv:2007.04490, based upon the 3GPP 
Technical Specifications Group Services and Systems Aspects. 
86 When numerous mobile agents need to have almost simultaneous access to telecom services, the amount of data to be 
transferred and monitored has to be supported by AI, as well as the meta surveillance of how this can be subject to attacks, 
with the forms of attacks themselves being a source of AI learning. 
87 See our comment on Pujolle’s explanation above (op. cit.). 
88 In fact, this is how AI can become more and more involved in the defence of 5G hubs and even 5G terminals, i.e. making  
increasingly better use of past attack (of being attacked) experience. 
89 This reaction time or time management issue is almost by itself such a problem (as attackers also tend to use AI to see 
how systems defend themselves against attacking probes), that 6G higher expected performance and cybersecurity 
provisions seem inevitable (see for that Gurtov, Andrei (2020). Network security architecture and cryptographic 
technologies reaching for post-quantum era., in 6G White Paper: Research Challenges For Trust, Security And Privacy, 
University of Oulu, Finland, 6G Research Visions, No. 9, 2020, in particular, p. 16, where the author emphasizes the value 
of AI to provide the dynamicity to match 6G needs for cybersecurity.) 

`;