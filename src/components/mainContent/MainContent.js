import React, { Component } from 'react';
import Block from '../block/Block';

const blockdata=[
    "Declarative",
    "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    "Declarative views make your code more predictable and easier to debug."
]

const blockdata2=[
    "Component Based",
    "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    "Declarative views make your code more predictable and easier to debug."
]

const blockdata3=[
    "Learn once write anywhere",
    "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    "Declarative views make your code more predictable and easier to debug."
]
    // {name:"Component-Based",
    //     text1:'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
    //     text1:"Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."
    // },
//     { name:"Learn Once, Write Anywhere",
//         text1:"We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.",
//         text1:"React can also render on the server using Node and power mobile apps using React Native."
//     }
// ]    
class MainContent extends Component {
    render() {
        return (
            <>
                <div className="row blockClass">
                    <Block data={blockdata}/>
                    <Block data={blockdata2}/>
                    <Block data={blockdata3}/>
                </div>
            </>
        );
    }
}

export default MainContent;