import React from "react";

const Blog = () => {
  return (
    <div className="bg-white ">
      <h1 className="font-bold text-3xl my-6">Blog</h1>
      <div className="gap-y-6 ">
        <p className="font-bold my-4">
          When should you use context API? <br />
          <span className="font-semibold">
            Context API is a feature of React that allows data to be passed down
            the component tree without having to manually pass props at every
            level. It can be useful in situations where multiple components need
            access to the same data or functionality, but are not directly
            connected in the component hierarchy. Context API is particularly
            useful for managing global state in a React application. For
            example, if you have an authentication system that needs to be
            accessed by multiple components throughout your application, you can
            use Context API to provide that data to all components that need it.
            In general, if you find yourself passing props down several levels
            of the component tree, or if you have data that needs to be shared
            across multiple components, Context API may be a good choice for
            managing that data. However, it's important to note that overuse of
            Context API can lead to a complex and difficult-to-manage codebase,
            so it should be used judiciously.
          </span>
        </p>
        <p className="font-bold  my-4">
          What is a custom hook? <br />
          <span className="font-semibold">
            In React, a custom hook is a JavaScript function that uses the
            existing React hooks (such as useState, useEffect, useContext, etc.)
            to create a reusable piece of logic. Custom hooks allow you to
            encapsulate and reuse stateful logic across multiple components in
            your application. They are typically prefixed with the word "use" to
            denote that they follow the rules of React hooks. Custom hooks are
            particularly useful when you have complex stateful logic that you
            want to reuse across multiple components, or when you want to
            abstract away some of the complexity of a particular feature or
            behavior. By encapsulating this logic in a custom hook, you can
            reduce duplication in your code and make your components more
            focused on their specific responsibilities. To use a custom hook,
            you simply import it like any other JavaScript function and call it
            in your component. The custom hook will then return any state or
            other values that you need to use in your component.
          </span>
        </p>
        <p className="font-bold  my-4">
          What is useRef? <br />
          <span className="font-semibold">
            In React, useRef is a hook that provides a way to store a mutable
            value that persists across component renders. It creates a reference
            to a DOM element or any other value and returns an object with a
            current property that initially points to the value passed as an
            argument (or null if no argument is passed). The main use case for
            useRef is to access DOM elements or values inside a component
            without triggering a re-render. This is because updating the current
            property of the ref object does not cause a re-render of the
            component. For example, you can use useRef to get the value of an
            input element, or to store a reference to a canvas element in a
            game. Another use case for useRef is to store values that persist
            between function calls, but are not part of the component state.
            This can be useful for storing a value that needs to be updated by
            an event handler or other asynchronous function, but should not
            cause a re-render of the component.
          </span>
        </p>
        <p className="font-bold  my-4">
          What is useMemo? <br />
          <span className="font-semibold">
            n React, useMemo is a hook that is used to memoize a computationally
            expensive function, so that it is only re-computed when its
            dependencies change. It returns a memoized value that is only
            recalculated when one of the dependencies has changed. Memoization
            is a technique that can be used to optimize the performance of React
            components. It involves caching the results of a function call, so
            that it doesn't have to be re-computed every time the component
            renders. This can be especially useful for expensive calculations or
            functions that are called frequently.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Blog;
