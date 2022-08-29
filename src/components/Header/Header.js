import React from "react";

const questions = [
   'What is your name?',
   'What is your surname?',
]

const answers = [
    {
        "answers": [
          "hgffhg",
          "fjhfjf"
        ],
        "employeeId": "1bdf12e1-d686-45a3-bc59-86fa6b7b46bf",
        "isAccomplished": false
    },
    {
        "answers": [
          "hgffhg",
          "fjhfjf"
        ],
        "employeeId": "1bdf12e1-d686-45a3-bc59-86fa6b7b46bf",
        "isAccomplished": false
    },
    {
        "answers": [
          "hgffhg",
          "fjhfjf"
        ],
        "employeeId": "1bdf12e1-d686-45a3-bc59-86fa6b7b46bf",
        "isAccomplished": false
    },
]
const Header = ({ title, description }) => {
    return (
        <div data-testid="header">
            <h2 data-testid="heading">{title}</h2>
            <p data-testid="paragraph">{description}</p>
            <ul>
                {answers.map((a, i) => 
                    <li>
                        {
                            questions.map((q, j) => <div>{q}: {a.answers[j]}</div>)
                        }
                        isAccomplished: {a.isAccomplished}
                        {a.employeeId}
                    </li>
                    )}
            </ul>
        </div>
    )
}

export default Header;