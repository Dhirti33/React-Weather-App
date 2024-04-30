import "../styles/todayTemp.css"

const TodayTemp = ({icon}) => {

    return (
        <div className="todayTempContainer">
            <div className="topT">
                <div className="text">
                    <h3>How&apos;s the</h3>
                    {/* <br /> */}
                    <h3>temperature today?</h3>
                </div>
                <div className="currentTempIcons">
                    <div className="sunnyIcon">
                        <svg width="2em" height="2em" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" >
                            <path fill="#000000" d="M26 13h4v2h-4zm-3-5.414l2.828-2.828l1.414 1.414L24.414 9zm0 12.828L24.414 19l2.828 2.828l-1.414 1.414zM17 2h2v4h-2zm1 6a6.037 6.037 0 0 0-1 .09v2.052A3.957 3.957 0 0 1 18 10a4 4 0 0 1 0 8v2a6 6 0 0 0 0-12zm-8 12.184V7H8v13.184a3 3 0 1 0 2 0z"></path>
                            <path fill="#000000" d="M9 30a6.993 6.993 0 0 1-5-11.89V7a5 5 0 0 1 10 0v11.11A6.993 6.993 0 0 1 9 30ZM9 4a3.003 3.003 0 0 0-3 3v11.983l-.332.299a5 5 0 1 0 6.664 0L12 18.983V7a3.003 3.003 0 0 0-3-3Z"></path>
                        </svg>
                    </div>
                    <div className="rainyIcon">
                        <svg width="2em" height="2em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" >
                            <path fill="#000000" d="M8 0a.5.5 0 0 1 .5.5v.514C12.625 1.238 16 4.22 16 8c0 0 0 .5-.5.5c-.149 0-.352-.145-.352-.145l-.004-.004l-.025-.023a3.484 3.484 0 0 0-.555-.394A3.166 3.166 0 0 0 13 7.5c-.638 0-1.178.213-1.564.434a3.484 3.484 0 0 0-.555.394l-.025.023l-.003.003s-.204.146-.353.146s-.352-.145-.352-.145l-.004-.004l-.025-.023a3.484 3.484 0 0 0-.555-.394a3.3 3.3 0 0 0-1.064-.39V13.5H8h.5v.039l-.005.083a2.958 2.958 0 0 1-.298 1.102a2.257 2.257 0 0 1-.763.88C7.06 15.851 6.587 16 6 16s-1.061-.148-1.434-.396a2.255 2.255 0 0 1-.763-.88a2.958 2.958 0 0 1-.302-1.185v-.025l-.001-.009v-.003s0-.002.5-.002h-.5V13a.5.5 0 0 1 1 0v.506l.003.044a1.958 1.958 0 0 0 .195.726c.095.191.23.367.423.495c.19.127.466.229.879.229s.689-.102.879-.229c.193-.128.328-.304.424-.495a1.958 1.958 0 0 0 .197-.77V7.544a3.3 3.3 0 0 0-1.064.39a3.482 3.482 0 0 0-.58.417l-.004.004S5.65 8.5 5.5 8.5c-.149 0-.352-.145-.352-.145l-.004-.004a3.482 3.482 0 0 0-.58-.417A3.166 3.166 0 0 0 3 7.5c-.638 0-1.177.213-1.564.434a3.482 3.482 0 0 0-.58.417l-.004.004S.65 8.5.5 8.5C0 8.5 0 8 0 8c0-3.78 3.375-6.762 7.5-6.986V.5A.5.5 0 0 1 8 0zM6.577 2.123c-2.833.5-4.99 2.458-5.474 4.854A4.124 4.124 0 0 1 3 6.5c.806 0 1.48.25 1.962.511a9.706 9.706 0 0 1 .344-2.358c.242-.868.64-1.765 1.271-2.53zm-.615 4.93A4.16 4.16 0 0 1 8 6.5a4.16 4.16 0 0 1 2.038.553a8.688 8.688 0 0 0-.307-2.13C9.434 3.858 8.898 2.83 8 2.117c-.898.712-1.434 1.74-1.731 2.804a8.687 8.687 0 0 0-.307 2.131zm3.46-4.93c.631.765 1.03 1.662 1.272 2.53c.233.833.328 1.66.344 2.358A4.14 4.14 0 0 1 13 6.5c.77 0 1.42.23 1.897.477c-.484-2.396-2.641-4.355-5.474-4.854z"></path>
                        </svg>
                    </div>
                    <div className="windyIco">
                        <svg width="2em" height="2em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                            <path fill="black" d="M11.5 20q-1.25 0-2.125-.875T8.5 17h2q0 .425.288.713T11.5 18q.425 0 .713-.288T12.5 17q0-.425-.288-.713T11.5 16H2v-2h9.5q1.25 0 2.125.875T14.5 17q0 1.25-.875 2.125T11.5 20ZM2 10V8h13.5q.65 0 1.075-.425T17 6.5q0-.65-.425-1.075T15.5 5q-.65 0-1.075.425T14 6.5h-2q0-1.475 1.012-2.488T15.5 3q1.475 0 2.488 1.012T19 6.5q0 1.475-1.012 2.488T15.5 10H2Zm16.5 8v-2q.65 0 1.075-.425T20 14.5q0-.65-.425-1.075T18.5 13H2v-2h16.5q1.475 0 2.488 1.012T22 14.5q0 1.475-1.012 2.488T18.5 18Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="currentTemp">
                <div className="morning tempCon">
                    <div className="morningIcon icon"><img src={icon} alt="" /></div>
                    <div className="temp">
                        <p className="degree">20&deg;</p>
                        <p className="tempTime">Morning</p>
                    </div>
                </div>
                <div className="afternoon tempCon">
                    <div className="afternoonIcon icon"><img src={icon} alt="" /></div>
                    <div className="temp">
                        <p className="degree">30&deg;</p>
                        <p className="tempTime">Afternoon</p>
                    </div>
                </div>
                <div className="evening tempCon">
                    <div className="eveningIcon icon"><img src={icon} alt="" /></div>
                    <div className="temp">
                        <p className="degree">40&deg;</p>
                        <p className="tempTime">Evening</p>
                    </div>
                </div>
                <div className="night tempCon">
                    <div className="nightIcon icon"><img src={icon} alt="" /></div>
                    <div className="temp">
                        <p className="degree">50&deg;</p>
                        <p className="tempTime">Night</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodayTemp;