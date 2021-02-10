import "./Main.css"
import hello from "../../asset/image3.css"
import Chart from "../charts/Charts"

const Main = () => {
    return (
        <main>
            <div className="main__container">
                <img src={hello} alt="hello" />
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
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>

                    </div>
                </div>
                <div className="cards">
                    <i className="fa fa-user-o fa-2x text-lightblue"></i>
                    <div className="card_inner">                        
                        <p className="text-primary-p">number of subscribers</p>                        
                        <span className="font-bold text-title"> 849</span>
                    </div>
                </div>
                <div className="cards">
                    <i className="fa fa-user-o fa-2x text-lightblue"></i>
                    <div className="card_inner">                        
                        <p className="text-primary-p">number of subscribers</p>                        
                        <span className="font-bold text-title"> 849</span>
                    </div>
                </div>
                <div className="cards">
                    <i className="fa fa-user-o fa-2x text-lightblue"></i>
                    <div className="card_inner">                        
                        <p className="text-primary-p">number of subscribers</p>                        
                        <span className="font-bold text-title"> 849</span>
                    </div>
                </div>
            </div>
        </main>
    )
}