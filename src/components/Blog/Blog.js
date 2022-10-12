import React from 'react';

const Blog = () => {
    return (
        <div className='container bg-info p-3 rounded'>
            <h3 className='mt-5'>What is the purpuse of react router?</h3>
            <p className='mb-5'> <span className='fw-bolder '>Ans:</span>  Those who need a client-side router, need it for state management. Say you have server-rendered pages, but with some client-side widgets - e.g. a calendar, set of filters or collapsed or open sidebar. Router helps you initialize these components of the page in the exact state you want them. Granted, you could do most of it and all of the use cases I've named on the server, too. But it's usually a lot easier to handle these on the client. You might render it faster on the server, but sometimes, especially when doing partial page updates, it's cheaper and faster to handle that client-side.</p>

            <h3 className='mt-3'>How does context api work?</h3>
            <p className='mb-5'> <span className='fw-bolder '>Ans:</span>  The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.Context is also touted as an easier, lighter approach to state management using Redux.   React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>

            <h3 className='mt-3'>What is useRef in react?</h3>
            <p className='mb-5'> <span className='fw-bolder '>Ans:</span> The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. 
</p>
 <h6>Syntax:</h6>
 <p>const refContainer = useRef(initialValue);</p>
 <p>

The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
           
        </div>
    );
};

export default Blog;