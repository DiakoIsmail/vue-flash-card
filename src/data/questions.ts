import type { Category } from '../types'

export const categories: Category[] = [
  {
    id: 'java-grunder',
    title: 'Java – Grunder och avancerat',
    color: '#1e40af',
    icon: '☕',
    questions: [
      {
        id: 1,
        question: 'Vad är skillnaden mellan en abstrakt klass och ett interface i Java?',
        answer: 'En abstrakt klass kan ha tillstånd (fält), konstruktorer och konkreta metoder, medan ett interface (sedan Java 8) kan ha default- och statiska metoder men inget tillstånd. En klass kan bara ärva från en abstrakt klass men implementera flera interfaces.\n\nAnvänd abstrakt klass när klasser delar implementering; interface när du vill definiera ett kontrakt.',
        tip: 'Nämn ett exempel från ett projekt där du valde det ena framför det andra och varför.',
      },
      {
        id: 2,
        question: 'Förklara skillnaden mellan HashMap och ConcurrentHashMap.',
        answer: 'HashMap är inte trådsäker – om flera trådar skriver samtidigt kan det orsaka race conditions. ConcurrentHashMap använder segment-locking (Java 7) eller CAS-operationer (Java 8+) för att möjliggöra parallell läsning och skrivning utan att låsa hela kartan.\n\nLämplig i flertrådade miljöer som en mikroserviceapplikation.',
        tip: 'Systemet hanterar höga volymer – trådsäkerhet är relevant att lyfta.',
      },
      {
        id: 3,
        question: 'Vad är Java Streams och ge ett exempel på användning?',
        answer: 'Streams (Java 8+) erbjuder ett funktionellt sätt att bearbeta kollektioner med operationer som filter(), map(), reduce() och collect().\n\nExempel:\nlist.stream().filter(e -> e.isActive()).map(Employee::getName).collect(Collectors.toList())\n\nLazy evaluation gör det effektivt; parallelStream() möjliggör parallell bearbetning.',
        tip: 'Visa att du kan skriva ren, modern Java-kod.',
      },
      {
        id: 4,
        question: 'Vad innebär Optional och varför används det?',
        answer: 'Optional är en container som antingen innehåller ett värde eller är tom. Det ersätter null-returvärden och tvingar anroparen att hantera avsaknad av värde explicit med isPresent(), orElse() eller ifPresent().\n\nDet minskar risken för NullPointerException och gör API:er mer expressiva.',
      },
      {
        id: 5,
        question: 'Förklara minnesbehantning och Garbage Collection i JVM.',
        answer: 'JVM delar heap i Young Generation (Eden + Survivor) och Old Generation. Kortlivade objekt samlas i Young Gen av Minor GC; långlivade objekt befordras till Old Gen. Major/Full GC rensar Old Gen men är dyrare. G1GC och ZGC är moderna low-pause-collectorer.\n\nVanliga problem: minneläckor via ej borttagna lyssnare, eller för stora heap-storleksinställningar.',
      },
      {
        id: 19,
        question: 'Förklara Java Memory Model (JMM) och vad volatile innebär.',
        answer: 'JMM definierar hur trådar ser varandras skrivningar till minnet. Utan synkronisering kan en tråd se ett inaktuellt cachat värde. volatile garanterar att en variabels värde alltid läses direkt från huvudminnet och att skrivningar omedelbart är synliga för andra trådar.\n\nDet löser visibility-problemet men inte atomicitet – för det används AtomicInteger/AtomicReference eller synchronized-block.',
        tip: 'Vanlig intervjufråga för senior-nivå.',
      },
      {
        id: 20,
        question: 'Vad är skillnaden mellan synchronized, ReentrantLock och StampedLock?',
        answer: 'synchronized är enklast – JVM hanterar låsning och upplåsning automatiskt, men erbjuder ingen fairness-garanti eller timeout.\n\nReentrantLock (java.util.concurrent) ger mer kontroll: tryLock() med timeout, fairness-läge och explicit lock/unlock.\n\nStampedLock (Java 8+) ger optimistisk läsning utan lås – perfekt för read-heavy scenarier. Undvik over-synkronisering; preferera immutable objekt och trådsäkra datastrukturer när möjligt.',
      },
      {
        id: 21,
        question: 'Förklara CompletableFuture och asynkron programmering i Java.',
        answer: 'CompletableFuture (Java 8+) möjliggör non-blocking asynkron kod med callbacks. supplyAsync() kör en uppgift i en tråd-pool; thenApply() transformerar resultatet; thenCompose() kedjar asynkrona operationer; exceptionally() hanterar fel.\n\nExempel:\nCompletableFuture.supplyAsync(() -> fetchData()).thenApply(this::transform).join()\n\nI mikrotjänster kan detta användas för att anropa flera tjänster parallellt och kombinera resultaten.',
        tip: 'Relevant för integrationer mot externa system parallellt.',
      },
      {
        id: 22,
        question: 'Vad är design patterns och vilka använder du mest i Java?',
        answer: 'Vanliga mönster i Java-backend:\n• Singleton (Spring beans är singletons per default)\n• Builder (skapar komplexa objekt stegvis – t.ex. Lombok @Builder)\n• Factory (skapar objekt utan att exponera skapandelogik)\n• Strategy (utbytbar algoritm)\n• Observer (event-driven)\n\nI Spring-kontext: Dependency Injection är IoC-mönstret som genomsyrar hela ramverket. Decorator används ofta i Spring Security (filter-kedjor).',
        tip: 'Lyft ett konkret exempel där du löste ett problem med ett designmönster.',
      },
      {
        id: 23,
        question: 'Vad är skillnaden mellan checked och unchecked exceptions, och hur designar du felhantering?',
        answer: 'Checked exceptions (t.ex. IOException) måste deklareras eller fångas – de representerar förväntade felfall som anroparen bör hantera.\n\nUnchecked exceptions (RuntimeException och subklasser) behöver inte deklareras och används för programmeringsfel.\n\nModern Java-praxis: kasta specifika unchecked exceptions, använd custom exception-klasser med meningsfulla meddelanden, och fånga exceptions högt upp i stacken (t.ex. i en global @ControllerAdvice i Spring).\n\nLogga alltid stack trace men exponera inte det till klienten.',
      },
    ],
  },
  {
    id: 'backend-rest',
    title: 'Backend, REST och mikrotjänster',
    color: '#6d28d9',
    icon: '🌐',
    questions: [
      {
        id: 6,
        question: 'Hur designar du ett RESTful API på ett korrekt sätt?',
        answer: 'Använd rätt HTTP-verb: GET (hämta), POST (skapa), PUT/PATCH (uppdatera), DELETE (ta bort). Resurser namnges med substantiv i plural (/users, /claims).\n\nReturnera korrekta HTTP-statuskoder (200, 201, 400, 404, 500). Versionshantera API:et (/api/v1/).\n\nAnvänd HATEOAS där det ger värde. Dokumentera med OpenAPI/Swagger.',
        tip: 'Integration mot externa system – robust API-design är centralt.',
      },
      {
        id: 7,
        question: 'Vad är mikrotjänster och vilka fördelar/nackdelar har de jämfört med monolit?',
        answer: 'Mikrotjänster är små, självständiga tjänster med enskilt ansvar som kommunicerar via API eller meddelandekö.\n\nFördelar: oberoende driftsättning, skalbarhet per tjänst, teknikfrihet.\n\nNackdelar: ökad komplexitet i nätverk och testning, distributed system-problem (latens, konsistens). Platsannonsen nämner mikrotjänster i OpenShift – förtrogenhet med detta är meriterande.',
      },
      {
        id: 8,
        question: 'Vad är OpenShift och hur skiljer det sig från Kubernetes?',
        answer: 'OpenShift är Red Hats enterprise-plattform byggd ovanpå Kubernetes. Det lägger till: inbyggd CI/CD (Pipelines), Source-to-Image (S2I), strängare säkerhetspolicyer (SCC), och ett grafiskt webbgränssnitt.\n\nKubernetes är det underliggande orkestreringslagret. Om du jobbat med kubectl-kommandon och YAML-manifest är kompetensen delvis överförbar.',
        tip: 'Även om du saknar direkt OpenShift-erfarenhet, lyft Kubernetes/Docker-kunskaper.',
      },
      {
        id: 9,
        question: 'Hur hanterar du fel och undantag i ett distribuerat system?',
        answer: 'Använd circuit breaker-mönster (t.ex. Resilience4j) för att undvika kaskadfel. Implementera retry med exponential backoff. Logga korrelations-ID:n för att spåra anrop mellan tjänster.\n\nReturnera meningsfulla felmeddelanden utan att exponera interna detaljer. Distinguera mellan client errors (4xx) och server errors (5xx).',
      },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend – Vue & Angular',
    color: '#0f766e',
    icon: '🖥️',
    questions: [
      {
        id: 10,
        question: 'Vad är skillnaden mellan Vue och Angular, och när väljer du vilket?',
        answer: 'Angular är ett fullständigt ramverk med inbyggt DI, routing, RxJS och TypeScript-tvång. Vue är progressivt och lättare att börja med, men kan skalas upp med Pinia/Vuex och Vue Router.\n\nAngular passar stora team med strikta konventioner; Vue passar snabb prototyputveckling eller team med blandad bakgrund. Båda ramverk nämns i annonsen – visa att du känner till skillnaderna.',
      },
      {
        id: 11,
        question: 'Förklara component-based arkitektur i frontend.',
        answer: 'En komponent kapslar in HTML, CSS och logik i en återanvändbar enhet. Data flödar nedåt via props (Vue) / @Input (Angular), och händelser uppåt via emit / @Output.\n\nState som delas mellan komponenter hanteras med ett state management-bibliotek (Pinia, NgRx). Det möjliggör testning per komponent och återanvändbarhet.',
      },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps, CI/CD och verktyg',
    color: '#c2410c',
    icon: '⚙️',
    questions: [
      {
        id: 12,
        question: 'Vad innebär DevOps och hur har du arbetat i en DevOps-kultur?',
        answer: 'DevOps bryter ner silos mellan utveckling och drift. Praktiskt innebär det: automatiserade pipelines (CI/CD), infrastructure as code, kontinuerlig monitorering, och ett ansvar hela vägen från kod till produktion.\n\nI agila team innebär det att utvecklarna också driftsätter och övervakar sin kod.',
        tip: 'Berätta om en pipeline du byggt eller förbättrat, gärna med Jenkins.',
      },
      {
        id: 13,
        question: 'Förklara Git-flöden – vad är skillnaden mellan merge och rebase?',
        answer: 'Merge skapar en ny merge-commit och bevarar historiken som den var. Rebase skriver om commit-historiken för att lägga dina commits ovanpå en annan branch – ger en linjärare historik men bör undvikas på delade branches.\n\nFeature branch-workflow (GitHub Flow / Gitflow) är vanliga mönster. Bitbucket och Git används i projektet – visa att du är van vid code reviews och PR-processer.',
      },
      {
        id: 14,
        question: 'Vad är Jenkins och hur sätter du upp en enkel CI-pipeline?',
        answer: 'Jenkins är en open source automationsserver. En pipeline (Jenkinsfile) definieras i kod och innehåller stages som: Checkout, Build (mvn package), Test (mvn test / Cucumber), Code Quality (SonarQube), och Deploy till OpenShift.\n\nMultibranch pipelines triggas automatiskt vid push till Bitbucket.',
      },
      {
        id: 15,
        question: 'Hur jobbar du med databaser och SQL i ett Java-projekt?',
        answer: 'I Java används ofta JPA/Hibernate som ORM, eller Spring Data JPA med repositories. För komplexa queries används JPQL eller native SQL.\n\nDet är viktigt att förstå N+1-problemet och hur man löser det med JOIN FETCH eller projections. Systemet hanterar känslig data – transaktionshantering (ACID) och korrekt index-design är centralt.',
      },
    ],
  },
  {
    id: 'agilt',
    title: 'Agila arbetssätt och personliga frågor',
    color: '#9d174d',
    icon: '🔄',
    questions: [
      {
        id: 16,
        question: 'Hur arbetar du i ett agilt team? Berätta om din erfarenhet av Scrum/Kanban.',
        answer: 'I Scrum jobbar man i sprintar (1-4 veckor) med daily standups, sprint planning, review och retrospektiv. Jira används för att hantera backlog och spåra tasks, Confluence för dokumentation.\n\nMin roll inkluderar att ta egna stories från backlog till deploy, delta i code reviews och bidra till team-ens förbättringsarbete i retrospektiv.',
        tip: 'Rollen betonar eget ansvar och vilja att ständigt förbättra – lyft detta.',
      },
      {
        id: 17,
        question: 'Hur hanterar du säkerhet och sekretessbelagd data i kod?',
        answer: 'Systemet hanterar känsliga personuppgifter (personnummer, hälsodata). Viktiga principer: kryptering i vila och transit (TLS, AES), rollbaserad åtkomstkontroll, minsta rättighetsprincipen, audit-loggning, och att aldrig logga PII.\n\nGDPR och Dataskyddslagen styr hur data hanteras. Bakgrundskontroll genomförs i rekryteringen.',
        tip: 'Visa ett högt säkerhetsmedvetande – det lyfts explicit i annonsen.',
      },
      {
        id: 18,
        question: 'Berätta om en komplex teknisk utmaning du löst.',
        answer: 'Strukturera svaret med STAR-metoden:\n• Situation (kontext)\n• Task (din uppgift)\n• Action (vad du konkret gjorde – t.ex. refaktorerade en legacy-tjänst, optimerade en SQL-query, implementerade retry-logik)\n• Result (mätbart resultat – lägre latens, färre fel, nöjdare användare)\n\nVälj ett exempel relevant för back-end Java eller integration.',
        tip: 'Förbered 2-3 konkreta exempel i förväg.',
      },
    ],
  },
  {
    id: 'hibernate-jpa',
    title: 'Hibernate och JPA',
    color: '#166534',
    icon: '🗄️',
    questions: [
      {
        id: 24,
        question: 'Förklara Hibernate och JPA – vad är skillnaden?',
        answer: 'JPA (Jakarta Persistence API) är en specifikation som definierar hur Java-objekt mappas mot relationsdatabaser via @Entity, @Table, @Column och liknande annotationer. Hibernate är den vanligaste implementationen av JPA-specifikationen.\n\nMan kan programmera mot JPA-interfacet (EntityManager) och byta ut Hibernate mot t.ex. EclipseLink.\n\nI Spring Boot används Spring Data JPA som ett lager ovanpå JPA/Hibernate med repositories.',
      },
      {
        id: 25,
        question: 'Vad är N+1-problemet i Hibernate och hur löser du det?',
        answer: 'N+1 uppstår när Hibernate gör 1 query för att hämta en lista, sedan N separata queries för att hämta relaterade entiteter (t.ex. varje orders rad-items).\n\nLösningar:\n1. JOIN FETCH i JPQL: SELECT o FROM Order o JOIN FETCH o.items\n2. @EntityGraph för att deklarativt specificera vad som ska laddas\n3. @BatchSize för att batcha lazy-laddning\n4. DTO-projektioner med @Query när du bara behöver ett subset av fält',
        tip: 'Vanlig fråga – ha ett konkret kodexempel redo.',
      },
      {
        id: 26,
        question: 'Förklara Hibernates caching-nivåer.',
        answer: 'First-level cache (L1) är kopplad till EntityManager/Session och är alltid aktiv – inom samma session returneras redan laddade entiteter från minnet.\n\nSecond-level cache (L2) delas mellan sessioner och konfigureras med t.ex. Ehcache eller Infinispan. Aktiveras med @Cache-annotationen på entiteten.\n\nQuery cache cacchar resultatet av specifika queries. L2-cache ökar prestanda men kräver noggrann hantering av cache-invalidering för att undvika dirty reads.',
      },
      {
        id: 27,
        question: 'Vad är skillnaden mellan EAGER och LAZY loading i JPA?',
        answer: 'EAGER loading hämtar relaterade entiteter direkt när huvudentiteten laddas – enkelt men kan orsaka onödiga queries och minnesproblem.\n\nLAZY loading (default för collections: @OneToMany, @ManyToMany) laddar relaterade entiteter först när de accessas.\n\nRisk: LazyInitializationException om sessionen är stängd.\n\nBest practice: använd LAZY som default, hämta EAGER med JOIN FETCH när du vet att du behöver relationen.',
      },
      {
        id: 28,
        question: 'Hur hanterar du databas-migrationer i ett Java-projekt?',
        answer: 'Flyway och Liquibase är de vanligaste verktygen.\n\nFlyway använder versionsnumrerade SQL-skript (V1__create_table.sql, V2__add_column.sql) som körs i ordning och aldrig ändras efteråt.\n\nLiquibase använder XML/YAML/JSON-changesets med rollback-stöd. I en DevOps-miljö körs migrationerna automatiskt vid applikationsstart eller som ett separat steg i CI/CD-pipelinen.\n\nDet är kritiskt att migrationer är bakåtkompatibla vid zero-downtime-driftsättning.',
        tip: 'Driftsättning mot OpenShift – zero-downtime är relevant.',
      },
    ],
  },
  {
    id: 'quarkus',
    title: 'Quarkus',
    color: '#7c3aed',
    icon: '⚡',
    questions: [
      {
        id: 29,
        question: 'Vad är Quarkus och varför används det i mikrotjänster?',
        answer: 'Quarkus är ett Kubernetes-nativt Java-ramverk optimerat för snabb starttid och låg minnesanvändning. Det kompileras med GraalVM till native image (native binary utan JVM) vilket ger starttider under 100ms och dramatiskt lägre minnesförbrukning jämfört med traditionell Spring Boot.\n\nQuarkus stöder MicroProfile, JAX-RS, CDI och Hibernate Panache. Perfekt för mikrotjänster i OpenShift/Kubernetes där containers startas och stoppas ofta.',
        tip: 'Vid mikrotjänster i OpenShift är Quarkus ett naturligt val i det ekosystemet.',
      },
      {
        id: 30,
        question: 'Vad är skillnaden mellan Quarkus JVM-läge och native-läge?',
        answer: 'JVM-läge: Quarkus körs på vanlig JVM – snabbare kompilering (mvn quarkus:dev), bra för development.\n\nNative-läge: Kompileras med GraalVM AOT (Ahead-of-Time) till en plattformsspecifik binär.\n\nFördelar: ~10x snabbare start, ~5x lägre minnesanvändning.\nNackdelar: längre byggtid (5-20 min), reflektionskod måste registreras explicit.\n\nNative passar produktion i Kubernetes; JVM-läget används under utveckling med hot-reload (quarkus:dev).',
      },
      {
        id: 31,
        question: 'Vad är Hibernate Panache och hur skiljer det sig från standard JPA?',
        answer: 'Panache är Quarkus-tillägget för Hibernate som förenklar databaskod med antingen:\n\n• Active Record-mönstret (entiteten ärver PanacheEntity och har inbyggda find/persist/delete-metoder)\n• Repository-mönstret (en separat PanacheRepository-klass)\n\nExempel med Active Record:\nPerson.find("name", "Anna").list()\n\nistället för EntityManager-queries.\n\nPanache eliminerar mycket boilerplate och stöder Quarkus reaktiva databasklienter.',
      },
      {
        id: 32,
        question: 'Hur hanterar Quarkus dependency injection (CDI)?',
        answer: 'Quarkus implementerar CDI (Contexts and Dependency Injection) – Javas standardspecifikation för DI.\n\nScopes:\n• @ApplicationScoped (singleton per applikation)\n• @RequestScoped (per HTTP-request)\n• @SessionScoped\n\nInjicering med @Inject. Quarkus gör CDI-scanning vid kompilering (inte runtime), vilket bidrar till snabb starttid.\n\nJämfört med Spring: @ApplicationScoped ~ @Singleton/Spring bean; @Inject ~ @Autowired.',
        tip: 'Om du kan Spring DI kan du Quarkus CDI – lyft parallellerna.',
      },
      {
        id: 33,
        question: 'Hur exponerar du ett REST-API i Quarkus?',
        answer: 'Quarkus använder JAX-RS (RESTEasy) eller den reaktiva varianten RESTEasy Reactive.\n\nAnnotationer:\n• @Path("/api/claims")\n• @GET, @POST\n• @Produces(MediaType.APPLICATION_JSON)\n\nJSON-serialisering sker via Jackson eller JSON-B. OpenAPI-dokumentation genereras automatiskt med quarkus-smallrye-openapi-tillägget.\n\nReaktiv: @GET kombinerat med Uni (Mutiny) för non-blocking endpoints.',
      },
    ],
  },
  {
    id: 'openshift-tekton',
    title: 'OpenShift, Tekton och ArgoCD',
    color: '#0e7490',
    icon: '🚀',
    questions: [
      {
        id: 34,
        question: 'Vad är Tekton och hur används det i en CI-pipeline på OpenShift?',
        answer: 'Tekton är ett Kubernetes-nativt CI/CD-ramverk som kör pipelines som Kubernetes-resurser (CRD:er).\n\nGrundbegrepp:\n• Task (en eller flera Steps som körs i en container)\n• Pipeline (kedjor av Tasks)\n• PipelineRun (en konkret körning)\n• EventListener + TriggerBinding (för automatisk trigger vid git push)\n\nFördel jämfört med Jenkins: Tekton-pipelines är portabla YAML-manifest som versionshantera i Git, körs nativt i OpenShift Pipelines, och skalar automatiskt.',
        tip: 'OpenShift Pipelines är Red Hats paketerade Tekton – begreppsmässigt samma sak.',
      },
      {
        id: 35,
        question: 'Beskriv ett typiskt Tekton-flöde från git push till deploy.',
        answer: '1. Utvecklaren pushar kod till Bitbucket/Git\n2. En webhook triggar EventListener i OpenShift\n3. En PipelineRun startas automatiskt med Tasks:\n   a) git-clone – hämtar koden\n   b) maven-build – kompilerar och kör enhetstester\n   c) sonar-scan – statisk kodanalys\n   d) buildah/kaniko – bygger container-image\n   e) update-manifest – uppdaterar image-taggen i GitOps-repot\n4. ArgoCD detekterar förändringen och synkroniserar till OpenShift-klustret',
        tip: 'Detta flöde kombinerar Tekton (CI) med ArgoCD (CD) – det moderna GitOps-mönstret.',
      },
      {
        id: 36,
        question: 'Vad är ArgoCD och vad innebär GitOps?',
        answer: 'ArgoCD är ett deklarativt GitOps-verktyg för Kubernetes/OpenShift.\n\nGitOps-principen: Git är den enda källan till sanning för infrastruktur och appkonfiguration.\n\nArgoCD övervakar ett Git-repo med Kubernetes-manifest (YAML/Helm/Kustomize) och säkerställer att klustrets tillstånd alltid matchar det som finns i Git. Om någon manuellt ändrar något i klustret detekterar ArgoCD avvikelsen (OutOfSync) och kan automatiskt återställa till önskat tillstånd (auto-sync).\n\nFördelar: auditspår via git log, enkelt rollback (git revert), separerat CI och CD.',
        tip: 'ArgoCD + Tekton = komplett GitOps-pipeline. Känn till detta flöde väl.',
      },
      {
        id: 37,
        question: 'Vad är en OpenShift DeploymentConfig vs Deployment, och vad är en Route?',
        answer: 'Deployment (Kubernetes-standard) är det rekommenderade sättet att hantera pods – deklarerar önskat antal repliker och hanterar rolling updates. DeploymentConfig är OpenShifts äldre variant med fler trigger-alternativ men håller på att fasas ut.\n\nRoute är OpenShifts resurser (motsvarar Kubernetes Ingress) som exponerar en Service mot externa HTTP/HTTPS-anrop. En Route kopplas till en Service och kan ha TLS-terminering, antingen Edge (TLS termineras vid routern) eller Passthrough (krypterat ändå till poden).',
      },
      {
        id: 38,
        question: 'Hur hanterar du konfiguration och hemligheter i OpenShift?',
        answer: 'ConfigMap används för icke-känslig konfiguration (miljövariabler, config-filer) injicerad i pods.\n\nSecret används för känsliga värden (lösenord, API-nycklar, certifikat) – base64-kodade i etcd.\n\nI produktionsmiljöer integreras OpenShift ofta med HashiCorp Vault eller OpenShift Secrets Management för rotation och centraliserad hantering. I en Quarkus-applikation läses värden via @ConfigProperty("db.password") som mappas mot en Secret-monterad miljövariabel.',
        tip: 'Systemet hanterar känslig data – säker secrets-hantering är kritiskt.',
      },
      {
        id: 39,
        question: 'Förklara liveness, readiness och startup probes i Kubernetes/OpenShift.',
        answer: 'Liveness probe: kontrollerar om containern lever – om den misslyckas startas containern om.\n\nReadiness probe: kontrollerar om containern är redo att ta emot trafik – om den misslyckas tas poden bort från Service-balansen men startas inte om.\n\nStartup probe (Kubernetes 1.16+): ger långsamt startande applikationer tid att initieras innan liveness-proben aktiveras.\n\nI Quarkus exponeras dessa automatiskt via quarkus-smallrye-health tillägget på /q/health/live och /q/health/ready.',
      },
    ],
  },
  {
    id: 'spring-boot',
    title: 'Spring Boot och Spring-ekosystemet',
    color: '#991b1b',
    icon: '🌱',
    questions: [
      {
        id: 40,
        question: 'Vad är Spring Boot och hur skiljer det sig från Spring Framework?',
        answer: 'Spring Framework är grunden med IoC-container, AOP och moduler som Spring MVC och Spring Data.\n\nSpring Boot bygger ovanpå och tillhandahåller:\n• Auto-konfiguration (minimerar XML/Java-config)\n• Inbäddad server (Tomcat/Netty)\n• Starter-beroenden (spring-boot-starter-web drar in allt behövligt)\n• Production-ready funktioner via Actuator\n\nResultat: en applikation kan startas med en main()-metod och @SpringBootApplication på några minuter.',
      },
      {
        id: 41,
        question: 'Förklara Spring Security och hur du skyddar ett REST API.',
        answer: 'Spring Security hanterar autentisering (vem är du?) och auktorisering (vad får du göra?).\n\nFör REST-API:er används ofta JWT (JSON Web Token): klienten autentiserar sig, får en token, och skickar den i Authorization: Bearer-headern vid varje anrop.\n\nSpring Security-filtret validerar token och sätter SecurityContext. Roller och rättigheter konfigureras med @PreAuthorize("hasRole(ADMIN)") eller i SecurityFilterChain.\n\nCSRF-skydd inaktiveras typiskt för stateless REST-API:er.',
        tip: 'Vid hantering av känslig persondata är säker autentisering centralt.',
      },
      {
        id: 42,
        question: 'Vad är Spring Data JPA och hur använder du repositories?',
        answer: 'Spring Data JPA abstraherar bort EntityManager-boilerplate. Du definierar ett interface som ärver JpaRepository och får CRUD-metoder gratis.\n\nAnpassade queries via metodnamn:\nfindByLastNameAndCity(String ln, String city) genereras automatiskt.\n\nFör komplexa queries:\n@Query("SELECT u FROM User u WHERE u.age > :age") med JPQL, eller @Query(nativeQuery=true) för ren SQL.\n\nPaginering via Pageable-parametern och Page-returtyp.',
      },
      {
        id: 43,
        question: 'Vad är Spring Cloud och vilka problem löser det i mikrotjänstarkitektur?',
        answer: 'Spring Cloud tillhandahåller lösningar för vanliga distribuerade systemproblem:\n\n• Service Discovery (Eureka/Consul) – tjänster hittar varandra dynamiskt\n• API Gateway (Spring Cloud Gateway) – centraliserad routing, rate limiting, auth\n• Config Server – centraliserad konfiguration för alla mikrotjänster\n• Circuit Breaker (Resilience4j-integration) – felhantering och fallback\n• Distributed Tracing (Micrometer + Zipkin/Jaeger) – spåra anrop mellan tjänster\n\nI OpenShift ersätts en del av detta av plattformens inbyggda service mesh (Istio/OpenShift Service Mesh).',
      },
      {
        id: 44,
        question: 'Hur fungerar transaktionshantering i Spring med @Transactional?',
        answer: '@Transactional på en metod eller klass innebär att Spring skapar en databastransaktion som committats vid framgång och rollbackas vid RuntimeException.\n\nViktiga attribut:\n• propagation (REQUIRED = delta i befintlig transaktion, REQUIRES_NEW = ny alltid)\n• isolation (READ_COMMITTED är vanlig default)\n• rollbackFor (specificera vilka exceptions triggar rollback)\n\nFallgrop: self-invocation (anropa @Transactional-metod från samma klass) fungerar inte utan Spring AOP-proxy – flytta metoden till en annan bean.',
      },
    ],
  },
  {
    id: 'testning',
    title: 'Testning – JUnit, Mockito och Cucumber',
    color: '#166534',
    icon: '🧪',
    questions: [
      {
        id: 45,
        question: 'Förklara testpyramiden och hur du strukturerar tester i ett Java-projekt.',
        answer: 'Testpyramiden (bottom-up):\n\n1. Enhetstester (unit tests) – snabba, isolerade, testar en klass/metod utan externa beroenden. Mest av dessa.\n\n2. Integrationstester – testar samverkan med databas, andra tjänster eller Spring-kontexten. Långsammare.\n\n3. End-to-end/systemtester – testar hela flödet. Färre men ger hög säkerhet.\n\nCucumber-tester är typiskt integrations- eller E2E-tester skrivna i Gherkin (Given/When/Then) som kommuniceras med verksamheten.',
      },
      {
        id: 46,
        question: 'Hur använder du Mockito för att isolera beroenden i enhetstester?',
        answer: 'Mockito skapar mock-objekt som simulerar beroenden utan att anropa riktig kod.\n\nNyckel-annotationer:\n• @Mock (skapar mock)\n• @InjectMocks (injicerar mocks i testad klass)\n• @Spy (real objekt med möjlighet att stubbla metoder)\n\nStubbing:\nwhen(repo.findById(1L)).thenReturn(Optional.of(entity))\n\nVerifiering:\nverify(repo, times(1)).save(any(Entity.class))\n\nArgumentCaptor fångar argument som skickats till mocks för detaljerad verifiering.',
      },
      {
        id: 47,
        question: 'Vad är Cucumber och hur skriver du ett feature-test med Gherkin?',
        answer: 'Cucumber möjliggör Behaviour Driven Development (BDD) – tester skrivs i naturligt språk.\n\nGherkin-syntax:\nFeature: Beräkna tandvårdsersättning\n\nScenario: Patient med hög kostnad\n  Given att patienten har en räkning på 5000 kr\n  When beräkningen körs\n  Then ska ersättningen vara 2500 kr\n\nStep definitions i Java kopplar Gherkin-steg till kod. Cucumber integrerar med JUnit 5 via @CucumberOptions.',
        tip: 'Cucumber nämns explicit i annonsen – ha ett konkret exempel.',
      },
      {
        id: 48,
        question: 'Hur testar du en Spring Boot REST-controller med @WebMvcTest?',
        answer: '@WebMvcTest laddar bara webb-lagret (controllers, filters) utan full Spring-kontext – snabbare än @SpringBootTest. Kombineras med MockMvc för att simulera HTTP-anrop:\n\nmockMvc.perform(get("/api/claims/1").contentType(APPLICATION_JSON))\n  .andExpect(status().isOk())\n  .andExpect(jsonPath("$.id").value(1))\n\nService-beroenden mockas med @MockBean. För integrationstest mot riktig databas används @DataJpaTest med in-memory H2 eller Testcontainers.',
      },
      {
        id: 49,
        question: 'Vad är Testcontainers och när använder du det?',
        answer: 'Testcontainers är ett Java-bibliotek som startar riktiga Docker-containers under integrationstester.\n\nTypisk användning: starta en PostgreSQL-container för databastester istället för in-memory H2 (som inte stöder alla SQL-dialekter). Eller starta en Kafka-container för meddelandetester.\n\n@Container\nPostgreSQLContainer postgres = new PostgreSQLContainer("postgres:15")\n\nContainers startas och stoppas automatiskt av JUnit 5-lifecycle.\n\nGer tester som är nära produktionsmiljön utan externa beroenden.',
      },
    ],
  },
  {
    id: 'observability',
    title: 'Observability, loggning och prestanda',
    color: '#1e40af',
    icon: '📊',
    questions: [
      {
        id: 50,
        question: 'Hur implementerar du strukturerad loggning i ett Java-mikrotjänstprojekt?',
        answer: 'Använd SLF4J som fasad med Logback eller Log4j2 som implementation. Strukturerad loggning (JSON-format) gör det möjligt att söka och filtrera i ELK-stack (Elasticsearch, Logback, Kibana) eller OpenShift Logging.\n\nNyckelprinciper:\n• Inkludera correlation ID (trace ID) i alla loggrader\n• Använd rätt log-nivå (DEBUG/INFO/WARN/ERROR)\n• Logga aldrig PII (personnummer, hälsodata)\n\nI Quarkus konfigureras JSON-loggning med quarkus-logging-json.',
      },
      {
        id: 51,
        question: 'Vad är distributed tracing och hur fungerar Micrometer/OpenTelemetry?',
        answer: 'Distributed tracing spårar ett anrop genom ett system av mikrotjänster. Varje anrop får ett trace ID som propageras via HTTP-headers (W3C TraceContext-standard).\n\nSpans representerar ett enskilt arbete (t.ex. ett databasanrop). Micrometer är Javas metrics-fasad (analogt med SLF4J men för metrics/tracing).\n\nOpenTelemetry är den moderna vendor-neutrala standarden. Data skickas till Jaeger eller Zipkin för visualisering, eller direkt till OpenShift Distributed Tracing (baserat på Jaeger).',
      },
      {
        id: 52,
        question: 'Hur profilerar du en Java-applikation med prestandaproblem?',
        answer: 'Steg 1: Identifiera symptomet – hög CPU, hög latens, minnesproblem (OutOfMemoryError).\n\nSteg 2: Samla in data:\n• Thread dump (jstack) för CPU-problem\n• Heap dump (jmap) för minnesproblem\n• JFR (Java Flight Recorder) för detaljerad profiling utan stor overhead\n\nSteg 3: Analysera – använd JDK Mission Control, VisualVM eller async-profiler.\n\nVanliga bottlenecks: N+1-queries mot databas, synkroniserade block som skapar köer, onödig objektallokering i tight loops.',
      },
      {
        id: 53,
        question: 'Vad är caching-strategier på applikationsnivå och hur implementerar du det i Spring?',
        answer: 'Spring Cache-abstraktion (@EnableCaching) med annotationerna:\n• @Cacheable (cacchar resultatet av en metod)\n• @CachePut (uppdaterar cache)\n• @CacheEvict (tömmer cache)\n\nBackend: Caffeine (in-memory, snabbt), Redis (distribuerat, persistent).\n\nViktiga överväganden:\n• Cache-invalidering (TTL vs event-driven)\n• Cache-stampede (many parallel misses)\n• Konsistens mellan noder i ett kluster\n\nI en mikrotjänstmiljö är Redis-cache vanlig för session-data och ofta accessad referensdata.',
      },
      {
        id: 54,
        question: 'Hur hanterar du asynkron kommunikation med meddelandeköer?',
        answer: 'Meddelandeköer (Kafka, RabbitMQ, ActiveMQ) möjliggör asynkron, lös koppling mellan tjänster.\n\nKafka är event streaming – meddelanden behålls och kan konsumeras igen; passar audit-logs och event sourcing.\n\nRabbitMQ är traditionell message broker – meddelanden försvinner när de konsumerats; passar task queues.\n\nI Spring: @KafkaListener / @RabbitListener.\nI Quarkus: SmallRye Reactive Messaging.\n\nViktigt: idempotent konsumtion (samma meddelande kan komma flera gånger), dead letter queue för felhantering.',
      },
    ],
  },
  {
    id: 'sakerhet',
    title: 'Säkerhet, arkitektur och kodkvalitet',
    color: '#6d28d9',
    icon: '🔒',
    questions: [
      {
        id: 55,
        question: 'Förklara OAuth 2.0 och OIDC – hur fungerar inloggning i en mikrotjänstmiljö?',
        answer: 'OAuth 2.0 är ett auktoriseringsprotokoll; OIDC (OpenID Connect) är ett identitetslager ovanpå OAuth 2.0.\n\nFlöde (Authorization Code):\n1. Användaren skickas till Identity Provider (Keycloak, Azure AD)\n2. Efter inloggning returneras en authorization code\n3. Backend byter koden mot access token + ID token (JWT)\n4. Access token skickas med alla API-anrop och valideras av varje mikrotjänst\n\nI OpenShift används ofta Red Hat SSO (Keycloak) som Identity Provider. Spring Security hanterar detta med spring-boot-starter-oauth2-resource-server.',
      },
      {
        id: 56,
        question: 'Vad är OWASP Top 10 och vilka är de vanligaste sårbarheterna i Java-applikationer?',
        answer: 'OWASP Top 10 – relevanta för Java:\n\n1. Injection – SQL-injection förhindras med parameteriserade queries/JPA (aldrig string-konkatenering)\n2. Broken Access Control – kontrollera alltid att inloggad användare äger den data de efterfrågar\n3. Cryptographic Failures – använd starka algoritmer (AES-256, bcrypt för lösenord)\n4. Security Misconfiguration – inaktivera debug-endpoints i produktion, begränsa Actuator-endpoints\n5. Sensitive Data Exposure – logga aldrig PII, kryptera känsliga fält i databasen',
        tip: 'Vid hantering av hälso- och persondata är säkerhet högt prioriterat.',
      },
      {
        id: 57,
        question: 'Vad är SOLID-principerna och hur tillämpas de i Java?',
        answer: 'S – Single Responsibility: en klass har ett och endast ett skäl att ändras.\n\nO – Open/Closed: öppen för utökning, stängd för modifiering (polymorfism/interfaces).\n\nL – Liskov Substitution: subklasser ska kunna ersätta sin bastyp utan att beteendet bryts.\n\nI – Interface Segregation: många specifika interfaces är bättre än ett generellt.\n\nD – Dependency Inversion: beroende på abstraktioner (interfaces), inte konkreta implementationer. I Spring är D naturlig via @Autowired.',
      },
      {
        id: 58,
        question: 'Vad är Domain-Driven Design (DDD) och hur kan det tillämpas?',
        answer: 'DDD är ett arkitekturellt synsätt där mjukvarumodellen speglar verksamhetsdomänen.\n\nNyckelbegrepp:\n• Ubiquitous Language (gemensamt språk med domänexperter)\n• Bounded Context (tydliga gränser mellan domäner – t.ex. Tandvård och Internationell Vård är separata contexts)\n• Aggregat (grupp entiteter med en rot som garanterar konsistens)\n• Domäntjänster (affärslogik som inte hör hemma i en entitet)\n\nI mikrotjänstarkitektur matchar ofta ett Bounded Context mot en mikrotjänst.',
      },
      {
        id: 59,
        question: 'Hur arbetar du med code reviews och vad tittar du på?',
        answer: 'En god code review granskar:\n• Korrekthet (löser koden problemet?)\n• Läsbarhet (self-documenting code)\n• Testbarhet och testtäckning\n• Säkerhet (ingen PII i loggar, parameteriserade queries)\n• Prestanda (inga uppenbara N+1, onödiga allokationer)\n• Arkitekturell riktning (följer konventioner)\n\nGe konstruktiv feedback – kommentera koden, inte personen.\n\nAnvänd PR-templates för att säkerställa att alla aspekter granskas.',
      },
      {
        id: 60,
        question: 'Vad är teknisk skuld och hur hanterar du den i ett agilt team?',
        answer: 'Teknisk skuld är konsekvensen av snabba lösningar som sparar tid nu men kostar mer framöver i form av buggar, svårunderhållen kod och långsammare utveckling.\n\nHantering:\n• Synliggör skulden (loggad i Jira som tech debt-tickets)\n• Avsätt tid varje sprint för refaktorering (t.ex. 20% kapacitet)\n• Prioritera skuld som bromsar ny feature-utveckling\n• Mät via statisk kodanalys (SonarQube: code smells, duplicering, testtäckning)\n\nI retrospektiv: diskutera vad som skapade skulden och hur ni förhindrar det framöver.',
      },
    ],
  },
  {
    id: 'reaktiv',
    title: 'Reaktiv programmering och moderna Java-features',
    color: '#0f766e',
    icon: '♻️',
    questions: [
      {
        id: 61,
        question: 'Vad är reaktiv programmering och när är det relevant?',
        answer: 'Reaktiv programmering (Reactive Streams-spec) hanterar asynkrona dataströmmar non-blocking. Istället för att blockera en tråd i väntan på ett svar frigörs tråden och en callback anropas när svaret är klart.\n\nBibliotek: Project Reactor (Mono/Flux – Spring WebFlux), Mutiny (Uni/Multi – Quarkus Reactive).\n\nPassar: högt antal parallella anrop med I/O-väntan (t.ex. API-gateway).\nPassar inte: CPU-intensiva beräkningar eller enkla CRUD-applikationer.',
      },
      {
        id: 62,
        question: 'Vad är nytt i moderna Java-versioner (Java 17–21) som är relevant i produktionskod?',
        answer: 'Java 17 (LTS):\n• Records (immutable data carriers: record Person(String name, int age){})\n• Sealed classes (begränsar vilka subklasser som tillåts)\n• Pattern matching for instanceof\n\nJava 21 (LTS):\n• Virtual Threads (Project Loom) – tusentals lättviktstrådar utan blocking-overhead\n• Record Patterns\n• Switch expressions med pattern matching\n\nVirtual Threads i kombination med Hibernate eller JDBC ger hög throughput utan reaktiv komplexitet. Quarkus och Spring Boot 3 stöder Java 21 fullt ut.',
        tip: 'Visa att du följer Java-ekosystemets utveckling.',
      },
      {
        id: 63,
        question: 'Förklara skillnaden mellan Mono och Flux i Project Reactor.',
        answer: 'Mono representerar 0 eller 1 asynkront värde – lämplig för en enskild resurs (GET /users/1).\n\nFlux representerar 0 till N asynkrona värden (en ström) – lämplig för en lista eller event-ström.\n\nOperatorer liknar Stream API: map(), filter(), flatMap(), zip().\n\nSubscription är lazy – ingenting händer förrän subscribe() anropas.\n\nError handling:\n• onErrorReturn() (fallback-värde)\n• onErrorResume() (fallback-Mono/Flux)\n• retry()',
      },
      {
        id: 64,
        question: 'Vad är event sourcing och CQRS – när är det relevant?',
        answer: 'CQRS (Command Query Responsibility Segregation) separerar läs- och skrivmodellen. Skrivsidan hanterar kommandon (CreateClaimCommand) och uppdaterar domäntillståndet. Läsidan har optimerade read-modeller (denormaliserade vyer) för snabba queries.\n\nEvent Sourcing: istället för att spara aktuellt tillstånd sparas en sekvens av events (ClaimCreated, ClaimApproved) – tillståndet rekonstrueras genom att spela upp events.\n\nGer fullständig audit trail. Komplex att implementera – använd inte i enkla CRUD-domäner.',
      },
      {
        id: 65,
        question: 'Hur fungerar Java modules (JPMS) och är det relevant i praktiken?',
        answer: 'Java Platform Module System (Java 9+) introducerar module-info.java som deklarerar modulens namn, vad den exporterar och vad den kräver.\n\nFördelar: starkare inkapsling (inget reflektions-hack mot interna paket), snabbare starttid med jlink.\n\nI praktiken: de flesta enterprise-applikationer (Spring Boot, Quarkus) använder inte JPMS fullt ut då tredjepartsbibliotek inte är modulifierade. Kunskap om att det existerar och varför är tillräckligt för de flesta intervjuer.',
      },
    ],
  },
  {
    id: 'databaser',
    title: 'Databaser, SQL och datakvalitet',
    color: '#c2410c',
    icon: '🏛️',
    questions: [
      {
        id: 66,
        question: 'Förklara ACID och vad det innebär i praktiken.',
        answer: 'Atomicity: en transaktion är allt eller inget – antingen committas alla operationer eller ingen.\n\nConsistency: databasen övergår alltid från ett giltigt tillstånd till ett annat (constraints, triggers).\n\nIsolation: parallella transaktioner påverkar inte varandra (isolation levels: READ COMMITTED, REPEATABLE READ, SERIALIZABLE).\n\nDurability: en committad transaktion överlever systemkrascher (skrivs till disk/WAL).\n\nI praktiken: välj rätt isolation level – SERIALIZABLE är säkrast men ger lägst prestanda; READ COMMITTED är ofta tillräckligt och är PostgreSQL:s default.',
      },
      {
        id: 67,
        question: 'Vad är databasindex och hur påverkar det prestanda?',
        answer: 'Ett index är en datastruktur (vanligen B-tree) som snabbar upp sökning på en eller flera kolumner på bekostnad av extra diskutrymme och långsammare INSERT/UPDATE/DELETE.\n\nIndex hjälper vid WHERE-, JOIN- och ORDER BY-kolumner.\n\nComposite index: CREATE INDEX idx_name_city ON users(last_name, city) – ordningen spelar roll (leftmost prefix rule).\n\nEXPLAIN ANALYZE i PostgreSQL visar om index används eller om en seq scan görs.\n\nUndvik att indexera kolumner med låg kardinalitet (t.ex. boolean-kolumner).',
      },
      {
        id: 68,
        question: 'Vad är skillnaden mellan optimistisk och pessimistisk låsning i databaser?',
        answer: 'Pessimistisk låsning: låser raden vid läsning (SELECT FOR UPDATE) – inga andra kan ändra tills låset släpps. Säkert men skapar köer och risk för deadlock.\n\nOptimistisk låsning: ingen lock vid läsning – en version-kolumn (@Version i JPA) kontrolleras vid update. Om versionen ändrats sedan läsning kastas OptimisticLockException.\n\nOptimistisk passar system med låg skrivkonflikt (läsintensiva).\nPessimistisk passar kritiska finansiella transaktioner där konflikter är vanliga.',
      },
      {
        id: 69,
        question: 'Förklara normalisering – vad är 1NF, 2NF och 3NF?',
        answer: '1NF: atomiska värden i varje cell (ingen lista i ett fält), primärnyckel identifierar varje rad.\n\n2NF: uppfyller 1NF + inga partiella beroenden (icke-nyckelkolumner är beroende av hela primärnyckeln).\n\n3NF: uppfyller 2NF + inga transitiva beroenden (icke-nyckelkolumner beror bara på primärnyckeln).\n\nI praktiken normaliseras OLTP-databaser för att minimera redundans; OLAP/datawarehouse-databaser denormaliseras för läsprestanda.',
      },
      {
        id: 70,
        question: 'Hur hanterar du databas-prestanda i en applikation med hög last?',
        answer: 'Strategier:\n1. Index-optimering\n2. Query-optimering – undvik SELECT *, hämta bara nödvändiga kolumner\n3. Connection pooling (HikariCP) – återanvänd databasanslutningar\n4. Read replicas – skala läsningar mot replika\n5. Caching (Redis) för frequently-read, rarely-changed data\n6. Paginering – returnera aldrig hela tabeller\n7. Databas-partitionering för historisk data\n8. Async/batch-operationer för tung skrivning',
      },
    ],
  },
  {
    id: 'containers',
    title: 'Containers, nätverk och cloud-native',
    color: '#9d174d',
    icon: '🐳',
    questions: [
      {
        id: 71,
        question: 'Hur bygger du en optimerad Docker-image för en Java-applikation?',
        answer: 'Best practices:\n1. Använd multi-stage builds – bygg i ett JDK-image, kör i ett JRE-image\n2. Lägg beroenden i ett eget lager (de ändras sällan) – utnyttjar Docker layer cache\n3. Använd distroless-images (Google) eller ubi-micro (Red Hat) för minimal attackyta\n4. Kör inte som root (USER 1001)\n5. Specificera exakt image-tagg (aldrig latest)\n\nMed Quarkus native: imagen är bara ett par hundra MB istället för 300-600MB för traditionell JVM-image.\n\nOpenShift Source-to-Image (S2I) automatiserar detta.',
      },
      {
        id: 72,
        question: 'Vad är en Kubernetes Service och vad är skillnaden mellan ClusterIP, NodePort och LoadBalancer?',
        answer: 'En Service abstraherar åtkomst till en eller flera pods bakom ett stabilt DNS-namn och IP.\n\nClusterIP (default): intern åtkomst inom klustret – ingen extern access.\n\nNodePort: exponerar en port på varje nods IP – möjliggör extern åtkomst men klumpigt.\n\nLoadBalancer: skapar en extern load balancer (cloud provider) – vanlig i managed Kubernetes.\n\nI OpenShift används Route (inte LoadBalancer) för extern HTTP/HTTPS-trafik. Intern kommunikation mellan mikrotjänster sker alltid via ClusterIP-Services.',
      },
      {
        id: 73,
        question: 'Vad är Helm och hur används det för att paketera Kubernetes-applikationer?',
        answer: 'Helm är pakethanteraren för Kubernetes. Ett Helm Chart är en samling YAML-templates med parametriserbara värden (values.yaml).\n\nKommandon: helm install, helm upgrade, helm rollback, helm uninstall.\n\nFördelar:\n• Återanvändbar deployment-konfiguration\n• Versionshantering av releases\n• Enkelt att hantera konfiguration per miljö (dev/test/prod via values-filer)\n\nI ArgoCD deployar man ofta via Helm charts – ArgoCD kör helm template och applicerar resultatet.',
      },
      {
        id: 74,
        question: 'Vad är Resource Requests och Limits i Kubernetes och varför är de viktiga?',
        answer: 'Requests: minsta garanterade resurser (CPU/minne) – påverkar scheduling (vilken nod).\n\nLimits: maximalt tillåtna resurser – om en pod överskrider minnesgränsen termineras den (OOMKilled).\n\nBest practice: sätt alltid både requests och limits. CPU-throttling är ofarligare än OOM.\n\nRätt dimensionering: mät faktisk resursanvändning med Prometheus/Grafana och justera.\n\nUtan limits kan en felobeten pod ta ner hela noden.',
      },
      {
        id: 75,
        question: 'Förklara service mesh och vad OpenShift Service Mesh (Istio) tillhandahåller.',
        answer: 'En service mesh är ett infrastrukturlager för kommunikation mellan mikrotjänster, implementerat som sidecar-proxies (Envoy) injicerade i varje pod.\n\nFunktioner:\n• mTLS (ömsesidig TLS-kryptering mellan alla tjänster)\n• Traffic management (canary deployments, circuit breaking)\n• Observability (automatisk distributed tracing och metrics utan kodändringar)\n• Policy enforcement (vilka tjänster får prata med vilka)\n\nOpenShift Service Mesh är Red Hats distribution av Istio. Alternativ för enklare behov: Linkerd.',
      },
      {
        id: 76,
        question: 'Vad är Horizontal Pod Autoscaler (HPA) och hur konfigurerar du det?',
        answer: 'HPA skalar automatiskt antingen upp eller ned antalet pod-repliker baserat på metrics.\n\nDefault: CPU-användning (target: 70% CPU).\n\nKonfigureras med:\nkubectl autoscale deployment myapp --min=2 --max=10 --cpu-percent=70\n\nCustom metrics: skala på HTTP-requests/sekund (via KEDA eller Prometheus Adapter).\n\nViktigt: pods måste ha resource requests satta för att HPA ska fungera. Vertikal skalning (mer CPU/minne per pod) hanteras av VPA (Vertical Pod Autoscaler).',
      },
      {
        id: 77,
        question: 'Hur hanterar du zero-downtime deployments i OpenShift?',
        answer: 'Rolling update (default): nya pods startas gradvis medan gamla fasas ut. Konfigureras med maxSurge (extra pods under deploy) och maxUnavailable (max pods nere).\n\nKrav för zero-downtime:\n1. Korrekt readiness probe – gamla pods hanterar trafik tills nya är redo\n2. Bakåtkompatibla databasmigrationer (lägg till kolumner, ta aldrig bort i samma deploy)\n3. Graceful shutdown (SIGTERM-hantering – avsluta pågående requests innan shutdown)\n\nBlå/grön deployment: kör två identiska miljöer och switcha trafik – enklare rollback.',
      },
    ],
  },
  {
    id: 'integration',
    title: 'Integration och händelsedriven arkitektur',
    color: '#1e40af',
    icon: '🔗',
    questions: [
      {
        id: 78,
        question: 'Vad är skillnaden mellan synkron (REST) och asynkron (event-driven) integration?',
        answer: 'Synkron (REST/gRPC): anroparen väntar på svar – enkelt att förstå och debugga, men skapar tight coupling och om downstream-tjänst är nere misslyckas anropet.\n\nAsynkron (Kafka/RabbitMQ): meddelanden produceras till en kö/topic och konsumeras senare – lös koppling, bättre feltolerans, men svårare att debugga och garantera ordning.\n\nVid integration mot externa system: synkrona REST-anrop vid realtidsbehov, asynkrona meddelanden för batch-överföring och notifieringar.',
      },
      {
        id: 79,
        question: 'Vad är GraphQL och när väljer du det över REST?',
        answer: 'GraphQL är ett frågespråk för API:er där klienten specificerar exakt vilka fält den vill ha. Löser over-fetching (för mycket data) och under-fetching (behöver göra flera anrop).\n\nFördelar: ett enda endpoint, flexibel för frontend-team, starkt typad schema.\n\nNackdelar: caching är svårare (POST-anrop), N+1-problem på serversidan (DataLoader behövs), komplex att säkra mot djupa queries.\n\nVälj REST för enkla CRUD-API:er och offentliga API:er; GraphQL för komplexa gränssnitt med många klienter som behöver olika datamängder.',
      },
      {
        id: 80,
        question: 'Vad är idempotens och varför är det viktigt i distribuerade system?',
        answer: 'En operation är idempotent om den ger samma resultat oavsett hur många gånger den utförs. GET, PUT och DELETE är per definition idempotenta i REST; POST är det vanligtvis inte.\n\nI distribuerade system kan meddelanden levereras mer än en gång (at-least-once delivery).\n\nLösning: använd idempotency keys (klienten genererar ett unikt ID för varje operation; servern lagrar utförda operationer och returnerar samma svar vid duplicat).\n\nKafka-consumers ska alltid designas för idempotent bearbetning.',
      },
    ],
  },
  {
    id: 'soft-skills',
    title: 'Mjuka kompetenser och yrkesscenarier',
    color: '#166534',
    icon: '💬',
    questions: [
      {
        id: 81,
        question: 'Hur förklarar du ett komplext tekniskt beslut för en icke-teknisk stakeholder?',
        answer: 'Utgå från affärsbehovet och konsekvenser, inte teknik.\n\nExempel: istället för "vi behöver byta till event-driven arkitektur med Kafka" säg "för att medborgare ska få sin tandvårdsersättning snabbare och vi ska klara EU:s svarstider behöver vi ett system som kan hantera topp-last utan att göra medborgare väntande".\n\nAnvänd analogier, visualisera med enkla diagram. Systemutvecklare arbetar ofta nära handläggare och verksamhetsexperter – kommunikation över kompetensgränser är en nyckelkompetens.',
      },
      {
        id: 82,
        question: 'Hur hanterar du situationen när du inte vet svaret på ett tekniskt problem?',
        answer: 'Erkänn det direkt – det bygger förtroende.\n\nBerätta hur du skulle angripa problemet:\n• Dokumentation (officiell Javadoc, Red Hat docs, Quarkus guides)\n• Community (Stack Overflow, GitHub Issues)\n• Kollegor med relevant erfarenhet\n• POC (Proof of Concept) för att experimentera\n\nViktigt: kommunicera tidsuppskattning och osäkerhet tidigt, eskalera om det behövs. I system med känslig data: säkerhetskritiska beslut ska alltid dubbelkollas.',
      },
      {
        id: 83,
        question: 'Hur prioriterar du tekniska tasks när du har flera parallella åtaganden?',
        answer: 'Kommunicera med teamet och tech lead om prioritering – det är sällan en ensam persons beslut.\n\nVerktyg: Jira-backlog med prioriterade stories, blockerat-flagga beroenden tidigt i sprinten.\n\nPrinciper: värde till medborgaren (core business-funktionalitet) > teknisk skuld > nice-to-have. Om du är osäker på prioritering: fråga Product Owner.\n\nLär dig säga nej konstruktivt: "Det låter viktigt, låt oss ta upp det i sprintplanerinen och prioritera mot vad vi redan åtagit oss."',
      },
      {
        id: 84,
        question: 'Hur bidrar du till ett teams tekniska riktning och arkitekturbeslut?',
        answer: 'Delta aktivt i arkitekturdiskussioner och kom förberedd med för- och nackdelar.\n\nDokumentera beslut som Architecture Decision Records (ADR) – ett kortformat med kontext, beslut och konsekvenser – versionshanterat i Git.\n\nDela kunskap: tech talks, lunch-and-learn, välskriven intern wiki i Confluence. Var öppen för att ditt förslag inte väljs – förstå beslutet och implementera det lojalt.\n\nRollen betonar samarbete och vilja att förbättra – lyft detta.',
      },
      {
        id: 85,
        question: 'Vad motiverar dig att jobba inom offentlig sektor jämfört med privat?',
        answer: 'Svara autentiskt men lyft gärna:\n• Samhällspåverkan (21 miljoner beslut/år som påverkar verkliga människors trygghet)\n• Teknisk utmaning (en av Sveriges största IT-avdelningar, modern stack med OpenShift/mikrotjänster)\n• Stabilitet (statlig arbetsgivare)\n• Möjligheten att bidra till digitalisering av välfärden\n\nTandvård är Sveriges mest använda försäkring – att bygga ett helt nytt IT-stöd från grunden är en sällsynt möjlighet att påverka något i stor skala.\n\nKombinera passion för teknik med engagemang för samhällsnytta.',
        tip: 'Detta är ofta den avslutande frågan – förbered ett äkta och genomtänkt svar.',
      },
    ],
  },
  {
    id: 'avancerad-java',
    title: 'Avancerad Java – JVM-internals',
    color: '#1e3a8a',
    icon: '🔬',
    questions: [
      {
        id: 86,
        question: 'Förklara skillnaden mellan stack och heap i JVM.',
        answer: 'Stack lagrar lokala variabler och anropsramar per tråd – LIFO-struktur, snabb allokering, begränsad storlek (StackOverflowError vid djup rekursion).\n\nHeap är den gemensamma minnesregionen där objekt skapas. Garbage Collector ansvarar för heapen. Stack-allokering är deterministisk (variabeln lämnar scope → frigörs direkt); heapallokeringens livstid styrs av GC.\n\nEscape analysis i JIT kan allokera objekt på stacken om de inte "flyr" metoden.',
        tip: 'Visa förståelse för hur JVM faktiskt hanterar minne – relevant för prestandafelsökning.',
      },
      {
        id: 87,
        question: 'Vad är JIT-kompilering och hur påverkar det prestanda?',
        answer: 'JVM startar med interpretation (bytekod → maskinspråk rad för rad). JIT (Just-In-Time compiler) identifierar "hot paths" – metoder som körs ofta – och kompilerar dem till optimerad maskinkod.\n\nC1 (client) kompilerar snabbt med enkla optimeringar; C2 (server) gör djupare optimeringar efter mer profildata. Tiered compilation kombinerar båda.\n\nPraktisk effekt: Java-applikationer "värms upp" – prestanda förbättras efter några minuter i produktion. Relevant för Kubernetes-pods med kort livstid.',
      },
      {
        id: 88,
        question: 'Vad är skillnaden mellan G1GC och ZGC?',
        answer: 'G1GC (Garbage First) är regionbaserad – delar heap i lika stora regioner, förutspår paustider och är default sedan Java 9. Pauser är millisekunder.\n\nZGC (Java 15+ production-ready) är en low-latency collector med pauser under 1 ms oavsett heap-storlek. Använder colored pointers och load barriers.\n\nVälj G1GC för de flesta applikationer; ZGC för realtidssystem med strikta latenskrav, t.ex. tradingplattformar eller system med SLA <10 ms.',
      },
      {
        id: 89,
        question: 'Vad är ClassLoader och hur fungerar ClassLoader-hierarkin?',
        answer: 'ClassLoader laddar .class-filer till JVM vid behov. Hierarkin:\n1. Bootstrap ClassLoader – laddar java.lang, java.util (inbyggd i JVM)\n2. Extension/Platform ClassLoader – laddar java.se-moduler\n3. Application ClassLoader – laddar applikationens classpath\n\nDelegation model: en ClassLoader frågar sin förälder först (parent-first). Problem uppstår i OSGi, Jakarta EE (child-first) eller vid ClassCastException mellan olika ClassLoaders.\n\nQuarkus använder Jandex-indexering och custom ClassLoading för snabb uppstart.',
      },
      {
        id: 90,
        question: 'Förklara Java Module System (JPMS) och när det är relevant.',
        answer: 'Introducerat i Java 9 via Project Jigsaw. Moduler deklarerar vad de exporterar (exports) och vad de beror på (requires) i module-info.java.\n\nFördelar: stark inkapsling (inget mer klasspaket-hacking via reflection), mindre runtime-image med jlink, tydliga API-gränser.\n\nI praktiken används JPMS sällan i affärssystem – de flesta bibliotek stödjer det men kräver det inte. Quarkus och Spring Boot fungerar utan det, men GraalVM native image drar nytta av modulsystemets metainformation.',
      },
      {
        id: 91,
        question: 'Vad är Project Loom och virtuella trådar?',
        answer: 'Project Loom (GA i Java 21) introducerar virtuella trådar – lätta trådar hanterade av JVM, inte OS.\n\nEn JVM kan ha miljontals virtuella trådar. När en virtuell tråd blockerar (t.ex. I/O) "parkeras" den och carrier-tråden (OS-tråd) frigörs för annan virtuell tråd.\n\nEffekt: traditionell blocking I/O-kod presterar lika bra som reaktiv kod utan komplexiteten. Spring Boot 3.2+ och Quarkus stödjer virtuella trådar. Särskilt relevant för mikroservicear med många parallella HTTP-anrop.',
        tip: 'Java 21 är LTS – virtuella trådar är en av de viktigaste nyheterna på länge.',
      },
    ],
  },
  {
    id: 'avancerad-hibernate',
    title: 'Avancerad Hibernate och JPA',
    color: '#064e3b',
    icon: '🗃️',
    questions: [
      {
        id: 92,
        question: 'Vad är N+1-problemet i Hibernate och hur löser du det?',
        answer: 'N+1 uppstår när du hämtar N entiteter och Hibernate sedan gör N extra queries för varje lazy-laddad relation.\n\nLösningar:\n• JOIN FETCH i JPQL: SELECT e FROM Employee e JOIN FETCH e.department\n• @EntityGraph – specificera vilka relationer som ska fethas\n• Hibernate BatchSize (@BatchSize(size=20)) – hämtar relationer i batchar\n• Använd Blaze-Persistence eller QueryDSL för komplexa queries\n\nVerktyg: aktivera SQL-logging (show_sql=true) eller Hibernate Statistics för att detektera problemet.',
        tip: 'N+1 är den vanligaste prestandaboven i JPA-applikationer.',
      },
      {
        id: 93,
        question: 'Förklara Hibernate caching-nivåer.',
        answer: 'L1-cache (First-Level): per EntityManager/Session. Automatiskt aktiv – samma entitet hämtas bara en gång per transaktion.\n\nL2-cache (Second-Level): delas mellan sessioner inom samma applikation. Kräver explicit konfiguration med t.ex. Infinispan (Quarkus) eller Ehcache (Spring). Lämpligt för referensdata som ändras sällan.\n\nQuery Cache: cachar resultatlistan av en query. Används försiktigt – cachas per query + parametrar, invalideras vid entitetsändring.\n\nI ett kluster behöver L2-cache vara distribuerat.',
      },
      {
        id: 94,
        question: 'Vad är optimistisk och pessimistisk locking i JPA?',
        answer: 'Optimistisk locking: ingen databaslås. En @Version-kolumn (int/timestamp) används – om två transaktioner läser samma rad och en committar, kastar den andra OptimisticLockException. Lämpligt när konflikter är sällsynta.\n\nPessimistisk locking: databas-level lås via SELECT FOR UPDATE. EntityManager.lock(entity, LockModeType.PESSIMISTIC_WRITE) blockerar andra trådar. Lämpligt vid hög konfliktfrekvens men minskar genomströmning.\n\nVälj optimistisk som default; pessimistisk bara för kritiska avsnitt.',
      },
      {
        id: 95,
        question: 'Hur fungerar JPA Criteria API jämfört med JPQL?',
        answer: 'JPQL är ett strängbaserat frågespråk som liknar SQL men opererar på entiteter. Enkelt att skriva men ger kompileringsfel vid körning, inte vid kompilering.\n\nCriteria API är typesäkert och byggbart programmatiskt:\nCriteriaQuery<Employee> cq = cb.createQuery(Employee.class);\nRoot<Employee> r = cq.from(Employee.class);\ncq.where(cb.equal(r.get("name"), "Lisa"));\n\nFördel: refactoring-säkert och möjliggör dynamiska queries. Nackdel: verbose. Metamodel-generering (jpamodelgen) ger typesäkra attributreferenser.',
      },
      {
        id: 96,
        question: 'Vad är Hibernate Envers och när används det?',
        answer: 'Envers är ett Hibernate-tillägg för automatisk audit trail – spårar alla ändringar (INSERT, UPDATE, DELETE) i revisionstabeller.\n\nAktiveras med @Audited på entiteten. Envers skapar en _AUD-tabell med REVTYPE (ADD/MOD/DEL) och revisionsnummer.\n\nKan hämta entitetens historik: AuditReader.find(Employee.class, id, revision).\n\nAlternativ: Spring Data Envers, custom @PreUpdate/@PrePersist listeners, eller databasens temporal tables (SQL:2011).\n\nRelevant för system med GDPR- eller revisionskrav.',
      },
    ],
  },
  {
    id: 'avancerad-quarkus',
    title: 'Avancerad Quarkus',
    color: '#4c1d95',
    icon: '⚡',
    questions: [
      {
        id: 97,
        question: 'Hur fungerar Quarkus build-time processing och varför är det snabbare?',
        answer: 'Traditionella ramverk (Spring) gör mycket vid start: classpath-scanning, proxyskapande, dependency injection-initiering.\n\nQuarkus flyttar detta till build-time med hjälp av Jandex (bytekod-index) och Augmentation-fasen. CDI-containern byggs och valideras vid kompilering; det som körs vid start är minimal.\n\nResultat: 50-100 ms starttid mot Spring Boots 3-10 sekunder. Minderanvändning av RAM. Möjliggör GraalVM native image där ännu mer pre-computas.\n\nExtension API: byggstenar kallas BuildItems och BuildSteps.',
      },
      {
        id: 98,
        question: 'Vad är Quarkus Panache och hur skiljer det sig från standard JPA?',
        answer: 'Panache är ett lager ovanpå Hibernate som minskar boilerplate via två mönster:\n\n1. Active Record (PanacheEntity): entiteten ärver PanacheEntity och har statiska finders: Employee.find("name", "Lisa").\n\n2. Repository Pattern (PanacheRepository): klassisk separation – repository-klassen implementerar PanacheRepository<Employee>.\n\nBåda stödjer Kotlin och reaktiv variant (PanacheEntityBase med Hibernate Reactive).\n\nFördel: kraftigt reducerad kod. Nackdel: Active Record-mönstret mixar domänlogik och persistens – diskuterbart ur DDD-perspektiv.',
      },
      {
        id: 99,
        question: 'Hur fungerar Quarkus Dev Services?',
        answer: 'Dev Services startar automatiskt externa tjänster (PostgreSQL, Kafka, Redis, Keycloak…) som Docker-containers under utveckling och testning, utan att du behöver konfigurera dem manuellt.\n\nDetekterar om en tjänst saknas i application.properties och startar en Testcontainer automatiskt.\n\nFördel: zero-config lokal utveckling. Fungerar med @QuarkusTest.\n\nKonfigureras via quarkus.datasource.devservices.image-name om du vill specifik version.',
      },
      {
        id: 100,
        question: 'Vad är skillnaden mellan @ApplicationScoped, @RequestScoped och @Singleton i Quarkus CDI?',
        answer: '@Singleton: en instans per JVM. Ingen proxying – snabb men inga interceptors på fält.\n\n@ApplicationScoped: en instans per applikation men proxad – stödjer interceptors (@Transactional etc.) och lazy initialization.\n\n@RequestScoped: ny instans per HTTP-request. Lämplig för stateful request-kontext.\n\nI Quarkus rekommenderas @ApplicationScoped framför @Singleton för beans som behöver interceptors. @Dependent (default) skapar ny instans per injektion.',
      },
      {
        id: 101,
        question: 'Hur fungerar Quarkus native image-kompilering med GraalVM?',
        answer: 'GraalVM native-image analyserar hela applikationen vid kompilering (closed-world assumption): dead code elimineras, reflection registreras explicit.\n\nQuarkus genererar automatiskt reflect-config.json, resource-config.json etc. Extensions hanterar detta för sina bibliotek.\n\nBegränsningar: dynamisk klassladdning, runtime byte-manipulation och JVM-specifika API:er fungerar inte. Hibernate och CDI stödjs via Quarkus-specifika lösningar.\n\nResultat: <5 MB binär, <50 ms start, minimal RAM – perfekt för serverless/Lambda.',
      },
      {
        id: 102,
        question: 'Beskriv Quarkus Reactive Routes och när de är lämpliga.',
        answer: 'Reactive Routes är ett alternativ till JAX-RS baserat direkt på Vert.x HTTP-server utan overhead av servlet-lagret.\n\n@Route(path = "/hello", methods = Route.HttpMethod.GET)\nvoid hello(RoutingContext rc) { rc.response().end("Hello"); }\n\nFördel: maximalt genomflöde, full kontroll över Vert.x event loop.\nNackdel: mer komplex programmering, synkroniseringsregler (blockera aldrig event loop).\n\nVälj JAX-RS för affärslogik-API:er; Reactive Routes för extremt latens-känsliga endpoints eller websocket-hantering.',
      },
    ],
  },
  {
    id: 'avancerad-openshift',
    title: 'Avancerad OpenShift, Tekton och ArgoCD',
    color: '#7c2d12',
    icon: '🚀',
    questions: [
      {
        id: 103,
        question: 'Vad är en Operator i Kubernetes/OpenShift och hur fungerar den?',
        answer: 'En Operator är en controller som kodar driftkunskap (Day-2 operations) för en applikation. Den utökar Kubernetes API med Custom Resource Definitions (CRD) och implementerar en Reconciliation Loop: observe → diff → act.\n\nExempel: PostgreSQL Operator – du skapar en PostgresCluster-resurs, Operatorn sköter installation, backup, failover och uppgradering.\n\nUtvecklas med Operator SDK (Go, Ansible eller Helm). OpenShift OperatorHub erbjuder färdiga Operatorer (Strimzi/Kafka, Jaeger, Keycloak).',
      },
      {
        id: 104,
        question: 'Hur fungerar Tekton Pipelines i detalj?',
        answer: 'Tekton bygger på Kubernetes-native resurser:\n• Task: en grupp Steps (containers) som körs sekventiellt\n• Pipeline: orkestrerar Tasks, stödjer parallellism\n• PipelineRun: en konkret körning av en Pipeline med parametrar\n• Workspace: delat filsystem mellan Steps/Tasks (PersistentVolumeClaim)\n• Trigger/EventListener: startar PipelineRun vid git-events\n\nAllt är YAML-deklarativt. Loggning via tekton-cli (tkn) eller Tekton Dashboard. Integrera med Vault för hemliga värden via Tekton Chains för SLSA-provenance.',
      },
      {
        id: 105,
        question: 'Beskriv GitOps-flödet med ArgoCD från commit till production.',
        answer: '1. Utvecklare pushar kod till feature-branch, skapar PR\n2. CI-pipeline (Tekton) bygger, testar, skapar container-image, uppdaterar image-tag i Helm-chart/Kustomize i GitOps-repo\n3. ArgoCD Application-controller upptäcker diff mellan Git-state och cluster-state\n4. ArgoCD synkroniserar (manuellt eller auto-sync) – applicerar Kubernetes-manifests\n5. Health checks verifierar deployment\n6. Notifiering via Slack/Teams\n\nGitOps-repot är sanningskällan. Rollback = revert commit i Git.',
      },
      {
        id: 106,
        question: 'Vad är OpenShift Security Context Constraints (SCC)?',
        answer: 'SCC är OpenShifts utökning av Kubernetes PodSecurityPolicy (nu deprecated) – kontrollerar vilka säkerhetsprivilegier en pod får.\n\nVanliga SCCs: restricted (default, kör som slumpmässig UID), anyuid (valfri UID), privileged (full åtkomst).\n\nBest practice: kör med restricted-v2 SCC. Definiera securityContext i deployment:\nrunAsNonRoot: true\nallowPrivilegeEscalation: false\ncapabilities.drop: [ALL]\n\nOm imagen kräver root: skriv om imagen eller använd anyuid med motivering.',
      },
      {
        id: 107,
        question: 'Hur fungerar Helm och vad är skillnaden mot Kustomize?',
        answer: 'Helm: pakethanterare för Kubernetes. Chart innehåller templates (Go template-syntax) + values.yaml. helm install/upgrade renderar templates med värden och applicerar i klustret. Stödjer lifecycle hooks och dependencies.\n\nKustomize: deklarativ overlay-approach – en base-konfiguration och environment-specifika patches (Strategic Merge Patch eller JSON Patch). Inget template-språk, bara YAML-manipulation. Inbyggt i kubectl.\n\nHuvudskillnad: Helm är kraftfullare men mer komplex. Kustomize är enklare och bättre för DRY-konfiguration utan programmeringslogik. Många team kombinerar båda (Helm chart som base, Kustomize overlay per miljö).',
      },
      {
        id: 108,
        question: 'Vad är Istio/Service Mesh och när är det motiverat?',
        answer: 'Service mesh (Istio, Linkerd) lägger ett infrastrukturlager för kommunikation mellan mikrotjänster via sidecar proxys (Envoy).\n\nFunktioner: mTLS (mutual TLS) automatiskt, circuit breaking, retry, traffic splitting (canary/A-B-test), distributed tracing, access policies.\n\nNär det är motiverat:\n• Strikta säkerhetskrav (zero-trust network)\n• Avancerad traffic management utan kodändring\n• Observability utan instrumentering i varje tjänst\n\nKostnad: operationell komplexitet, latens-overhead (2-5 ms per anrop). Undvik om ett enklare API-gateway räcker.',
      },
    ],
  },
  {
    id: 'avancerad-testning',
    title: 'Avancerad testning',
    color: '#166534',
    icon: '🧪',
    questions: [
      {
        id: 109,
        question: 'Vad är Contract Testing och hur fungerar Pact?',
        answer: 'Contract testing verifierar att consumer och provider kommunicerar korrekt, utan att köra hela systemet.\n\nPact: consumer skriver ett kontrakt (pact-fil) med förväntade requests och responses. Provider verifierar kontraktet mot sin faktiska implementation.\n\nFlöde: consumer-test → pact-fil → publiceras i Pact Broker → provider-pipeline verifierar → deployable om OK.\n\nFördel: snabbare feedback än end-to-end-test, identifierar breaking changes tidigt. Relevant för mikrotjänstarkitektur med separata team.',
      },
      {
        id: 110,
        question: 'Beskriv Mutation Testing och vad PIT är.',
        answer: 'Mutation Testing mäter testernas effektivitet, inte bara kodtäckning. Verktyget muterar koden (ändrar + till -, != till ==, tar bort return-satser) och kontrollerar om testerna misslyckas.\n\nPIT (Pitest) är standardverktyget för Java. Genererar mutanter, kör tester, rapporterar mutation score.\n\nHög täckning ≠ bra tester. 80% rad-täckning kan ha 30% mutation score om assertions saknas.\n\nBegränsning: långsam för stora kodbaser. Kör inkrementellt eller på kritiska moduler.',
      },
      {
        id: 111,
        question: 'Hur designar du testbara klasser och undviker testbarhetsproblem?',
        answer: 'Principerna:\n• Dependency Injection: injicera beroenden (inte new inne i klassen) – möjliggör mockning\n• Inga statiska metoder/singleton-state – svårt att isolera i tester\n• Single Responsibility – stora klasser med många beroenden är svåra att testa\n• Undvik "new" inne i metoder för externa tjänster – använd factory eller injection\n• Föredra interfaces för beroenden – enkelt att byta mot mock/fake\n\nTestbar design ≈ god OO-design. Om klassen är svår att testa är det ofta ett design-problem.',
      },
      {
        id: 112,
        question: 'Vad är TestContainers och hur används det i integrationstester?',
        answer: 'Testcontainers är ett Java-bibliotek som startar Docker-containers programmatiskt i tester.\n\n@Container\nstatic PostgreSQLContainer<?> db = new PostgreSQLContainer<>("postgres:15");\n\nContainern startas före testklassen, JDBC-URL injiceras dynamiskt via @DynamicPropertySource.\n\nFördel: realistiska integrationstester mot riktig databas/Kafka/Redis utan manuell setup. Inga mockade JDBC-drivrutiner.\n\nQuarkus Dev Services använder Testcontainers under huven. Fungerar i CI om Docker är tillgängligt (GitHub Actions, GitLab CI).',
      },
    ],
  },
  {
    id: 'avancerad-sakerhet',
    title: 'Avancerad säkerhet',
    color: '#7f1d1d',
    icon: '🔐',
    questions: [
      {
        id: 113,
        question: 'Förklara OAuth 2.0 Authorization Code Flow med PKCE.',
        answer: 'PKCE (Proof Key for Code Exchange) skyddar mot authorization code interception i public clients (SPA, mobil).\n\nFlöde:\n1. Client genererar code_verifier (slumpmässig sträng) och code_challenge (SHA-256 hash)\n2. Authorization request inkluderar code_challenge\n3. Authorization server returnerar auth code\n4. Token request inkluderar code_verifier – servern verifierar att hash matchar\n\nÄven om code interceptas kan angriparen inte byta det mot token utan code_verifier.\n\nKeycloak stödjer PKCE. Använd alltid PKCE för SPA och mobilappar.',
      },
      {
        id: 114,
        question: 'Vad är OWASP Top 10 och hur adresserar du de vanligaste sårbarheterna i Java?',
        answer: 'De viktigaste för Java/backend:\n\n1. Injection (SQL, LDAP): PreparedStatement, ORM, input-validering\n2. Broken Access Control: @RolesAllowed, Spring Security @PreAuthorize, testa med low-priv user\n3. Cryptographic Failures: bcrypt/Argon2 för lösenord, TLS 1.3, inga egna krypto-implementationer\n4. Insecure Design: threat modeling, principle of least privilege\n5. Security Misconfiguration: hårdna default-konfigurationer, ta bort debug-endpoints, secrets i vault inte properties-filer\n\nVerktyg: OWASP Dependency-Check för kända sårbarheter i beroenden, SonarQube för SAST.',
      },
      {
        id: 115,
        question: 'Hur hanterar du hemliga värden (secrets) säkert i en Kubernetes/OpenShift-miljö?',
        answer: 'Secrets ska aldrig ligga i Git. Alternativ:\n\n• Kubernetes Secrets: base64-kodade (inte krypterade!) – kräver RBAC och etcd-kryptering\n• HashiCorp Vault: centraliserad secrets management med audit log, lease/rotation, dynamiska credentials\n• OpenShift Secrets Store CSI Driver: monterar Vault-secrets som filer i pods\n• Sealed Secrets (Bitnami): krypterade secrets i Git, dekrypteras av controller i klustret\n\nBest practice: rotera regelbundet, audit-logga åtkomst, minsta möjliga behörighet per pod via ServiceAccount.',
      },
      {
        id: 116,
        question: 'Vad är Zero Trust-säkerhetsmodellen och hur implementerar du den i mikrotjänster?',
        answer: '"Never trust, always verify" – ingen trafik är implicit betrodd, inte ens intern.\n\nImplementering:\n• mTLS mellan alla tjänster (Istio/service mesh hanterar detta automatiskt)\n• JWT-validering i varje tjänst, inte bara gateway\n• NetworkPolicy i Kubernetes: tillåt bara nödvändig pod-to-pod-kommunikation\n• RBAC för Kubernetes API, minsta möjliga ServiceAccount-rättigheter\n• Audit logging av alla API-anrop\n• Image scanning (Trivy, Clair) i pipeline\n\nZero Trust är en resa, inte en produkt – börja med nätverkspolicies och mTLS.',
      },
    ],
  },
  {
    id: 'avancerad-reaktiv',
    title: 'Avancerad reaktiv programmering',
    color: '#134e4a',
    icon: '♻️',
    questions: [
      {
        id: 117,
        question: 'Vad är Backpressure och hur hanteras det i reaktiva system?',
        answer: 'Backpressure uppstår när en producer genererar data snabbare än consumern kan hantera det.\n\nI Reactive Streams (specifikation bakom Project Reactor, RxJava, Akka Streams): Subscriber begär (request(n)) ett antal element. Producer skickar max n element.\n\nStrategier när buffert är full:\n• DROP: kasta nya element\n• BUFFER: buffra (risk för OutOfMemoryError)\n• LATEST: behåll senaste, kasta gamla\n• ERROR: propagera error downstream\n\nI Quarkus Mutiny: .onOverflow().drop() eller .onOverflow().buffer(100).',
      },
      {
        id: 118,
        question: 'Förklara skillnaden mellan hot och cold Observables/Publishers.',
        answer: 'Cold: publicerar data från start för varje subscriber. Varje ny subscriber får hela sekvensen från början. Exempel: HTTP-request, databasquery, läsning av fil.\n\nHot: publicerar data oavsett om det finns subscribers. Subscribers missar data som publicerats innan de prenumererade. Exempel: musevents, stock ticker, Kafka topic.\n\nConverterings:\n• Cold → Hot: publish().refCount() eller share() i Reactor/RxJava\n• Hot med replay: replay(n) – buffrar och replayer senaste n element för nya subscribers\n\nQuarkus Multi från Kafka är hot.',
      },
      {
        id: 119,
        question: 'Hur fungerar Reactive Messaging med MicroProfile och Kafka i Quarkus?',
        answer: '@Incoming("orders") och @Outgoing("processed-orders") kopplar metoder till Kafka topics via konfiguration:\n\nmp.messaging.incoming.orders.connector=smallrye-kafka\nmp.messaging.incoming.orders.topic=orders\nmp.messaging.incoming.orders.value.deserializer=...\n\nMetoden kan returnera Uni<Void> (asynkron), Message<T> (ger explicit ack-kontroll) eller T (automatisk ack).\n\nFördelar: deklarativ, testad med @QuarkusTest + In-Memory connector. Dead Letter Queue: konfigurera failure-strategy=dead-letter-queue.',
      },
      {
        id: 120,
        question: 'Vad är Saga-mönstret och hur implementerar du det i mikrotjänster?',
        answer: 'Saga hanterar distribuerade transaktioner utan 2-phase commit. Varje tjänst gör lokal transaktion och publicerar event. Om något misslyckas kör kompensationsåtgärder (rollback via events).\n\nOrchestration Saga: central Saga Orchestrator koordinerar stegen (lämpligt med Temporal.io eller Netflix Conductor).\n\nChoreography Saga: tjänster reagerar på events utan central koordinator – enklare men svårare att debugga.\n\nExempel: OrderSaga → reserver lager → debitera kort → skicka. Om kortdebitering misslyckas: frilägg lager-reservation.\n\nImplementera med idempotency keys för att hantera dubbletter.',
      },
      {
        id: 121,
        question: 'Vad är Event Sourcing och hur skiljer det sig från traditionell state-lagring?',
        answer: 'Traditionell: lagra nuvarande state (UPDATE employee SET salary=50000)\n\nEvent Sourcing: lagra alla events som ledde till nuvarande state:\nSalaryRaisedEvent(employeeId, from=45000, to=50000, date=2024-01-01)\n\nFördelar:\n• Fullständig audit trail\n• Temporal queries (vad var state vid tidpunkt X?)\n• Event replay för ny projektion\n• Naturlig källa för event-driven system\n\nNackdelar: komplexitet, eventual consistency, query-svårigheter (lös med CQRS-projektioner).\n\nImplementera med EventStoreDB, Axon Framework eller Kafka (begränsad retention).',
      },
    ],
  },
  {
    id: 'avancerad-spring',
    title: 'Avancerad Spring Boot',
    color: '#14532d',
    icon: '🌱',
    questions: [
      {
        id: 122,
        question: 'Hur fungerar Spring Boot Auto-configuration?',
        answer: 'Auto-configuration klasser annoteras med @Configuration och @ConditionalOn*-annotationer.\n\nExempel: DataSourceAutoConfiguration aktiveras om:\n• spring-jdbc finns på classpath (@ConditionalOnClass)\n• Ingen DataSource bean är definierad av användaren (@ConditionalOnMissingBean)\n\nSpring Boot skannar META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports för auto-konfigurationsklasser.\n\nFelsökning: --debug flagga eller Actuator /actuator/conditions endpoint visar vilka auto-configs som aktiverades och varför.',
      },
      {
        id: 123,
        question: 'Vad är Spring Security och hur konfigurerar du det för JWT?',
        answer: '@EnableWebSecurity + SecurityFilterChain bean.\n\nJWT-flöde:\n1. JwtAuthenticationFilter extraherar och validerar token\n2. Sätter SecurityContext med Authentication\n3. Downstream kod använder @PreAuthorize("hasRole(\'ADMIN\')")\n\nKonfiguration:\nhttp.oauth2ResourceServer(oauth2 -> oauth2.jwt(jwt -> jwt.decoder(jwtDecoder())))\n\nJwtDecoder verifierar signatur mot JWKS-endpoint (Keycloak: /realms/{realm}/protocol/openid-connect/certs).\n\nCORS, CSRF (inaktivera för stateless API), session management (STATELESS) – konfigurera allt explicit.',
      },
      {
        id: 124,
        question: 'Förklara Spring Boot Actuator och dess säkerhetsimplikationer.',
        answer: 'Actuator exponerar management-endpoints: /health, /metrics, /env, /beans, /loggers, /heapdump, /threaddump.\n\n/health: liveness/readiness för Kubernetes probes\n/metrics: integrerar med Micrometer → Prometheus\n/env: visar konfigurationsvärden (kan exponera secrets!)\n\nSäkerhet:\n• Exponera bara /health och /info publikt\n• Skydda management-endpoints med Spring Security eller separat port (management.server.port=8081)\n• Inaktivera /heapdump i produktion om inte nödvändigt\n• management.endpoints.web.exposure.include=health,info,metrics',
      },
      {
        id: 125,
        question: 'Vad är Spring Cloud Gateway och hur konfigurerar du routes och filters?',
        answer: 'Spring Cloud Gateway är en reaktiv API-gateway (bygger på WebFlux/Reactor Netty).\n\nRoute-konfiguration:\nspring.cloud.gateway.routes[0].id=user-service\nspring.cloud.gateway.routes[0].uri=lb://user-service\nspring.cloud.gateway.routes[0].predicates[0]=Path=/api/users/**\nspring.cloud.gateway.routes[0].filters[0]=StripPrefix=1\n\nFilters: AddRequestHeader, CircuitBreaker (Resilience4j), RateLimiter (Redis), RewritePath, AuthenticationFilter (custom).\n\nInternally: Netty → DispatcherHandler → RouteLocator → filter chain → proxied request.',
      },
    ],
  },
  {
    id: 'avancerade-databaser',
    title: 'Avancerade databaser och SQL',
    color: '#1c1917',
    icon: '🏛️',
    questions: [
      {
        id: 126,
        question: 'Förklara EXPLAIN ANALYZE i PostgreSQL och hur du tolkar Query Plans.',
        answer: 'EXPLAIN visar Query Plan; EXPLAIN ANALYZE kör queries och visar faktisk kostnad.\n\nViktiga noder:\n• Seq Scan: full table scan – dåligt för stora tabeller\n• Index Scan: använder index\n• Nested Loop / Hash Join / Merge Join: join-strategier\n\nTolkning: se på "actual time", "rows", "loops". Hög "actual time" med "Seq Scan" → saknar index.\n\nVerktyg: explain.dalibo.com visualiserar query plans grafiskt.\n\nOptimering: lägg index på WHERE- och JOIN-kolumner, undvik SELECT *, analysera statistics med ANALYZE.',
      },
      {
        id: 127,
        question: 'Vad är database sharding och när är det lämpligt?',
        answer: 'Sharding delar data horisontellt över flera databasinstanser (shards). Varje shard har en delmängd av raderna, baserat på en shard key.\n\nStrategier: range-based (shard by date), hash-based (jämn distribution), directory-based (lookup-tabell).\n\nNär det är lämpligt: single-node databas är maxad (100M+ rader, I/O-gräns). Alternativ att utvärdera först: read replicas, connection pooling (PgBouncer), caching, arkivering av gammal data.\n\nKomplexitet: cross-shard joins är svåra, transaktioner kräver distributed commit. CitusDB/Vitess hanterar detta för PostgreSQL/MySQL.',
      },
      {
        id: 128,
        question: 'Vad är CAP-teoremet och hur påverkar det val av databas?',
        answer: 'CAP: ett distribuerat system kan garantera max två av:\n• Consistency: alla noder ser samma data\n• Availability: systemet svarar alltid\n• Partition tolerance: systemet fungerar vid nätverkspartitionering\n\nP är obligatorisk i distribuerade system → val är CA eller CP:\n• CP (PostgreSQL, HBase, ZooKeeper): konsistens prioriteras, kan bli otillgänglig\n• AP (DynamoDB, Cassandra, CouchDB): alltid tillgänglig, ev. inkonsistent data\n\nPraktik: PACELC-teoremet är mer nyanserat (latency vs. consistency under normal drift). Välj databas utifrån faktiska konsistenskrav.',
      },
    ],
  },
  {
    id: 'avancerad-observability',
    title: 'Avancerad observability och SRE',
    color: '#0c4a6e',
    icon: '📡',
    questions: [
      {
        id: 129,
        question: 'Vad är SLI, SLO och SLA och hur relaterar de till varandra?',
        answer: 'SLI (Service Level Indicator): ett mätbart mått på tjänstens beteende. Exempel: "andel requests med svarstid < 200 ms".\n\nSLO (Service Level Objective): internt mål för SLI. Exempel: "99.5% av requests ska svara < 200 ms under 30-dagars rullande fönster".\n\nSLA (Service Level Agreement): juridiskt avtal med kund om SLO + konsekvenser vid brott.\n\nError Budget: 1 - SLO. 99.5% SLO = 0.5% error budget = ~3.6 tim/månad. Om budgeten är slut: frys releases, fokusera på reliabilitet.\n\nSRE-approach: balansera features vs. reliabilitet via error budget.',
      },
      {
        id: 130,
        question: 'Förklara OpenTelemetry och hur du instrumenterar en Java-applikation.',
        answer: 'OpenTelemetry (OTel) är en vendor-neutral standard för telemetri: traces, metrics, logs.\n\nJava auto-instrumentation: kör med javaagent:\n-javaagent:opentelemetry-javaagent.jar\n-Dotel.service.name=order-service\n-Dotel.exporter.otlp.endpoint=http://collector:4317\n\nInstrumenterar automatiskt: JDBC, HTTP-klienter, JAX-RS, gRPC, Kafka.\n\nManuell instrumentering:\nSpan span = tracer.spanBuilder("processOrder").startSpan();\ntry (Scope s = span.makeCurrent()) { ... } finally { span.end(); }\n\nQuarkus: quarkus-opentelemetry extension. Data exporteras till Jaeger, Tempo, Honeycomb.',
      },
      {
        id: 131,
        question: 'Hur designar du en effektiv alerting-strategi för en mikrotjänstapplikation?',
        answer: 'Principer:\n• Alert på symptoms (user-facing impact), inte causes (CPU hög)\n• Använd SLO-baserade alerts: "error rate > 1% under 5 min"\n• Avoid alert fatigue: varje alert ska vara actionable\n\nPrometheus AlertManager-regler:\nalert: HighErrorRate\nexpr: rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.01\nfor: 2m\n\nRouting: kritiska alerts → PagerDuty/on-call; varningar → Slack.\n\nRunbook: varje alert ska ha en länk till runbook som beskriver diagnos och åtgärd. Granska och rensa alerts regelbundet.',
      },
    ],
  },
  {
    id: 'djupdykning-quarkus',
    title: 'Djupdykning Quarkus – avancerade ämnen',
    color: '#3b0764',
    icon: '🔭',
    questions: [
      {
        id: 132,
        question: 'Hur fungerar Quarkus Arc (CDI-implementationen)?',
        answer: 'Arc är Quarkus CDI-implementation, optimerad för build-time. Skillnad mot standard CDI:\n\n• Fullt validerad container vid build-time – fel rapporteras vid kompilering, inte start\n• Genererar konkreta proxy-klasser (ingen dynamic proxying via runtime reflection)\n• Strikta regler: alla injectable beans måste vara hittbara vid build-time (closed-world)\n• Stödjer subset av CDI-spec (Quarkus CDI Reference dokumenterar vad som saknas)\n\nFelsökning: quarkus.arc.detect-unused-false-positives=false, Arc dev UI (/q/dev) visar bean-graf.',
      },
      {
        id: 133,
        question: 'Vad är Quarkus Funqy och hur används det för serverless?',
        answer: 'Funqy är ett portabelt API för serverless-funktioner – skriv en gång, kör på AWS Lambda, Azure Functions, Google Cloud Functions eller Knative.\n\n@Funq\npublic Output process(Input input) {\n  return new Output(input.getValue() * 2);\n}\n\nKonfigurera sedan med rätt Quarkus-extension: quarkus-funqy-amazon-lambda.\n\nFördel: ingen plattformsspecifik kod. Stödjer HTTP-trigger och cloud-events.\n\nNative image: kombinerat med GraalVM native ger <100 ms cold start – kritiskt för Lambda där cold start annars kan ta sekunder.',
      },
      {
        id: 134,
        question: 'Hur hanterar Quarkus konfigurationslager (Config Sources)?',
        answer: 'Quarkus använder MicroProfile Config. Prioritetsordning (högre nummer = högre prioritet):\n1. System properties (400)\n2. Environment variables (300)\n3. .env-fil (295)\n4. application.properties (250)\n5. Microprofile Config extensions (varies)\n\n@ConfigProperty(name = "my.setting", defaultValue = "default")\nString mySetting;\n\nProfiler: application-{profile}.properties aktiveras med quarkus.profile=prod.\n\nConfig Sources kan utökas (t.ex. Vault ConfigSource för secrets). SmallRye Config stödjer config maps, secrets mounting i Kubernetes.',
      },
      {
        id: 135,
        question: 'Förklara Quarkus Hibernate Reactive och när det är lämpligt.',
        answer: 'Hibernate Reactive är en icke-blockerande implementation av JPA som integrerar med Vert.x event loop.\n\nAnvänder Mutiny API:\nUni<Employee> emp = Employee.findById(1L); // returns Uni, not Employee\n\nLämpligt när:\n• Applikationen är genomgående reaktiv (Reactive Routes, SmallRye Reactive Messaging)\n• Hög I/O-konkurrens och låg CPU\n\nOlämpligt när:\n• Du har befintlig blockerande kod som är svår att göra reaktiv\n• Teamet är van vid imperativ programmering\n• Virtuella trådar (Java 21) kan ge liknande genomströmning med blockerande kod',
      },
      {
        id: 136,
        question: 'Vad är Quarkus CLI och vilka development-verktyg finns?',
        answer: 'quarkus CLI (eller Maven/Gradle plugin) erbjuder:\n\n• quarkus create app: scaffolda nytt projekt med extensions\n• quarkus dev: dev mode med live reload, Dev UI, kontinuerlig testning\n• quarkus build --native: bygg native image\n• quarkus extension add hibernate-orm-panache: lägg till extension\n\nDev UI (/q/dev): visualiserar beans, konfiguration, health, Dev Services.\n\nContinuous Testing: tester körs automatiskt vid filsparning – snabb feedback loop.\n\nDev Services: automatisk Testcontainer för databas, Kafka, Keycloak vid dev-mode.',
      },
      {
        id: 137,
        question: 'Hur fungerar Quarkus OIDC-integration med Keycloak?',
        answer: 'quarkus-oidc extension konfigureras:\n\nquarkus.oidc.auth-server-url=http://keycloak:8080/realms/myrealm\nquarkus.oidc.client-id=my-app\nquarkus.oidc.credentials.secret=${OIDC_SECRET}\n\nApplication types:\n• service (default): validerar Bearer JWT\n• web-app: hanterar Authorization Code Flow, sessions\n\n@RolesAllowed("admin") på endpoints. Claims tillgängliga via SecurityIdentity eller JsonWebToken.\n\nMulti-tenancy: quarkus.oidc.tenant-resolver för att dynamiskt välja Keycloak-realm baserat på request.\n\nDev Services: startar automatiskt Keycloak-container i dev mode.',
      },
      {
        id: 138,
        question: 'Vad är SmallRye Fault Tolerance och hur implementerar du circuit breaker?',
        answer: 'SmallRye Fault Tolerance implementerar MicroProfile Fault Tolerance:\n\n@CircuitBreaker(\n  requestVolumeThreshold = 10,\n  failureRatio = 0.5,\n  delay = 5000\n)\n@Retry(maxRetries = 3, delay = 200)\n@Timeout(value = 2, unit = ChronoUnit.SECONDS)\n@Fallback(fallbackMethod = "fallback")\npublic Response callExternalService() {...}\n\nTillstånd: CLOSED (normalt) → OPEN (vid för många fel, snabb-felnivå) → HALF_OPEN (provkörs) → CLOSED.\n\nMetrics exponeras automatiskt via Micrometer/Prometheus. Kombinera med @Bulkhead för att begränsa parallella anrop.',
      },
      {
        id: 139,
        question: 'Hur testar du Quarkus-applikationer med @QuarkusTest?',
        answer: '@QuarkusTest startar hela applikationen i testläge. Injicera beans direkt:\n\n@QuarkusTest\nclass OrderServiceTest {\n  @Inject OrderService service;\n\n  @Test\n  void testOrder() {\n    given().when().get("/orders/1").then().statusCode(200);\n  }\n}\n\n@QuarkusIntegrationTest: testar native image eller uber-jar – kör mot riktig process.\n\n@QuarkusMock: ersätt en bean med mock för specifik test.\n\nDev Services hanterar automatiskt testdatabas.\n\nRESTAssured är inbyggt och konfigurerat med rätt port automatiskt.',
      },
      {
        id: 140,
        question: 'Förklara Quarkus Scheduler och Quartz-integration.',
        answer: 'Inbyggd scheduler:\n@Scheduled(every = "1h", identity = "cleanup-job")\nvoid cleanup() { ... }\n\nCron-syntax: @Scheduled(cron = "0 0 2 * * ?")\n\nquarkus-quartz extension ger klusterstödd scheduling via databas (JDBC JobStore). Viktigt i Kubernetes där flera poddar körs – utan kluster-scheduling körs jobbet i varje pod.\n\nProgrammatisk kontroll: scheduler.pause("cleanup-job"), scheduler.resume(...).\n\nQuartz stödjer job-persistens, missade exekveringar (misfire handling) och triggers med kalender-undantag.',
      },
      {
        id: 141,
        question: 'Vad är Quarkus gRPC-stöd och när föredrar du gRPC framför REST?',
        answer: 'Quarkus stödjer gRPC via quarkus-grpc extension. Definiera service i .proto-fil, Quarkus genererar Java-klasser.\n\n@GrpcService\nclass OrderGrpcService extends OrderServiceGrpc.OrderServiceImplBase {\n  @Override\n  public void getOrder(GetOrderRequest req, StreamObserver<Order> obs) {...}\n}\n\ngRPC vs REST:\n• gRPC: binary (protobuf), strikta kontrakt, streaming, låg latens – perfekt för intern mikrotjänstkommunikation\n• REST/JSON: universell, enkel debuggning, webb-kompatibel – för externa API:er\n\nVälj gRPC för höga volymer intern kommunikation; REST för externa konsumenter.',
      },
      {
        id: 142,
        question: 'Hur hanterar du databasmigrationer i Quarkus med Flyway eller Liquibase?',
        answer: 'Flyway (quarkus-flyway):\n• Versionsbaserade migrationsfiler: V1__create_tables.sql, V2__add_column.sql\n• Körs automatiskt vid start om quarkus.flyway.migrate-at-start=true\n• Flyway schema_version tabell spårar körda migreringar\n\nLiquibase (quarkus-liquibase):\n• Changelog-baserad (XML, YAML, JSON, SQL)\n• Stödjer rollback, preconditions, contexts\n• Mer flexibel men mer komplex\n\nBest practices:\n• Aldrig modifiera körda migreringar\n• En migration per förändring\n• Testa migreringar i CI mot produktionslik databas\n• Bakåtkompatibla schema-ändringar (additive first)',
      },
      {
        id: 143,
        question: 'Vad är Quarkus WebSockets och Server-Sent Events (SSE)?',
        answer: 'WebSockets (quarkus-websockets-next, Java EE WebSocket API):\n@ServerEndpoint("/chat/{user}")\nclass ChatSocket {\n  @OnMessage\n  void message(String msg, Session session) {...}\n}\n\nBidirektionell kommunikation – lämplig för chat, live collaboration, gaming.\n\nSSE (Server-Sent Events) via JAX-RS:\n@GET @Produces(MediaType.SERVER_SENT_EVENTS)\nPublisher<String> stream() { return Multi.createFrom().ticks().every(Duration.ofSeconds(1)).map(i -> "tick"); }\n\nSSE: envägs (server → client), enklare, HTTP-kompatibel, automatisk reconnect i browsers. Lämplig för live dashboards, notifieringar.',
      },
      {
        id: 144,
        question: 'Hur använder du Quarkus GraphQL?',
        answer: 'quarkus-smallrye-graphql extension. Definiera schema med annotations:\n\n@GraphQLApi\nclass ProductApi {\n  @Query\n  public Product product(@Name("id") long id) { return service.find(id); }\n\n  @Mutation\n  public Product createProduct(Product product) { return service.create(product); }\n\n  @Subscription\n  public Multi<Product> productUpdates() { return eventStream; }\n}\n\nSchema genereras automatiskt från Java-klasser. GraphiQL UI (/q/graphql-ui) i dev mode.\n\nFördel: klienten begär exakt de fält den behöver (under-/over-fetching elimineras). Lämplig för BFF (Backend for Frontend) eller komplex dataaggregation.',
      },
      {
        id: 145,
        question: 'Sammanfatta en idealisk Quarkus-mikroservicearkitektur för ett enterprise-system.',
        answer: 'Lager:\n• API: JAX-RS med OpenAPI-spec, JWT-validering via OIDC\n• Business: CDI beans med @ApplicationScoped, Fault Tolerance\n• Persistence: Hibernate/Panache + Flyway migrationer\n• Messaging: SmallRye Reactive Messaging (Kafka)\n\nObservability: OpenTelemetry traces, Micrometer metrics → Prometheus, strukturerad JSON-loggning → ELK\n\nSäkerhet: Vault for secrets, mTLS i service mesh, minimal SCC\n\nCI/CD: Tekton pipeline → ArgoCD GitOps\n\nTestning: @QuarkusTest + Testcontainers + Pact contract tests\n\nNative image i produktion för snabb skalning i Kubernetes/OpenShift.',
        tip: 'En fråga som sammanför allt – visa helhetsbild och förmåga att sätta ihop pusslet.',
      },
    ],
  },
]
