import "../style/AboutUs.css";

export const AboutUs = () => {
  return (
    <div className="mainAboutUs">
      <div className="one">
        <div className="oneLeft">
          <label className="naslovLeft">NAŠA VIZIJA</label>
          <p>
            Trenutačno na hrvatskom tržištu postoji izrazito malo Facebook
            grupa/ zajednica/ web stranica čiji su ciljevi jednaki našem.
            Prepoznavanjem nedostataka i razmišljanjem o unaprjeđenju usluga
            razvija se naša poduzetnička ideja. Cilj je potaknuti ljude na
            darivanje vlastitoga viška, kako bi svojim dobrim djelom uspjeli
            pomoći onima u potrebi. Buđenje svijesti o globalnim problemima kao
            što su klimatske promjene, zagađenje zraka, potrošnja energije, te
            siromaštvo. Besplatna web aplikacija za sve ljude koji žele ekološki
            prihvatljivo, efikasno, učinkovito, te moralno rješenje.
          </p>
        </div>
        <div className="oneRight">
          <img src={require("../images/image.jpg")} className="imageOne" />
        </div>
      </div>
      <div className="two">
        <div className="twoLeft">
          <img src={require("../images/image1.jpg")} className="imageOne" />
        </div>
        <div className="twoRight">
          <label className="naslovLeft">ZAŠTO POKLANJATI</label>
          <p>
            <strong>Razlozi zašto poklanjati: </strong>
            <ol>
              <li>Poklanjanje pomaže drugima</li>
              <li>Poklanjanje nadahnjuje darivanje u drugima</li>
              <li>Poklanjanje uči odgovornosti</li>
              <li>Poklanjanjem se njeguje samopoštovanje</li>
              <li>Poklanjanje čini razliku</li>
              <li>Poklanjanje je jednostavno</li>
            </ol>
          </p>
        </div>
      </div>
      <div className="three">
        <div className="oneLeft">
          <label className="naslovLeft">UTJECAJ NA OKOLIŠ</label>
          <p>
            Ljudi se sve više zalažu za održivost i zaštitu okoliša, te je briga
            za prirodu sve veća. Zagreb kao primjer ima uvedenu novu regulaciju
            odlaganja otpada čija inicijativa potiče našu ideologiju. Razina
            pristupačnosti također ima pozitivan utjecaj jer je za našu
            aplikaciju potreban samo internet, a u Hrvatskoj je pristup
            tehnologiji lako dostupan. Moralne vrijednosti građana preklapaju se
            s našim etičkim rješenjem.
          </p>
        </div>
        <div className="oneRight">
          <img src={require("../images/image2.jpg")} className="imageOne" />
        </div>
      </div>
    </div>
  );
};
