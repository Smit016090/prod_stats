import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid" style={{margin: '0% 40% 0% 40%'}}>
                    <a className="navbar-brand" href="/">{props.title}</a>
                </div>
            </nav>
        </div>
    )
}
