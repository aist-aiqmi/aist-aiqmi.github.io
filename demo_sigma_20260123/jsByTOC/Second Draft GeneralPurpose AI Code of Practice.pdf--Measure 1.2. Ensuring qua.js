var toc_content = `Measure 1.2. Ensuring quality, integrity, and security of information 
Signatories commit to ensuring that the documented information is controlled for quality and integrity, 
retained as evidence of compliance with obligations of the AI Act, and protected from unintended 
alterations.  
 
In the context of drawing-up, updating, and controlling the quality and security of the information and 
records, Signatories are encouraged to follow the established protocols and technical standards. 
 
Table 1: Reference table for Measure 1.1. 
AI Act 
reference 
Information that Signatories commit to drawing up and 
keeping up-to-date to fulfil the AI Act obligations.  
(Note: The underlined text is a summarised form of the 
corresponding AI Act obligation as specified in Annex 
XI Section 1 and/or Annex XII AI Act). 
For the AI 
Office and 
national 
competent 
authorities, 
For 
downstream 
providers 

DRAFT DOCUMENT 
 
13 
upon 
request 
Annex XI 
§1 1. and 
Annex XII 
1.  
General information:  
• 
The model name 
• 
The unique model version identifier 
• 
The model family name 
• 
Evidence that establishes the provenance and 
authenticity of the model (e.g. a secure hash if 
binaries are distributed, or TLS/SSL certificates in 
the case of a service) 
• 
The name of the model provider(s) 
• 
The name of the model owner(s), in the case they are 
not the same as the model provider(s) 
 
This information ensures that the model and its provider(s) 
can be clearly identified. 
🗸 
🗸 
Annex XI 
§1 
1.(a) 
and Annex 
XII 1.(a)  
Intended tasks and type and nature of AI systems in which it 
can be integrated: 
• 
A description of the intended tasks  
• 
A list of the types of high-risk AI systems (within the 
meaning of Article 6 AI Act in conjunction with 
Annex I and III AI Act), if any, in which the model 
can be integrated  
• 
A list of the restricted tasks with a description of the 
associated restrictions, including the prohibited uses 
beyond those prohibited by Article 5 AI Act, if any 
 
This information ensures that the intended and unintended 
uses of the model are made clear, allowing downstream 
providers to avoid implementation errors. If this information 
appears in the model license, acceptable use policy, and/or 
other provider materials, Signatories commit to ensuring 
consistency across these materials. 
🗸 
🗸 
Annex XI 
§1 
1.(b) 
and Annex 
XII 1.(b)  
Acceptable use policies applicable: 
• 
The acceptable use policy applicable with the 
essential elements defined in the Appendix 
🗸 
🗸 
Annex XI 
§1 
1.(c) 
and Annex 
XII 1.(c) 
Date of release and methods of distribution: 
• 
The date the model was first released via any 
distribution channel 
• 
A list of all distribution channels where the general-
purpose AI model is distributed, and for each listed 
distribution channel, the associated release date and 
the level of access to the model 
 
This information provides clarity on when, what and where 
the model is distributed.  
🗸 
🗸 

DRAFT DOCUMENT 
 
14 
Annex XII 
1.(d)   
Interaction of the model with external hardware or software: 
• 
A description of how the model interacts with 
hardware and software that is external to the model 
• 
A list of required external hardware or software 
dependencies with version information 
 
This information provides downstream providers with a basic 
understanding of external hardware and software, in 
particular when it is necessary for using the model. 
 
🗸 
Annex XII 
1.(e) 
Versions of relevant software where applicable: 
• 
A list of all required software dependencies with 
version information 
 
This information provides downstream providers with a basic 
understanding of required software needed to integrate the 
model in their systems. 
 
🗸 
Annex XI 
§1 
1.(d) 
and Annex 
XII 1.(f) 
Architecture and number of parameters:  
• 
A general description of the type of model and its 
architecture 
• 
The total number of model parameters  
• 
The number of parameters that are active during 
inference 
 
This information provides basic information about the model 
size and architecture. 
🗸 
🗸 
• 
A description of how the model architecture departs 
from standard model architecture practices, if at all 
 
This information provides clarity on whether there are 
atypical properties in the model architecture. 
🗸 
 
Annex XI 
§1 
1.(e) 
and Annex 
XII 
1.(g) 
and 2.(b) 
Modality and format of inputs and outputs:  
• 
The data modalities that the model accepts as input 
• 
The data modalities that the model generates as 
output 
• 
The associated size and length limits for each input 
and output modality 
 
The information ensures clarity on what types of data the 
model can accept as input and generate as output. 
🗸 
🗸 
Annex XI 
§1 1.(f) and 
Annex XII 
1.(h)  
Licence: 
• 
The licence that the model has been released under 
• 
A list of the released assets, e.g. data, model weights, 
source code 
• 
The licence for each of the previous assets detailing 
their terms and rights of use, including in relation to 
modification, distribution and sublicensing of the 
model, duration of use, and any obligations 
🗸 
🗸 

DRAFT DOCUMENT 
 
15 
 
The information ensures clarity on which licenses cover what 
assets. If Signatories do not have a licence for the model, they 
commit to providing instead a document describing how they 
provide access to the model for downstream use. 
Annex XI 
§1 
2.(a) 
and Annex 
XII 2.(a) 
Technical means for integration into AI systems:  
• 
Technical documentation (e.g. on instructions of use, 
infrastructure, tools) that describes how the model 
can be integrated into an AI system. 
 
This information provides clarity on how the model is to be 
integrated into downstream AI systems. 
🗸 
🗸 
Annex XI 
§1 2.(b)  
Design specifications of the model and training process: 
• 
A description of the model design choices including 
rationale and assumptions made 
• 
The sequences of steps or stages involved in the 
training process 
• 
A description of the objective and optimisation 
method for each step or stage in the training process 
• 
A general description for why each step or stage is 
implemented, along with any key assumptions 
• 
The relevance of different parameters, if applicable 
 
This information provides clarity into how the model is 
trained and the purpose of the different steps in the process. 
🗸 
 
Annex XI 
§1 
2.(c) 
and Annex 
XII 2.(c) 
Information on data used for training, testing and validation: 
• 
A list of the different data acquisition methods, 
including, but not limited to: (i) web crawling; (ii) 
private data licenced by or on behalf of rights 
holders, or otherwise acquired from third parties; (iii) 
data annotation or creation potentially through 
relationships with third parties; (iv) synthetically 
generated data; (v) user data; (vi) publicly available 
data; and (vii) data collected through other means  
• 
The time period during which the data was collected 
for each acquisition method, including a notice if the 
data acquisition is ongoing 
• 
A general description of the data processing involved 
in transforming the acquired data into the training 
data for the model 
• 
A general description of the data used for training, 
testing 
and 
validation 
 
This information provides clarity into how the training data 
is sourced, processed, and its overall properties as well as 
basic information on the testing and validation data. 
🗸 
🗸 

DRAFT DOCUMENT 
 
16 
• 
A list of user-agent strings for web crawler(s) used, 
if any, in acquiring training data 
• 
The period of data collection and name of 
organisation(s) operating the crawler for each web 
crawler used 
• 
A general description of how the crawler respects 
preferences indicated in robots.txt for each web 
crawler used 
 
This information provides further clarity into how existing 
web-crawled training data is sourced. 
🗸 
 
• 
A list of the names for organisation(s) that manage 
humans to create, pre-process and/or annotate data 
specifically on behalf of the provider for training the 
model 
• 
A description of the location and number of humans 
involved in data creation for each listed organisation. 
 
This information provides further clarity into how new 
human-created training data is sourced. 
🗸 
 
• 
A description of how previously acquired data was 
used for training/testing/validation, if applicable, 
including how the model provider acquired the rights 
to the data, including which products and services 
were involved in the event the data corresponds to 
user data from products and services 
🗸 
 
• 
A description of the methods, if any, used to 
synthetically generate training dataThe name(s) of 
any AI model(s) or system(s) used to synthetically 
generate training data  
 
This information provides further clarity into how new 
machine-created training data is sourced. 
🗸 
 
 
• 
A description of any methods implemented in data 
acquisition or processing, if any, to address the 
prevalence of child sexual abuse material (CSAM) or 
non-consensual intimate imagery (NCII) in the 
training, testing, and validation data 
• 
A description of any methods implemented in data 
acquisition or processing, if any, to address the 
prevalence of copyrighted materials in the training, 
testing, and validation data 
• 
A description of any methods implemented in data 
acquisition or processing, if any, to address the 
prevalence of personal data in the training, testing, 
and validation data, where relevant and applicable 
🗸 
 

DRAFT DOCUMENT 
 
17 
• 
A description of any methods implemented in data 
acquisition or processing, if any, to address the 
prevalence of identifiable biases in the training, 
testing, and validation data 
• 
A description of any methods implemented in data 
acquisition or processing, if any, to address other 
types of potentially harmful data in the training, 
testing, and validation data 
• 
A description of methods implemented in data 
acquisition or processing, if any, to address other 
types of legality concerns in the training, testing, and 
validation data 
 
This information provides further clarity into how harmful or 
otherwise undesirable data for legal or other reasons is 
addressed in data sourcing and processing. 
• 
The size (in number of data points for each data 
modality) of the training data 
• 
The fraction of the training, testing, and validation 
data corresponding to each of the data acquisition 
methods and sources, in number of data points for 
each data modality  
 
This information provides further clarity into the size of 
training, testing, and validation data as well as the 
composition of sourcing methods in the training data. 
🗸 
 
Annex XI 
§1 2.(d) 
Computational resources:  
• 
The number and type of hardware units used to train 
the model 
• 
The duration of model training measured in wall 
clock time (reported in units of days) and hardware 
time (reported in units of hardware hours, e.g. GPU 
hours) 
• 
The compute used during model training (reported in 
units of integer or floating-point operations) 
• 
The compute for a fixed computation (e.g. generating 
1000 words for a model capable of text generation) 
used during model inference (reported in units of 
integer or floating-point operations) 
 
This information provides further clarity into the 
computational requirements of model training and inference. 
Signatories commit to reporting the information above in 
consistency with any delegated act adopted in accordance 
with Article 53(5) AI Act to detail measurement and 
calculation methodologies with a view to allowing for 
comparable and verifiable documentation. 
🗸 
 

DRAFT DOCUMENT 
 
18 
Annex XI 
§1 2.(e) 
Known or estimated energy consumption:  
• 
The owner(s) of the hardware used in model training 
• 
The location(s) of the hardware used in model 
training 
• 
The known or estimated energy mixture for energy 
used to perform computation on the hardware used in 
model training  
• 
The known or estimated energy consumption of 
model training (reported in MWh). If the energy 
consumption is unknown, the energy consumption 
may be based on information about computational 
resources used  
• 
The known or estimated emissions associated with 
model training (reported in tCO2eq) 
• 
A description of the methodology for measuring or 
estimating 
energy 
cost, 
consumption 
and/or 
emissions for model training 
 
This information provides further clarity into the energy and 
environmental costs of model training. Signatories commit to 
reporting the information above in consistency with any 
delegated act adopted in accordance with Article 53(5) AI 
Act to detail measurement and calculation methodologies 
with a view to allow for comparable and verifiable 
documentation.  
🗸 
 
Article 53 
(1) (a) 
Testing process and results thereof: 
• 
A description of all tests and test results 
 
This information provides further clarity into model testing. 
🗸 
 
 

`;