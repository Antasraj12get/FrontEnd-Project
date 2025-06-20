import React from 'react';
import { useState } from 'react';

const Calculator = () => {

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (height === 0 || weight === 0) {
            alert("You can't leave this box as 0")
        } else {
            let bmicalc = weight / ((height / 100) * (height / 100));
            setBmi(bmicalc.toFixed(1))

            // if (bmicalc <= 25) {
            //     setMessage("man you are underWeight 😂🤣😒")
            // } else if (bmicalc >= 25 && bmicalc <= 30) {
            //     setMessage(" ohh! you are fittest guy")
            // } else {
            //     setMessage("you are overWeight")
            // }
            if (bmicalc <= 18.5) {
                setMessage("You are underweight 😂🤣😒");
            } else if (bmicalc > 18.5 && bmicalc <= 24.9) {
                setMessage("Ohh! You are a fittest guy 💪");
            } else if (bmicalc >= 25 && bmicalc <= 29.9) {
                setMessage("You are overweight 😅");
            } else {
                setMessage("You are obese 😬");
            }
        }

    }
    const reload = () => {
        setHeight(0);
        setWeight(0);
        setBmi('');
        setMessage('');
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">BMI Calculator</h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Height (cm)</label>
                        <input
                            type="text"
                            placeholder="Enter height"
                            onChange={(e) => setHeight(Number(e.target.value))}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Weight (kg)</label>
                        <input
                            type="text"
                            onChange={(e) => setWeight(Number(e.target.value))}
                            placeholder="Enter weight"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex gap-2">
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            className="w-full bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400 transition"
                            onClick={reload}
                        >
                            Reload
                        </button>
                    </div>
                </form>

                <div className="mt-5 text-center">
                    <span className="block text-gray-600 text-sm">Your BMI is:</span>
                    <p className="text-xl font-bold text-indigo-600 mt-1">{bmi}</p>
                    <p className="text-gray-500 text-sm mt-1">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
