import "./Main.css"
import hello from "../../asset/image3.jpg"
import Chart from "../charts/Charts"

const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img width="30px" src={hello} alt="hello" />
                    <div className="main__greeting">
                        <h1>hello codebites</h1>
                        <p>welome to admin dashboard</p>
                    </div>
                </div>
                <div className="main_cards">
                    <div className="cards">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">                        
                            <p className="text-primary-p">Registered companies</p>                        
                            <span className="font-bold text-title"> 849</span>                        
                        </div>            
                    </div>
                    <div className="cards">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">                        
                            <p className="text-primary-p">Registered companies</p>                        
                            <span className="font-bold text-title"> 849</span>                        
                        </div>
                    </div>
                    <div className="cards">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">                        
                            <p className="text-primary-p">Registered companies</p>                        
                            <span className="font-bold text-title"> 849</span>                        
                        </div>
                    </div>
                    <div className="cards">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">                        
                            <p className="text-primary-p">Registered companies</p>                        
                            <span className="font-bold text-title"> 849</span>                        
                        </div>
                    </div>
                </div>
                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Cupertino, Califonia, USA</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>
                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Stats Reports</h1>
                                <p>Cupertino, Califonia, USA</p>                                
                            </div>
                            <i className="fa fa-usa"></i>
                        </div>
                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Income</h1>
                                <p>$75,300</p>
                            </div>
                            <div className="card2">
                                <h1>Sales</h1>
                                <p>$124,200</p>
                            </div>
                            <div className="card3">
                                <h1>Users</h1>
                                <p>$3900</p>
                            </div>
                            <div className="card4">
                                <h1>Orders</h1>
                                <p>$1818</p>
                            </div>
                        </div>
                    </div>    
                </div>                
            </div>
        </main> 
    )
}

export default Main;