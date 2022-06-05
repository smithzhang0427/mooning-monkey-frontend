import {connect} from 'react-redux'

import './index.scss';
import ContainerComponent from "../../../components/ContainerComponent";
import PlayerCell from "./PlayerCell.js";

const Players = (props) => {
    const {allBets, gameResult} = props;
    return (
        <ContainerComponent>
            <div className="players">
                <div>
                    <div className="title">players</div>
                    <div className="player-table">
                        <table className="table">
                            <tr>
                                <th className="h-player">Players: {allBets.length}</th>
                                <th className="h-wager">Wager</th>
                                <th className="h-multi">Multiplayer</th>
                                <th className="h-payout">Payout</th>
                            </tr>
                            {
                                allBets.length > 0 &&
                                allBets.map((data, index) => 
                                    <PlayerCell p_address="" p_name={data.username} wager={data.amount} mulitplayer={data.multiplier} payout="+$2.50" gameResult={gameResult} pay_type="bnb1"/>
                                )
                            }
                        </table>
                    </div>
                </div>
                <div className="total-info">
                    <div>Online: 816</div>
                    <div>Playing: 455</div>
                    <div>Total Bet Amount: $23, 000</div>
                </div>
            </div>
            
        </ContainerComponent>
    );
}

const mapStateToProps  = (state) => (
    {
        allBets: state.betGameData.allBets,
        gameResult: state.betGameData.gameResult 
    }
)

export default connect(mapStateToProps, {})(Players)