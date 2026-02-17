
const Hero = () => {
   
  return (
    <section className="noisy" id="hero">
      <h1>MOJITO</h1>
    <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />
      <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />

    <div className="body">
        <div className="content md:mt-20">
            <div className="space-y-5 hidden md:block ">
                <p>Cool. Crisp. Classic</p>
                <p className="subtitle">
                    Sip the spirit<br/> of summer 
                </p>
            </div>
            <div className="view-cocktails">
                <p className="subtitle">
                    Every cocktail in the menu is a blend of premium spirits, fresh ingredients, and a touch of magic.Our menu has something to delight every palate.
                </p>
                <a href="#cocktails">view cocktails</a>
            </div>
        </div>
    </div>
    </section>
  );
};

export default Hero;