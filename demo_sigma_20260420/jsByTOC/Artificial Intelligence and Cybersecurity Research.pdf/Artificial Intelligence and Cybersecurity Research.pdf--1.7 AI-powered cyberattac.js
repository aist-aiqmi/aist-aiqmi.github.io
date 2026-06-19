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

`;