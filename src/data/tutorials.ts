import type { LearningPath } from '../types'

export const learningPaths: LearningPath[] = [
  // ══════════════════════════════════════════════
  // PATH 1 – JAVA GRUNDER
  // ══════════════════════════════════════════════
  {
    id: 'grunder',
    title: 'Java Grunder',
    subtitle: 'Lär dig Java från noll – variabler, loopar, klasser och mer',
    color: '#4ade80',
    bgColor: '#052e16',
    icon: '🌱',
    level: 'beginner',
    lessons: [
      {
        id: 'grunder-intro',
        title: 'Välkommen till Java',
        emoji: '☕',
        estimatedMinutes: 5,
        level: 'beginner',
        summary: 'Lär dig vad Java är, varför det används världen över och skriv ditt första program.',
        sections: [
          {
            type: 'text',
            heading: 'Vad är Java?',
            content: '**Java** är ett av världens mest populära programmeringsspråk. Det skapades av Sun Microsystems 1995 och ägs idag av Oracle.\n\nJava används för att bygga **webbapplikationer**, **Android-appar**, **backend-system**, och mycket mer.\n\nMånga stora företag som Amazon, Google, och Netflix använder Java i sina system.',
          },
          {
            type: 'info',
            heading: 'Skriv en gång – kör överallt',
            content: 'Java kompileras till **bytekod** som körs av **JVM (Java Virtual Machine)**.\n\nDetta innebär att samma Java-program kan köras på **Windows, Mac och Linux** – utan ändringar. JVM är det som gör Java plattformsoberoende.',
          },
          {
            type: 'text',
            heading: 'JDK, JRE och JVM – vad är skillnaden?',
            content: '• **JDK** (Java Development Kit) – innehåller allt du behöver för att skriva och kompilera Java\n• **JRE** (Java Runtime Environment) – miljön som kör färdiga Java-program\n• **JVM** (Java Virtual Machine) – motorn som tolkar och kör bytekod\n\nInstallera **JDK 21** (Long-Term Support) för att komma igång.',
          },
          {
            type: 'code',
            heading: 'Ditt första Java-program',
            content: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hej, världen!");
    }
}`,
            language: 'java',
          },
          {
            type: 'text',
            heading: 'Kompilera och kör',
            content: 'Spara filen som **HelloWorld.java** – filnamnet måste matcha klassnamnet.\n\nKompilera med:\n`javac HelloWorld.java`\n\nKör programmet med:\n`java HelloWorld`\n\nDu ser: **Hej, världen!** i terminalen.',
          },
          {
            type: 'tip',
            content: 'Använd **IntelliJ IDEA** (gratis Community Edition) eller **VS Code** som editor. De markerar fel direkt och hjälper dig skriva kod snabbare.',
          },
        ],
      },
      {
        id: 'grunder-variabler',
        title: 'Variabler och Datatyper',
        emoji: '📦',
        estimatedMinutes: 8,
        level: 'beginner',
        summary: 'Lär dig hur du lagrar data i variabler och vilka datatyper Java har.',
        sections: [
          {
            type: 'text',
            heading: 'Vad är en variabel?',
            content: 'En **variabel** är en namngiven plats i minnet där du kan lagra ett värde.\n\nI Java måste du alltid ange **typen** på variabeln när du skapar den. Typen berättar för Java vad slags data variabeln ska hålla.',
          },
          {
            type: 'code',
            heading: 'De 8 primitiva datatyperna',
            content: `// Heltal
byte  litet   = 127;           // -128 till 127
short mellanstor = 32000;      // -32 768 till 32 767
int   vanligt = 1_000_000;     // mest använd för heltal
long  stort   = 9_000_000_000L; // notera L på slutet

// Decimaltal
float  enkel = 3.14f;   // notera f på slutet
double dubbel = 3.14159; // mest använd för decimaltal

// Tecken och sant/falskt
char    bokstav = 'A';   // ett enda tecken, enkelfnutt
boolean villkor = true;  // true eller false`,
            language: 'java',
          },
          {
            type: 'info',
            heading: 'Referenstyper – objekt och strängar',
            content: 'Förutom primitiver finns **referenstyper** – dessa lagrar en referens (adress) till ett objekt i minnet.\n\nVanligast är **String** för text:\n`String namn = "Anna";`\n\nReferenstyper kan vara **null** (saknar värde). Primitiver kan aldrig vara null.',
          },
          {
            type: 'code',
            heading: 'Variabler i praktiken',
            content: `public class Variabler {
    public static void main(String[] args) {
        String namn = "Anna";
        int alder = 28;
        double lon = 45_000.50;
        boolean arAnstald = true;

        System.out.println(namn + " är " + alder + " år");
        System.out.println("Lön: " + lon + " kr");
        System.out.println("Anställd: " + arAnstald);
    }
}`,
            language: 'java',
          },
          {
            type: 'text',
            heading: 'Typkonvertering (casting)',
            content: '**Implicit konvertering** sker automatiskt när du konverterar till en större typ:\n`int x = 5; double d = x;` – fungerar utan problem.\n\n**Explicit casting** krävs när du konverterar till en **mindre** typ (risk för datförlust):\n`double pi = 3.14; int heltal = (int) pi;` – ger 3, decimalen klipps bort.',
          },
          {
            type: 'tip',
            content: 'Använd **int** för heltal och **double** för decimaltal i de flesta fall. Välj **long** bara när du behöver riktigt stora tal.',
          },
        ],
      },
      {
        id: 'grunder-kontrollflode',
        title: 'Kontrollflöde: if och switch',
        emoji: '🔀',
        estimatedMinutes: 8,
        level: 'beginner',
        summary: 'Lär dig hur programmet kan fatta beslut med if/else och switch.',
        sections: [
          {
            type: 'text',
            heading: 'Fatta beslut med if/else',
            content: 'Med **if** kan ditt program göra olika saker beroende på ett villkor.\n\nVillkoret måste vara ett **boolean-uttryck** – något som är antingen sant (`true`) eller falskt (`false`).',
          },
          {
            type: 'code',
            heading: 'if / else if / else',
            content: `int poang = 75;

if (poang >= 90) {
    System.out.println("Betyg: A");
} else if (poang >= 70) {
    System.out.println("Betyg: B");
} else if (poang >= 50) {
    System.out.println("Betyg: C");
} else {
    System.out.println("Underkänd");
}
// Skriver ut: Betyg: B`,
            language: 'java',
          },
          {
            type: 'text',
            heading: 'Ternär operator – ett kortare alternativ',
            content: 'För enkla if/else kan du använda den **ternära operatorn**:\n`typ variabel = villkor ? värdOmSant : värdOmFalskt;`\n\nExempel:\n`String text = alder >= 18 ? "Vuxen" : "Minderårig";`',
          },
          {
            type: 'code',
            heading: 'Switch-uttryck (Java 14+)',
            content: `String dag = "MÅNDAG";

String typ = switch (dag) {
    case "MÅNDAG", "TISDAG", "ONSDAG", "TORSDAG", "FREDAG" -> "Vardag";
    case "LÖRDAG", "SÖNDAG" -> "Helg";
    default -> "Okänd dag";
};

System.out.println(dag + " är en " + typ);
// Skriver ut: MÅNDAG är en Vardag`,
            language: 'java',
          },
          {
            type: 'tip',
            content: 'Använd det moderna **switch-uttrycket** (med `->`) istället för det gamla switch-blocket. Det är kortare, tydligare och undviker glömda `break`-satser.',
          },
        ],
      },
      {
        id: 'grunder-loopar',
        title: 'Loopar',
        emoji: '🔄',
        estimatedMinutes: 8,
        level: 'beginner',
        summary: 'Lär dig upprepa kod med for, while, do-while och for-each.',
        sections: [
          {
            type: 'text',
            heading: 'Varför behöver vi loopar?',
            content: 'En **loop** låter dig upprepa ett kodblock ett antal gånger – utan att skriva samma kod om och om igen.\n\nJava har fyra typer av loopar: **for**, **while**, **do-while** och **for-each**.',
          },
          {
            type: 'code',
            heading: 'for-loopen – när du vet antal upprepningar',
            content: `// Räkna från 1 till 5
for (int i = 1; i <= 5; i++) {
    System.out.println("Steg " + i);
}

// Iterera över en array
int[] tal = {10, 20, 30, 40};
for (int i = 0; i < tal.length; i++) {
    System.out.println(tal[i]);
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'while och do-while',
            content: `// while – kör om villkoret är sant
int n = 1;
while (n <= 3) {
    System.out.println("n = " + n);
    n++;
}

// do-while – kör ALLTID minst en gång
int x = 10;
do {
    System.out.println("x = " + x);
    x++;
} while (x < 5);
// Skriver ut x = 10 trots att villkoret är falskt`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'for-each – enklaste sättet att iterera',
            content: `String[] frukter = {"äpple", "banan", "körsbär"};

for (String frukt : frukter) {
    System.out.println(frukt);
}
// äpple
// banan
// körsbär`,
            language: 'java',
          },
          {
            type: 'text',
            heading: 'break och continue',
            content: '**break** – avslutar loopen omedelbart.\n**continue** – hoppar till nästa iteration, hoppar över resten av kroppen.\n\nAnvänd dem sparsamt – för många break/continue gör koden svår att följa.',
          },
          {
            type: 'warning',
            content: 'Glöm inte att uppdatera loop-variabeln i en while-loop! Annars får du en **oändlig loop** som fryser programmet.',
          },
        ],
      },
      {
        id: 'grunder-metoder',
        title: 'Metoder',
        emoji: '🔧',
        estimatedMinutes: 8,
        level: 'beginner',
        summary: 'Lär dig skapa återanvändbara kodblock med metoder, parametrar och returvärden.',
        sections: [
          {
            type: 'text',
            heading: 'Vad är en metod?',
            content: 'En **metod** är ett namngivet kodblock du kan anropa när som helst.\n\nMetoder gör koden **återanvändbar** och **lättläst** – istället för att skriva samma kod flera gånger, skriver du den en gång i en metod och anropar den.',
          },
          {
            type: 'code',
            heading: 'Definiera och anropa metoder',
            content: `public class Miniräknare {

    // Metod med parametrar och returvärde
    static int addera(int a, int b) {
        return a + b;
    }

    // Metod utan returvärde (void)
    static void halsa(String namn) {
        System.out.println("Hej, " + namn + "!");
    }

    public static void main(String[] args) {
        int summa = addera(3, 7);
        System.out.println("3 + 7 = " + summa); // 10

        halsa("Anna");  // Hej, Anna!
        halsa("Björn"); // Hej, Björn!
    }
}`,
            language: 'java',
          },
          {
            type: 'info',
            heading: 'Metod-överlagring (overloading)',
            content: 'Du kan ha **flera metoder med samma namn** så länge de har olika parametrar. Java väljer rätt metod baserat på vad du skickar in.\n\nDetta kallas **method overloading** och är ett exempel på kompileringstids-polymorfism.',
          },
          {
            type: 'code',
            heading: 'Exempel på overloading',
            content: `static double area(double radie) {
    return Math.PI * radie * radie; // Cirkelarea
}

static double area(double bredd, double hojd) {
    return bredd * hojd; // Rektangelarea
}

// Java väljer rätt metod automatiskt:
System.out.println(area(5.0));       // Cirkel
System.out.println(area(4.0, 6.0)); // Rektangel`,
            language: 'java',
          },
          {
            type: 'tip',
            content: 'Håll metoder **korta och fokuserade** – en metod ska göra en sak. Om en metod blir längre än ~15 rader, fundera på att dela upp den.',
          },
        ],
      },
      {
        id: 'grunder-klasser',
        title: 'Klasser och Objekt',
        emoji: '🏗️',
        estimatedMinutes: 10,
        level: 'beginner',
        summary: 'Lär dig grunderna i objektorienterad programmering – klasser, objekt och konstruktorer.',
        sections: [
          {
            type: 'text',
            heading: 'Klasser och objekt',
            content: 'En **klass** är en mall eller ritning. Ett **objekt** är en konkret instans av den mallen.\n\nTänk på det så här: **Klass** = ritning för ett hus. **Objekt** = det faktiska huset byggt från ritningen.\n\nEn klass samlar **data (fält)** och **beteende (metoder)** på ett ställe.',
          },
          {
            type: 'code',
            heading: 'Definiera en klass',
            content: `public class Person {
    // Fält – varje Person har ett namn och en ålder
    String namn;
    int alder;

    // Konstruktor – körs när ett objekt skapas
    public Person(String namn, int alder) {
        this.namn = namn;   // this.namn = fältet, namn = parametern
        this.alder = alder;
    }

    // Metod
    public void halsa() {
        System.out.println("Hej! Jag heter " + namn + " och är " + alder + " år.");
    }
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Skapa och använda objekt',
            content: `public class Main {
    public static void main(String[] args) {
        // Skapa objekt med new
        Person p1 = new Person("Anna", 28);
        Person p2 = new Person("Björn", 35);

        // Anropa metoder
        p1.halsa(); // Hej! Jag heter Anna och är 28 år.
        p2.halsa(); // Hej! Jag heter Björn och är 35 år.

        // Kom åt fält direkt (undvik detta – se tips)
        System.out.println(p1.namn);
    }
}`,
            language: 'java',
          },
          {
            type: 'info',
            heading: 'Inkapsling – gör fält privata',
            content: 'Det är god praxis att göra fält **private** och använda **getters/setters** för att komma åt dem.\n\nDetta kallas **inkapsling** – du kontrollerar hur data läses och ändras.\n\n`private String namn;`\n`public String getNamn() { return namn; }`\n`public void setNamn(String namn) { this.namn = namn; }`',
          },
          {
            type: 'tip',
            content: 'I moderna Java-projekt används ofta **Lombok** som genererar getters, setters och konstruktorer automatiskt med annotationer som `@Data` och `@AllArgsConstructor`.',
          },
        ],
      },
      {
        id: 'grunder-arv',
        title: 'Arv och Interface',
        emoji: '🧬',
        estimatedMinutes: 10,
        level: 'beginner',
        summary: 'Förstå hur klasser kan ärva egenskaper och hur interface definierar kontrakt.',
        sections: [
          {
            type: 'text',
            heading: 'Arv med extends',
            content: '**Arv** låter en klass ärva fält och metoder från en annan klass.\n\nKlassen som ärver kallas **subklass** (eller barnklass). Klassen som ärvs från kallas **superklass** (eller föräldraklass).\n\nI Java används nyckelordet **extends** för arv.',
          },
          {
            type: 'code',
            heading: 'Arv i praktiken',
            content: `// Superklass
public class Djur {
    String namn;

    public Djur(String namn) {
        this.namn = namn;
    }

    public void lat() {
        System.out.println(namn + " låter...");
    }
}

// Subklass – ärver från Djur
public class Hund extends Djur {

    public Hund(String namn) {
        super(namn); // Anropar Djurs konstruktor
    }

    @Override // Överskriver förälderns metod
    public void lat() {
        System.out.println(namn + " skäller: Vov!");
    }
}`,
            language: 'java',
          },
          {
            type: 'text',
            heading: 'Interface – definiera ett kontrakt',
            content: 'Ett **interface** definierar **vad** en klass ska kunna göra – men inte **hur**.\n\nEn klass kan **implementera** flera interface (men bara ärva från en klass).\n\nSedan Java 8 kan interface ha `default`-metoder med implementation.',
          },
          {
            type: 'code',
            heading: 'Interface i praktiken',
            content: `public interface Springbar {
    void spring(int hastighet); // Abstrakt – ingen implementation
}

public interface Sumbar {
    void sum(double meter);
}

// Klassen implementerar BÅDA interface
public class Triathlet implements Springbar, Sumbar {

    @Override
    public void spring(int hastighet) {
        System.out.println("Springer " + hastighet + " km/h");
    }

    @Override
    public void sum(double meter) {
        System.out.println("Simmar " + meter + " meter");
    }
}`,
            language: 'java',
          },
          {
            type: 'info',
            heading: 'Abstrakt klass vs Interface',
            content: '**Abstrakt klass:** kan ha fält, konstruktorer och konkreta metoder. En klass kan bara ärva från **en** abstrakt klass.\n\n**Interface:** inget tillstånd (inga fält), bara kontrakt. En klass kan implementera **många** interface.\n\nTumregel: välj **interface** när du definierar ett kontrakt. Välj **abstrakt klass** när du delar konkret implementation.',
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════
  // PATH 2 – MELLANNIVÅ
  // ══════════════════════════════════════════════
  {
    id: 'mellanniva',
    title: 'Java Mellannivå',
    subtitle: 'Kollektioner, undantag, lambda, streams och moderna Java-funktioner',
    color: '#60a5fa',
    bgColor: '#0c1a2e',
    icon: '📖',
    level: 'intermediate',
    lessons: [
      {
        id: 'mellanniva-kollektioner',
        title: 'Kollektioner',
        emoji: '📚',
        estimatedMinutes: 10,
        level: 'intermediate',
        summary: 'Lär dig använda List, Set och Map – Javas inbyggda datastrukturer.',
        sections: [
          {
            type: 'text',
            heading: 'Java Collections Framework',
            content: 'Javas **Collections Framework** är ett bibliotek med färdiga datastrukturer.\n\nDe viktigaste gränssnitten:\n• **List** – ordnad sekvens, tillåter dubbletter\n• **Set** – inga dubbletter\n• **Map** – nyckel-värde-par',
          },
          {
            type: 'code',
            heading: 'ArrayList – dynamisk lista',
            content: `import java.util.ArrayList;
import java.util.List;

List<String> frukter = new ArrayList<>();
frukter.add("äpple");
frukter.add("banan");
frukter.add("körsbär");

System.out.println(frukter.size());    // 3
System.out.println(frukter.get(0));    // äpple
frukter.remove("banan");
System.out.println(frukter);           // [äpple, körsbär]

// Iterera
for (String frukt : frukter) {
    System.out.println(frukt);
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'HashSet och HashMap',
            content: `import java.util.*;

// Set – inga dubbletter
Set<String> unika = new HashSet<>();
unika.add("java");
unika.add("python");
unika.add("java"); // Ignoreras – redan finns
System.out.println(unika.size()); // 2

// Map – nyckel → värde
Map<String, Integer> poang = new HashMap<>();
poang.put("Anna", 95);
poang.put("Björn", 82);
System.out.println(poang.get("Anna"));  // 95

// Iterera Map
for (Map.Entry<String, Integer> e : poang.entrySet()) {
    System.out.println(e.getKey() + ": " + e.getValue());
}`,
            language: 'java',
          },
          {
            type: 'info',
            heading: 'Vilken ska du välja?',
            content: '• **ArrayList** – snabb åtkomst med index O(1), långsam insert mitt i O(n)\n• **LinkedList** – snabb insert/ta bort O(1), långsam indexåtkomst O(n)\n• **HashSet** – snabb contains() och add() O(1), ingen ordning\n• **TreeSet** – sorterad, O(log n) för alla operationer\n• **HashMap** – snabb get/put O(1), ingen garanterad ordning\n• **LinkedHashMap** – behåller insättningsordning',
          },
          {
            type: 'tip',
            content: 'Deklarera alltid mot **gränssnittet**: `List<String> lista = new ArrayList<>()`. Då kan du enkelt byta implementation senare.',
          },
        ],
      },
      {
        id: 'mellanniva-undantag',
        title: 'Undantag (Exceptions)',
        emoji: '⚠️',
        estimatedMinutes: 8,
        level: 'intermediate',
        summary: 'Lär dig hantera fel elegant med try/catch och skapa egna exception-klasser.',
        sections: [
          {
            type: 'text',
            heading: 'Vad är ett undantag?',
            content: 'Ett **undantag** (exception) är ett fel som uppstår när programmet körs.\n\nOm ett undantag inte hanteras kraschar programmet och visar en **stack trace** – en lista av metodanrop som ledde till felet.\n\nI Java är undantag objekt som ärver från klassen `Throwable`.',
          },
          {
            type: 'code',
            heading: 'try / catch / finally',
            content: `try {
    int[] tal = {1, 2, 3};
    System.out.println(tal[10]); // Kastar ArrayIndexOutOfBoundsException

} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Fel: Index finns inte – " + e.getMessage());

} catch (Exception e) {
    System.out.println("Oväntat fel: " + e.getMessage());

} finally {
    // Körs ALLTID – oavsett om undantag uppstod
    System.out.println("Klart!");
}`,
            language: 'java',
          },
          {
            type: 'info',
            heading: 'Checked vs Unchecked',
            content: '**Checked exceptions** – kompilatorn tvingar dig att hantera dem (t.ex. `IOException`).\n**Unchecked exceptions** – ärver från `RuntimeException`, kompilatorn kräver ingen hantering (t.ex. `NullPointerException`, `IllegalArgumentException`).\n\nModern Java-stil: använd **unchecked** exceptions i applikationskod. Skapa egna exception-klasser med tydliga meddelanden.',
          },
          {
            type: 'code',
            heading: 'Eget exception och try-with-resources',
            content: `// Eget exception
public class UngiltinBelopppException extends RuntimeException {
    public UngiltinBelopppException(double belopp) {
        super("Ogiltigt belopp: " + belopp + ". Måste vara positivt.");
    }
}

// Try-with-resources – stänger resurser automatiskt
try (var reader = new BufferedReader(new FileReader("fil.txt"))) {
    String rad = reader.readLine();
    System.out.println(rad);
} catch (IOException e) {
    System.out.println("Kunde inte läsa filen: " + e.getMessage());
}`,
            language: 'java',
          },
          {
            type: 'tip',
            content: 'Fånga alltid det **mest specifika** undantaget. Fånga `Exception` som en sista utväg – aldrig som enda catch.',
          },
        ],
      },
      {
        id: 'mellanniva-lambda',
        title: 'Lambda och Streams',
        emoji: '⚡',
        estimatedMinutes: 12,
        level: 'intermediate',
        summary: 'Skriv kortare och mer läsbar kod med lambda-uttryck och Stream-API:et.',
        sections: [
          {
            type: 'text',
            heading: 'Lambda-uttryck',
            content: 'Ett **lambda-uttryck** är en anonym funktion – en funktion utan namn.\n\nSyntax: `(parametrar) -> {kropp}`\n\nLambda kräver ett **funktionellt interface** – ett interface med exakt en abstrakt metod (t.ex. `Runnable`, `Comparator`, `Predicate`).',
          },
          {
            type: 'code',
            heading: 'Lambda-exempel',
            content: `import java.util.*;

List<String> namn = Arrays.asList("Charlie", "Anna", "Björn");

// Gammalt sätt med anonym klass
Collections.sort(namn, new Comparator<String>() {
    public int compare(String a, String b) { return a.compareTo(b); }
});

// Med lambda – mycket kortare!
Collections.sort(namn, (a, b) -> a.compareTo(b));

// Ännu kortare med metodreferens
namn.sort(String::compareTo);

System.out.println(namn); // [Anna, Björn, Charlie]`,
            language: 'java',
          },
          {
            type: 'text',
            heading: 'Stream-API:et',
            content: 'En **Stream** är en pipeline för att bearbeta kollektioner på ett deklarativt sätt.\n\nEn stream-pipeline har tre delar:\n1. **Källa** – `collection.stream()`\n2. **Mellanoperationer** (lazy) – `filter()`, `map()`, `sorted()`\n3. **Terminaloperation** – `collect()`, `forEach()`, `count()`\n\nIngenting körs förrän terminaloperationen anropas!',
          },
          {
            type: 'code',
            heading: 'Streams i praktiken',
            content: `import java.util.*;
import java.util.stream.*;

List<Integer> tal = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Filtrera, transformera och samla
List<Integer> jamnaTal = tal.stream()
    .filter(n -> n % 2 == 0)        // Bara jämna
    .map(n -> n * n)                  // Kvadrera
    .collect(Collectors.toList());   // Samla till lista

System.out.println(jamnaTal); // [4, 16, 36, 64, 100]

// Summera
int summa = tal.stream()
    .reduce(0, Integer::sum);
System.out.println("Summa: " + summa); // 55

// Gruppera med Collectors
Map<Boolean, List<Integer>> grupper = tal.stream()
    .collect(Collectors.partitioningBy(n -> n % 2 == 0));`,
            language: 'java',
          },
          {
            type: 'tip',
            content: 'Använd **metodreferenser** (`ClassName::methodName`) istället för lambdas när det bara är ett metodanrop – det gör koden ännu läsbarare.',
          },
        ],
      },
      {
        id: 'mellanniva-optional',
        title: 'Optional',
        emoji: '🎁',
        estimatedMinutes: 6,
        level: 'intermediate',
        summary: 'Hantera saknade värden elegant och undvik NullPointerException med Optional.',
        sections: [
          {
            type: 'text',
            heading: 'Problemet med null',
            content: '`NullPointerException` är ett av de vanligaste felen i Java. Det uppstår när du försöker använda en variabel som är `null`.\n\n`Optional<T>` löser detta – det är en container som **antingen innehåller ett värde eller är tom**. Istället för att returnera `null` returnerar du `Optional.empty()`.',
          },
          {
            type: 'code',
            heading: 'Skapa och använda Optional',
            content: `import java.util.Optional;

// Skapa
Optional<String> med   = Optional.of("Anna");
Optional<String> tom   = Optional.empty();
Optional<String> kansk = Optional.ofNullable(nullableVarde);

// Kontrollera och hämta
if (med.isPresent()) {
    System.out.println(med.get()); // Anna
}

// orElse – standardvärde om tom
String namn = tom.orElse("Anonym");

// orElseGet – kör supplier om tom (lat evaluering)
String namn2 = tom.orElseGet(() -> beraknaStandardNamn());

// map – transformera om värdet finns
Optional<Integer> langd = med.map(String::length); // Optional[4]

// ifPresent – kör kod om värdet finns
med.ifPresent(n -> System.out.println("Hittade: " + n));`,
            language: 'java',
          },
          {
            type: 'warning',
            content: 'Använd **inte** Optional som fält i klasser eller som metodparametrar – det är designat för returvärden. Undvik också `.get()` utan att kolla `.isPresent()` – det ger samma problem som null!',
          },
          {
            type: 'tip',
            content: 'Kedja operationer med `map()` och `flatMap()` istället för att nästla `isPresent()`-kontroller. Det gör koden mer läsbar.',
          },
        ],
      },
      {
        id: 'mellanniva-generics',
        title: 'Generics',
        emoji: '🧩',
        estimatedMinutes: 8,
        level: 'intermediate',
        summary: 'Skriv typssäker och återanvändbar kod med generiska klasser och metoder.',
        sections: [
          {
            type: 'text',
            heading: 'Vad är generics?',
            content: '**Generics** låter dig skriva klasser och metoder som fungerar med **vilken typ som helst**, utan att förlora typsäkerheten.\n\nDu har redan använt generics – `List<String>` och `Map<String, Integer>` är generiska typer!',
          },
          {
            type: 'code',
            heading: 'Generisk klass och metod',
            content: `// Generisk klass – T är en typ-parameter
public class Box<T> {
    private T innehall;

    public Box(T innehall) { this.innehall = innehall; }
    public T hamta() { return innehall; }
}

// Användning
Box<String> textBox = new Box<>("Hej!");
Box<Integer> talBox  = new Box<>(42);

System.out.println(textBox.hamta()); // Hej!
System.out.println(talBox.hamta());  // 42

// Generisk metod
public static <T extends Comparable<T>> T storst(T a, T b) {
    return a.compareTo(b) >= 0 ? a : b;
}

System.out.println(storst(10, 7));       // 10
System.out.println(storst("apa", "bi")); // bi`,
            language: 'java',
          },
          {
            type: 'info',
            heading: 'Wildcards och PECS-regeln',
            content: '`?` är en **wildcard** – okänd typ.\n\n• `List<?>` – lista av okänd typ (läs bara)\n• `List<? extends Number>` – lista av Number eller subklass (**Producer Extends**)\n• `List<? super Integer>` – lista av Integer eller superklass (**Consumer Super**)\n\n**PECS** – Producer Extends, Consumer Super – hjälper dig välja rätt wildcard.',
          },
          {
            type: 'warning',
            content: '**Type erasure** – vid körtid finns ingen generisk typinformation kvar. `List<String>` och `List<Integer>` är båda bara `List` i bytekoden. Därför kan du inte göra `new T[]` eller `instanceof List<String>`.',
          },
        ],
      },
      {
        id: 'mellanniva-nyheter',
        title: 'Java 8–21: Moderna Funktioner',
        emoji: '🚀',
        estimatedMinutes: 10,
        level: 'intermediate',
        summary: 'Utforska de viktigaste nyheterna från Java 8 till Java 21 – records, var, textblock och mer.',
        sections: [
          {
            type: 'text',
            heading: 'Java har förändrats mycket',
            content: 'Java har fått många nya funktioner sedan version 8. Här är de viktigaste du bör känna till.\n\nDessa funktioner gör koden **kortare, tydligare och mer modern**.',
          },
          {
            type: 'code',
            heading: 'Records (Java 14+) – immutable dataklasser',
            content: `// Gammal stil kräver: fält, konstruktor, getters, equals, hashCode, toString
public class Point {
    private final int x, y;
    public Point(int x, int y) { this.x = x; this.y = y; }
    public int x() { return x; }
    public int y() { return y; }
    // ... equals, hashCode, toString
}

// Med record – allt genereras automatiskt!
public record Point(int x, int y) {}

Point p = new Point(3, 4);
System.out.println(p.x());       // 3
System.out.println(p);           // Point[x=3, y=4]`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'var, textblock och switch-uttryck',
            content: `// var (Java 10+) – lokalt typinferens
var lista = new ArrayList<String>(); // kompilatorn känner till typen
var namn  = "Anna";                  // String

// Textblock (Java 13+) – flerradiga strängar
String json = """
        {
          "namn": "Anna",
          "alder": 28
        }
        """;

// Switch-uttryck (Java 14+)
int dag = 3;
String dagNamn = switch (dag) {
    case 1 -> "Måndag";
    case 2 -> "Tisdag";
    case 3 -> "Onsdag";
    default -> "Annan dag";
};`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Pattern matching (Java 16+)',
            content: `// Gammalt sätt
if (obj instanceof String) {
    String s = (String) obj; // Manuell cast
    System.out.println(s.toUpperCase());
}

// Pattern matching – automatisk cast
if (obj instanceof String s) {
    System.out.println(s.toUpperCase()); // s finns direkt!
}

// I switch (Java 21)
String beskriv(Object obj) {
    return switch (obj) {
        case Integer i -> "Heltal: " + i;
        case String s  -> "Text: " + s;
        case null      -> "null";
        default        -> "Okänt";
    };
}`,
            language: 'java',
          },
          {
            type: 'tip',
            content: 'Använd **Java 21 (LTS)**. Det innehåller alla dessa funktioner plus virtuella trådar (Project Loom) som revolutionerar hur du skriver asynkron kod.',
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════
  // PATH 3 – TRÅDAR OCH CONCURRENS
  // ══════════════════════════════════════════════
  {
    id: 'tradar',
    title: 'Trådar & Concurrens',
    subtitle: 'Förstå parallell körning, synkronisering och moderna asynkrona mönster',
    color: '#fb923c',
    bgColor: '#1c0a00',
    icon: '🧵',
    level: 'advanced',
    lessons: [
      {
        id: 'tradar-intro',
        title: 'Introduktion till Trådar',
        emoji: '🧵',
        estimatedMinutes: 10,
        level: 'advanced',
        summary: 'Lär dig vad trådar är, hur du skapar dem och förstå trådlivscykeln.',
        sections: [
          {
            type: 'text',
            heading: 'Vad är en tråd?',
            content: 'En **tråd** är en oberoende exekveringsväg inom ett program. Flera trådar delar samma minne (heap) men har egna stackar.\n\nMed trådar kan ditt program göra **flera saker samtidigt** – t.ex. hantera många nätverksanrop parallellt eller köra beräkningar i bakgrunden.',
          },
          {
            type: 'code',
            heading: 'Tre sätt att skapa trådar',
            content: `// Sätt 1: Ärv Thread
class MinTrad extends Thread {
    public void run() {
        System.out.println("Thread kör: " + getName());
    }
}
new MinTrad().start();

// Sätt 2: Implementera Runnable (föredras)
Thread t = new Thread(() -> {
    System.out.println("Runnable kör!");
});
t.start();

// Sätt 3: Callable (kan returnera värde och kasta exception)
Callable<Integer> uppgift = () -> {
    Thread.sleep(100);
    return 42;
};
// Används med ExecutorService (se nästa lektion)`,
            language: 'java',
          },
          {
            type: 'info',
            heading: 'Trådlivscykeln',
            content: 'En tråd går igenom dessa tillstånd:\n\n• **NEW** – skapad, start() ej anropad\n• **RUNNABLE** – redo att köra eller kör just nu på CPU\n• **BLOCKED** – väntar på att låsa ett monitor-lås\n• **WAITING** – väntar utan tidsgräns (wait(), join())\n• **TIMED_WAITING** – väntar med tidsgräns (sleep(ms))\n• **TERMINATED** – run() är klar\n\nKontrollera tillstånd med `thread.getState()`.',
          },
          {
            type: 'warning',
            content: 'Anropa alltid **start()** – INTE run(). Om du anropar run() direkt körs koden på din nuvarande tråd, inte i en ny.',
          },
          {
            type: 'tip',
            content: 'I moderna Java-projekt skapar du sällan trådar direkt. Använd istället **ExecutorService** (sköter en trådpool) eller **virtuella trådar** (Java 21). Se kommande lektioner.',
          },
        ],
      },
      {
        id: 'tradar-sync',
        title: 'Synkronisering',
        emoji: '🔒',
        estimatedMinutes: 10,
        level: 'advanced',
        summary: 'Förstå race conditions och hur synchronized skyddar delat tillstånd.',
        sections: [
          {
            type: 'text',
            heading: 'Race conditions – problemet',
            content: 'En **race condition** uppstår när två trådar läser och ändrar delat tillstånd utan koordinering.\n\nResultatet beror på i vilken ordning trådarna körs – vilket är oförutsägbart. Räknaren nedan borde visa 2000, men visar ofta ett lägre tal.',
          },
          {
            type: 'code',
            heading: 'Race condition i praktiken',
            content: `public class Raknare {
    int antal = 0; // Delat tillstånd – FARLIGT!

    void oka() { antal++; } // Tre steg: läs, öka, skriv
}

Raknare r = new Raknare();

// 1000 trådar ökar var sin gång
for (int i = 0; i < 1000; i++) {
    new Thread(r::oka).start();
}

// antal kan vara allt från ~900 till 1000 – oförutsägbart!`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'synchronized – lösningen',
            content: `public class TradSakrRaknare {
    private int antal = 0;

    // synchronized – bara en tråd i taget
    public synchronized void oka() {
        antal++;
    }

    // Synchronized block – minimera låst kod
    public void oka2() {
        synchronized (this) {
            antal++;
        }
    }

    public synchronized int getAntal() { return antal; }
}`,
            language: 'java',
          },
          {
            type: 'info',
            heading: 'Deadlock – fällan att undvika',
            content: '**Deadlock** uppstår när tråd A väntar på lås X (hålls av B), och tråd B väntar på lås Y (hålls av A) – båda väntar för evigt.\n\nFörebygga deadlock:\n• Lås alltid i samma ordning\n• Använd `tryLock()` med tidsgräns (ReentrantLock)\n• Minimera antalet lås du håller samtidigt',
          },
          {
            type: 'tip',
            content: 'Föredra **oföränderliga (immutable) objekt** och **trådsäkra samlingar** (ConcurrentHashMap, CopyOnWriteArrayList) framför manuell synkronisering.',
          },
        ],
      },
      {
        id: 'tradar-jmm',
        title: 'Java Memory Model & volatile',
        emoji: '🧠',
        estimatedMinutes: 10,
        level: 'advanced',
        summary: 'Förstå hur trådar ser varandras skrivningar och vad volatile garanterar.',
        sections: [
          {
            type: 'text',
            heading: 'Synlighetsproblem',
            content: 'Moderna processorer cachar variabler i **registerminne/CPU-cache**. En tråds skrivning kanske inte syns för en annan tråd direkt.\n\n**Java Memory Model (JMM)** definierar regler för när och hur trådar ser varandras skrivningar.',
          },
          {
            type: 'code',
            heading: 'volatile – garanterar synlighet',
            content: `public class Server {
    // volatile – garanterar att värdet alltid läses från huvudminnet
    private volatile boolean korrning = true;

    public void starta() {
        while (korrning) {
            behandlaForfragningar();
        }
    }

    public void stoppa() {
        korrning = false; // Syns omedelbart för alla trådar
    }
}`,
            language: 'java',
          },
          {
            type: 'warning',
            content: '**volatile** löser synligheten men INTE atomicitet!\n\n`count++` är tre operationer (läs, öka, skriv). Volatile skyddar inte mot race conditions på sammansatta operationer.\n\nFör atomiska operationer – använd `AtomicInteger` (se lektionen om Locks och Atomics).',
          },
          {
            type: 'info',
            heading: 'Happens-before – JMMs nyckelbegrepp',
            content: '**Happens-before** garanterar att en åtgärd är synlig för en annan.\n\nViktiga happens-before-relationer:\n• Upplåsning av monitor → efterföljande lås av samma monitor\n• Skrivning till volatile fält → efterföljande läsning av samma fält\n• `Thread.start()` → alla åtgärder i den startade tråden\n• Alla åtgärder → `Thread.join()` returnerar',
          },
          {
            type: 'tip',
            content: 'Utan en happens-before-relation kan kompilatorn och CPU:n **ordna om instruktioner**. Det är därför synkronisering behövs – inte bara för ömsesidig exkludering utan också för **korrekt synlighet**.',
          },
        ],
      },
      {
        id: 'tradar-executor',
        title: 'ExecutorService och Trådpooler',
        emoji: '🏭',
        estimatedMinutes: 10,
        level: 'advanced',
        summary: 'Hantera trådar effektivt med ExecutorService och trådpooler.',
        sections: [
          {
            type: 'text',
            heading: 'Varför trådpooler?',
            content: 'Att skapa en ny tråd för varje uppgift är **dyrt** – det tar tid och minne.\n\nEn **trådpool** återanvänder ett fast antal trådar för att utföra uppgifter. `ExecutorService` är gränssnittet för att arbeta med trådpooler i Java.',
          },
          {
            type: 'code',
            heading: 'ExecutorService – grundläggande användning',
            content: `import java.util.concurrent.*;

// Skapa en trådpool med 4 trådar
ExecutorService pool = Executors.newFixedThreadPool(4);

// Skicka in uppgifter
pool.execute(() -> System.out.println("Uppgift 1"));

Future<String> framtid = pool.submit(() -> {
    Thread.sleep(500);
    return "Resultat!";
});

// Hämta resultat (blockar tills klart)
String svar = framtid.get();
System.out.println(svar); // Resultat!

// Stäng alltid poolen – annars körs JVM vidare
pool.shutdown();
pool.awaitTermination(10, TimeUnit.SECONDS);`,
            language: 'java',
          },
          {
            type: 'info',
            heading: 'Typer av trådpooler',
            content: '• `newFixedThreadPool(n)` – n trådar, kö för väntande uppgifter\n• `newCachedThreadPool()` – skapar trådar vid behov, återanvänder lediga\n• `newSingleThreadExecutor()` – en tråd, uppgifter körs i ordning\n• `newScheduledThreadPool(n)` – för schemalagda och upprepade uppgifter\n\nFör Java 21+: `Executors.newVirtualThreadPerTaskExecutor()` – en virtuell tråd per uppgift.',
          },
          {
            type: 'tip',
            content: 'Anropa alltid **shutdown()** på din ExecutorService. Annars hålls JVM-processen vid liv av de icke-daemon-trådar som poolen skapar.',
          },
        ],
      },
      {
        id: 'tradar-completable',
        title: 'CompletableFuture',
        emoji: '🔗',
        estimatedMinutes: 12,
        level: 'advanced',
        summary: 'Skriv icke-blockerande asynkron kod med CompletableFuture.',
        sections: [
          {
            type: 'text',
            heading: 'Problemet med Future.get()',
            content: 'Vanlig `Future.get()` **blockerar tråden** tills resultatet är klart. Det skapar flaskhalsar.\n\n`CompletableFuture` löser detta – du registrerar **callbacks** som körs när resultatet finns, utan att blockera.',
          },
          {
            type: 'code',
            heading: 'CompletableFuture – grundmönster',
            content: `import java.util.concurrent.*;

// Starta async beräkning
CompletableFuture<String> cf = CompletableFuture
    .supplyAsync(() -> hamtaData())      // Kör i ForkJoinPool
    .thenApply(data -> behandla(data))   // Transformera resultatet
    .thenApply(String::toUpperCase);     // Kedja fler steg

// Lägg till felhantering
cf.exceptionally(ex -> {
    System.out.println("Fel: " + ex.getMessage());
    return "standardvärde";
});

// Hämta resultatet (blockar – använd bara i main/test)
String svar = cf.join();`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Kombinera flera futures',
            content: `// Kör två anrop PARALLELLT och kombinera
CompletableFuture<String> anropA = CompletableFuture.supplyAsync(() -> hamtaAnvandare(1));
CompletableFuture<String> anropB = CompletableFuture.supplyAsync(() -> hamtaOrder(1));

CompletableFuture<String> kombination = anropA.thenCombine(
    anropB,
    (anvandare, order) -> anvandare + " beställde " + order
);

// Vänta på ATT ALLA är klara
CompletableFuture.allOf(anropA, anropB).join();

// Vänta på att DEN FÖRSTA är klar
CompletableFuture.anyOf(anropA, anropB).join();`,
            language: 'java',
          },
          {
            type: 'tip',
            content: 'Använd `thenApplyAsync()` istället för `thenApply()` om callback-koden är tung – det kör callbacken i trådpoolen istället för den anropande tråden.',
          },
        ],
      },
      {
        id: 'tradar-locks',
        title: 'Locks, Atomics och Semaforer',
        emoji: '⚙️',
        estimatedMinutes: 10,
        level: 'advanced',
        summary: 'Utforska avancerade synkroniseringsverktyg: ReentrantLock, AtomicInteger och Semaphore.',
        sections: [
          {
            type: 'text',
            heading: 'Bortom synchronized',
            content: '`synchronized` är enkelt men begränsat. `java.util.concurrent.locks` erbjuder kraftfullare alternativ:\n\n• **ReentrantLock** – explicit lås med tryLock(), fairness-läge\n• **ReadWriteLock** – läs-/skriv-separation\n• **StampedLock** – optimistisk läsning (Java 8+)',
          },
          {
            type: 'code',
            heading: 'ReentrantLock',
            content: `import java.util.concurrent.locks.*;

ReentrantLock las = new ReentrantLock();

public void safKritiskKod() {
    las.lock();
    try {
        // Kritisk sektion – bara en tråd åt gången
        raknare++;
    } finally {
        las.unlock(); // Låses alltid upp i finally!
    }
}

// tryLock – försök utan att blockera
if (las.tryLock(500, TimeUnit.MILLISECONDS)) {
    try {
        // Fick låset!
    } finally {
        las.unlock();
    }
} else {
    System.out.println("Kunde inte få låset – försöker igen");
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'AtomicInteger – lås-fri atomicitet',
            content: `import java.util.concurrent.atomic.*;

AtomicInteger raknare = new AtomicInteger(0);

// Atomisk ökning – trådsäker utan synchronized
raknare.incrementAndGet(); // ++
raknare.addAndGet(5);      // += 5
int gammalt = raknare.getAndSet(0); // Hämta och återställ

// Compare-and-swap (CAS) – grunden för lock-free programmering
boolean lyckades = raknare.compareAndSet(10, 20);
// Sätter till 20 bara om värdet ÄR 10

// Semaphore – begränsa antal parallella åtkomster
Semaphore semaphore = new Semaphore(3); // Max 3 trådar
semaphore.acquire(); // Minska räknaren (blockar om 0)
try {
    // Max 3 trådar här samtidigt
} finally {
    semaphore.release(); // Öka räknaren
}`,
            language: 'java',
          },
          {
            type: 'tip',
            content: '`AtomicInteger` är snabbare än `synchronized` vid låg contention. Vid hög contention (många trådar skriver) – använd **LongAdder** som är optimerad för det fallet.',
          },
        ],
      },
      {
        id: 'tradar-virtual',
        title: 'Virtuella Trådar (Java 21)',
        emoji: '✨',
        estimatedMinutes: 8,
        level: 'advanced',
        summary: 'Project Loom revolutionerar concurrens – skapa miljoner lättviktiga trådar.',
        sections: [
          {
            type: 'text',
            heading: 'Problemet med plattformstrådar',
            content: 'En traditionell Java-tråd är bunden till en **OS-tråd** och tar ~1 MB RAM. Du kan inte skapa fler än ~10 000 sådana trådar innan systemet kämpar.\n\n**Virtuella trådar** (Project Loom, Java 21) löser detta – de hanteras av JVM, inte OS, och tar bara ~KB i RAM. Du kan skapa **miljoner** av dem.',
          },
          {
            type: 'code',
            heading: 'Skapa virtuella trådar',
            content: `// Skapa och starta en virtuell tråd
Thread vt = Thread.ofVirtual().start(() -> {
    System.out.println("Virtuell tråd kör!");
});

// Eller med ExecutorService
try (var pool = Executors.newVirtualThreadPerTaskExecutor()) {
    for (int i = 0; i < 1_000_000; i++) {
        pool.submit(() -> {
            Thread.sleep(Duration.ofSeconds(1));
            return "klar";
        });
    }
} // Stängs automatiskt med try-with-resources
// En miljon trådar! Omöjligt med plattformstrådar.`,
            language: 'java',
          },
          {
            type: 'info',
            heading: 'Hur fungerar virtuella trådar?',
            content: 'Virtuella trådar **monteras** på carrier-trådar (plattformstrådar). När en virtuell tråd blockerar på I/O, demonteras den – carrier-tråden frigörs för att köra en annan virtuell tråd.\n\nDetta är som asynkron programmering (Reactive, CompletableFuture) – men du skriver **vanlig blockerande kod**! Ingen callback-hell.',
          },
          {
            type: 'code',
            heading: 'Praktiskt exempel',
            content: `// Gammalt reaktivt sätt (komplext)
CompletableFuture
    .supplyAsync(this::hamtaAnvandare)
    .thenCompose(u -> CompletableFuture.supplyAsync(() -> hamtaOrder(u)))
    .thenAccept(System.out::println);

// Med virtuella trådar – samma prestanda, enkel kod!
try (var pool = Executors.newVirtualThreadPerTaskExecutor()) {
    pool.submit(() -> {
        var anvandare = hamtaAnvandare();  // Blockerar OK!
        var order = hamtaOrder(anvandare); // Blockerar OK!
        System.out.println(order);
    });
}`,
            language: 'java',
          },
          {
            type: 'tip',
            content: 'Virtuella trådar är bäst för **I/O-bundna** uppgifter (databas, HTTP, fil). För CPU-bundna uppgifter – använd fortfarande en trådpool med `Runtime.getRuntime().availableProcessors()` trådar.',
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════
  // PATH 4 – JVM OCH HUR JAVA FUNGERAR
  // ══════════════════════════════════════════════
  {
    id: 'jvm',
    title: 'JVM & Hur Java Fungerar',
    subtitle: 'Förstå JVM:s arkitektur, bytekod, JIT och garbage collection på djupet',
    color: '#c084fc',
    bgColor: '#1a0a2e',
    icon: '🔬',
    level: 'expert',
    lessons: [
      {
        id: 'jvm-arkitektur',
        title: 'JVM Arkitektur',
        emoji: '🏛️',
        estimatedMinutes: 10,
        level: 'expert',
        summary: 'Förstå JVM:s tre huvuddelar: ClassLoader, runtime dataareaer och exekveringsmotorn.',
        sections: [
          {
            type: 'text',
            heading: 'JVM i tre delar',
            content: 'JVM (Java Virtual Machine) har tre huvuddelar:\n\n1. **ClassLoader-subsystem** – laddar, verifierar och initialiserar klasser\n2. **Runtime dataareaer** – minnesutrymmen för körande program\n3. **Exekveringsmotor** – tolkar och kompilerar bytekod till maskinkod',
          },
          {
            type: 'info',
            heading: 'Runtime dataareaer',
            content: '• **Heap** (delat) – alla objekt och arrayer lagras här. GC körs här.\n• **Method Area / Metaspace** (delat) – klassmetadata, statiska fält, konstanter\n• **JVM Stack** (per tråd) – frames för varje metodanrop (lokala variabler, operandstack)\n• **PC Register** (per tråd) – pekar på aktuell bytekodsinstruktion\n• **Native Method Stack** (per tråd) – för JNI/native-metoder',
          },
          {
            type: 'code',
            heading: 'ClassLoader-hierarkin',
            content: `// Java har tre inbyggda ClassLoaders:
// 1. Bootstrap ClassLoader – laddar java.lang.*, java.util.* etc.
//    Skriven i C++, inte synlig som Java-objekt.

// 2. Platform ClassLoader (Java 9+) – laddar java.sql.*, javax.* etc.

// 3. Application ClassLoader – laddar din applikations klasser
//    (CLASSPATH / module-path)

// Delegationsmodellen: en ClassLoader frågar alltid sin förälder FÖRST
// Bootstrap → Platform → Application

// Du kan skriva egna ClassLoaders:
public class MinClassLoader extends ClassLoader {
    @Override
    protected Class<?> findClass(String name) throws ClassNotFoundException {
        byte[] bytekod = laddaFranKrypterad(name);
        return defineClass(name, bytekod, 0, bytekod.length);
    }
}`,
            language: 'java',
          },
          {
            type: 'text',
            heading: 'Klassladdningsprocessen',
            content: 'En klass laddas i tre steg:\n\n1. **Laddning** – bytekod läses från .class-filen\n2. **Länkning** – tre delar:\n   • Verifiering – bytekoden kontrolleras så den är giltig och säker\n   • Förberedelse – statiska fält tilldelas standardvärden\n   • Upplösning – symboliska referenser ersätts med direkta\n3. **Initialisering** – statiska initieringsblock och statiska fälts startvärden körs',
          },
          {
            type: 'tip',
            content: 'Klasser laddas **lazily** – en klass laddas inte förrän den används för första gången. Det är därför JVM-uppstartstiden är kortare än man kan tro.',
          },
        ],
      },
      {
        id: 'jvm-bytekod',
        title: 'Bytekod och Kompilering',
        emoji: '📟',
        estimatedMinutes: 8,
        level: 'expert',
        summary: 'Förstå vad bytekod är, hur den ser ut och vad javap-verktyget visar.',
        sections: [
          {
            type: 'text',
            heading: 'Från källkod till exekvering',
            content: '1. Du skriver **HelloWorld.java** (källkod)\n2. `javac` kompilerar till **HelloWorld.class** (bytekod)\n3. JVM laddar .class-filen\n4. **Interpreter** kör bytekoden direkt\n5. **JIT-kompilatorn** kompilerar heta metoder till maskinkod\n\nBytekod är ett plattformsoberoende mellanlager – det är därför samma .class-fil körs på Windows, Mac och Linux.',
          },
          {
            type: 'code',
            heading: 'Visa bytekod med javap',
            content: `// Java-kod:
public class Addera {
    public static int addera(int a, int b) {
        return a + b;
    }
}

// Kör: javap -c Addera.class
// Visar bytekod:
// public static int addera(int, int);
//   Code:
//     0: iload_0   <- Ladda parameter a från lokala variabler
//     1: iload_1   <- Ladda parameter b
//     2: iadd      <- Addera topp-2 värden på stacken
//     3: ireturn   <- Returnera int-värdet

// JVM är en STACK-baserad VM.
// Operander pushas på operandstacken och operationer konsumerar dem.`,
            language: 'java',
          },
          {
            type: 'info',
            heading: 'invokedynamic – grunden för lambda',
            content: 'Sedan Java 7 finns `invokedynamic` – en bytekodsinstruktion som löser metoden vid **körning** istället för kompileringstid.\n\nNär du skriver en lambda genererar kompilatorn `invokedynamic`. JVM:s `LambdaMetafactory` skapar vid första körning en optimerad implementationsklass och cachar den.\n\nDetta är snabbare och mer minneseffektivt än gamla anonyma inner classes.',
          },
          {
            type: 'tip',
            content: 'Kotlin, Scala, Groovy och Clojure kompilerar alla till .class-filer och körs på JVM. Bytekod är det gemensamma språket – "skriv i Kotlin, kör på JVM" fungerar tack vare detta.',
          },
        ],
      },
      {
        id: 'jvm-jit',
        title: 'JIT-kompilering',
        emoji: '⚡',
        estimatedMinutes: 8,
        level: 'expert',
        summary: 'Förstå hur HotSpots JIT förvandlar bytekod till snabb maskinkod med avancerade optimeringar.',
        sections: [
          {
            type: 'text',
            heading: 'Interpretering vs JIT',
            content: '**Interpretering** – varje bytekodsinstruktion tolkas och körs. Enkelt men långsamt (100–1000x långsammare än maskinkod).\n\n**JIT (Just-In-Time)** – kompilatorn identifierar "heta" metoder (körs ofta) och kompilerar dem till snabb native maskinkod. Resultatet cachas och återanvänds.',
          },
          {
            type: 'info',
            heading: 'HotSpots tiered compilation',
            content: 'HotSpot JVM (OpenJDK) använder **tiered compilation** med 5 nivåer:\n\n• **Tier 0** – Interpreter (samlar profildata)\n• **Tier 1–3** – C1 (Client Compiler), snabb kompilering med lätta optimeringar\n• **Tier 4** – C2 (Server Compiler), aggressiv optimering av de allra hetaste metoderna\n\nEn metod är "het" efter ~10 000 anrop. C2-kod kan vara nära C++-hastighet.',
          },
          {
            type: 'code',
            heading: 'JIT-optimeringar',
            content: `// 1. INLINING – metoden kopieras in i anroparen
// Före JIT:
int resultat = addera(3, 7); // Metodanrop
// Efter inlining av JIT:
int resultat = 3 + 7; // Ingen overhead!

// 2. ESCAPE ANALYSIS – objekt som inte "lämnar" metoden
//    allokeras på stacken (inte heap) → noll GC-tryck
void berakna() {
    Point p = new Point(3, 4); // Skapar objekt...
    System.out.println(p.x()); // ...men p "lämnar" aldrig metoden
    // JIT kan eliminera allokeringen helt!
}

// 3. LOOP UNROLLING
// Kompilatorn kan förvandla en loop med 4 iterationer
// till 4 separata instruktioner – eliminerar loop-overhead

// 4. DEOPTIMERING – JIT kan backa om antaganden bryts
// Om en ny subklass laddas, kan inlinjad kod bli ogiltig.`,
            language: 'java',
          },
          {
            type: 'tip',
            content: 'Java är **snabbast under steady-state** (efter JVM värmt upp). Benchmarka alltid med uppvärmning. Använd **JMH** (Java Microbenchmark Harness) för rättvisande mätningar.',
          },
        ],
      },
      {
        id: 'jvm-gc',
        title: 'Garbage Collection',
        emoji: '🗑️',
        estimatedMinutes: 12,
        level: 'expert',
        summary: 'Förstå heapstruktur, generationer, GC-algoritmer och hur du väljer rätt GC.',
        sections: [
          {
            type: 'text',
            heading: 'Automatisk minneshantering',
            content: '**Garbage Collection (GC)** frigör automatiskt minnet för objekt som inte längre används. Du behöver aldrig `free()` som i C/C++.\n\nGC hittar oanvända objekt genom att spåra **GC-rötter** (statiska fält, tråd-stackar, JNI-referenser) och markera allt som kan nås därifrån.',
          },
          {
            type: 'info',
            heading: 'Heap-generationer',
            content: 'Heapen delas upp baserat på **the generational hypothesis**: de flesta objekt dör unga.\n\n• **Young Generation**\n  – **Eden** – nya objekt allokeras här\n  – **Survivor S0 & S1** – objekt som överlever en GC kopieras hit\n• **Old Generation (Tenured)** – långlivade objekt befordras hit\n• **Metaspace** (utanför heap) – klassmetadata\n\n**Minor GC** rensar Young Gen – snabb (ms). **Major/Full GC** rensar Old Gen – långsammare.',
          },
          {
            type: 'code',
            heading: 'Välj rätt GC med JVM-flaggor',
            content: `// G1GC – Standard sedan Java 9, bra balans
java -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -jar app.jar

// ZGC – Sub-millisekunds pauser, Java 15+ produktionsklar
java -XX:+UseZGC -jar app.jar

// Parallel GC – Hög genomströmning, längre pauser
java -XX:+UseParallelGC -jar app.jar

// Diagnostikflaggor
java -Xlog:gc*:file=gc.log:time,uptime \\
     -XX:+HeapDumpOnOutOfMemoryError \\
     -XX:HeapDumpPath=/tmp/heap.hprof \\
     -jar app.jar

// Heapstorlek
java -Xms512m -Xmx4g -jar app.jar
// -Xms = initial heap, -Xmx = max heap
// Sätt dem lika i produktion för att undvika omstorlekning`,
            language: 'java',
          },
          {
            type: 'text',
            heading: 'Minneläckor i Java',
            content: 'Java kan ha **minneläckor** trots GC. Orsaker:\n\n• **Statiska samlingar** som växer utan begränsning\n• **ThreadLocal** som inte tas bort i trådpooler\n• **Lyssnare/callbacks** som aldrig avregistreras\n• **Cachar** utan eviction-policy\n\nDiagnostisera med: `jstat -gcutil <pid> 5000` (se om Old Gen växer) och heap dump-analys med Eclipse MAT.',
          },
          {
            type: 'warning',
            content: 'Sätt alltid `-Xms` och `-Xmx` till **samma värde** i produktion. Annars spenderar JVM tid på att ändra storleken på heapen under körning.',
          },
        ],
      },
      {
        id: 'jvm-minne',
        title: 'Minneshantering på djupet',
        emoji: '💾',
        estimatedMinutes: 10,
        level: 'expert',
        summary: 'String pool, escape analysis, off-heap minne och hur objekt layoutas i minnet.',
        sections: [
          {
            type: 'text',
            heading: 'Objekt i minnet',
            content: 'Varje Java-objekt på heapen har:\n• **Object header** (~12–16 bytes) – klass-pekare, mark word (GC-info, lås, hash)\n• **Fält** – instansfälten i ordning (med alignment-padding)\n\nEn `Integer` tar alltså ~16 bytes – en `int` tar 4 bytes. Undvik boxing i prestandakritisk kod.',
          },
          {
            type: 'info',
            heading: 'String Pool – intern caching',
            content: 'Strängliteraler (`"hej"`) lagras i **String Pool** (på heapen sedan Java 7). JVM håller exakt en instans per unikt strängvärde.\n\n`String a = "hej"; String b = "hej"; a == b // true` – samma objekt!\n\n`String c = new String("hej"); a == c // false` – ny instans\n\n`c.intern()` lägger till c i poolen och returnerar pool-instansen.\n\nAnvänd `equals()`, aldrig `==`, för att jämföra strängar.',
          },
          {
            type: 'code',
            heading: 'Off-heap minne',
            content: `// ByteBuffer.allocateDirect – allokerar utanför heap
// Bra för: stora cachar, I/O-buffertar, delat minne
ByteBuffer buf = ByteBuffer.allocateDirect(1024 * 1024); // 1 MB

// Java 22+ Foreign Memory API (stable) – säker off-heap
try (Arena arena = Arena.ofConfined()) {
    MemorySegment segment = arena.allocate(1024);
    segment.set(ValueLayout.JAVA_INT, 0, 42);
    int val = segment.get(ValueLayout.JAVA_INT, 0);
    System.out.println(val); // 42
} // Minnet frigörs automatiskt när arena stängs`,
            language: 'java',
          },
          {
            type: 'tip',
            content: '**Escape analysis** är en JIT-optimering som avgör om ett objekt "lämnar" metoden. Om inte – kan JIT allokera objektet på stacken istället för heapen. Ingen GC-kostnad! Håll metoder korta och objekt lokala för att aktivera detta.',
          },
        ],
      },
      {
        id: 'jvm-graalvm',
        title: 'GraalVM och Native Image',
        emoji: '🦅',
        estimatedMinutes: 8,
        level: 'expert',
        summary: 'Lär dig hur GraalVM kompilerar Java till snabb native kod utan JVM.',
        sections: [
          {
            type: 'text',
            heading: 'Vad är GraalVM?',
            content: '**GraalVM** är en polyglot VM från Oracle. Den innehåller:\n\n• En ny **JIT-kompilator** (skriven i Java) som ersätter C2\n• **Native Image** – AOT-kompilering av Java till standalone binärer\n• Stöd för att köra JavaScript, Python, Ruby och R på JVM\n\nNative Image används av **Quarkus** och **Micronaut** för snabba mikrotjänster.',
          },
          {
            type: 'info',
            heading: 'Native Image: fördelar och begränsningar',
            content: '**Fördelar:**\n• Uppstartstid < 100ms (vs ~1–5s för JVM)\n• ~5x lägre minnesanvändning\n• Ingen JVM krävs för att köra\n• Perfekt för serverless, CLI-verktyg, containers\n\n**Begränsningar:**\n• Längre byggtid (5–20 min)\n• Dynamisk reflektions-, klassladnings- och proxy-kod måste registreras\n• Ingen JIT vid körning – ingen profilering och adaptiv optimering',
          },
          {
            type: 'code',
            heading: 'Bygga och köra Native Image',
            content: `# Installera GraalVM och native-image
sdk install java 21.0.0-graal
gu install native-image

# Kompilera din JAR till native
native-image -jar minapp.jar minapp-native

# Kör binären – ingen JVM behövs!
./minapp-native

# Med Quarkus – inbyggt stöd
mvn package -Pnative
./target/minapp-1.0.0-runner`,
            language: 'java',
          },
          {
            type: 'text',
            heading: 'Closed World Assumption',
            content: 'Native Image kräver att alla klasser som används är kända vid **byggtid** – det kan inte dynamiskt ladda okända klasser.\n\nDetta kallas **Closed World Assumption**.\n\nRamverk som Quarkus och Micronaut är byggda från grunden för att fungera med detta. Spring stöder det sedan Spring 3 men kräver mer konfiguration.',
          },
          {
            type: 'tip',
            content: 'Börja **inte** med Native Image direkt – bygg och testa på vanlig JVM först. Native Image är ett optimeringssteg för driftsättning, inte ett krav för att köra Java.',
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════
  // PATH 5 – QUARKUS
  // ══════════════════════════════════════════════
  {
    id: 'quarkus',
    title: 'Quarkus',
    subtitle: 'Bygg molnbaserade Java-applikationer – från nybörjare till expert',
    color: '#f97316',
    bgColor: '#431407',
    icon: '⚡',
    level: 'intermediate',
    lessons: [
      {
        id: 'quarkus-intro',
        title: 'Vad är Quarkus?',
        emoji: '⚡',
        estimatedMinutes: 6,
        level: 'beginner',
        summary: 'Förstå vad Quarkus är, varför det skapades och hur det skiljer sig från Spring Boot.',
        sections: [
          {
            type: 'text',
            heading: 'Quarkus – Java för molnet',
            content: '**Quarkus** är ett modernt Java-ramverk skapat av Red Hat och lanserat 2019. Det är designat för att köra Java i **molnet och Kubernetes** med extremt snabb starttid och minimalt minnesavtryck.\n\nMålet är att göra Java till ett förstklassigt alternativ för **container-baserade miljöer** och **serverless-funktioner** – miljöer där snabb uppstart och låg minneskonsumtion är avgörande.',
          },
          {
            type: 'info',
            heading: 'Varför Quarkus och inte Spring Boot?',
            content: 'Spring Boot är fantastiskt men byggdes för servermiljöer på 2000-talet. Quarkus är byggt **uppifrån och ned för containrar**.\n\nJämförelse (typiska siffror):\n• **Starttid** – Spring Boot: ~2–5 sekunder, Quarkus JVM: ~0.5 s, Quarkus native: ~0.01 s\n• **Minne (RSS)** – Spring Boot: ~200 MB, Quarkus JVM: ~100 MB, Quarkus native: ~15–30 MB\n• **Ekosystem** – Quarkus stöder Jakarta EE, MicroProfile, Vert.x och Mutiny',
          },
          {
            type: 'text',
            heading: 'Hur fungerar det?',
            content: 'Quarkus gör **build-time processing** – saker som Spring gör vid uppstart (annotation-scanning, DI-konfiguration) gör Quarkus vid **kompilering**.\n\nResultatet är att applikationen startar blixtsnabbt eftersom allt redan är förberett.\n\nDet finns två körlägen:\n• **JVM-läge** – körs på vanlig JVM, snabbare än Spring\n• **Native-läge** – kompileras till maskinkod med GraalVM, startar på millisekunder',
          },
          {
            type: 'code',
            heading: 'Skapa ett nytt Quarkus-projekt',
            content: `# Alternativ 1: Quarkus CLI (rekommenderat)
quarkus create app org.acme:my-app \\
  --extension='rest,hibernate-orm-panache,jdbc-postgresql'

# Alternativ 2: Maven
mvn io.quarkus.platform:quarkus-maven-plugin:3.x:create \\
  -DprojectGroupId=org.acme \\
  -DprojectArtifactId=my-app \\
  -Dextensions="rest"

# Alternativ 3: Webbgränssnitt
# Besök: https://code.quarkus.io`,
            language: 'bash',
          },
          {
            type: 'code',
            heading: 'Starta i dev-läge',
            content: `# Dev-läge med Live Reload (koden uppdateras automatiskt)
./mvnw quarkus:dev

# Applikationen startar på http://localhost:8080
# Dev UI finns på http://localhost:8080/q/dev

# Quarkus Dev Services startar automatiskt databaser (PostgreSQL, MySQL etc.)
# via Docker/Podman – inga manuella inställningar behövs!`,
            language: 'bash',
          },
          {
            type: 'tip',
            content: 'Installera **Quarkus CLI** med `sdk install quarkus` (SDKMAN) eller `brew install quarkusio/tap/quarkus` (Mac). Det är det smidigaste sättet att skapa och hantera Quarkus-projekt.',
          },
        ],
      },
      {
        id: 'quarkus-rest',
        title: 'REST API med Quarkus REST',
        emoji: '🌐',
        estimatedMinutes: 8,
        level: 'beginner',
        summary: 'Bygg ett REST API med Quarkus REST (RESTEasy Reactive) och Jakarta REST-annotationer.',
        sections: [
          {
            type: 'text',
            heading: 'Quarkus REST – det reaktiva REST-ramverket',
            content: '**Quarkus REST** (tidigare RESTEasy Reactive) är det primära sättet att bygga REST API:er i Quarkus. Det är byggt ovanpå Vert.x och är icke-blockerande by default.\n\nDu använder välkända **Jakarta REST-annotationer** (JAX-RS) som `@GET`, `@POST`, `@Path`, `@Produces` – precis som i vanlig Java EE.',
          },
          {
            type: 'code',
            heading: 'En enkel REST-resurs',
            content: `import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path("/api/bocker")          // Base path för hela klassen
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class BokResource {

    @GET
    public List<String> allaBocker() {
        return List.of("Dune", "Neuromancer", "Ender's Game");
    }

    @GET
    @Path("/{id}")            // Path-parameter
    public String hamtaBok(@PathParam("id") Long id) {
        return "Bok med id: " + id;
    }

    @POST
    public String laggTillBok(String titel) {
        return "Lade till: " + titel;
    }

    @DELETE
    @Path("/{id}")
    public void taBortBok(@PathParam("id") Long id) {
        // Ta bort boken...
    }
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Query-parametrar och Response',
            content: `import jakarta.ws.rs.core.Response;

@GET
@Path("/sok")
public List<String> sokBocker(
    @QueryParam("q") String sokning,          // ?q=dune
    @QueryParam("sida") @DefaultValue("0") int sida  // ?sida=2
) {
    // Sök och returnera resultaten...
    return List.of();
}

// Returnera med HTTP-statuskod
@POST
@Path("/skapa")
public Response skapaRessurs(String data) {
    // Skapa resursen...
    return Response
        .status(Response.Status.CREATED)   // 201 Created
        .entity(data)
        .header("Location", "/api/bocker/1")
        .build();
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Exceptionhantering med @ServerExceptionMapper',
            content: `import io.quarkus.rest.runtime.core.QuarkusRestRequestContext;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;

@Provider
public class BokEjHittadMapper implements ExceptionMapper<BokEjHittadException> {

    @Override
    public Response toResponse(BokEjHittadException e) {
        return Response
            .status(Response.Status.NOT_FOUND)  // 404
            .entity(new FelSvar(e.getMessage()))
            .build();
    }
}

record FelSvar(String meddelande) {}`,
            language: 'java',
          },
          {
            type: 'info',
            heading: 'Testa med Dev UI',
            content: 'I **dev-läge** (`./mvnw quarkus:dev`) öppnar du `http://localhost:8080/q/dev` och hittar **Swagger UI** automatiskt.\n\nDu kan testa alla dina endpoints direkt i webbläsaren – inga externa verktyg behövs.',
          },
          {
            type: 'tip',
            content: 'Lägg till `quarkus-smallrye-openapi` i beroenden för att automatiskt generera **OpenAPI-specifikation** och aktivera Swagger UI. Quarkus skapar dokumentationen från dina annotationer.',
          },
        ],
      },
      {
        id: 'quarkus-cdi',
        title: 'CDI – Dependency Injection',
        emoji: '🔌',
        estimatedMinutes: 9,
        level: 'beginner',
        summary: 'Lär dig hur Quarkus hanterar dependency injection med ArC – en build-time CDI-implementation.',
        sections: [
          {
            type: 'text',
            heading: 'ArC – Quarkus DI-container',
            content: '**ArC** är Quarkus inbyggda dependency injection-motor, baserad på **Jakarta CDI 4** men optimerad för build-time.\n\nTill skillnad från Spring, som skannar annotations vid uppstart, analyserar ArC alla beroenden vid **kompileringen**. Fel hittas tidigt och uppstarten är blixtsnabb.\n\nDu använder välbekanta annotationer: `@ApplicationScoped`, `@RequestScoped`, `@Inject`, `@Produces`, `@Named`.',
          },
          {
            type: 'code',
            heading: 'Scopes – bönors livscykel',
            content: `import jakarta.enterprise.context.*;
import jakarta.inject.Singleton;

// En instans per applikation (vanligast för services)
@ApplicationScoped
public class BokService {
    public List<Bok> allaBocker() { return List.of(); }
}

// En instans per HTTP-request
@RequestScoped
public class LokalService {
    private String anvandarId; // Säker att sätta per request
}

// Exakt en instans – ingen proxy (snabbare men sämre testbarhet)
@Singleton
public class KonfigService { }

// Ny instans varje gång (ingen cache)
@Dependent
public class MailBuilder { }`,
            language: 'java',
          },
          {
            type: 'code',
            heading: '@Inject – injicera beroenden',
            content: `@Path("/api/bocker")
@Produces(MediaType.APPLICATION_JSON)
public class BokResource {

    @Inject
    BokService bokService;          // Fält-injektion

    // Eller via konstruktor (rekommenderas för testbarhet)
    private final BokService service;

    @Inject
    public BokResource(BokService service) {
        this.service = service;
    }

    @GET
    public List<Bok> allaBocker() {
        return service.allaBocker();
    }
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Qualifiers och @Produces',
            content: `import jakarta.inject.*;

// Definiera en qualifier
@Qualifier
@Retention(RUNTIME)
@Target({METHOD, FIELD, PARAMETER, TYPE})
public @interface Premium { }

// Två implementationer av samma interface
public interface Rabatt {
    double berakna(double pris);
}

@ApplicationScoped
public class VanligRabatt implements Rabatt {
    public double berakna(double pris) { return pris * 0.05; }
}

@ApplicationScoped
@Premium
public class PremiumRabatt implements Rabatt {
    public double berakna(double pris) { return pris * 0.20; }
}

// Injicera rätt implementation
@Inject @Premium
Rabatt premiumRabatt;

// @Produces – skapa bönor programmatiskt
@ApplicationScoped
public class KonfigProducent {
    @Produces
    @ApplicationScoped
    public AppKonfig skapaKonfig() {
        return new AppKonfig(System.getenv("APP_URL"));
    }
}`,
            language: 'java',
          },
          {
            type: 'info',
            heading: 'Build-time vs runtime DI',
            content: 'ArC analyserar alla beroenden vid **byggtid** och genererar kod för att koppla ihop dem.\n\nFördelen: om ett beroende saknas får du ett **kompileringsfel**, inte ett runtime-fel. Du kan inte deploya en trasig applikation av misstag.',
          },
        ],
      },
      {
        id: 'quarkus-panache',
        title: 'Databas med Panache',
        emoji: '🗄️',
        estimatedMinutes: 10,
        level: 'intermediate',
        summary: 'Använd Hibernate ORM med Panache för att jobba med databaser på ett enkelt och modernt sätt.',
        sections: [
          {
            type: 'text',
            heading: 'Panache – förenklat databasarbete',
            content: '**Panache** är ett Quarkus-tillägg ovanpå Hibernate ORM som eliminerar boilerplate-kod.\n\nDet finns två mönster:\n• **Active Record** – entiteten hanterar sig själv (klassen ärver `PanacheEntity`)\n• **Repository** – separat repository-klass (bättre separation, lättare att testa)\n\nBåda ger automatiska metoder: `findById()`, `listAll()`, `persist()`, `delete()` och JPQL-queries.',
          },
          {
            type: 'code',
            heading: 'Konfigurera databas i application.properties',
            content: `# application.properties

# Dev Services sköter detta automatiskt i dev-läge!
# Produktionsinställningar:
quarkus.datasource.db-kind=postgresql
quarkus.datasource.username=user
quarkus.datasource.password=secret
quarkus.datasource.jdbc.url=jdbc:postgresql://localhost:5432/mindb

# Hibernate – uppdatera schema automatiskt i dev
quarkus.hibernate-orm.database.generation=update

# Logga SQL (hjälpsamt vid felsökning)
quarkus.hibernate-orm.log.sql=true`,
            language: 'properties',
          },
          {
            type: 'code',
            heading: 'Active Record-mönstret',
            content: `import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.*;

@Entity
@Table(name = "bocker")
public class Bok extends PanacheEntity {   // id skapas automatiskt

    @Column(nullable = false)
    public String titel;

    public String forffattare;

    public int ar;

    // Statiska finder-metoder direkt i entiteten
    public static List<Bok> finnaAvForfattare(String forfattare) {
        return list("forffattare", forfattare);
    }

    public static long raknaSenareAn(int ar) {
        return count("ar > ?1", ar);
    }
}

// Användning i resurs:
// Bok.findById(1L)
// Bok.listAll()
// Bok.finnaAvForfattare("Tolkien")
// ny.persist()`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Repository-mönstret',
            content: `import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class BokRepository implements PanacheRepository<Bok> {

    public List<Bok> finnaAvForfattare(String forfattare) {
        return list("forffattare = ?1", forfattare);
    }

    public Optional<Bok> finnaFoerstaEfterAr(int ar) {
        return find("ar > ?1 ORDER BY ar ASC", ar).firstResultOptional();
    }

    // PanacheRepository ger gratis: findById, listAll, persist,
    // delete, count, deleteAll, update, stream m.m.
}

// I resursen:
@Inject BokRepository bokRepo;

@GET
public List<Bok> allaBocker() {
    return bokRepo.listAll(Sort.by("titel"));
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Transaktioner med @Transactional',
            content: `import jakarta.transaction.Transactional;

@ApplicationScoped
public class BokService {

    @Inject BokRepository bokRepo;

    @Transactional                          // Öppnar en DB-transaktion
    public Bok skapaBok(String titel, String forfattare, int ar) {
        Bok bok = new Bok();
        bok.titel = titel;
        bok.forffattare = forfattare;
        bok.ar = ar;
        bokRepo.persist(bok);              // Sparas i databasen
        return bok;
    }

    @Transactional
    public void uppdateraTitel(Long id, String nyTitel) {
        Bok bok = bokRepo.findById(id);
        if (bok == null) throw new BokEjHittadException(id);
        bok.titel = nyTitel;               // Hibernate spårar ändringen
    }                                      // Commit vid metodens slut
}`,
            language: 'java',
          },
          {
            type: 'tip',
            content: 'I **dev-läge** startar Quarkus automatiskt en PostgreSQL-container via **Dev Services** (kräver Docker/Podman). Du behöver inte konfigurera någonting – det fungerar direkt ur lådan.',
          },
        ],
      },
      {
        id: 'quarkus-reaktiv',
        title: 'Reaktiv Programmering med Mutiny',
        emoji: '🌊',
        estimatedMinutes: 11,
        level: 'advanced',
        summary: 'Förstå asynkron och icke-blockerande programmering med Quarkus reaktiva stack – Vert.x och Mutiny.',
        sections: [
          {
            type: 'text',
            heading: 'Varför reaktiv?',
            content: 'Traditionell Java-kod **blockerar en tråd** för varje HTTP-request. Om requesten väntar på en databas eller ett externt API sitter tråden och gör ingenting.\n\nMed **reaktiv programmering** frigörs tråden medan den väntar och kan hantera andra requests. Resultatet är att applikationen klarar **fler samtida requests** med **färre resurser**.\n\nQuarkus reaktiva stack bygger på:\n• **Vert.x** – händelsedriven I/O-motor\n• **Mutiny** – reaktiv programmering med `Uni<T>` och `Multi<T>`',
          },
          {
            type: 'info',
            heading: 'Uni och Multi – de två primitiva typerna',
            content: '**`Uni<T>`** – representerar noll eller ett framtida värde (som `CompletableFuture` men bättre)\n• Används för: databasförfrågningar, HTTP-anrop, enskilda beräkningar\n\n**`Multi<T>`** – representerar en ström av noll till många värden (som `Flux` i Project Reactor)\n• Används för: streaming, Kafka-meddelanden, Server-Sent Events\n\nBåda är **lata** – inget händer förrän du prenumererar (`subscribe()`).',
          },
          {
            type: 'code',
            heading: 'Reaktiva REST-endpoints med Uni',
            content: `import io.smallrye.mutiny.Uni;
import jakarta.ws.rs.*;

@Path("/api/bocker")
@Produces(MediaType.APPLICATION_JSON)
public class BokResource {

    @Inject BokRepository bokRepo;

    // Reaktiv GET – tråden blockeras INTE
    @GET
    @Path("/{id}")
    public Uni<Bok> hamtaBok(@PathParam("id") Long id) {
        return bokRepo.findById(id)          // Returnerar Uni<Bok>
            .onItem().ifNull()
            .failWith(() -> new NotFoundException("Bok " + id + " ej hittad"));
    }

    // Kedja operationer
    @GET
    @Path("/{id}/recension")
    public Uni<String> hamtaRecension(@PathParam("id") Long id) {
        return bokRepo.findById(id)
            .onItem().transformToUni(bok ->
                recensionService.hamtaForBok(bok.titel)  // Andra asynkr. anrop
            );
    }

    // Multi – strömma alla böcker
    @GET
    @Produces(MediaType.SERVER_SENT_EVENTS)
    public Multi<Bok> strommaBocker() {
        return bokRepo.streamAll();
    }
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Vanliga Mutiny-operationer',
            content: `// Skapa en Uni
Uni<String> uni = Uni.createFrom().item("Hej!")
Uni<String> fran_fut = Uni.createFrom().completionStage(future);
Uni<Void> misslyckas = Uni.createFrom().failure(new RuntimeException("Fel"));

// Transformera värdet
uni.onItem().transform(s -> s.toUpperCase())    // Hej! -> HEJ!
   .onItem().transform(String::length)          // -> 4

// Hantera fel
uni.onFailure().recoverWithItem("standard")     // Återhämta med värde
   .onFailure(NotFoundException.class)
        .recoverWithNull()                      // null om inte hittad

// Kedja asynkrona anrop
bokRepo.findById(1L)
    .onItem().transformToUni(bok ->
        recensionService.hamta(bok)             // Annat Uni-anrop
    )
    .onItem().transform(rec -> "Betyg: " + rec.betyg)
    .subscribe().with(
        resultat -> log.info(resultat),         // Lyckades
        fel -> log.error("Fel: " + fel)         // Misslyckades
    );`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Reaktiv Panache',
            content: `import io.quarkus.hibernate.reactive.panache.PanacheRepository;
import io.smallrye.mutiny.Uni;

// Reaktivt repository – allt returnerar Uni/Multi
@ApplicationScoped
public class BokRepository implements PanacheRepository<Bok> {
    // findById, persist, listAll returnerar nu Uni/Multi!
}

// Reaktiv service
@ApplicationScoped
public class BokService {

    @Inject BokRepository bokRepo;

    @ReactiveTransactional               // Reaktiv transaktion
    public Uni<Bok> skapaBok(String titel) {
        Bok bok = new Bok();
        bok.titel = titel;
        return bokRepo.persist(bok);
    }

    public Uni<List<Bok>> toppBocker(int limit) {
        return bokRepo.find("ORDER BY betyg DESC")
            .page(0, limit)
            .list();
    }
}`,
            language: 'java',
          },
          {
            type: 'warning',
            content: '**Blockera aldrig** den reaktiva tråden! Anrop som `Thread.sleep()`, blockerande I/O eller `.await().indefinitely()` i en reaktiv kontext ger degraderad prestanda och kan krascha applikationen. Använd alltid reaktiva API:er i reaktiva metoder.',
          },
        ],
      },
      {
        id: 'quarkus-native',
        title: 'Native Build, Testning & Kubernetes',
        emoji: '🚀',
        estimatedMinutes: 13,
        level: 'expert',
        summary: 'Kompilera till native executable med GraalVM, skriv effektiva tester och deploya till Kubernetes.',
        sections: [
          {
            type: 'text',
            heading: 'Native Image – Java som maskinkod',
            content: '**GraalVM Native Image** kompilerar Java-kod direkt till en **plattformsspecifik binärfil** – ingen JVM behövs vid körning.\n\nResultatet:\n• Startar på **10–50 millisekunder** (JVM tar sekunder)\n• Förbrukar **30–100 MB RAM** (JVM tar 200+ MB)\n• Perfekt för **Kubernetes, serverless och microservices**\n\nPriset är längre byggtid (1–5 minuter) och vissa begränsningar (reflection, dynamisk klassladdning).',
          },
          {
            type: 'code',
            heading: 'Bygg native executable',
            content: `# Kräver GraalVM installerat lokalt
./mvnw package -Pnative

# ELLER: bygg med Docker/Podman (inget lokal GraalVM behövs)
./mvnw package -Pnative -Dquarkus.native.container-build=true

# Kör den kompilerade binären (mycket snabbt!)
./target/my-app-1.0-runner

# Bygg en minimal Docker-image (distroless)
docker build -f src/main/docker/Dockerfile.native-micro -t my-app:native .

# Jämförelse med JVM-image:
# JVM image:    ~200 MB,  startar ~2 s
# Native image: ~50 MB,   startar ~0.02 s`,
            language: 'bash',
          },
          {
            type: 'code',
            heading: 'Hantera reflection i native mode',
            content: `// Klasser som används via reflection måste registreras
import io.quarkus.runtime.annotations.RegisterForReflection;

@RegisterForReflection          // Tillåt reflection på denna klass
public class MinDto {
    public String namn;
    public int alder;
}

// Registrera externa klasser (t.ex. biblioteksberoenden)
// I META-INF/native-image/reflect-config.json:
// [
//   { "name": "com.externt.Klass",
//     "allDeclaredFields": true,
//     "allDeclaredMethods": true }
// ]

// Quarkus-tillägg sköter detta automatiskt för sina API:er
// Hibernate, Jackson, RESTEasy etc. är redan konfigurerade`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Testning med @QuarkusTest',
            content: `import io.quarkus.test.junit.QuarkusTest;
import io.restassured.RestAssured;
import org.junit.jupiter.api.*;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

@QuarkusTest                            // Startar applikationen
class BokResourceTest {

    @Test
    void testaHamtaAllaBocker() {
        given()
            .when().get("/api/bocker")
            .then()
                .statusCode(200)
                .body("size()", greaterThan(0));
    }

    @Test
    void testaSkapaBok() {
        given()
            .contentType("application/json")
            .body("""{"titel":"Dune","forfattare":"Herbert"}""")
            .when().post("/api/bocker")
            .then()
                .statusCode(201)
                .body("titel", equalTo("Dune"));
    }
}

// Test av native executable (körs i CI):
@QuarkusIntegrationTest             // Testar den kompilerade native binären
class BokResourceNativeTest extends BokResourceTest { }`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Deploya till Kubernetes',
            content: `# Lägg till Kubernetes-tillägget
quarkus ext add kubernetes

# application.properties – Kubernetes-konfiguration
quarkus.kubernetes.namespace=min-namespace
quarkus.kubernetes.image-pull-policy=Always
quarkus.container-image.group=mitt-register
quarkus.container-image.name=min-app

# Bygg och deploya med ett kommando
./mvnw package -Dquarkus.kubernetes.deploy=true \\
               -Dquarkus.container-image.push=true

# Quarkus genererar automatiskt:
# - Deployment.yaml
# - Service.yaml
# - ConfigMap.yaml (från application.properties)
# - Liveness/Readiness probes (/q/health/live, /q/health/ready)`,
            language: 'bash',
          },
          {
            type: 'code',
            heading: 'Health Checks och Metrics',
            content: `# Lägg till tilläggen
quarkus ext add smallrye-health smallrye-metrics

// Anpassad health check
import org.eclipse.microprofile.health.*;
import jakarta.enterprise.context.ApplicationScoped;

@Readiness                              // /q/health/ready
@ApplicationScoped
public class DatabaseHälsokontroll implements HealthCheck {

    @Inject DataSource datakalla;

    @Override
    public HealthCheckResponse call() {
        try {
            datakalla.getConnection().close();
            return HealthCheckResponse.up("databas");
        } catch (Exception e) {
            return HealthCheckResponse
                .builder("databas")
                .down()
                .withData("fel", e.getMessage())
                .build();
        }
    }
}

// Endpoints:
// /q/health       – alla hälsokontroller
// /q/health/live  – liveness (är appen vid liv?)
// /q/health/ready – readiness (klar att ta emot trafik?)
// /q/metrics      – Prometheus-metrics`,
            language: 'java',
          },
          {
            type: 'tip',
            content: 'Använd **Quarkus Dev Services** med `@QuarkusTest` – testerna startar automatiskt en PostgreSQL-container via Testcontainers. Du slipper mocka databasen och får riktiga integrationstester utan konfiguration.',
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════
  // PATH 6 – SPRING BOOT
  // ══════════════════════════════════════════════
  {
    id: 'springboot',
    title: 'Spring Boot',
    subtitle: 'Det mest populära Java-ramverket – från grunder till molnbaserade microservices',
    color: '#6ee7b7',
    bgColor: '#022c22',
    icon: '🍃',
    level: 'intermediate',
    lessons: [
      {
        id: 'spring-intro',
        title: 'Introduktion till Spring Boot',
        emoji: '🍃',
        estimatedMinutes: 6,
        level: 'beginner',
        summary: 'Förstå vad Spring Boot är, hur det skiljer sig från Spring Framework och skapa ditt första projekt.',
        sections: [
          {
            type: 'text',
            heading: 'Vad är Spring Boot?',
            content: '**Spring Boot** är ett ramverk som förenklar skapandet av produktionsklara Java-applikationer. Det lanserades 2014 av Pivotal (numera VMware/Broadcom) och är idag det **mest använda Java-ramverket** i världen.\n\nSpring Boot bygger ovanpå **Spring Framework** men eliminerar all manuell XML-konfiguration genom att använda **auto-konfiguration** – ramverket gissar vad du behöver baserat på vad som finns i classpath.',
          },
          {
            type: 'info',
            heading: 'Spring Boot vs Spring Framework',
            content: 'Med **Spring Framework** konfigurerade du allt manuellt (XML eller @Configuration-klasser). Det var kraftfullt men krävde mycket boilerplate.\n\n**Spring Boot** lägger till:\n• **Auto-konfiguration** – lägger du till JPA-beroende konfigureras Hibernate automatiskt\n• **Inbyggd server** – Tomcat, Jetty eller Undertow är inbyggda, ingen WAR-deployment behövs\n• **Starters** – förkonfigurerade beroenden (`spring-boot-starter-web`, `spring-boot-starter-data-jpa`)\n• **Actuator** – inbyggd hälsoövervakning och metrics',
          },
          {
            type: 'code',
            heading: 'Skapa ett projekt med Spring Initializr',
            content: `# Alternativ 1: Webbgränssnitt
# Besök: https://start.spring.io
# Välj: Maven, Java, Spring Boot 3.x
# Beroenden: Spring Web, Spring Data JPA, H2 Database

# Alternativ 2: Spring Boot CLI
spring init --dependencies=web,data-jpa,h2 my-app

# Alternativ 3: curl
curl https://start.spring.io/starter.zip \\
  -d dependencies=web,data-jpa,h2 \\
  -d name=my-app \\
  -o my-app.zip`,
            language: 'bash',
          },
          {
            type: 'code',
            heading: 'Startpunkten – @SpringBootApplication',
            content: `import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication   // = @Configuration + @EnableAutoConfiguration + @ComponentScan
public class MinApp {

    public static void main(String[] args) {
        SpringApplication.run(MinApp.class, args);
        // Startar inbyggd Tomcat på port 8080
    }
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'application.properties – grundläggande konfiguration',
            content: `# Server
server.port=8080

# Databas (H2 in-memory för test/dev)
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver
spring.h2.console.enabled=true          # /h2-console i webbläsaren

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=update    # Uppdatera schema automatiskt
spring.jpa.show-sql=true                # Logga SQL-frågor

# Loggning
logging.level.org.springframework=INFO
logging.level.com.minapp=DEBUG`,
            language: 'properties',
          },
          {
            type: 'tip',
            content: 'Använd **Spring Initializr** på `start.spring.io` för att skapa projekt – det är det snabbaste sättet. IntelliJ IDEA Ultimate har det inbyggt direkt i "New Project"-dialogen.',
          },
        ],
      },
      {
        id: 'spring-rest',
        title: 'REST API med Spring MVC',
        emoji: '🌐',
        estimatedMinutes: 9,
        level: 'beginner',
        summary: 'Bygg ett komplett REST API med @RestController, @GetMapping, validering och global felhantering.',
        sections: [
          {
            type: 'text',
            heading: 'Spring MVC och REST',
            content: '**Spring MVC** är Spring:s webbramverk. Med `@RestController` kombinerar du `@Controller` och `@ResponseBody` – alla metoder returnerar automatiskt JSON.\n\nSpring Boot konfigurerar **Jackson** automatiskt för JSON-serialisering. Du behöver bara definiera dina klasser och returtyper.',
          },
          {
            type: 'code',
            heading: 'En komplett REST-kontroller',
            content: `import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.util.List;

@RestController
@RequestMapping("/api/bocker")          // Base path
public class BokController {

    private final BokService bokService;

    public BokController(BokService bokService) {  // Konstruktor-injektion
        this.bokService = bokService;
    }

    @GetMapping                         // GET /api/bocker
    public List<Bok> allaBocker() {
        return bokService.hamtaAlla();
    }

    @GetMapping("/{id}")                // GET /api/bocker/1
    public ResponseEntity<Bok> hamtaBok(@PathVariable Long id) {
        return bokService.hamtaEn(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping                        // POST /api/bocker
    @ResponseStatus(HttpStatus.CREATED) // 201 Created
    public Bok skapaBok(@RequestBody @Valid BokDto dto) {
        return bokService.skapa(dto);
    }

    @PutMapping("/{id}")
    public Bok uppdatera(@PathVariable Long id, @RequestBody @Valid BokDto dto) {
        return bokService.uppdatera(id, dto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)  // 204 No Content
    public void taBort(@PathVariable Long id) {
        bokService.taBort(id);
    }
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Validering med Jakarta Bean Validation',
            content: `import jakarta.validation.constraints.*;

// DTO med valideringsregler
public record BokDto(
    @NotBlank(message = "Titel får inte vara tom")
    @Size(max = 200)
    String titel,

    @NotBlank
    String forfattare,

    @Min(value = 1000, message = "Ogiltigt år")
    @Max(value = 2100)
    int ar,

    @Email
    String kontaktEmail
) {}

// I controller: @Valid aktiverar valideringen
// @RequestBody @Valid BokDto dto`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Global felhantering med @ControllerAdvice',
            content: `import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.MethodArgumentNotValidException;

@RestControllerAdvice               // Hanterar fel från alla controllers
public class GlobalFelhanterare {

    // Valideringsfel (400 Bad Request)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, String> hanteraValideringsfel(
        MethodArgumentNotValidException ex) {
        Map<String, String> fel = new HashMap<>();
        ex.getBindingResult().getFieldErrors()
            .forEach(e -> fel.put(e.getField(), e.getDefaultMessage()));
        return fel;
    }

    // Resurs ej hittad (404)
    @ExceptionHandler(BokEjHittadException.class)
    public ResponseEntity<String> hanteraBokEjHittad(BokEjHittadException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    // Generellt fel (500)
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public String hanteraGenerelltFel(Exception ex) {
        return "Internt serverfel: " + ex.getMessage();
    }
}`,
            language: 'java',
          },
          {
            type: 'tip',
            content: 'Använd `@RequestParam` för query-parametrar (`?sida=2&storlek=10`) och `@PathVariable` för path-parametrar (`/bocker/42`). Spring binder dem automatiskt till rätt Java-typer.',
          },
        ],
      },
      {
        id: 'spring-jpa',
        title: 'Databas med Spring Data JPA',
        emoji: '🗄️',
        estimatedMinutes: 10,
        level: 'intermediate',
        summary: 'Använd Spring Data JPA och Hibernate för att spara och hämta data utan att skriva SQL.',
        sections: [
          {
            type: 'text',
            heading: 'Spring Data JPA – repositories utan SQL',
            content: '**Spring Data JPA** genererar databasanrop automatiskt baserat på metodnamn i dina repository-interface. Du definierar ett interface och Spring skapar implementationen vid uppstart.\n\nUnder huven använder Spring Data JPA **Hibernate** som JPA-implementationen, men du arbetar med JPA-annotationer och behöver sällan tänka på Hibernate direkt.',
          },
          {
            type: 'code',
            heading: 'Entitet och Repository',
            content: `import jakarta.persistence.*;

@Entity
@Table(name = "bocker")
public class Bok {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String titel;

    private String forfattare;
    private int ar;

    // Getters, setters, konstruktorer...
    // Eller använd Lombok: @Data @NoArgsConstructor @AllArgsConstructor
}

// Repository – Spring genererar all SQL
import org.springframework.data.jpa.repository.JpaRepository;

public interface BokRepository extends JpaRepository<Bok, Long> {
    // Gratis: findById, findAll, save, delete, count, existsById...

    // Genererade metoder från metodnamnet:
    List<Bok> findByForfattare(String forfattare);
    List<Bok> findByArGreaterThan(int ar);
    Optional<Bok> findFirstByTitelContainingIgnoreCase(String del);
    boolean existsByTitelAndForfattare(String titel, String forfattare);
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'JPQL och @Query',
            content: `import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.query.Param;

public interface BokRepository extends JpaRepository<Bok, Long> {

    // JPQL (objektorienterat SQL)
    @Query("SELECT b FROM Bok b WHERE b.ar BETWEEN :fran AND :till ORDER BY b.titel")
    List<Bok> finnaMellanAr(@Param("fran") int fran, @Param("till") int till);

    // Nativ SQL (använd sparsamt)
    @Query(value = "SELECT * FROM bocker WHERE forfattare ILIKE %:namn%",
           nativeQuery = true)
    List<Bok> sokForfattare(@Param("namn") String namn);

    // Uppdatera med @Modifying
    @Modifying
    @Query("UPDATE Bok b SET b.ar = :nyttAr WHERE b.id = :id")
    int uppdateraAr(@Param("id") Long id, @Param("nyttAr") int nyttAr);
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Service-lager med @Transactional',
            content: `import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BokService {

    private final BokRepository bokRepo;

    public BokService(BokRepository bokRepo) {
        this.bokRepo = bokRepo;
    }

    @Transactional(readOnly = true)     // Optimerar för läsning
    public List<Bok> hamtaAlla() {
        return bokRepo.findAll(Sort.by("titel"));
    }

    @Transactional(readOnly = true)
    public Optional<Bok> hamtaEn(Long id) {
        return bokRepo.findById(id);
    }

    @Transactional                      // Skrivtransaktion
    public Bok skapa(BokDto dto) {
        Bok bok = new Bok();
        bok.setTitel(dto.titel());
        bok.setForfattare(dto.forfattare());
        bok.setAr(dto.ar());
        return bokRepo.save(bok);
    }

    @Transactional
    public void taBort(Long id) {
        if (!bokRepo.existsById(id)) {
            throw new BokEjHittadException(id);
        }
        bokRepo.deleteById(id);
    }
}`,
            language: 'java',
          },
          {
            type: 'info',
            heading: 'Paginering och sortering',
            content: 'Spring Data JPA har inbyggt stöd för paginering med `Pageable`:\n\n`Page<Bok> sida = bokRepo.findAll(PageRequest.of(0, 10, Sort.by("titel")))`\n\nResultatet innehåller `content` (listan), `totalElements`, `totalPages` och `hasNext()`.',
          },
        ],
      },
      {
        id: 'spring-security',
        title: 'Spring Security & JWT',
        emoji: '🔒',
        estimatedMinutes: 12,
        level: 'intermediate',
        summary: 'Skydda ditt API med Spring Security, JWT-tokens och rollbaserad åtkomstkontroll.',
        sections: [
          {
            type: 'text',
            heading: 'Spring Security – autentisering och auktorisering',
            content: '**Spring Security** är den standard security-lösningen för Spring-applikationer. Den hanterar:\n• **Autentisering** – vem är du? (login, JWT, OAuth2)\n• **Auktorisering** – vad får du göra? (roller, behörigheter)\n\nFör moderna REST API:er används **JWT (JSON Web Token)** – klienten loggar in och får ett token som skickas med varje request i `Authorization: Bearer <token>`-headern.',
          },
          {
            type: 'code',
            heading: 'SecurityFilterChain – konfigurera säkerheten',
            content: `import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SäkerhetsKonfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(csrf -> csrf.disable())          // REST API behöver inte CSRF
            .sessionManagement(session ->
                session.sessionCreationPolicy(STATELESS))  // Ingen session – JWT
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()   // Öppna endpoints
                .requestMatchers("/api/admin/**").hasRole("ADMIN")  // Endast admin
                .anyRequest().authenticated()                  // Allt annat kräver login
            )
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();    // Hasha lösenord med BCrypt
    }
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'JWT-filter och token-hantering',
            content: `import io.jsonwebtoken.*;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Value("\${jwt.secret}")
    private String hemligNyckel;

    @Override
    protected void doFilterInternal(HttpServletRequest req,
                                    HttpServletResponse res,
                                    FilterChain chain) throws Exception {
        String header = req.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer ")) {
            String token = header.substring(7);
            try {
                Claims ansprak = Jwts.parserBuilder()
                    .setSigningKey(hemligNyckel.getBytes())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

                String anvandarnamn = ansprak.getSubject();
                // Sätt autentisering i SecurityContext
                UsernamePasswordAuthenticationToken auth =
                    new UsernamePasswordAuthenticationToken(
                        anvandarnamn, null,
                        List.of(new SimpleGrantedAuthority("ROLE_USER")));
                SecurityContextHolder.getContext().setAuthentication(auth);
            } catch (JwtException e) {
                res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                return;
            }
        }
        chain.doFilter(req, res);
    }
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Login-endpoint och token-generering',
            content: `@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Inject AnvandarService anvandarService;
    @Value("\${jwt.secret}") String hemligNyckel;

    @PostMapping("/login")
    public ResponseEntity<TokenSvar> login(@RequestBody LoginDto dto) {
        // Verifiera lösenord
        Anvandare anvandare = anvandarService.verifiera(dto.anvandarnamn(), dto.losenord());

        // Skapa JWT-token (giltig 24h)
        String token = Jwts.builder()
            .setSubject(anvandare.getAnvandarnamn())
            .claim("roller", anvandare.getRoller())
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 86_400_000L))
            .signWith(SignatureAlgorithm.HS256, hemligNyckel.getBytes())
            .compact();

        return ResponseEntity.ok(new TokenSvar(token));
    }
}

record LoginDto(String anvandarnamn, String losenord) {}
record TokenSvar(String token) {}`,
            language: 'java',
          },
          {
            type: 'tip',
            content: 'Lagra JWT-hemligheten i **miljövariabler** (aldrig i kod eller `application.properties` som checkas in). Använd `@Value("\${jwt.secret}")` och sätt `JWT_SECRET` som miljövariabel i produktionsmiljön.',
          },
        ],
      },
      {
        id: 'spring-testing',
        title: 'Testning med JUnit & Mockito',
        emoji: '🧪',
        estimatedMinutes: 11,
        level: 'intermediate',
        summary: 'Skriv enhetstester, integrationstester och API-tester för Spring Boot-applikationer.',
        sections: [
          {
            type: 'text',
            heading: 'Testpyramiden i Spring Boot',
            content: 'Spring Boot erbjuder tre testnivåer:\n\n• **Enhetstester** – testar enskild klass isolerat (snabba, många)\n• **Integrationstester** – testar flera lager ihop, `@SpringBootTest` startar applikationen\n• **API-tester** – testar HTTP-endpoints via `MockMvc` eller `WebTestClient`\n\n`spring-boot-starter-test` inkluderar **JUnit 5**, **Mockito**, **AssertJ** och **MockMvc** – allt du behöver.',
          },
          {
            type: 'code',
            heading: 'Enhetstester med Mockito',
            content: `import org.junit.jupiter.api.*;
import org.mockito.*;
import static org.mockito.Mockito.*;
import static org.assertj.core.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class BokServiceTest {

    @Mock
    BokRepository bokRepo;          // Fejkad implementation

    @InjectMocks
    BokService bokService;          // Klassen vi testar

    @Test
    void skapa_bok_sparas_och_returneras() {
        // Given – förbered testdata
        BokDto dto = new BokDto("Dune", "Frank Herbert", 1965, null);
        Bok sparadBok = new Bok(1L, "Dune", "Frank Herbert", 1965);
        when(bokRepo.save(any(Bok.class))).thenReturn(sparadBok);

        // When – kör metoden vi testar
        Bok resultat = bokService.skapa(dto);

        // Then – kontrollera resultatet
        assertThat(resultat.getTitel()).isEqualTo("Dune");
        assertThat(resultat.getId()).isNotNull();
        verify(bokRepo, times(1)).save(any(Bok.class));
    }

    @Test
    void hamta_ej_existerande_kastar_exception() {
        when(bokRepo.findById(99L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> bokService.hamtaEn(99L))
            .isInstanceOf(BokEjHittadException.class);
    }
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'API-tester med MockMvc',
            content: `import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(BokController.class)     // Laddar bara webb-lagret (snabbt)
class BokControllerTest {

    @Autowired MockMvc mockMvc;
    @MockBean  BokService bokService; // Mockar service-lagret

    @Test
    void GET_alla_bocker_returnerar_200() throws Exception {
        when(bokService.hamtaAlla())
            .thenReturn(List.of(new Bok(1L, "Dune", "Herbert", 1965)));

        mockMvc.perform(get("/api/bocker")
                .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$[0].titel").value("Dune"))
            .andExpect(jsonPath("$.length()").value(1));
    }

    @Test
    void POST_ogiltig_bok_returnerar_400() throws Exception {
        String ogiltigJson = """{"titel":"","forfattare":"","ar":0}""";

        mockMvc.perform(post("/api/bocker")
                .contentType(MediaType.APPLICATION_JSON)
                .content(ogiltigJson))
            .andExpect(status().isBadRequest());
    }
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Integrationstester med @SpringBootTest',
            content: `import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class BokIntegrationsTest {

    @LocalServerPort int port;
    @Autowired TestRestTemplate restTemplate;

    @Test
    void skapa_och_hamta_bok() {
        // Skapa en bok via POST
        BokDto ny = new BokDto("Neuromancer", "Gibson", 1984, null);
        ResponseEntity<Bok> svar = restTemplate
            .postForEntity("/api/bocker", ny, Bok.class);

        assertThat(svar.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        Long id = svar.getBody().getId();

        // Hämta den skapade boken via GET
        Bok hamtad = restTemplate.getForObject("/api/bocker/" + id, Bok.class);
        assertThat(hamtad.getTitel()).isEqualTo("Neuromancer");
    }
}`,
            language: 'java',
          },
          {
            type: 'info',
            heading: 'Testdatabas med H2',
            content: 'Lägg till H2 som `test`-beroende i `pom.xml` och Spring Boot byter automatiskt till en **in-memory H2-databas** under tester. Ingen PostgreSQL behövs vid testning.\n\nVill du testa mot riktig databas? Använd **Testcontainers** med `@Testcontainers` och `@Container` – det startar en riktig PostgreSQL i Docker under testerna.',
          },
        ],
      },
      {
        id: 'spring-avancerat',
        title: 'WebFlux, Actuator & Kubernetes',
        emoji: '🚀',
        estimatedMinutes: 13,
        level: 'expert',
        summary: 'Reaktiv programmering med WebFlux, produktionsövervakning med Actuator och driftsättning på Kubernetes.',
        sections: [
          {
            type: 'text',
            heading: 'Spring WebFlux – reaktivt Spring',
            content: '**Spring WebFlux** är Spring:s reaktiva webbramverk – ett alternativ till Spring MVC för **hög-konkurrens**-scenarion.\n\nIsället för en tråd per request används **händelsedriven I/O** med **Project Reactor**:\n• `Mono<T>` – noll eller ett framtida värde\n• `Flux<T>` – en ström av noll till många värden\n\nAnvänd WebFlux när du har: streaming, SSE, WebSocket, eller väldigt många samtida anslutningar.',
          },
          {
            type: 'code',
            heading: 'Reaktiv controller med WebFlux',
            content: `import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bocker")
public class BokController {

    private final BokRepository bokRepo;   // R2DBC repository (reaktivt)

    // Mono – ett svar
    @GetMapping("/{id}")
    public Mono<ResponseEntity<Bok>> hamtaBok(@PathVariable Long id) {
        return bokRepo.findById(id)
            .map(ResponseEntity::ok)
            .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    // Flux – ström av svar
    @GetMapping
    public Flux<Bok> allaBocker() {
        return bokRepo.findAll();
    }

    // Server-Sent Events – strömma uppdateringar
    @GetMapping(value = "/strom", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Bok> strommaBocker() {
        return bokRepo.findAll()
            .delayElements(Duration.ofMillis(100));  // Skicka en per 100ms
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<Bok> skapaBok(@RequestBody @Valid BokDto dto) {
        return bokRepo.save(new Bok(dto));
    }
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Spring Boot Actuator – hälsa och metrics',
            content: `# pom.xml: spring-boot-starter-actuator

# application.properties
management.endpoints.web.exposure.include=health,info,metrics,prometheus
management.endpoint.health.show-details=always

# Endpoints som skapas automatiskt:
# GET /actuator/health    – applikationshälsa (UP/DOWN)
# GET /actuator/info      – applikationsinfo
# GET /actuator/metrics   – lista tillgängliga metrics
# GET /actuator/metrics/jvm.memory.used  – specifik metric
# GET /actuator/prometheus  – Prometheus-format (kräver Micrometer)`,
            language: 'properties',
          },
          {
            type: 'code',
            heading: 'Anpassade health checks och metrics',
            content: `import org.springframework.boot.actuate.health.*;
import io.micrometer.core.instrument.MeterRegistry;

// Anpassad hälsokontroll
@Component
public class DatabasHalsa implements HealthIndicator {

    private final DataSource ds;

    @Override
    public Health health() {
        try {
            ds.getConnection().close();
            return Health.up().withDetail("databas", "nåbar").build();
        } catch (Exception e) {
            return Health.down().withDetail("fel", e.getMessage()).build();
        }
    }
}

// Anpassade metrics med Micrometer
@Service
public class BokService {

    private final Counter bokCounter;

    public BokService(MeterRegistry registry) {
        this.bokCounter = Counter.builder("bocker.skapade")
            .description("Antal skapade böcker")
            .register(registry);
    }

    public Bok skapa(BokDto dto) {
        Bok bok = bokRepo.save(new Bok(dto));
        bokCounter.increment();             // Öka räknaren
        return bok;
    }
}`,
            language: 'java',
          },
          {
            type: 'code',
            heading: 'Driftsätta på Kubernetes',
            content: `# application.properties – miljövariabler i Kubernetes
spring.datasource.url=\${DB_URL}
spring.datasource.username=\${DB_USER}
spring.datasource.password=\${DB_PASSWORD}

# Kubernetes Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bok-app
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: bok-app
        image: mitt-register/bok-app:1.0
        ports:
        - containerPort: 8080
        env:
        - name: DB_URL
          valueFrom:
            secretKeyRef:
              name: db-hemligheter
              key: url
        # Actuator health för Kubernetes probes
        livenessProbe:
          httpGet:
            path: /actuator/health/liveness
            port: 8080
          initialDelaySeconds: 30
        readinessProbe:
          httpGet:
            path: /actuator/health/readiness
            port: 8080`,
            language: 'yaml',
          },
          {
            type: 'tip',
            content: 'Aktivera **liveness** och **readiness** probes separat med `management.endpoint.health.probes.enabled=true`. Kubernetes använder `/actuator/health/liveness` för att avgöra om en pod ska startas om, och `/actuator/health/readiness` för att avgöra om trafik ska skickas dit.',
          },
        ],
      },
    ],
  },
]
