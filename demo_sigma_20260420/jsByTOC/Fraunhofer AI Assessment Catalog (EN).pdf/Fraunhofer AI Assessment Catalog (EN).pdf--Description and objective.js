var toc_content = `Description and objectives
According to their properties, it is possible that AI applications affect a variety of legal positions. Particularly 
often, this concerns infringements on privacy or the right to informational self-determination. For example, 
AI applications often process sensitive information, such as personal or private data including voice recordings, 
photos or videos. Therefore, it is necessary to ensure compliance with the relevant data protection regulations, 
such as the General Data Protection Regulation (GDPR) and the German Federal Data Protection Act (BDSG). 
However, AI applications can pose a risk to more than the privacy of individuals: (Business) secrets or data under 
license may also be affected, which do not constitute personal data in the sense of the GDPR, but can still 
require legal protection. For example, machine data – entirely separate to the issue of which person was active as 
a machine operator – can contain information about process utilization or error rates and thus represent sensitive 
business-related data.81
The challenges related to data protection are potentially much greater for AI applications than for classic 
IT systems. In particular, this is due to the fact that AI applications often combine previously unlinked data and 
just create new methods of linking data through Machine Learning. The more data that is linked (data linkage), 
the greater the risk of being able to identify people or, for example, specific operating sites even without directly 
specifying corresponding attributes. For example, it is possible to re-identify people with 95 percent certainty 
through their typing behavior on a computer keyboard82, 83. If there were now a public (or purchasable) database 
that assigned keyboard stroke patterns to people, the keyboard stroke pattern would become what is referred to 
as a quasi-identifier, which would make it possible to make a personal reference.
AI methods can potentially create personal or business references when processing text, voice and image 
data, as well as logged usage data. However, in addition to the stored or processed data, the actual ML model 
implemented in the AI application can also be exposed. The targeted systematic querying of the AI application to 
reconstruct model parameters or other model characteristics is called model extraction. If an attacker gains access 
to the model parameters and also knows the learning algorithm and the structure of the model, the person could 
try to reconstruct the model. For example, this could significantly affect the competitive position of a targeted 
company. In addition, targeted attacks could be developed to extract personal (training) data from a model. For 
instance, it is possible to reconstruct a training image of a person based on softmax values of an AI application 
for facial recognition84. Methods for deducing raw data from a model, which usually should not be disclosed, are 
referred to as model inversion and are currently being researched.

143
Dimension: Data Protection
Federated learning is a method for protecting large data sets and models. With federated learning, only Machine 
Learning parameters are exchanged, meaning potential attackers have to expend a lot of energy to deduce the 
training data. First, the attacker would have to access the model parameters. These are held by the coordinator 
and the local agents and are exchanged between them. The transmission can be protected by encryption. Virtual 
data spaces ensure distributed data is securely exchanged and guarantee fine granular control over its use.
In the traditional sense, data confidentiality is a protection goal of classic IT security. While the assessment 
catalog classifies the other protection goals of integrity and availability as risk areas under the Dimension: 
Safety and Security (S), it gives data protection its own dimension. This is because the properties of 
ML processes create new types of risks with regard to confidentiality that go beyond access to stored data – as is 
the case in classic IT security. As described in the previous sections, AI technologies can intelligently link data and 
thus establish or reconstruct personal references. In addition, there is the risk of model extraction and the risk 
of extracting training data from the model. Overall, data protection in the context of AI applications opens 
up its very own risk landscape, which requires new measures specifically for AI and must therefore be seen as 
a dimension in its own right.
Nevertheless, data protection is still directly related to risks regarding the integrity of an AI application. Thus, the 
traditional IT security measures described in the Risk area: integrity and availability (IA), such as encryption 
or identity and access rights management, should also be taken into account where necessary to protect data. 
However, the measures in the data protection dimension focus on established AI-specific methods. Due to the 
abundance of possible methods, only a selection of them can be presented. In particular, new measures for 
mitigating risks that are not listed in the assessment catalog are also allowed.
The purpose of the data protection dimension is to ensure that data protection risks and measures of the 
AI application, taking into account the particular challenges that AI poses, are sufficiently analyzed and 
documented to meaningfully support data protection officers in carrying out the investigation and ultimately 
making decisions about data protection declassification.
The risk areas under the data protection dimension are:
1. Protection of personal data: This risk area covers risks associated with the AI application using personal 
data that is not GDPR-compliant, as well as the risk of re-identification of individuals in a data set.
2. Protection of business-relevant information: This risk area addresses risks that arise from the unwanted 
disclosure of business-relevant information by the AI application.
3. Control of dynamics: This risk area addresses the risks that new background information will emerge, such 
as the creation of a personal reference, or that the requirements for processing data with an AI application will 
change.
Lastly, with regard to the split into risk areas, it should be noted that the Risk area: protection of personal 
data (PD) and the Risk area: protection of business-relevant information (BI) only differ slightly in terms 
of the potential measures to take listed there. Nevertheless, these topics are split into two risk areas because the 
protection requirements for personal and business-related data may differ significantly. If there are repetitions, 
these can be avoided by referring to existing documentation from another risk area.

144
Dimension: Data Protection

`;