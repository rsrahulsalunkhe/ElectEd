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
        - generic [ref=e13]: ElectEd
      - navigation "Main navigation" [ref=e14]:
        - link "Chat with our AI election guide" [ref=e15] [cursor=pointer]:
          - /url: /chat
          - text: AI Assistant
        - link "Election timeline visualizer" [ref=e16] [cursor=pointer]:
          - /url: /timeline
          - text: Timeline
        - link "Step-by-step voting guide" [ref=e17] [cursor=pointer]:
          - /url: /steps
          - text: Voting Steps
        - link "Test your election knowledge" [ref=e18] [cursor=pointer]:
          - /url: /quiz
          - text: Quiz
        - link "Election terms dictionary" [ref=e19] [cursor=pointer]:
          - /url: /glossary
          - text: Glossary
        - link "Compare election systems worldwide" [ref=e21] [cursor=pointer]:
          - /url: /compare
          - text: Compare
      - generic [ref=e22]:
        - 'button "Language: English. Click to change." [ref=e24]':
          - img [ref=e25]
          - generic [ref=e28]: English
        - button "Sign in with Google to save progress" [ref=e29]:
          - img [ref=e30]
          - generic [ref=e33]: Sign in
  - main [ref=e34]:
    - generic [ref=e35]:
      - generic [ref=e36]:
        - heading "Election Glossary" [level=1] [ref=e37]
        - paragraph [ref=e38]: A comprehensive A–Z dictionary of election and voting terminology.
      - generic [ref=e39]:
        - generic [ref=e40]:
          - paragraph [ref=e41]: Term of the Day
          - heading "Form 6" [level=2] [ref=e42]
          - paragraph [ref=e43]: Application form to register as a new voter.
          - button "Share Term" [ref=e44]
        - generic [ref=e45]:
          - search "Glossary term search" [ref=e46]:
            - generic [ref=e47]:
              - img [ref=e48]
              - generic [ref=e51]: Search any election term
              - searchbox "Search any election term" [ref=e52]
          - group "Alphabet filter" [ref=e53]:
            - button "A" [ref=e54]
            - button "B" [ref=e55]
            - button "C" [ref=e56]
            - button "D" [ref=e57]
            - button "E" [ref=e58]
            - button "F" [ref=e59]
            - button "G" [ref=e60]
            - button "H" [ref=e61]
            - button "I" [ref=e62]
            - button "J" [ref=e63]
            - button "K" [ref=e64]
            - button "L" [ref=e65]
            - button "M" [ref=e66]
            - button "N" [ref=e67]
            - button "O" [ref=e68]
            - button "P" [ref=e69]
            - button "Q" [ref=e70]
            - button "R" [ref=e71]
            - button "S" [ref=e72]
            - button "T" [ref=e73]
            - button "U" [ref=e74]
            - button "V" [ref=e75]
            - button "W" [ref=e76]
            - button "X" [ref=e77]
            - button "Y" [ref=e78]
            - button "Z" [ref=e79]
            - button "ALL" [ref=e80]
          - generic [ref=e81]:
            - article [ref=e82]:
              - heading "Affidavit" [level=3] [ref=e83]
              - paragraph [ref=e84]: Sworn statement candidates must file declaring assets, liabilities and criminal record.
              - generic [ref=e85]:
                - generic [ref=e86]: Documents
                - generic [ref=e87]: Intermediate
              - generic [ref=e88]:
                - button "Ask AI to explain more" [ref=e89]
                - button "Bookmark Affidavit" [ref=e90]:
                  - img [ref=e91]
            - article [ref=e93]:
              - heading "Anti-defection law" [level=3] [ref=e94]
              - paragraph [ref=e95]: Law preventing elected members from switching parties without losing their seat.
              - generic [ref=e96]:
                - generic [ref=e97]: Legal
                - generic [ref=e98]: Advanced
              - generic [ref=e99]:
                - button "Ask AI to explain more" [ref=e100]
                - button "Bookmark Anti-defection law" [ref=e101]:
                  - img [ref=e102]
            - article [ref=e104]:
              - heading "Ballot" [level=3] [ref=e105]
              - paragraph [ref=e106]: The official document or method used to cast a vote in an election.
              - generic [ref=e107]:
                - generic [ref=e108]: Voting Process
                - generic [ref=e109]: Basic
              - generic [ref=e110]:
                - button "Ask AI to explain more" [ref=e111]
                - button "Bookmark Ballot" [ref=e112]:
                  - img [ref=e113]
            - article [ref=e115]:
              - heading "Booth capturing" [level=3] [ref=e116]
              - paragraph [ref=e117]: Illegal practice of taking over polling booth to cast fraudulent votes.
              - generic [ref=e118]:
                - generic [ref=e119]: Legal
                - generic [ref=e120]: Advanced
              - generic [ref=e121]:
                - button "Ask AI to explain more" [ref=e122]
                - button "Bookmark Booth capturing" [ref=e123]:
                  - img [ref=e124]
            - article [ref=e126]:
              - heading "By-election" [level=3] [ref=e127]
              - paragraph [ref=e128]: Election held to fill a single vacant seat between general elections.
              - generic [ref=e129]:
                - generic [ref=e130]: Voting Process
                - generic [ref=e131]: Basic
              - generic [ref=e132]:
                - button "Ask AI to explain more" [ref=e133]
                - button "Bookmark By-election" [ref=e134]:
                  - img [ref=e135]
            - article [ref=e137]:
              - heading "Cabinet" [level=3] [ref=e138]
              - paragraph [ref=e139]: Group of senior ministers who form the core of the government and make major decisions.
              - generic [ref=e140]:
                - generic [ref=e141]: Officials
                - generic [ref=e142]: Basic
              - generic [ref=e143]:
                - button "Ask AI to explain more" [ref=e144]
                - button "Bookmark Cabinet" [ref=e145]:
                  - img [ref=e146]
            - article [ref=e148]:
              - heading "Candidate" [level=3] [ref=e149]
              - paragraph [ref=e150]: A person who stands for election to a public office.
              - generic [ref=e151]:
                - generic [ref=e152]: Voting Process
                - generic [ref=e153]: Basic
              - generic [ref=e154]:
                - button "Ask AI to explain more" [ref=e155]
                - button "Bookmark Candidate" [ref=e156]:
                  - img [ref=e157]
            - article [ref=e159]:
              - heading "Constituency" [level=3] [ref=e160]
              - paragraph [ref=e161]: A geographic area whose residents elect a representative.
              - generic [ref=e162]:
                - generic [ref=e163]: Systems
                - generic [ref=e164]: Basic
              - generic [ref=e165]:
                - button "Ask AI to explain more" [ref=e166]
                - button "Bookmark Constituency" [ref=e167]:
                  - img [ref=e168]
            - article [ref=e170]:
              - heading "Counting agent" [level=3] [ref=e171]
              - paragraph [ref=e172]: Party representative present during vote counting to observe the process.
              - generic [ref=e173]:
                - generic [ref=e174]: Officials
                - generic [ref=e175]: Intermediate
              - generic [ref=e176]:
                - button "Ask AI to explain more" [ref=e177]
                - button "Bookmark Counting agent" [ref=e178]:
                  - img [ref=e179]
            - article [ref=e181]:
              - heading "Delimitation" [level=3] [ref=e182]
              - paragraph [ref=e183]: Process of redrawing constituency boundaries based on census data.
              - generic [ref=e184]:
                - generic [ref=e185]: Systems
                - generic [ref=e186]: Advanced
              - generic [ref=e187]:
                - button "Ask AI to explain more" [ref=e188]
                - button "Bookmark Delimitation" [ref=e189]:
                  - img [ref=e190]
            - article [ref=e192]:
              - heading "Deposit" [level=3] [ref=e193]
              - paragraph [ref=e194]: Money candidates must pay to file nomination, forfeited if they get less than 1/6th of votes.
              - generic [ref=e195]:
                - generic [ref=e196]: Legal
                - generic [ref=e197]: Intermediate
              - generic [ref=e198]:
                - button "Ask AI to explain more" [ref=e199]
                - button "Bookmark Deposit" [ref=e200]:
                  - img [ref=e201]
            - article [ref=e203]:
              - heading "ECI" [level=3] [ref=e204]
              - paragraph [ref=e205]: Election Commission of India — constitutional body that administers all elections.
              - generic [ref=e206]:
                - generic [ref=e207]: Officials
                - generic [ref=e208]: Basic
              - generic [ref=e209]:
                - button "Ask AI to explain more" [ref=e210]
                - button "Bookmark ECI" [ref=e211]:
                  - img [ref=e212]
            - article [ref=e214]:
              - heading "Electoral Roll" [level=3] [ref=e215]
              - paragraph [ref=e216]: Official list of all eligible voters in a constituency.
              - generic [ref=e217]:
                - generic [ref=e218]: Documents
                - generic [ref=e219]: Basic
              - generic [ref=e220]:
                - button "Ask AI to explain more" [ref=e221]
                - button "Bookmark Electoral Roll" [ref=e222]:
                  - img [ref=e223]
            - article [ref=e225]:
              - heading "EPIC" [level=3] [ref=e226]
              - paragraph [ref=e227]: Elector's Photo Identity Card — voter ID card issued by ECI.
              - generic [ref=e228]:
                - generic [ref=e229]: Documents
                - generic [ref=e230]: Basic
              - generic [ref=e231]:
                - button "Ask AI to explain more" [ref=e232]
                - button "Bookmark EPIC" [ref=e233]:
                  - img [ref=e234]
            - article [ref=e236]:
              - heading "EVM" [level=3] [ref=e237]
              - paragraph [ref=e238]: Electronic Voting Machine used to record votes.
              - generic [ref=e239]:
                - generic [ref=e240]: Voting Process
                - generic [ref=e241]: Basic
              - generic [ref=e242]:
                - button "Ask AI to explain more" [ref=e243]
                - button "Bookmark EVM" [ref=e244]:
                  - img [ref=e245]
            - article [ref=e247]:
              - heading "Exit Poll" [level=3] [ref=e248]
              - paragraph [ref=e249]: Survey conducted outside polling stations to predict election results.
              - generic [ref=e250]:
                - generic [ref=e251]: Systems
                - generic [ref=e252]: Intermediate
              - generic [ref=e253]:
                - button "Ask AI to explain more" [ref=e254]
                - button "Bookmark Exit Poll" [ref=e255]:
                  - img [ref=e256]
            - article [ref=e258]:
              - heading "First Past The Post (FPTP)" [level=3] [ref=e259]
              - paragraph [ref=e260]: Electoral system where candidate with most votes wins, regardless of majority.
              - generic [ref=e261]:
                - generic [ref=e262]: Systems
                - generic [ref=e263]: Intermediate
              - generic [ref=e264]:
                - button "Ask AI to explain more" [ref=e265]
                - button "Bookmark First Past The Post (FPTP)" [ref=e266]:
                  - img [ref=e267]
            - article [ref=e269]:
              - heading "Form 6" [level=3] [ref=e270]
              - paragraph [ref=e271]: Application form to register as a new voter.
              - generic [ref=e272]:
                - generic [ref=e273]: Documents
                - generic [ref=e274]: Basic
              - generic [ref=e275]:
                - button "Ask AI to explain more" [ref=e276]
                - button "Bookmark Form 6" [ref=e277]:
                  - img [ref=e278]
            - article [ref=e280]:
              - heading "Government" [level=3] [ref=e281]
              - paragraph [ref=e282]: The ruling party or coalition that administers the country/state.
              - generic [ref=e283]:
                - generic [ref=e284]: Officials
                - generic [ref=e285]: Basic
              - generic [ref=e286]:
                - button "Ask AI to explain more" [ref=e287]
                - button "Bookmark Government" [ref=e288]:
                  - img [ref=e289]
            - article [ref=e291]:
              - heading "Governor" [level=3] [ref=e292]
              - paragraph [ref=e293]: Constitutional head of a state, appointed by President.
              - generic [ref=e294]:
                - generic [ref=e295]: Officials
                - generic [ref=e296]: Intermediate
              - generic [ref=e297]:
                - button "Ask AI to explain more" [ref=e298]
                - button "Bookmark Governor" [ref=e299]:
                  - img [ref=e300]
            - article [ref=e302]:
              - heading "Hung Parliament/Assembly" [level=3] [ref=e303]
              - paragraph [ref=e304]: Situation where no single party wins enough seats for a majority.
              - generic [ref=e305]:
                - generic [ref=e306]: Systems
                - generic [ref=e307]: Intermediate
              - generic [ref=e308]:
                - button "Ask AI to explain more" [ref=e309]
                - button "Bookmark Hung Parliament/Assembly" [ref=e310]:
                  - img [ref=e311]
            - article [ref=e313]:
              - heading "Indelible Ink" [level=3] [ref=e314]
              - paragraph [ref=e315]: Permanent ink applied to voter's finger to prevent double voting.
              - generic [ref=e316]:
                - generic [ref=e317]: Voting Process
                - generic [ref=e318]: Basic
              - generic [ref=e319]:
                - button "Ask AI to explain more" [ref=e320]
                - button "Bookmark Indelible Ink" [ref=e321]:
                  - img [ref=e322]
            - article [ref=e324]:
              - heading "Lok Sabha" [level=3] [ref=e325]
              - paragraph [ref=e326]: Lower house of Indian Parliament, directly elected by citizens.
              - generic [ref=e327]:
                - generic [ref=e328]: Systems
                - generic [ref=e329]: Basic
              - generic [ref=e330]:
                - button "Ask AI to explain more" [ref=e331]
                - button "Bookmark Lok Sabha" [ref=e332]:
                  - img [ref=e333]
            - article [ref=e335]:
              - heading "Lotus symbol" [level=3] [ref=e336]
              - paragraph [ref=e337]: Reserved symbol for BJP in India.
              - generic [ref=e338]:
                - generic [ref=e339]: Documents
                - generic [ref=e340]: Basic
              - generic [ref=e341]:
                - button "Ask AI to explain more" [ref=e342]
                - button "Bookmark Lotus symbol" [ref=e343]:
                  - img [ref=e344]
            - article [ref=e346]:
              - heading "Manifesto" [level=3] [ref=e347]
              - paragraph [ref=e348]: Document published by a political party outlining its policies and promises.
              - generic [ref=e349]:
                - generic [ref=e350]: Documents
                - generic [ref=e351]: Basic
              - generic [ref=e352]:
                - button "Ask AI to explain more" [ref=e353]
                - button "Bookmark Manifesto" [ref=e354]:
                  - img [ref=e355]
            - article [ref=e357]:
              - heading "MLA" [level=3] [ref=e358]
              - paragraph [ref=e359]: Member of Legislative Assembly — elected representative in state legislature.
              - generic [ref=e360]:
                - generic [ref=e361]: Officials
                - generic [ref=e362]: Basic
              - generic [ref=e363]:
                - button "Ask AI to explain more" [ref=e364]
                - button "Bookmark MLA" [ref=e365]:
                  - img [ref=e366]
            - article [ref=e368]:
              - heading "Model Code of Conduct" [level=3] [ref=e369]
              - paragraph [ref=e370]: ECI guidelines governing party and candidate behavior during elections.
              - generic [ref=e371]:
                - generic [ref=e372]: Legal
                - generic [ref=e373]: Intermediate
              - generic [ref=e374]:
                - button "Ask AI to explain more" [ref=e375]
                - button "Bookmark Model Code of Conduct" [ref=e376]:
                  - img [ref=e377]
            - article [ref=e379]:
              - heading "MP" [level=3] [ref=e380]
              - paragraph [ref=e381]: Member of Parliament — elected representative in Lok Sabha or Rajya Sabha.
              - generic [ref=e382]:
                - generic [ref=e383]: Officials
                - generic [ref=e384]: Basic
              - generic [ref=e385]:
                - button "Ask AI to explain more" [ref=e386]
                - button "Bookmark MP" [ref=e387]:
                  - img [ref=e388]
            - article [ref=e390]:
              - heading "Nomination" [level=3] [ref=e391]
              - paragraph [ref=e392]: Formal process of registering as a candidate for election.
              - generic [ref=e393]:
                - generic [ref=e394]: Voting Process
                - generic [ref=e395]: Basic
              - generic [ref=e396]:
                - button "Ask AI to explain more" [ref=e397]
                - button "Bookmark Nomination" [ref=e398]:
                  - img [ref=e399]
            - article [ref=e401]:
              - heading "NOTA" [level=3] [ref=e402]
              - paragraph [ref=e403]: None Of The Above — ballot option to reject all candidates.
              - generic [ref=e404]:
                - generic [ref=e405]: Voting Process
                - generic [ref=e406]: Basic
              - generic [ref=e407]:
                - button "Ask AI to explain more" [ref=e408]
                - button "Bookmark NOTA" [ref=e409]:
                  - img [ref=e410]
            - article [ref=e412]:
              - heading "Observer" [level=3] [ref=e413]
              - paragraph [ref=e414]: ECI appointed official who monitors the election process in a constituency.
              - generic [ref=e415]:
                - generic [ref=e416]: Officials
                - generic [ref=e417]: Intermediate
              - generic [ref=e418]:
                - button "Ask AI to explain more" [ref=e419]
                - button "Bookmark Observer" [ref=e420]:
                  - img [ref=e421]
            - article [ref=e423]:
              - heading "Opinion Poll" [level=3] [ref=e424]
              - paragraph [ref=e425]: Survey conducted before voting to gauge public sentiment.
              - generic [ref=e426]:
                - generic [ref=e427]: Systems
                - generic [ref=e428]: Intermediate
              - generic [ref=e429]:
                - button "Ask AI to explain more" [ref=e430]
                - button "Bookmark Opinion Poll" [ref=e431]:
                  - img [ref=e432]
            - article [ref=e434]:
              - heading "Polling Booth" [level=3] [ref=e435]
              - paragraph [ref=e436]: Location where voters go to cast their vote.
              - generic [ref=e437]:
                - generic [ref=e438]: Voting Process
                - generic [ref=e439]: Basic
              - generic [ref=e440]:
                - button "Ask AI to explain more" [ref=e441]
                - button "Bookmark Polling Booth" [ref=e442]:
                  - img [ref=e443]
            - article [ref=e445]:
              - heading "Polling Officer" [level=3] [ref=e446]
              - paragraph [ref=e447]: Government official who manages the voting process at a booth.
              - generic [ref=e448]:
                - generic [ref=e449]: Officials
                - generic [ref=e450]: Intermediate
              - generic [ref=e451]:
                - button "Ask AI to explain more" [ref=e452]
                - button "Bookmark Polling Officer" [ref=e453]:
                  - img [ref=e454]
            - article [ref=e456]:
              - heading "Presiding Officer" [level=3] [ref=e457]
              - paragraph [ref=e458]: Senior official in charge of a polling station.
              - generic [ref=e459]:
                - generic [ref=e460]: Officials
                - generic [ref=e461]: Intermediate
              - generic [ref=e462]:
                - button "Ask AI to explain more" [ref=e463]
                - button "Bookmark Presiding Officer" [ref=e464]:
                  - img [ref=e465]
            - article [ref=e467]:
              - heading "Proportional Representation" [level=3] [ref=e468]
              - paragraph [ref=e469]: Electoral system where seats are allocated proportional to votes received.
              - generic [ref=e470]:
                - generic [ref=e471]: Systems
                - generic [ref=e472]: Advanced
              - generic [ref=e473]:
                - button "Ask AI to explain more" [ref=e474]
                - button "Bookmark Proportional Representation" [ref=e475]:
                  - img [ref=e476]
            - article [ref=e478]:
              - heading "Rajya Sabha" [level=3] [ref=e479]
              - paragraph [ref=e480]: Upper house of Indian Parliament, indirectly elected by state legislators.
              - generic [ref=e481]:
                - generic [ref=e482]: Systems
                - generic [ref=e483]: Intermediate
              - generic [ref=e484]:
                - button "Ask AI to explain more" [ref=e485]
                - button "Bookmark Rajya Sabha" [ref=e486]:
                  - img [ref=e487]
            - article [ref=e489]:
              - heading "Re-election" [level=3] [ref=e490]
              - paragraph [ref=e491]: Election held again due to irregularities.
              - generic [ref=e492]:
                - generic [ref=e493]: Legal
                - generic [ref=e494]: Intermediate
              - generic [ref=e495]:
                - button "Ask AI to explain more" [ref=e496]
                - button "Bookmark Re-election" [ref=e497]:
                  - img [ref=e498]
            - article [ref=e500]:
              - heading "Reserved Constituency" [level=3] [ref=e501]
              - paragraph [ref=e502]: Seat reserved for SC/ST candidates to ensure representation.
              - generic [ref=e503]:
                - generic [ref=e504]: Legal
                - generic [ref=e505]: Intermediate
              - generic [ref=e506]:
                - button "Ask AI to explain more" [ref=e507]
                - button "Bookmark Reserved Constituency" [ref=e508]:
                  - img [ref=e509]
            - article [ref=e511]:
              - heading "Returning Officer" [level=3] [ref=e512]
              - paragraph [ref=e513]: Official responsible for conducting election in a constituency.
              - generic [ref=e514]:
                - generic [ref=e515]: Officials
                - generic [ref=e516]: Intermediate
              - generic [ref=e517]:
                - button "Ask AI to explain more" [ref=e518]
                - button "Bookmark Returning Officer" [ref=e519]:
                  - img [ref=e520]
            - article [ref=e522]:
              - heading "Silent Period" [level=3] [ref=e523]
              - paragraph [ref=e524]: 48 hours before voting when campaigning is prohibited.
              - generic [ref=e525]:
                - generic [ref=e526]: Legal
                - generic [ref=e527]: Intermediate
              - generic [ref=e528]:
                - button "Ask AI to explain more" [ref=e529]
                - button "Bookmark Silent Period" [ref=e530]:
                  - img [ref=e531]
            - article [ref=e533]:
              - heading "Swing" [level=3] [ref=e534]
              - paragraph [ref=e535]: Change in voting pattern compared to previous election.
              - generic [ref=e536]:
                - generic [ref=e537]: Systems
                - generic [ref=e538]: Advanced
              - generic [ref=e539]:
                - button "Ask AI to explain more" [ref=e540]
                - button "Bookmark Swing" [ref=e541]:
                  - img [ref=e542]
            - article [ref=e544]:
              - heading "Turnout" [level=3] [ref=e545]
              - paragraph [ref=e546]: Percentage of eligible voters who actually cast their vote.
              - generic [ref=e547]:
                - generic [ref=e548]: Voting Process
                - generic [ref=e549]: Basic
              - generic [ref=e550]:
                - button "Ask AI to explain more" [ref=e551]
                - button "Bookmark Turnout" [ref=e552]:
                  - img [ref=e553]
            - article [ref=e555]:
              - heading "Universal Adult Franchise" [level=3] [ref=e556]
              - paragraph [ref=e557]: Right of every adult citizen to vote regardless of gender, caste, religion.
              - generic [ref=e558]:
                - generic [ref=e559]: Legal
                - generic [ref=e560]: Basic
              - generic [ref=e561]:
                - button "Ask AI to explain more" [ref=e562]
                - button "Bookmark Universal Adult Franchise" [ref=e563]:
                  - img [ref=e564]
            - article [ref=e566]:
              - heading "Vote Share" [level=3] [ref=e567]
              - paragraph [ref=e568]: Percentage of total votes received by a candidate or party.
              - generic [ref=e569]:
                - generic [ref=e570]: Systems
                - generic [ref=e571]: Intermediate
              - generic [ref=e572]:
                - button "Ask AI to explain more" [ref=e573]
                - button "Bookmark Vote Share" [ref=e574]:
                  - img [ref=e575]
            - article [ref=e577]:
              - heading "Voter Slip" [level=3] [ref=e578]
              - paragraph [ref=e579]: Document sent to registered voters showing their polling booth details.
              - generic [ref=e580]:
                - generic [ref=e581]: Documents
                - generic [ref=e582]: Basic
              - generic [ref=e583]:
                - button "Ask AI to explain more" [ref=e584]
                - button "Bookmark Voter Slip" [ref=e585]:
                  - img [ref=e586]
            - article [ref=e588]:
              - heading "VVPAT" [level=3] [ref=e589]
              - paragraph [ref=e590]: Voter Verified Paper Audit Trail — paper receipt generated by EVM for verification.
              - generic [ref=e591]:
                - generic [ref=e592]: Voting Process
                - generic [ref=e593]: Intermediate
              - generic [ref=e594]:
                - button "Ask AI to explain more" [ref=e595]
                - button "Bookmark VVPAT" [ref=e596]:
                  - img [ref=e597]
            - article [ref=e599]:
              - heading "Whip" [level=3] [ref=e600]
              - paragraph [ref=e601]: Party directive to members on how to vote in legislature.
              - generic [ref=e602]:
                - generic [ref=e603]: Legal
                - generic [ref=e604]: Advanced
              - generic [ref=e605]:
                - button "Ask AI to explain more" [ref=e606]
                - button "Bookmark Whip" [ref=e607]:
                  - img [ref=e608]
  - contentinfo [ref=e610]:
    - generic [ref=e611]:
      - generic [ref=e612]:
        - generic [ref=e613]:
          - heading "ElectEd" [level=2] [ref=e614]
          - paragraph [ref=e615]: Election learning made simple, interactive, and non-partisan.
        - navigation "Footer navigation" [ref=e616]:
          - heading "Links" [level=3] [ref=e617]
          - list [ref=e618]:
            - listitem [ref=e619]:
              - link "Home" [ref=e620] [cursor=pointer]:
                - /url: /
            - listitem [ref=e621]:
              - link "Chat" [ref=e622] [cursor=pointer]:
                - /url: /chat
            - listitem [ref=e623]:
              - link "Timeline" [ref=e624] [cursor=pointer]:
                - /url: /timeline
            - listitem [ref=e625]:
              - link "Steps" [ref=e626] [cursor=pointer]:
                - /url: /steps
            - listitem [ref=e627]:
              - link "Quiz" [ref=e628] [cursor=pointer]:
                - /url: /quiz
            - listitem [ref=e629]:
              - link "Glossary" [ref=e630] [cursor=pointer]:
                - /url: /glossary
        - generic [ref=e631]:
          - paragraph [ref=e632]: ElectEd is a non-partisan educational platform. We do not support any political party or candidate.
          - paragraph [ref=e633]: "Data source: Election Commission of India"
      - generic [ref=e634]:
        - paragraph [ref=e635]: © 2026 ElectEd. All rights reserved.
        - paragraph [ref=e636]: Built for civic education
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