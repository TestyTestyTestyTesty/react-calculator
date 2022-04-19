import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  StyledCalculator,
  StyledFields,
  StyledField,
  StyledInput,
} from "./Styles/StyledCalculator";

export default function Calculator() {
  const [currentVal, setCurrentVal] = useState(0);
  const [previousVal, setPreviousVal] = useState(0);
  const [actionType, setActionType] = useState(null);

  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = currentVal;
  }, [currentVal]);

  const handleChange = useCallback(
    (val) => {
      if (currentVal === 0) {
        setCurrentVal(val);
      } else {
        setCurrentVal((prevCount) => {
          const curr = prevCount.toString() + val;
          return parseFloat(curr);
        });
      }
    },
    [currentVal]
  );
  const handleOpposite = () => {
    setCurrentVal((prevCount) => prevCount * -1);
  };
  const handleFloat = useCallback(() => {
    //check if there is already comma in number
    if (!currentVal.toString().includes(".")) {
      setCurrentVal((prevCount) => {
        const curr = prevCount.toString(10) + ".";
        return curr;
        //return parseInt(curr, 10);
      });
    }
  }, [currentVal]);
  const handleClear = useCallback(() => {
    setCurrentVal(0);
    setPreviousVal(0);
    setActionType(null);
  },[]);
  const handleBack = useCallback(() => {
    setCurrentVal((prevCount) => {
      //if number has only one character after backspace change to
      if (prevCount.toString().length === 1) return 0;
      const curr = prevCount.toString(10).slice(0, -1);
      return parseFloat(curr);
    });
  }, []);
  const handleAction = useCallback(
    (val) => {
      setPreviousVal(currentVal);
      setCurrentVal("");
      setActionType(val);
    },
    [currentVal]
  );
  const handleEquation = useCallback(() => {

    switch (actionType) {
      case "*":
        setCurrentVal(previousVal * currentVal);
        break;
      case "/":
        setCurrentVal(previousVal / currentVal);
        break;
      case "+":
        setCurrentVal(previousVal + currentVal);
        break;
      case "-":
        setCurrentVal(previousVal - currentVal);
        break;
      default:
        break;
    }
  }, [actionType, previousVal, currentVal]);

  useEffect(() => {
    const onKeyDown = (e) => {
      switch (e.key) {
        case "0":
          handleChange(parseInt(e.key));
          break;
        case "1":
          handleChange(parseInt(e.key));
          break;
        case "2":
          handleChange(parseInt(e.key));
          break;
        case "3":
          handleChange(parseInt(e.key));
          break;
        case "4":
          handleChange(parseInt(e.key));
          break;
        case "5":
          handleChange(parseInt(e.key));
          break;
        case "6":
          handleChange(parseInt(e.key));
          break;
        case "7":
          handleChange(parseInt(e.key));
          break;
        case "8":
          handleChange(parseInt(e.key));
          break;
        case "9":
          handleChange(parseInt(e.key));
          break;
        case "/":
          handleAction(e.key);
          break;
        case "*":
          handleAction(e.key);
          break;
        case "-":
          handleAction(e.key);
          break;
        case "+":
          handleAction(e.key);
          break;
        case "Enter":
          handleEquation();
          break;
        case "Delete":
          handleClear();
          break;
        case ",":
        case ",":
        case ".":
          handleFloat();
          break;
        case "Backspace":
          handleBack();
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [handleChange, handleAction, handleEquation,handleClear, handleBack, handleFloat]);

  return (
    <StyledCalculator>
      <StyledInput type="text" value={currentVal} readOnly />
      <StyledFields>
        <StyledField onClick={handleClear}>C</StyledField>
        <StyledField onClick={handleClear}>CE</StyledField>
        <StyledField onClick={handleBack}>Back</StyledField>
        <StyledField onClick={() => handleAction("/")}>/</StyledField>
        <StyledField onClick={() => handleChange(7)}>7</StyledField>
        <StyledField onClick={() => handleChange(8)}>8</StyledField>
        <StyledField onClick={() => handleChange(9)}>9</StyledField>
        <StyledField onClick={() => handleAction("*")}>x</StyledField>
        <StyledField onClick={() => handleChange(4)}>4</StyledField>
        <StyledField onClick={() => handleChange(5)}>5</StyledField>
        <StyledField onClick={() => handleChange(6)}>6</StyledField>
        <StyledField onClick={() => handleAction("-")}>-</StyledField>
        <StyledField onClick={() => handleChange(1)}>1</StyledField>
        <StyledField onClick={() => handleChange(2)}>2</StyledField>
        <StyledField onClick={() => handleChange(3)}>3</StyledField>
        <StyledField onClick={() => handleAction("+")}>+</StyledField>
        <StyledField onClick={handleOpposite} disabled={currentVal === 0}>
          +/-
        </StyledField>
        <StyledField
          onClick={() => handleChange(0)}
          disabled={typeof previousVal !== "undefined" && actionType === "/"}
        >
          0
        </StyledField>
        <StyledField onClick={handleFloat}>.</StyledField>
        <StyledField onClick={handleEquation}>=</StyledField>
      </StyledFields>
    </StyledCalculator>
  );
}
