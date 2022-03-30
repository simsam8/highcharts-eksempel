# Passing information to machines: Introduction to Knowledge Representation & Reasoning

### Plan

- Symbolic vs sub-symbolic representation of information
- What is reasoning
- Why do we want to auromate reasoning
- Types of reasoning: deduction, abduction, induction
- How do we automate reasoning
- What are the limits?


## Symbolic vs sub-symbolic

- Symbolic: rules and domain knowledge are encoded by knowledge engineers and domain experts
- "To the computer, the 'meaning'"


## Symbolic representation

- Is a "language" that is unambiguous
- The "language" is defined by defining
	- an alphabet
	- a signature
	- a syntax
	- a semantic

### Alphabet

- is a non-empty set of symbols.
- Example: {\.+}, {1,2,3,567}


### Signature

- is a non-empty set of operators that can be performed
- Example:
	- addition is afunciton that can be performed over numbers
	- v (disjunction) is an operator that can be performed over two truth-value statements (propositions),
	- (missing symbol) (negation) is an operator that can be perfumed over one propostition

### Syntax

- The syntax is in effect a "grammar" that clearly defines what a well formed "sentence" is, in the language we are defining
- Example:
	- 2+3 is a well formed expression in math, while 3 + is not
	- p v q (disjunction) is a well formed expression in logic, while v p is not
	- (missing symbol) q is a well formed expression,


### Semantic

- Typically the expressions that can be built according to the grammar are split into a set of atomic symbols, elements of the alphabet, and a set of complex expressions built following the rules of the syntax.
- The semantics tells us, if we know the meaning of the alphabet symbols, how to interpret the meaning of the complex expressions
- It can be expressed as a set of rules, or by using tables, graphs, etc.


### Knowledge engineering

- Deciding what is important to represent
- Deciding which representation language should be used


## Sub-symbolic representation

- Phenomena are described using features
- Phenomena can be events, persons, concepts, things...
- This is also called factored representation
- Two phenomena described by the same features are distinguished by the different values they have for each feature


### Example
- Trekk er et sett av egenskaper som beskriver og skiller et objekt eller fenomen fra et annet


### Feature engineering

- Deciding what features are relevant
- Deciding which features should be used (are important)
- Deciding how to represent the features


### Who can do it?

- Knowledge representation is done by AI specialists in collaboration with domain experts (expert systems)
- Features engineering is done by AI specialists
- Feature values can be collected by any human and are often done by crowdsourcing


## What do we do with information?

- A computational agent is considered a knowledge based agent when it uses a process of reasoning over an internal representation of knowledge to decide what action to take.
- Reasoning is the process of considering something in a systematic and logical way.
- Example we are doing reasoning when we are considering events and observation together with rules collected from prevuous experience and knowledge to evaluate or justify other observations and events
- By doing reasoning an agent is, in a way, organising the information it has about its environment, in order to use it more effectively when pursuing its goals.
- To use information more effectively also means that the agent uses reasoning for the purpose of gaining new insights from the information it already has.


## Reasoning

- Logic reasoning can be seen as the process of distinguishing observations as cause and effect connected with some rule
- cause -> rule -> effect


### Deduction
- Cause and rule, find -> effect
- Deduce things from the things you know
- see Wumpus world in Russel and Norvig
- 

### Abduction
- Rule and effect, find -> cause
- Explaining why the effect happened


### Induction
- Cause and effect, find -> rule
- Example:


### Automated deduction and abduction
- Automated reasoning was one of the first sub-disciplines tackled in artificial intelligence. Deductive and abductive automated reasoning was applied very successfully in the development of expert systems which saw their rise in the 1980-1987 period.
- We use symbolic approaches to automate deduction and abduction


### Automated inference
- Different machine learning methods use different approaches
- Sub-symbolic: neural networks, linear methods
- Symbolic: inductive logic programming, exact learning
- Both: decision trees


## Limitations of automated reasoning
- Deduction: have you thought of everything?
	- Are the assumptions you are using as general as you think?
- Abduction: what if there is more than one explenation?
	- The more "expressive" the representation, the more computationally complex the program that implements the reasoning
	- Knowledge engineers and domain experts have to be used every time: expensive
	- Read more in pages 32- 42, link in modules


## Limitations of (supervised) machine learning
- What is supervised learning?
- Machine learning is concerned with the problem of improving the performance (of a program) on given tasks with respect to a performance measure, by using observations about the world
- In supervised machine learning the task on which performance is improved is specified as follows:
	- Given is a training set of input output pairs (X1, y1), (X2, y2),...,(Xn,yn)
	- Each of the yi are assumed to be generated by some unkown function y = f(X).
	- The task is to discover a function h


### Why h and not f?
- Can be that the examples on the training set are the observations from a stochastic process and the function f does not really exist outside of a particular set of instances. Example: will my kid be beautiful?
- It could be that we are not certain that the elements of X1 that are included in the pairs are sufficient to correctly identify y in every possible instance.
- In both of these cases we say that 


## Limitations of features

- A human would taste it and know it is neither an apple nor a plum
- A machine learning algorithm will necessarily label it as a plum or an apple


## Limitations of examples

- correlation not causation
- After establishing a correlation, a human would test for causation, by running experiments
- Example: prediction pneumonia risk project run in the mid 90's
- Task: prediction of probability of death for patients with pneumonia so that high-risk patients could be admitted to the hospital
- A curious rule was learned by the machine learning system: a history of asthma lowers the likelihood that a patient will die from pneumonia
- There could be examples that occur very infrequently, but make all the difference by completely invalidating the correlation
- This is called the black swan effect or the long tail problem


## Other limitations
- Many examples needed
- Cheap data set is not necessarily a good data set
- Historical data set describes the world as it was not as it is