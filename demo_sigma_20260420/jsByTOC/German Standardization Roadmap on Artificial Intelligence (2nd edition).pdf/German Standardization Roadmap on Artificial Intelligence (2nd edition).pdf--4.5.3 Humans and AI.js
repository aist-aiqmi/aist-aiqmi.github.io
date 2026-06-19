var toc_content = `ent types, the current voltage level of the analogue device 
is converted into a symbol {“0”, “1”, “invalid”} depending on 
the analogue voltage level and the defined voltage ranges for 
{“0”, “1”, “invalid”} is transformed. This process of type match­
ing (AD conversion) is called “coercion” and is performed 
automatically at the interface. As can be easily seen, there 
is a mapping rule for type matching in each direction with 
the two type parameters voltage level and voltage ranges. If 
all declared rules and axioms are observed, all forms can be 
continuously transformed into each other. The challenge here 
is to sufficiently declare all the required facts and transfor­
mation rules that must be adhered to or checked in order to 
maintain the flow of information. Based on the status quo, 
this leads on the one hand to the requirement for standards 
for declarative formats across models to establish semantic 
interoperability between models (Chapter 4.5.4, Need for 
Action 05-06). Furthermore, there is a need for standards for 
the representation of semantic characteristics of technical 
processes, especially involving AI-based components (Chap­
ter 4.5.4, Needs for Action 05-17, 05-07, 05-08)
 4.5.3   Humans and AI
 4.5.3.1  
General considerations 
In Germany, the foundation of the legal framework is formed 
by the Grundgesetz (Basic Law) and made more precise in 
more specific laws and ordinances. There is currently no 
concrete design for AI systems and the EU has submitted a 
proposal for design with the draft Artificial Intelligence Act 
(AI Act) (cf. Chapter 1.4). Furthermore, there are already EU 
publications such as the 2019 “ETHICS GUIDELINES FOR 
TRUSTWORTHY AI”, which also address the tension between 
fundamental rights and ethics in AI application. The guide­
lines state the three characteristics of lawful, ethical, and 
robust as the goal for trustworthy AI.
Technical standardization cannot answer questions about 
lawfulness and ethical principles, and the EU Ethics Guide­
lines also recognize that this is a political process of opin­
ion-forming. In a standardization roadmap, it is therefore 
necessary to present the dividing line between technical 
standardization and the formation of political opinion in a 
recognizable way. In the context of technical standardization, 
this debate is less interesting because, with the exception 
of product safety, humans have experienced only indirect 
effects. In the case of product safety, however, the focus was 
clearly on the objective of not harming people, and technical 
The availability of corresponding transformations, which can 
be classified and also checked by third parties with regard 
to their semantic content, is therefore of central importance 
in order to make different (AI) systems interoperable. This is 
emphasized by [302]. The requirements of the FAIR principles 
(Findable, Accessible, Interoperable, Reusable) regarding 
interoperability [303] are necessary for this, but not sufficient. 
In addition, due to the associated higher complexity of model 
handling, reliable automation of the transformation functions 
is required. Design patterns can increasingly be used as a 
basis for this purpose. This becomes even more important 
with the emergence of data spaces as highly scaled “dynamic 
and automated meeting points” of (AI) systems against the 
backdrop of “trustworthy AI”. This is also where a variety 
of interacting digital twins with individual capabilities and 
processes, typically provided by means of the administration 
shells, come together.
 4.5.2.2  
Requirements and challenges
The overarching challenge of “semantic interoperability” 
is found especially between heterogeneous technical or 
physical processes represented as complex, continuous time 
variables in the model. These variables and their character­
istic properties are declared axiomatically and rule-based, 
for example, in the submodels of an administration shell. 
In interoperations between administered models, there is a 
flow of information of values between instances, objects or 
processes. This flow of values is thus the hallmark of inter­
operability between models or systems. When this stability 
is disrupted, the sequence of relationships is broken, i.e., the 
semantic facts between the models can no longer be satis­
fied. Interoperation should be possible between all models of 
different types with given semantics (Chapter 4.5.4, Need for 
Action 05-07) This means that an interface between models 
always has two sides, a sender side and a receiver side. Both 
sides use different technologies but share semantics, i.e. they 
operate in different “languages” or technologies but with a 
common understanding of, for example, information transfer.
This duality of an interface will be shown with a simple 
example, the interoperability between analogue and digital 
devices. Each device in itself has implemented the concept 
of “information” with its own means. While information in 
the analogue device is represented as voltage, measured in 
volts, as a function of time, in the digital device information 
is represented as a logical symbol “0” or “1” independent of 
time. In case of interoperation between the devices of differ­
176 – German Standardization Roadmap on Artificial Intelligence · 2nd edition
CHAPTER 4 – KEY TOPICS

`;