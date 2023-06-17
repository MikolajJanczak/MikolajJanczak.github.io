function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }
  
  
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

function showCharacterDetails(character) {
    var imageSrc = "";
    var description = "";
    if (character === "peter") {
        imageSrc = "img/variants/peter.gif";
        description = "Peter Benjamin Parker (z Ziemi-616), znany również jako jego superbohaterskie alter ego Spider-Man, jest superbohaterem, który pojawił się we wszystkich formach mediów dotyczących Spider-Mana oraz wielu serii komiksowych wydawanych przez Marvel Comics. <br> Został stworzony przez scenarzystę-redaktora Stana Lee i scenarzystę-artystę Steve'a Ditko. Po raz pierwszy pojawił się w Amazing Fantasy #15 w sierpniu 1962 roku. <br> <blockquote>'Możesz żyć każdym dniem swojego życia próbując myśleć o czymś bardziej głębokim lub trafniejszym... ale dla nas, dla ludzi takich jak my, którzy nagle znajdują się patrząc na szalony świat i nie wiedzą, co do diabła powinniśmy w nim robić... mogę ci powiedzieć, że po prostu pamiętanie, że wraz z wielką mocą idzie wielka odpowiedzialność... może całkowicie cię określić'.<br>—Peter Parker</blockquote>";
    } 
    else if (character === "miguel") {
        imageSrc = "img/variants/miguel.gif";
        description = "Miguel O'Hara (z Ziemi-928B), znany również jako Spider-Man 2099, to postać występująca w animowanych filmach Spider-Verse. Jest liderem Spider-Society, której zadaniem jest ochrona Multiverse. <br> Miguel meets with Lyla, who informs Miguel that the multiverse hasn't collapsed after the situation with Kingpin's collider. She also gives Miguel a wrist mounted multiversal travel device, which Lyla simply call a gizmo. After being equipped with the gizmo, Lyla asks Miguel where he would be headiing to first, and he responds with Earth-67. Miguel travels to Earth-67 to meet the universes Spider-Man, but as he tries to explain to Earth-67 Spider-Man, the both of them get into an argument, both of them accusing each other of pointing at each other, not allowing Miguel to explain the situation to Spider-Man.";
    } 
    else if (character === "miles") {
        imageSrc = "img/variants/miles.gif";
        description = "Miles Morales (z Ziemi-1610) jest drugim Spider-Manem w Ultimate Universe, który zastąpił Petera Parkera po jego domniemanym zgonie. Jest byłym członkiem zarówno Ultimates, jak i Young Ultimates. Obecnie mieszka na Ziemi-616 razem z Peterem Parkerem z tej rzeczywistości znanym jako Marvel Universe. <br> Po wydarzeniach związanych z Secret Wars, Miles teraz mieszka w Nowym Jorku w głównej rzeczywistości jako członek Champions i został protegowanym głównego Spider-Mana.";
    } 
    else if (character === "ben") {
        imageSrc = "img/variants/ben.gif";
        description = "Ben Reilly został stworzony przez Jackala i był pierwszym udanym klonem Petera Parkera; pierwszy klon, Kaine, cierpiał na degenerację klonu, co sprawiło, że był niestabilny. Za pomocą tajemniczej nauki Ben został oznaczony wspomnieniami Petera i w ich pierwszym spotkaniu uważał siebie za Petera. Po tym, jak Peter został pojmany przez Jackala, zarówno Peter, jak i Ben znaleźli się w kostiumach Spider-Mana na stadionie Shea i początkowo walczyli ze sobą, uważając drugiego za podstawionego. Kiedy zrozumieli, o co w tym wszystkim chodzi, postanowili połączyć siły, aby uratować klon Gwen Stacy i schwytanego Neda Leedsa. W trakcie tego procesu, Ben wydawał się być zabity w eksplozji, a Peter, obawiając się konsekwencji znalezienia ciała drugiego Petera Parkera, wrzucił ciało Bena do komina fabrycznego. Ben przeżył i uciekł z komina. Gdy zobaczył Petera i Mary Jane Watson w objęciach, Ben postanowił rozpocząć nomadyczne życie. Sam siebie nazwał 'Ben Reilly', używając imienia swojego wujka Bena i nazwiska panieńskiego ciotki May, odpowiednio Ben Parker i May Reilly. Wziął stary ubiór, który Peter zamierzał oddać na cele charytatywne, zmienił kolor włosów na blond i opuścił Nowy Jork w głębokiej depresji.";
    }
    else if (character === "ham") {
    imageSrc = "img/variants/ham.gif";
    description = "Peter Porker urodził się jako pająk o imieniu Peter. Zamieszkiwał w laboratorium w piwnicy May Porker, nieco dziwacznej naukowczyni zwierząt, która stworzyła 'pierwszy na świecie napędzany atomowo suszarkę do włosów', mając nadzieję, że 'wprowadzenie rozszczepiania jądrowego do amerykańskich salonów piękności' 'rewolucjonizuje przemysł pielęgnacji włosów'. Po zalanym wodą włosach i uruchomieniu suszarki, May Porker przypadkowo napromieniowała się i w szaleńczym zawrocie głowy ugryzła Petera, który nagle zmienił się w antropomorficzną świnię podobną do samej May Porker. W stanie dezorientacji, Peter uciekł z gospodarstwa Porkerów, szybko zdając sobie sprawę, że wciąż posiada zdolności pająka.";
    }
    else if (character === "cat") {
    imageSrc = "img/variants/cat.gif";
    description = "Spider-Cat był domowym kotem i wiernym pupilem grupy entuzjastów gier wideo, który w pewnym momencie swojego życia zyskał moce Spider Totem, których używał do walki z przestępczością. Miał powtarzające się koszmary o starciu z gołębiem znanym jako Venom, podczas których tracił kilka ze swoich dziewięciu żyć, choć zawsze budził się po wygranej walce. <br> <quoteblock>Mrrwr.</quoteblock>-Spider-Cat";
    }
    else if (character === "punk") {
    imageSrc = "img/variants/punk.gif";
    description = "Wulgarny nastolatek Hobie Brown żył jako nielegalny mieszkaniec w Ameryce rządzonej przez faszystowski reżim prezydenta Ozzy'ego Osborna. Ugryzł go pająk napromieniowany przez nielegalne składowanie odpadów, co uczyniło go Spider-Totem. Ogłosił się Spider-Manem i rozpoczął walkę o wolność u boku swojego przyjaciela Captaina Anarchy'ego (Karla Morningdew). Jako lider Spider Army, która walczyła przeciwko uciskowi Osborna, Spider-Man wykorzystywał swojego wolnego ducha jako 'radioaktywną maszynę samobójczą', aby zjednoczyć poparcie najniższych klas, których reżim próbował zniszczyć w imię 'siły' Ameryki. Gdy Osborn osobiście prowadził swoje siły, aby 'Make America Great Again', Thunderbolt Department wzmocniony za pomocą V.E.N.O.M., Spider-Man użył 15000 woltów punk rocka z 'armii wzmacniaczy' do wyłączenia nowych symbiotów, a następnie pokonał sam Osborna, obcinając mu głowę gitarą, przed odkryciem swojej tożsamości przed widownią.";
}
    else if (character === "lego") {
    imageSrc = "img/variants/lego.gif";
    description = "Minifigurka Spider-Mana pochodzi z serii Spider-Man oraz podserii Super Heroes od LEGO, związanej z uniwersum Marvela. Przedstawia ona superbohatera posiadającego moc pająka. Spider-Man jest również jedną z postaci występujących w grze wideo LEGO Marvel Super Heroes. Minifigurka Spider-Mana została po raz pierwszy wprowadzona do gry, a następnie pojawiła się w swoim własnym temacie. Spider-Man powrócił również do tematu Bohaterów w 2012 i 2013 roku.";
    }
    else if (character === "octopus") {
    imageSrc = "img/enemies/octopus.gif";
    description = "Dr. Otto Octavius jest wysoko inteligentnym i dumnie nastawionym naukowcem, bardziej znanym jako zbrodniarz geniusz doktor Octopus. Podczas projektu badawczego związanej z energią atomową, ciało Octaviusa zostało połączone z czterema mechanicznymi ramionami przypominającymi macki, co spowodowało również poważne uszkodzenie mózgu, które przemieniło go w przestępcę. Stawił czoła Spider-Manowi i stał się jednym z jego największych wrogów. Po wielu walkach ciało Otta zaczęło podupadać i ulegać rozkładowi. W ostatniej próbie przeżycia Otto wymienił mózg z swoim największym wrogiem, pozostawiając Spider-Mana, aby umarł w jego wrażliwym ciele. Jednak pozostałe wspomnienia sprawiły, że Otto zrozumiał odpowiedzialność bycia bohaterem i zdecydował się stać Lepszym Spider-Manem, lepszym łowcą zbrodni niż jego wróg kiedykolwiek był. Pomimo jego najlepszych starań, bezwzględne metody sprawiedliwości Otto okazały się daremne w powstrzymaniu powrotu Zielonego Goblina, zmuszając go do oddania kontroli nad swoim ciałem Peterowi Parkerowi, uznając go za godnego noszenia miana Spider-Mana.";
    }
    else if (character === "mysterio") {
    imageSrc = "img/enemies/mysterio.gif";
    description = "Mysterio jest jednym z głównych antagonistów w Marvel Comics, najczęściej służącym jako wróg Spider-Mana, Deadpoola i Daredevila. Jest super-złoczyńcą, który przede wszystkim wykorzystuje iluzje i inne gadżety do popełniania przestępstw.Tożsamość Mysterio została przyjęta przez trzy różne osoby na przestrzeni lat: Quentin Beck, Daniel Berkheart i Francis Klum.";
    }
    else if (character === "goblin") {
    imageSrc = "img/enemies/goblin.gif";
    description = "Jest bogatym przemysłowcem i założycielem Oscorp Technologies, a jednocześnie alter ego Normana Osborna, założyciela i dyrektora generalnego Oscorp oraz ojca Harry'ego Osborna, który zaprzyjaźnił się z Peterem Parkerem. Po ekspozycji na surowicę Goblina, surowica wywołała efekt uboczny, który uczynił Normana szalenie niebezpiecznym, powodując, że słyszy głosy Goblina oraz doprowadzając do podziału jego umysłu i stworzenia alternatywnej osobowości - Zielonego Goblina. Zielony Goblin przejmuje kontrolę nad Normanem, popychając go do zabijania i niszczenia wszystkiego i wszystkich, aż staje się obsesyjnie związany z zniszczeniem Spider-Mana i wszystkiego, o czym on dba, stając się jego największym wrogiem. Ostatecznie zostaje zabity w walce z Spider-Manem, gdy zostaje przeszyty przez własne skrzydło, które próbował użyć do zabicia Spider-Mana. Pomimo jego śmierci, nadal nawiedza Spider-Mana.";
    }
    else if (character === "sandman") {
    imageSrc = "img/enemies/sandman.gif";
    description = "Jest zawodowym przestępcą, który przypadkowo zabija wujka Petera Parkera, Benjamina 'Bena' Parkera. Sandman jest postrzegany jako tragiczny złoczyńca, ponieważ jest przedstawiany jako porządny człowiek, który łamie prawo tylko po to, aby zapewnić opiekę swojej ciężko chorej córce. Jednak jego moce i metody, których używa w tym celu, czynią go jednym z najniebezpieczniejszych wrogów Spider-Mana. Główną bronią Flinta Marko było jego własne ciało, które deformował, aby dopasować je do swoich potrzeb, choć jego głównym narzędziem zbrodni było rewolwer Colt Python kaliber .357 Magnum, który używał podczas napadów przed nabyciem swoich mocy.";
    }
    else if (character === "venom") {
    imageSrc = "img/enemies/venom.gif";
    description = "Symbiont Venom (z Ziemi-616), często nazywany po prostu 'Symbiontem', jest pierwszym z wielu obcych, żelopodobnych pasożytów, które wymagają żywiciela do połączenia się w celu przetrwania. Pojawia się wielokrotnie w komiksach Marvela, głównie tych z udziałem Spider-Mana.";
    }
    else if (character === "lizard") {
    imageSrc = "img/enemies/lizard.gif";
    description = "Dr. Curtis 'Curt' Connors to naukowiec, który z powodu braku jednej ręki marzył o stworzeniu równego świata. Współpracował z Richardem Parkerem nad projektem mającym na celu wyleczenie ludzkości z niepełnosprawności i chorób. Po zaginięciu Parkera, Connors użył eksperymentalnej formuły na sobie, która przywróciła mu rękę, ale również przemieniła go w olbrzymiego Jaszczura. Jego działania sprowadziły go w konflikt z Spider-Manem, którym okazał się być Peter Parker. Connors próbował rozproszyć formułę po mieście, by zamienić wszystkich w Jaszczury, ale został powstrzymany i wyleczony przez Spider-Mana.";
    }
    else if (character === "kingpin") {
    imageSrc = "img/enemies/kingpin.gif";
    description = "Kingpin, znany również jako Wilson Fisk, był niepopularnym i otyłym dzieckiem, które postanowiło poświęcić się kulturystyce. Wychowany w biedzie, twierdził, że jego ojciec był narkomanem, a on sam popełnił pierwsze morderstwo w wieku dwunastu lat. Od najmłodszych lat Fisk dążył do osiągnięcia doskonałości we wszystkim, co robił, uznając siłę fizyczną za kluczowy element w budowaniu swojej pozycji w podziemnym świecie. Trenował różne techniki kulturystyki i walki osobistej, a szczególnie zainteresował się japońską sztuką sumo. Ponadto, zdawał sobie sprawę z ważności inteligencji i samodzielnie zdobywał wiedzę, głównie z zakresu naukowych i politycznych. Fisk zrozumiał, że polityczne techniki organizacji są kluczowe w kierowaniu grupami przestępczymi. W wieku piętnastu lat zyskał przydomek 'Kingpin Przestępczości' za swoje umiejętności organizacyjne.";
    }
    else if (character === "kraven") {
    imageSrc = "img/enemies/kraven.gif";
    description = "Kraven the Hunter, znany również jako Sergei Kravinoff, to jeden z przeciwników Spider-Mana. Jest legendarnym łowcą i wojownikiem, który dąży do udowodnienia swojej doskonałości poprzez polowanie na najniebezpieczniejsze zwierzęta i superbohaterów. Jego charakterystyczny strój składa się z dzikiego skórzanej tuniki, peleryny z futra i kapelusza. Kraven jest znany ze swojej siły, zwinności i wytrzymałości, które czynią go groźnym przeciwnikiem. Jego strategia polega na zaskoczeniu i pojmaniu swoich celów, wykorzystując swoje umiejętności łowieckie i różnorodny arsenał broni. Kraven często wpada w obsesję na punkcie polowania na Spider-Mana, co prowadzi do ich wielu konfrontacji. Jego celem jest udowodnienie, że jest najlepszym łowcą na świecie, a pokonanie Spider-Mana jest kluczowym krokiem w osiągnięciu tego celu.";
    }
    document.getElementById("character-image").src = imageSrc;
    document.getElementById("character-description").innerHTML = description;
    document.getElementById("character-details").style.display = "block";
}

function hideCharacterDetails() {
    document.getElementById("character-details").style.display = "none";
}

function addHoverEffect(element) {
    element.classList.add('hover-effect');
}

function removeHoverEffect(element) {
    element.classList.remove('hover-effect');
}

function slide() {
  const slider = document.querySelector('.slider');
  const slides = slider.querySelectorAll('.slide');
  const slideWidth = slides[0].offsetWidth;

  // Ustawienie szerokości kontenera slajdów
  slider.style.width = `${slideWidth * slides.length}px`;

  // Skopiowanie slajdów i dodanie ich na koniec
  for (let i = 0; i < slides.length; i++) {
    const cloneSlide = slides[i].cloneNode(true);
    slider.appendChild(cloneSlide);
  }

  // Rozpoczęcie animacji slajdów
  const duration = slides.length * 5; // Czas trwania animacji w sekundach
  slider.style.animationDuration = `${duration}s`;
}



