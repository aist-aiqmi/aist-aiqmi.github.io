var toc_content = `Measure 10.3. Rigorous model evaluations 
Signatories commit to ensuring the execution of model evaluations with high scientific and technical rigour, 
defined as model evaluations having high internal validity and external validity, as well as appropriate 
levels of reproducibility and portability. Signatories may deviate from this level of rigour where 
appropriate, for example to facilitate preliminary and exploratory research, documenting these deviations 
in their Model Reports. 
 
Internal validity ensures model evaluation results represent the truth in the evaluation setting and are not 
due to methodological shortcomings. It may be shown by, for example: large enough sample sizes; 
appropriate use of random seeds; measuring statistical significance and statistical power; disclosure of 
environmental parameters used; controlling for confounding variables and mitigating spurious correlation; 
providing evidence of the absence of train-test contamination; preventing usage of test data in training (i.e. 
using train-test splits and respecting canary strings); re-running model evaluations multiple times under 
different conditions and in different environments, including varying individual parts of the model 
evaluation (e.g. the strength of prompts and safeguards); as well detailed inspection of trajectories and other 
outputs. 
 
External validity ensures model evaluation results can be used as a proxy for model behaviour in contexts 
outside of the evaluation environment. It may be shown by, for example, adequate integration of domain 
experts in the evaluation process; appropriate capability elicitation (see Measure 10.4); documenting 
environmental conditions in which the evaluation is run and the ways in which it diverges from the real-
world context; making use of properly held-out test sets. 
 
Reproducibility refers to the ability to obtain consistent model evaluation results using the same input data, 
computational methods, code, and evaluation conditions, allowing for other researchers and engineers to 
validate, reproduce or improve on model evaluation results. This may be shown, for example, by successful 
peer reviews or reproductions by other parties, facilitated through securely releasing appropriate amounts 
of model evaluation data (always taking into account proliferation risks); secure release of model evaluation 

DRAFT DOCUMENT 
 
43 
code and documentation of evaluation methodology, evaluation environment, computational environment, 
and elicitation methods. 
 
Portability refers to the ability of other researchers and engineers to consistently and seamlessly implement 
and assess model evaluations, through for example: building on top of appropriate APIs and evaluation 
standards (especially open source); keeping evaluations as model-agnostic as possible; facilitating model 
evaluation implementation in a privacy-preserving manner (e.g. without leaking additional information 
about a model to another party). 
 
In addition, Signatories commit to reporting the level of uncertainty in their results and the limitations of 
the methods used. Ultimately, from the combination of these measures, the Signatories aim to adhere to the 
quality standards of scientific peer review in machine learning and the natural and social sciences, aiming 
to have key results for the most severe risks reviewed as thoroughly as expected from a submission to a 
major machine learning conference or journal.  
 

`;