## Readme for Global Corp Project

Global Corp, a multinational manufacturer of products and goods, is embarking on implementing the Pyramid Analytics Platform to provide analytics across multiple departments.

<h2>User Population:</h2>

- Sales (Internal)
- Marketing (Internal)
- Finance (Internal)
- Product (Internal)
- After Sales (Internal)
- Group (Internal but External AD)
- Distributors (External but on Active Directory)
- Dealership (External and on dealer portal with separate AD)

**There are 25000 expected users of which 10% will be concurrent at any point it
time, across the world analytics peaks occur on Monday mornings and Friday
mornings.**

- The split of users is 60% from the Americas, 30% from Europe, and 10% Rest of the World
- 50% of the total user count comes from external users who need to authenticate
via a portal application.

The project aims to deliver an architectural solution to Global Corp based on information gathered during the discovery and research phases. 

Global Corp has a "Cloud-First" approach and is looking to deploy Pyramid on Kubernetes within
AWS.

<h2>Considerations and Assumptions:</h2>

- Disaster Recovery
- Data Latency
- Security of the environment, the pyramid application, the data, and the eco full system.
- All data (except external cloud vendors) is to be directly queried, that is, no data is to be
migrated from a governance perspective.
- Salesforce data may be replicated within Athena
- Data source mix
- Data source environment and target environment
- Cost and time
- Your approach should have minimal impact on other Pyramid teams but can include
limited support.
- The Windows connector service can only be installed on a Windows OS

<h2>Proposed Solution Architecture</h2>
<img src="images/GlobalCorp - Pyramid Analytics Arch-Architecture Overview.jpg">

<h2>User Authentication Flow</h2>

<img src="images/Global Corp Auth Flow.jpg">
