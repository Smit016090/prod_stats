import React, { useState } from 'react'
import results from './Logic'

export default function Calculator() {

    const [robotATime, setRobotATime] = useState("")
    const [robotBTime, setRobotBTime] = useState("")
    const [effectiveTime, setEffectiveTime] = useState("")
    const [packs, setPacks] = useState("")
    const [actualTime, setActualTime] = useState("")
    const [packsPerHour, setPacksPerHour] = useState("")

    const handleEffectiveTime = (e) => {
        console.log('effective time changed');
        setEffectiveTime(e.target.value);
    }

    const handleRobotATime = (e) => {
        console.log('robot a time changed');
        setRobotATime(e.target.value);
    }

    const handleRobotBTime = (e) => {
        console.log('robot b time changed');
        setRobotBTime(e.target.value);
    }

    const handleNumberOfPacks = (e) => {
        console.log('number of packs changed')
        setPacks(e.target.value);
    }


    // Calculate button pending
    const handleCalculateClick = () => {
        const { actualUpTime, packsPerHrs } = results(effectiveTime, robotATime, robotBTime, packs);
        setActualTime(actualUpTime);
        setPacksPerHour(packsPerHrs)
        console.log('Calculate btn clicked.');
    }

    const handleResetClick = () => {
        setEffectiveTime("");
        setRobotATime("");
        setRobotBTime("");
        setPacksPerHour("")
        setActualTime("")
        setPacks("")
        console.log('Reset btn clicked.');
    }

    const handleCopyAUTClick = () => {
        navigator.clipboard.writeText(actualTime);
    }

    const handleCopyPPHClick = () => {
        navigator.clipboard.writeText(packsPerHour);
    }

    return (
        <div className='container'>
            <h2 className='mt-2'>Data input: -</h2>

            <div className="row g-3 align-items-center m-1">
                <div className="col-auto">
                    <label className="col-label">Effictive time:</label>
                </div>
                <div className="col-auto">
                    <input type="string" className="form-control" value={effectiveTime} onChange={handleEffectiveTime} />
                </div>
            </div>

            <div className="row g-3 align-items-center m-1">
                <div className="col-auto">
                    <label className="col-label">Robot A downtime:</label>
                </div>
                <div className="col-auto">
                    <input type="string" className="form-control" value={robotATime} onChange={handleRobotATime} />
                </div>
            </div>

            <div className="row g-3 align-items-center m-1">
                <div className="col-auto">
                    <label className="col-label">Robot B downtime:</label>
                </div>
                <div className="col-auto">
                    <input type="string" className="form-control" value={robotBTime} onChange={handleRobotBTime} />
                </div>
            </div>

            <div className="row g-3 align-items-center m-1">
                <div className="col-auto">
                    <label className="col-label">Number of packs processed:</label>
                </div>
                <div className="col-auto">
                    <input type="number" className="form-control" value={packs} onChange={handleNumberOfPacks} />
                </div>
            </div>

            <div style={{ margin: '1rem 1rem 1rem 14.5rem' }}>
                <input className='btn btn-outline-success' type="submit" value="Calculate" id="calculatebtn" onClick={handleCalculateClick} />
                <input className='btn btn-outline-danger mx-3' type="reset" value="reset" id="resetbtn" onClick={handleResetClick} />
            </div>

            <h2>System Stats: -</h2>

            <ol>
                <li>

                    <div className="row g-3 align-items-center m-1">
                        <div className="col-auto">
                            <label className="col-label">System actual up time:</label>
                        </div>
                        <div className="col-auto">
                            <input readOnly type="string" className="form-control" value={actualTime} />
                        </div>
                        <button className='btn btn-outline-primary col-auto' onClick={handleCopyAUTClick}>Copy</button>
                    </div>

                </li>
                <li>

                    <div className="row g-3 align-items-center m-1">
                        <div className="col-auto">
                            <label className="col-label">Packs per hour:</label>
                        </div>
                        <div className="col-auto">
                            <input readOnly type="string" className="form-control" value={packsPerHour} />
                        </div>
                        <button className='btn btn-outline-primary col-auto' onClick={handleCopyPPHClick}>Copy</button>
                    </div>

                </li>
            </ol>
        </div>
    )
}