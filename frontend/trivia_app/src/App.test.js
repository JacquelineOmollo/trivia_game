import { render, screen } from '@testing-library/react';
import App from './App';

import '@testing-library/jest-dom';
import Questions from './components/Questions';

describe("Checking json data", () => {
    test("Data has question and answer", () => {
        const data = { question: "What was Tandem previous name?"};
        data["incorrect"] = "Burger Shack"
        expect(data).toStrictEqual({question:"What was Tandem previous name?", incorrect: "Burger Shack"  });
    });

    test("Data has correct answer", () => {
      const option = {correct: "Devmynd"}
      expect(option).toStrictEqual({correct:"Devmynd"});
    })
    
})

describe("App", () => {
  test("Qustion", ()=>{
    const state = {quiz: []}
    expect(state).toEqual({quiz})
  })
})