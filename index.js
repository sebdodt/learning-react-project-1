/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/
// ReactDOM.render(
//     <ul><li>Thing 1</li><li>Thing 2</li></ul>,
//     document.getElementById("root")
// )

// import ReactDOM from "react-dom/client"
// import React from "react"
// import { createRoot } from "react"

// const navbar = (
//     <nav>Navigation Bar
//         <h1 className = 'header'>website</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// const page = (
//     <div>
//         <h1>My awesome website in React</h1>
//         <h3>Reasons I love React</h3>
//         <ol>
//             <li>It's composable</li>
//             <li>It's declarative</li>
//             <li>It's a hireable skills</li>
//         </ol>
//     </div>
// )

// ReactDOM.render(page, document.getElementById('root'))

// // const root = ReactDOM.createRoot(document.getElementById("root"))
// // root.render(page)



// import React from "react"
// import ReactDOM from "react-dom"

const page = (
    <div>
        <img src="./react-logo.png" width = "40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
        </ul>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))