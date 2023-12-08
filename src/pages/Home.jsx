

import React from 'react';
import '../App.css';

function App() {
    return (
        <div className="tarifa-container">
            <header className="tarifa-header">
                <h1>Welcome to Tarifa, Spain</h1>

            </header>
            <div className='img-div'>
                <img id='img-home' src="https://i.pinimg.com/originals/76/bd/62/76bd6259ed61e6c8d26d90d829b921be.jpg" alt="" />
            </div>


            <section className="tarifa-section">
                <h2>Explore the Beauty of Tarifa</h2>
                <p className="tarifa-description">
                    Nestled in the southernmost part of Spain, Tarifa is a picturesque town
                    known for its stunning beaches, vibrant culture, and rich history. Whether
                    you're a nature enthusiast, a water sports lover, or someone seeking
                    tranquility, Tarifa has something for everyone.
                </p>
            </section>
            <section className="tarifa-section">
                <h2>Things to Do</h2>
                <ul className="tarifa-list">
                    <li className="tarifa-list-item">Relax on the pristine beaches</li>
                    <li className="tarifa-list-item">Try windsurfing and kiteboarding</li>
                    <li className="tarifa-list-item">Explore the historic Old Town</li>
                    <li className="tarifa-list-item">Visit Castillo de Guzmán</li>
                    <li className="tarifa-list-item">Enjoy local cuisine in charming cafes</li>
                </ul>
            </section>
            <section className="tarifa-section">
                <h2>Accommodation</h2>
                <p className="tarifa-description">
                    Whether you prefer luxury resorts with a sea view or cozy guesthouses in
                    the heart of the town, Tarifa offers a range of accommodation options to
                    suit every budget and preference.
                </p>
            </section>
            <section className="tarifa-section">
                <h2>Getting There</h2>
                <p className="tarifa-description">
                    Tarifa is easily accessible by car, bus, or ferry. The nearest airports
                    are Jerez Airport and Gibraltar International Airport. From there, you can
                    take a scenic drive or use public transportation to reach this hidden gem.
                </p>
            </section>
            <footer className="tarifa-footer">
                <p>Plan your visit to Tarifa and discover the beauty of this coastal paradise.</p>
            </footer>
        </div>
    );
}

export default App;
