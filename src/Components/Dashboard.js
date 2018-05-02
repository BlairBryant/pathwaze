import React, {Component} from 'react'
import './Dashboard/Dashboard.css'

class Dashboard extends Component {
    constructor() {
        super()

    }
    render() {
        return(
            <div className='dashboard'>
                <header className='row'>
                    <section className='row hamAndLogo'>
                        <div>=</div>
                        <p>PATHWAZE</p>
                    </section>
                    <section>
                        <div className='companiesContainer'>
                            <div className='row companiesDiv'>
                                <h3>Artemis</h3>
                                <h3>+</h3>
                                <h3>Portico</h3>
                            </div>
                            <h2>Partnership Plan</h2>
                        </div>
                    </section>
                    <section>
                        <div className='row ctr'>
                        <div className='row ctr userImg'>E</div>
                        <h4>John Gray</h4>
                        <h4>\/</h4>
                        </div>
                    </section>
                </header>
                <section>
                    <div className='row aln top'></div>
                </section>

            </div>
        )
    }
}

export default Dashboard