import React from 'react';

const Blog = () => {
    return (
        <div>


            <div className='my-container container'>
                <div className='jobDetails p-14 mx-auto bg-gray-200 mb-12'>
                    <p className=' text-2xl font-bold'></p>
                </div>

                <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
                    <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>

                    </div>
                </div>
                <div className='max-w-screen-xl sm:mx-auto'>
                    <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2'>
                        <div className='space-y-8'>
                            <div>
                                <h3 className='mb-4 text-xl font-medium'>
                                    Tell us the differences between uncontrolled and controlled components
                                </h3>
                                <p className='text-gray-700'>
                                    In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                                    <br />
                                </p>
                            </div>
                            <div>
                                <h3 className='mb-4 text-xl font-medium'>
                                    How to validate React props using PropTypes
                                </h3>
                                <p className='text-gray-700'>
                                    Props and PropTypes are important mechanisms for passing read-only attributes between React components.

                                    We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.
                                    <br />
                                    With React props, you can send data to a component when you call on that component, including numbers, strings, functions, objects, and arrays. If you have multiple components, you can pass data from one component to another.

                                    To pass props between components, you can add them when the component is called, just like you would pass arguments when calling on a regular JavaScript function.
                                    <br />

                                </p>
                            </div>

                        </div>
                        <div className='space-y-8'>
                            <div>
                                <h3 className='mb-4 text-xl font-medium'>
                                    Tell us the difference between nodejs and express js.
                                </h3>
                                <p className='text-gray-700'>
                                    serve different purposes and have different features. Here are some key differences between the two:

                                    Node.js:
                                    Node.js is a runtime environment for executing JavaScript outside of a web browser. It provides an event-driven, non-blocking I/O model that makes it well-suited for building scalable network applications. With Node.js, you can build server-side applications, command-line tools, and even desktop applications.

                                    Express.js:
                                    Express.js is a web application framework built on top of Node.js. It provides a set of tools and features for building web applications, such as routing, middleware, and template rendering. Express.js is designed to be lightweight and flexible, allowing developers to build web applications of various sizes and complexities.
                                    <br />
                                    <br />

                                </p>
                            </div>
                            <div>
                                <h3 className='mb-4 text-xl font-medium'>
                                    What is a custom hook, and why will you create a custom hook?
                                </h3>
                                <p className='text-gray-700'>
                                    In React, a custom hook is a JavaScript function that starts with the prefix use and uses one or more of the built-in React hooks, such as useState, useEffect, useContext, and so on. Custom hooks allow you to encapsulate reusable logic that can be shared across multiple components, allowing for more modular and reusable code.
                                    <br />

                                    <br />

                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Blog;