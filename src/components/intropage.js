import React from 'react';

const Intropage = () => {
    
    return (
        <>
            <div className='Space-heading'>
                <h1 >Space</h1>
                <p>Space is a  vast expanse beyond Earth's atmosphere,
                    where stars, planets, galaxies, and other celestial objects exist.
                    It's the region where there is very little matter and a vacuum exists.
                </p>
            </div>
            <img className='Landsat-9' src="Landsat9-removebg-preview (1).png" alt="Landsat 9" title="Landsat 9" />

            <div className='Space-exploration'>
                <h1>Space Exploration</h1>
                <p>Sending spacecraft, satellites, and other vehicles beyond Earth's atmosphere to study and explore other planets, moons, asteroids, and more.</p>
            </div>

            <img className='sun-img' src="eve-online-white-sun-wallpaper2-315559270484mbuvymosj-removebg-preview.png" alt="Sun" title='Sun' />
            <div className='Sun-color'>
                <h1>Sun</h1>
                <p>The color of the Sun is actually white, or more accurately, a pale yellowish-white.
                    However, when we observe the Sun from Earth's surface, its light passes through the Earth's atmosphere, which scatters shorter wavelengths of light (blue and violet) more than longer wavelengths (red and orange).
                    As a result, the Sun often appears as a bright yellow or orange ball in the sky. The perception of the Sun's color can also vary depending on atmospheric conditions, such as sunrise and sunset when the sunlight passes through more of the Earth's atmosphere and can appear more reddish.</p>
            </div>
            <div className='blackhole-container'>
                <img className='blackhole-img' src="kisspng-trinidad-black-hole-clip-art-black-hole-5abb725ca209f9.4978398315222339486637.png" alt="Black hole" title='black hole' />
            </div>
            <div className='blackhole-info'>
                <h1>Black Hole</h1>
                <p>Black holes are incredibly dense regions where gravity is so strong that nothing, not even light, can escape.
                    The boundary around a black hole beyond which escape is impossible is called the event horizon.
                    Black holes can form from the remnants of massive stars that undergo gravitational collapse.
                    The extreme gravity near a black hole can cause a phenomenon called gravitational time dilation, where time passes more slowly.
                    Black holes can influence their surroundings by affecting the motion of nearby stars and gas, shaping the galaxies they inhabit.
                </p>
            </div>
            <img className='Darkenergy_img' src="intracluster-light-des-simulation-observation-1380.png" alt="Dark energy" title='Dark energy' />
            <div className='Darkenergy_info'>
                <h1>Dark Energy</h1>
                <p>
                    Dark energy is a mysterious form of energy that permeates space and is responsible for the accelerated expansion of the universe.
                    It's a hypothetical concept used to explain the observed cosmic expansion, counteracting the gravitational pull between galaxies.
                    Despite comprising about 68% of the universe's energy content, its nature and origin remain largely unknown. Dark energy's presence was inferred from observations of distant supernovae and the large-scale structure of the cosmos, leading to the realization that the universe's expansion is not slowing down as previously thought but actually accelerating.
                </p>
            </div>
            <div className='Container_Comet'>
                <img className='Comet_img' src="images-removebg-preview.png" alt="Comet" title='Comet' />
            </div>
            <div className='Comet_info'>
                <h1>Comet</h1>
                <p>
                    A comet is a space object made of ice, dust, and rocks. When it gets close to the Sun,
                    the heat makes the ice turn into gas, creating a glowing cloud called a coma. 
                    This gas is pushed away by the Sun's rays, forming a bright tail that points away from the Sun. 
                    Comets are interesting because they reveal information about the early solar system.</p>
            </div>
            <img className='Planet9_img' src="9_Transparent.webp" alt="Planet-9" title='Planet-9'/>
            <div className='Planet9_info'>
                <h1>Planet-9</h1>
                <p>Planet 9, also known as Planet X, is a hypothetical ninth planet in our solar system beyond Neptune. 
                    It is believed to be a large, distant planet with a mass several times that of Earth. 
                    Its existence is inferred from the unusual orbits of some distant Kuiper Belt objects. 
                    Astronomers suggest that Planet 9 could explain these orbital patterns and gravitational anomalies. 
                    However, as of now, Planet 9 has not been directly observed, and its exact characteristics and location remain uncertain, 
                    making it a subject of ongoing research and investigation.</p>
            </div>
            <div className="wormHole_Container">
                <img src="WormHole-removebg-preview.png" alt="Worm Hole" title='Worm Hole' />
            </div>
            <div className='wormhole_info'>
                <h1>Worm Hole</h1>
                <p>A wormhole is a speculative concept in theoretical physics that suggests a tunnel-like structure could connect separate points in space-time.
                    It's often depicted as a shortcut or passage through space-time, allowing for faster-than-light travel between distant regions of the universe. 
                    The idea is based on solutions to Einstein's field equations in general relativity. However, the existence and stability of wormholes remain theoretical and 
                    have not been observed or proven. They are a popular theme in science fiction due to their potential for interstellar travel and time travel scenarios.</p>
            </div>
        </>
    );
}

export default Intropage;
