import React, { Component } from 'react'

const  Square =  ({ squareValue, handleSquareClick } ) => {

        return (
        <button className="square"
            onClick={() => handleSquareClick()}
        >
            { squareValue }
        </button>
        )
}

export default Square;


