import React, { Component } from 'react'
import './Dashboard/Dashboard.css'
import ContentCard from './Dashboard/ContentCard'
import one from '../Assets/1.jpg'
import two from '../Assets/2.jpg'
import three from '../Assets/3.jpg'
import four from '../Assets/4.jpg'
import five from '../Assets/5.png'


class Dashboard extends Component {
    constructor() {
        super()

        this.contentCards = [{ img: one, title: 'I am a title', paragraph: 'So much content that it is hard to believe' },
        { img: two, title: 'The second title is rad', paragraph: 'A very useful article on the Galopagos Island.' },
        { img: three, title: 'Going on three', paragraph: 'A forecast on the climate of the EUR/AUD' },
        { img: four, title: 'Not quite five', paragraph: 'Brief thoughts on the benefits of Basecamp over Slack' },
        { img: five, title: 'Fifth', paragraph: '5 Reasons to go with Artemis Healthcare contained here' }]
    }
    render() {
        let mapped = this.contentCards.map((x, i) => {
            return <ContentCard key={x.title + i} img={x.img} title={x.title} paragraph={x.paragraph} />

        })
        return (
            <div className='dashboard'>
                <header className='row'>
                    <section className='row hamAndLogo'>
                        <div>=</div>
                        <p>PATHWAZE</p>
                    </section>
                    <div className='companiesContainer'>
                        <div className='row companiesDiv'>
                            <h3>Artemis</h3>
                            <h3>+</h3>
                            <h3>Portico</h3>
                        </div>
                        <h2>Partnership Plan</h2>
                    </div>
                    <section>
                        <div className='row ctr'>
                            <div className='row ctr userImg'>E</div>
                            <h4>John Gray</h4>
                            <h6>\/</h6>
                        </div>
                    </section>
                </header>
                <section>
                    <div className='row aln contentLibrary'>
                        <h4>Content Library</h4>
                        <div className='row filesFAQs'>
                            <h4>Files</h4>
                            <h4>FAQs</h4>
                        </div>
                    </div>
                    <div className='row'>
                        {mapped}
                    </div>
                    <div className='row'>
                        {mapped}
                    </div>
                </section>

            </div>
        )
    }
}

export default Dashboard