export const questions = [
  // ─── Domain 1: Security & Risk Management ───────────────────────────────────
  {
    id: "d1q1",
    domain: 1,
    question: "A company is deciding whether to purchase cyber liability insurance for a risk that cannot be fully mitigated through technical controls. Which risk response strategy does this represent?",
    options: [
      "Risk avoidance",
      "Risk transference",
      "Risk acceptance",
      "Risk mitigation"
    ],
    correct: 1,
    explanation: "Purchasing insurance transfers the financial consequences of a risk to a third party (the insurer), which is the definition of risk transference. Risk avoidance means eliminating the activity that creates the risk, risk acceptance means acknowledging the risk without action, and risk mitigation involves implementing controls to reduce the risk's likelihood or impact."
  },
  {
    id: "d1q2",
    domain: 1,
    question: "An organization's annual loss expectancy (ALE) for a server failure is $50,000. A control that reduces the ALE to $20,000 costs $40,000 per year to implement. What is the correct conclusion?",
    options: [
      "The control should be implemented because it reduces risk by 60%.",
      "The control should not be implemented because its cost exceeds the risk reduction value.",
      "The control should be implemented because any reduction in ALE is worthwhile.",
      "More information is needed before a decision can be made."
    ],
    correct: 1,
    explanation: "The risk reduction value is $50,000 − $20,000 = $30,000, but the control costs $40,000, meaning the organization spends more than it saves. A sound security investment decision requires that the cost of a safeguard not exceed the value of protection it provides. Implementing a control purely because it reduces risk percentage ignores economic rationality."
  },
  {
    id: "d1q3",
    domain: 1,
    question: "Which of the following best describes the relationship between a threat, a vulnerability, and a risk?",
    options: [
      "A vulnerability exploits a threat to create a risk.",
      "A risk is the likelihood that a threat agent will exploit a vulnerability to cause harm.",
      "A threat and a vulnerability together define the impact of a risk.",
      "Risk equals the product of threat likelihood and asset value alone."
    ],
    correct: 1,
    explanation: "Risk is fundamentally the probability that a threat will exploit a vulnerability and the resulting impact. A threat is any potential danger, a vulnerability is a weakness, and a threat agent exploiting a vulnerability constitutes the risk scenario. Impact and asset value contribute to quantifying risk, but the core definition centers on likelihood of exploitation leading to harm."
  },
  {
    id: "d1q4",
    domain: 1,
    question: "A healthcare organization must comply with HIPAA, PCI DSS, and state privacy laws simultaneously. When requirements conflict, what is the best general approach?",
    options: [
      "Prioritize the most recent regulation, as it supersedes older ones.",
      "Comply with the regulation that imposes the strictest requirement in each area.",
      "Seek a legal waiver for conflicting regulations.",
      "Comply with the federal regulations only, as they preempt state law."
    ],
    correct: 1,
    explanation: "When multiple regulations overlap, organizations generally implement the strictest applicable requirement, which typically satisfies the less stringent ones simultaneously. Federal law does not always preempt state law — HIPAA explicitly allows states to enforce stricter privacy rules. Seeking waivers is rarely practical, and recency does not determine precedence in regulatory frameworks."
  },
  {
    id: "d1q5",
    domain: 1,
    question: "A security manager is establishing a data classification policy. Which factor is MOST critical when determining a data classification level?",
    options: [
      "The cost to store the data",
      "The potential impact to the organization if the data is disclosed, altered, or destroyed",
      "The age of the data",
      "The format in which the data is stored"
    ],
    correct: 1,
    explanation: "Classification levels are driven by the sensitivity and criticality of information — specifically what harm could result from unauthorized disclosure, modification, or loss. Storage cost, age, and format are operational considerations but do not determine the value or sensitivity of information to the organization or to affected individuals."
  },
  {
    id: "d1q6",
    domain: 1,
    question: "Which security governance model places ultimate accountability for information security with the board of directors and senior executives?",
    options: [
      "The COSO framework",
      "ISO/IEC 27001",
      "Enterprise security governance",
      "The Bell-LaPadula model"
    ],
    correct: 2,
    explanation: "Enterprise security governance establishes that accountability for security begins at the top of the organization — the board and C-suite — and flows downward. COSO and ISO/IEC 27001 are frameworks for internal control and information security management systems, respectively. Bell-LaPadula is a confidentiality-focused access control model, not a governance framework."
  },
  {
    id: "d1q7",
    domain: 1,
    question: "An organization is conducting a qualitative risk assessment. Which of the following best characterizes this approach compared to quantitative assessment?",
    options: [
      "Qualitative assessments produce exact monetary values for risk, whereas quantitative assessments use descriptive ratings.",
      "Qualitative assessments use judgment-based ratings such as High/Medium/Low and require less data than quantitative methods.",
      "Qualitative assessments are always more accurate because they rely on expert opinion.",
      "Qualitative assessments require calculation of ALE and SLE."
    ],
    correct: 1,
    explanation: "Qualitative risk assessment uses subjective, descriptive scales (e.g., High/Medium/Low) and expert judgment rather than precise financial figures, making it faster to perform but less exact. Quantitative assessment uses numerical data to compute metrics like SLE (Single Loss Expectancy) and ALE. Neither approach is inherently more accurate — each has trade-offs in cost, time, and precision."
  },
  {
    id: "d1q8",
    domain: 1,
    question: "A new CISO wants to ensure that security policies align with business objectives. Which document should serve as the primary foundation for all security policies?",
    options: [
      "The IT security standard",
      "The organization's mission and business strategy",
      "NIST SP 800-53",
      "The most recent penetration test report"
    ],
    correct: 1,
    explanation: "Security policies must be grounded in and support the organization's overall mission, goals, and business strategy — security exists to enable and protect the business, not the reverse. NIST SP 800-53 is a valuable control catalog but is a tool, not a foundational business document. Penetration test reports address tactical vulnerabilities, not strategic alignment."
  },
  {
    id: "d1q9",
    domain: 1,
    question: "Under the ISC2 Code of Ethics, which canon takes the highest priority when canons conflict?",
    options: [
      "Protect society, the common good, necessary public trust and confidence, and the infrastructure.",
      "Act honorably, honestly, justly, responsibly, and legally.",
      "Provide diligent and competent service to principals.",
      "Advance and protect the profession."
    ],
    correct: 0,
    explanation: "The ISC2 Code of Ethics canons are listed in priority order. Protecting society and the common good is the first and highest-priority canon, meaning that if a conflict arises between protecting society and serving an employer, the security professional must prioritize societal protection. The canons that follow — honesty, service to principals, and advancing the profession — carry progressively lower priority."
  },
  {
    id: "d1q10",
    domain: 1,
    question: "A company outsources its payroll processing to a third-party vendor. Which statement best describes the company's responsibility for the security of that payroll data?",
    options: [
      "The responsibility fully transfers to the vendor once data is shared.",
      "The company retains ultimate accountability for protecting the data, regardless of outsourcing.",
      "The vendor becomes the data owner and assumes full legal liability.",
      "Responsibility is shared equally and neither party bears more accountability than the other."
    ],
    correct: 1,
    explanation: "Outsourcing a function transfers operational tasks but not accountability. The data owner (the company) remains ultimately accountable for the security and privacy of its data even when a third party processes it. Contracts and SLAs can establish vendor obligations, but regulators and affected individuals will hold the originating organization responsible for breaches or misuse."
  },

  // ─── Domain 2: Asset Security ────────────────────────────────────────────────
  {
    id: "d2q1",
    domain: 2,
    question: "A company is decommissioning old hard drives that contained classified financial data. Which disposal method provides the highest assurance that data cannot be recovered?",
    options: [
      "Deleting all files and formatting the drives",
      "Degaussing the drives",
      "Physical destruction of the drive platters",
      "Overwriting the drives with a single pass of zeros"
    ],
    correct: 2,
    explanation: "Physical destruction (shredding, incineration, or disintegration of drive platters) is the only method that provides absolute assurance data cannot be recovered, making it appropriate for highly sensitive or classified data. Degaussing is effective for magnetic media but may not affect SSDs. Formatting and single-pass overwriting leave data potentially recoverable with forensic tools."
  },
  {
    id: "d2q2",
    domain: 2,
    question: "Who is responsible for defining the classification level and access requirements for a dataset in an organization?",
    options: [
      "The data custodian",
      "The data owner",
      "The system administrator",
      "The security officer"
    ],
    correct: 1,
    explanation: "The data owner — typically a senior business manager responsible for the information — has the authority and accountability to determine how data should be classified and who should have access. The data custodian implements the owner's directives (e.g., configuring access controls, performing backups). Administrators and security officers support and enforce policy but do not define classification."
  },
  {
    id: "d2q3",
    domain: 2,
    question: "A software company stores source code, customer contracts, and publicly available marketing materials on the same file server. Which approach best reflects sound data classification practice?",
    options: [
      "Classify the entire server at the highest classification level present.",
      "Apply individual classification labels to each data type based on its sensitivity.",
      "Leave public data unclassified and classify only source code and contracts together.",
      "Store all data in the cloud to simplify classification requirements."
    ],
    correct: 1,
    explanation: "Data classification should be applied at the granular data-object level so that appropriate controls match each asset's actual sensitivity. Classifying everything at the highest level results in unnecessary overhead and restricted access for public materials. Grouping all non-public data together ignores the different risk profiles of source code versus contracts. Location (cloud vs. on-premises) does not determine classification."
  },
  {
    id: "d2q4",
    domain: 2,
    question: "An organization wants to ensure that sensitive data in its databases cannot be read by unauthorized database administrators. Which technique is MOST effective for this purpose?",
    options: [
      "Database activity monitoring",
      "Role-based access control on database objects",
      "Transparent data encryption",
      "Column-level encryption with keys held outside the database"
    ],
    correct: 3,
    explanation: "Column-level encryption with keys managed outside the database (e.g., in an HSM or separate key management service) prevents even privileged DBAs from reading sensitive data in plaintext, because they lack the decryption keys. Transparent data encryption protects data at rest from physical theft but is typically transparent to authenticated users including DBAs. RBAC and activity monitoring address access and auditing but do not prevent a DBA from reading data they have query access to."
  },
  {
    id: "d2q5",
    domain: 2,
    question: "Which data state requires encryption to be MOST critically addressed to protect sensitive information transmitted between a web application and its users?",
    options: [
      "Data at rest",
      "Data in transit",
      "Data in use",
      "Data in archive"
    ],
    correct: 1,
    explanation: "Data in transit — moving across a network — is the state most exposed to interception (e.g., man-in-the-middle attacks), making encryption via protocols such as TLS essential. Data at rest and data in archive also require protection, but network transmission exposes data to the widest and least-controlled attack surface. Data in use (in memory) is hardest to protect and is addressed by different controls such as trusted execution environments."
  },
  {
    id: "d2q6",
    domain: 2,
    question: "A healthcare organization wants to share patient data with a research institution for a study. Which technique allows the research institution to perform analysis without exposing individual patient identities?",
    options: [
      "Tokenization",
      "Anonymization",
      "Encryption",
      "Access control lists"
    ],
    correct: 1,
    explanation: "Anonymization irreversibly removes or transforms identifying information so that individuals cannot be re-identified, making data suitable for sharing with external research parties. Tokenization replaces sensitive values with tokens but maintains a lookup table allowing re-identification by the token holder. Encryption still contains the original data and can be decrypted. ACLs restrict who accesses data but do not protect identity once access is granted."
  },
  {
    id: "d2q7",
    domain: 2,
    question: "A company's asset inventory shows 200 laptops, but only 180 are currently issued to employees. Which security concern does this discrepancy MOST directly indicate?",
    options: [
      "A configuration management failure",
      "A potential theft or loss of assets that may contain sensitive data",
      "A software licensing compliance issue",
      "An identity and access management gap"
    ],
    correct: 1,
    explanation: "An inventory count lower than expected for physical assets most directly raises concerns about unaccounted-for devices that may have been lost or stolen, potentially exposing sensitive data stored on them. While configuration management and licensing are related concerns, the primary and immediate security risk from missing physical assets is data exposure. IAM gaps would manifest differently, in user account discrepancies rather than hardware counts."
  },
  {
    id: "d2q8",
    domain: 2,
    question: "When must an organization consider data remanence as a security concern?",
    options: [
      "When transmitting data over an encrypted channel",
      "When repurposing or disposing of storage media that held sensitive data",
      "When archiving data to cold storage",
      "When backing up data to a cloud provider"
    ],
    correct: 1,
    explanation: "Data remanence refers to residual data that remains on storage media after deletion or formatting. It becomes a critical concern when media is being repurposed (reassigned to another user) or disposed of, as inadequate sanitization can allow recovery of sensitive information. Encrypted transmission, archiving, and cloud backup do not inherently create remanence risks — remanence is a physical media concern tied to the end-of-life or reassignment of storage devices."
  },
  {
    id: "d2q9",
    domain: 2,
    question: "An organization classifies data as Public, Internal, Confidential, and Restricted. An employee finds a document with no classification label. What is the BEST course of action?",
    options: [
      "Treat it as Public since it has no label.",
      "Treat it at the highest classification level until the owner reviews and classifies it.",
      "Delete the document to avoid risk.",
      "Ask the IT department to classify it based on where it is stored."
    ],
    correct: 1,
    explanation: "Security best practice is to treat unclassified documents at the most restrictive level until proper classification is assigned by the data owner, preventing inadvertent exposure of potentially sensitive information. Assuming Public classification risks exposing sensitive data. Deleting an unowned document could destroy important business records. Storage location alone does not determine classification — the data owner's judgment is required."
  },
  {
    id: "d2q10",
    domain: 2,
    question: "Which concept describes the legal and documented chain of possession for digital evidence to ensure it is admissible in court?",
    options: [
      "Data provenance",
      "Chain of custody",
      "Data lineage",
      "Evidence integrity"
    ],
    correct: 1,
    explanation: "Chain of custody documents every person who has handled evidence and every transfer of possession, establishing that evidence has not been tampered with — a prerequisite for legal admissibility. Data provenance and data lineage describe the origin and movement of data in analytics/data management contexts, not legal evidence handling. Evidence integrity is related but is the property that chain of custody helps prove, not the process itself."
  },

  // ─── Domain 3: Security Architecture & Engineering ───────────────────────────
  {
    id: "d3q1",
    domain: 3,
    question: "A system is designed so that no single component failure can bring down the entire system, and each component assumes all others may be compromised. Which security principle does this BEST represent?",
    options: [
      "Defense in depth",
      "Least privilege",
      "Fail secure",
      "Zero trust architecture"
    ],
    correct: 3,
    explanation: "Zero trust architecture operates on the principle of 'never trust, always verify' — every component assumes that others may be compromised and requires verification before granting access, eliminating the concept of a trusted internal network. Defense in depth involves layered controls but does not assume peer compromise. Least privilege limits permissions. Fail secure describes behavior during failure, not architecture-wide distrust."
  },
  {
    id: "d3q2",
    domain: 3,
    question: "A security architect is designing a system that must maintain separation between user-level processes and operating system kernel functions. Which security architecture concept is being applied?",
    options: [
      "Security kernel and reference monitor",
      "Process isolation and rings of protection",
      "Trusted computing base",
      "Address Space Layout Randomization"
    ],
    correct: 1,
    explanation: "Rings of protection (privilege rings) separate operating modes — typically kernel mode (ring 0) from user mode (ring 3) — ensuring that user processes cannot directly access privileged OS functions without validation. Process isolation prevents one process from affecting another's memory space. The reference monitor and TCB are related concepts but describe the policy enforcement mechanism and the sum of all protection mechanisms, respectively. ASLR is a memory protection technique, not an architectural separation model."
  },
  {
    id: "d3q3",
    domain: 3,
    question: "An application uses a cryptographic algorithm where the same key is used for both encryption and decryption. What type of cryptography does this represent, and what is its primary operational challenge?",
    options: [
      "Asymmetric cryptography; managing public key infrastructure",
      "Symmetric cryptography; secure key distribution and management at scale",
      "Hashing; collision resistance",
      "Hybrid cryptography; combining key sizes"
    ],
    correct: 1,
    explanation: "Symmetric (or secret-key) cryptography uses the same key for both operations, making it fast and efficient but creating a key distribution problem — both parties must securely exchange the shared secret before communicating. Asymmetric cryptography uses key pairs and solves distribution but is computationally slower. Hashing is a one-way function, not encryption. Hybrid cryptography combines both types to leverage their respective strengths."
  },
  {
    id: "d3q4",
    domain: 3,
    question: "Which attack does salting a password hash MOST directly prevent?",
    options: [
      "Brute-force attacks against a single account",
      "Rainbow table attacks using precomputed hash values",
      "Man-in-the-middle interception of the hash during transmission",
      "Replay attacks using captured authentication tokens"
    ],
    correct: 1,
    explanation: "A salt is a random value added to a password before hashing, making each hash unique even for identical passwords. This directly defeats rainbow table attacks, which rely on precomputed hash-to-password mappings — salted hashes are not present in precomputed tables. Salting does not prevent brute-force attempts against a single account, nor does it address network interception or replay attacks, which require different controls."
  },
  {
    id: "d3q5",
    domain: 3,
    question: "A developer argues that security through obscurity — keeping an algorithm secret — is sufficient protection for a proprietary encryption scheme. How should a security architect respond?",
    options: [
      "Agree, because proprietary algorithms are harder to attack than public ones.",
      "Disagree; Kerckhoffs's principle states that a system should be secure even if everything about it except the key is public knowledge.",
      "Agree, as long as the algorithm is not published in academic papers.",
      "Disagree, because obscurity increases attack surface."
    ],
    correct: 1,
    explanation: "Kerckhoffs's principle holds that the security of a cryptographic system should rely solely on the secrecy of the key, not on the secrecy of the algorithm. Proprietary, unreviewed algorithms are more likely to contain undiscovered flaws than publicly vetted ones — obscurity provides a false sense of security. Obscurity does not inherently increase attack surface, but it does reduce assurance because the algorithm cannot be peer-reviewed."
  },
  {
    id: "d3q6",
    domain: 3,
    question: "A web application encodes all user input before rendering it in the browser. Which vulnerability is this control MOST directly preventing?",
    options: [
      "SQL injection",
      "Cross-site scripting (XSS)",
      "Cross-site request forgery (CSRF)",
      "Buffer overflow"
    ],
    correct: 1,
    explanation: "Output encoding converts user-supplied data into a safe representation before rendering in a browser (e.g., converting '<' to '&lt;'), directly preventing the browser from executing injected scripts — the mechanism of XSS attacks. SQL injection is prevented by parameterized queries, not output encoding. CSRF is mitigated by tokens. Buffer overflows are a memory safety issue addressed by input length validation and safe coding practices."
  },
  {
    id: "d3q7",
    domain: 3,
    question: "An organization is evaluating the use of a Trusted Platform Module (TPM). Which capability does a TPM PRIMARILY provide?",
    options: [
      "Network traffic encryption between endpoints",
      "Hardware-based storage of cryptographic keys and platform integrity measurement",
      "User authentication via biometrics",
      "Real-time threat detection and response"
    ],
    correct: 1,
    explanation: "A TPM is a dedicated hardware security chip that securely generates, stores, and manages cryptographic keys and provides platform integrity measurements (via Platform Configuration Registers) used in secure boot processes. It does not encrypt network traffic — that is handled by protocols like TLS. TPMs do not perform biometric authentication or threat detection; those require separate hardware and software."
  },
  {
    id: "d3q8",
    domain: 3,
    question: "In a Common Criteria evaluation, what does an Evaluation Assurance Level (EAL) measure?",
    options: [
      "The number of vulnerabilities found during testing",
      "The rigor and depth of the evaluation process used to assess a product's security claims",
      "The encryption strength of the product being evaluated",
      "The compliance of the product with a specific regulation"
    ],
    correct: 1,
    explanation: "EAL ratings (EAL1 through EAL7) reflect the depth and rigor of the evaluation methodology — how thoroughly the product was tested and analyzed, not the product's inherent security capabilities. A higher EAL means a more thorough evaluation process was conducted, not necessarily a more secure product. EALs are not tied to encryption strength, vulnerability counts, or regulatory compliance."
  },
  {
    id: "d3q9",
    domain: 3,
    question: "A database is configured so that secret-level users can read top-secret data but cannot write to lower-classification objects. Which access control model does this violate?",
    options: [
      "Biba integrity model",
      "Bell-LaPadula confidentiality model",
      "Clark-Wilson model",
      "Brewer-Nash (Chinese Wall) model"
    ],
    correct: 1,
    explanation: "The Bell-LaPadula model enforces confidentiality with two rules: 'no read up' (subjects cannot read above their clearance) and 'no write down' (subjects cannot write to objects below their classification) to prevent data leakage from high to low. Allowing a secret-level user to read top-secret data violates 'no read up.' Biba addresses integrity, Clark-Wilson enforces well-formed transactions, and Brewer-Nash prevents conflicts of interest."
  },
  {
    id: "d3q10",
    domain: 3,
    question: "An organization deploys a system where all access decisions are mediated by a single enforcement mechanism that is small, verifiable, and always invoked. This mechanism is BEST described as:",
    options: [
      "A security information and event management (SIEM) system",
      "A reference monitor",
      "A jump server (bastion host)",
      "A hardware security module (HSM)"
    ],
    correct: 1,
    explanation: "A reference monitor is a conceptual access control mechanism that mediates all access between subjects and objects, is always invoked (complete mediation), is tamper-resistant, and is small enough to be verified (analyzable). These are the three properties required of a reference monitor implementation. A SIEM monitors and correlates events. A jump server provides controlled access to a network segment. An HSM protects cryptographic keys and operations."
  },

  // ─── Domain 4: Network Security ──────────────────────────────────────────────
  {
    id: "d4q1",
    domain: 4,
    question: "A company places its web servers in a network segment that is separated from both the internet and the internal corporate network by firewalls. What is this network segment called, and what is its primary purpose?",
    options: [
      "A VLAN, used to improve network performance by segmenting broadcast domains",
      "A DMZ (demilitarized zone), used to host publicly accessible services while protecting the internal network",
      "A dark net, used to conceal server locations from external attackers",
      "A honeynet, used to detect and analyze attacker behavior"
    ],
    correct: 1,
    explanation: "A DMZ is a network zone positioned between the public internet and the internal private network, hosting internet-facing services (web servers, mail gateways) so that a breach of those services does not grant direct access to internal systems. VLANs are logical network segments used for broadcast isolation, not specifically for external service hosting. Dark nets and honeynets serve deception and research purposes."
  },
  {
    id: "d4q2",
    domain: 4,
    question: "A network administrator notices that packets are arriving at a firewall with internal IP source addresses originating from outside the network. Which attack does this indicate, and what control mitigates it?",
    options: [
      "ARP spoofing; dynamic ARP inspection",
      "IP spoofing; ingress/egress filtering (RFC 2827)",
      "DNS poisoning; DNSSEC",
      "BGP hijacking; route filtering and RPKI"
    ],
    correct: 1,
    explanation: "Packets appearing from outside the network with internal source IP addresses are a hallmark of IP spoofing. Ingress filtering (dropping inbound packets with source addresses that should not originate externally) and egress filtering (dropping outbound packets with non-internal source addresses) per RFC 2827 directly mitigate this. ARP spoofing operates at layer 2 within a LAN. DNS poisoning corrupts name resolution. BGP hijacking involves routing table manipulation."
  },
  {
    id: "d4q3",
    domain: 4,
    question: "An attacker sends an overwhelming volume of SYN packets to a server, exhausting its connection table without completing the three-way handshake. Which attack is this, and which mitigation is MOST effective?",
    options: [
      "UDP flood attack; rate limiting",
      "SYN flood attack; SYN cookies",
      "Smurf attack; disabling directed broadcast",
      "Fraggle attack; blocking UDP echo requests"
    ],
    correct: 1,
    explanation: "A SYN flood exploits TCP's three-way handshake by sending large numbers of SYN requests and never completing the handshake, consuming server-side half-open connection state. SYN cookies eliminate the need for the server to store half-open connection state — the server encodes connection info in the SYN-ACK sequence number — making the attack ineffective. Rate limiting helps but is less targeted. Smurf and Fraggle are amplification attacks using ICMP and UDP broadcast."
  },
  {
    id: "d4q4",
    domain: 4,
    question: "Which type of firewall is MOST capable of detecting and blocking application-layer attacks such as SQL injection attempts in HTTP traffic?",
    options: [
      "Packet filtering firewall",
      "Stateful inspection firewall",
      "Web application firewall (WAF)",
      "Circuit-level gateway"
    ],
    correct: 2,
    explanation: "A WAF operates at OSI layer 7 and can inspect, parse, and filter HTTP/HTTPS application content, making it able to detect patterns associated with SQL injection, XSS, and other application-layer attacks. Packet filtering operates at layers 3–4 and inspects headers only. Stateful inspection tracks connection state but still works at the network/transport layer. A circuit-level gateway validates TCP handshakes at the session layer without inspecting application payload."
  },
  {
    id: "d4q5",
    domain: 4,
    question: "A security team discovers that DNS responses from their server are being corrupted, redirecting users to fraudulent websites. Which protocol provides cryptographic authentication of DNS responses to prevent this attack?",
    options: [
      "DNSSEC",
      "DNS over HTTPS (DoH)",
      "SPF records",
      "DANE (DNS-based Authentication of Named Entities)"
    ],
    correct: 0,
    explanation: "DNSSEC adds cryptographic signatures to DNS records, allowing resolvers to verify that responses are authentic and have not been tampered with — directly preventing DNS cache poisoning and response forgery. DNS over HTTPS encrypts DNS queries in transit for privacy but does not authenticate record integrity. SPF is an email sender validation mechanism. DANE binds TLS certificates to DNS records but relies on DNSSEC as its foundation."
  },
  {
    id: "d4q6",
    domain: 4,
    question: "A company wants remote employees to securely access internal resources over the internet. The chosen solution should create an encrypted tunnel and authenticate both the device and the user. Which technology is MOST appropriate?",
    options: [
      "SSL/TLS applied directly to each application",
      "IPsec VPN with certificate-based mutual authentication",
      "SSH tunneling for all traffic",
      "HTTPS with a corporate proxy"
    ],
    correct: 1,
    explanation: "IPsec VPN provides a network-layer encrypted tunnel for all traffic and supports mutual authentication via digital certificates (authenticating both device and server), satisfying both requirements. Applying TLS per application is inconsistent and misses non-HTTPS traffic. SSH tunneling is application-specific and not designed for enterprise-wide remote access. An HTTPS proxy does not encrypt traffic between the remote device and the proxy and does not authenticate devices."
  },
  {
    id: "d4q7",
    domain: 4,
    question: "An attacker positions themselves between a client and a server, intercepting and potentially altering communications without either party's knowledge. Which attack is this, and which control provides the BEST defense?",
    options: [
      "Session hijacking; multi-factor authentication",
      "Man-in-the-middle (MitM) attack; mutual TLS authentication with certificate validation",
      "Replay attack; timestamp-based tokens",
      "Eavesdropping; network segmentation"
    ],
    correct: 1,
    explanation: "A man-in-the-middle attack involves secretly intercepting and potentially altering communications. Mutual TLS (mTLS) requires both parties to authenticate with certificates, and strict certificate validation ensures clients are communicating with the legitimate server — eliminating the attacker's ability to impersonate either party. MFA addresses authentication but not interception. Timestamp tokens prevent replays. Network segmentation limits exposure but does not prevent MitM on allowed paths."
  },
  {
    id: "d4q8",
    domain: 4,
    question: "Which wireless security protocol is currently recommended for enterprise WLANs to provide the strongest protection against credential-based attacks?",
    options: [
      "WEP",
      "WPA2-Personal with AES",
      "WPA3-Enterprise",
      "WPA2-Enterprise with TKIP"
    ],
    correct: 2,
    explanation: "WPA3-Enterprise provides the strongest current wireless security, incorporating 192-bit cryptographic strength (using GCMP-256 and HMAC-SHA384), Simultaneous Authentication of Equals (SAE), and protection against offline dictionary attacks. WEP is broken and deprecated. WPA2-Personal uses a shared key vulnerable to offline attacks. WPA2-Enterprise is acceptable but TKIP is deprecated, and WPA3 provides meaningfully stronger guarantees."
  },
  {
    id: "d4q9",
    domain: 4,
    question: "An intrusion detection system (IDS) generates a large number of alerts for traffic that is subsequently confirmed as legitimate. What type of error is this, and what is its primary risk?",
    options: [
      "False negative; attackers go undetected",
      "False positive; legitimate activity may be blocked or analyst fatigue may cause real alerts to be missed",
      "True positive; the IDS is working correctly",
      "True negative; no action is required"
    ],
    correct: 1,
    explanation: "A false positive occurs when the IDS flags legitimate activity as malicious. The primary risks are operational disruption (if the IDS or IPS blocks the traffic) and alert fatigue, where analysts become desensitized to a high volume of false alerts and miss genuine attack indicators. False negatives are the opposite — real attacks are missed. True positives and true negatives represent correct IDS behavior."
  },
  {
    id: "d4q10",
    domain: 4,
    question: "An organization wants to ensure that network traffic between its internal subnets is inspected and controlled, not just traffic entering and leaving the network perimeter. Which architectural approach achieves this?",
    options: [
      "Deploying a perimeter firewall with deep packet inspection",
      "Implementing microsegmentation with internal firewalls or software-defined networking policies",
      "Using a unified threat management (UTM) device at the internet gateway",
      "Enabling port security on all network switches"
    ],
    correct: 1,
    explanation: "Microsegmentation divides the internal network into fine-grained zones with policy enforcement between them, ensuring east-west (lateral) traffic is inspected and controlled — not just north-south perimeter traffic. A perimeter firewall only inspects traffic crossing the network boundary. UTM devices typically also focus on perimeter protection. Port security controls which devices can connect to switch ports but does not inspect application-layer traffic between segments."
  },

  // ─── Domain 5: Identity & Access Management ──────────────────────────────────
  {
    id: "d5q1",
    domain: 5,
    question: "A user is granted access to a file because they belong to the 'Finance' group, which has read permissions on the file. No individual permission is assigned to the user. Which access control model is being used?",
    options: [
      "Mandatory Access Control (MAC)",
      "Discretionary Access Control (DAC)",
      "Role-Based Access Control (RBAC)",
      "Attribute-Based Access Control (ABAC)"
    ],
    correct: 2,
    explanation: "RBAC assigns permissions to roles (such as 'Finance'), and users inherit permissions by being assigned to those roles. This simplifies administration in organizations where job functions map naturally to permission sets. MAC uses security labels and clearances set by a central authority. DAC allows resource owners to grant permissions directly to individuals. ABAC makes decisions based on combinations of attributes (user, resource, environment) rather than role membership alone."
  },
  {
    id: "d5q2",
    domain: 5,
    question: "An employee who moved from the finance department to HR still retains all their finance system permissions six months later. Which security principle has been violated?",
    options: [
      "Separation of duties",
      "Least privilege through access recertification",
      "Need to know",
      "Non-repudiation"
    ],
    correct: 1,
    explanation: "This describes privilege creep — accumulated access rights that are no longer appropriate. The principle of least privilege requires that access be limited to what is necessary for current job functions and reviewed periodically (access recertification) to remove stale entitlements. Separation of duties would be violated if the same user could approve their own transactions. Need to know is related but least privilege + recertification specifically addresses accumulated, outdated access."
  },
  {
    id: "d5q3",
    domain: 5,
    question: "A company wants to allow employees to log in to multiple cloud applications using their corporate identity without re-authenticating to each application. Which technology enables this?",
    options: [
      "Multi-factor authentication (MFA)",
      "Federated identity with SAML or OpenID Connect",
      "Lightweight Directory Access Protocol (LDAP)",
      "Kerberos within the internal network"
    ],
    correct: 1,
    explanation: "Federated identity management using standards like SAML 2.0 or OpenID Connect allows users to authenticate once with their Identity Provider (IdP) and access multiple Service Providers (cloud applications) without re-authenticating — this is Single Sign-On (SSO) across organizational boundaries. LDAP is a directory protocol for internal systems. Kerberos provides SSO within a Windows domain but not across cloud services. MFA strengthens authentication but does not itself provide cross-application SSO."
  },
  {
    id: "d5q4",
    domain: 5,
    question: "A financial institution requires that no single employee can both initiate and approve a wire transfer. Which access control principle does this enforce?",
    options: [
      "Least privilege",
      "Separation of duties (SoD)",
      "Need to know",
      "Defense in depth"
    ],
    correct: 1,
    explanation: "Separation of duties requires that sensitive or high-risk tasks be divided among multiple individuals so that no one person has end-to-end control, reducing the risk of fraud and error. Requiring a different person to approve what another initiates is the textbook SoD control in financial processes. Least privilege limits permissions to job requirements. Need to know limits information access. Defense in depth is a layered security architecture principle."
  },
  {
    id: "d5q5",
    domain: 5,
    question: "Which biometric error rate represents the point at which the false acceptance rate equals the false rejection rate, and is used to compare biometric system performance?",
    options: [
      "False Acceptance Rate (FAR)",
      "False Rejection Rate (FRR)",
      "Crossover Error Rate (CER)",
      "Equal Error Rate Type II"
    ],
    correct: 2,
    explanation: "The Crossover Error Rate (CER), also called Equal Error Rate (EER), is the point where FAR equals FRR on a sensitivity curve. It is used as a single comparative metric — a lower CER indicates a more accurate biometric system. FAR measures how often impostors are wrongly accepted; FRR measures how often legitimate users are wrongly rejected. These are the two error types, while CER is the comparison metric derived from them."
  },
  {
    id: "d5q6",
    domain: 5,
    question: "An organization implements a system where access decisions are made dynamically based on the user's department, device health posture, and time of day. Which access control model does this BEST represent?",
    options: [
      "Role-Based Access Control (RBAC)",
      "Rule-Based Access Control",
      "Attribute-Based Access Control (ABAC)",
      "Mandatory Access Control (MAC)"
    ],
    correct: 2,
    explanation: "ABAC makes access decisions by evaluating a combination of subject attributes (department), resource attributes, and environmental attributes (time of day, device health). This provides fine-grained, context-aware access control that goes beyond role membership alone. RBAC uses roles, not multi-attribute combinations. Rule-based access control applies fixed rules (e.g., ACL conditions) but not dynamic attribute evaluation. MAC uses security labels assigned by a central authority."
  },
  {
    id: "d5q7",
    domain: 5,
    question: "A privileged access management (PAM) solution automatically checks out credentials for administrative sessions and records all actions performed. Which risk does this MOST directly mitigate?",
    options: [
      "The risk of phishing attacks against administrators",
      "The risk of insider threat and unauthorized privileged actions going undetected",
      "The risk of weak passwords used by regular users",
      "The risk of malware infecting administrative workstations"
    ],
    correct: 1,
    explanation: "PAM solutions protect privileged credentials, enforce just-in-time access, and record all privileged sessions — directly addressing insider threat by ensuring that privileged actions are attributable, reviewable, and time-limited. Phishing risks are addressed by MFA and security awareness training. Regular user password strength is managed by password policies, not PAM. Malware on administrative workstations requires endpoint protection controls."
  },
  {
    id: "d5q8",
    domain: 5,
    question: "A user submits a username and password (something they know) and receives an OTP on their phone (something they have). After providing both, access is granted. How many authentication factors have been used?",
    options: [
      "One factor — the OTP and password are both knowledge factors",
      "Two factors — knowledge (password) and possession (phone/OTP)",
      "Three factors — username, password, and OTP each count separately",
      "Two factors — both the password and OTP are possession factors"
    ],
    correct: 1,
    explanation: "Multi-factor authentication counts distinct factor categories, not individual credentials. A password is a knowledge factor (something you know) and an OTP delivered to a phone is a possession factor (something you have). A username is an identifier, not an authentication factor. Two different categories are used here, making this genuine two-factor authentication. An OTP is not a knowledge factor — the user does not know it in advance."
  },
  {
    id: "d5q9",
    domain: 5,
    question: "An organization uses OAuth 2.0 to allow a third-party application to access user data from their platform. What role does the authorization server play in this flow?",
    options: [
      "It stores and manages user passwords on behalf of the third-party app.",
      "It authenticates the user and issues access tokens that the third-party app uses to access protected resources.",
      "It acts as a proxy, forwarding all API requests on behalf of the user.",
      "It verifies the third-party app's code for security vulnerabilities before allowing access."
    ],
    correct: 1,
    explanation: "In OAuth 2.0, the authorization server authenticates the resource owner (user), obtains their consent, and issues access tokens to the client (third-party app). The app then presents these tokens to the resource server to access protected data. The resource owner's password is never shared with the third-party app — that is a key design goal of OAuth. The authorization server does not proxy requests or analyze application code."
  },
  {
    id: "d5q10",
    domain: 5,
    question: "When provisioning access for a new employee, which principle ensures they receive only the minimum access rights necessary to perform their specific job duties from day one?",
    options: [
      "Default deny",
      "Least privilege",
      "Separation of duties",
      "Need to know"
    ],
    correct: 1,
    explanation: "The principle of least privilege dictates that subjects should be granted only the minimum access rights and permissions required for their defined roles and tasks. Applied at provisioning, it prevents new accounts from being over-permissioned. Default deny is a firewall/access control policy stance. Separation of duties distributes tasks among multiple people. Need to know specifically applies to access to information based on job requirements and is conceptually similar but typically used in the context of classified or sensitive information."
  },

  // ─── Domain 6: Security Assessment & Testing ─────────────────────────────────
  {
    id: "d6q1",
    domain: 6,
    question: "A penetration tester has been given full documentation about the target environment — network diagrams, system configurations, and source code. Which type of penetration test is being performed?",
    options: [
      "Black box (zero-knowledge) test",
      "Gray box test",
      "White box (crystal box) test",
      "Red team assessment"
    ],
    correct: 2,
    explanation: "A white box (or crystal/clear box) penetration test provides the tester with complete knowledge of the target environment, enabling thorough and efficient testing of all components including internal code paths. A black box test provides no prior information, simulating an external attacker. A gray box test gives partial information. A red team assessment is a broader adversarial simulation that may use black or gray box approaches but includes physical and social engineering dimensions."
  },
  {
    id: "d6q2",
    domain: 6,
    question: "Which testing approach examines software for vulnerabilities without executing the program, analyzing source code, bytecode, or binaries directly?",
    options: [
      "Dynamic Application Security Testing (DAST)",
      "Fuzzing",
      "Static Application Security Testing (SAST)",
      "Runtime Application Self-Protection (RASP)"
    ],
    correct: 2,
    explanation: "SAST analyzes source code, bytecode, or binary code without executing the application, enabling early identification of vulnerabilities during development (shift-left security). DAST tests a running application by sending inputs and observing outputs. Fuzzing is a dynamic technique that sends malformed or random inputs to a running application. RASP is a protection mechanism embedded in an application at runtime, not a testing methodology."
  },
  {
    id: "d6q3",
    domain: 6,
    question: "An organization's security team reviews user access rights quarterly, verifying that each account's permissions align with current job requirements and revoking unnecessary entitlements. What is this process called?",
    options: [
      "Penetration testing",
      "Vulnerability assessment",
      "Access recertification (access review)",
      "Security audit"
    ],
    correct: 2,
    explanation: "Access recertification (also called access review or user entitlement review) is the periodic process of validating that user access rights remain appropriate for current roles and revoking those that are no longer justified — directly preventing privilege creep. Penetration testing actively attempts exploitation. Vulnerability assessment identifies technical weaknesses. A security audit evaluates policy compliance more broadly, and may include access reviews as a component."
  },
  {
    id: "d6q4",
    domain: 6,
    question: "A vulnerability scanner reports a critical vulnerability in a web server, but further investigation reveals the server has a compensating control that prevents exploitation. How should this finding be classified?",
    options: [
      "True positive — the vulnerability exists and should be remediated regardless",
      "False negative — the scanner missed the real vulnerability",
      "False positive — the scanner incorrectly reported a vulnerability that does not exist",
      "True negative — no vulnerability was found"
    ],
    correct: 0,
    explanation: "The vulnerability is real (the scanner correctly identified it), making this a true positive. Compensating controls reduce risk but do not eliminate the underlying vulnerability; the weakness still exists in the software. A false positive would mean the scanner reported a vulnerability that doesn't exist. A false negative is a real vulnerability the scanner missed. The presence of a compensating control may affect remediation priority but doesn't change the classification of the finding."
  },
  {
    id: "d6q5",
    domain: 6,
    question: "A security assessment reveals that an application is vulnerable to SQL injection. The development team argues that the application is protected by a WAF. Why is this NOT a complete mitigation?",
    options: [
      "WAFs are ineffective against SQL injection entirely.",
      "The underlying code vulnerability still exists; the WAF can be bypassed or misconfigured, leaving the application at risk.",
      "The WAF only protects against network-layer attacks, not application-layer ones.",
      "SQL injection is purely a database problem and requires a database fix, not a WAF."
    ],
    correct: 1,
    explanation: "A WAF is a detective and compensating control, not a fix for the root cause. The SQL injection vulnerability exists in the application code; if the WAF is misconfigured, bypassed (via encoding tricks, fragmentation), or unavailable, the underlying flaw remains exploitable. The correct remediation is parameterized queries in the application code. WAFs do protect against application-layer attacks, so option C is incorrect, and it is a code-level issue, not purely a database one."
  },
  {
    id: "d6q6",
    domain: 6,
    question: "Which log source would provide the BEST evidence to investigate whether an attacker exfiltrated data via DNS tunneling?",
    options: [
      "Web proxy logs",
      "DNS query logs with volume and frequency analysis",
      "Firewall connection state logs",
      "System authentication logs"
    ],
    correct: 1,
    explanation: "DNS tunneling encodes data within DNS queries and responses, making DNS query logs the primary investigative source. Anomalies to look for include unusually long domain names, high query volumes to a single domain, non-standard record types, or queries to rarely seen external resolvers. Web proxy logs capture HTTP/HTTPS traffic. Firewall state logs show connection metadata but typically allow DNS (port 53) without deep inspection. Auth logs show logon events, not network data exfiltration."
  },
  {
    id: "d6q7",
    domain: 6,
    question: "A company conducts an annual third-party audit that reviews whether security controls are operating effectively over a defined period. Which type of report provides this assurance to the company's customers?",
    options: [
      "SOC 1 Type I report",
      "SOC 2 Type II report",
      "ISO 27001 certificate",
      "PCI DSS self-assessment questionnaire"
    ],
    correct: 1,
    explanation: "A SOC 2 Type II report is issued by an independent auditor and covers the design and operating effectiveness of security controls (Trust Services Criteria) over a defined period (typically 6–12 months), providing customers with evidence that controls are not only designed properly but are functioning consistently. SOC 1 focuses on financial reporting controls. ISO 27001 certification confirms an ISMS meets the standard but is less granular on control effectiveness over time. A PCI DSS SAQ is self-reported."
  },
  {
    id: "d6q8",
    domain: 6,
    question: "During a red team exercise, the team successfully gains physical access to a server room by tailgating an employee through a badge-controlled door. Which category of vulnerability did they exploit?",
    options: [
      "Technical vulnerability",
      "Administrative vulnerability",
      "Physical/environmental vulnerability",
      "Social engineering vulnerability"
    ],
    correct: 2,
    explanation: "Tailgating (piggybacking) exploits a physical security control failure — an access-controlled door that does not prevent unauthorized persons from following authorized ones. This is a physical/environmental vulnerability. While social engineering may facilitate tailgating (e.g., the attacker behaves non-suspiciously), the control that failed is physical (no mantrap, turnstile, or guard). Technical vulnerabilities involve software/hardware weaknesses. Administrative vulnerabilities relate to policy and procedural failures."
  },
  {
    id: "d6q9",
    domain: 6,
    question: "A security team performs a test where they send simulated phishing emails to employees and track who clicks links or submits credentials. What is the PRIMARY goal of this activity?",
    options: [
      "To collect evidence for disciplining employees who fail the test",
      "To measure security awareness maturity and identify employees who need additional training",
      "To test the organization's email filtering controls",
      "To simulate a real attack for incident response practice"
    ],
    correct: 1,
    explanation: "Simulated phishing campaigns are primarily a security awareness measurement and training tool — identifying employees susceptible to phishing so that targeted education can be provided. Disciplining employees who fail is counterproductive and discourages a healthy security culture. While email filter effectiveness is a secondary observation, the primary goal is human behavior assessment. Full incident response simulations (tabletop or red team exercises) are the appropriate vehicle for IR practice."
  },
  {
    id: "d6q10",
    domain: 6,
    question: "What is the key difference between a vulnerability assessment and a penetration test?",
    options: [
      "A vulnerability assessment is performed by external parties, while a penetration test is performed internally.",
      "A vulnerability assessment identifies and prioritizes weaknesses; a penetration test actively exploits vulnerabilities to demonstrate real-world impact.",
      "A penetration test uses automated tools, while a vulnerability assessment uses only manual techniques.",
      "A vulnerability assessment covers the entire organization; a penetration test is limited to network devices."
    ],
    correct: 1,
    explanation: "A vulnerability assessment identifies, classifies, and prioritizes vulnerabilities but stops short of exploitation. A penetration test goes further by actively attempting to exploit discovered vulnerabilities to demonstrate actual business impact — what an attacker could achieve. Both can be done internally or externally and use combinations of automated and manual techniques. Scope is defined by the rules of engagement, not by methodology type."
  },

  // ─── Domain 7: Security Operations ──────────────────────────────────────────
  {
    id: "d7q1",
    domain: 7,
    question: "A security analyst discovers malware on a production server. After confirming the infection, what is the CORRECT order of initial incident response steps according to the NIST IR lifecycle?",
    options: [
      "Eradication → Containment → Recovery → Post-Incident Review",
      "Containment → Eradication → Recovery → Post-Incident Review",
      "Eradication → Recovery → Containment → Post-Incident Review",
      "Recovery → Containment → Eradication → Post-Incident Review"
    ],
    correct: 1,
    explanation: "The NIST SP 800-61 incident response lifecycle prescribes Containment first (limit the spread), then Eradication (remove the threat), then Recovery (restore systems to normal operation), and finally Post-Incident Activity (lessons learned). Attempting eradication before containment risks spreading the malware to additional systems. Recovery before eradication would restore a compromised state. The post-incident review always occurs last."
  },
  {
    id: "d7q2",
    domain: 7,
    question: "An organization is recovering from a ransomware attack. The recovery time objective (RTO) is 4 hours and the recovery point objective (RPO) is 1 hour. Which backup strategy is MOST consistent with these requirements?",
    options: [
      "Weekly full backups stored offsite with a 48-hour retrieval time",
      "Daily full backups with continuous replication to a warm standby site",
      "Hourly incremental backups with automated failover to a hot standby site",
      "Monthly full backups with differential backups every two weeks"
    ],
    correct: 2,
    explanation: "An RPO of 1 hour requires that data loss not exceed 1 hour, necessitating backups (or replication) at least every hour. An RTO of 4 hours requires systems to be restorable within 4 hours, which automated failover to a hot standby can meet. Daily backups would expose up to 24 hours of data loss, violating the RPO. Weekly or monthly backups with long retrieval times violate both requirements. The hot standby with hourly incrementals is the only option satisfying both constraints."
  },
  {
    id: "d7q3",
    domain: 7,
    question: "A forensic investigator is collecting evidence from a compromised laptop. According to the order of volatility, which source should be collected FIRST?",
    options: [
      "Hard drive image",
      "RAM (volatile memory)",
      "Log files on the local disk",
      "Backup files stored on a network share"
    ],
    correct: 1,
    explanation: "The order of volatility dictates that the most ephemeral evidence be collected first. RAM (volatile memory) is lost the moment the system is powered off and contains running processes, network connections, encryption keys, and malware artifacts. Hard drives, log files, and network shares persist through power cycles and can be collected afterward without loss. Collecting RAM first preserves evidence that would otherwise be destroyed."
  },
  {
    id: "d7q4",
    domain: 7,
    question: "An organization uses a Security Information and Event Management (SIEM) system that correlates logs from 200 sources. Which activity does the SIEM MOST directly support?",
    options: [
      "Automated patch deployment across all systems",
      "Detection of security incidents through correlation of events across multiple sources",
      "Encryption of sensitive data at rest",
      "Prevention of malware execution on endpoints"
    ],
    correct: 1,
    explanation: "A SIEM aggregates and correlates log and event data from diverse sources to identify patterns indicative of security incidents — providing detection capabilities that no single source could provide alone. SIEMs do not deploy patches (that is patch management), encrypt data (that is a cryptographic control), or prevent malware execution (that is an endpoint protection function). SIEM is fundamentally a log aggregation, correlation, and alerting platform."
  },
  {
    id: "d7q5",
    domain: 7,
    question: "A company operates a production data center and a fully equipped alternate site that runs synchronized live copies of all systems. If the primary site fails, operations switch automatically within minutes. Which type of alternate site is this?",
    options: [
      "Cold site",
      "Warm site",
      "Hot site",
      "Mobile site"
    ],
    correct: 2,
    explanation: "A hot site maintains fully operational, synchronized duplicate systems that can take over with minimal (minutes-level) switchover time. A warm site has pre-configured hardware but requires data restoration before becoming operational (hours). A cold site is a facility with space and power but no pre-installed equipment — requiring full setup and data restoration (days to weeks). A mobile site is a portable facility but is not defined by its synchronization state."
  },
  {
    id: "d7q6",
    domain: 7,
    question: "During a routine audit, a privileged administrator is found to have access to both the production environment and the system that monitors and audits that same environment. Which principle is violated?",
    options: [
      "Least privilege",
      "Separation of duties",
      "Need to know",
      "Defense in depth"
    ],
    correct: 1,
    explanation: "Allowing the same person to perform actions in a system and also control the audit/monitoring of those actions violates separation of duties, creating a conflict of interest — the administrator could cover their tracks. Least privilege (excessive permissions) may also be a concern, but the core issue is that one person can act and simultaneously control the oversight of their own actions. Need to know and defense in depth are unrelated to this conflict-of-interest scenario."
  },
  {
    id: "d7q7",
    domain: 7,
    question: "An attacker plants a program on a server that lies dormant until a specific date, then activates and deletes critical system files. Which type of malware is this?",
    options: [
      "Trojan horse",
      "Logic bomb",
      "Ransomware",
      "Rootkit"
    ],
    correct: 1,
    explanation: "A logic bomb is malicious code that remains inactive until triggered by a specific event or condition — in this case, a date. Upon triggering, it executes its payload (deleting files). A Trojan disguises itself as legitimate software to gain execution. Ransomware encrypts data and demands payment. A rootkit conceals itself and other malware from the OS and security tools. Time-triggered destructive payloads are the defining characteristic of logic bombs."
  },
  {
    id: "d7q8",
    domain: 7,
    question: "A business continuity plan (BCP) and a disaster recovery plan (DRP) both address organizational resilience. What is the PRIMARY distinction between them?",
    options: [
      "BCP focuses on IT systems recovery; DRP focuses on personnel safety.",
      "BCP focuses on maintaining business operations during a disruption; DRP focuses on restoring IT systems after a disaster.",
      "BCP is tested annually; DRP is tested monthly.",
      "BCP covers natural disasters only; DRP covers cyber incidents only."
    ],
    correct: 1,
    explanation: "The BCP is a strategic plan for how the organization will continue critical business functions during a disruption, while the DRP is a tactical plan focused specifically on recovering IT systems and data after a disaster. The BCP has broader scope (people, processes, facilities) while the DRP is more narrowly IT-focused and is typically a component of the BCP. Testing frequency and disaster type categorizations are not defining distinctions."
  },
  {
    id: "d7q9",
    domain: 7,
    question: "A security operations center (SOC) analyst notices that a service account used by an HR application is initiating outbound connections to an external IP address and running PowerShell commands. Which threat hunting technique would BEST help investigate this behavior?",
    options: [
      "Signature-based detection using antivirus",
      "Behavioral analysis comparing current activity to established baselines",
      "Port scanning the suspicious external IP address",
      "Reviewing the HR application's published changelog"
    ],
    correct: 1,
    explanation: "Anomalous behavior from a service account (unexpected outbound connections, PowerShell execution) is best investigated through behavioral analysis — comparing current activity against known-good baselines for that account and application. Service accounts should have predictable, consistent behavior, so deviations indicate compromise (e.g., living-off-the-land attacks). Signature-based AV would only catch known malware. Port scanning the external IP is not investigative of the internal compromise. The changelog would not explain runtime network behavior."
  },
  {
    id: "d7q10",
    domain: 7,
    question: "An organization wants to test its disaster recovery plan without interrupting production operations. Which test type is MOST appropriate?",
    options: [
      "Full interruption test",
      "Parallel test",
      "Tabletop exercise",
      "Checklist review"
    ],
    correct: 1,
    explanation: "A parallel test activates the alternate/recovery systems and verifies they can handle the load, while production continues running uninterrupted. This provides meaningful validation of recovery capability without the risk of a full interruption test. A full interruption test takes production offline to force actual failover — the most realistic but highest-risk test. A tabletop exercise is a discussion-based walkthrough with no systems activated. A checklist review only confirms plan documentation, not operational capability."
  },

  // ─── Domain 8: Software Development Security ─────────────────────────────────
  {
    id: "d8q1",
    domain: 8,
    question: "A developer uses parameterized queries (prepared statements) instead of dynamically constructed SQL strings when handling user input. Which vulnerability does this MOST directly prevent?",
    options: [
      "Cross-site scripting (XSS)",
      "SQL injection",
      "Cross-site request forgery (CSRF)",
      "Insecure deserialization"
    ],
    correct: 1,
    explanation: "Parameterized queries separate SQL code from data by treating user input as a parameter, never as part of the query structure. This directly prevents SQL injection, where an attacker submits input that alters the query's logic. XSS is prevented by output encoding. CSRF is prevented by anti-CSRF tokens. Insecure deserialization requires type-safe deserialization libraries and integrity checks — not parameterized queries."
  },
  {
    id: "d8q2",
    domain: 8,
    question: "Which Software Development Lifecycle (SDLC) phase is MOST cost-effective for identifying and remediating security vulnerabilities?",
    options: [
      "Testing and QA",
      "Deployment",
      "Requirements and design",
      "Maintenance and operations"
    ],
    correct: 2,
    explanation: "The cost to fix a vulnerability rises dramatically the later in the SDLC it is discovered — finding a design flaw during requirements or design costs a fraction of fixing it post-deployment (often cited as a 30:1 or 100:1 cost ratio). Embedding security into the earliest phases (threat modeling, security requirements) prevents vulnerabilities from being built in. Post-deployment fixes require patches, re-testing, regression testing, and potentially breach remediation."
  },
  {
    id: "d8q3",
    domain: 8,
    question: "A security architect performs a threat modeling exercise using STRIDE. An attacker is able to send requests that appear to come from a legitimate authenticated user without their knowledge. Which STRIDE category does this represent?",
    options: [
      "Spoofing",
      "Tampering",
      "Repudiation",
      "Elevation of privilege"
    ],
    correct: 0,
    explanation: "STRIDE's Spoofing category covers attacks where an attacker impersonates another identity — in this case, forging requests that appear to originate from a legitimate user (e.g., CSRF). Tampering involves modifying data or code. Repudiation is the ability to deny performing an action. Elevation of privilege is gaining capabilities beyond what is authorized. The defining characteristic here is identity impersonation, which is Spoofing."
  },
  {
    id: "d8q4",
    domain: 8,
    question: "An application stores user-uploaded files in a directory accessible via a URL without validating file types. An attacker uploads a PHP script and executes it through the browser. Which vulnerability category does this represent?",
    options: [
      "Broken access control",
      "Unrestricted file upload leading to remote code execution",
      "Server-side request forgery (SSRF)",
      "XML external entity (XXE) injection"
    ],
    correct: 1,
    explanation: "Unrestricted file upload occurs when an application fails to validate the type, content, or execution context of uploaded files. When uploaded files are stored in a web-accessible directory and the server executes them, an attacker can achieve remote code execution. Broken access control involves unauthorized access to resources. SSRF causes the server to make requests to internal resources. XXE exploits XML parsers that process external entity references."
  },
  {
    id: "d8q5",
    domain: 8,
    question: "A company integrates a third-party open-source library into its application without reviewing the library's code or its dependencies. Shortly after deployment, a critical vulnerability in that library is exploited. Which software supply chain risk did the organization fail to manage?",
    options: [
      "Insecure coding practices within the organization's own development team",
      "Third-party component risk and lack of software composition analysis",
      "Failure to implement input validation",
      "Missing security headers on the web server"
    ],
    correct: 1,
    explanation: "Using unreviewed third-party libraries without software composition analysis (SCA) is a software supply chain risk — vulnerabilities in dependencies become vulnerabilities in the product. SCA tools inventory third-party components and check them against known vulnerability databases (e.g., CVE/NVD). The risk here is external component risk, not the organization's own coding practices, input validation, or web server configuration."
  },
  {
    id: "d8q6",
    domain: 8,
    question: "Which secure coding practice MOST directly prevents buffer overflow vulnerabilities in software written in C or C++?",
    options: [
      "Using parameterized queries for database access",
      "Implementing input validation and using bounds-checking functions instead of unsafe string operations",
      "Encrypting all data stored by the application",
      "Applying the principle of least privilege to the application's service account"
    ],
    correct: 1,
    explanation: "Buffer overflows in C/C++ occur when data written to a buffer exceeds its allocated size, overwriting adjacent memory. Using bounds-checking functions (e.g., strncpy instead of strcpy, snprintf instead of sprintf) and validating input length before processing directly prevents this. Parameterized queries address SQL injection. Encryption protects data confidentiality. Least privilege limits damage if exploitation occurs but does not prevent the overflow vulnerability itself."
  },
  {
    id: "d8q7",
    domain: 8,
    question: "An organization mandates code reviews before any code is merged into the main branch. From a security standpoint, what is the PRIMARY benefit of this practice?",
    options: [
      "It ensures code meets performance benchmarks before deployment.",
      "It provides a second pair of eyes to catch security flaws, logic errors, and policy violations before code enters production.",
      "It replaces the need for automated static analysis tools.",
      "It satisfies penetration testing requirements."
    ],
    correct: 1,
    explanation: "Mandatory code review is a preventive control that catches vulnerabilities, logic errors, and deviations from secure coding standards before code reaches production — reducing the cost and risk of later remediation. Code reviews complement (not replace) automated SAST tools, as humans can reason about logic and context that tools may miss. Code reviews are not penetration tests and do not primarily address performance."
  },
  {
    id: "d8q8",
    domain: 8,
    question: "A developer is building a REST API and needs to ensure that only authenticated and authorized clients can access sensitive endpoints. Which combination of controls is MOST appropriate?",
    options: [
      "HTTP Basic Authentication over HTTP with IP whitelisting",
      "OAuth 2.0 bearer tokens transmitted over TLS with scope-based authorization",
      "API keys embedded in client-side JavaScript with rate limiting",
      "Session cookies without the Secure flag, with CAPTCHA on all endpoints"
    ],
    correct: 1,
    explanation: "OAuth 2.0 with bearer tokens over TLS provides strong authenticated access — TLS encrypts the token in transit, OAuth handles delegation and scoped authorization, and token expiration limits exposure. HTTP Basic Auth over plaintext HTTP transmits credentials unprotected. API keys in client-side JavaScript are easily extracted. Session cookies without the Secure flag can be intercepted over HTTP, and CAPTCHA prevents automated requests but does not authenticate or authorize API clients."
  },
  {
    id: "d8q9",
    domain: 8,
    question: "A DevSecOps pipeline automatically scans container images for known vulnerabilities before allowing them to be deployed to production. Which security principle does this MOST directly implement?",
    options: [
      "Defense in depth",
      "Shift-left security",
      "Zero trust",
      "Separation of duties"
    ],
    correct: 1,
    explanation: "Shift-left security means moving security testing and validation earlier in the development pipeline, rather than addressing security only after deployment. Integrating automated vulnerability scanning into the CI/CD pipeline before deployment gates production releases on security quality — a hallmark of shift-left and DevSecOps. Defense in depth involves layered controls broadly. Zero trust addresses network and identity. Separation of duties distributes responsibility across individuals."
  },
  {
    id: "d8q10",
    domain: 8,
    question: "An application handles a session token in the URL query string (e.g., https://example.com/profile?token=abc123). Why is this a security risk, and what is the preferred alternative?",
    options: [
      "URL parameters are encrypted by default; the preferred alternative is to store tokens in local storage.",
      "Tokens in URLs are logged in server logs, browser history, and referrer headers, exposing them to leakage; they should be transmitted in HTTP headers or cookies with appropriate flags.",
      "Tokens in URLs prevent caching; they should be stored in hidden HTML form fields instead.",
      "URL-based tokens cannot be revoked; the solution is to use JWTs with no expiration."
    ],
    correct: 1,
    explanation: "Session tokens in URLs are exposed in web server access logs, browser history, browser bookmarks, and HTTP Referer headers sent to third-party resources — creating multiple token leakage vectors. The secure alternative is to transmit session tokens in HTTP Authorization headers or in cookies configured with the Secure, HttpOnly, and SameSite flags. Local storage is accessible via JavaScript and vulnerable to XSS. Hidden form fields still appear in logs if the form submits via GET."
  }
]
