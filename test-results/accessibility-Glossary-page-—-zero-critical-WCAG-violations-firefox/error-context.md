# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Glossary page — zero critical WCAG violations
- Location: tests\e2e\accessibility.spec.ts:15:3

# Error details

```
Error: WCAG violations on Glossary:
[serious] color-contrast: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
  → https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "Skip to main content" [ref=e3] [cursor=pointer]:
    - /url: "#main-content"
  - status [ref=e4]
  - banner [ref=e5]:
    - generic [ref=e7]:
      - link "ElectEd – Home" [ref=e8] [cursor=pointer]:
        - /url: /
        - img [ref=e10]
        - generic [ref=e14]: ElectEd
      - navigation "Main navigation" [ref=e15]:
        - link "Chat with our AI election guide" [ref=e16] [cursor=pointer]:
          - /url: /chat
          - text: AI Assistant
        - link "Election timeline visualizer" [ref=e17] [cursor=pointer]:
          - /url: /timeline
          - text: Timeline
        - link "Step-by-step voting guide" [ref=e18] [cursor=pointer]:
          - /url: /steps
          - text: Voting Steps
        - link "Test your election knowledge" [ref=e19] [cursor=pointer]:
          - /url: /quiz
          - text: Quiz
        - link "Election terms dictionary" [ref=e20] [cursor=pointer]:
          - /url: /glossary
          - text: Glossary
        - link "Compare election systems worldwide" [ref=e22] [cursor=pointer]:
          - /url: /compare
          - text: Compare
      - generic [ref=e23]:
        - 'button "Language: English. Click to change." [ref=e25]':
          - img [ref=e26]
          - generic [ref=e30]: English
        - button "Sign in with Google to save progress" [ref=e31]:
          - img [ref=e32]
          - generic [ref=e36]: Sign in
  - main [ref=e37]:
    - generic [ref=e38]:
      - generic [ref=e39]:
        - heading "Election Glossary" [level=1] [ref=e40]
        - paragraph [ref=e41]: A comprehensive A–Z dictionary of election and voting terminology.
      - generic [ref=e42]:
        - generic [ref=e43]:
          - paragraph [ref=e44]: Term of the Day
          - heading "By-election" [level=2] [ref=e45]
          - paragraph [ref=e46]: Election held to fill a single vacant seat between general elections.
          - button "Share Term" [ref=e47]
        - generic [ref=e48]:
          - search "Glossary term search" [ref=e49]:
            - generic [ref=e50]:
              - img [ref=e51]
              - generic [ref=e54]: Search any election term
              - searchbox "Search any election term" [ref=e55]
          - group "Alphabet filter" [ref=e56]:
            - button "A" [ref=e57]
            - button "B" [ref=e58]
            - button "C" [ref=e59]
            - button "D" [ref=e60]
            - button "E" [ref=e61]
            - button "F" [ref=e62]
            - button "G" [ref=e63]
            - button "H" [ref=e64]
            - button "I" [ref=e65]
            - button "J" [ref=e66]
            - button "K" [ref=e67]
            - button "L" [ref=e68]
            - button "M" [ref=e69]
            - button "N" [ref=e70]
            - button "O" [ref=e71]
            - button "P" [ref=e72]
            - button "Q" [ref=e73]
            - button "R" [ref=e74]
            - button "S" [ref=e75]
            - button "T" [ref=e76]
            - button "U" [ref=e77]
            - button "V" [ref=e78]
            - button "W" [ref=e79]
            - button "X" [ref=e80]
            - button "Y" [ref=e81]
            - button "Z" [ref=e82]
            - button "ALL" [ref=e83]
          - generic [ref=e84]:
            - article [ref=e85]:
              - heading "Affidavit" [level=3] [ref=e86]
              - paragraph [ref=e87]: Sworn statement candidates must file declaring assets, liabilities and criminal record.
              - generic [ref=e88]:
                - generic [ref=e89]: Documents
                - generic [ref=e90]: Intermediate
              - generic [ref=e91]:
                - button "Ask AI to explain more" [ref=e92]
                - button "Bookmark Affidavit" [ref=e93]:
                  - img [ref=e94]
            - article [ref=e96]:
              - heading "Anti-defection law" [level=3] [ref=e97]
              - paragraph [ref=e98]: Law preventing elected members from switching parties without losing their seat.
              - generic [ref=e99]:
                - generic [ref=e100]: Legal
                - generic [ref=e101]: Advanced
              - generic [ref=e102]:
                - button "Ask AI to explain more" [ref=e103]
                - button "Bookmark Anti-defection law" [ref=e104]:
                  - img [ref=e105]
            - article [ref=e107]:
              - heading "Ballot" [level=3] [ref=e108]
              - paragraph [ref=e109]: The official document or method used to cast a vote in an election.
              - generic [ref=e110]:
                - generic [ref=e111]: Voting Process
                - generic [ref=e112]: Basic
              - generic [ref=e113]:
                - button "Ask AI to explain more" [ref=e114]
                - button "Bookmark Ballot" [ref=e115]:
                  - img [ref=e116]
            - article [ref=e118]:
              - heading "Booth capturing" [level=3] [ref=e119]
              - paragraph [ref=e120]: Illegal practice of taking over polling booth to cast fraudulent votes.
              - generic [ref=e121]:
                - generic [ref=e122]: Legal
                - generic [ref=e123]: Advanced
              - generic [ref=e124]:
                - button "Ask AI to explain more" [ref=e125]
                - button "Bookmark Booth capturing" [ref=e126]:
                  - img [ref=e127]
            - article [ref=e129]:
              - heading "By-election" [level=3] [ref=e130]
              - paragraph [ref=e131]: Election held to fill a single vacant seat between general elections.
              - generic [ref=e132]:
                - generic [ref=e133]: Voting Process
                - generic [ref=e134]: Basic
              - generic [ref=e135]:
                - button "Ask AI to explain more" [ref=e136]
                - button "Bookmark By-election" [ref=e137]:
                  - img [ref=e138]
            - article [ref=e140]:
              - heading "Cabinet" [level=3] [ref=e141]
              - paragraph [ref=e142]: Group of senior ministers who form the core of the government and make major decisions.
              - generic [ref=e143]:
                - generic [ref=e144]: Officials
                - generic [ref=e145]: Basic
              - generic [ref=e146]:
                - button "Ask AI to explain more" [ref=e147]
                - button "Bookmark Cabinet" [ref=e148]:
                  - img [ref=e149]
            - article [ref=e151]:
              - heading "Candidate" [level=3] [ref=e152]
              - paragraph [ref=e153]: A person who stands for election to a public office.
              - generic [ref=e154]:
                - generic [ref=e155]: Voting Process
                - generic [ref=e156]: Basic
              - generic [ref=e157]:
                - button "Ask AI to explain more" [ref=e158]
                - button "Bookmark Candidate" [ref=e159]:
                  - img [ref=e160]
            - article [ref=e162]:
              - heading "Constituency" [level=3] [ref=e163]
              - paragraph [ref=e164]: A geographic area whose residents elect a representative.
              - generic [ref=e165]:
                - generic [ref=e166]: Systems
                - generic [ref=e167]: Basic
              - generic [ref=e168]:
                - button "Ask AI to explain more" [ref=e169]
                - button "Bookmark Constituency" [ref=e170]:
                  - img [ref=e171]
            - article [ref=e173]:
              - heading "Counting agent" [level=3] [ref=e174]
              - paragraph [ref=e175]: Party representative present during vote counting to observe the process.
              - generic [ref=e176]:
                - generic [ref=e177]: Officials
                - generic [ref=e178]: Intermediate
              - generic [ref=e179]:
                - button "Ask AI to explain more" [ref=e180]
                - button "Bookmark Counting agent" [ref=e181]:
                  - img [ref=e182]
            - article [ref=e184]:
              - heading "Delimitation" [level=3] [ref=e185]
              - paragraph [ref=e186]: Process of redrawing constituency boundaries based on census data.
              - generic [ref=e187]:
                - generic [ref=e188]: Systems
                - generic [ref=e189]: Advanced
              - generic [ref=e190]:
                - button "Ask AI to explain more" [ref=e191]
                - button "Bookmark Delimitation" [ref=e192]:
                  - img [ref=e193]
            - article [ref=e195]:
              - heading "Deposit" [level=3] [ref=e196]
              - paragraph [ref=e197]: Money candidates must pay to file nomination, forfeited if they get less than 1/6th of votes.
              - generic [ref=e198]:
                - generic [ref=e199]: Legal
                - generic [ref=e200]: Intermediate
              - generic [ref=e201]:
                - button "Ask AI to explain more" [ref=e202]
                - button "Bookmark Deposit" [ref=e203]:
                  - img [ref=e204]
            - article [ref=e206]:
              - heading "ECI" [level=3] [ref=e207]
              - paragraph [ref=e208]: Election Commission of India — constitutional body that administers all elections.
              - generic [ref=e209]:
                - generic [ref=e210]: Officials
                - generic [ref=e211]: Basic
              - generic [ref=e212]:
                - button "Ask AI to explain more" [ref=e213]
                - button "Bookmark ECI" [ref=e214]:
                  - img [ref=e215]
            - article [ref=e217]:
              - heading "Electoral Roll" [level=3] [ref=e218]
              - paragraph [ref=e219]: Official list of all eligible voters in a constituency.
              - generic [ref=e220]:
                - generic [ref=e221]: Documents
                - generic [ref=e222]: Basic
              - generic [ref=e223]:
                - button "Ask AI to explain more" [ref=e224]
                - button "Bookmark Electoral Roll" [ref=e225]:
                  - img [ref=e226]
            - article [ref=e228]:
              - heading "EPIC" [level=3] [ref=e229]
              - paragraph [ref=e230]: Elector's Photo Identity Card — voter ID card issued by ECI.
              - generic [ref=e231]:
                - generic [ref=e232]: Documents
                - generic [ref=e233]: Basic
              - generic [ref=e234]:
                - button "Ask AI to explain more" [ref=e235]
                - button "Bookmark EPIC" [ref=e236]:
                  - img [ref=e237]
            - article [ref=e239]:
              - heading "EVM" [level=3] [ref=e240]
              - paragraph [ref=e241]: Electronic Voting Machine used to record votes.
              - generic [ref=e242]:
                - generic [ref=e243]: Voting Process
                - generic [ref=e244]: Basic
              - generic [ref=e245]:
                - button "Ask AI to explain more" [ref=e246]
                - button "Bookmark EVM" [ref=e247]:
                  - img [ref=e248]
            - article [ref=e250]:
              - heading "Exit Poll" [level=3] [ref=e251]
              - paragraph [ref=e252]: Survey conducted outside polling stations to predict election results.
              - generic [ref=e253]:
                - generic [ref=e254]: Systems
                - generic [ref=e255]: Intermediate
              - generic [ref=e256]:
                - button "Ask AI to explain more" [ref=e257]
                - button "Bookmark Exit Poll" [ref=e258]:
                  - img [ref=e259]
            - article [ref=e261]:
              - heading "First Past The Post (FPTP)" [level=3] [ref=e262]
              - paragraph [ref=e263]: Electoral system where candidate with most votes wins, regardless of majority.
              - generic [ref=e264]:
                - generic [ref=e265]: Systems
                - generic [ref=e266]: Intermediate
              - generic [ref=e267]:
                - button "Ask AI to explain more" [ref=e268]
                - button "Bookmark First Past The Post (FPTP)" [ref=e269]:
                  - img [ref=e270]
            - article [ref=e272]:
              - heading "Form 6" [level=3] [ref=e273]
              - paragraph [ref=e274]: Application form to register as a new voter.
              - generic [ref=e275]:
                - generic [ref=e276]: Documents
                - generic [ref=e277]: Basic
              - generic [ref=e278]:
                - button "Ask AI to explain more" [ref=e279]
                - button "Bookmark Form 6" [ref=e280]:
                  - img [ref=e281]
            - article [ref=e283]:
              - heading "Government" [level=3] [ref=e284]
              - paragraph [ref=e285]: The ruling party or coalition that administers the country/state.
              - generic [ref=e286]:
                - generic [ref=e287]: Officials
                - generic [ref=e288]: Basic
              - generic [ref=e289]:
                - button "Ask AI to explain more" [ref=e290]
                - button "Bookmark Government" [ref=e291]:
                  - img [ref=e292]
            - article [ref=e294]:
              - heading "Governor" [level=3] [ref=e295]
              - paragraph [ref=e296]: Constitutional head of a state, appointed by President.
              - generic [ref=e297]:
                - generic [ref=e298]: Officials
                - generic [ref=e299]: Intermediate
              - generic [ref=e300]:
                - button "Ask AI to explain more" [ref=e301]
                - button "Bookmark Governor" [ref=e302]:
                  - img [ref=e303]
            - article [ref=e305]:
              - heading "Hung Parliament/Assembly" [level=3] [ref=e306]
              - paragraph [ref=e307]: Situation where no single party wins enough seats for a majority.
              - generic [ref=e308]:
                - generic [ref=e309]: Systems
                - generic [ref=e310]: Intermediate
              - generic [ref=e311]:
                - button "Ask AI to explain more" [ref=e312]
                - button "Bookmark Hung Parliament/Assembly" [ref=e313]:
                  - img [ref=e314]
            - article [ref=e316]:
              - heading "Indelible Ink" [level=3] [ref=e317]
              - paragraph [ref=e318]: Permanent ink applied to voter's finger to prevent double voting.
              - generic [ref=e319]:
                - generic [ref=e320]: Voting Process
                - generic [ref=e321]: Basic
              - generic [ref=e322]:
                - button "Ask AI to explain more" [ref=e323]
                - button "Bookmark Indelible Ink" [ref=e324]:
                  - img [ref=e325]
            - article [ref=e327]:
              - heading "Lok Sabha" [level=3] [ref=e328]
              - paragraph [ref=e329]: Lower house of Indian Parliament, directly elected by citizens.
              - generic [ref=e330]:
                - generic [ref=e331]: Systems
                - generic [ref=e332]: Basic
              - generic [ref=e333]:
                - button "Ask AI to explain more" [ref=e334]
                - button "Bookmark Lok Sabha" [ref=e335]:
                  - img [ref=e336]
            - article [ref=e338]:
              - heading "Lotus symbol" [level=3] [ref=e339]
              - paragraph [ref=e340]: Reserved symbol for BJP in India.
              - generic [ref=e341]:
                - generic [ref=e342]: Documents
                - generic [ref=e343]: Basic
              - generic [ref=e344]:
                - button "Ask AI to explain more" [ref=e345]
                - button "Bookmark Lotus symbol" [ref=e346]:
                  - img [ref=e347]
            - article [ref=e349]:
              - heading "Manifesto" [level=3] [ref=e350]
              - paragraph [ref=e351]: Document published by a political party outlining its policies and promises.
              - generic [ref=e352]:
                - generic [ref=e353]: Documents
                - generic [ref=e354]: Basic
              - generic [ref=e355]:
                - button "Ask AI to explain more" [ref=e356]
                - button "Bookmark Manifesto" [ref=e357]:
                  - img [ref=e358]
            - article [ref=e360]:
              - heading "MLA" [level=3] [ref=e361]
              - paragraph [ref=e362]: Member of Legislative Assembly — elected representative in state legislature.
              - generic [ref=e363]:
                - generic [ref=e364]: Officials
                - generic [ref=e365]: Basic
              - generic [ref=e366]:
                - button "Ask AI to explain more" [ref=e367]
                - button "Bookmark MLA" [ref=e368]:
                  - img [ref=e369]
            - article [ref=e371]:
              - heading "Model Code of Conduct" [level=3] [ref=e372]
              - paragraph [ref=e373]: ECI guidelines governing party and candidate behavior during elections.
              - generic [ref=e374]:
                - generic [ref=e375]: Legal
                - generic [ref=e376]: Intermediate
              - generic [ref=e377]:
                - button "Ask AI to explain more" [ref=e378]
                - button "Bookmark Model Code of Conduct" [ref=e379]:
                  - img [ref=e380]
            - article [ref=e382]:
              - heading "MP" [level=3] [ref=e383]
              - paragraph [ref=e384]: Member of Parliament — elected representative in Lok Sabha or Rajya Sabha.
              - generic [ref=e385]:
                - generic [ref=e386]: Officials
                - generic [ref=e387]: Basic
              - generic [ref=e388]:
                - button "Ask AI to explain more" [ref=e389]
                - button "Bookmark MP" [ref=e390]:
                  - img [ref=e391]
            - article [ref=e393]:
              - heading "Nomination" [level=3] [ref=e394]
              - paragraph [ref=e395]: Formal process of registering as a candidate for election.
              - generic [ref=e396]:
                - generic [ref=e397]: Voting Process
                - generic [ref=e398]: Basic
              - generic [ref=e399]:
                - button "Ask AI to explain more" [ref=e400]
                - button "Bookmark Nomination" [ref=e401]:
                  - img [ref=e402]
            - article [ref=e404]:
              - heading "NOTA" [level=3] [ref=e405]
              - paragraph [ref=e406]: None Of The Above — ballot option to reject all candidates.
              - generic [ref=e407]:
                - generic [ref=e408]: Voting Process
                - generic [ref=e409]: Basic
              - generic [ref=e410]:
                - button "Ask AI to explain more" [ref=e411]
                - button "Bookmark NOTA" [ref=e412]:
                  - img [ref=e413]
            - article [ref=e415]:
              - heading "Observer" [level=3] [ref=e416]
              - paragraph [ref=e417]: ECI appointed official who monitors the election process in a constituency.
              - generic [ref=e418]:
                - generic [ref=e419]: Officials
                - generic [ref=e420]: Intermediate
              - generic [ref=e421]:
                - button "Ask AI to explain more" [ref=e422]
                - button "Bookmark Observer" [ref=e423]:
                  - img [ref=e424]
            - article [ref=e426]:
              - heading "Opinion Poll" [level=3] [ref=e427]
              - paragraph [ref=e428]: Survey conducted before voting to gauge public sentiment.
              - generic [ref=e429]:
                - generic [ref=e430]: Systems
                - generic [ref=e431]: Intermediate
              - generic [ref=e432]:
                - button "Ask AI to explain more" [ref=e433]
                - button "Bookmark Opinion Poll" [ref=e434]:
                  - img [ref=e435]
            - article [ref=e437]:
              - heading "Polling Booth" [level=3] [ref=e438]
              - paragraph [ref=e439]: Location where voters go to cast their vote.
              - generic [ref=e440]:
                - generic [ref=e441]: Voting Process
                - generic [ref=e442]: Basic
              - generic [ref=e443]:
                - button "Ask AI to explain more" [ref=e444]
                - button "Bookmark Polling Booth" [ref=e445]:
                  - img [ref=e446]
            - article [ref=e448]:
              - heading "Polling Officer" [level=3] [ref=e449]
              - paragraph [ref=e450]: Government official who manages the voting process at a booth.
              - generic [ref=e451]:
                - generic [ref=e452]: Officials
                - generic [ref=e453]: Intermediate
              - generic [ref=e454]:
                - button "Ask AI to explain more" [ref=e455]
                - button "Bookmark Polling Officer" [ref=e456]:
                  - img [ref=e457]
            - article [ref=e459]:
              - heading "Presiding Officer" [level=3] [ref=e460]
              - paragraph [ref=e461]: Senior official in charge of a polling station.
              - generic [ref=e462]:
                - generic [ref=e463]: Officials
                - generic [ref=e464]: Intermediate
              - generic [ref=e465]:
                - button "Ask AI to explain more" [ref=e466]
                - button "Bookmark Presiding Officer" [ref=e467]:
                  - img [ref=e468]
            - article [ref=e470]:
              - heading "Proportional Representation" [level=3] [ref=e471]
              - paragraph [ref=e472]: Electoral system where seats are allocated proportional to votes received.
              - generic [ref=e473]:
                - generic [ref=e474]: Systems
                - generic [ref=e475]: Advanced
              - generic [ref=e476]:
                - button "Ask AI to explain more" [ref=e477]
                - button "Bookmark Proportional Representation" [ref=e478]:
                  - img [ref=e479]
            - article [ref=e481]:
              - heading "Rajya Sabha" [level=3] [ref=e482]
              - paragraph [ref=e483]: Upper house of Indian Parliament, indirectly elected by state legislators.
              - generic [ref=e484]:
                - generic [ref=e485]: Systems
                - generic [ref=e486]: Intermediate
              - generic [ref=e487]:
                - button "Ask AI to explain more" [ref=e488]
                - button "Bookmark Rajya Sabha" [ref=e489]:
                  - img [ref=e490]
            - article [ref=e492]:
              - heading "Re-election" [level=3] [ref=e493]
              - paragraph [ref=e494]: Election held again due to irregularities.
              - generic [ref=e495]:
                - generic [ref=e496]: Legal
                - generic [ref=e497]: Intermediate
              - generic [ref=e498]:
                - button "Ask AI to explain more" [ref=e499]
                - button "Bookmark Re-election" [ref=e500]:
                  - img [ref=e501]
            - article [ref=e503]:
              - heading "Reserved Constituency" [level=3] [ref=e504]
              - paragraph [ref=e505]: Seat reserved for SC/ST candidates to ensure representation.
              - generic [ref=e506]:
                - generic [ref=e507]: Legal
                - generic [ref=e508]: Intermediate
              - generic [ref=e509]:
                - button "Ask AI to explain more" [ref=e510]
                - button "Bookmark Reserved Constituency" [ref=e511]:
                  - img [ref=e512]
            - article [ref=e514]:
              - heading "Returning Officer" [level=3] [ref=e515]
              - paragraph [ref=e516]: Official responsible for conducting election in a constituency.
              - generic [ref=e517]:
                - generic [ref=e518]: Officials
                - generic [ref=e519]: Intermediate
              - generic [ref=e520]:
                - button "Ask AI to explain more" [ref=e521]
                - button "Bookmark Returning Officer" [ref=e522]:
                  - img [ref=e523]
            - article [ref=e525]:
              - heading "Silent Period" [level=3] [ref=e526]
              - paragraph [ref=e527]: 48 hours before voting when campaigning is prohibited.
              - generic [ref=e528]:
                - generic [ref=e529]: Legal
                - generic [ref=e530]: Intermediate
              - generic [ref=e531]:
                - button "Ask AI to explain more" [ref=e532]
                - button "Bookmark Silent Period" [ref=e533]:
                  - img [ref=e534]
            - article [ref=e536]:
              - heading "Swing" [level=3] [ref=e537]
              - paragraph [ref=e538]: Change in voting pattern compared to previous election.
              - generic [ref=e539]:
                - generic [ref=e540]: Systems
                - generic [ref=e541]: Advanced
              - generic [ref=e542]:
                - button "Ask AI to explain more" [ref=e543]
                - button "Bookmark Swing" [ref=e544]:
                  - img [ref=e545]
            - article [ref=e547]:
              - heading "Turnout" [level=3] [ref=e548]
              - paragraph [ref=e549]: Percentage of eligible voters who actually cast their vote.
              - generic [ref=e550]:
                - generic [ref=e551]: Voting Process
                - generic [ref=e552]: Basic
              - generic [ref=e553]:
                - button "Ask AI to explain more" [ref=e554]
                - button "Bookmark Turnout" [ref=e555]:
                  - img [ref=e556]
            - article [ref=e558]:
              - heading "Universal Adult Franchise" [level=3] [ref=e559]
              - paragraph [ref=e560]: Right of every adult citizen to vote regardless of gender, caste, religion.
              - generic [ref=e561]:
                - generic [ref=e562]: Legal
                - generic [ref=e563]: Basic
              - generic [ref=e564]:
                - button "Ask AI to explain more" [ref=e565]
                - button "Bookmark Universal Adult Franchise" [ref=e566]:
                  - img [ref=e567]
            - article [ref=e569]:
              - heading "Vote Share" [level=3] [ref=e570]
              - paragraph [ref=e571]: Percentage of total votes received by a candidate or party.
              - generic [ref=e572]:
                - generic [ref=e573]: Systems
                - generic [ref=e574]: Intermediate
              - generic [ref=e575]:
                - button "Ask AI to explain more" [ref=e576]
                - button "Bookmark Vote Share" [ref=e577]:
                  - img [ref=e578]
            - article [ref=e580]:
              - heading "Voter Slip" [level=3] [ref=e581]
              - paragraph [ref=e582]: Document sent to registered voters showing their polling booth details.
              - generic [ref=e583]:
                - generic [ref=e584]: Documents
                - generic [ref=e585]: Basic
              - generic [ref=e586]:
                - button "Ask AI to explain more" [ref=e587]
                - button "Bookmark Voter Slip" [ref=e588]:
                  - img [ref=e589]
            - article [ref=e591]:
              - heading "VVPAT" [level=3] [ref=e592]
              - paragraph [ref=e593]: Voter Verified Paper Audit Trail — paper receipt generated by EVM for verification.
              - generic [ref=e594]:
                - generic [ref=e595]: Voting Process
                - generic [ref=e596]: Intermediate
              - generic [ref=e597]:
                - button "Ask AI to explain more" [ref=e598]
                - button "Bookmark VVPAT" [ref=e599]:
                  - img [ref=e600]
            - article [ref=e602]:
              - heading "Whip" [level=3] [ref=e603]
              - paragraph [ref=e604]: Party directive to members on how to vote in legislature.
              - generic [ref=e605]:
                - generic [ref=e606]: Legal
                - generic [ref=e607]: Advanced
              - generic [ref=e608]:
                - button "Ask AI to explain more" [ref=e609]
                - button "Bookmark Whip" [ref=e610]:
                  - img [ref=e611]
  - contentinfo [ref=e613]:
    - generic [ref=e614]:
      - generic [ref=e615]:
        - generic [ref=e616]:
          - heading "ElectEd" [level=2] [ref=e617]
          - paragraph [ref=e618]: Election learning made simple, interactive, and non-partisan.
        - navigation "Footer navigation" [ref=e619]:
          - heading "Links" [level=3] [ref=e620]
          - list [ref=e621]:
            - listitem [ref=e622]:
              - link "Home" [ref=e623] [cursor=pointer]:
                - /url: /
            - listitem [ref=e624]:
              - link "Chat" [ref=e625] [cursor=pointer]:
                - /url: /chat
            - listitem [ref=e626]:
              - link "Timeline" [ref=e627] [cursor=pointer]:
                - /url: /timeline
            - listitem [ref=e628]:
              - link "Steps" [ref=e629] [cursor=pointer]:
                - /url: /steps
            - listitem [ref=e630]:
              - link "Quiz" [ref=e631] [cursor=pointer]:
                - /url: /quiz
            - listitem [ref=e632]:
              - link "Glossary" [ref=e633] [cursor=pointer]:
                - /url: /glossary
        - generic [ref=e634]:
          - paragraph [ref=e635]: ElectEd is a non-partisan educational platform. We do not support any political party or candidate.
          - paragraph [ref=e636]: "Data source: Election Commission of India"
      - generic [ref=e637]:
        - paragraph [ref=e638]: © 2026 ElectEd. All rights reserved.
        - paragraph [ref=e639]: Built for civic education
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | 
  4  | const PAGES = [
  5  |   { name: 'Home', path: '/' },
  6  |   { name: 'Chat', path: '/chat' },
  7  |   { name: 'Timeline', path: '/timeline' },
  8  |   { name: 'Steps', path: '/steps' },
  9  |   { name: 'Quiz', path: '/quiz' },
  10 |   { name: 'Glossary', path: '/glossary' },
  11 |   { name: 'Compare', path: '/compare' },
  12 | ];
  13 | 
  14 | for (const { name, path } of PAGES) {
  15 |   test(`${name} page — zero critical WCAG violations`, async ({ page }) => {
  16 |     await page.goto(path);
  17 |     // Wait for content to settle
  18 |     await page.waitForLoadState('networkidle');
  19 | 
  20 |     const results = await new AxeBuilder({ page })
  21 |       .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
  22 |       // Exclude known third-party widget issues
  23 |       .exclude('[data-radix-popper-content-wrapper]')
  24 |       .analyze();
  25 | 
  26 |     const critical = results.violations.filter((v) => v.impact === 'critical');
  27 |     const serious = results.violations.filter((v) => v.impact === 'serious');
  28 | 
  29 |     if (critical.length > 0 || serious.length > 0) {
  30 |       const msgs = [...critical, ...serious].map(
  31 |         (v) => `[${v.impact}] ${v.id}: ${v.description}\n  → ${v.helpUrl}`
  32 |       );
> 33 |       throw new Error(`WCAG violations on ${name}:\n${msgs.join('\n')}`);
     |             ^ Error: WCAG violations on Glossary:
  34 |     }
  35 | 
  36 |     expect(results.violations.filter((v) => ['critical', 'serious'].includes(v.impact ?? ''))).toHaveLength(0);
  37 |   });
  38 | }
  39 | 
  40 | test('all pages have unique document titles', async ({ page }) => {
  41 |   const titles: string[] = [];
  42 |   for (const { path } of PAGES) {
  43 |     await page.goto(path);
  44 |     await page.waitForLoadState('domcontentloaded');
  45 |     titles.push(await page.title());
  46 |   }
  47 |   const uniqueTitles = new Set(titles);
  48 |   expect(uniqueTitles.size).toBe(titles.length);
  49 | });
  50 | 
  51 | test('skip nav link is the first focusable element', async ({ page }) => {
  52 |   await page.goto('/');
  53 |   await page.keyboard.press('Tab');
  54 |   const focused = page.locator(':focus');
  55 |   await expect(focused).toHaveAttribute('href', '#main-content');
  56 | });
  57 | 
```