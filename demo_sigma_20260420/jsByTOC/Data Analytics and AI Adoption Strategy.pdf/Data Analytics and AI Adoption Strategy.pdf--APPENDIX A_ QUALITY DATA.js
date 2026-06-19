var toc_content = `APPENDIX A: QUALITY DATA
This appendix provides additional guidelines for 
improving the Department’s foundational data 
management to increase the quality and availability of 
relevant DoD data.  User needs and local requirements 
are the basis of data quality.  Therefore, Components 
and subordinate organizations will develop data quality 
implementation guidance and associated metrics.  
Since this appendix retains the VAULTIS framework, 
existing Component-level implementation plans based 
on the 2020 Data Strategy are still sound.  However, 
over time, Components will evolve their data 
management plans to align more closely with this 
Strategy.
As Components develop and implement their data 
quality plans, data sets targeted for improvement will 
be founded on metadata to allow for data search and 
discovery; prioritized for relevance and mission value; 
acted upon such that improvement efforts are 
appropriately resourced; monitored to measure and 
report quality levels on priority data sets across their 
lifecycles; and corrected through cyclical processes to 
continuously address quality degradation.
Two tools for use in data management planning are the 
data quality dimensions and the VAULTIS framework.  
These tools represent interrelated and mutually 
supporting concepts that apply across data’s lifecycle, 
from creation to disposal.  Poor quality data will 
inevitably undermine data trustworthiness, raise 
security concerns, and negate the utility of the VAULTIS 
framework.  Conversely, even high-quality data that 
does not align to the VAULTIS framework will be of 
limited value to analytical and AI efforts. 
19
DOD DATA, ANALYTICS, AND ARTIFICIAL INTELLIGENCE ADOPTION STRATEGY

1. DATA QUALITY DIMENSIONS
Data owners may categorize data sets at different levels of quality over time because of age, prioritization, initial 
condition, and other factors.  Therefore, data quality dimensions are relative, and owners will assess the 
dimensions across the data’s lifecycle.  The table below provides sample assessment questions for each dimension. 
20
DOD DATA, ANALYTICS, AND ARTIFICIAL INTELLIGENCE ADOPTION STRATEGY
APPENDIX A: QUALITY DATA
Dimension
Assessment Questions
Accuracy:  Data that correctly reflect proven, 
true values or the specified action, person, or 
entity. Accuracy includes data structure, 
content, and variability.

How frequently do values not align to their assigned
format?

How frequently do data values match ground truth?

How is error measured? Is it tolerable for the specified
purpose?
Completeness:  The data present at a specified 
time contain the expected information or 
statistics, as measured at the data set, row, or 
column level. 

Is there known data that would make the set more
complete?

Does the data set contain sufficient breadth of
information to contextualize the data for its purpose?

What fields in the data expect some null values? How
often are null values present?
Conformity:  Data sets follow agreed upon 
internal policies, standards, procedures, and 
architectural requirements.

Does the data’s format match the applicable
standard(s)?

Is the data set architecture published and available?

Are there database constraints implemented in
accordance with internal policies, standards, and
procedures to prevent erroneous input?
Consistency:  The degree to which a value is 
uniformly represented within and across data 
sets.

Are there other data sets that reference values in this
data set?

Are there discrepancies?
Uniqueness:  Ensures there is a one-to-one 
alignment between each observed event and 
the record that describes such an event.

Are there other Authoritative Data Sources that serve
the same function?

Are there duplicate records in this data set?
Integrity:  A data set’s pedigree, provenance, 
and lineage are known and aligned with 
relevant business rules.

Are there opportunities for data to be tampered with,
misreported, degraded, corrupted, poisoned, or
otherwise altered during the collection, storage,
processing, or transmission processes?

How often are data quality checks conducted to address
poor data quality?

Does the data cleaning process result in data that can be
trusted?
Timeliness:   Measures the time between an 
event occurring and the data’s availability for 
use.

How frequently do supported data consumers require
updates?

Does the data purpose require reduced latency?

`;