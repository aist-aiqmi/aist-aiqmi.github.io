var toc_content = `ARTIFICIAL INTELLIGENCE AND CYBERSECURITY RESEARCH 
 
 
31 
 
AI IN CYBERSECURITY - 
RESEARCH GAPS AND 
NEEDS  
The next section identifies research gaps that are linked to some of the issues and 
challenges identified in the previous chapter. To close some of these gaps we 
identified opportunities for further research that are presented in section 7.2.  
1.13 
OPEN ISSUES AND CHALLENGES 
The vast majority of AI systems are being developed based on one (or more) of the 
following assumptions (in the context of this study): (i) availability of a usually 
significant amount of high-quality data representing both normal and attacked states of 
a system; (ii) availability of expert knowledge on the domain based on which features 
tailored to the problem at hand are engineered; (iii) stationarity over time, i.e. 
distributions of data representative of system states do not drift nor alter abruptly over 
time (which of course also depends on the AI technique used); (iv) knowledge of the 
class dictionary including the full range of every system state; (v) knowledge of the 
underlying analytical relationships governing the system being monitored; (vi) that the 
trained models do not present any types of bias(es), and (vii) that there are no ‘hidden’ 
biases in the available data set. 
In this chapter, we provide details on how AI raises specific issues and challenges, on 
which we identify further research opportunities in the next section. 
There are several open issues and challenges that have not yet been addressed and 
that can be further explored by research. The following non-exhaustive list presents 
some of the most noteworthy open issues: 
• 
achieving verifiable, reliable, explainable, auditable, robust and unbiased 
AI111; 
• 
quality of data sets: among the self-built limitations, there is the notion of ‘trash 
in/trash out’ i.e. you need good quality inputs to get reasonable quality 
output112, meaning not only the quality of data bearing in mind their practical 
algorithmic usability but also how well they represent the problem being 
tackled; 
 
111 Verifiable: there should proof that the AI-based approach acts correctly for a range of inputs; Reliable: the AI-based 
approach should operate as expected, even for inputs coming out of data distribution the system has not ‘seen before;  
Explainable: the system should be structured in a way so that the operator is able to backtrack any obtained 
prediction/decision in terms of data, scenarios, and assumptions that led to it; Robust against adversarial attacks that can 
jeopardise an AI-based tool, thus any deployed systems should not be vulnerable to noise and specific inputs designed to 
manipulate its operation; Auditable: the operator should be able to ‘open’ and check the internal state of the deployed 
system at any point in time and especially when a prediction is carried out, and Unbiased: the system should not display 
unintended preference towards specific predictions, recommendations, etc. 
112 Pouyanfar et al, 2019, A Survey on Deep Learning DOI: 10.1145/3234150. Association for Computing Machinery (ACM) 

`;