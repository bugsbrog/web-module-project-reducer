import React, { useReducer } from 'react';
import reducer, { initialState } from './../reducers/index';
import './App.css';
import { applyNumber, changeOperation, clearDisplay } from '../actions/index';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleApplyNum = (num) => {
    dispatch(applyNumber(num))
  }

  const handleChangeOp = (operator) => {
    dispatch(changeOperation(operator))
  }

  const handleClear = () => {
    dispatch(clearDisplay())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNum(1)} value={1}/>
              <CalcButton onClick={() => handleApplyNum(2)} value={2}/>
              <CalcButton onClick={() => handleApplyNum(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNum(4)} value={4}/>
              <CalcButton onClick={() => handleApplyNum(5)} value={5}/>
              <CalcButton onClick={() => handleApplyNum(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNum(7)} value={7}/>
              <CalcButton onClick={() => handleApplyNum(8)} value={8}/>
              <CalcButton onClick={() => handleApplyNum(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleChangeOp("+")} value={"+"}/>
              <CalcButton onClick={() => handleChangeOp("*")} value={"*"}/>
              <CalcButton onClick={() => handleChangeOp("-")} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton
                  onClick={() => handleClear("CE")} value={"CE"}/>
            {/* Could also do it like this
            onClick={handleClear} value={"CE"}/>*/}
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
